---
title: Test your integration
excerpt: What the sandbox does, the ten cases to run, and the data you need for each.
deprecated: false
hidden: true
metadata:
  robots: index
---
The sandbox validates every field and returns every error on the [Errors](doc:china-payouts-errors) page. It does not move money.

| The sandbox does                                    | The sandbox does not                                             |
| :-------------------------------------------------- | :--------------------------------------------------------------- |
| Validate the request and return each error.         | Send the payout to the payment partner.                          |
| Return the sender, counterparty and payout objects. | Send a payout webhook.                                           |
| Run the sender verification flow.                   | Check the IP allow-list or the Know Your Business status.        |
| Accept either processing mode.                      | Settle a payment, so neither mode shows a settlement difference. |

Point your client at `https://sandboxapi.fincra.com`. The two party calls sit under the `/global-payouts` prefix.

## Run these ten cases

Run each case before you go live. Most are error paths, because those are the paths that break in production.

| #  | Case                                                                    | Expected result                                                                                        |
| :- | :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 1  | A business sender with the four documents.                              | `sender.updated` arrives with `approved`.                                                              |
| 2  | A Chinese business counterparty with a valid 18-character code.         | `counterparty.updated` arrives with `active`.                                                          |
| 3  | A Chinese individual counterparty with a resident identity card number. | `status` reaches `active`.                                                                             |
| 4  | A payout with one order and the invoice attached.                       | `status` is `processing`.                                                                              |
| 5  | A `payroll_salary` payout with one of the two documents.                | `status` is `documents_required`, and `documentsRequired` holds `payroll_schedule`.                    |
| 6  | Case 5, then one upload of the second document.                         | `status` moves to `processing`.                                                                        |
| 7  | A payout with `paymentScheme` absent.                                   | 422 `COUNTERPARTY_TYPE_MISMATCH`.                                                                      |
| 8  | Three orders whose CNY amounts do not add up to the payout amount.      | The sum error.                                                                                         |
| 9  | A second payout that repeats a `customerReference`.                     | The duplicate reference error.                                                                         |
| 10 | A payout against a counterparty that is still `pending`.                | 422 `COUNTERPARTY_PENDING_VERIFICATION`.                                                               |
| 11 | One payout on each processing mode.                                     | Both are accepted. The sandbox does not settle, so check only that your request is valid on each mode. |

## Test data you must supply

The sandbox validates the Chinese formats, so your test data must be well formed. Use these shapes.

| Field                         | Shape                                      | Example shape         |
| :---------------------------- | :----------------------------------------- | :-------------------- |
| Counterparty name, business   | Chinese characters, digits and parentheses | 深圳市华强电子（集团）有限公司       |
| Counterparty name, individual | Chinese characters                         | 王伟                    |
| `registrationNumber`          | 18 characters, upper case                  | `91440300MA5EX12345`  |
| `document.number`             | An 18-digit resident identity card number  | `330106199211030011`  |
| `phone`                       | A Chinese mobile number                    | `+8613800138000`      |
| `cnapsCode`                   | The CNAPS code of the branch               | `102584000004`        |
| `accountNumber`               | A Chinese bank account number              | `6222020200112233445` |

<Callout icon="🚧" theme="warn">
  ### These are format examples, not live test accounts

  The values above pass validation. They are not registered test accounts, so case 2 and case 3 depend on the sandbox partner response. Ask your account manager for the sandbox account numbers that reach `active` on demand.
</Callout>

## Reaching a failed payout

The sandbox does not send the payout to the partner, so no sandbox payout reaches `successful` or `failed`. Test your handling of those two statuses against your own webhook fixture.

```json Successful
{
  "event": "payout.successful",
  "data": {
    "reference": "PO-8f3a2c1d",
    "customerReference": "PAY-2026-000123",
    "status": "successful",
    "amount": 5000000,
    "sourceCurrency": "NGN",
    "destinationCurrency": "CNY"
  }
}
```

Confirm the exact webhook body against [Payout Webhook](doc:payout-webhook) before you build against this shape.

## Before you go live

- Your sender is `approved` and your counterparty is `active`.
- You send `senderId`, `paymentScheme` and `paymentDestination` on every payout.
- You send `additionalPayoutDetails` in the shape the purpose selects.
- Your `customerReference` is unique, and you reuse it on a retry.
- You handle `documents_required` and upload the rest.
- You handle the late sum error on a conversion with many orders.
- You match each webhook on the payout reference.
- You ran the ten cases above.

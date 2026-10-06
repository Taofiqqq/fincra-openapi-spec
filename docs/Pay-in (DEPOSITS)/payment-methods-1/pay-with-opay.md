---
title: Pay With Opay
deprecated: false
hidden: true
metadata:
  robots: index
---
Pay with OPay lets your customers pay you straight from their OPay wallet. OPay is a Nigerian digital wallet with a large retail user base.<br /><br />The payment is redirect-based. You create the payment on Fincra, Fincra returns an OPay link, and your customer approves the debit inside OPay. OPay handles the login and security checks.<br /><br />**Availability**: NGN only.<br />**Environments**: Sandbox base URL is [https://api.dev.fincra.com](https://api.dev.fincra.com). <br />Sandbox redirects go to OPay's sandbox cashier at sandboxcashier.opaycheckout.com.

## How the payment works

An OPay payment takes four steps:

1. Create the payment. Send the amount, currency and customer details. Fincra returns a payCode, the reference for this payment.
2. Create the charge. Call the charge endpoint for that payCode with type: "opay". Fincra returns an OPay redirect link and the charge status pending.
3. Redirect the customer. Send the customer to the link. They log in to OPay and approve the debit.
4. Verify the transaction. Confirm the final status, amount and reference before you give value.

![](https://files.readme.io/e76a5e60d3f95b4c70814065350ffa9164cc6eb836c62503a304b24c939d8d44-image.png)

<br />

## Authentication

Every request in this guide carries three headers.

| Header         | Value                                                                      |
| -------------- | -------------------------------------------------------------------------- |
| `x-pub-key`    | Your public key. Sandbox keys start with `pk_test_`                        |
| `api-key`      | Your API key. Keep it on your server; never expose it in a browser or app. |
| `Content-Type` | `application/json`                                                         |

## Check OPay is enabled

OPay must be enabled on your account before you can charge with it. Check before you create a payment:<br />GET `/checkout-core/payments/available-methods?currency=NGN`

```json
["card", "bank_transfer", "palmpay", "opay"]
```

If `opay` is missing, requests return `403` with Access Denied. You're not authorized to access <Product> product. Ask your Fincra account manager to enable OPay.

## Step 1: Create the payment

Collect the customer's name, email and phone number, then create the payment.
POST `/checkout-core/payments`

| Field                   | Type   | Required | Description                                                                      |
| ----------------------- | ------ | -------- | -------------------------------------------------------------------------------- |
| `amount`                | number | Yes      | Amount to collect, in naira. `500` = NGN 500.                                    |
| `currency`              | string | Yes      | Must be `NGN`.                                                                   |
| `feeBearer`             | string | Yes      | Who pays the fee. `business` = you; `customer` = added to the customer's amount. |
| `customer.name`         | string | Yes      | Customer's full name.                                                            |
| `customer.email`        | string | Yes      | Customer's email address.                                                        |
| `customer.phoneNumber`  | string | Yes      | Customer's phone number, e.g. `08030000000`.                                     |
| `redirectUrl`           | string | No       | Where OPay returns the customer after payment. Must be a valid URL.              |
| `settlementDestination` | string | Yes      | Where Fincra settles the funds. `wallet` = your Fincra NGN wallet.               |
| `settlementTime`        | string | No       | When Fincra settles: `instant`, `next_day`, `t+3` or `end_of_week`.              |
| `reference`             | string | No       | Your own reference for the payment.                                              |
| `metadata`              | object | No       | Any data you want returned with the payment.                                     |

```shell
curl -X POST https://api.dev.fincra.com/checkout-core/payments \
  -H "x-pub-key: $PUBLIC_KEY" \
  -H "api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 500,
    "currency": "NGN",
    "feeBearer": "business",
    "customer": {
      "name": "OPay Demo",
      "email": "opay-demo@fincra.com",
      "phoneNumber": "08030000000"
    },
    "redirectUrl": "https://merchant.example.com/payment/complete",
    "settlementDestination": "wallet"
  }'
```
```json Response
{
  "status": true,
  "message": "Hosted link generated",
  "data": {
    "link": "https://checkout.dev.fincra.com/pay/fcr-p-123f5eeeef",
    "payCode": "fcr-p-123f5eeeef"
  }
}
```

Store `data.payCode. `You use it to create the charge in Step 2 and to match the payment later. The hosted data.link opens Fincra's checkout page. For a direct OPay integration, skip it and go to Step 2.

## Step 2: Create the OPay charge

Create a charge on the payment with `type: "opay"` The `type` field is what selects Pay with OPay.<br />POST `/checkout-core/payments/`{payCode}`/charge`

| Field            | Type   | Required | Description                |
| ---------------- | ------ | -------- | -------------------------- |
| `payCode `(path) | string | Yes      | The `payCode` from Step 1. |
| `type`           | string | Yes      | Must be opay.              |

```shell
curl -X POST https://api.dev.fincra.com/checkout-core/payments/fcr-p-123f5eeeef/charge \
  -H "x-pub-key: $PUBLIC_KEY" \
  -H "api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"type": "opay"}'
```
```json Response
{
  "status": true,
  "message": "Charge created",
  "data": {
    "id": 67588,
    "authorization": {
      "mode": "REDIRECT",
      "withCallback": true,
      "redirect": "https://sandboxcashier.opaycheckout.com/apiCashier/redirect/payment/cashier-list?orderToken=TOKEN.852760f84cb2462e973fd7eadc3542b0"
    },
    "auth_model": "REDIRECT",
    "amount": 500,
    "amountExpected": 500,
    "amountReceived": 0,
    "varianceType": null,
    "currency": "NGN",
    "fee": 20,
    "vat": 1.5,
    "electronicMoneyTransferLevy": 0,
    "message": "Awaiting payment approval in the OPay app",
    "actionRequired": null,
    "status": "pending",
    "reference": "fcr-p-123f5eeeef",
    "description": "checkout",
    "type": "opay",
    "customer": {
      "name": "OPay Demo",
      "email": "opay-demo@fincra.com",
      "phoneNumber": "08030000000"
    },
    "metadata": {}
  }
}
```

A new charge always returns status: "pending" and amountReceived: 0. The customer has not paid yet.

## Step 3: Redirect the customer to OPay

Send the customer to `data.authorization.redirect `from the charge response. `authorization.mode` is `REDIRECT` for every OPay charge.<br /><br />On the OPay page the customer:

1. Logs in to their OPay account.
2. Picks the OPay balance to pay from.
3. Approves the debit.

`authorization.withCallback: true` means OPay sends the customer back after they finish on the cashier page, instead of leaving them on OPay. They land on the redirectUrl you set in Step 1; you cannot set it on the charge call. A return to your site is not proof of payment, so verify first (Step 4).Step 4: Verify the transaction

Confirm the final status before you give value. You can do this two ways:

- Listen for the webhook Fincra sends when the charge reaches a final status.
- Query the payment status with its `reference` (the payCode).

Whichever you use, check all four before you give value:

- `status` is `successful`
- `reference` matches the `payCode` you stored in Step 1
- `amountReceived` equals `amountExpected`
- currency is `NGN`

If `amountReceived` and `amountExpected` differ, `varianceType` shows the direction of the difference.

## Charge response fields

| Field                       | Type           | Description                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------- |
| id                          | number         | Fincra's ID for the charge.                                               |
| authorization.mode          | string         | How the customer authorises. Always REDIRECT for OPay.                    |
| authorization.withCallback  | boolean        | true when the customer returns to your site after OPay.                   |
| authorization.redirect      | string         | OPay link to send the customer to.                                        |
| auth_model                  | string         | Same as authorization.mode.                                               |
| amount                      | number         | Payment amount, in naira.                                                 |
| amountExpected              | number         | Amount Fincra expects to collect, in naira.                               |
| amountReceived              | number         | Amount collected so far, in naira. 0 until the customer pays.             |
| varianceType                | string or null | Direction of any gap between expected and received. null when they match. |
| currency                    | string         | NGN.                                                                      |
| fee                         | number         | Fincra fee, in naira.                                                     |
| vat                         | number         | VAT on the fee, in naira.                                                 |
| electronicMoneyTransferLevy | number         | Electronic Money Transfer Levy, in naira.                                 |
| message                     | string         | Human-readable status, e.g. Awaiting payment approval in the OPay app.    |
| actionRequired              | string or null | Any action the customer must still take.                                  |
| status                      | string         | Charge status. pending on creation.                                       |
| reference                   | string         | The payCode from Step 1.                                                  |
| description                 | string         | Payment description.                                                      |
| type                        | string         | Payment method. opay.                                                     |
| customer                    | object         | Customer name, email and phone number.                                    |
| metadata                    | object         | Metadata attached to the payment.                                         |

## Step 4: Verify the transaction

Confirm the final status before you give value. Use the webhook, the status endpoint, or both.

### **Option A: Webhook**

Fincra sends a webhook when the `charge` reaches a final outcome. The event name is `charge`. plus the outcome:

| Event               | Meaning                      |
| ------------------- | ---------------------------- |
| `charge.successful` | The customer paid.           |
| `charge.failed`     | The charge did not complete. |

The envelope is {event, type, data}:&#x20;

```json
{
  "event": "charge.successful",
  "type": "charge",
  "data": {
    "id": 67578,
    "chargeReference": "fcr-op-567f85d07ec9093853637",
    "reference": "181fb6a1-2049-4052-893d-16dc2aa8c954",
    "status": "success",
    "type": "opay",
    "message": "Payment confirmed by OPay",
    "currency": "NGN",
    "amount": 500,
    "amountExpected": 500,
    "amountReceived": 500,
    "amountToSettle": 478.5,
    "fee": 20,
    "vat": 1.5,
    "electronicMoneyTransferLevy": 0,
    "varianceType": null,
    "actionRequired": null,
    "auth_model": "REDIRECT",
    "authorization": {
      "mode": "REDIRECT",
      "redirect": "https://sandboxcashier.opaycheckout.com/apiCashier/redirect/payment/cashier-list?orderToken=TOKEN.f7b58976d24849ee8e5d5075940bc369",
      "withCallback": true
    },
    "customer": {
      "name": "QA User",
      "email": "qa@fincra.com",
      "phoneNumber": "08012345678"
    },
    "description": "",
    "metadata": {}
  }
}
```

`data` also carries the charge fields listed under Charge response fields. Fincra sends webhooks to the callback URL in your business settings, and only when webhooks are enabled there.

| Field             | What to know                                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `chargeReference` | Identifies the charge. Pay with OPay charges start with fcr-op-.                                                              |
| `reference`       | A separate identifier. Do not use it in place of chargeReference.                                                             |
| `status`          | success on a paid charge, while the event name is charge.successful.                                                          |
| `amountToSettle`  | What Fincra settles to you, in naira: amount minus fee minus vat when feeBearer is business. Here 500 − 20 − 1.5 = NGN 478.5. |

Fincra sends webhooks to the callback URL in your business settings, and only when webhooks are enabled there.

### Option B: Status endpoint

GET `/checkout-core/payments/`{payCode}`/charges`

```json
{
  "status": true,
  "message": "Charges fetched",
  "data": [{
    "id": 67588,
    "type": "opay",
    "status": "failed",
    "amount": 500,
    "amountExpected": 500,
    "amountReceived": 500,
    "currency": "NGN",
    "fee": 20,
    "vat": 1.5,
    "message": "Order closed by merchant",
    "reference": "fcr-p-123f5eeeef",
    "authorization": {
      "mode": "REDIRECT",
      "withCallback": true,
      "redirect": "https://sandboxcashier.opaycheckout.com/..."
    },
    "customer": {},
    "metadata": {}
  }]
}
```

Use the plural `/charges `route. The singular `GET /checkout-core/payments/`{payCode}`/charge `only returns a charge still in progress. Once a charge fails or expires it returns `No charge found for this payment `with `data: null.` Use the singular route to resume a live charge, never to confirm an outcome.
`GET /checkout-core/payments/`{payCode} also works and returns the payment-level status and `amountReceived.`

### Status values

| Status                                                | Final? | Meaning                                                 |
| ----------------------------------------------------- | ------ | ------------------------------------------------------- |
| `success`                                             | Yes    | Paid. Give value after the checks below.                |
| `failed`                                              | Yes    | Did not complete.                                       |
| `expired`                                             | Yes    | The customer did not pay in time.                       |
| `rejected`                                            | Yes    | Declined.                                               |
| `initiated`, `pending`, `processing`                  | No     | Still in progress. Wait for the webhook or check again. |
| `reversal-initiated`,` awaiting-reversal`, `reversed` | —      | Reversal states after a payment.                        |
| `awaiting-capture`                                    | No     | Authorised, not yet captured.                           |

The charge `status` on success is `success`, but the webhook event is `charge.successful. `Check for the right word in each place.<br /><br />An expired OPay charge shows the charge as `failed` with message `Order closed by merchant,` and the payment as `expired`.

**Checks before you give value**<br />**&#xA;**• `status` is `success`
• `reference` matches `the payCode `you stored in Step 1
• `amountReceived `equals `amountExpected`
• currency is `NGN`<br />
If `amountReceived` and `amountExpected` differ, `varianceType` shows the direction of the difference.

### Charge response fields

| Field                       | Type           | Description                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------- |
| id                          | number         | Fincra's ID for the charge.                                               |
| authorization.mode          | string         | How the customer authorises. Always REDIRECT for OPay.                    |
| authorization.withCallback  | boolean        | true when the customer returns to your site after OPay.                   |
| authorization.redirect      | string         | OPay link to send the customer to.                                        |
| auth_model                  | string         | Same as authorization.mode.                                               |
| amount                      | number         | Payment amount, in naira.                                                 |
| amountExpected              | number         | Amount Fincra expects to collect, in naira.                               |
| amountReceived              | number         | Amount collected so far, in naira. 0 until the customer pays.             |
| varianceType                | string or null | Direction of any gap between expected and received. null when they match. |
| currency                    | string         | NGN.                                                                      |
| fee                         | number         | Fincra fee, in naira.                                                     |
| vat                         | number         | VAT on the fee, in naira.                                                 |
| electronicMoneyTransferLevy | number         | Electronic Money Transfer Levy, in naira.                                 |
| message                     | string         | Human-readable status, e.g. Awaiting payment approval in the OPay app.    |
| actionRequired              | string or null | Any action the customer must still take.                                  |
| status                      | string         | Charge status. pending on creation; see Status values in Step 4.          |
| reference                   | string         | The payCode from Step 1.                                                  |
| description                 | string         | Payment description.                                                      |
| type                        | string         | Payment method. opay.                                                     |
| customer                    | object         | Customer name, email and phone number.                                    |
| metadata                    | object         | Metadata attached to the payment.                                         |

## Errors

| HTTP | Cause                            | Response                                                                                                                                                    |
| ---- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | amount missing or below 1        | \["Amount cannot be less than 1", "amount should not be empty"]                                                                                             |
| 400  | customer.name is a single word   | Customer's full name is required                                                                                                                            |
| 400  | feeBearer not allowed            | \["feeBearer must be one of the following values: customer, business"]                                                                                      |
| 400  | Charge type not allowed          | \["type must be one of the following values: card, bank_transfer, payattitude, mobile_money, apple_pay, direct_debit, eft, palmpay, opay, wallet_transfer"] |
| 403  | OPay not enabled on your account | {"message": "Access Denied. You're not authorized to access <Product> product"}                                                                             |
| 404  | payCode not found                | {"message": "Payment not found", "error": "Not Found"}                                                                                                      |

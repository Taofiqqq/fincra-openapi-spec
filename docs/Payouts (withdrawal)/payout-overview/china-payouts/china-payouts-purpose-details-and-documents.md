---
title: Purpose, details and documents
excerpt: >-
  The purpose of fund decides the trade details you send and the documents
  Fincra needs
deprecated: false
hidden: false
metadata:
  robots: index
---
`purposeOfFund` Does three things on a China payout. It must come from the list below. It selects the shape of `additionalPayoutDetails`. It sets the documents that Fincra needs before it pays.

Read your purpose in the table, then build the two things in the row names.

## Every purpose CNY accepts

| `purposeOfFund`            | `additionalPayoutDetails` | Documents                                       |
| :------------------------- | :------------------------ | :---------------------------------------------- |
| `payroll_salary`           | Salary                    | `payment_service_agreement`, `payroll_schedule` |
| `employee_payroll`         | Salary                    | `payment_service_agreement`, `payroll_schedule` |
| `family_support`           | Salary                    | `evidence_of_relationship_to_beneficiary`       |
| `family_or_living_expense` | Salary                    | `evidence_of_relationship_to_beneficiary`       |
| `personal_transfer`        | Salary                    | `currency_exchange_agreement`                   |
| `goods_purchase`           | Orders                    | `invoice`                                       |
| `goods_trade`              | Orders                    | `invoice`                                       |
| `payment_for_goods`        | Orders                    | `invoice`                                       |
| `return_of_export_trade`   | Orders                    | `invoice`                                       |
| `merchant_settlement`      | Orders                    | `merchant_agreement`                            |
| `services_payment`         | Orders                    | `service_contract`                              |
| `services_trade`           | Orders                    | `service_contract`                              |
| `payment_for_services`     | Orders                    | `service_contract`                              |
| `professional_services`    | Orders                    | `service_contract`                              |
| `information_services`     | Orders                    | `service_contract`                              |
| `brokerage_services`       | Orders                    | `service_contract`                              |
| `transportation_services`  | Orders                    | `service_contract`                              |
| `construction_services`    | Orders                    | `construction_contract`                         |
| `advertising_marketing`    | Orders                    | `advertising_contract_award_letter`             |
| `software_purchase`        | Orders                    | `purchase_agreement`                            |

Any other purpose returns `purposeOfFund is not supported for CNY/CNH payouts`.

## The salary shape

Use it for the five salary and family purposes.

```json
{
  "additionalPayoutDetails": {
    "payerOccupation": "information_technology",
    "payerIndustry": "software_development"
  }
}
```

Both fields are required. Pick `payerOccupation` from the [occupation list](ref:payer-occupations) and `payerIndustry` from the [industry list](ref:counterparty-industries).

Do not send `orders` with a salary purpose. The endpoint rejects the request.

## The orders shape

Use it for the fifteen trade purposes. Send between 1 and 10 orders.

```json
{
  "additionalPayoutDetails": {
    "orders": [
      {
        "orderedAt": 1784544600000,
        "item": { "name": "LED display panels", "quantity": 250, "category": "electronics" },
        "platform": { "name": "Alibaba", "url": "https://hq-electronics.en.alibaba.com" },
        "logistics": { "company": "SF Express", "trackingNumber": "SF1234567890" }
      }
    ]
  }
}
```

| Field                             | Required  | Rules                                                     |
| :-------------------------------- | :-------- | :-------------------------------------------------------- |
| `orderedAt`                       | Yes       | An ISO 8601 date, or the epoch time in milliseconds.      |
| `item.name`                       | Yes       | The goods or the service.                                 |
| `item.quantity`                   | Yes       | A whole number from 1 to 999.                             |
| `item.category`                   | No        | An empty text is allowed.                                 |
| `platform.name` or `platform.url` | Yes       | `platform` is required. One of the two must hold a value. |
| `logistics.company`               | No        | The shipping company.                                     |
| `logistics.trackingNumber`        | No        | The tracking number.                                      |
| `amount`                          | See below | A positive number, in CNY.                                |

Do not send a trade type. Fincra derives it from the purpose.

### The amount rule

Every order amount is in CNY. Send CNY whatever the source currency of the payout. The amounts describe what the counterparty receives, not what your wallet is debited.

`amount` is optional on a single order, because the payout amount already covers it.

`amount` is required on every order when you send more than one. The sum must always equal the payout amount in CNY, within half a cent.

<Callout icon="🚧" theme="warn">
  ### A conversion checks the sum late

  On a same-currency payout, Fincra checks the sum at once and returns `The sum of order amounts (<total>) must equal the payout amount (<amount>)`.

  On a conversion, Fincra checks the sum after it resolves the quote. The request passes, then the payout fails with `The sum of order amounts (<total>) must equal the amount the beneficiary receives (<amount> <currency>).` Calculate the order amounts from the destination amount of the quote, not from the source amount.
</Callout>

## Send the documents

Send each document as one entry in the `files` array.

| Field                    | Required |
| :----------------------- | :------- |
| `files[n][documentType]` | Yes      |
| `files[n][file]`         | Yes      |

Fincra subtracts the types you sent from the types the purpose needs.

| Result            | Status               | What happens                                                  |
| :---------------- | :------------------- | :------------------------------------------------------------ |
| Nothing missing   | `processing`         | Fincra sends the payout to the partner.                       |
| Something missing | `documents_required` | Fincra holds the payout. `documentsRequired` names each type. |

## Upload a missing document

Call `POST /payouts/documents-upload` while the status is `documents_required`. Upload one document for each call.

```bash cURL
curl -X POST https://api.fincra.com/payouts/documents-upload \
  -H "api-key: $FINCRA_API_KEY" \
  -F "reference=PO-8f3a2c1d" \
  -F "type=payroll_schedule" \
  -F "name=July 2026 payroll schedule" \
  -F "files[file]=@payroll-schedule-july.pdf"
```
```python Python
import os, requests

res = requests.post(
    "https://api.fincra.com/payouts/documents-upload",
    headers={"api-key": os.environ["FINCRA_API_KEY"]},
    data={
        "reference": "PO-8f3a2c1d",
        "type": "payroll_schedule",
        "name": "July 2026 payroll schedule",
    },
    files={"files[file]": open("payroll-schedule-july.pdf", "rb")},
)
```

When the last document arrives, Fincra moves the payout to `processing` and sends it to the partner.

These upload errors return 422.

| Message                                                                          | Cause                                |
| :------------------------------------------------------------------------------- | :----------------------------------- |
| `Payout reference not found`                                                     | The reference does not exist.        |
| `Document already uploaded for this payout`                                      | The payout has every document.       |
| `Document not required for this payout`                                          | The purpose needs no document.       |
| `Invalid document type. Allowed types: <list>`                                   | `type` is not a known type.          |
| `Document type '<type>' is not required for this payout. Required types: <list>` | The purpose does not need this type. |
| `Document of type '<type>' has already been uploaded for this payout`            | You sent this type before.           |

Next: [Errors](doc:china-payouts-errors).

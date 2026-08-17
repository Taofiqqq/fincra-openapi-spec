---
title: Send a payout
excerpt: >-
  Pay an approved sender's money to an active China counterparty with POST
  /send.
deprecated: false
hidden: true
metadata:
  robots: index
---
Your sender is `approved`. Your counterparty is `active`. Now pay.

This page shows one payment: a business buys goods from a Chinese supplier and pays in CNY from a Nigerian naira wallet.

## Get a quote

A payout that converts a currency needs a quote. Send the reference of the quote in `quoteReference`. See [Conversions](doc:conversions).

A payout from a CNY wallet to CNY needs no quote.

## Choose a processing mode

Every payment carries a processing mode. Send it in the payout request.

| Mode    | When it settles                                      | What it suits                                                                         |
| :------ | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| Normal  | Business hours, Monday to Friday. Settlement is T+1. | Planned payments, such as a supplier invoice or a payroll run.                        |
| Instant | Any time, 24 hours a day, 7 days a week.             | Payments that cannot wait for the next business day, and weekend or holiday payments. |

Both modes pay a business bank account and an individual bank account. The mode does not limit the account type.

The fee depends on the mode and on the counterparty type, so a business account on Instant and an individual account on Normal carry different fees. Ask your account manager for your rate card.

<Callout icon="📘" theme="info">
  ### A Friday payment on Normal settles on the next business day

  Normal settles T+1 inside business hours from Monday to Friday. Choose Instant when the payment must leave on a weekend or a public holiday.
</Callout>

## Send the payout

The three values below are fixed for every China payout.

| Field                 | Value          |
| :-------------------- | :------------- |
| `destinationCurrency` | `CNY`          |
| `paymentScheme`       | `cnaps`        |
| `paymentDestination`  | `bank_account` |

```bash cURL
curl -X POST https://api.fincra.com/send \
  -H "api-key: $FINCRA_API_KEY" \
  -F "business=64a1f0c2e4b0a12345678901" \
  -F "sourceCurrency=NGN" \
  -F "destinationCurrency=CNY" \
  -F "amount=5000000" \
  -F "quoteReference=QTE-8842-XYZ" \
  -F "senderId=sndr_9f21c8a4b5d6e7f8" \
  -F "counterpartyId=cp_7a04b1c2d3e4f5a6b7c8d9e0" \
  -F "customerReference=PAY-2026-000123" \
  -F "paymentScheme=cnaps" \
  -F "paymentDestination=bank_account" \
  -F "purposeOfFund=goods_purchase" \
  -F "relationshipWithBeneficiary=supplier" \
  -F "description=Q3 electronics restock" \
  -F "additionalPayoutDetails[orders][0][orderedAt]=2026-07-20T10:30:00Z" \
  -F "additionalPayoutDetails[orders][0][item][name]=LED display panels" \
  -F "additionalPayoutDetails[orders][0][item][quantity]=250" \
  -F "additionalPayoutDetails[orders][0][platform][name]=Alibaba" \
  -F "additionalPayoutDetails[orders][0][platform][url]=https://hq-electronics.en.alibaba.com" \
  -F "files[0][documentType]=invoice" \
  -F "files[0][file]=@invoice-8842.pdf"
```
```javascript Node
import { readFileSync } from "node:fs";

const form = new FormData();
form.append("business", "64a1f0c2e4b0a12345678901");
form.append("sourceCurrency", "NGN");
form.append("destinationCurrency", "CNY");
form.append("amount", "5000000");
form.append("quoteReference", "QTE-8842-XYZ");
form.append("senderId", "sndr_9f21c8a4b5d6e7f8");
form.append("counterpartyId", "cp_7a04b1c2d3e4f5a6b7c8d9e0");
form.append("customerReference", "PAY-2026-000123");
form.append("paymentScheme", "cnaps");
form.append("paymentDestination", "bank_account");
form.append("purposeOfFund", "goods_purchase");
form.append("relationshipWithBeneficiary", "supplier");
form.append("additionalPayoutDetails[orders][0][orderedAt]", "2026-07-20T10:30:00Z");
form.append("additionalPayoutDetails[orders][0][item][name]", "LED display panels");
form.append("additionalPayoutDetails[orders][0][item][quantity]", "250");
form.append("additionalPayoutDetails[orders][0][platform][name]", "Alibaba");
form.append("files[0][documentType]", "invoice");
form.append("files[0][file]", new Blob([readFileSync("invoice-8842.pdf")]), "invoice-8842.pdf");

const res = await fetch("https://api.fincra.com/send", {
  method: "POST",
  headers: { "api-key": process.env.FINCRA_API_KEY },
  body: form,
});
const payout = await res.json();
```
```python Python
import os, requests

data = {
    "business": "64a1f0c2e4b0a12345678901",
    "sourceCurrency": "NGN",
    "destinationCurrency": "CNY",
    "amount": 5000000,
    "quoteReference": "QTE-8842-XYZ",
    "senderId": "sndr_9f21c8a4b5d6e7f8",
    "counterpartyId": "cp_7a04b1c2d3e4f5a6b7c8d9e0",
    "customerReference": "PAY-2026-000123",
    "paymentScheme": "cnaps",
    "paymentDestination": "bank_account",
    "purposeOfFund": "goods_purchase",
    "relationshipWithBeneficiary": "supplier",
    "additionalPayoutDetails[orders][0][orderedAt]": "2026-07-20T10:30:00Z",
    "additionalPayoutDetails[orders][0][item][name]": "LED display panels",
    "additionalPayoutDetails[orders][0][item][quantity]": 250,
    "additionalPayoutDetails[orders][0][platform][name]": "Alibaba",
    "files[0][documentType]": "invoice",
}

res = requests.post(
    "https://api.fincra.com/send",
    headers={"api-key": os.environ["FINCRA_API_KEY"]},
    data=data,
    files={"files[0][file]": open("invoice-8842.pdf", "rb")},
)
payout = res.json()
```

```json Response
{
  "success": true,
  "message": "Payout initiated successfully.",
  "data": {
    "id": 90210,
    "reference": "PO-8f3a2c1d",
    "customerReference": "PAY-2026-000123",
    "status": "processing",
    "isDocumentRequired": false,
    "documentsRequired": [],
    "senderId": "sndr_9f21c8a4b5d6e7f8",
    "counterpartyId": "cp_7a04b1c2d3e4f5a6b7c8d9e0"
  }
}
```

Store the `reference`. You need it to upload a document and to match a webhook.

The status is `processing`, because the request carried the invoice that `goods_purchase` needs. A request that misses a document returns `documents_required`. See [Purpose, details and documents](doc:china-payouts-purpose-details-and-documents).

## The fields you send

| Field                         | Required         | Notes                                                                         |
| :---------------------------- | :--------------- | :---------------------------------------------------------------------------- |
| `business`                    | Yes              | Your business id. Exactly 24 characters.                                      |
| `sourceCurrency`              | Yes              | The wallet you pay from.                                                      |
| `destinationCurrency`         | Yes              | `CNY`.                                                                        |
| `amount`                      | Yes              | The amount in the source currency.                                            |
| `senderId`                    | Yes              | The `sndr_` id.                                                               |
| `counterpartyId`              | Yes              | The `cp_` id.                                                                 |
| `customerReference`           | Yes              | Your own reference. It must be unique.                                        |
| `paymentScheme`               | Yes              | `cnaps`.                                                                      |
| `paymentDestination`          | Yes              | `bank_account`.                                                               |
| Processing mode               | Yes              | Normal or Instant. See [Choose a processing mode](#choose-a-processing-mode). |
| `purposeOfFund`               | Yes              | One of 20 values for CNY.                                                     |
| `relationshipWithBeneficiary` | Yes              | For example `supplier` or `employee`.                                         |
| `additionalPayoutDetails`     | Yes              | Trade details or salary details.                                              |
| `quoteReference`              | For a conversion | The reference of the quote.                                                   |
| `files`                       | No               | The supporting documents.                                                     |
| `description`                 | No               | Free text.                                                                    |

<Callout icon="📘" theme="info">
  ### The samples above omit the processing mode

  Take the mode field name from the API reference for `POST /send` and add it to each sample. Everything else in the samples is complete.
</Callout>

<Callout icon="📘" theme="info">
  ### Send `senderId` and `paymentScheme` every time

  The schema marks both as optional. Fincra runs the sender checks and the foreign-currency flow only when you send `senderId`. Fincra builds the counterparty type from the currency and the payment scheme, so a missing `paymentScheme` returns a type mismatch.
</Callout>

The endpoint rejects any field that the table above does not list. It rejects `beneficiary`, `sender`, `correspondent`, `intermediary`, `customerName`, `additionalInfo` and `documentType` from the older `POST /payouts` endpoint.

## Retry safely

`customerReference` must be unique for your business. Reuse the same reference when you retry after a 500 response. A second request with a reference that already succeeded returns `Cannot continue, Duplicate Customer Reference Passed`.

## Track the payout

Fincra sends a webhook when the status changes. Match it on the payout reference.

| Status               | Meaning                                         |
| :------------------- | :---------------------------------------------- |
| `documents_required` | Fincra holds the payout. A document is missing. |
| `processing`         | Fincra works on the payout.                     |
| `pending`            | Fincra waits on an internal step.               |
| `successful`         | The counterparty received the money.            |
| `failed`             | The payout did not complete. Read `message`.    |
| `change_requested`   | Fincra asks for a change.                       |

Confirm every webhook against the payout reference before you release goods or services. The sandbox sends no payout webhook.

Next: [Purpose, details and documents](doc:china-payouts-purpose-details-and-documents).

---
title: Create a sender
excerpt: Make the party that sends the money, and get it approved
deprecated: false
hidden: true
metadata:
  robots: index
---
The sender is the party that sends the money. Make each sender once. Then use its id in many payouts.

A sender is not tied to a currency. One approved sender pays China, and it also pays every other currency that Fincra supports.

## Choose the currency classification

`currencyClassification` decides whether the sender can send a foreign currency. You cannot change it later.

| Value                         | Use it for                                         |
| :---------------------------- | :------------------------------------------------- |
| `CURRENCY_CLASSIFICATION_FCY` | Foreign-currency payouts only.                     |
| `CURRENCY_CLASSIFICATION_ALL` | Local and foreign currencies.                      |
| `CURRENCY_CLASSIFICATION_LCY` | Local currency only. This sender cannot pay China. |

<Callout icon="🚧" theme="warn">
  ### A local-currency sender can never pay China

  A sender with `CURRENCY_CLASSIFICATION_LCY` never reaches the `approved` status. Every China payout with that sender returns `Sender is not approved to make transactions.` You cannot change the classification. You must create a new sender.
</Callout>

## Create the sender

```bash cURL
curl -X POST https://api.fincra.com/global-payouts/v1/senders \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "business",
    "currencyClassification": "CURRENCY_CLASSIFICATION_FCY",
    "name": "Acme Trading Limited",
    "address": {
      "street": "12 Marina Road",
      "city": "Lagos",
      "state": "Lagos",
      "postalCode": "101001",
      "country": "NG"
    },
    "email": "finance@acmetrading.com",
    "phone": "+2348012345678",
    "countryOfIncorporation": "NG",
    "dateOfIncorporation": "2015-03-12",
    "idType": "business_registration_number",
    "idNumber": "RC123456",
    "primaryBusiness": "Electronics import",
    "natureOfBusiness": "Wholesale of consumer electronics",
    "websiteAddress": "https://acmetrading.com",
    "callbackUrl": "https://acmetrading.com/hooks/fincra"
  }'
```
```javascript Node
const res = await fetch("https://api.fincra.com/global-payouts/v1/senders", {
  method: "POST",
  headers: {
    "api-key": process.env.FINCRA_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "business",
    currencyClassification: "CURRENCY_CLASSIFICATION_FCY",
    name: "Acme Trading Limited",
    address: {
      street: "12 Marina Road",
      city: "Lagos",
      state: "Lagos",
      postalCode: "101001",
      country: "NG",
    },
    email: "finance@acmetrading.com",
    phone: "+2348012345678",
    countryOfIncorporation: "NG",
    dateOfIncorporation: "2015-03-12",
    idType: "business_registration_number",
    idNumber: "RC123456",
    primaryBusiness: "Electronics import",
    natureOfBusiness: "Wholesale of consumer electronics",
    websiteAddress: "https://acmetrading.com",
    callbackUrl: "https://acmetrading.com/hooks/fincra",
  }),
});
const sender = await res.json();
```
```python Python
import os, requests

res = requests.post(
    "https://api.fincra.com/global-payouts/v1/senders",
    headers={"api-key": os.environ["FINCRA_API_KEY"]},
    json={
        "type": "business",
        "currencyClassification": "CURRENCY_CLASSIFICATION_FCY",
        "name": "Acme Trading Limited",
        "address": {
            "street": "12 Marina Road",
            "city": "Lagos",
            "state": "Lagos",
            "postalCode": "101001",
            "country": "NG",
        },
        "email": "finance@acmetrading.com",
        "phone": "+2348012345678",
        "countryOfIncorporation": "NG",
        "dateOfIncorporation": "2015-03-12",
        "idType": "business_registration_number",
        "idNumber": "RC123456",
        "primaryBusiness": "Electronics import",
        "natureOfBusiness": "Wholesale of consumer electronics",
        "websiteAddress": "https://acmetrading.com",
        "callbackUrl": "https://acmetrading.com/hooks/fincra",
    },
)
sender = res.json()
```

```json Response
{
  "id": "sndr_9f21c8a4b5d6e7f8",
  "name": "Acme Trading Limited",
  "type": "business",
  "currencyClassification": "CURRENCY_CLASSIFICATION_FCY",
  "verificationStatus": "pending",
  "isBlacklisted": false
}
```

Store the `sndr_` id against your own customer record.

## The fields a China sender needs

Every sender needs `type`, `name`, `address`, `idType`, `idNumber` and `currencyClassification`. A foreign-currency sender needs more.

| Sender type  | Extra required fields                                                                                                                                      |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business`   | `countryOfIncorporation`, `dateOfIncorporation`, `primaryBusiness`, `natureOfBusiness`, `websiteAddress`. `idType` must be `business_registration_number`. |
| `individual` | `countryOfOrigin`, `birthDate`. `idType` is `passport`, `national_id` or `drivers_license`.                                                                |

The sender address uses `postalCode`. The counterparty address uses `zip`.

<Callout icon="📘" theme="info">
  ### One rule for individual senders

  A sender with `countryOfOrigin` set to `CN` cannot pay an individual counterparty in CNY. It can pay a business counterparty. See [Errors](doc:china-payouts-errors).
</Callout>

The full field list is in the [API reference](ref:create-sender).

## Upload the documents

An approved sender needs documents. Upload one document for each call.

| Sender type | `idType`                           | Documents                                                                                             |
| :---------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------- |
| Individual  | `passport`                         | `identificationDocumentFront`, `proofOfAddress`                                                       |
| Individual  | `national_id` or `drivers_license` | `identificationDocumentFront`, `identificationDocumentBack`, `proofOfAddress`                         |
| Business    | `business_registration_number`     | `businessRegistrationDocument`, `proofOfAddress`, `articleOfIncorporation`, `memorandumOfAssociation` |

```bash cURL
curl -X POST https://api.fincra.com/global-payouts/v1/senders/sndr_9f21c8a4b5d6e7f8/documents \
  -H "api-key: $FINCRA_API_KEY" \
  -F "documentType=proofOfAddress" \
  -F "file=@proof-of-address.pdf"
```
```python Python
import os, requests

res = requests.post(
    "https://api.fincra.com/global-payouts/v1/senders/sndr_9f21c8a4b5d6e7f8/documents",
    headers={"api-key": os.environ["FINCRA_API_KEY"]},
    data={"documentType": "proofOfAddress"},
    files={"file": open("proof-of-address.pdf", "rb")},
)
```

Use a JPEG, a PNG or a PDF. A second upload of the same type replaces the first one.

A request with no file returns 422 and `No file provided or file is invalid.` A file that is not a JPEG, a PNG or a PDF returns 400 and `Invalid file type. Only JPEG, PNG, and PDF are allowed.`

The verification starts by itself when the last required document arrives. You do not call anything to start it.

## Wait for the approved status

| Status       | What you do                                                              |
| :----------- | :----------------------------------------------------------------------- |
| `pending`    | Upload the documents.                                                    |
| `processing` | Wait.                                                                    |
| `in_review`  | Wait. A person at Fincra reviews the sender. This status sends no event. |
| `approved`   | Send the payout.                                                         |
| `rejected`   | Replace the documents with `PUT /v1/senders/{id}/documents`.             |

Fincra sends the `sender.updated` event once, when the verification completes.

```json sender.updated
{
  "event": "sender.updated",
  "data": {
    "id": "sndr_tgqmdclpzz4hn6cq2wxyxjc",
    "status": "approved",
    "flags": ""
  }
}
```

`status` is `approved` or `rejected`. The event reports a finished verification only, so `processing` and `in_review` send nothing.

Read the sender with `GET /v1/senders/{id}` before you act on the event. Do not trust the body alone.

Next: [Create a China counterparty](doc:china-payouts-create-a-counterparty).

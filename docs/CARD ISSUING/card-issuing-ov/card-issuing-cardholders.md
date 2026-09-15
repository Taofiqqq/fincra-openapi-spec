---
title: Cardholders
excerpt: >-
  Onboard the individual or business a card is issued to, and handle
  verification.
deprecated: false
hidden: true
metadata:
  robots: index
---
A cardholder is the party a card belongs to. Make a cardholder once, then issue one or more cards to it. Set `type` to `individual` or `business`.

Fincra verifies the cardholder. The check can finish after the create call returns, and Fincra sends `cardholder.validation.completed`. Read `verificationStatus` on the cardholder to know where it stands: `pending`, `success` or `rejected`.

## Create an individual

`POST /cardholders`

Send a `kycProfile` with the person's details. For a Nigerian cardholder, send a BVN and a NIN in `identityNumbers`.

| Field                                   | Type   | Required | What it is                                                |
| :-------------------------------------- | :----- | :------- | :-------------------------------------------------------- |
| `type`                                  | string | Yes      | `individual`.                                             |
| `reference`                             | string | Yes      | Your unique reference.                                    |
| `individual.email`                      | string | Yes      | Unique email.                                             |
| `individual.phoneNumber`                | string | Yes      | Unique phone, in E.164 format.                            |
| `individual.kycProfile.firstName`       | string | Yes      |                                                           |
| `individual.kycProfile.lastName`        | string | Yes      |                                                           |
| `individual.kycProfile.dob`             | string | Yes      | Date of birth, `YYYY-MM-DD`.                              |
| `individual.kycProfile.countryCode`     | string | Yes      | Two-letter country code.                                  |
| `individual.kycProfile.address`         | object | Yes      | `line1`, `city`, `state`, `country`, `postalCode`.        |
| `individual.kycProfile.identityNumbers` | array  | Yes      | For Nigeria, a `bvn` and a `nin`.                         |
| `individual.kycProfile.documents`       | object | No       | `idFrontUrl`, `idBackUrl`, `idType`, `proofOfAddressUrl`. |

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cardholders \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "individual",
    "reference": "cust_0001",
    "individual": {
      "email": "joe@example.com",
      "phoneNumber": "+2342011234548",
      "kycProfile": {
        "firstName": "Joe",
        "lastName": "Sue",
        "dob": "1985-07-06",
        "countryCode": "NG",
        "gender": "male",
        "address": {
          "line1": "ABC Estate Homes 1",
          "city": "AMAC",
          "state": "Abuja",
          "country": "NG",
          "postalCode": "900001"
        },
        "identityNumbers": [
          { "type": "bvn", "number": "22222222222" },
          { "type": "nin", "number": "55555555558" }
        ]
      }
    }
  }'
```

```json
{
  "id": "ch_k7iwb55alvazwckwykc4erlm11ijcyn9",
  "name": "Joe Sue",
  "email": "joe@example.com",
  "reference": "cust_0001",
  "type": "individual",
  "countryCode": "NG",
  "status": "onboarding",
  "verificationStatus": "pending",
  "createdAt": "2026-06-25T10:00:00Z",
  "updatedAt": "2026-06-25T10:00:00Z"
}
```

## Create a business

Set `type` to `business`. Send a `kybProfile` with the company details, and list every director and shareholder in `associatedPersons`. A business registered outside Nigeria needs at least one Nigerian director.

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cardholders \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "business",
    "reference": "cust_business_001",
    "business": {
      "email": "ops@example.com",
      "phoneNumber": "+2348061234500",
      "address": { "line1": "ABC Estates Homes 1", "city": "AMAC", "state": "Abuja", "country": "NG", "postalCode": "900001" },
      "kybProfile": {
        "legalName": "Example Business Limited",
        "companyRegistrationNumber": "RC1234567",
        "countryOfIncorporation": "NG",
        "associatedPersons": [
          {
            "firstName": "Joe", "lastName": "Sue", "dob": "1985-07-06",
            "countryCode": "NG", "shareholderPercentage": 100, "isDirector": true,
            "identityNumbers": [
              { "type": "bvn", "number": "23332240000" },
              { "type": "nin", "number": "50055964422" }
            ]
          }
        ]
      }
    }
  }'
```

## Read the verification result

`GET /cardholders/{id}`

When `verificationStatus` is `rejected`, the cardholder carries a `verificationFailures` array. Each failure names the `requirement` that failed and a`reason`, so you know exactly what to fix. Reasons include `document_unreadable`, `document_expired`, `document_invalid`, `invalid_identity_number` and `address_mismatch`.

```json
{
  "id": "ch_k7iwb55alvazwckwykc4erlm11ijcyn9",
  "type": "individual",
  "status": "onboarding",
  "verificationStatus": "rejected",
  "verificationFailures": [
    {
      "step": "identity",
      "reason": "document_unreadable",
      "message": "The uploaded document could not be read.",
      "requirement": "cardholder.documents.proofOfAddressUrl",
      "resourceId": "doc_1a2b"
    }
  ]
}
```

## Fix and resubmit

`PATCH /cardholders/{id}/resubmit_verification`

Send the corrected identity details. Fincra runs verification again.

```bash
curl -X PATCH https://sandboxapi.fincra.com/issuing/cardholders/ch_k7iwb55alvazwckwykc4erlm11ijcyn9/resubmit_verification \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "individual",
    "individual": {
      "firstName": "Joe", "lastName": "Sue", "dob": "1985-07-06", "countryCode": "NG",
      "identityNumbers": [
        { "type": "bvn", "number": "22222222222" },
        { "type": "nin", "number": "55555555558" }
      ],
      "documents": {
        "idType": "national_id",
        "idFrontUrl": "https://example.com/id-front",
        "idBackUrl": "https://example.com/id-back",
        "proofOfAddressUrl": "https://example.com/poa"
      }
    }
  }'
```

## Update contact details

`PATCH /cardholders/{id}`

Change the email or phone. Identity evidence is not editable here, because the verification already granted stands on it. To change identity and be verified again, use `resubmit_verification`.

```bash
curl -X PATCH https://sandboxapi.fincra.com/issuing/cardholders/ch_k7iwb55alvazwckwykc4erlm11ijcyn9 \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "joe.new@example.com", "phoneNumber": "+2348261234678" }'
```

## Offboard a cardholder

`DELETE /cardholders/{id}`

The cardholder's status becomes `offboarded` and no further card can be issued to it. Terminate every card the cardholder holds first, and the cardholder must be `active` or `paused`.

## Retrieve and list

`GET /cardholders/{id}` returns one cardholder. `GET /cardholders` lists them, filtered by `type` and paged with `limit` and `cursor`.

Next: [Cards](doc:card-issuing-cards).

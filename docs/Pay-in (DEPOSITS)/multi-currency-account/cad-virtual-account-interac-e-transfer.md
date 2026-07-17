---
title: CAD (Interac e-Transfer)
excerpt: >-
  Receive Canadian Dollars from Canadian payers through Interac e-Transfer using
  your Fincra-issued Interac email.
deprecated: false
hidden: false
metadata:
  robots: index
---
Fincra CAD virtual accounts let you receive Canadian Dollars (CAD) from Canadian payers through Interac e-Transfer, Canada's account-to-account payment network.

Instead of an account number, Fincra issues you an **Interac email** — a unique email-style identifier in the format `merchantname@fincra.ca`, registered on the Interac network and linked to your CAD balance. Any Interac e-Transfer sent to your Interac email is automatically deposited into your CAD balance.

API Reference: [create virtual account endpoint](/reference/create-fcy-virtual-account)

<Callout icon="📘" theme="info">
  ### Important

  - This product is available to Individual and Corporate merchants approved through Fincra's CAD onboarding process.
  - Your Interac email has Auto Deposit enabled. Funds gets settled into your CAD balance automatically.
  - Payers can only send CAD. Interac e-Transfer is a Canadian rail and does not support other currencies.
  - Most transfers credit to your CAD balance within minutes.
  - Collected CAD stays in your CAD balance. It does not auto-convert on receipt, you decide when and how much to convert.
  - You get one Interac email per merchant profile. It is your permanent CAD collection identifier.
</Callout>

## How it works

### Getting your Interac email

1. Complete your KYC/KYB verification.
2. Request a CAD virtual account via API or the dashboard.
3. Fincra generates your Interac email and registers it on the Interac network, with Auto Deposit enabled.
4. You receive a notification once your Interac email is active and ready to receive CAD.

### Receiving a payment

1. Share your Interac email (`youralias@fincra.ca`) with your Canadian payer.
2. The payer logs into their Canadian bank's online banking or app and sends an Interac e-Transfer to your Interac email.
3. Funds are deposited automatically. The payer is not asked a security question, and you do not need to accept the transfer.
4. Your CAD balance is credited, and a webhook notification is sent to you.
5. The collection appears in your dashboard and is retrievable via API.

## API Guide

### 1 - Request a CAD virtual account

CAD accounts are requested the same way as other FCY virtual accounts, with `currency` set to `CAD`. Follow the request guide for your merchant type:

- [Request FCY Account \[Individual\]](https://docs.fincra.com/update/docs/request-fcy-virtual-account)
- [Request FCY Account \[Corporate\]](request-fcy-corporate-virtual-account)

Endpoint:

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```

The request body is the same as a standard FCY account request, with `currency` set to `CAD`. Below is a sample payload for a corporate account request:

```json Corporate
{
    "currency": "CAD",
    "accountType": "corporate",
    "purpose": "third_party",
    "merchantReference": "HTQUGUL1",
    "KYCInformation": {
        "businessRegistrationName": "Meenah Books",
        "businessRegistrationNumber": "12345679199517",
        "businessRegistrationCountry": "NG",
        "tradingName": "Meenah Books",
        "email": "aminat@meenahbooks.com",
        "phone": "+14155552671",
        "website": "https://www.meenahbooks.com",
        "address": {
            "countryOfResidence": "US",
            "state": "New York",
            "city": "New York",
            "zip": "10001",
            "street": "456 Business Ave",
            "number": "456"
        },
        "directorsName": "Aminat Bello",
        "incorporationDate": "2020-01-15",
        "incorporationCountryCode": "US",
        "taxIdentificationNumber": "12-3456789",
        "taxCountry": "US",
        "companyType": "corporation",
        "primarySourceOfFunds": "business_income",
        "businessCategory": "retail",
        "businessCategoryDescription": "Technology services and software development",
        "primaryBusiness": "software",
        "primaryBusinessDescription": "Software development and consulting services",
        "estimatedMonthlyTurnover": "50000",
        "projectedMonthlyInflow": "60000",
        "projectedMonthlyOutflow": "40000",
        "projectedTransactionFrequency": "daily",
        "projectedMonthlyTransactionCount": "500",
        "riskRating": "low",
        "regulationStatus": "registered",
        "regulator": "SEC",
        "regulationNumber": "REG-12345",
        "annualIncome": "500000",
        "fundsTransferCorridors": ["US", "GB", "EU"],
        "countriesOfOperation": ["US", "CA", "GB"],
        "expectedCounterparties": ["customers", "friends"],
        "tradeInternationally": true,
        "ultimateBeneficialOwners": [
            {
                "firstName": "John",
                "lastName": "Doe",
                "middleName": "Michael",
                "dateOfBirth": "1980-01-01",
                "nationality": "US",
                "citizenships": ["US"],
                "emailAddress": "john.doe@example.com",
                "phoneNumber": "+14155552671",
                "address": {
                    "countryOfResidence": "US",
                    "state": "NY",
                    "city": "New York",
                    "zip": "10001",
                    "street": "789 Owner St",
                    "number": "789"
                },
                "taxCountry": "US",
                "taxNumber": "123-45-6789",
                "beneficialOwnerType": "beneficial_owner",
                "usResidencyStatus": "resident",
                "politicallyExposedPerson": false,
                "percentageOwnership": "51",
                "title": "CEO",
                "document": {
                    "type": "passport",
                    "number": "B98765432",
                    "issuedCountryCode": "US",
                    "issuedBy": "US Department of State",
                    "issuedDate": "2015-01-01",
                    "expirationDate": "2030-01-01"
                },
                "meansOfId": "https://<your-document-url>.png",
                "utilityBill": "https://<your-document-url>.png"
            }
        ],
        "businessPartners": []
    },
    "metadata": {
        "customerid": "12312344"
    },
    "regulatoryEvidence": "https://<your-document-url>.png",
    "incorporationDocuments": "https://<your-document-url>.png",
    "articleOfIncorporation": "https://<your-document-url>.png",
    "beneficialOwnershipCertificate": "https://<your-document-url>.png",
    "sourceOfFunds": "https://<your-document-url>.png",
    "utilityBill": "https://<your-document-url>.png",
    "entityName": "Meenah Books",
    "paymentFlowDescription": "Business operations, client payments, and vendor payments"
}
```

The response returns the details of the virtual account, including your Interac email under `accountInformation.otherInfo.interacEmail`

```json Response
{
    "success": true,
    "message": "",
    "data": {
        "_id": "************************",
        "business": "*******************",
        "customerId": "*******************",
        "currency": "CAD",
        "currencyType": "fiat",
        "status": "approved",
        "isActive": true,
        "accountNumber": "",
        "alternateAccountNumbers": [],
        "accountType": "individual",
        "merchantReference": null,
        "entityType": "main_account",
        "KYCInformation": {
            "firstName": "Iya",
            "lastName": "Ami",
            "email": "oma@gmail.com",
            "nationality": "NG",
            "taxCountry": "NG",
            "sourceOfIncome": "salary",
            "accountDesignation": "personal",
            "employmentStatus": "employed",
            "incomeBand": "5000-100000",
            "annualIncome": "600000",
            "address": {
                "countryOfResidence": "NG",
                "state": "Lagos",
                "city": "Gbagada",
                "zip": "100234",
                "street": "Adewale Street",
                "number": "1"
            },
            "document": {
                "type": "passport",
                "issuedCountryCode": "NG",
                "issuedBy": "FEDERAL REPUBLIC OF NIGERIA"
            }
        },
        "accountInformation": {
            "accountName": "Iya Ami",
            "accountNumber": "",
            "bankName": "",
            "bankCode": "",
            "countryCode": "CA",
            "reference": 344,
            "otherInfo": {
                "interacEmail": "oma@fincra.ca",
                "addressableIn": "INTERAC_ETRANSFER"
            }
        },
        "previousAccountInformation": [],
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isSuspended": false,
        "reason": null,
        "virtualAccountType": "additional",
        "feeSettlementStatus": "not_applicable",
        "metadata": null,
        "createdAt": "2026-07-08T18:28:59.962Z",
        "updatedAt": "2026-07-08T21:17:54.338Z"
    }
}
```

Important Notes:

- `accountInformation.otherInfo.interacEmail` : Your Interac email. This is the identifier you share with Canadian payers.
- `accountInformation.otherInfo.addressableIn` : `INTERAC_ETRANSFER` — the account receives funds through the Interac e-Transfer rail.
- `_id` : The unique identifier of the virtual account. Use it to fetch the account by ID.
- `status` / `isActive` : Your Interac email is ready to receive CAD once the accoun

## 2. Retrieve your Interac email

Fetch your CAD account details, including your Interac email:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/?currency=cad
```

You can also fetch a single account by its ID:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```

Your Interac email is also displayed in your Merchant Portal.

## 3. Get notified of collections

When a payer sends an Interac e-Transfer to your Interac email, Fincra credits your CAD balance and sends a webhook notification to your configured webhook URL. See <Anchor target="_blank" href="doc:virtual-account-webhook">Virtual Account Webhook</Anchor> for how to receive and validate webhook notifications.

Each collection is recorded with a unique transaction reference. Your balance, incoming collection history, and conversion history are all visible in your Merchant Portal and retrievable via API.

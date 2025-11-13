---
title: KES Virtual Account
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This guide explains how to integrate static **KES (Kenyan Shilling) Virtual Accounts** via API. These allow businesses to receive KES payments, settled automatically into the merchant's wallet.

***

## ⚠️ Important Setup Notice

- KES VA setup requires **manual onboarding** of your main account by Fincra.
- Once approved, you can create **sub-accounts** via the API.
- Onboarding typically takes up to **48 hours** (based on document completeness).

***

## 🔐 Authentication

| Field        | Value              |
| ------------ | ------------------ |
| Auth Type    | No Auth            |
| Header       | `api-key`          |
| Content-Type | `application/json` |

Your API keys are available on the dashboard under `My Acc > Acc Settings > API Keys`.

***

## 🏦 Supported Bank

| Bank Name   | Notes                   |
| ----------- | ----------------------- |
| Choice Bank | Default issuing partner |

> As more banks are supported, this guide will be updated.

***

## 🔤 Basic Information Required

### For Sole Proprietorship:

- Business Name
- Full Name (Proprietor)
- Date of Birth (DD/MM/YYYY)
- Gender
- Business Industry
- Business Address
- Next of Kin Full Name & Phone (with country code)
- Relationship to Next of Kin

### For LLCs or Partnerships:

- Business Name
- Operating Mode (e.g. any two to sign)
- Business Industry
- Business Address

***

## 📄 Required KYB Documents

### Limited Liability Company

| Document                           | Required    |
| ---------------------------------- | ----------- |
| Certificate of Incorporation       | ✅           |
| Ownership Document (CR12)          | ✅           |
| Memorandum of Association          | ✅           |
| Company Application (CR1)          | ✅           |
| Director Address Declaration (CR8) | ✅           |
| Company/Director Tax ID (KRA PIN)  | ✅           |
| Director ID/Passport               | ✅           |
| Signed Board Resolution            | ✅           |
| UBO Declaration (if applicable)    | ✅           |
| Business Permit                    | 🟡 Optional |
| Other Compliance Docs              | 🟡 Optional |

### Sole Proprietorship

| Document                   | Required    |
| -------------------------- | ----------- |
| ID Document (Front & Back) | ✅           |
| Selfie                     | ✅           |
| KRA PIN/Tax ID             | ✅           |
| Business Certificate       | ✅           |
| Supporting Docs            | 🟡 Optional |

> 📎 Submit documents in **PDF or JPEG** format. Notarization is required for foreign entities.

***

## 📝 Submit Onboarding Request

Send your onboarding request to: **`kes.varequests@fincra.com`**

Include:

- **Subject:** `<Your Business Name> - Request for KES VA`
- **Body:** Basic information listed above
- **Attachments:** Required KYB documents

***

## 🧾 Naming Convention

- Your **main VA name** is your business name.
- **Sub-accounts** are labeled as: `BusinessName_SubAccountName`

***

## 🔄 Creating Sub Virtual Accounts via API

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

### Request Parameters

#### Individual Account

| Field             | Required | Type   | Description                      |
| ----------------- | -------- | ------ | -------------------------------- |
| currency          | Yes      | string | Must be `"KES"`                  |
| accountType       | Yes      | string | Must be `"individual"`           |
| KYCInformation    | Yes      | object | Contains `firstName`, `lastName` |
| phoneNumber       | No       | string | In international format          |
| merchantReference | No       | string | Your internal reference          |

<br />

#### Corporate Account

| Field                                      | Required | Type   | Description                                                                                                                                                                                                                |
| ------------------------------------------ | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                                   | Yes      | string | Must be `"KES"`                                                                                                                                                                                                            |
| accountType                                | Yes      | string | Must be `"corporate"`                                                                                                                                                                                                      |
| KYCInformation                             | Yes      | object | Must contain `businessName`                                                                                                                                                                                                |
| KYCInformation.businessRegistrationCountry | Yes      | string | Country of incorporation (ISO 3166-1 alpha-2).                                                                                                                                                                             |
| KYCInformation.incorporationCountryCode    | Yes      | string | Country where business is incorporated (ISO 3166-1 alpha-2).                                                                                                                                                               |
| VirtualAccountPrimaryBusiness              | Yes      | string | Detailed classification of the business' primary line of activity. See the values to pass for applicable industries [here](https://docs.fincra.com/docs/enum-values-for-fcy-virtual-account#virtualaccountprimarybusiness) |
| phoneNumber                                | No       | string | In international format                                                                                                                                                                                                    |
| merchantReference                          | No       | string | Your internal reference                                                                                                                                                                                                    |

### Sample Request (Corporate)

```json
{
  "accountType": "corporate",
  "currency": "KES",
  "KYCInformation": {
    "businessName": "Testoma",
		"VirtualAccountPrimaryBusiness": "consumer_goods",
    "KYCInformation.businessRegistrationCountry": "NG",
		"KYCInformation.incorporationCountryCode": "NG"
  },
  "merchantReference": "merchant-8jf9j00",
  "phoneNumber": "+254206786543"
}
```

### Sample Request (Individual)

```json
{
  "accountType": "individual",
  "currency": "KES",
  "KYCInformation": {
    "firstName": "Hi",
    "lastName": "Corporation"
  },
  "merchantReference": "merchant-6d78f9j00",
  "phoneNumber": "+254209876543"
}
```

### Sample Response

```json
{
    "success": true,
    "message": "A KES virtual account has been created for you",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "46****00029**0",
        "alternateAccountNumbers": [],
        "merchantReference": "merchant-6d7jj0djdf0",
        "KYCInformation": {
            "businessName": "Testoma",
            "primaryBusiness": "accounting",
            "businessRegistrationCountry": "NG",
            "incorporationCountryCode": "NG"
        },
        "accountInformation": {
            "accountNumber": "46****00029**0",
            "accountName": "Sample Business Ltd_Testoma",
            "reference": "AAI15567876545612",
            "bankName": "choice"
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "isPoolAccount": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [],
        "bankStatement": [],
        "utilityBill": [],
        "virtualAccountType": "additional",
        "riskRating": null,
        "checklist": null,
        "riskScreening": null,
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "isWatchlisted": false,
        "sourceOfFunds": [],
        "leaseAgreement": [],
        "beneficialOwnershipCertificate": [],
        "articleOfIncorporation": [],
        "incorporationDocuments": [],
        "_id": "68a78******124ef4b1",
        "business": "644******4576",
        "currency": "KES",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2025-08-11T21:05:41.430Z",
        "updatedAt": "2025-08-11T21:05:41.430Z"
    }
}
```

> ℹ️ Any `businessName` in your request is appended to your onboarded name.
> 
> - Main: `Fincra Technologies Limited`
> - Sub: `Merchant 1`
> - Final: `Fincra Technologies Limited_Merchant 1`

***

## 📡 Webhook Notification (Sample)

```json
{
  "event": "collection.successful",
  "data": {
    "virtualAccountType": "additional",
    "senderAccountName": "Sender Name",
    "amountReceived": 5580,
    "amountExpected": 6000,
    "varianceType": "underpayment",
    "fee": 420,
    "message": "INCORRECT_AMOUNT",
    "status": "successful",
    "reference": "48173-2ff9-4ref-85b4-2e5ed4429e3"
  }
}
```

🔗 [How to Validate Webhooks](https://docs.fincra.com/docs/validating-webhook)

***

## 📥 Retrieve Account Info

**GET** `{{base_url}}/profile/virtual-accounts/<virtual_account_id>`

Returns full account details for a specific virtual account.

***

## 📃 List All Virtual Accounts

**GET** `{{base_url}}/profile/virtual-accounts/?currency=KES`

Returns a list of all your created KES virtual accounts.

***

## 💳 Funding Virtual Accounts

Refer to: [Funding a Virtual Account →](https://docs.fincra.com/docs/funding-a-virtual-account)
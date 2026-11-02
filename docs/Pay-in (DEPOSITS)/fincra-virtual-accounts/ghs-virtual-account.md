---
title: GHS Virtual Account
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
This guide provides instructions for integrating **static GHS (Ghana Cedi) Virtual Accounts** via API. Merchants can create **permanent virtual accounts** to receive GHS payments from customers. Funds do not sit in the virtual account directly — the VA acts as a collection reference mapped to the merchant’s **GHS wallet**.

All that is needed is for the request to be made by calling the [create virtual account endpoint](/reference/create-local-currency-virtual-account)

***

## 📌 Key Points

- **Real-time issuing:** Both individual and corporate GHS virtual accounts are issued instantly.
- **Settlement:** Funds are settled into the merchant’s GHS wallet.
- **Authentication:** Uses API keys in the header (not standard Bearer token).

***

## 🔐 Authentication

| Type             | Details                                                              |
| ---------------- | -------------------------------------------------------------------- |
| **Auth Type**    | No Auth                                                              |
| **Header**       | `api-key`                                                            |
| **Content-Type** | `application/json`                                                   |
| **API Keys**     | Available under `My Acc > Acc Settings > API Keys` on your dashboard |

***

## 🏦 Supported Bank

| Bank Name            | GHIPSS Code | Notes                       |
| -------------------- | ----------- | --------------------------- |
| **First Bank&#x20;** | `200100`    | Default issuing institution |

### Note:&#x20;

#### Access to the GHS Virtual Account may be restricted. If you receive an `ACCESS_DENIED` error when attempting to create a GHS Virtual Account, this means the request requires a review or approval.

In this case, please send a request to **[compliance@fincra.com](mailto:compliance@fincra.com)** and copy **[globalpaymentsystems@fincra.com.](mailto:globalpaymentsystems@fincra.com)&#x20;**

The request should include merchant name, email and business ID. Once the review is completed and access is approved, you may proceed with the virtual account creation.

***

## ⚙️ Request Parameters

### 📁 Individual Virtual Account

| Field                      | Required | Type   | Description                                             |
| -------------------------- | -------- | ------ | ------------------------------------------------------- |
| `currency`                 | Yes      | string | Must be `"GHS"`                                         |
| `accountType`              | Yes      | string | Must be `"individual"`                                  |
| `KYCInformation.firstName` | Yes      | string | Customer’s first name                                   |
| `KYCInformation.lastName`  | Yes      | string | Customer’s last name                                    |
| `KYCInformation.email`     | Yes      | string | Customer’s email                                        |
| `phoneNumber`              | No       | string | Business phone in international format (e.g. `+233...`) |
| `merchantReference`        | No       | string | Unique reference on your system                         |

### 📁 Corporate Virtual Account

| Field                         | Required | Type   | Description                            |
| ----------------------------- | -------- | ------ | -------------------------------------- |
| `currency`                    | Yes      | string | Must be `"GHS"`                        |
| `accountType`                 | Yes      | string | Must be `"corporate"`                  |
| `KYCInformation.businessName` | Yes      | string | Merchant’s business name               |
| `KYCInformation.email`        | Yes      | string | Business email                         |
| `phoneNumber`                 | No       | string | Business phone in international format |
| `merchantReference`           | No       | string | Unique reference on your system        |

***

## 🗂️ Sample Requests

### ✅ Corporate

```json
{
  "accountType": "corporate",
  "currency": "GHS",
  "KYCInformation": {
    "businessName": "Oma's Empire",
    "email": "Empire@gmail.com"
  },
  "merchantReference": "merchant-8jdf9j00",
  "phoneNumber": "+233206786543"
}
```

### ✅ Individual

```json
{
  "accountType": "individual",
  "currency": "GHS",
  "KYCInformation": {
    "firstName": "Hi",
    "lastName": "Corporation",
    "email": "textme@gmail.com"
  },
  "merchantReference": "merchant-6d78f9j00",
  "phoneNumber": "+233209876543"
}
```

***

## 📥 Sample Response

```json
{
  "success": true,
  "message": "A GHS virtual account has been created for you",
  "data": {
    "status": "approved",
    "isActive": true,
    "accountNumber": "7003000100286",
    "merchantReference": "merchant-8j9j00",
    "KYCInformation": {
      "businessName": "Oma's Empire",
      "email": "email@gmail.com"
    },
    "accountInformation": {
      "accountNumber": "7003000100286",
      "accountName": "Oma's Empire",
      "reference": "2bd48a28-0199-4de8-bac0-ae998efaad9e",
      "bankName": "First Bank"
    },
    "_id": "6865acbe26869a007121d7f5b",
    "business": "64493f61864cdb7aab9bb4576",
    "currency": "GHS",
    "accountType": "corporate",
    "entityType": "main_account",
    "currencyType": "fiat",
    "createdAt": "2025-07-02T22:03:42.724Z",
    "updatedAt": "2025-07-02T22:03:42.724Z"
  }
}
```

**Notes:**

- `_id`: Unique virtual account ID.
- `business`: Your Business ID.

***

## 📡 Webhook Notifications

You’ll receive a webhook event for every collection received.

### ✅ Sample Webhook

```json
{
  "event": "collection.successful",
  "data": {
    "business": "64493f61864cdb7aab9bb457",
    "virtualAccount": "6865acbe26869a007121d7f5",
    "virtualAccountType": "main",
    "sessionId": "000004261102094006000000123456",
    "senderAccountName": "Sender Name",
    "senderAccountNumber": "1100000000063",
    "senderBankName": null,
    "senderBankDetails": {
      "bankName": null,
      "bankCode": null,
      "swiftCode": null,
      "bic": null
    },
    "recipientAccountName": "Oma's Empire",
    "recipientAccountNumber": "9980000000",
    "recipientBankName": "UBA",
    "sourceCurrency": "GHS",
    "destinationCurrency": "GHS",
    "sourceAmount": 3000,
    "destinationAmount": 3000,
    "description": "Hello World",
    "amountReceived": 2970,
    "fee": 30,
    "customerName": "Sender Name",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2025-07-02T21:56:02.000Z",
    "createdAt": "2025-07-02T21:56:02.000Z",
    "updatedAt": "2025-07-02T21:56:02.000Z",
    "reference": "48173e2f-2ff9-4a3f-85b4-2e5ed4429e3a",
    "merchantReference": "2456552"
  }
}
```

**Notes:**

- `virtualAccount`: The ID of the receiving virtual account (the `_id` returned when you created it), not the account number.
- `recipientAccountNumber`: The receiving virtual account number.
- `recipientAccountName`: The receiving virtual account name.
- `recipientBankName`: The bank that issued the receiving virtual account, for example `UBA`.
- `senderAccountNumber`, `senderBankDetails`: Passed through as the issuing bank sends them. Values the bank does not provide are `null`.
- `amountReceived`: `sourceAmount` minus `fee`.

📖 **[How to validate webhooks →](https://docs.fincra.com/docs/validating-webhook)**

***

## 📂 Retrieve Virtual Account Details

**GET**

```
{{base_url}}/profile/virtual-accounts/<virtual_account_id>
```

Returns details of a single virtual account.

***

## 📃 Retrieve All Virtual Accounts

**GET**

```
{{base_url}}/profile/virtual-accounts/?currency=GHS
```

Returns all GHS virtual accounts you’ve created.

***

## 💳 Fund Your Virtual Account

Refer to: **[Funding a Virtual Account →](https://docs.fincra.com/docs/funding-a-virtual-account)**

<br />

<Callout icon="📌" theme="default">
  ### For updates on changes to the Virtual Account endpoint, watch your email.
</Callout>
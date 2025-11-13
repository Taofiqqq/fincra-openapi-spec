---
title: TZS Virtual Account
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
This guide provides instructions for integrating **static TZS Virtual Accounts** via API. Merchants can create **permanent virtual accounts** to receive TZS payments from customers.

Endpoint: (Allows merchants to create permanent virtual accounts denominated in TZS)

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```
```
```

These Virtual Accounts can receive TZS payments from customers, which are automatically reflected in the merchant’s TZS wallet.

> 📘 Important
>
> * Requests for both Individual and corporate TZS virtual accounts are issued in real time.
> * Funds received by a virtual account are settled into the merchant’s TZS wallet.

## 🔐 Authentication

| Type             | Details                                                              |
| ---------------- | -------------------------------------------------------------------- |
| **Header**       | `api-key`                                                            |
| **Content-Type** | `application/json`                                                   |
| **API Keys**     | Available under `My Acc > Acc Settings > API Keys` on your dashboard |

<br />

## 🏦 Supported Bank

| Bank Name | Bank Code | Notes                       |
| --------- | --------- | --------------------------- |
| Ecobank   | ECOCTZTZ  | Default issuing institution |

Note: The account will automatically be issued. As additional bank options become available, the API specification will be updated.

<br />

## Settlement Reference 🕒

| Payment Type | Cut off Time                     | Settlement Time |
| ------------ | -------------------------------- | --------------- |
| TIPS         | N/A                              | Instant         |
| TISS         | 5pm (Subject to initiating bank) | Same day        |
| Mobile Money | N/A                              | Instant         |
|              |                                  |                 |

## Fields for Virtual Account Creation (Corporate & Individual)

To create a virtual account, you'll need to pass information such as currency, accountType, KYCInformation, etc. Please find below the request parameters for both corporate and individual accounts.

### 📁 Individual Virtual Account

| Field                      | Required | Type   | Description                                             |
| -------------------------- | -------- | ------ | ------------------------------------------------------- |
| `currency`                 | Yes      | string | Must be `"TZS"`                                         |
| `accountType`              | Yes      | string | Must be `"individual"`                                  |
| `KYCInformation.firstName` | Yes      | string | Customer’s first name                                   |
| `KYCInformation.lastName`  | Yes      | string | Customer’s last name                                    |
| `KYCInformation.email`     | No       | string | Customer’s email                                        |
| `phoneNumber`              | No       | string | Business phone in international format (e.g. `+255...`) |
| `merchantReference`        | No       | string | Unique reference on your system                         |

### 📁 Corporate Virtual Account

| Field                         | Required | Type   | Description                            |
| ----------------------------- | -------- | ------ | -------------------------------------- |
| `currency`                    | Yes      | string | Must be `"TZS"`                        |
| `accountType`                 | Yes      | string | Must be `"corporate"`                  |
| `KYCInformation.businessName` | Yes      | string | Merchant’s business name               |
| `KYCInformation.email`        | No       | string | Business email                         |
| `phoneNumber`                 | No       | string | Business phone in international format |
| `merchantReference`           | No       | string | Unique reference on your system        |

<br />

Request a Virtual Account

Sample Request payload (Corporate)

```json Individual
{
  "accountType": "individual"
   "currency": "TZS",
    "KYCInformation": {
        "firstName": "Testoma",
        "lastName": "TZS"
    },
}
```
```json With Reference
{
  "accountType": "individual",
   "currency": "TZS",
    "KYCInformation": {
        "firstName": "Testoma",
        "lastName": "TZS"
    },
		"merchantReference": "004546763" //Not Mandatory
}
```
```json Corporate
{
    "accountType": "corporate",
    "currency": "TZS",
    "KYCInformation": { 
      "businessName": "OmaTZS"
    },
}
```

If successful, you will receive a JSON snippet with the details of the newly created virtual account

### Sample Response

```json Response
{
    "success": true,
    "message": "A TZS virtual account has been created for you", // we use this communicate info with you 
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "7*******8",
        "alternateAccountNumbers": [],
        "merchantReference": "merchant-6d78fFj0djhj45678dkkjj0djd0",
        "KYCInformation": {
            "businessName": "OmaTZS"
        },
        "accountInformation": {
            "accountNumber": "0*****8***8",
            "accountName": "OmaTZS",
            "bankName": "Eco BANK"
            "bankCode": "",
            "reference": ""
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
        "virtualAccountType": "main",
        "riskRating": null,
        "checklist": null,
        "riskScreening": null,
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
      "sourceOfFunds": [],
      "leaseAgreement": [],
        "beneficialOwnershipCertificate": [],
        "articleOfIncorporation": [],
        "incorporationDocuments": [],
        "_id": "6892038f********f0012f403e9",
        "business": "64fef*******3e******83",
        "currency": "TZS",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2025-08-05T13:13:51.728Z",
        "updatedAt": "2025-08-05T13:13:51.728Z"
    }
}




```

Important Notes:\
\_id : This is the unique Identifier for the virtual account that was just created (accountId)\
business : This is your business ID.

### Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the virtual account creation.

<br />

## Sample Webhook

Account Creation

```json Response
{
"event":"virtualaccount.approved",
"data":{
"id":"68a5a7345*****011dd634568",
"business":"64f**8******f3eca573e83",
"isSubAccount":false,
"currency":"TZS",
"currencyType":"fiat",
"status":"approved",
"accountType":"corporate",
"accountInformation":{
"accountNumber":"0027**1**31",
"accountName":"Testoma Account",
"bankName":"Eco BANK",
"bankCode":""
},
"accountOpeningFee":0,
"isPermanent":true,
"virtualAccountType":"additional",
"createdAt":"2025-08-20T10:48:30.566Z",
"updatedAt":"2025-08-20T10:48:30.566Z"
}

```

Collection Successful

```json Response

{
  "event": "collection.successful",
  "data": {
    "business": "6***********3",
    "virtualAccount": "6******8*****4",
    "virtualAccountType": "main",
    "sessionId": "I34500",
    "senderAccountName": "Sender Name",
    "senderAccountNumber": "110*******63",
    "senderBankDetails": {
      "bankName": "Eco BANK",
      "bankCode": null,
      "swiftCode": null,
      "bic": null
    },
    "sourceCurrency": "TZS",
    "destinationCurrency": "TZS",
    "sourceAmount": 3000,
    "destinationAmount": 3000,
    "description": "Hello World",
    "amountReceived": 2982,
    "fee": 18,
    "customerName": "Customer Name",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2025-07-02T21:56:02.945Z",
    "createdAt": "2025-07-02T21:56:02.999Z",
    "updatedAt": "2025-07-02T21:56:02.999Z",
    "reference": "48173-2ff9-4ref-85b4-2e5ed4429e3",
    "merchantReference": "2456552"
  }
}

```

[Validate Webhooks](https://docs.fincra.com/docs/validating-webhook)

### 📂 Retrieving the details of a virtual bank account

**GET**

```
{{base_url}}/profile/virtual-accounts/<virtual_account_id>
```

Returns details of a single virtual account.

***

### 📃 Retrieve All Virtual Accounts

**GET**

```
{{base_url}}/profile/virtual-accounts/?currency=TZS
```

Returns all TZS virtual accounts you’ve created.

***

### 💳 Fund Your Virtual Account

Refer to: **[Funding a Virtual Account →](https://docs.fincra.com/docs/funding-a-virtual-account)**

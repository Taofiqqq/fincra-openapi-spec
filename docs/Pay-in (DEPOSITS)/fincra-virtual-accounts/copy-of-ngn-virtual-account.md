---
title: ' NGN Virtual Account'
deprecated: false
hidden: true
metadata:
  robots: index
---
This document outlines the updates to the NGN Virtual Account Creation and KYC Verification API. The primary objective of these changes is to transition from a BVN-only verification model to a more robust, document-based KYC system. This enables account creation for users without a BVN (using alternative IDs) and introduces deeper verification for corporate entities and Ultimate Beneficial Owners (UBOs)

* By using the merchant account: All that is needed is for the request to be made by calling the [create virtual account endpoint](create-permanent-ngn-virtual-account)

# 📋 Change Summary

## Key Changes

* **Granular KYC**  
  Introduced the `document` object to support identity verification documents such as passports, national IDs, and similar credentials.

* **Address Validation**  
  Structured address objects are now mandatory for both individual and corporate entities.

* **Flexible File Uploads**  
  All document fields (e.g., IDs, utility bills, bank statements) support:
  * Direct file uploads
  * Publicly accessible file URLs

* **Enhanced Corporate KYC Requirements**  
  Corporate entities must now provide details for **Ultimate Beneficial Owners (UBOs)**, including:
  * Identification documents
  * Structured address information

* **Conditional Validation Rules**  
  For **NGN virtual account requests**, users must provide **at least one** of the following:
  * `utilityBill`
  * `bankStatement`

***

> [!IMPORTANT]
>
> ### Document Requirement for NGN Accounts
>
> When submitting an **NGN virtual account request**, the API will reject the request if **both** `utilityBill` and `bankStatement` are missing.
>
> You **must provide at least one**.
>
> [!IMPORTANT]
>
> ### File Handling Rules
>
> The API accepts document fields as **strings**:
>
> * If the string begins with `http`, it is treated as a **public file URL**.
> * If the request uses `multipart/form-data`, uploaded **binary files** will be processed automatically.
>
> [!IMPORTANT]
>
> ### BVN Bypass Behaviour
>
> If the `bvn` field is omitted from `KYCInformation`:
>
> * The `document` object becomes **mandatory**
> * Physical file uploads (e.g., `meansOfId`) become **strictly required**
>
> [!IMPORTANT]
>
> ### Country Code Format
>
> Always use **ISO 3166-1 alpha-2** country codes.
>
> Examples:
>
> * `NG` → Nigeria
> * `KE` → Kenya
>
> [!IMPORTANT]
>
> ### Date Format Requirement
>
> All dates must follow the format:
>
> `YYYY-MM-DD`
>
> Incorrect formats will result in validation failures.

> 📘 Important
>
> * BVN is required when requesting a permanent virtual account.
> * Requests for NGN virtual accounts will be instantly approved.
> * Funds received by a virtual account created settles in the balances of the merchant.

## Supported Banks

Listed below are the banks that are supported in the creation of NGN permanent virtual accounts. This value is what you pass in under the "`channel`" field when making a virtual account request.

| **S/N** | **Bank**            | **Value**  | **Enabled** |
| ------- | ------------------- | ---------- | :---------- |
| 1       | Bold MFB            | bold       | no          |
| 2       | Globus Bank         | globus     | yes         |
| 3       | Wema Bank           | wema       | yes         |
| 4       | Providus Bank       | providus   | no          |
| 5       | Guaranty Trust Bank | habari     | yes         |
| 6       | Sterling Bank       | sterling   | yes         |
| 7       | Moniepoint MFB      | moniepoint | yes         |

## API Guide

### 1 - Get customer details

To create a virtual account, you'll need to pass information such as currency, accountType, channel, KYCInformation, etc.

Please find below the request parameters for the endpoint in step 2.

| Field                    | Mandatory | type   | Description                                                                   |
| ------------------------ | --------- | ------ | ----------------------------------------------------------------------------- |
| currency                 | Yes       | string | The virtual account currency.e.g NGN                                          |
| accountType              | Yes       | string | The virtual account type. This can be "individual"                            |
| channel                  | No        | string | The value should be `globus` for globus bank accounts .                       |
| dateOfBirth              | No        | string | The date of birth of the customer.                                            |
| KYCInformation.firstName | Yes       | string | The customer's first name . This is required to create an individual  account |
| KYCInformation.lastName  | Yes       | string | The customer's last name . This is required to create an individual  account  |
| KYCInformation.email     | No        | string | The customer's email.                                                         |
| KYCInformation.bvn       | Yes       | string | Bank verification number.                                                     |
| merchantReference        | No        | string | A unique ID/reference of the virtual account on your system.                  |

For Corporate

| Field                       | Mandatory | type   | Description                                                                                                     |
| --------------------------- | --------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| currency                    | yes       | string | The virtual account currency.e.g NGN                                                                            |
| accountType                 | yes       | string | The virtual account type . This should be "corporate"                                                           |
| channel                     | No        | string | The value should be `wema` for wema bank accounts, and `habari` for GTB accounts. `wema` is the default channel |
| dateOfBirth                 | No        | string | The date of birth of the customer.                                                                              |
| bvn                         | yes       | string | Bank verification number.                                                                                       |
| KYCInformation.email        | No        | string | The customer's email.                                                                                           |
| KYCInformation.businessName | Yes       | string | The customer's business name .                                                                                  |
| KYCInformation.bvn          | Yes       | string | Bank verification number.                                                                                       |
| KYCInformation.bvnName      | Yes       | string | The name you want to be on the account. This must be the same name on the customer's`BVN`                       |

<br />

### 2 - Request a virtual account

Make an API request to the [create virtual account endpoint](create-permanent-ngn-virtual-account)

Endpoint:

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

Payload:

```json Individual
{
    "currency": "NGN",
    "accountType": "individual",
    "KYCInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "customer@theiremail.com",
        "bvn": "12345678901"
    }
}
```
```json With Reference
{
    "currency": "NGN",
    "accountType": "individual",
    "KYCInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "customer@theiremail.com",
        "bvn": "12345678901"
    },
    "channel": "globus",
		"merchantReference": "001"
}
```
```json Corporate
{
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {
			"bvn": "90909090909", 
      "bvnName": "jane foster", 
      "businessName": "jane"
    }
}
```

**Please note that the BVN provided for a corporate account request must match the details of any of the directors or shareholders on the CAC record for the corporate entity**

<br />

If successful, you will receive a JSON snippet with the details of the newly created virtual account:

```json Response
{
    "success": true,
    "message": "We use this to communicate information to you.",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "3992219528",
        "merchantReference": null,
        "KYCInformation": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "customer@theiremail.com"
        },
        "accountInformation": {
            "accountNumber": "3992219528",
            "accountName": "Customer's full name",
            "bankName": "GLOBUS BANK",
            "bankCode": "103"
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
        "_id": "************************",
        "business": "*******************",
        "currency": "NGN",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "@timestamp",
        "updatedAt": "@timestamp"
    }
}
```

Important Notes:

* _id : This is the unique Identifier for the virtual account that was just created.
* business : This is your business ID.
* entityType : This states that the virtual account belongs to you

### 3 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the virtual account creation. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

Webhook Response:

```json Response
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "************************",
    "business": "******************",
    "isSubAccount": false,
    "currency": "NGN",
    "currencyType": "fiat",
    "status": "approved",
    "email": "customer@theiremail.com",
    "accountType": "individual",
    "accountInformation": {
      "accountNumber": "3992219528",
      "accountName": "Customer's full name",
      "bankName": "GLOBUS BANK",
      "bankCode": "103"
    },
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "@timestamp",
    "updatedAt": "@timestamp"
  }
}
```

Important Notes:

* id : This is the unique Identifier for the virtual account that was just created.

### 4 - Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](fetch-ngn-virtual-account-by-id).

Endpoint:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```json Response
{
    "success": true,
    "message": "Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "3992219528",
        "merchantReference": null,
        "KYCInformation": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "customer@theiremail.com"
        },
        "accountInformation": {
            "accountNumber": "3992219528",
            "accountName": "Customer full name",
            "bankName": "GLOBUS BANK",
            "bankCode": "103"
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
        "_id": "***********************",
        "business": {
            "name": "Fincra DevRel",
            "email": "chris@fincra.com"
        },
        "currency": "NGN",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "@timestamp",
        "updatedAt": "@timestamp"
    }
}
```

### 5 - Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the [list virtual accounts endpoint](list-dedicated-ngn-virtual-accounts).

```coffeescript GET
{{base_url}}/profile/virtual-accounts/?currency=ngn
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=ngn' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```json
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
            {
                "status": "approved",
                "isActive": true,
                "accountNumber": "1234567890",
                "merchantReference": null,
                "KYCInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "customer@theiremail.com",
                    "bvn": "TJ44iG9KQv6LOQNfjnidaniidCis6JbruEIJaHLzpIG7sdhjjsdBNRn7BoWCU3MGYYCWYt7u/sdn10D6DUhinudtcxI+Hiwuuu2oPnEA="
                },
                "accountInformation": {
                    "accountNumber": "1234567890",
                    "accountName": "Customer full name",
                    "bankName": "GLOBUS BANK",
                    "bankCode": "103"
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
                "_id": "659wdwf72nhsdjd581480",
                "business": {
                    "name": "Customer full name",
                    "email": "customer@theiremail.com"
                },
                "currency": "NGN",
                "accountType": "individual",
                "entityType": "main_account",
                "currencyType": "fiat",
                "createdAt": "2024-01-05T10:52:34.787Z",
                "updatedAt": "2024-01-05T10:52:34.787Z"
            },
            {
                "status": "approved",
                "isActive": true,
                "accountNumber": "1234567890",
                "merchantReference": null,
                "KYCInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "customer@theiremail.com",
                    "bvn": "TJ44ijnijwui82zpIG7CcRApq7TdxBLAda0E77oOVNBNRn7Bo342hjndwxzace1vwdl3fnxU5tE/CTv10ninsi72I+K2JkPx1eeq4kdgEEF6kQynPRa9K2QoPnEA="
                },
                "accountInformation": {
                    "accountNumber": "1234567890",
                    "accountName": "Customer full name",
                    "bankName": "GLOBUS BANK",
                    "bankCode": "103"
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
                "_id": "6564kjnaskj883be479",
                "business": {
                    "name": "Customer full name",
                    "email": "customer@theiremail.com"
                },
                "currency": "NGN",
                "accountType": "individual",
                "entityType": "main_account",
                "currencyType": "fiat",
                "createdAt": "2023-11-27T15:45:02.952Z",
                "updatedAt": "2023-11-27T15:45:02.952Z"
            }
        ],
        "total": 2
    }
}
```

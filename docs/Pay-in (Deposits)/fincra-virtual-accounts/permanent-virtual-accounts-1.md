---
title: Permanent Virtual Accounts
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
In this section, we will go over the steps required to set up and maintain a permanent virtual account. We would like to start by explaining how permanent virtual accounts can be created on Fincra.

* By using the merchant account: All that is needed is for the request to be made by calling the [create virtual account endpoint](/reference/request-virtual-accounts) 

> 📘 Important
>
> * When requesting a virtual account using a currency other than NGN, you need to include certain documents in the request body. Please follow this [link](/docs/documents-required-for-virtual-accounts-creation) to see the documents you would need.
> * BVN is required when requesting a permanent virtual account.
> * Only requests for Individual and corporate NGN virtual accounts will be instantly approved.
> * Funds received by a virtual account created settle in the balances of the merchant.

### 1 - Request a virtual account

Make an API request to the [create virtual account endpoint](/reference/request-virtual-accounts) 

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
        "bvn": "**************"
    },
    "channel": "globus"
}
```
```Text Corporate
```

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

* \_id : This is the unique Identifier for the virtual account that was just created.
* business : This is your business ID.
* entityType : This states that the virtual account belongs to you

### 2 - Receive and validate webhook notification

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

### 3 - Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](/reference/get-one-virtual-account).

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

### 4 - Retrieving list of virtual accounts created

Listen for webhook events. We will send a notification to your webhook URL that indicates the virtual account creation request was approved or declined. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.

```json
{
 "event": "virtualaccount.approved",
 "data": {
   "id": "6212692ccb0e3e7ea8fdbba3",
   "business": "62126841cb0e3efe8efdbb6a",
   "isSubAccount": true,
   "currency": "GBP",
   "currencyType": "fiat",
   "status": "approved",
   "accountType": "individual",
   "accountInformation": {
     "accountNumber": "GBXXCLJU04130780008933",
     "bankName": null,
     "bankCode": "CLJU",
     "countryCode": "GB",
     "otherInfo": {
       "iban": "GBXXCLJU04130780008933",
       "accountNumber": "80008933",
       "checkNumber": "XX",
       "sortCode": "041307",
       "bankSwiftCode": null
     }
   },
   "accountOpeningFee": 0,
   "isPermanent": true,
   "virtualAccountType": "additional",
   "createdAt": "2022-02-20T16:15:40.476Z",
   "updatedAt": "2022-02-20T16:15:52.691Z"
 }
```

---
title: Temporary Virtual Accounts
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
In this section, we will go over the steps required to set up and maintain a temporary virtual account. We would like to start by explaining how temporary virtual accounts can be created on Fincra.

* By using the merchant account: All that is needed is for the request to be made by calling the [create virtual account endpoint](/reference/request-virtual-accounts) 

> 📘 Important
>
> * When requesting a virtual account using a currency other than NGN, you need to include certain documents in the request body. Please follow this [link](/docs/documents-required-for-virtual-accounts-creation) to see the documents you would need.
> * BVN is required when requesting a permanent virtual account.
> * Only requests for Individual and corporate NGN virtual accounts will be instantly approved.
> * Funds received by a virtual account created settle in the balances of the merchant.

### 1 - Request A Virtual Account

Make an API request to the [create virtual account endpoint](/reference/request-virtual-accounts) 

```curl
curl --request POST \
     --url https://sandboxapi.fincra.com/profile/virtual-accounts/requests/ \
     --header 'accept: application/json' \
     --header 'api-key: L1vKNYjBd57iPWmUY4biUeEFdSTCvrer' \
     --header 'content-type: application/json' \
     --data '
{
     "currency": "NGN",
     "channel": "globus",
     "KYCInformation": {
          "firstName": "Fincra",
          "lastName": "Developers",
          "bvn": "01234567891"
     },
     "accountType": "individual"
}
'
```

If successful, you will receive a JSON snippet with the details of the newly created virtual account

```json
{
  "success": true,
  "message": "Thank you, Fincra Developers. A NGN virtual account has been created for you",
  "data": {
    "status": "approved",
    "isActive": true,
    "accountNumber": "7824707320",
    "merchantReference": null,
    "KYCInformation": {
      "firstName": "Fincra",
      "lastName": "Developers"
    },
    "accountInformation": {
      "accountNumber": "7824707329",
      "accountName": "Fincra Developers",
      "bankName": "GLOBUS BANK",
      "reference": "3795352b-0a95-4ad2-a0ee-2bbb2790d814"
    },
    "accountOpeningFee": 0,
    "pendingAdditionalInfoCount": 0,
    "isPermanent": true,
    "expiresAt": null,
    "isCheckoutVa": false,
    "isBankTransferVa": false,
    "reason": null,
    "monthlyVolume": null,
    "entityName": null,
    "paymentFlowDescription": null,
    "attachments": [],
    "meansOfId": [],
    "utilityBill": [],
    "virtualAccountType": "additional",
    "_id": "6344861d8a8ecf183d1e24e1",
    "business": "607b3cae67c64480bbf1b995",
    "currency": "NGN",
    "accountType": "individual",
    "entityType": "main_account",
    "currencyType": "fiat",
    "createdAt": "2022-10-10T20:52:45.230Z",
    "updatedAt": "2022-10-10T20:52:45.230Z"
  }
```

Important Notes:

* business : This is your business ID.
* entityType : This states that the virtual account belongs to you

### 2 - Retrieving The Details Of A Virtual Bank Account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](/reference/get-one-virtual-account).

```curl
curl --request GET \
     --url https://sandboxapi.fincra.com/profile/virtual-accounts/6344861d8a8ecf183d1e24e1 \
     --header 'accept: application/json' \
     --header 'api-key: <Your API key>>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```json
{
  "success": true,
  "message": "Virtual account fetched successfully",
  "data": {
    "status": "approved",
    "isActive": true,
    "accountNumber": "7824707329",
    "merchantReference": null,
    "KYCInformation": {
      "firstName": "efe",
      "lastName": "ebieroma"
    },
    "accountInformation": {
      "accountNumber": "7824707329",
      "accountName": "efe ebieroma",
      "bankName": "GLOBUS BANK",
      "reference": "3795352b-0a95-4ad2-a0ee-2bbb2790d814"
    },
    "accountOpeningFee": 0,
    "pendingAdditionalInfoCount": 0,
    "isPermanent": true,
    "expiresAt": null,
    "isCheckoutVa": false,
    "isBankTransferVa": false,
    "reason": null,
    "monthlyVolume": null,
    "entityName": null,
    "paymentFlowDescription": null,
    "attachments": [],
    "meansOfId": [],
    "utilityBill": [],
    "virtualAccountType": "additional",
    "_id": "6344861d8a8ecf183d1e24e1",
    "business": {
      "name": "Lokey Inc",
      "email": "tega@fincra.com"
    },
    "currency": "NGN",
    "accountType": "individual",
    "entityType": "main_account",
    "currencyType": "fiat",
    "createdAt": "2022-10-10T20:52:45.230Z",
    "updatedAt": "2022-10-10T20:52:45.230Z"
  }
}
```

 **Please take note of the following field  in the virtual account  response below:**

* **\_id**: This is the unique Identifier of the virtual account

### 3 - Receive And Validate Webhook  Notification

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

---
title: Creating Virtual Accounts
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
In this section, we will go over the steps required to set up and maintain a virtual account. We had like to start by explaining the different ways virtual accounts can be created on Fincra.\
There are two ways to request a virtual account: 

* By using a sub-account: First, a sub-account is created, then the sub-account ID is used to request the virtual account. For more information, see the[ Create a Virtual Account for Sub-accounts endpoint](/reference/create-a-virtual-account-for-a-sub-account)
* By using the merchant account: All that is needed is for the request to be made by calling the [create virtual account endpoint](/reference/request-virtual-accounts) 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Sub-Account Flow
      </th>

      <th>
        Main Account Flow
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Funds received by a virtual account created for a sub-account settle in the account of the sub-account and not the merchant's account. But merchants can use the [Fincra account-to-account transfer API](/reference/account-to-account-transfer-api) to move money from their sub-accounts to their main accounts.
      </td>

      <td>
        Funds received by a virtual account created for a merchant settle in the account of the merchants
      </td>
    </tr>
  </tbody>
</Table>

> 📘 Important
>
> When requesting a virtual account using a currency other than NGN, you need to include certain documents in the request body. Please follow this [link](/docs/documents-required-for-virtual-accounts-creation) to see the documents you would need.

Earlier, we mentioned there are two ways to request a virtual account. We will be working with you through the different ways to request virtual account requests via API.

## By Using The Main Account

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
     "channel": "wema",
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
    "accountNumber": "7824707329",
    "merchantReference": null,
    "KYCInformation": {
      "firstName": "Fincra",
      "lastName": "Developers"
    },
    "accountInformation": {
      "accountNumber": "7824707329",
      "accountName": "Fincra Developers",
      "bankName": "WEMA BANK",
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

Important notes

* business : This is your business ID.
* entityType : This states of the virtual account belongs you or your sub-account.

### 2 - Retrieving The Details Of A Virtual Bank Account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](endpoint/reference/get-one-virtual-account).

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
      "bankName": "WEMA BANK",
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

## By Using A Sub-Account

### 1 - Create A Sub-account

Make an API request to the [create sub-account endpoint](/reference/create-subaccount) 

```json
curl --request POST \
     --url https://sandboxapi.fincra.com/profile/business/607b3cae67c64480bbf1b995/sub-accounts \
     --header 'accept: application/json' \
     --header 'api-key: <Your API KEY>' \
     --header 'content-type: application/json' \
     --data '
{
     "name": "fincra",
     "email": "developers@fincra",
     "mobile": "0123456789",
     "country": "Nigeria"
}
'
```

If successful, you will receive a JSON snippet with the details of the newly created sub-account 

```json
{
  "success": true,
  "message": "You have successfully created a sub-account",
  "data": {
    "_id": "63447fb298d3da712adc1a7c",
    "status": "enabled",
    "businessTag": 121976,
    "isKYCApproved": true,
    "name": "efe",
    "email": "egege@gmail.com",
    "mobile": "08134448191",
    "country": "NG",
    "parentBusiness": "6225e8f5a9441522feb2f66d",
    "createdAt": "2022-10-10T20:25:22.457Z",
    "updatedAt": "2022-10-10T20:25:22.614Z"
  }
}
```

Important notes

* \_id : This is the business Id or sub-account ID of your sub-account
* parentBusiness : This is your business ID

### 2 - Request A Virtual Account

Make an API request to [create a virtual account for a sub-account endpoint. ](/reference/create-a-virtual-account-for-a-sub-account) 

```curl
curl --request POST \
     --url https://sandboxapi.fincra.com/profile/virtual-accounts/business/6225e8f5a9441522feb2f66d/sub-accounts/63447fb298d3da712adc1a7c/requests \
     --header 'accept: application/json' \
     --header 'api-key: <Your API Key>' \
     --header 'content-type: application/json' \
     --data '
{
     "currency": "NGN",
     "accountType": "individual",
     "channel": "wema",
     "dateOfBirth": "string",
     "KYCInformation": {
          "firstName": "Fincra",
          "lastName": "Developers",
          "bvn": "string",
}
```

If successful, you will receive a JSON snippet with the details of the newly created virtual account

```json
{
  "success": true,
  "message": "Thank you, Fincra Developer. A NGN virtual account has been created for your sub-account",
  "data": {
    "status": "approved",
    "isActive": true,
    "accountNumber": "7824530293",
    "merchantReference": null,
    "KYCInformation": {
      "firstName": "Fincra",
      "lastName": "Developer"
    },
    "accountInformation": {
      "accountNumber": "Fincra",
      "accountName": "Developer",
      "bankName": "WEMA BANK",
      "reference": "ae796516-37ea-4cb3-9bcd-16f29bd552e3"
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
    "_id": "6344839998d3da3f93dc1c2b",
    "parentBusiness": "6225e8f5a9441522feb2f66d",
    "business": "63447fb298d3da712adc1a7c",
    "currency": "NGN",
    "accountType": "individual",
    "entityType": "sub_account",
    "currencyType": "fiat",
    "createdAt": "2022-10-10T20:42:01.182Z",
    "updatedAt": "2022-10-10T20:42:01.182Z"
  }
}
```

> 📘 Note
>
> The virtual account status can be `pending,` `approved,` or `declined.` For more information, see the virtual account [overview](/docs/create-virtual-accounts#virtual-account-status).

### 2 - Receive And Validate Webhook  Notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the virtual account creation request was approved or declined. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.

```json
{
 "event": "virtualaccount.approved",
 "data": {
   "id": "6212692ccb0e3e7ea8fdbba3",
   "business": "62126841cb0e3efe8efdbb6a",
   "isSubAccount": true,
   "currency": "NGN",
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

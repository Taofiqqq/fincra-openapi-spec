---
title: How Virtual Accounts Work
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
In this section, we will go over the steps required to set up and maintain a virtual account. We'd like to start by explaining the different types of virtual accounts Fincra provides. We provide both temporary virtual accounts for one-time payments and permanent virtual accounts that can be used just like a regular bank account and do not expire.

The temporary virtual account [endpoint](/reference/create-temporary-virtual-account) can be used to create temporary virtual accounts. Permanent virtual accounts, on the other hand, can be created by following the steps below:

In this section we would be focusing on creating permanent  virtual accounts.

> 🚧 Note
>
> * With our virtual account API, you can request virtual accounts from any of our supported banks. Please the [API reference](/docs/create-virtual-accounts#multiple-bank-options) for banks we support and  parameters needed to create NGN virtual accounts
> * It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you amd the funds get settled in your wallet, to check your wallet balance please see the [wallet API](/reference/get-a-wallet)

Every virtual account is automatically linked to a wallet of the same currency. If you have a number of virtual accounts and customers transfer money to the account, the funds will settle in the wallet linked to the virtual account. We support only one wallet per currency at Fincra, but that wallet can be linked to an unlimited number of virtual accounts.. Please study the [wallet API](/reference/introduction-7) for more details .

Our Virtual Accounts can be classified into two based on how they can be funded: 

* Main virtual accounts are corporate virtual accounts that belong to a registered merchant on Fincra and are the first corporate virtual accounts created by the merchant. Funds that come into the main virtual account can be fetched by the [wallet top-up API](/reference/get-wallet-top-ups).
* Additional virtual accounts are individual and other corporate virtual accounts created by a merchant, and collections linked to these accounts can be fetched by the [collection API](/reference/get-all-collections).

## How to create a virtual account

Please follow the steps below to create  a virtual account.

### 1 - Request a Virtual account

There are two ways to request a virtual account: 

* By using a sub-account :  First, a [sub-account](/reference/create-subaccount) is created,  then the [sub-account ID](/reference/introduction-2#subaccount-id) is used to request the virtual account. For more information, see the [Create a Virtual Account for Subaccounts endpoint](/reference/request-individual-virtual-account-for-a-sub-account-1)
* By using the merchant account: All that is needed is for the request to be made by calling the \[create virtual account endpoint] (/reference/request-virtual-accounts)

The difference between the two approaches is that when a sub-account's virtual account is funded, only the sub-account receives the funds; the merchant account is not impacted. However, it is possible to withdraw money from the sub-account to the merchant's account by using the [Fincra Transfer API](/reference/wallet-to-wallet-transfer-api).

Here's what a request would look like:

```json NGN Corporate VA
{
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "90909090909", "businessName": "jane"},
    "channel": "vfd"
}
```
```json NGN individual VA
{
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "9090909090"}
}
```
```json EUR/GBP Coporate VA
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": " legal enterprise",
  "reason": "The reason for requesting a corporate account",
  "monthlyVolume": "60000",
  "paymentFlowDescription": "we pay in pounds every month",
   "KYCInformation": {
      "email": "james@joy.com",
      "businessName": "testing",
      "businessRegistrationNumber": "testing",
      "businessCategory": "testing",
      "address": {
        "country": "NG",
        "zip": "234",
        "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
      },
      "additionalInfo": "testing",
      "incorporationDate": "20919",
      "businessActivityDescription": "testing"
    },
"attachments": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg"
}
```
```json Individual  EUR/GBP VA
{
    "currency": "GBP",
    "accountType": "individual",
    "meansOfId": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg",
    "utilityBill": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg",
     "KYCInformation": {
      "firstName": "dupe",
       "lastName": "jane",
       "email": "admin@gmail.com",
       "birthDate": "2009-12-31",
      "address": {
       "country": "NG",
        "zip": "234",
       "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
       },
      "document": {
      "type": "passport",
         "number": "123433",
        "issuedCountryCode": "NG",
       "issuedBy": "government",
      "issuedDate": "2011-07-21",
     "expirationDate": "2011-07-21"
     },
      "occupation": "Software Engineer"
    }
  }
```
```json Corporate EUR/GBP VA for your sub account
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": "jacob zuma enterprise",
  "reason": "ffsf",
   "KYCInformation": {
      "email": "james@joy.com",
      "businessName": "testing",
      "businessRegistrationNumber": "testing",
      "businessCategory": "testing",
      "address": {
        "country": "NG",
        "zip": "234",
        "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
      },
      "additionalInfo": "testing",
      "incorporationDate": "20919",
      "ultimateBeneficialOwners": [
        {
          "firstName": "jane",
          "lastName": "dupe",
          "ownershipPercentage": 79,
          "document": {
            "type": "other",
            "number": "123433",
            "issuedCountryCode": "NG",
            "issuedBy": "government",
            "issuedDate": "2011-07-21"
          },
          "politicallyExposedPerson": true
        }
      ],
      "businessActivityDescription": "testing"
    }
}
```

**When applying for a virtual account using a currency other than NGN, please keep the following in mind and pay attention to it.  :**

* When you send a virtual account creation request, you need to include certain documents in the request body. Please follow this [link](/docs/documents-required-for-virtual-accounts-creation) to see the documents you would need
* The virtual account status can be `pending,` `approved,` or `declined.` For more information, see the virtual account [overview](/docs/create-virtual-accounts#virtual-account-status)

Here's what a response would look like:

```json
{
    "success": true,
    "message": "Thank you Billionaire. A NGN virtual account has been created for you",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "4231348431",
        "KYCInformation": {
            "businessName": "ventures enterprise"
        },
        "accountInformation": {
            "accountNumber": "4231348431",
            "accountName": "efe enterprise",
            "bankName": "WEMA BANK",
            "reference": "2949b6b5-a60c-4f6b-99a9-4a751a59f03e"
        },
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [],
        "utilityBill": [],
        "virtualAccountType": "additional",
        "_id": "625f60c4b5a8a6d49c672fa2",
        "business": "61aa4e72cc67b6f04d97f874",
        "currency": "NGN",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2022-04-20T01:24:20.340Z",
        "updatedAt": "2022-04-20T01:24:20.340Z"
    }
}
```

### 2 - Retrieving the details of a Virtual Bank Account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you’ll need to initiate a GET request to the [Virtual Bank Account Query API endpoint.](https://documenter.getpostman.com/view/10721039/Tz5m7zMw#49ba6f7d-9f89-462f-b3f8-bb8b1fbee950) .

```json Request
Endpoint - {{host}}/profile/virtual-accounts/:virtualAccountId
```

 **Please take note of the following field  in the virtual account  response below :**

* **\_id** : This is the unique Identifier of the virtual account

```json Response
{
    "success": true,
    "message": "Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "4231348431",
        "KYCInformation": {
            "businessName": "john enterprise"
        },
        "accountInformation": {
            "accountNumber": "4231348431",
            "accountName": "enterprise",
            "bankName": "WEMA BANK",
            "reference": "2949b6b5-a60c-4f6b-99a9-4a751a59f03e"
        },
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [],
        "utilityBill": [],
        "virtualAccountType": "additional",
        "_id": "625f60c4b5a8a6d49c672fa2",
        "business": {
            "name": "name",
            "email": "test13@nk.com"
        },
        "currency": "NGN",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2022-04-20T01:24:20.340Z",
        "updatedAt": "2022-04-20T01:24:20.340Z"
    }
}
```

### 3 - Receive and validate webhook  notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the virtual account creation request was approved or declined. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.

```json Va webhook
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

### Fetching Virtual Account Transactions

***

We have three types of transactions that can be performed on an account, which are payouts, collections, and conversions.

* For payouts, please see the [Payout API](/reference/introduction-11) that includes all the endpoints needed to track payouts from the virtual account
* For collections, please see the [Collection API](/reference/introduction-4) that includes all endpoints needed to track payments to the virtual account.
* For conversions, please see the [Conversion API](/reference/introduction-6) that includes all the endpoints you need to track your conversions

### Get Virtual Accounts Balance

It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API.](/docs/wallets) 

![3314](https://files.readme.io/da1c600-e4d2ed3-Balance_API.png "e4d2ed3-Balance_API.png")

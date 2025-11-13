---
title: How to fund a Virtual Account
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can fund your virtual account with bank transfers, and the inflows will reflect in your balance. A web notification is sent when your virtual account is funded through bank transfers.

## Euro Account Settlement Time

The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.

| Payment Scheme | Time                  |
| :------------- | :-------------------- |
| SEPA           | Within 24hours-2 days |
| SEPA INSTANT   | Instant               |

## How to receive payments with Fincra virtual accounts

The following steps need to be taken in order to receive payments in your account:

## 1 - Virtual Account Creation

You can create a virtual account by using our create virtual account endpoints.

> 👍 Endpoints:
> 
> - /profile/virtual-accounts/requests/: This endpoint lets you create a virtual account on our platform.

```json Virtual account request
{
     "currency": "NGN",
     "accountType": "individual",
     "KYCInformation": {
         "firstName": "john",
         "lastName": "doe"
     }
}
```
```json virtual account response
{
    "success": true,
    "message": "Thank you,  Billionaire. A NGN virtual account has been created for you",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "4231242764",
        "KYCInformation": {
            "firstName": "john",
            "lastName": "doe"
        },
        "accountInformation": {
            "accountNumber": "4231242764",
            "accountName": "john doe",
            "bankName": "WEMA BANK",
            "reference": "08baefab-4d53-4c81-a002-b81ac5d7488d"
        },
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": false,
        "expiresAt": "2022-05-03T07:43:17.339Z",
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [],
        "utilityBill": [],
        "virtualAccountType": "additional",
        "_id": "6249501511f92862ae12db02",
        "business": "61aa4e72cc67b6f04d97f874",
        "currency": "NGN",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2022-04-03T07:43:17.341Z",
        "updatedAt": "2022-04-03T07:43:17.341Z"
    }
}
```

## 2 - Topup

You provide your customer with the account details of the virtual account that you created. Then your customer will initiate a deposit to your account.

```json Account details
"accountInformation": {
            "accountNumber": "4231242764",
            "accountName": "john doe",
            "bankName": "GLOBUS BANK",
            "reference": "08baefab-4d53-4c81-a002-b81ac5d7488d"
  },
```

## 3 - Webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection or payment received. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end. 

```json collection webhook
{
  "event": "collection.successful",
  "data": {
    "business": "61602d2950139ad72e619a91",
    "virtualAccount": "61dc08222d2cc64836c5a591",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 200000,
    "destinationAmount": 200000,
    "amountReceived": 199900,
    "fee": 100,
    "customerName": "Ultimate Global Ventures",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2022-03-28T07:15:19.402Z",
    "createdAt": "2022-03-28T07:15:19.403Z",
    "updatedAt": "2022-03-28T07:15:19.403Z",
    "reference": "f9121b33-7e15-409e-b588-36c6146d5823"
  }
}
```
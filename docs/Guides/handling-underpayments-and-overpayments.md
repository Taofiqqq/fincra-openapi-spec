---
title: Underpayment vs Overpayment
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
This documentation guides seamlessly managing underpayment and overpayment through the Reversal Feature in the Merchant Dashboard. The feature allows you to identify discrepancies in incoming transactions and initiate reversals effortlessly.

To understand the functionality, you can watch the [demo video](https://8h6y7.r.a.d.sendibm1.com/mk/cl/f/sh/1t6Af4OiGsE8LIjZCp6N82nAJA8OSC/M5BrJKXHxYdd).

## Handling on the API Level

Upon fulfilment of a transaction, a webhook response will be sent containing the expected amount (**amount**) and the amount received (**amountReceived**).

For transactions fulfilled via bank transfer, identified by the field **"type":"bank_transfer"** in the web-hook response, it is essential to **verify that the actual deposited amount matches the expected amount**.

If the transaction status is marked as **"success"**, indicating a successful deposit, the next step is to compare the **"amount"** field with the **"amountReceived"** field. This helps determine if the payment matches the expected amount or is under/over the specified amount.

The **"amountReceived"** field is also present in transaction status re-queries.

**Note:** Web-hooks and re-queries will still show **status:"success"** even in the case of overpayments or underpayments. It is crucial to cross-check the **"amount"** against the **"amountReceived"** field to confirm a true success.

**Example**  
In the event of an underpayment, the status remains "success," but the difference in "amount" vs **"amountReceived"** is evident.

```json Webhook Response
{
   "event":"charge.successful",
   "data":{
      "id":579099,
      "authorization":{
         "mode":null,
         "redirect":null,
         "metadata":null
      },
      "auth_model":null,
      "amount":1522.58,
      "amountReceived":270,
      "currency":"NGN",
      "fee":4.06,
      "vat":0.28,
      "message":"",
      "status":"success",
      "reference":"fcr-p-0810e52b72",
      "description":"checkout",
      "type":"bank_transfer",
      "customer":{
         "name":"Christopher Chukwuemeka",
         "email":"acustomer@reallyme.com",
         "phoneNumber":null
      },
      "metadata":{
         
      },
      "settlementDestination":"wallet",
      "virtualAccount":{
         "bankName":"globus",
         "id":"654****************f57",
         "bankCode":"103",
         "accountName":"Fincra DevRel",
         "accountNumber":"3993985152",
         "sessionId":"100*******************95",
         "channelName":"globus",
         "payerAccountNumber":"3000002151",
         "payerAccountName":"CHRISTOPHER CHUKWUMA CHUKWUEMEKA",
         "payerBankName":"eTranzact",
         "payerBankCode":null,
         "expiresAt":"2023-11-09T10:44:42.000Z",
         "business":"64f*************10"
      },
      "amountToSettle":265.9365,
      "chargeReference":"fcr-bt-be8fc1d47fda93755"
   }
}
```
```json On Transaction Requery
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 454843,
        "businessId": "6************a710",
        "paymentLinkId": null,
        "amount": 1500,
        "currency": "NGN",
        "convertedAmount": 1500,
        "amountReceived": 270,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "card",
        "redirectUrl": "https://docs.fincra.com/docs/payin-webhook",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "feeBearer": "customer",
        "reference": "fcr-p-0810e52b72",
        "merchantReference": "fcr-p-0810e52b72",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "createdAt": "2023-11-09T10:24:12.406Z",
        "updatedAt": "2023-11-09T10:25:40.000Z",
        "customer": {
            "name": "Christopher Chukwuemeka",
            "email": "acustomer@reallyme.com",
            "phoneNumber": null
        },
        "business": {
            "settings": {
                "feeBearer": "customer",
                "settlementDestination": "wallet",
                "enableWebhook": true,
                "callbackURL": "https://webhook.site/a*****-7**a-4384-***-****828"
            },
            "emailSettings": {
                "collectionNotification": false,
                "topupNotification": false,
                "settlementNotification": false,
                "paymentReceiptNotification": false
            },
            "checkoutSettings": {
                "useBrandLogo": false,
                "buttonTextColor": null,
                "buttonColor": null,
                "fontColor": null,
                "fontFamily": null,
                "backgroundColor": null,
                "backgroundTextColor": null
            },
            "status": "enabled",
            "countryCallingCode": "+234",
            "businessTag": 200168,
            "isKYCApproved": true,
            "isBlocked": false,
            "_id": "64*************710",
            "name": "Fincra DevRel",
            "businessType": "Fintech",
            "website": "https://fincra.com",
            "email": "chris@business.com",
            "country": "NG",
            "mobile": "8********62",
            "businessKey": "B-BZC28rJyhjYJ",
            "createdAt": "2023-09-01T11:24:29.387Z",
            "updatedAt": "2023-11-09T10:23:54.060Z"
        }
    }
}
```
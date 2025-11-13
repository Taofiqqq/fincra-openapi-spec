---
title: Checkout Redirect
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
The Checkout API allows you to safely and securely receive payments from your customers. Your server calls the Create Payment API to generate a checkout link, which you then redirect your users to so they can make a payment. After making a payment, your users are redirected to your website.

Let's get started.

## 1 - Collect Payment Details

To initialize the transaction, you'll need to pass information such as email, first name, last name, amount, transaction reference, etc.

Please find below the request parameters for the endpoint.

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Data type",
    "h-2": "Required",
    "h-3": "Description",
    "0-0": "amount",
    "0-1": "integer",
    "0-2": "Required",
    "0-3": "The amount to charge the customer.",
    "1-0": "redirectUrl",
    "1-1": "string",
    "1-2": "Optional",
    "1-3": "The URL to redirect your customer when the transaction is complete.",
    "2-0": "currency",
    "2-1": "string",
    "2-2": "Required",
    "2-3": "The currency in which the customer should be charged. Options are [NGN, GHS, KES, UGX]",
    "3-0": "reference",
    "3-1": "string",
    "3-2": "Optional",
    "3-3": "Your transaction reference. Must be unique for every transaction.  \nIf you do not provide one, a unique transaction reference would be generated for the transaction.",
    "4-0": "feeBearer",
    "4-1": "string",
    "4-2": "Required",
    "4-3": "This will set who bears the fees of the transaction. If it is set to `business`, the merchant will bear the fee, while if it is set to `customer`, the customer will bear the fee. By default, it is set to `business`",
    "5-0": "metadata",
    "5-1": "object",
    "5-2": "Optional",
    "5-3": "Include any information you'd want to send to Fincra in this object.  \ne.g metadata: {userId: \"my_user_id\" }",
    "6-0": "customer",
    "6-1": "string",
    "6-2": "Required",
    "6-3": "JSON object containing customer details",
    "7-0": "customer.name",
    "7-1": "string",
    "7-2": "Required",
    "7-3": "The name of the customer",
    "8-0": "customer.email",
    "8-1": "string",
    "8-2": "Optional",
    "8-3": "The email of the customer",
    "9-0": "customer.phoneNumber",
    "9-1": "string",
    "9-2": "Optional",
    "9-3": "The mobile number of the customer",
    "10-0": "successMessage",
    "10-1": "string",
    "10-2": "Optional",
    "10-3": "The message you want customers to see after successful payment.",
    "11-0": "settlementDestination",
    "11-1": "string",
    "11-2": "Optional",
    "11-3": "Settlement destination is the location where you want your payments to be settled. Settlements are only to wallets (balances) for now  \nValue for settlementDestination would be **wallet** ",
    "12-0": "paymentMethods",
    "12-1": "array",
    "12-2": "Optional",
    "12-3": "The payment method you want to make available to your customers E.g, Bank (bank_transfer), card (card).",
    "13-0": "defaultPaymentMethod",
    "13-1": "string",
    "13-2": "Optional",
    "13-3": "The Payment method that should be active by default on the checkout page E.g bank_transfer or card"
  },
  "cols": 4,
  "rows": 14,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


## 2 - Initiate Payment

After collecting the necessary payment details for the transaction. Make a POST request to our [create checkout endpoint](https://docs.fincra.com/reference/create-checkout).

Endpoint:

```json POST
{{host}}/checkout/payments
```
```coffeescript cURL
curl --location 'https://api.fincra.com/checkout/payments' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'x-pub-key: <Your API public key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initialize a transaction:

```json Payload
{
    "amount": 350,
    "currency": "NGN",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
    "feeBearer":"customer",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json With Reference
{
    "amount": 350,
    "currency": "NGN",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
    "status": true,
    "message": "Hosted link generated",
    "data": {
        "link": "https://checkout.fincra.com/pay/fcr-p-********",
        "payCode": "fcr-p-********"
    }
}
```
```json With Reference
{
    "status": true,
    "message": "Hosted link generated",
    "data": {
        "link": "https://checkout.fincra.com/pay/fcr-p-********",
        "reference": "********",
        "payCode": "fcr-p-********"
    }
}
```

**Note**: When no reference is passed from your end, the payCode is used as the transaction reference.

After you get the above response, you should then redirect your customer to the checkout URL provided in the response ("link"), to enable them complete their payment. Once the payment is complete or in the event of a failure, Fincra will redirect your customer to your specified redirectUrl. The transaction reference will be appended as a query parameter to your redirectUrl as well.

e.g <https://website_redirectUrl/?reference=YOUR_REFERENCE>

In a situation where no redirectUrl is passed, the customer receives visual confirmation on the completion of the payment and is NOT redirected out of the current webpage.

## 3 - Verify payment

It is critical that you confirm the transaction using its reference, just because the redirectUrl was visited doesn't prove that transaction was successful. You can confirm payment by using the [verify payment endpoint](/reference/verify-payment)

Endpoint:

```json GET
{{host}}/checkout/payments/merchant-reference/{{reference}}
```
```coffeescript cURL
curl --location 'https://api.fincra.com/checkout/payments/merchant-reference/{{reference}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'x-business-id: <Your business ID>' \
```

Here's the api response:

```json Payload
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 443787,
        "businessId": "******************",
        "paymentLinkId": null,
        "amount": 350,
        "currency": "NGN",
        "convertedAmount": 350,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "bank_transfer",
        "redirectUrl": "https://yoursite.com/redirect-destination",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "feeBearer": "customer",
        "reference": "fcr-p-*********",
        "merchantReference": "fcr-p-*********",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "createdAt": "@timestamp",
        "updatedAt": "@timestamp",
        "customer": {
            "name": "Christopher Chukwuemeka",
            "email": "chris@fincra.com",
            "phoneNumber": null
        },
        "business": {
            "settings": {
                "feeBearer": "customer",
                "settlementDestination": "wallet",
                "enableWebhook": false
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
            "_id": "********************",
            "name": "Fincra DevRel",
            "businessType": "Fintech",
            "website": "https://fincra.com",
            "email": "chris@fincra.com",
            "country": "NG",
            "mobile": "**********",
            "businessKey": "B-*********",
            "createdAt": "@timestamp",
            "updatedAt": "@timestamp"
        }
    }
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

**Note:** We will only send you a webhook when the transaction is successful

Webhook response:

```json Response \[Bank Transfer]
{
  "event": "charge.successful",
  "data": {
    "id": 601227,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 355.27,
    "amountReceived": 200,
    "currency": "NGN",
    "fee": 3.01,
    "vat": 0.21,
    "message": "",
    "status": "success",
    "reference": "fcr-p-********",
    "description": "checkout",
    "type": "bank_transfer",
    "customer": {
      "name": "Christopher Chukwuemeka",
      "email": "chris@fincra.com",
      "phoneNumber": null
    },
    "metadata": {},
    "settlementDestination": "wallet",
    "virtualAccount": {
      "bankName": "globus",
      "id": "*************************",
      "bankCode": "103",
      "accountName": "Fincra DevRel",
      "accountNumber": "3994698574",
      "sessionId": "100006231127112001938859294368",
      "channelName": "globus",
      "payerAccountNumber": "***********",
      "payerAccountName": "*************************",
      "payerBankName": "***********",
      "payerBankCode": null,
      "expiresAt": "@timestamp",
      "business": "*********************"
    },
    "amountToSettle": 196.99,
    "chargeReference": "fcr-bt-************"
  }
}
```

## Webhook Response

The webhook response is explained in detail here.

| Data                       | description                                                                                                                                      |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| event                      | The Webhook event                                                                                                                                |
| type                       | The type of transaction                                                                                                                          |
| data                       | The data object                                                                                                                                  |
| data.method                | The payment method e.g card, bank transfer                                                                                                       |
| data.paymentReference      |                                                                                                                                                  |
| data.transactionReference  | The unique reference generated for the transaction                                                                                               |
| data.merchantReference     | The **reference** the merchant included while initiating the transaction. This is the reference of the transaction on the merchant's application |
| data.amount                | The amount the customer paid                                                                                                                     |
| data.amountToSettle        | The amount the merchant receives                                                                                                                 |
| datafee                    | The fee charged for the transaction                                                                                                              |
| data.feeBearer             | The bearer of the fees                                                                                                                           |
| data.status                | The status of the transaction                                                                                                                    |
| data.settlementDestination | The settlement destination. This is by default, wallet                                                                                           |
| data.currency              | The currency in which the payment was made                                                                                                       |
| data.customer              | The customer. This is an object that contains the name , email and phoneNumber of the customer                                                   |
| data.metadata              | The extra information included in the transaction                                                                                                |
| data.createdAt             | This is the timestamp the transaction was created                                                                                                |
| data.updatedAt             | This is the timestamp the transaction was updated                                                                                                |
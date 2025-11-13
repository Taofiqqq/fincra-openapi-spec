---
title: Checkout Redirect
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
The Checkout API allows you to safely and securely receive payments from your customers. Your server calls the Create Payment API to generate a checkout link, which you then redirect your users to so they can make a payment. After making a payment, your users are redirected to your website.

# Payment methods

Our checkout solution offers a gateway to various payment methods. Some of the supported methods include:

1. Card 
2. Bank Transfer
3. Mobile money
4. USSD via PayAttitude

| Method        | API variable  |
| :------------ | :------------ |
| Card          | card          |
| Bank Transfer | bank_transfer |
| Mobile money  | mobile_money  |
| PayAttitude   | PayAttitude   |

# Supported currencies for checkout

| Currencies | Bank Transfer | Cards | Mobile money | USSD |
| :--------- | :------------ | :---- | :----------- | :--- |
| KES        | YES           | N/A   | YES          | N/A  |
| ZMW        | N/A           | YES   | YES          | N/A  |
| UGX        | YES           | N/A   | YES          | N/A  |
| ZAR        | YES           | YES   | N/A          | N/A  |
| TZS        | N/A           | N/A   | YES          | N/A  |
| GHS        | YES           | N/A   | YES          | N/A  |
| NGN        | YES           | YES   | N/A          | YES  |
| USD        | N/A           | YES   | N/A          | N/A  |
| XAF        | N/A           | N/A   | YES          | N/A  |
| XOF        | N/A           | N/A   | YES          | N/A  |

# How to use the checkout redirect API

## 1 - Collect Payment Details

To initialise the transaction, you'll need to pass information such as email, first name, last name, amount, transaction reference, etc.

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
    "2-3": "The currency in which the customer should be charged. Options are [NGN, GHS, KES, UGX, ZAR, ZMW, XAF,XOF] ",
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
    "8-2": "Required",
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
    "12-3": "The payment method you want to make available to your customers  \nE.g, Bank (bank_transfer), Card (card), Mobile Money (mobile_money), Pay Attitude (payAttitude).",
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

After collecting the necessary payment details for the transaction. Make a POST request to our [create checkout endpoint](initiate-checkout).

**Endpoint**:

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

Here's a sample payload to initialise a transaction:

```json NGN
{
    "amount": 350,
    "currency": "NGN",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["bank_transfer", "card", "payAttitude"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json GHS
{
    "amount": 350,
    "currency": "GHS",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json KES
{
    "amount": 350,
    "currency": "KES",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json Pool account (e.g KES)
{
    "amount": 350,
    "currency": "KES",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["bank_transfer"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json UGX
{
    "amount": 350,
    "currency": "UGX",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json ZMW
{
    "amount": 30,
    "currency": "ZMW",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com",
        "phoneNumber": "0961111111"
    },
  	"paymentMethods": ["mobile_money", "card"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json ZAR
{
    "amount": 30,
    "currency": "ZAR",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com",
        "phoneNumber": "0961111111"
    },
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json XOF
{
    "amount": 350,
    "currency": "XOF",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com",
				"phoneNumber": "0961111111"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
} 
```
```json XAF
{
    "amount": 350,
    "currency": "XAF",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com",
				"phoneNumber": "0961111111"
    },
  	"paymentMethods": ["mobile_money"],
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
        "reference": "*********************",
        "payCode": "fcr-p-********"
    }
}
```

**Note**: When no reference is passed from your end, the payCode is used as the transaction reference.

After you get the above response, you should then redirect your customer to the checkout URL provided in the response ("link"), to enable them complete their payment. Once the payment is complete or in the event of a failure, Fincra will redirect your customer to your specified redirectUrl. The transaction reference will be appended as a query parameter to your redirectUrl as well.

e.g <https://website_redirectUrl/?reference=YOUR_REFERENCE>

In a situation where no redirectUrl is passed, the customer receives visual confirmation on the completion of the payment and is NOT redirected out of the current webpage.

## 3 - Verify payment

It is critical that you confirm the transaction using its reference, just because the redirectUrl was visited doesn't prove that transaction was successful. You can confirm payment by using the [verify payment endpoint](verify-checkout-status). 

**Note**: It is advised that you consult the Overpayments and Underpayments [doc](https://docs.fincra.com/docs/handling-underpayments-and-overpayments) to see how to treat such transactions. A sample response for an underpayment has been added. You would note the `varianceType` which marks it as an `underpayment`, and also the `amountReceived` field which tells you the true amount paid by customers in the case where `bank_transfer` is the payment method uses.

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
        "id": 1093510,
        "businessId": "******************",
        "paymentLinkId": null,
        "amount": 100,
        "currency": "NGN",
        "convertedAmount": 100,
        "amountReceived": 101.51,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "card",
        "redirectUrl": "https://yoursite.com/redirect-destination",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "settlementTime": "instant",
        "feeBearer": "customer",
        "reference": "fcr-p-fc99410576",
        "merchantReference": "31c1169c-d535-4e0b-90eb-a03a99c2f334",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "varianceType": null,
        "createdAt": "2024-05-16T10:31:08.680Z",
        "updatedAt": "2024-05-16T10:33:07.000Z",
        "customer": {
            "name": "Customer name",
            "email": "customer@theirmail.com",
            "phoneNumber": "2348189299860"
        },
        "amountExpected": 100,
        "message": null,
        "actionRequired": null
    }
}
```
```json Underpayment
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 1162018,
        "businessId": "******************",
        "paymentLinkId": null,
        "amount": 7000,
        "currency": "NGN",
        "convertedAmount": 7000,
        "amountReceived": 73,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "card",
        "redirectUrl": "https://yoursite.com/redirect-destination",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "settlementTime": "instant",
        "feeBearer": "customer",
        "reference": "fcr-p-24a8b52ca5",
        "merchantReference": "15c3eb79-67de-445f-8cbe-acce91e5aca2",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "varianceType": "underpayment",
        "createdAt": "2024-05-27T09:46:52.708Z",
        "updatedAt": "2024-05-27T09:48:06.000Z",
        "customer": {
            "name": "Customer name",
            "email": "customer@theirmail.com",
            "phoneNumber": "2348173729860"
        },
        "amountExpected": 7000,
        "message": "INCORRECT_AMOUNT",
        "actionRequired": "Process refund via dashboard/Refund API"
    }
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

**Note:** We will only send you a webhook when the transaction is successful. Also, ensure to consult our Overpayments and Underpayments [doc](https://docs.fincra.com/docs/handling-underpayments-and-overpayments) to see how to treat when webhook for such is received.

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
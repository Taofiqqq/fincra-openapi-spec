---
title: Integration Flow
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
### 1. Generate Quote

Initiate the payment process by calling the [Generate Quote API](generate-quote). This API generates a unique quote representing the amount to be collected and the currency in which the payment will be made.

Endpoint:

```json POST
{{host}}/quotes/generate
```
```coffeescript cURL
curl --location 'https://api.fincra.com/quotes/generate' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to generate a quote:

```json Sample Payload
{
  "action": "send",
  "transactionType": "conversion",
  "paymentDestination": "fliqpay_wallet",
  "sourceCurrency": "USD", // This is the amount you would be settled in
  "destinationCurrency": "GHS", // set the currency customer would pay in
  "business": "{{business_id}}",
  "amount": "10000", // this is the source surrency amount
  "feeBearer": "business",
  "delay": true // This has to be set to true
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "USD",
        "destinationCurrency": "GHS",
        "sourceAmount": 100,
        "destinationAmount": 1580,
        "action": "send",
        "transactionType": "conversion",
        "fee": 0,
        "initialAmount": 100,
        "quotedAmount": 1580,
        "rate": 15.8,
        "amountToCharge": 100,
        "amountToReceive": 1580,
        "delay": true,
        "reference": "f3207151-f0b6-4af7-9040-a54d36406fdc",
        "expireAt": "2024-08-21T07:37:42.155Z",
        "settlementDate": "2024-08-21T07:37:12.000Z"
    }
}
```

> ❗️ Important
>
> The quote (FX rate) expires after 30 seconds by default. If you need a different configuration, please request a custom expiry from  our team.
>
> The quote is used to determine the exact amount the customer will pay in their local currency. Kindly note and save the returned `reference`, as this would be used in the request to generate the payment link.

### 2. Generate Payment Link

After generating the quote, you must use the returned quote reference to create a payment link. This `quote reference` is essential as it ties the payment link to the specific quote, ensuring that the correct amount is charged based on the agreed exchange rate. The currency used to generate the payment link is the `sourceCurrency` specified earlier when generating the quote.

Once the correct quote reference is provided, the Payment API will return a payment link. This link is the gateway for your customer to complete their transaction. Ensure that you share this link with your customer promptly, as it includes all necessary details for a smooth payment process.

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

Here's a sample payload to generate a payment link:

```json Sample Payload
{
    "amount": 100,
    "currency": "USD",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
    "reference":"your-internal-reference-id", // pass a reference you would use to track transaction.
    "redirectUrl":"https://yoursite.com/redirect-destination",
    // this is the quote reference earlier generated
    "quoteReference": "cf788a51-051d-455f-a66e-676e2445aee1",
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
    "status": true,
    "message": "Hosted link generated",
    "data": {
        "link": "https://checkout.fincra.com/pay/fcr-p-********",
        "reference": "your-internal-reference-id",
        "payCode": "fcr-p-********"
    }
}
```

After you get the above response, you should then redirect your customer to the checkout URL provided in the response ("`link`"), to enable them complete their payment.

### 3. Redirect Customer to payment link

This is a sample of the interface customer would be presented with.

<Image align="center" src="https://files.readme.io/95a6f661e8569136f68c10a1bf6b8f2b9bfce983b70362809c95aa339b815516-Screenshot_2024-08-27_at_17.00.51.png" />

<br />

> ❗️ Important
>
> When the customer is making the payment via the `bank transfer` method, they are required to pass the transaction reference that is displayed on the checkout screen, as the transaction description/note on their transfer app. This is necessary to confirm and track the payment!!

Once the payment is complete or in the event of a failure, Fincra will redirect your customer to your specified redirectUrl. The transaction reference will be appended as a query parameter to your redirectUrl as well.

e.g https\://website\_redirectUrl/?reference=YOUR\_REFERENCE

In a situation where no redirectUrl is passed, the customer receives visual confirmation on the completion of the payment and is NOT redirected out of the current webpage.

### 4. Fincra Confirms Payment and Settles You

Once the payment has been completed and confirmed by Fincra, the business is settled in the currency in which the payment was initiated. 

* Business receives a notification with the payment status and details.
* Business is settled in the initiated payment currency.
* Settlement is processed according to the agreed timeline and terms.

### 5. Payment Confirmation

Fincra sends a callback to the set webhook url  to confirm the payment. You can also confirm payment via our [verify checkout status](verify-checkout-status) endpoint.

#### Webhook/Callback

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and [validating the webhook](validating-webhook) notification on your end. Also, ensure to consult our [Overpayments and Underpayments](handling-underpayments-and-overpayments) doc to see how to treat when webhook for such is received.

Webhook response:

```json Sample Webhook
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

#### Confirm payment status via API

It is critical that you confirm the transaction using its reference, just because the `redirectUrl` was visited doesn't prove that transaction was successful. You can confirm payment by using the [verify payment endpoint](verify-checkout-status).

> 🚧 To Note
>
> It is advised that you consult the Overpayments and Underpayments [doc](https://docs.fincra.com/docs/handling-underpayments-and-overpayments) to see how to treat such transactions. A sample response for an underpayment has been added. You would note the `varianceType` which marks it as an `underpayment`, and also the `amountReceived` field which tells you the true amount paid by customers in the case where `bank_transfer` is the payment method uses.

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

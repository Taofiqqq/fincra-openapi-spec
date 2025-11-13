---
title: Overview
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
Converting one currency to another is quick, easy, and seamless using Fincra. All you have to do now is ensure that your wallet contains sufficient funds to perform the transaction. Following a successful conversion, the equivalent of the currency you converted to will be settled in your wallet.

## How to convert currencies

To convert one currency to another, the following steps must be taken.

## 1 - Wallet Topup

You can fund your wallet by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints.

> 📘 For more details on  virtual account creation and funding please read the following sections :
>
> * [How to create a virtual account](/docs/create-virtual-accounts#account-requests)
> * [How to fund your account](/docs/receive-money-in-your-wallet)

We will send a notification to your webhook url whenever your wallet is funded .

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
    "amountReceived": 100,
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

## 2 - Generate quote

For details on how to generate a quote please see the [generate quote endpoint ](/reference/get-a-quote) 

```json Quote request
{
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "amount": "200000",
    "action": "send",
    "transactionType": "conversion",
    "business": "{{your business ID}}",
    "feeBearer": "business",
    "paymentDestination": "fliqpay_wallet",
}
```
```json Quote response
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "NGN",
        "destinationCurrency": "GBP",
        "sourceAmount": 200000,
        "destinationAmount": 500,
        "action": "send",
        "transactionType": "disbursement",
        "fee": 30,
        "initialAmount": 200000,
        "quotedAmount": 500,
        "rate": 0.0025,
        "amountToCharge": 212000,
        "amountToReceive": 500,
        "reference": "336307af-4ab3-4842-ab09-1dee6e5ee6ee",
        "expireAt": "2022-04-02T15:28:05.692Z"
    }
}
```

## 3 - Request conversion

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response. Please see the [conversion API ](reference/make-a-currency-conversion) for the required payload that should be sent. 

```json Conversion request
{
  "business":"{{your business ID}}",
  "quoteReference": "{{the quote reference}}"
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the conversion. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.

```json Webhook
{
  "event": "conversion.successful",
  "data": {
    "business": "61aa4e72cc67b6f04d97f874",
    "amountCharged": 450000,
    "amountReceived": 846.45,
    "fee": 8.55,
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "rate": 0.0019,
    "settlement": null,
    "status": "successful",
    "createdAt": "2022-02-20T18:53:59.310Z",
    "updatedAt": "2022-02-20T18:53:59.310Z",
    "reference": "883beb04-551b-4114-8ed9-12cb196b67c1"
  }
}
```
```javascript Validate Webhook
import crypto from "crypto";

const encryptedData =  crypto
      .createHmac("SHA512", merchantWebhookSecretKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");
const signatureFromWebhook = req.headers['signature'];

if(encryptedData === signatureFromWebhook) {
  console.log("process");
}
else {
  console.log("discard");
}
```

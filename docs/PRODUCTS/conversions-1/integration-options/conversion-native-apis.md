---
title: Conversion Native APIs
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
# Topup your source currency wallet

You can fund your account by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your account using our virtual account creation endpoints.

> 📘 For more details on  virtual account creation and funding please read the following sections:
> 
> - [How to create a virtual account](/docs/how-to-create-virtual-accounts)
> - [How to fund your account](/docs/mobile-money-transfers)

We will send a **notification** to your webhook URL whenever your account is funded.

# Generate a quote

For details on how to generate a quote please see the [generate quote endpoint ](/reference/get-a-quote) . For conversions, the payment destination must always be `fliqpay_wallet`

```json Quote request
{   
    "transactionType": "conversion",
    "feeBearer": "business",
    "business": "{{businessId}}",
    "sourceCurrency": "GHS",
    "destinationCurrency": "USD",
    "amount": "1000",
    "action": "send",
    "paymentDestination": "fliqpay_wallet"
}
```
```json Quote response
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "GHS",
        "destinationCurrency": "USD",
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

# Request conversion

Kindly ensure you fill out all the necessary fields for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response. Please see the [conversion API ](/reference/make-a-currency-conversion) for the required payload that should be sent. 

```json Conversion request
{
  "business":"{{your business ID}}",
  "quoteReference": "{{the quote reference}}"
}
```

# Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the conversion. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.

```json Webhook
{
  "event": "conversion.successful",
  "data": {
    "business": "61aa4e72cc67b6f04d97f874",
    "amountCharged": 450000,
    "amountReceived": 846.45,
    "fee": 8.55,
    "sourceCurrency": "GHS",
    "destinationCurrency": "USD",
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

# Verify conversion

It is critical that you confirm the transaction using the `reference`. Just because the webhook URL was visited doesn't prove that the transaction was successful. In case the webhook notification fails to hit your server, you can confirm the conversion by using the [Fetch a conversion endpoint](/reference/get-a-conversion).
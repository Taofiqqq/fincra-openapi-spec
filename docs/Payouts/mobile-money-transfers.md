---
title: Mobile Money Transfers
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
Mobile money transfers follow the same basic format: make a POST request to the [payout API](/reference/payout-1) . However, depending on the currency the account is denominated in and the type of [beneficiary](/docs/introduction-10#beneficiary-types), you might need to specify some additional information.

## How to make a transfer using Fincra API:

The following steps need to be taken in order to process payments to a mobile money wallet:

## 1 - Wallet Topup

You can fund your wallet by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints.

 **Note :** To test transactions, you can fund your sandbox account. For more information, please see the [test section](/docs/testing-your-integration#test-payouts-for--transfers)

> 📘 For more details on  virtual account creation and funding please read the following sections :
>
> * [How to create a virtual account](/docs/create-virtual-accounts#account-requests)
> * [How to fund your account](/docs/receive-money-in-your-wallet)

<br />
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
    "customerName": "Efe Ultimate Global Ventures",
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

This is optional. If your destination currency differs from your source currency, you will need to use our quote API to get a quote. If your destination and source currencies are the same, you may skip this step. For example, if the destination currency is NGN and the source currency is NGN, you may skip this step.

**Note** :  A quote expires after a certain period of time.

For more details on how to generate a quote please see the [API reference ](/reference/get-a-quote) 

```json Quote request
{
    "sourceCurrency": "NGN",
    "destinationCurrency": "GHS",
    "amount": "3000",
    "action": "send",
    "transactionType": "disbursement",
    "business": "{{businessId}}",
    "feeBearer": "business",
    "paymentDestination": "mobile_money_wallet"
}
```
```json Quote response
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "NGN",
        "destinationCurrency": "GHS",
        "sourceAmount": 3000,
        "destinationAmount": 3000,
        "action": "send",
        "transactionType": "disbursement",
        "fee": 30,
        "initialAmount": 3000,
        "quotedAmount": 3000,
        "rate": 1,
        "amountToCharge": 3030,
        "amountToReceive": 3000,
        "reference": "a5da7f46-58d8-4f5f-b8a0-1d33987432b1",
        "expireAt": "2022-04-05T15:10:15.822Z"
    }
}
```

## 3 - Request payout

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response. 

A payment status is returned after a request is received, and it can be `successful`, `processing`, or `failed`. Please see our payment status page for additional information.[here](/docs/introduction-10#payout-status)

```json Payout request
{
    "business": "{{businessId}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "GHS",
    "amount": "100",
    "paymentDestination": "mobile_money_wallet",
    "beneficiary": {
        "firstName": "Godson",
        "lastName": "Tega",
        "email": "nycix@gmail.com",
        "accountHolderName": "Godson Tega",
        "accountNumber": "0555344950‬",
        "type": "individual",
        "country": "GH",
        "mobileMoneyCode": 82
    },
    "description": "has",
    "quoteReference": "49fe6782-52f9-4844-9388-62fac6bb35c2"
}
```
```json Payout response
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": 14705,
        "reference": "FNCR_591557960151",
        "customerReference": null,
        "status": "processing",
        "documentsRequired": []
    }
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the payout or payment order status. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end. 

Please read the [payout webhook page](/docs/payout-webhook) for further details on the webhook structure and body.\ <br />

```json Webhook
{
  "event": "payout.successful",
  "data": {
    "id": 14714,
    "amountCharged": 3030,
    "amountReceived": 3000,
    "recipient": {
      "name": "string string",
      "accountNumber": "0149887176",
      "type": "individual",
      "email": "email@gg.com"
    },
    "fee": 30,
    "rate": 1,
    "paymentScheme": null,
    "paymentDestination": "mobile_money_wallet",
    "sourceCurrency": "NGN",
    "destinationCurrency": "GHS",
    "status": "successful",
    "createdAt": "2022-04-05T16:42:21.000Z",
    "updatedAt": "2022-04-05T16:42:26.000Z",
    "reference": "FNCR_dd44fd817070",
    "reason": "Disbursement was successful",
    "traceId": "00001726754145891242024497262",
    "valuedAt": "2022-04-05T16:42:26.000Z"
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

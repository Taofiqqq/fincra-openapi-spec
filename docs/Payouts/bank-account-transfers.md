---
title: Bank Account Transfers
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
Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/payout-1).However, depending on the currency the account is denominated in and the type of [beneficiary](/docs/introduction-10#beneficiary-types), you might need to specify some additional information.

## How to make a transfer using Fincra API

The following steps need to be taken in order to process payments to a bank account:

## 1 - Wallet Topup

 You can fund your account by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints. 

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
    "customerName": " Ultimate Global Ventures",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2022-03-28T07:15:19.402Z",
    "createdAt": "2022-03-28T07:15:19.403Z",
    "updatedAt": "2022-03-28T07:15:19.403Z",
    "reference": "f9121b33-7e15-409e-b588-36c6146d5823"
  }
}
```

## 2 - Generate quote - Optional

This is optional. If your destination currency differs from your source currency, you will need to use our quote API to get a quote. If your destination and source currencies are the same, you may skip this step. For example, if the destination currency is NGN and the source currency is NGN, you may skip this step.

**Please take note of the following** 

* A quote expires after a certain period of time
* The [payment scheme page](/docs/payment-scheme)  lists the currencies that require a payment scheme. 

For more details on how to generate a quote ,please see the [quote API](/reference/get-a-quote)

```json Quote request
{
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "amount": "200000",
    "action": "send",
    "transactionType": "disbursement",
    "business": "{{your business ID}}",
    "feeBearer": "business",
    "paymentDestination": "bank_account",
    "paymentScheme": "fps"
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

## 3 - Verify the account number

You must collect the customer's account information and ensure that it is valid before sending money. This is to avoid transferring money to an account that is wrong or inaccurate. Please visit the [Verify Account Number API](/docs/verify-iban-and-account-numbers) to learn how to verify account numbers.

## 4 - Request  payout

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response. 

* Some currencies require a payment scheme to be processed. Lists of the currencies can be found on the [payment scheme page](/docs/payment-scheme).
* A payment status is returned after a request is received, and it can be `successful`, `processing`, or `failed`. Please see our payment status page for additional information.[here](https://docs.fincra.com/docs/introduction-10#payout-status)

```json Payout request
{
    "business" : "{{businessId}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "amount": "20000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "customerReference": "b67vfv",
    "beneficiary": {
        "firstName": "john",
        "lastName": "doe",
        "accountHolderName": "john doe",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "corporate",
        "email": "aa@aa.com",
        "bankCode": "90909",
        "country": "GB",
        "sortCode": "908282"
    },
    "quoteReference": "6a61f5a6-dca5-4e99-b690-07a6896a696b",
    "paymentScheme": "fps"
}
```
```json Payout response
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": 14483,
        "reference": "cb2c581b-58a5-4037-be65-1375631a51db",
        "customerReference": null,
        "status": "processing"
    }
}
```

## 5 - Documents Upload - Optional

Additional documents may be required to process payouts to KES and GHS accounts. This is determined by the response message you receive after making the payout. If specified that a document is required in the response message, kindly provide the required fields in\
the payout documents upload API for your payout to be processed successfully.

Please refer to the [API documentation](/reference/upload-transaction-document) for the upload of transaction documents.

See the sample response indicating that documents are required to complete the payment processing.

```json response
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": "6149b1372452dc89b09ed16f",
        "reference": "d5dddc37-d2e0-4b98-b852-dc63348c54d7",
        "customerReference": null,
        "status": "initiated",
        "isDocumentRequired": true,
        "documentsRequired": [
            "invoice"
        ]
    }
}
```

## 6 - Receive and validate webhook  notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the payout or payment order status. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end. Please read the [payout webhook page](/docs/payout-webhook) for further details on the webhook structure and body.

```json Webhook
{
    "event": "payout.successful",
    "data": {
        "id": 14380,
        "amountCharged": 212000,
        "amountReceived": 500,
        "recipient": {
            "name": "Hassan Sarz",
            "accountNumber": "0124775489",
            "type": "individual",
            "email": "aa@aa.com"
        },
        "fee": 150,
        "rate": 0.0019,
        "paymentScheme": "fps",
        "paymentDestination": "bank_account",
        "sourceCurrency": "NGN",
        "destinationCurrency": "GBP",
        "status": "successful",
        "createdAt": "2022-04-02T21:23:44.000Z",
        "updatedAt": "2022-04-02T21:23:50.000Z",
        "reference": "bf2eb02e-39fe-490a-b933-63f8c4d42125",
        "reason": "Payout was successful",
        "traceId": null,
        "valuedAt": "2022-04-03T21:23:50.000Z"
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

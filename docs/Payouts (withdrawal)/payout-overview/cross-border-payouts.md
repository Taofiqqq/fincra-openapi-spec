---
title: Cross Currency Payouts
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
Money can be transferred from one currency to another, through cross-currency transactions. For instance, you may send US dollars to a bank account in Europe or AUD to a bank account in the UK. You can make these transfers using both your portal and the API. This feature is available for both bank account transfers and mobile money transfers.

> 📘 To learn how to make cross currency payouts using the Fincra API, you must read and understand the sections below.
>
> * [Payment Beneficiaries ](/docs/introduction-10#beneficiary-types)
> * [Payment Schemes ](/docs/payment-scheme)
> * [Payment Destinations](/docs/transaction-types-1#payment-destination)
> * [Payout Overview ](/docs/introduction-10)

**Note**

* All transfers have a timeframe by which they settle in the receiver's account; please review the [payment scheme](payment-scheme) section to ascertain the settlement time.

## How to make a Cross border payout using Fincra API

The following steps need to be taken in order to process payments to a foreign account :

## 1 - Topup

You can fund your account by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints. 

**Note:** To test transactions, you can fund your sandbox account. For more information, please see the [test section](sandbox-environment)

> 📘 For more details on  virtual account creation and funding please read the following sections :
>
> * [How to create a virtual account](/docs/how-to-create-virtual-accounts)
> * [How to fund your account in the live environment](/docs/fund-your-virtual-account)
> * [How to fund your account in the test environment](/docs/testing-your-integration#test-payouts-for--transfers)

<br />

```json collection webhook
{
  "event": "collection.successful",
  "data": {
    "business": "61602d2950139ad72e619a91",
    "virtualAccount": "61dc08222d2cc64836c5a591",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
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

## 2 - Verify the account number

You must collect the customer's account information and ensure that it is valid before sending money. This is to avoid transferring money to an account that is wrong or inaccurate. Please visit the [Verify Account Number API](verify-account-number) to learn how to verify account numbers.

## 3 - Generate Quote

This is compulsory for cross-currency payouts. You will need to use our [quote API](generate-quote) to get a quote.

**Please take note of the following**

* A quote expires after a certain period of time
* The [Payment Scheme Page](payment-scheme) lists the currencies that require a payment scheme.

For more details on how to generate a quote, please see the [quote API](generate-quote)

```json Quote Request
{
    "sourceCurrency": "KES",
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
```json Quote Response
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "KES",
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

## 4 - Request  payout

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response. 

* Some currencies require a payment scheme to be processed. Lists of the currencies can be found on the [payment scheme page](payment-scheme).
* Payment status is returned after a request is received, and it can be `successful`, `processing`, or `failed`. Please see our payment status page for additional information.[here](fetch-payout-by-customer-reference)
* We advise that you add a `customerReference`  to your payload to avoid sending duplicate transactions.
* Only payouts with the explicit status  `failed` should be retried. If you receive a `Timeout Message` it doesn't mean the transaction has failed . Kindly re-query using this [here](fetch-payout-by-customer-reference) before you retry.

```json Payout request
{
    "business" : "{{businessId}}",
    "sourceCurrency": "KES",
    "destinationCurrency": "GBP",
    "amount": 20000,
    "description": "i want to pay my vendor",
    "files": "https://filehosting.anywhere/transfer_reason.pdf",
    "paymentDestination": "bank_account",
    "customerReference": "b67vfv",
		"customerName": "John Doe",
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

## 5 - Receive and validate webhook  notification

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
        "sourceCurrency": "KES",
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

## 6 - Verify payment

It is critical that you confirm the transaction using your `customerReference`. Just because the webhook URL was visited doesn't prove that the transaction was successful or in case the webhook notification fails to hit your server you can confirm the payout by using the [fetch a customer reference endpoint](/reference/fetch-payout-by-customer-reference)

---
title: Cross Currency Payout
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
Cross-currency transactions allow you to transfer money between different currencies. For example, you can send US dollars to a bank account in Europe or AUD to a bank account in the UK. These transfers can be made via both the portal and API and are available for bank account and mobile money transfers.

> 📘 Before making local transfers with the Fincra API, be sure to review and fully understand the following sections.
>
> [Payment Schemes](payment-schemes)\
> [Payout Overview](pay-outs-disbursements)

**Note**

* All transfers have a timeframe by which they settle in the receiver's account; please review the payment scheme section to ascertain the settlement time.

## How to make a Cross border payout using Fincra API

The following steps need to be taken in order to process payments to a foreign account :

### Topup

You can fund your account by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints.

**Note**: To test transactions, you can fund your sandbox account. For more information, please see the [test](funding-test-balance) section

> 📘 For more details on virtual account creation and funding please read the following sections :
>
> [How to create a virtual account](virtual-account-api)\
> How to fund your account in the live environment\
> [How to fund your account in the test environment](https://docs.fincra.com/docs/testing-your-integration#test-payouts-for--transfers)

<br />

### Verify the Account Number

Before sending money, you must collect and validate the customer's account information to avoid transferring funds to an incorrect or invalid account. For guidance on how to verify account numbers, please refer to our Verify Account Number API.

### Generate Quote

This is compulsory for cross-currency payouts. You will need to use our quote API to get a quote.

**Please take note of the following**

* A quote expires after a certain period of time
* The Payment Scheme Page lists the currencies that require a payment scheme.
* For more details on how to generate a quote, please see the [quote API](generate-quote)

### Request payout

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response.

* Some currencies require a payment scheme to be processed. Lists of the currencies can be found on the payment scheme page.
* Payment status is returned after a request is received, and it can be `successful`, `processing`, or `failed`. Please see our payment status page for additional information.here
* We advise that you add a `customerReference` to your payload to avoid sending duplicate transactions.
* Only payouts with the explicit status failed should be retried. If you receive a `Timeout Message` it doesn't mean the transaction has failed . Kindly re-query using this [here](fetch-payout-by-customer-reference) before you retry.

```Text Payout request
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
```Text Payout Response
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

<br />

### Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the payout or payment order status. Read our [guide](validating-webhook) on securing and validating the webhook notification on your end. Please read the [payout webhook](payout-webhook) page for further details on the webhook structure and body.

```Text Webhook
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
        "sourceCurrency": "GBP",
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
```Text Validate Webhook
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

### Verify payment

It is essential to confirm transactions using your `customerReference`. A webhook notification alone does not guarantee a successful transaction, and in case the notification fails to reach your server, you can confirm the payout status by using the "[Fetch Customer Reference](fetch-payout-by-customer-reference)" endpoint.

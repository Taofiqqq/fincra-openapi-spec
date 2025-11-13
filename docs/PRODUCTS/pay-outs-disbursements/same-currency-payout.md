---
title: '[DEL] Same Currency Payouts'
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
Local payouts, also referred to as same-currency transfers, involve moving funds between two accounts that share the same currency. For instance, transferring money from one EURO account to another EURO account. These transfers can be made through either the portal or via API and are available for both bank accounts and mobile money wallets.

> 📘 Before making local transfers with the Fincra API, be sure to review and fully understand the following sections.
> 
> [Payment Schemes](payment-schemes)  
> [Payout Overview](pay-outs-disbursements)

**Note**  
All transfers have a timeframe by which they settle in the receiver's account; please review the payment scheme section to ascertain the settlement time.

## How to make a local transfer using Fincra API

The following steps need to be taken in order to process payments to a local account:

### Top Up your account

You can fund your account by making deposits or requesting a manual top-up. Additionally, you can create a virtual account to fund your wallet or account using our virtual account creation endpoints.

> 📘 For more details on virtual account creation and funding please read the following sections :
> 
> [How to create a virtual account](virtual-account-api)  
> [How to fund your account in the test environment](https://docs.fincra.com/docs/testing-your-integration#test-payouts-for--transfers)

<br />

### Verify the Account Number

Before sending money, you must collect and validate the customer's account information to avoid transferring funds to an incorrect or invalid account. For guidance on how to verify account numbers, please refer to our Verify Account Number API.

### Request a Payout

Ensure that all required fields are accurately filled out to process your payment successfully. If the wrong payload is sent, the transaction will fail, and you will receive a failure response.

Some currencies require a specific payment scheme for processing. You can find a list of these currencies on our Payment Scheme page. After your payout request is submitted, the payment status will be returned and categorized as either `successful`, `processing`, or `failed`. For more details, visit our Payment Status page.

Only payouts with a status of "failed" should be retried. Receiving a timeout message does not indicate a failed transaction. Please re-query the transaction status here before attempting a retry.

For bank code lists, visit this link.  
Additionally, we recommend adding a `customerReference `to your payload to avoid sending duplicate transactions.

```Text Payout request
{
    "business" : "{{businessId}}",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "amount": 20000,
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
        "customerReference": null, // this would be returned as your customer reference
      if it is sent in the request payload
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
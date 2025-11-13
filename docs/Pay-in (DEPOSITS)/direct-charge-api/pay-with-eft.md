---
title: Pay with EFT
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
Electronic Funds Transfer (EFT) is a secure and reliable method for processing bank-to-bank payments directly from your customer's account, allowing customers to authorize payments through their banking institutions. It is a trusted alternative to card payments for higher-value transactions. 

When customers initiate an EFT payment, they will be redirected to their bank's authentication system to approve the transaction. Upon successful authorization, you will receive a webhook notification confirming the payment status.

## Supported Currencies and List Of Available Banks by Currency

[block:parameters]
{
  "data": {
    "h-0": "Currencies",
    "h-1": "Available Banks",
    "0-0": "ZAR (South African Rand)",
    "0-1": "ABSA  \nFNB  \nInvestec  \nNedbank  \nStandard Bank  \nBidvest Bank  \nTymeBank"
  },
  "cols": 2,
  "rows": 1,
  "align": [
    "left",
    "left"
  ]
}
[/block]


<br />

The following steps are required to accept EFT payments:

## 1 - Initiate the Charge

To charge a customer via EFT, you will need to send customer's payment data to the [initiate charge endpoint](/reference/initiate-a-charge):

| Field                   | Required | Type   | Description                                                                                                                      |
| :---------------------- | :------- | :----- | :------------------------------------------------------------------------------------------------------------------------------- |
| type                    | Yes      | String | This is the payment method. In this case, it will be `eft`.                                                                      |
| reference               | Yes      | String | Your unique reference generated for the transaction.                                                                             |
| amount                  | Yes      | Number | The amount to be charged                                                                                                         |
| currency                | Yes      | String | The transaction currency			                                                                                                      |
| customer                | Yes      | Object | The customer's details                                                                                                           |
| customer.name           | Yes      | String | The customer's name                                                                                                              |
| customer.email          | Yes      | String | The customer's email                                                                                                             |
| customer.phoneNumber    | No       | String | The customer's phone number                                                                                                      |
| settlementDestination		 | No       | String | Preferred settlement destination where you want your payments to be settled. Settlements are only to wallets (balances) for now. |
| callbackUrl             | No       | String | The URL to redirect your customer when the transaction is complete.                                                              |
| webhookUrl              | No       | String | The webhook URL to receive transaction notifications.                                                                            |

Then, prepare your data object to look like the sample below :

```json
{
    "reference": "test-reference",
    "type": "eft",
    "amount": 10,
    "currency": "ZAR",
    "customer": {
        "name": "Test User",
        "email": "test@fincra.com"
    },
    "callbackUrl": "https://fincra.com",
}
```

Send a POST request with the payment data above to the initiate an EFT charge endpoint. If the request is successful, you will receive a response containing the transaction status `pending` as well as other important parameters such as:

- `data.id` refers to the unique identifier of the transaction
- `data.reference` refers to the unique identifier of the transaction on your platform
- `data.message` This contains instructions for the customer to complete the payment authorization
- `data.auth_model` Important! This indicates the authorization method required (REDIRECT)
- `data.authorization.redirect` If auth_model is REDIRECT, this contains the URL where the customer should be directed to complete authorization

Here is a sample response that you will receive after initiating an EFT payment:

```json
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 9406693,
        "authorization": {
            "mode": "redirect",
            "redirect": "https://test-bank.com/ref1234",
            "withCallback": true
        },
        "auth_model": "redirect",
        "amount": 10,
        "amountExpected": 10,
        "varianceType": null,
        "currency": "ZAR",
        "fee": 1.5,
        "vat": 0,
        "electronicMoneyTransferLevy": 0,
        "message": "Please complete your payment authorization. You will be redirected to your bank's secure portal to complete this transaction.",
        "status": "pending",
        "reference": "test-reference",
        "type": "eft",
        "customer": {
            "name": "Test User",
            "email": "test@fincra.com",
            "phoneNumber": null
        }
    }
}
```

<br />

## 2 - Verify Charge

The final step is to confirm transaction status before providing value to your customer. To do so, send a get request to the [verify charge endpoint](https://docs.fincra.com/reference/verify-charge) using the charge Id returned on the initiate charge request.

Here's an example of charge verification and response:

```json Successful
{
    "status": true,
    "message": "Charge verified",
    "data": {
        "id": 9406693,
        "authorization": {
            "mode": null,
            "redirect": null
        },
        "auth_model": null,
        "amount": 10,
        "amountReceived": 10,
        "currency": "ZAR",
        "fee": 1.5,
        "message": "SUCCESS",
        "status": "success",
        "reference": "test-reference",
        "type": "eft",
        "customer": {
            "name": "Test User",
            "email": "test@fincra.com",
            "phoneNumber": null
        },
        "settlementDestination": "wallet"
    }
}
```
```json Failed
{
    "status": true,
    "message": "Charge verified",
    "data": {
        "id": 9406693,
        "authorization": {
            "mode": "redirect",
            "redirect": "https://pay.ozow.com/40808e01-2f56-49ca-9e1e-946879a34fac/Secure",
            "withCallback": true
        },
        "auth_model": "redirect",
        "amount": 10,
        "amountExpected": 10,
        "amountReceived": 0,
        "varianceType": null,
        "currency": "ZAR",
        "fee": 1.5,
        "message": "Internet banking session timed out",
        "actionRequired": null,
        "status": "failed",
        "reference": "test-reference",
        "type": "eft",
        "type": "eft",
        "customer": {
            "name": "Test User",
            "email": "test@fincra.com",
            "phoneNumber": null
        }
    }
}
```

<br />

## 3 - Set Up Webhook

As an optional step, you can configure your application to receive confirmation via [webhooks](/docs/introduction). See [Webhooks](/docs/introduction) for more information. After configuring your webhook, we'll send you a notification with the transaction status to the URL you specified either when [initiating a payment](/reference/initiate-a-charge) or on your dashboard account settings.

Read our [guide](/docs/secret-key) to learn how to secure and validate webhook notifications on your end.

Here's a sample of the webhook response:

```json
{
  "event": "charge.successful",
  "data": {
    "id": 9406693,
    "authorization": {
      "mode": "redirect",
      "redirect": null
    },
    "auth_model": "redirect",
    "amount": 10,
    "currency": "ZAR",
    "fee": 1.5,
    "message": "EFT payment completed successfully",
    "status": "success",
    "reference": "test-reference",
    "type": "eft",
    "customer": {
      "name": "John Smith",
      "email": "john.smith@example.com",
      "phoneNumber": "+1234567890"
    },
    "customer": {
       "name": "Test User",
       "email": "test@fincra.com",
       "phoneNumber": null
    },
    "settlementDestination": "wallet"
  }
}
```
---
title: Pay with Transfer
excerpt: >-
  Learn how to use the direct charge API to offer bank transfer as a collection
  option to your customers
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
With the **direct charge API**, you can accept bank transfers as payment for services you render to your customers. Your customer can make payments into a pool account or dynamic account depending on the currency you wish to collect payment in. You can also set up webhooks to receive notifications when payments have been made to the bank account.

# Supported currencies

Our bank transfer method is available in various currencies. See list below:

| Currencies | Country      | Available   |
| :--------- | :----------- | :---------- |
| KES        | Kenya        | YES         |
| ZAR        | South Africa | YES         |
| UGX        | Uganda       | YES         |
| ZMW        | Zambia       | Coming soon |
| GHS        | Ghana        | YES         |
| NGN        | Nigeria      | YES         |

# How to accept payments by bank transfer using direct charge APIs

## 1 - Initiate the Charge

To charge a customer, you will need to collect the necessary payment information from the customer. Then, prepare your request to look like the sample below:

```json Request
{
    "type": "bank_transfer",
    "amount": 1200,
    "reference": "Qwerty12345abc",//your unique transaction reference
    "currency": "{{your_preferred_currency}}", 
    "callbackURL": "https://your.website",//optional, provide the url you wish to be redirected to after payment
    "webhookUrl":"https://your.website/fincra/callback", //optional, provide this if you wish to receive notifications
    "customer": {
        "name": "Abra Cadabra",
        "email": "abracadabra@gmail.com",
        "phoneNumber": "0123456789"
    }
}
```

Send a POST request with the payment data above to the [initiate a charge endpoint](/reference/initiate-a-charge). 

If you receive a response with the status `pending`, the bank account has been created and needs to be funded.

```json Response - Dynamic VAs
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 1703,
        "authorization": {
            "mode": null,
            "redirect": null
        },
        "auth_model": null,
        "amount": 1200,
        "currency": "NGN",
        "fee": 18.06,
        "vat": 1.26,
        "status": "pending",
        "reference": "Qwerty12345abc",
        "type": "bank_transfer",
        "customer": {
            "name": "Fincra Developers",
            "email": "dev@fincra.com",
            "phoneNumber": "0123456789"
        },
        "metadata": {},
        "settlementDestination": "wallet",
        "virtualAccount": {
            "accountNumber": "9600414830",
            "accountName": "Tesla",
            "bankCode": "109",
            "bankName": "Test Bank",
            "business": "63da866cb938c4e0b871f514",
            "id": "6537dd98bd81caa882ad61e4"          
            "expiresAt": "2022-11-01T16:17:56.180Z"
        }
    }
}
```

Take note of the following 

- `id` refers to the unique identifier of the transaction. For pool accounts, this field is to be passed to your customers for them to add as a narration for the payment they are making. 
- `reference` refers to the unique identifier of the transaction on your platform.
- `settlementDestination` is where you want your payments are to be settled. It could be a wallet or a bank account. The settlement destination is your Fincra Wallet by default.

## 2 - Complete the payment

The `virtualAccount` object in the response contains the account details for the transfer: the bank name (bankName), account number (accountNumber), and expiry time (expiresAt). Pass the details to your customer, and they can make a transfer into the account (e.g, from their internet banking app).

```json Response
{
        ...
        "virtualAccount": {
            "accountNumber": "9978001201",
            "accountName": "Bandana",
            "bankCode": "101",
            "bankName": "Providus Bank",
            "expiresAt": "2022-11-01T16:17:56.180Z"//applies only to dynamic VAs
         }
    }
}
```

## 3 - Verify Charge

The next step is to ensure that the payment was successful before providing value to your consumer. To do so, send a verification request to our [verify charge endpoint](/reference/verify-charge) from your server to confirm the payment's final status. The reference you enter here should be the same as the one you used for your payment.

Here's an example of a payment verification response:

```json Response
{
    "status": true,
    "message": "Charge verified",
    "data": {
        "id": 280,
        "authorization": {
            "mode": null
        },
        "auth_model": null,
        "amount": 150000,
        "currency": "NGN",
        "fee": 70,
        "message": "Charge successful",
        "status": "success", 
        "reference": "90JIJNKI",
        "description": "",
        "type": "bank_transfer",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}

```

## 4 - Set Up Webhook

As an optional step, you can configure your application to receive payment confirmation via webhooks. See [Webhooks](/docs/introduction) for more information. After configuring your webhook, we'll send you a notification with the transaction status to the URL you specified when [initiating a charge](/reference/initiate-a-charge).

Read our [guide](/docs/secret-key) to learn how to secure and validate webhook notifications on your end.

Here's a sample of the webhook response:

```json
{
  "event": "charge.successful",
  "data": {
    "id": 932,
    "authorization": {
      "mode": null
    },
    "auth_model": null,
    "amount": 50000,
    "currency": "NGN",
    "fee": 70,
    "message": "Charge successful",
    "status": "success",
    "reference": "87WEBUILS9",
    "description": "",
    "type": "bank_transfer",
    "customer": {
      "name": "Fincra Developers",
      "email": "taofiq@fincra.com",
      "phoneNumber": "+2348142986562"
    },
    "settlementDestination": "wallet"
  }
}
```
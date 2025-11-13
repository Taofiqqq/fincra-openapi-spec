---
title: Pay with Transfer (Pool Accounts)
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

# Supported account types and applicable currencies

Fincra supports two types of accounts for our **Pay with Transfer** payment method. These are Dynamic virtual accounts and Pool accounts.

1. **Dynamic Accounts**: These are temporary virtual accounts which are used to receive payments and expire within a set time. At Fincra dynamic accounts expire after 20 minutes.
2. **Pool Accounts**: Pool account is a static or fixed account used to receive payments. Unlike the dynamic accounts which are generated upon initiating a charge and expire in a set time, pool account will remain the same for your business for all charges you initiate.

> 🚧 NOTE
> 
> 1. Dynamic accounts are not meant to be reused or paid into after expiry (20 minutes). Payments made into dynamic accounts after expiry or on second use will most likely not go through or eventually be refunded to the customers. Communicate this clearly to your customers.
> 2. Although Pool account details are the same for all charges, it is still important you create a charge for each payment attempt as the charge ID will be used to identify and create a pending transaction that will be confirmed once the payment goes through. More details on the ID can be found below.

Our bank transfer method is available in various currencies. See list below:

| Currencies | Country      | Pool Accounts | Dynamic Accounts |
| :--------- | :----------- | :------------ | :--------------- |
| KES        | Kenya        | YES           | Coming soon      |
| ZAR        | South Africa | YES           | N/A              |
| UGX        | Uganda       | YES           | N/A              |
| ZMW        | Zambia       | YES           | N/A              |
| GHS        | Ghana        | YES           | N/A              |
| NGN        | Nigeria      | N/A           | YES              |

# How to accept payments by bank transfer using direct charge APIs

## 1 - Initiate the Charge

To charge a customer, you will need to collect the necessary payment information from the customer. Then, prepare your request to look like the sample below:

```json Request
{
    "type": "bank_transfer",
    "amount": 1200,
    "reference": "Qwerty12345abc",//your unique transaction reference
    "currency": "{{your_preferred_currency}}", 
    "callbackURL": "https://your.website",//optional, provide this if you wish to receive notifications
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
```json Response - Pool Account
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 34464,
        "authorization": {
            "mode": null,
            "redirect": null
        },
        "auth_model": null,
        "amount": 150,
        "currency": "KES",
        "fee": 10,
        "vat": 0,
        "status": "pending",
        "reference": "Qwerty12345abc",
        "type": "bank_transfer",
        "customer": {
            "name": "Abra Cadabra",
            "email": "abracadabra@gmail.com",
            "phoneNumber": null
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

There is no expiry time for **pool accounts** so this field will not be provided in the response. 

However, for **pool accounts**, it is important you pass the id of the transaction (`data.id`) to your customers as well so they can provide this reference as they complete their payment.

```json Response
{
  .....
  "data": {
        "id": 1703,//applies only to pool accounts. Display to customers 
        .....
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
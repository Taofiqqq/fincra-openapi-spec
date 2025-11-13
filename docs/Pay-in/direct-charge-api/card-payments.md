---
title: Card
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
Our Direct Charge API allows you to charge both local and international cards. This API is functional if the majority of your customers pay with credit or debit cards and you'd prefer they do so via your app.

## Start collecting card payments via APIs.

The process of charging a credit or debit card consists of three key steps:

* **Initiate charge**: This involves sending the transaction details and the customer's payment data to the [initiate charge endpoint](/reference/initiate-a-charge).
* **Authorise charge**: To authorise a charge, we provide a list of the necessary information for you to obtain from the customer, which you then send to the [authorise charge endpoint](/reference/authorize-a-charge). Think of this as an additional level of security. You send us the OTP that the consumer provided to authorise the charge. This authorisation completes the payment.
* **Verify charge**: We strongly advise that you make a call to the [verify charge endpoint](/reference/verify-charge) to ensure that the payment was successful before you give any value to the customer.

<br />

> 📘 Important Note
>
> * Using our Direct Card Charge APIs involves handling some sensitive customer data, so you are required to be PCI DSS certified
> * Currently, we only accept Nigerian Naira payments. Mastercard, VISA, and Verve are among the several cards we accept. Here are some [test cards](/docs/testing-your-integration#test-cards-for-collections) we made to help you simulate different card payment scenarios as you integrate.

## How to charge a card

This is a guide on how to charge a card. Please pay close attention.

## 1 - Initiate the Charge

To charge a card, you will need to collect the necessary card and payment information from the customer. Then, prepare your data object to look like the sample below:

**Note**: You can pass your user's PIN or not in this payload.

```json
{
  "reference": "9090JNKI",
  "card": {
    "card_number": "5130000052131820",
    "card_holder": "The cardholder", // optional
    "cvv": "419",
    "expiry_month": "12",
    "expiry_year": "32",
    "pin": "0000" // optional
  },
  "amount": 1000,
  "currency": "NGN",
  "redirect_url": "https://merchant-redirect-url.com",
  "customer": {
    "name": "John Doe",
    "email": "johndoe@fincra.com",
    "phoneNumber": "+23490521120912" // optional
  }
}

```

Send a POST request with the payment data above to the [initiate a charge endpoint](/reference/initiate-a-charge). With the payload below. 

```json JSON
{
    "type": "card",
    "amount": 1500,
    "reference": "9090JNKI",
    "currency": "NGN",
    "customer": {
        "name": "Fincra Developers",
        "email": "developers@fincra.com",
        "phoneNumber":"+2348142986562"
    },  
    "card": {
        "card_holder": "Fincra",
        "card_number": "4084127883172787",
        "expiry_month": "09",
        "expiry_year": "24",
        "cvv": "123"
    },
    "callbackUrl": "https://fincra.com"
}
```

If you receive a response with the status `processing` and `auth_model` other than `NONE`, this indicates that an authorization step is required. The auth model would then determine the type of authentication needed for the card transaction returned in the data object.

```json No Authorization
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 252,
        "authorization": {
            "mode": "NONE"
        },
        "auth_model": "NONE",
        "amount": 1500,
        "currency": "NGN",
        "fee": 20.999999999999996,
        "message": "Card charged successfully",
        "status": "success",
        "reference": "B090JNKI",
        "type": "card",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}
```
```json Authorization Required
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "PIN"
        },
        "auth_model": "PIN",
        "amount": 1500,
        "currency": "NGN",
        "fee": 20.31,
        "message": "Card PIN required",
        "status": "processing",
        "reference": "xyz893unao",
        "type": "card",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}
```

## 2 - Authorize the Charge

The authorization process is different depending on the type of card you are charging. After initiating the charge, the customer may be required to authorise the charge on their card. Typical card authorization methods include one or more of the following:

* **PIN**: This is the process by which the customer enters the card's pin.
* **One-time password (OTP)**: This involves sending OTPs to the customer's phone number or email address linked to the customer's bank account. \
  Phone.
* **3DS Authorisation**: Ths involves redirecting the customer to a specified URL
* **AVS (Address Verification System)**: The customer enters the card's billing address. It's commonly used on international cards.

***

### Handling PIN authorization

PIN authorization requires that you collect the required fields (such as the card's PIN). As can be seen in the  response provided below, we would return a response with the status `processing` and `auth_model` set to PIN 

```json PIN authorization
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "PIN"
        },
        "auth_model": "PIN",
        "amount": 1500,
        "currency": "NGN",
        "fee": 20.999999999999996,
        "message": "Card PIN required",
        "status": "processing",
        "reference": "UB090JNKI",
        "type": "card",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}
```

To authorize this charge, you must then call the authorize endpoint and provide the PIN (For PIN authorization):

```json PIN authorization
{
    "pin": "123456"
}
```

Then you should receive a response like this:

```json PIN authorization
{
    "status": true,
    "message": "Card charged successfully",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "PIN"
        },
        "auth_model": "PIN",
        "amount": 1500,
        "currency": "NGN",
        "message": "Card charged successfully",
        "status": "success",
        "reference": "YU90JNKI"
    }
}
```

When you get a response like this, It is critical to confirm the transaction's status, which you can do by calling the verified payment endpoint. Please note that the status can be either success, failed, or processing.

***

### Handling OTP authorisation

When the status in the data object is `processing` and the `auth_model` is OTP, an OTP has been sent to the phone number or email address associated with the customer's bank account, and you must make a request to the authorised charge endpoint using the OTP that was sent to the customer.

```json OTP authorization
{
    "status": true,
    "message": "Kindly enter the One-time PIN (OTP) sent to your phone number",
    "data": {
        "id": 280,
        "authorization": {
            "mode": "OTP"
        },
        "auth_model": "OTP",
        "amount": 150000,
        "currency": "NGN",
        "message": "Kindly enter the One-time PIN (OTP) sent to your phone number",
        "status": "processing",
        "reference": "MN90JNKI"
    }
}
```

To authorise the charge, enter the OTP as shown below : 

```json
{
   "otp": "123456"
}
```

***

### Handling 3DS authorisation

All you have to do with 3DS authorisation is redirect your user to the specified redirect URL (data.authorisation.redirect). The user will then complete the authorisation with their bank, and we will redirect back to the redirect URL you specified earlier when initiating the charge.

```json
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "3DS",
            "redirect": "https://bank-site.com"
        },
        "auth_model": "3DS",
        "amount": 1500,
        "currency": "NGN",
        "fee": 20.999999999999996,
        "message": "You will be redirected to a secure page to complete this transaction",
        "status": "processing",
        "reference": "9090JNKI",
        "type": "card",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}
```

***

### Handling AVS authorization

AVS authorisation requires that you collect the required fields (such as the customer's address). As can be seen in the response provided below, we would return a response with the status as `processing` and `auth_model` set to `AVS `

```json AVS authorization
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "AVS"
        },
        "auth_model": "AVS",
        "amount": 1500,
        "currency": "NGN",
        "fee": 20.999999999999996,
        "message": "Card PIN required",
        "status": "processing",
        "reference": "9090JNKI",
        "type": "card",
        "customer": {
            "name": "Fincra Developers",
            "email": "developers@fincra.com",
            "phoneNumber": "+2348142986562"
        },
        "settlementDestination": "wallet"
    }
}
```

To authorise this charge, you must then call the [authorise endpoint](/reference/authorize-a-charge) Customer's address(For AVS): 

```json AVS authorization
{
    "address": {
            "state": "Lagos",
            "city": "Lekki",
            "country": "Nigeria",
            "address": "address",
            "zip_code": "101010"
        }
}
```

Then you should receive a response like this:

```json PIN authorization
{
    "status": true,
    "message": "Card charged successfully",
    "data": {
        "id": 259,
        "authorization": {
            "mode": "AVS"
        },
        "auth_model": "AVS",
        "amount": 1500,
        "currency": "NGN",
        "message": "Card charged successfully",
        "status": "success",
        "reference": "KB-9090BAHAJH67"
    }
}
```

When you get a response like this, it is critical to confirm the transaction's status, which you can do by calling the verified payment endpoint. Please note that the status can be either success, failed, or processing.

## 3 - Verify Charge

The final step after charging a card is to ensure the payment was successful before providing value to your consumer. To do so, send a verification request to our [verify charge endpoint](/reference/verify-charge) from your server to confirm the payment's final status. The reference you enter here should be the same as the one you used for your payment.

Here's an example of a card payment verification and response:

```json
{
    "status": true,
    "message": "Charge verified",
    "data": {
        "id": 280,
        "authorization": {
            "mode": "OTP",
            "redirect": null
        },
        "auth_model": "OTP",
        "amount": 150000,
        "currency": "NGN",
        "fee": 2000,
        "message": "Card charged successfully",
        "status": "success",
        "reference": "90JIJNKI",
        "description": "",
        "type": "card",
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

You can configure your application to receive confirmation via webhooks. See [Webhooks](/docs/introduction) for more information. After configuring your webhook, we'll send you a notification with the transaction status to the URL you specified when [initiating a charge](/reference/initiate-a-charge).

Read our [guide](/docs/secret-key) to learn how to secure and validate webhook notifications on your end.

Here's a sample of the webhook response:

```json
{
  "event": "charge.successful",
  "data": {
    "id": 932,
    "authorization": {
      "mode": "NONE",
      "redirect": null
    },
    "auth_model": "NONE",
    "amount": 50000,
    "currency": "NGN",
    "fee": 699.9999999999999,
    "message": "Card charged successfully",
    "status": "success",
    "reference": "posts",
    "description": "",
    "type": "card",
    "customer": {
      "name": "Fincra Developers",
      "email": "taofiq@fincra.com",
      "phoneNumber": "+2348142986562"
    },
    "settlementDestination": "wallet"
  }
}
}
```

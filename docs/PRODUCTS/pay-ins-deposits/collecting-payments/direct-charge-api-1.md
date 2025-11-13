---
title: Charge API (White-label Solution)
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
Direct Charge is ideal when you require greater control or a customized solution that integrates with your app. Fincra offers a Direct Charge API, allowing you to securely collect customer payment information while implementing your own user interface and payment flow.

With a single integration, Fincra's Checkout enables you to accept payments through various methods, including card, bank transfer, mobile money, and Pay with PayAttitude. The Checkout features Fincra's user-friendly interface and seamless payment flow. Here's an example of Fincra's Checkout in action:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa27b5c-Screenshot_2024-06-27_at_09.10.46.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


# Payment methods

Our checkout solution offers a gateway to various payment methods. Some of the supported methods include:

1. Card 
2. Bank Transfer
3. Mobile money
4. USSD via PayAttitude

| Method        | API variable  |
| :------------ | :------------ |
| Card          | card          |
| Bank Transfer | bank_transfer |
| Mobile money  | mobile_money  |
| PayAttitude   | PayAttitude   |

# Supported currencies for direct charge

Some of the currencies supported for direct charge are listed below. You can see the full list of supported currencies [here](https://docs.fincra.com/v3.0/docs/supported-currencies-1).

| Currencies | Bank Transfer | Cards | Mobile money | USSD |
| :--------- | :------------ | :---- | :----------- | :--- |
| KES        | YES           | N/A   | YES          | N/A  |
| ZMW        | YES           | N/A   | N/A          | N/A  |
| UGX        | YES           | N/A   | YES          | N/A  |
| ZAR        | YES           | YES   | N/A          | N/A  |
| GHS        | YES           | N/A   | YES          | N/A  |
| NGN        | YES           | YES   | N/A          | YES  |
| USD        | N/A           | YES   | N/A          | N/A  |

# How does direct charge work?

The process of charging a customer consists of three key steps:

- **Initiate charge**:  This involves sending the transaction details and the customer's payment data to the [initiate charge endpoint](/reference/initiate-a-charge).
- **Authorise charge**:  The customer authorises the Charge with their payment provider. The payment provider could be a bank, card issuer or mobile money operator.
- **Verify  charge**: We strongly advise that you make a call to the [verify charge endpoint](/reference/verify-charge)  to ensure that the payment was successful before you give any value to the customer

> 📘 Direct Charge Options
> 
> Via the Direct Charge API, we currently offer support for the below payment methods:
> 
> - [Bank Transfer](https://docs.fincra.com/docs/bank-transfer-direct-charge) 
> - [Card Payments](card-payments-direct-charge)
> - [Mobile Money Payments](mobile-money-direct-charge)
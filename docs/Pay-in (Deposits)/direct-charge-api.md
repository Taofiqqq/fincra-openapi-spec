---
title: Direct Charge API
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
With one integration, Fincra's Checkout allows you to collect payments via card, a bank transfer and Pay with PayAttitude. This Checkout comes with Fincra's user interface and payment flow. Below is an example of Fincra's Checkout:

Direct Charge comes into play when you need more control or a tailored solution that works with your app. Fincra provides a direct charge API for charging customers. You can use the Direct 

Charge API to collect customer payment information and implement your UI and payment flow.\
With the Direct Charge, you can tailor and control the customer experience as you see fit.

## How does direct charge work?

The process of charging a customer consists of three key steps:

* **Initiate charge**:  This involves sending the transaction details and the customer's payment data to the [initiate charge endpoint](/reference/initiate-a-charge).
* **Authorise charge**:  The customer authorises the Charge with their payment provider. The payment provider could be a bank, card issuer or mobile money operator.
* **Verify  charge**: We strongly advise that you make a call to the [verify charge endpoint](/reference/verify-charge)  to ensure that the payment was successful before you give any value to the customer

---
title: Payment Interfaces
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
You can accept payments globally using Fincra's API and payment link solutions. Fincra simplifies the process of accepting payments, even without technical expertise. 

You can generate a payment link from your portal and share it with customers to receive payments. For businesses with custom needs, Fincra recommends integrating its APIs into your system, which requires familiarity with REST APIs.

At Fincra we offer several integration modes and channels for collecting payments. These are:

* **Checkout Redirect:** The Checkout API allows you to safely and securely receive payments from your customers. Your server calls the Create Payment API to generate a checkout payment link, which you then redirect your users to so they can make a payment.\
  For more information click [here](checkout-redirect-1)
* **Checkout Pop Up:** This can be integrated to display a payment modal within your application, enabling your customers to complete transactions by entering their payment details.\
  Click [here](checkout-pop-up) to get started.
* **Direct Charge API:** Direct Charge is ideal when you require greater control or a customized solution that integrates with your app. Fincra offers a Direct Charge API, allowing you to securely collect customer payment information while implementing your own user interface and payment flow. To implement our direct charge solution for cards, you must be PCI-DSS certified. To learn more about using direct charge for custom flows on other payment methods (e.g mobile money) please reach out to us via [the developer hub on Slack](https://join.slack.com/t/fincrahub/shared_invite/zt-2qj5a4zkl-JJwlW2L~YpPNFtPBSxdM4g), email at [support@fincra.com](mailto:support@fincra.com) or, your dedicated support channel.
* **Direct Debit API:** Fincra’s Direct debit is a pull payment method that allows a third party (with the customer’s consent) to transfer funds from the customer’s bank account on agreed dates, typically for bill payments.\
  For detailed information vist the direct debit API [page](direct-debit-api-1).
* **Virtual Account API:** Virtual accounts are accounts that allow Fincra merchants to receive payments from customers via bank transfer. With our virtual accounts, you can accept payments from Africa, Europe, the US, the UK, and anywhere in the world.\
  For detailed information vist the direct debit API [page](virtual-account-api).
* **Payment Links:** With Payment Links, you can quickly create a payment page and share the link with your users. No coding skills are required, making it perfect for non-developers. You can start collecting payments in minutes by following the steps [here](payment-links-no-code)
* **Multicurrency Account:** Our Multicurrency Account product simplifies international payments by enabling businesses to issue named EUR and USD accounts to individuals via our API. To get started click [here](multicurrency-virtual-account-1)

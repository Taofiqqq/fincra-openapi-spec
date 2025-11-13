---
title: Mobile Money
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
# Overview

Mobile Money is a digital payment solution that enables financial transactions through mobile devices, widely adopted across Africa and parts of Asia. It functions as an electronic wallet service, allowing users to store, send, receive, and pay for goods and services directly from their mobile phones without requiring a traditional bank account.

# How Mobile Money Works

The Fincra Mobile Money API enables businesses to accept payments from customers using their mobile phone numbers linked to mobile money providers. When a customer initiates a payment:

1. Your business initiates a payment request through Fincra's API
2. The customer receives a prompt on their mobile device
3. The customer authorises the transaction by entering their PIN
4. Fincra confirms the payment and notifies your business

# Common Use cases

1. **E-commerce Transactions**: Accept payments for online purchases
2. **Bill Payments**: Enable utility and service bill payments
3. **Subscription Services**: Process recurring payments

# Mobile money payment properties by currency

| Property                   | GHS                      | KES           | ZMW                 | UGX         |
| :------------------------- | :----------------------- | :------------ | :------------------ | :---------- |
| Mobile network Operators   | MTN, AirtelTigo, Telecel | Mpesa, Airtel | MTN, Airtel, Zamtel | MTN, Airtel |
| Minimum Transaction Limit  |                          |               |                     |             |
| Maximum Transaction Amount |                          |               |                     |             |
| Refund supported           |                          |               |                     |             |
| Countries                  | Ghana                    | Kenya         | Zambia              | Uganda      |

# Integration options for mobile money payments

You can access the mobile option through the Fincra [Checkout](checkout-redirect-1) or via [direct charge API](direct-charge-api-1)

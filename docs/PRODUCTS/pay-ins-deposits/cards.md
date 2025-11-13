---
title: Pay With Cards
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

Card payments are a secure and widely adopted digital payment method that allow customers to make purchases using credit or debit cards issued by financial institutions. Fincra's Card Payment API enables businesses to accept card payments globally, supporting major card networks and providing a seamless checkout experience across web and mobile platforms.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f1187a563cccb2b400cec2930efae70fbf3db7bfdfee81e8d2da2c0d7b05722-image.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


# How Card Payments Work

The Fincra Card Payment API facilitates the transaction flow between your business, the customer, and the banking networks:

1. Your business initiates a payment request through Fincra's API
2. The customer enters their card details on your checkout page or Fincra's hosted page
3. Card information is securely processed and validated
4. If required, the customer completes 3D Secure authentication
5. The transaction is authorised by the card issuer
6. Fincra confirms the payment status and notifies your business
7. Funds are settled to your account according to your settlement schedule

# Common Use Cases

1. **E-commerce Platforms**: Process online purchases securely
2. **SaaS and Subscription Services**: Handle recurring billing efficiently
3. **Marketplace Payment Processing**: Facilitate transactions between buyers and sellers
4. **Travel and Hospitality Bookings**: Secure reservation payments
5. **Digital Content and Services**: Enable immediate access to digital products

# Card payment properties by currency

| Features                    | NGN         | USD         |
| :-------------------------- | :---------- | :---------- |
| Mastercard scheme supported | ✅           | ✅           |
| Visa scheme supported       | ✅           | ✅           |
| Verve scheme supported      | ✅           | N/A         |
| Chargebacks                 | ✅           | ✅           |
| AMEX scheme supported       | N/A         | ❌           |
| Recurring payment supported | coming soon | coming soon |
|                             |             |             |

# Integration options for card payments

Fincra offers three methods for accepting card payments:

- Card payments via [Checkouts](checkout-redirect-1)
- Card payments through [Payment Links](payment-links-no-code)
- Card payments using our Direct Card Charge APIs. This method involves handling sensitive customer data, so PCI DSS certification is required. If your business is PCI-DSS compliant and you wish to send cardholder information directly to our APIs, please contact us at [support@fincra.com](https://docs.fincra.com/docs/support@fincra.com)
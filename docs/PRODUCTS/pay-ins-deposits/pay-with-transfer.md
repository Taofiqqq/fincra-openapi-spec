---
title: Pay with transfer
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

Pay with Transfer is a payment method that allows customers to make a one-time payment into pooled or temporary virtual accounts. Customers can easily complete these payments through their online banking applications. 

You can access the Pay with Transfer option through the Fincra [Checkout](checkout-redirect-1) or via API

<br />

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dbb900e-pay-with-transfer-2.png",
        "pay-with-transfer-2.png",
        "Fincra Checkout\n\n"
      ],
      "align": "center",
      "caption": "Fincra Checkout"
    }
  ]
}
[/block]


# How Pay With Transfer Works

The Fincra Pay With Transfer service enables businesses to accept payments via direct bank transfers. When a customer initiates a payment:

1. Your business generates a payment request through Fincra's API or checkout
2. Fincra provides a dedicated virtual account number for this transaction
3. The customer transfers funds to the provided account from their bank app
4. Fincra detects the incoming payment and matches it to the transaction
5. Your business receives real-time notification of the successful payment

# Common Use Cases

1. **E-commerce Checkouts**: Provide an alternative payment option for customers who prefer bank transfers
2. **Invoice Payments**: Allow clients to pay invoices directly to a dedicated account number
3. **Marketplace Settlements**: Enable sellers to receive payments without sharing personal bank details
4. **One-time Payments**: Process single transactions without requiring card details
5. **Utility Bill Collections**: Allow customers to pay bills via their preferred banking channels

# Pay With Transfer properties by currency

| Features                           | NGN         | GHS         | KES         | UGX         | ZAR         | ZMW | USD | EUR |
| ---------------------------------- | ----------- | ----------- | ----------- | ----------- | ----------- | --- | --- | --- |
| Bank transfer supported            | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Temporary virtual accounts         | ✅           | ❌           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Permanent virtual accounts         | ✅           | ❌           | ✅           | ❌           | ❌           | ❌   | ❌   | ❌   |
| Real-time transaction notification | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Account name validation            | ✅           | ❌           | ❌           | ❌           | ✅           | ❌   | ❌   | ❌   |
| Transaction reference validation   | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Payment expiry configuration       | ✅           | ❌           | ✅           | ✅           | ❌           | ❌   | ❌   | ❌   |
| Account expiry (minutes)           | 30          | N/A         | 30          | 30          | 30          | N/A | N/A | N/A |
| Settlement time                    | Instant     | Instant     | Instant     | Instant     | Instant     | N/A | N/A | N/A |
| Overdraft protection               | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Supports partial payments          | ✅           | ❌           | ✅           | ❌           | ✅           | ❌   | ❌   | ❌   |
| Auto-reconciliation                | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Supports mobile banking apps       | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Supports USSD banking              | ✅           | ✅           | ✅           | ✅           | ❌           | ❌   | ❌   | ❌   |
| Supports internet banking          | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Customisable account naming        | ✅           | ❌           | ❌           | ❌           | ❌           | ❌   | ❌   | ❌   |
| Customer verification required     | ❌           | ❌           | ❌           | ❌           | ❌           | ❌   | ❌   | ❌   |
| Supports webhook notifications     | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Payer details capture              | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Multiple payment tracking          | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Fee customisation                  | ✅           | ❌           | ❌           | ❌           | ❌           | ❌   | ❌   | ❌   |
| Fee bearer options                 | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Minimum amount                     | 100         | 5           | 100         | 1000        | 10          | N/A | N/A | N/A |
| Maximum amount                     | 10M         | 50K         | 1M          | 5M          | 50K         | N/A | N/A | N/A |
| Available in Checkout              | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Available via API                  | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Supports Payment Links             | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Refund supported                   | ✅           | ✅           | ✅           | ✅           | ✅           | ❌   | ❌   | ❌   |
| Recurring payment supported        | coming soon | coming soon | coming soon | coming soon | coming soon | ❌   | ❌   | ❌   |
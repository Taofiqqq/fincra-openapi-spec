---
title: Currency Conversions (FX)
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

Currency conversion is the process of exchanging one currency for another at a specific exchange rate. Fincra's Conversion API enables businesses to seamlessly convert between different currencies, facilitating international transactions and multi-currency operations. Our solution provides competitive exchange rates, zero fees, and real-time processing for efficient cross-border payments and financial operations.

# How Fincra's conversion solution works

1. **Generate a Quote**: Request a quote by specifying the transaction type as "conversion", source and destination currencies, amount, and setting the payment destination to "fliqpay\_wallet"
2. **Review Quote Details**: Review the quote information including exchange rate, fees, and expiration time
3. **Request Conversion**: Submit a conversion request using the quote reference received in the previous step. This is how you lock a trade.
4. **Receive Webhook Notification**: Listen for webhook events (e.g., "conversion.successful") that indicate the status of your conversion
5. **Validate Webhook**: Secure your implementation by validating the webhook signature with your secret key
6. **Verify Conversion**: Always verify the conversion status using the reference number, even if you receive a webhook notification

# Common use cases

1. **Treasury Management** - For businesses optimising their finances based on exchange rates
2. **Cross-Border Payments** - For international vendor and supplier payments
3. **Multi-Currency Wallets** - For platforms allowing users to hold and convert between currencies
4. **International Invoicing** - For businesses that invoice in one currency but receive in another
5. **Currency Hedging** - For protection against currency fluctuations
6. **Marketplace Payouts** - For distributing funds to global sellers or service providers
7. **Remittance Services** - For building international money transfer platforms
8. **Travel Services** - For travel-related businesses dealing with multiple currencies

# Supported Currencies for Conversion

| From | To                      |
| ---- | ----------------------- |
| NGN  | EUR, USD, KES, GHS      |
| EUR  | NGN, USD, GHS, UGX      |
| USD  | NGN, KES, EUR, GHS, UGX |
| GHS  | NGN, KES, EUR, USD, UGX |
| KES  | USD, EUR, NGN           |
| UGX  | USD, EUR, NGN           |

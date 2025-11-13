---
title: Direct Debit (Mandate Management)
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

Direct Debit is a secure payment method that allows businesses to collect payments directly from customers' bank accounts with prior authorisation. Unlike push payments where customers initiate transfers, Direct Debit is a "pull" payment mechanism where your business can withdraw funds automatically at agreed intervals. 

Fincra's Direct Debit API enables businesses to set up, activate, and manage direct debit mandates digitally, creating a reliable solution for recurring and subscription-based payments.

# How Fincra’s Direct Debit Solution Works

Fincra's Direct Debit solution, powered by NIBSS (Nigeria Inter-Bank Settlement System), simplifies the traditional process:

1. Your business creates a mandate through Fincra's API, specifying the customer's bank details.
2. The customer authorises the mandate by making a nominal token payment of ₦50 to NIBSS (₦100 for some banks with a minimum transaction limit).
3. The mandate is activated within minutes, eliminating the traditional 36+ hour wait time
4. Your business can then initiate debits from the customer's account at the frequency agreed upon.
5. Funds are withdrawn automatically and settled to your account.
6. Transaction notifications are sent to both you and your customer.

# Common Use Cases

1. **Subscription Services**: Automatically collect recurring subscription fees
2. **Loan Repayments**: Schedule automated installment collections
3. **Membership Fees**: Collect periodic membership dues
4. **Insurance Premiums**: Process regular premium payments
5. **Service Retainers**: Manage monthly retainer fee collections
6. **Utility Payments**: Facilitate regular bill payments
7. **Rent Collection**: Automate periodic rental payments

# Direct Debit properties

| Property                     |             |
| :--------------------------- | :---------- |
| Currency                     | NGN         |
| Commercial banks supported   | YES         |
| Microfinance banks supported | NO          |
| Digital banks supported      | NO          |
| One-time payments            | YES         |
| Recurring payments           | YES         |
| Custom payment schedules     | YES         |
| Maximum transaction limit    | ₦10,000,000 |
| Minimum transaction amount   | ₦100        |
| Instant mandate activation   | YES         |

# Integration Options

To get started go to our[Direct debit](direct-debit-api-1) API section.
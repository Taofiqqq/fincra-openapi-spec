---
title: Permanent Virtual Accounts
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

Virtual accounts are accounts that allow Fincra merchants to receive payments from customers via bank transfer. With our virtual accounts, you can accept payments from Africa, Europe, the US, the UK, and anywhere in the world.

> 🚧 Note
> 
> It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the balance API

To get started check our virtual accounts [API](virtual-account-api).

# How Virtual Accounts Work

The Fincra Virtual Accounts service provides dedicated account numbers to businesses and their customers for receiving payments. When using virtual accounts:

1. Your business creates virtual accounts through Fincra's API (permanent or temporary)
2. You share the account details with your customer (account number, bank name, account name)
3. The customer transfers funds to the virtual account from their bank
4. Fincra processes the incoming payment and credits your business balance
5. Your business receives real-time webhook notifications for each successful payment
6. Funds are immediately available in your wallet for use or withdrawal

# Common Use Cases

1. **Wallet Funding**: Allow users to fund their wallets on your platform
2. **Marketplace Collections**: Provide dedicated accounts to merchants for receiving payments
3. **Subscription Services**: Create permanent accounts for recurring payments collection
4. **Cross-border Payments**: Accept international payments with multi-currency accounts
5. **Payment Aggregation**: Collect funds from multiple sources into a centralized account
6. **B2B Payments**: Simplify business-to-business transactions with dedicated accounts
7. **Educational Institutions**: Streamline fee collection with unique accounts per student

# Virtual Accounts properties by currency

| Features                            | NGN          | GHS     | KES     | UGX     | ZAR     | USD      | EUR      | GBP      |
| ----------------------------------- | ------------ | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| Permanent virtual accounts          | ✅            | ❌       | ❌       | ❌       | ❌       | ✅        | ✅        | ✅        |
| Temporary virtual accounts          | ✅            | ✅       | ❌       | ✅       | ✅       | ❌        | ❌        | ❌        |
| Account verification required       | ❌            | ❌       | ❌       | ❌       | ❌       | ✅        | ✅        | ✅        |
| BVN required for permanent accounts | ✅            | N/A     | ❌       | N/A     | N/A     | ❌        | ❌        | ❌        |
| KYC documentation required          | ❌            | ❌       | ❌       | ❌       | ❌       | ✅        | ✅        | ✅        |
| Corporate accounts supported        | ✅            | ❌       | ❌       | ❌       | ❌       | ✅        | ✅        | ✅        |
| Individual accounts supported       | ✅            | ❌       | ❌       | ❌       | ❌       | ✅        | ✅        | ✅        |
| Auto reconciliation                 | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Real-time notification              | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Settlement time                     | Instant      | Instant | Instant | Instant | Instant | 1-2 days | 1-2 days | 1-2 days |
| Account name validation             | ✅            | ❌       | ❌       | ❌       | ✅       | ✅        | ✅        | ✅        |
| Main account creation               | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Additional account creation         | ✅            | ❌       | ✅       | ❌       | ❌       | ✅        | ✅        | ✅        |
| Supported in checkout flow          | ✅            | ❌       | ❌       | ❌       | ❌       | ❌        | ❌        | ❌        |
| Available via API                   | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Webhook notifications               | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Permanent account expiry            | Never        | N/A     | Never   | N/A     | N/A     | Never    | Never    | Never    |
| Temporary account expiry (minutes)  | 30           | 30      | 30      | 30      | 30      | N/A      | N/A      | N/A      |
| View transaction history            | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Payer details capture               | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Multiple bank options               | ✅            | ❌       | ✅       | ❌       | ❌       | ❌        | ❌        | ❌        |
| Supported bank channels             | Globus, Wema | N/A     | Various | N/A     | N/A     | CFSB     | CFSB     | CFSB     |
| Payment reference validation        | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
| Account naming customization        | ✅            | ❌       | ❌       | ❌       | ❌       | ❌        | ❌        | ❌        |
| Account pooling                     | ✅            | ✅       | ✅       | ✅       | ✅       | ❌        | ❌        | ❌        |
| IBAN provided                       | ❌            | ❌       | ❌       | ❌       | ❌       | ❌        | ✅        | ❌        |
| Sort code/routing number            | ❌            | ❌       | ❌       | ❌       | ❌       | ✅        | ❌        | ✅        |
| Minimum receiving amount            | 100          | 5       | 100     | 1000    | 10      | 1        | 1        | 1        |
| Available for collections (pay-ins) | ✅            | ✅       | ✅       | ✅       | ✅       | ✅        | ✅        | ✅        |
---
title: Overview
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
You can use your Fincra account as a source to send money across countries and different currencies. We've got different options to match your use case. With Fincra you can transfer to bank accounts, mobile money wallets, and other Fincra accounts. 

**Learn how you can make payments to**:

- Local and International [ bank accounts ](/docs/bank-account-transfers)
- [ Mobile money wallets](/docs/mobile-money-transfers)
- Another Fincra account by using the [wallet to wallet transfer API](/docs/wallet-to-wallet-transfer-api-1)

> 👍 Endpoints for making payouts
> 
> - Payout to bank accounts and mobile money wallets: For more details, see the [API reference](/reference/payout-1)
> - Wallet to wallet transfer: For more details, see the [API reference ](/reference/wallet-to-wallet-transfer-api)


Payout Status
-------------

A Payout request can have any of the statuses we support on Fincra. Please see the table below for more descriptions of the statuses we support.

| S/N | status     | Description                                |
| :-- | :--------- | :----------------------------------------- |
| 1   | successful | The payout is successful                   |
| 2   | processing | The payout is neither successful or failed |
| 3   | failed     | The payout has failed                      |

Beneficiary Types
-----------------

A beneficiary is a person or organization whom you want to send money or make payments to

| Beneficiary Type | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| individual       | An individual that is the sole beneficiary of the payment.              |
| corporate        | An organisation or company that is the sole beneficiary of the payment. |
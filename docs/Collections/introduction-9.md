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
Payments or fund transfers received into your account are referred to as collections. Our collection service consists of products and features that enable you to easily receive these funds.

Your accounts can be funded in a variety of ways, which include : 

[Payment Checkout](/docs/checkout-1)\
Checkouts provide your customers with the ability to pay using a variety of methods, including bank transfers and card payments.

[Virtual Accounts Transfers](/docs/create-virtual-accounts)\
Our virtual accounts enable you or your customers to receive payments by bank transfers, and the funds will be deposited into the virtual account.

> 🚧 Note
>
> * A subaccount is not the same as a virtual account. To read about subaccounts please see the [Sub-account section](/reference/introduction-2)
> * It is important to note that the first virtual account created by a merchant is referred to as the **Merchant's Main and Personal virtual account**, whereas all subsequent virtual accounts are referred to as **Additional** and can be assigned to the merchant's customers.
> * Funding made to the Main virtual account will not reflect in the collection history of the merchant but will reflect in the wallet balance of the merchant.The main virtual account balance can be viewed by calling the [wallet top-up history endpoint](/reference/get-wallet-top-ups)

[Payment Links](/docs/payment-links)\
A payment link is a simple way to collect payments from your customers by sending them links to pay you or accept donations.

## Types Of Collection Status

We have different collection statuses on Fincra. A collection can either be processing, successful, failed. Please see the table below for more description.

| S/N | Status     | Description                                  |
| :-- | :--------- | :------------------------------------------- |
| 1   | successful | The status when the collection is successful |
| 2   | processing | The status when the collection is processing |
| 3   | failed     | The status when the collection fails         |

---
title: Pay With Opay
deprecated: false
hidden: true
metadata:
  robots: index
---
Pay with OPay lets your customers pay you straight from their OPay wallet. OPay is a Nigerian digital wallet with a large retail user base.<br /><br />The payment is redirect-based. You create the payment on Fincra, Fincra returns an OPay link, and your customer approves the debit inside OPay. OPay handles the login and security checks.<br /><br />**Availability**: NGN only.<br />**Environments**: Sandbox base URL is [https://api.dev.fincra.com](https://api.dev.fincra.com). <br />Sandbox redirects go to OPay's sandbox cashier at sandboxcashier.opaycheckout.com.

## How the payment works

An OPay payment takes four steps:

1. Create the payment. Send the amount, currency and customer details. Fincra returns a payCode, the reference for this payment.
2. Create the charge. Call the charge endpoint for that payCode with type: "opay". Fincra returns an OPay redirect link and the charge status pending.
3. Redirect the customer. Send the customer to the link. They log in to OPay and approve the debit.
4. Verify the transaction. Confirm the final status, amount and reference before you give value.

![](https://files.readme.io/e76a5e60d3f95b4c70814065350ffa9164cc6eb836c62503a304b24c939d8d44-image.png)

<br />

## Authentication<br />Every request in this guide carries three headers.

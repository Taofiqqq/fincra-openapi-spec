---
title: Direct Debit [Mandate Management]
excerpt: >-
  Fincra now enables you to make a direct debit from your customers NGN bank
  accounts.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Overview

The Mandate Management API enables Merchants to create debit mandate instructions on a bank account of its clients/customers for service(s) rendered or product(s) sold.

Use Cases:

- Directly debiting a customers bank account
- Managing recurring payments. 

Note, a mandate typically takes between 24 - 48 hours to be approved by the domiciliary bank. For a mandate to be in effect, the account owner would have to authorize the mandate request, which would me made known to them by their bank.

> 📘 Handling Mandates on the API level
> 
> - [Creating a mandate](https://docs.fincra.com/reference/create-mandate)
> - [Getting mandate info/status](https://docs.fincra.com/reference/get-mandate-info)
> - [Initiating a debit on mandate](https://docs.fincra.com/reference/initiate-debit-on-mandate)
> - [Get all mandates](https://docs.fincra.com/reference/get-all-mandates)
---
title: Request EUR virtual account
excerpt: This API lets you create EUR virtual accounts.
api:
  file: awesome-new-api.json
  operationId: create-fcy-virtual-account
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Virtual accounts can be created in a variety of different currencies, and each of these currencies has its own set of specifications. Take some time to go through this [section](https://docs.fincra.com/docs/fincra-virtual-accounts) to understand the requirement for each currency.

**Note**

- The meansOfId field should contain a URL to the document or the file upload.

> 📘 Hey 👋 we recommend checking out the following sections before making use of the endpoints in this section
> 
> - [Virtual Account Webhook Structure](/reference/virtual-account-webhook)
> - [Use cases](fincra-virtual-accounts#virtual-account-use-cases)
> - [Account request](/reference/how-to-create-virtual-accounts#1---request-a-virtual-account)
> - [Account type](/reference/fincra-virtual-accounts)
> - [Documents](/docs/documents-required-for-virtual-accounts-creation)
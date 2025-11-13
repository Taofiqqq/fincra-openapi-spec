---
title: Create virtual account
excerpt: This API lets you create a single virtual account
api:
  file: awesome-new-api.json
  operationId: request-virtual-accounts
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Virtual accounts can be created in a variety of different currencies, and each of these currencies has its own set of specifications. Take some time to go through this [section](/docs/fincra-virtual-account-creation) . to understand the requirement for each currency.

**Note**: 
  * If you are supplying raw JSON, the meansOfId field should contain a URL to the document or the file upload of the document. If you are sending form data, the field should contain a maximum of two files.
* Please ensure that the `dateOfBirth` on your request matches the date of birth of the 'BVN' provided when creating accounts in `VFD` or the request will fail with the error response `"error": "Error occured while generating virtual account. Please try again."`,

> 📘 Hey 👋 we recommend checking out the following sections before making use of the endpoints in this section
> 
> - [Virtual Account Webhook Structure](/reference/virtual-account-webhook)
> - [Types of virtual account status](/docs/create-virtual-accounts#virtual-account-status)
> - [Use cases](/docs/create-virtual-accounts#use-cases)
> - [Account request](/docs/create-virtual-accounts#account-requests)
> - [Account type](/docs/create-virtual-accounts#account-types)
> - [Documents](/docs/create-virtual-accounts#documents-required-for-requesting-a-virtual-account)
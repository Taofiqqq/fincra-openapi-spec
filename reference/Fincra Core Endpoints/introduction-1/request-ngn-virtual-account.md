---
title: Request NGN virtual account
excerpt: This API lets you create NGN virtual account
api:
  file: awesome-new-api.json
  operationId: request-usd-virtual-account
deprecated: false
hidden: false
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
- Please ensure that the `dateOfBirth` on your request matches the date of birth of the 'BVN' provided when creating accounts in `VFD` or the request will fail with the error response `"error": "Error occured while generating virtual account. Please try again."`,
- For NGN virtual accounts, the name on the BVN must correspond with both the `KYCInfomation.firstName` and `KYCInfomation.lastName`sent in the payload, otherwise, the following error will be received:  `BVN doesn't match the provided name`
- Only requests for Individual and NGN corporate virtual accounts will be instantly approved.

> 📘 Hey 👋 we recommend checking out the following sections before making use of the endpoints in this section
> 
> - [Virtual Account Webhook Structure](/reference/virtual-account-webhook)
> - [Use cases](fincra-virtual-accounts#virtual-account-use-cases)
> - [Account request](/reference/how-to-create-virtual-accounts#1---request-a-virtual-account)
> - [Account type](/reference/fincra-virtual-accounts)
> - [Documents](/docs/documents-required-for-virtual-accounts-creation)
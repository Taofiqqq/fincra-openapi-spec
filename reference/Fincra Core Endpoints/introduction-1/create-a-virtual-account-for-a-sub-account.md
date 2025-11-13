---
title: Create a virtual account for a sub-account
excerpt: This API lets you create a single virtual account for a sub account
api:
  file: awesome-new-api.json
  operationId: create-a-virtual-account-for-a-sub-account
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Virtual accounts can be created in a variety of different currencies, and each of these currencies has its own set of specifications. Take some time to go through this [section](/reference/fincra-virtual-accounts#requesting-virtual-accounts) to understand the requirement for each currency.

Note:

* For NGN virtual accounts, the name on the BVN must correspond with both the `KYCInfomation.firstName` and `KYCInfomation.lastName`sent in the payload, otherwise the following error will be received :  `BVN doesn't match the provided name`
* The old endpoint with the url `/auto` has been deprecated.. [Kindly read more](https://docs.fincra.com/docs/api-changelog#november-25-2022)
* Only requests for Individual and NGN corporate virtual accounts will be instantly approved.

> 📘 Hey 👋 we recommend checking out the following sections before making use of the endpoints in this section
>
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> * [Use cases](/docs/fincra-virtual-accounts#virtual-account-use-cases)
> * [Account request](/docs/how-to-create-virtual-accounts)
> * [Account type](/docs/fincra-virtual-accounts#technical-classification-of-virtual-accounts)
> * [Documents](/docs/documents-required-for-virtual-accounts-creation)

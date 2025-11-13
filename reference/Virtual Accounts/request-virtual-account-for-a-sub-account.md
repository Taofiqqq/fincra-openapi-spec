---
title: Create corporate virtual account for your sub-account
excerpt: >-
  This API lets you create a single corporate virtual account for your sub
  account
api:
  file: awesome-new-api.json
  operationId: request-virtual-account-for-a-sub-account
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Virtual accounts can be created in a variety of different currencies, and each of these currencies has its own set of specifications. Take some time to go through this [section](/reference/required-parameters) . to understand the requirement for each currency.

**Note: **  
* Please ensure that the `dateOfBirth` on your request matches the date of birth of the 'BVN' provided when creating accounts in `VFD` or the request will fail with the error response `"error": "Error occured while generating virtual account. Please try again."`,
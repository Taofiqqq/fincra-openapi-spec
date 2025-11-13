---
title: Get Merchant Information
excerpt: >-
  This API lets you retrieves the unique Identifier of your business and other
  information such as your email etc.
api:
  file: awesome-new-api.json
  operationId: get-parent-business-id-additional-endpoint
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Please take note of the following:**  
The `_id`  in data object obtained from the `business` object  is your business ID.

The `whitelistedIpAddresses` field contains a list of IP addresses, that are authorized to make requests using your API keys. Only requests originating from these IP addresses will be allowed to go through, providing an additional layer of security.
---
title: Get Business Information
excerpt: >-
  This API lets you retrieves the unique Identifier of your business and other
  information such as your email etc.
api:
  file: awesome-new-api.json
  operationId: get-business-information
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Please take note of the following:**\
The `_id`  in data object obtained from the API response   is your business ID.

Within the `settings` field, the response includes the `callbackURL` field, which displays the currently set webhook URL, and the `enableWebhook` field, which indicates whether the webhook was enabled via the dashboard.

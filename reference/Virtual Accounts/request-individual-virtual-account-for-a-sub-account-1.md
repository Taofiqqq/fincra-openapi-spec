---
title: Create Individual virtual account for your sub-account (Instant Approval)
excerpt: This API lets you create a single virtual account for your sub account
api:
  file: awesome-new-api.json
  operationId: request-individual-virtual-account-for-a-sub-account-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Virtual accounts can be created in a variety of different currencies, and each of these currencies has its own set of specifications. 

**Note** : 

* If you're sending raw JSON, the **meansOfId** field should contain a URL or an array of URLs  to the documents , or a maximum of 2 files if you're sending form data.
* Please ensure that the `dateOfBirth` on your request matches the date of birth of the 'BVN' provided when creating accounts in `VFD` or the request will fail with the error response `"error": "Error occured while generating virtual account. Please try again."`,

See our [API documentation ](/docs/documents-required-for-virtual-accounts-creation) for documents we can accept as a means of identification.

```json Arrays
{
"meansOfId": ["https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg",
             "https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg"
             ],
}
```
```Text String
{
"meansOfId": "https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg",
}
```

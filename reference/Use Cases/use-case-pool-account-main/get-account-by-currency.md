---
title: Get Account by Currency
excerpt: >-
  This endpoint is used to fetch account linked to a business by the specified
  currency.
api:
  file: awesome-new-api.json
  operationId: get-account-by-currency
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Simulate a collection and confirm the webhook. Or view all other APIs.
  pages:
    - type: endpoint
      slug: simulate-collection
      title: Simulate Collection
    - type: link
      title: Collection Webhook
      url: https://docs.fincra.com/docs/payin-webhook
---
The response field returns the `accountInformation` object which contains the details of the account your customers will make payment into.

Fields to take note off in the `accountInformation` object:

| Field         | Description                                                                                     |
| :------------ | :---------------------------------------------------------------------------------------------- |
| accountNumber | This is the account number that your customer will make payment into.                           |
| accountName   | This is the name on the account. Pass this as `payee.name` in the simulate collection endpoint. |
| bankName      | This is the name of the bank that payment will be made into                                     |
| bankCode      | This the bank code associated with the bank                                                     |
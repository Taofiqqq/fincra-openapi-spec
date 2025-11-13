---
title: Cash Pick Up Security Questions
excerpt: >-
  This API lets you view a security questions required when using cash pick up
  payout method
api:
  file: awesome-new-api.json
  operationId: cash-pickup-security-questions
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you view the  security questions required when using cash pick-up payout method

Please read the descriptions below to find out what kind of response you can expect after making the API call.

| Field    | Type    | Description                                                                                                                                                  |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Id       | Integer | The unique identifier of the cash pick-up question. This serves as the `securityQuestionId` in the [Payout API](/reference/payout-1) when using cash pick up |
| code     | String  | This serves as the security question code                                                                                                                    |
| question | String  | The security question itself.  e.g Mother's maiden name                                                                                                      |
| type     | String  | The question type                                                                                                                                            |

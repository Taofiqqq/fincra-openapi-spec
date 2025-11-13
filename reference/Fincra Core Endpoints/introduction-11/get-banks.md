---
title: List banks
excerpt: >-
  This API lets you view a list of banks and mobile money wallet providers,
  together with their details such as code, swiftCode, and Bic.
api:
  file: awesome-new-api.json
  operationId: get-banks
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you view a list of banks and mobile money wallet providers, together with their details such as code, swiftCode, and Bic.

Please read the descriptions below to find out what kind of response you can expect after making the API call.

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "Id",
    "0-1": "String",
    "0-2": "The unique identifier of the bank on our application",
    "1-0": "code",
    "1-1": "String",
    "1-2": "The unique identifier assigned by the central bank of the beneficiary's country to the bank. This serves as the `bankCode` and `mobileMoneyCode` in the [Payout API](/reference/payout-1)",
    "2-0": "name",
    "2-1": "String",
    "2-2": "The name of the bank",
    "3-0": "isMobileVerified",
    "3-1": "Boolean",
    "3-2": "This is used to identify mobile money operators.  \nif `isMobileVerified` is true, then the bank is a mobile money operator else if it is false the bank is not a mobile money operator.",
    "4-0": "branches",
    "4-1": "Object",
    "4-2": "The branches of the bank",
    "5-0": "branches.id",
    "5-1": "String",
    "5-2": "The unique identifier of the  branch",
    "6-0": "branches.branchCode",
    "6-1": "String",
    "6-2": "The code of the branch",
    "7-0": "branches.branchName",
    "7-1": "String",
    "7-2": "The name of the branch",
    "8-0": "branches.swiftCode",
    "8-1": "String",
    "8-2": "The swift code of the branch , according to [ISO 9362](https://en.wikipedia.org/wiki/ISO_9362)",
    "9-0": "branches.bic",
    "9-1": "String",
    "9-2": "The Bic code of the branch , according to [ISO 9362](https://en.wikipedia.org/wiki/ISO_9362)",
    "10-0": "branches.BankId",
    "10-1": "String",
    "10-2": "The bank Id"
  },
  "cols": 3,
  "rows": 11,
  "align": [
    null,
    null,
    null
  ]
}
[/block]
---
title: Fetch a collection for an additional virtual account
excerpt: >-
  This endpoint is used for retrieving a single collection of an additional
  virtual account by a reference
api:
  file: awesome-new-api.json
  operationId: get-a-collection-by-reference
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Here’s what the response should look like for this endpoint

```json json
{
    "success": true,
    "message": "Collection fetched successfully",
    "data": {
        "_id": "5893",
        "sourceAmount": 200,
        "destinationAmount": 200,
        "sourceAmountSettled": 100,
        "destinationAmountSettled": 100,
        "sourceCurrency": "NGN",
        "destinationCurrency": "NGN",
        "sourceFee": 100,
        "destinationFee": 100,
        "payeeName": "Proper ventures",
        "payeeAccountNumber": "7299944485",
        "status": "successful",
        "requiresApproval": 0,
        "approvalStatus": "approved",
        "reference": "f9121b3389-e15-409e-b588-36c6146d5823",
        "isSubAccount": 0,
        "description": null,
        "paymentMethod": "virtual_account",
        "settlementDestination": "wallet",
        "message": null,
        "payer": {
            "name": "john doe",
            "account_number": "000000000",
            "bank_code": null,
            "bank_name": null
        },
        "initiatedAt": "2022-03-28T07:15:19.000Z",
        "settledAt": "2022-03-28T07:15:19.000Z",
        "createdAt": "2022-03-28T07:15:19.000Z",
        "updatedAt": "2022-03-28T07:15:19.000Z"
    }
}
```

<br />

**Please take note of the following**

- The `Payer `object refers to the sender of the money
- The `payee` refers to the receiver 
- `destinationAmountSettled` is the amount that settles in the wallet / account of the merchant
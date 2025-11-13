---
title: Create a  payout
excerpt: This API lets you make payouts to bank accounts and mobile money wallets
api:
  file: awesome-new-api.json
  operationId: payout-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
> 📘 Understanding the sections below is required to fully comprehend how the payout API works.
>
> * [How to transfer money to a bank account ](/docs/introduction-10)
> * [Payout parameters required for various currencies](/docs/making-bank-account-transfers)

After a payout is made, we will return a response containing a data object containing two unique identifiers of the transactions on our system, `id`and `reference`. We will also return the transaction `status` and the  reference [`customerReference`] that identifies this transaction on your system for this transaction.

If the transaction requires a document upload [`documentsRequired`], we will specify the type of document required.

```json JSON
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": 15893,
        "reference": "FNCR_37548f434d32",
        "customerReference": null,
        "status": "processing",
        "documentsRequired": []
    }
}
```

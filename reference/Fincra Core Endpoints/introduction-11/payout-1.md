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
  robots: index
next:
  description: ''
---
> 📘 Understanding the sections below is required to fully comprehend how the payout API works.
> 
> - [How to transfer money to a bank account ](/docs/introduction-10)
> - [Payout parameters required for various currencies](/docs/making-bank-account-transfers)

After a payout is made, we will return a response containing a data object containing two unique identifiers of the transactions on our system, `id`and `reference`. We will also return the transaction `status` and the  reference [`customerReference`] that identifies this transaction on your system for this transaction.

It is also important to note that only payouts with the status `failed` should be retried. If you receive a `Timeout Message` it doesn't mean the transaction has failed .

If the transaction requires a document upload [`documentsRequired`], we will specify the type of document required.

```json JSON
{
    "business": "63da200cb234c4e0b992e200",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "amount": "900",
    "description": "Payment",
    "customerReference": "Hai",
    "beneficiary": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "test@fincra.com",
        "type": "individual",
        "accountHolderName": "john doe",
        "accountNumber": "1006219020",
        "country": "NG",
        "bankCode": "044",
        "sortCode": "9090",
        "registrationNumber": "A909"
    },
    "paymentDestination": "bank_account"
}
```
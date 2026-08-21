---
api:
  file: awesome-new-api.json
  operationId: initiate-mobile-money-payout-1
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
Sample Payload

```json JSON
{
  "sourceCurrency": "NGN",
  "destinationCurrency": "NGN",
  "amount": "5000",
  "description": "Payment for services",
  "paymentDestination": "bank_account",
  "beneficiary": {
    "firstName": "John",
    "lastName": "Doe",
    "accountHolderName": "John Doe",
    "type": "individual",
    "accountNumber": "0123456789",
    "bankCode": "044"
  }
}
```

<br />
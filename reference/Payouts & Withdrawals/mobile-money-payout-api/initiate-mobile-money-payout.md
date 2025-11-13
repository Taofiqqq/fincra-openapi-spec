---
title: Initiate Mobile Money Payout
excerpt: This API lets you make payouts to bank accounts and mobile money wallets
api:
  file: awesome-new-api.json
  operationId: initiate-mobile-money-payout
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Sample Payload

```json JSON
{
    "business": "{{The business ID}}",
    "sourceCurrency": "KES",
    "destinationCurrency": "KES",
    "amount": "1000",
    "description": "I want to pay my vendor",
    "paymentDestination": "mobile_money_wallet",
    "customerReference": "b67vfv",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "KE",
        "phone": "2548034567898",
        "mobileMoneyCode": "SAFARICOM",
        "accountNumber": "2548034567898",
        "type": "individual",
        "email": "aa@aa.com"
    }
}
```

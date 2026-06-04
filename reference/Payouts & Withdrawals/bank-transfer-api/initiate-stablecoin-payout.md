---
api:
  file: awesome-new-api.json
  operationId: initiate-mobile-money-payout-1
hidden: false
link:
  new_tab: false
metadata:
  robots: index
---
Sample Payload

```json JSON
{
  "business": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "sourceCurrency": "USDT",
  "destinationCurrency": "USDT",
  "amount": "10",
  "description": "Payment",
  "paymentDestination": "crypto_wallet",
  "customerReference": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "paymentScheme": "usdt_trc20",
  "beneficiary": {
    "walletAddress": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "destinationTag": "test-memo"
  }
}
```
---
title: Initiate Stablecoin Payout
excerpt: >-
  This API allows you to send payouts to supported cryptocurrency wallets,
  including USDT, USDC, and cNGN.
api:
  file: awesome-new-api.json
  operationId: initiate-mobile-money-payout-1
deprecated: false
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
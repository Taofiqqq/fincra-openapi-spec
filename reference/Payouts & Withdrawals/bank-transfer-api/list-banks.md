---
api:
  file: awesome-new-api.json
  operationId: list-banks
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Returns enabled banks, mobile-money operators or cash-pickup providers for a country or currency. Provide at least one of country or currency. Use paymentDestination to return providers for the intended payout route.

## Query parameters

- country: Two-letter country code, for example NG or KE. Optional when currency is provided.
- currency: Three-letter currency code, for example NGN or KES. Optional when country is provided.
- paymentDestination: Optional provider filter. Allowed values are bank_account, mobile_money_wallet, cash_pick_up and settlement_account.

## Example request

GET [https://sandboxapi.fincra.com/core/banks?country=NG\&currency=NGN\&paymentDestination=bank_account](https://sandboxapi.fincra.com/core/banks?country=NG\&currency=NGN\&paymentDestination=bank_account)

## Example response

{
  "success": true,
  "message": "Banks fetched successfully",
  "data": [
    {
      "id": "1",
      "code": "044",
      "name": "Example Bank",
      "swiftCode": null,
      "bic": null,
      "isMobileVerified": null,
      "isCashPickUp": false,
      "nibssCode": "044",
      "branches": []
    }
  ]
}

## Response fields

- id: Provider identifier.
- code: Provider code. Use this as bankCode or mobileMoneyCode when creating the corresponding payout.
- name: Provider name.
- swiftCode and bic: Bank routing identifiers when available.
- isMobileVerified: true for a mobile-money operator; otherwise null.
- isCashPickUp: Indicates a cash-pickup provider.
- nibssCode: NIBSS bank code when available.
- branches: Array of branches. A branch can include id, bankId, branchName, branchCode, swiftCode and bic.
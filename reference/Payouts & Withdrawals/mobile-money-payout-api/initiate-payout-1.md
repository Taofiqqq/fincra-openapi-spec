---
title: Create a mobile-money payout
excerpt: Create a payout to a beneficiary’s mobile-money wallet.
deprecated: false
hidden: false
metadata:
  robots: index
---
Creates a payout to a mobile-money wallet.

POST [https://sandboxapi.fincra.com/disbursements/payouts](https://sandboxapi.fincra.com/disbursements/payouts)

Set paymentDestination to mobile_money_wallet. Use beneficiary.accountNumber for the wallet’s phone number; do not send a phone field.

## Request body

- business: Your Fincra business ID. Required.
- sourceCurrency: Uppercase three-letter source currency. Required.
- destinationCurrency: Uppercase three-letter destination currency. Required.
- amount: Numeric payout amount. Required. Some same-currency mobile-money routes require a whole-number amount.
- customerReference: Your unique reference for this payout. Required.
- description: Payout description. Optional.
- paymentDestination: Use mobile_money_wallet. Required.
- quoteReference: Required for cross-currency payouts.
- beneficiary.accountNumber: Mobile-money phone/account number. Required.
- beneficiary.country: Two-letter country code. Required.
- beneficiary.mobileMoneyCode: Provider code returned by the provider-list endpoint. Required.
- beneficiary.firstName and beneficiary.lastName: Required for an individual.
- beneficiary.accountHolderName: Required for a corporate beneficiary.

## Example request

```json
{
  "business": "64f000000000000000000001",
  "sourceCurrency": "KES",
  "destinationCurrency": "KES",
  "amount": 1000,
  "description": "Wallet payout",
  "paymentDestination": "mobile_money_wallet",
  "customerReference": "momo-20260821-001",
  "beneficiary": {
    "firstName": "Jane",
    "lastName": "Doe",
    "type": "individual",
    "country": "KE",
    "accountNumber": "+254700000000",
    "mobileMoneyCode": "MPESA"
  }
}
```

## Example response

```json
{
  "success": true,
  "message": "Payout initiated successfully.",
  "data": {
    "id": 1254,
    "reference": "5dcf24700a9a4f67",
    "customerReference": "momo-20260821-001",
    "status": "processing",
    "isDocumentRequired": false,
    "documentsRequired": []
  }
}
```

Important: success: true confirms that Fincra handled the API request; it does not guarantee that the payout settled successfully. Always inspect data.status and continue tracking the payout through webhooks or a status endpoint.

## Duplicate customer reference (422)

```json
{
  "success": false,
  "error": "Cannot continue, Duplicate Customer Reference Passed",
  "errorType": "DUPLICATE_CUSTOMER_REFERENCE"
}
```

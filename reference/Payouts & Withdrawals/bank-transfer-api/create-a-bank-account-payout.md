---
title: Create a bank-account payout
excerpt: Create a payout to a beneficiary’s bank account.
deprecated: false
hidden: false
metadata:
  robots: index
---
Creates a payout to a beneficiary’s bank account.

POST [https://sandboxapi.fincra.com/disbursements/payouts](https://sandboxapi.fincra.com/disbursements/payouts)

Set paymentDestination to bank_account. If sourceCurrency and destinationCurrency differ, include the quoteReference returned by the quote endpoint.

## Request body

- business: Your Fincra business ID. Required.
- sourceCurrency: Uppercase three-letter source currency. Required.
- destinationCurrency: Uppercase three-letter destination currency. Required.
- amount: Numeric payout amount. Required. Do not send it as a string.
- customerReference: Your unique reference for this payout. Required.
- description: Payout description. Optional.
- paymentDestination: Use bank_account. Required.
- quoteReference: Required for cross-currency payouts.
- beneficiary: Beneficiary and bank details. Required. Corridor-specific identity and address fields may also apply.

## Example request

{
  "business": "64f000000000000000000001",
  "sourceCurrency": "NGN",
  "destinationCurrency": "NGN",
  "amount": 5000,
  "description": "Payment for services",
  "paymentDestination": "bank_account",
  "customerReference": "payout-20260821-001",
  "beneficiary": {
    "firstName": "John",
    "lastName": "Doe",
    "accountHolderName": "John Doe",
    "type": "individual",
    "country": "NG",
    "accountNumber": "0123456789",
    "bankCode": "044"
  }
}

Use the provider code returned by List banks and payout providers as the beneficiary bankCode.

## Example response

{
  "success": true,
  "message": "Payout initiated successfully.",
  "data": {
    "id": 1254,
    "reference": "5dcf24700a9a4f67",
    "customerReference": "payout-20260821-001",
    "status": "processing",
    "isDocumentRequired": false,
    "documentsRequired": []
  }
}

Important: success: true confirms that Fincra handled the API request; it does not guarantee that the payout settled successfully. Always inspect data.status and continue tracking the payout through webhooks or a status endpoint.

If isDocumentRequired is true, upload every requested document using the Upload Transaction Document endpoint.

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

```json
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
```

Use the provider code returned by List banks and payout providers as the beneficiary bankCode.

## Example response

```json
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
```

Important: success: true confirms that Fincra handled the API request; it does not guarantee that the payout settled successfully. Always inspect data.status and continue tracking the payout through webhooks or a status endpoint.

If isDocumentRequired is true, upload every requested document using the Upload Transaction Document endpoint.

## CAD payouts via Interac e-Transfer

To send CAD through Interac e-Transfer, set paymentScheme to interac and identify the recipient by their Interac email. accountNumber and bankCode are not needed. Verify the email first with [Verify Account Number](https://docs.fincra.com/reference/verify-account-number).

- destinationCurrency: Use CAD. Required.
- paymentScheme: Use interac. Required.
- amount: No more than 2 decimal places. Amounts with more decimal places are rejected.
- description: The recipient sees this on the transfer, so include your business name.
- beneficiary.type: individual or corporate. Required.
- beneficiary.firstName: Required when beneficiary.type is individual.
- beneficiary.lastName: Optional. Used for individual recipients only.
- beneficiary.accountHolderName: The recipient name returned by account resolution. For a corporate recipient, use the business name. Required.
- beneficiary.interacEmail: The recipient’s Interac email. Required.
- beneficiary.country: Use CA. Required.
- beneficiary.securityQuestion and beneficiary.securityAnswer: Required when the recipient does not have Interac Autodeposit enabled. Send both together. The question can be up to 40 characters. The answer must contain 3 to 25 characters with no spaces.

```json
{
  "business": "64f000000000000000000001",
  "sourceCurrency": "CAD",
  "destinationCurrency": "CAD",
  "amount": 100,
  "description": "Acme Stores Ltd, Invoice 4471",
  "paymentDestination": "bank_account",
  "paymentScheme": "interac",
  "customerReference": "cad-interac-001",
  "beneficiary": {
    "firstName": "John",
    "lastName": "Barret",
    "accountHolderName": "John Barret",
    "interacEmail": "johnbarret@example.com",
    "type": "individual",
    "country": "CA"
  }
}
```

For the full flow, including quotes for cross-currency payouts, see [CAD Payouts via Interac e-Transfer](https://docs.fincra.com/docs/send-cad-payouts-via-interac-e-transfer).

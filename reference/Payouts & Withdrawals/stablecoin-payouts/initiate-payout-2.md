---
title: Create a stablecoin payout
excerpt: Create a payout to a supported stablecoin wallet.
deprecated: false
hidden: false
metadata:
  robots: index
---
Creates a payout to a supported stablecoin wallet.

POST [https://sandboxapi.fincra.com/disbursements/payouts](https://sandboxapi.fincra.com/disbursements/payouts)

Set paymentDestination to crypto_wallet and choose a paymentScheme that matches destinationCurrency.

## Supported payment schemes

- USDT: usdt_trc20, usdt_erc20, usdt_solana, usdt_bep20
- USDC: usdc_erc20, usdc_solana, usdc_bep20
- CNGN: cngn_bep20

Generic erc20, btc_mainnet and eth are not supported by this payout endpoint.

## Request body

- business: Your Fincra business ID. Required.
- sourceCurrency: Uppercase source currency. Required.
- destinationCurrency: Use USDT, USDC or CNGN. Required.
- amount: Numeric payout amount. Required. Do not send it as a string.
- customerReference: Your unique reference for this payout. Required.
- description: Payout description. Optional.
- paymentDestination: Use crypto_wallet. Required.
- paymentScheme: A supported scheme matching destinationCurrency. Required for this flow.
- quoteReference: Required when sourceCurrency and destinationCurrency differ.
- beneficiary.walletAddress: Destination wallet address. Required.
- beneficiary.accountHolderName: Wallet holder’s name. Required.
- beneficiary.email: Optional.
- beneficiary.destinationTag: Optional; provide it when the destination network/account requires a memo or tag.

## Example request

```json
{
  "business": "64f000000000000000000001",
  "sourceCurrency": "USD",
  "destinationCurrency": "USDT",
  "amount": 10,
  "description": "Stablecoin payout",
  "paymentDestination": "crypto_wallet",
  "paymentScheme": "usdt_trc20",
  "quoteReference": "quote-reference-from-generate-quote",
  "customerReference": "crypto-20260821-001",
  "beneficiary": {
    "walletAddress": "TExampleWalletAddress",
    "accountHolderName": "Jane Doe",
    "email": "jane@example.com"
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
    "customerReference": "crypto-20260821-001",
    "status": "processing",
    "isDocumentRequired": false,
    "documentsRequired": []
  }
}
```

Important: success: true confirms that Fincra handled the API request; it does not guarantee that the payout settled successfully. Always inspect data.status and continue tracking the payout through webhooks or a status endpoint.

Live stablecoin payouts must be enabled for your business.

## Duplicate customer reference (422)

```json
{
  "success": false,
  "error": "Cannot continue, Duplicate Customer Reference Passed",
  "errorType": "DUPLICATE_CUSTOMER_REFERENCE"
}
```

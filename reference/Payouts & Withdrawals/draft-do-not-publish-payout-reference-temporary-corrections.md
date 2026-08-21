---
title: '[DRAFT — DO NOT PUBLISH] Payout reference temporary corrections'
excerpt: >-
  Internal review copy for the urgent Bank Transfer, Mobile Money, Stablecoin
  and List Banks corrections. Existing public pages remain unchanged.
deprecated: false
hidden: true
metadata:
  robots: index
---
STATUS: INTERNAL REVIEW DRAFT

This page consolidates the minimum corrections needed to stop the current payout reference from misleading integrators. It is not the final information architecture rewrite.

Priority summary

P0 — Bank Transfer > initiate-payout is attached to an invalid API definition and renders as GET [https://example.com](https://example.com). Replace it with the POST contract below.
P0 — Mobile Money > Initiate Payout uses beneficiary.phone, but the payout API validates beneficiary.accountNumber and also requires beneficiary.country and beneficiary.mobileMoneyCode.
P0 — Stablecoin > Initiate Payout lists generic erc20, btc_mainnet and eth schemes that this payout contract does not accept.
P1 — List Banks renders [https://example.com](https://example.com), omits paymentDestination, and has an incomplete response contract.
P1 — The Mobile Money rail contains an incorrectly named duplicate: Verify Bank Transfer by Reference (COPY). Remove it from that rail in the later navigation cleanup.

1. Replacement draft — List Banks

Title: List banks and payout providers
Method and path: GET /core/banks

Description
Returns enabled banks, mobile-money operators or cash-pickup providers for a country or currency. Provide at least one of country or currency. Use paymentDestination to return providers for the intended payout route.

Query parameters

- country: string, optional when currency is provided. Two-letter country code, for example NG or KE.
- currency: string, optional when country is provided. Three-letter currency code, for example NGN or KES.
- paymentDestination: string, optional. Allowed values: bank_account, mobile_money_wallet, cash_pick_up, settlement_account.

Example request
GET [https://sandboxapi.fincra.com/core/banks?country=NG\&currency=NGN\&paymentDestination=bank_account](https://sandboxapi.fincra.com/core/banks?country=NG\&currency=NGN\&paymentDestination=bank_account)

Example 200 response {
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

Response field corrections

- branches is an array, not an object.
- Each branch can include id, bankId, branchName, branchCode, swiftCode and bic.
- Use bankId, not BankId.

2. Replacement draft — Create a bank-account payout

Title: Create a bank-account payout
Method and path: POST /disbursements/payouts

Description
Creates a payout to a beneficiary’s bank account. Set paymentDestination to bank_account. If sourceCurrency and destinationCurrency differ, include the quoteReference returned by the quote endpoint.

Example request {
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

Field notes

- amount is a number, not a string.
- business, sourceCurrency, destinationCurrency, amount, customerReference, paymentDestination and beneficiary are required.
- description is optional.
- quoteReference is required for cross-currency payouts.
- Bank beneficiary requirements can vary by corridor; country, bankCode or bankSwiftCode and additional identity or address fields may be required.

3. Replacement draft — Create a mobile-money payout

Title: Create a mobile-money payout
Method and path: POST /disbursements/payouts

Description
Creates a payout to a mobile-money wallet. Set paymentDestination to mobile_money_wallet. Use the beneficiary accountNumber field for the wallet’s phone number; do not send phone.

Example request {
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

Field notes

- beneficiary.accountNumber, beneficiary.country and beneficiary.mobileMoneyCode are required.
- For an individual beneficiary, firstName and lastName are required.
- For a corporate beneficiary, accountHolderName is required.
- amount is a number. Some same-currency mobile-money routes require a whole-number amount.
- quoteReference is required for cross-currency payouts.

4. Replacement draft — Create a stablecoin payout

Title: Create a stablecoin payout
Method and path: POST /disbursements/payouts

Description
Creates a payout to a supported stablecoin wallet. Set paymentDestination to crypto_wallet and choose a scheme that matches destinationCurrency.

Supported paymentScheme values

- USDT: usdt_trc20, usdt_erc20, usdt_solana, usdt_bep20
- USDC: usdc_erc20, usdc_solana, usdc_bep20
- CNGN: cngn_bep20

Do not list generic erc20, btc_mainnet or eth for this endpoint.

Example request {
  "business": "64f000000000000000000001",
  "sourceCurrency": "USD",
  "destinationCurrency": "USDT",
  "amount": 10,
  "description": "Stablecoin payout",
  "paymentDestination": "crypto_wallet",
  "paymentScheme": "usdt_trc20",
  "customerReference": "crypto-20260821-001",
  "beneficiary": {
    "walletAddress": "TExampleWalletAddress",
    "accountHolderName": "Jane Doe",
    "email": "jane@example.com"
  }
}

Field notes

- beneficiary.walletAddress and beneficiary.accountHolderName are required.
- beneficiary.email and beneficiary.destinationTag are optional.
- amount is a number.
- quoteReference is required when the currencies differ.
- Live stablecoin payouts require the product to be enabled for the business.

5. Shared payout response and status guidance

Example response {
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

Important: success: true confirms that Fincra handled the API request; it does not guarantee that the payout settled successfully. Always inspect data.status and continue tracking the payout through webhooks or a status endpoint. If isDocumentRequired is true, upload every item in documentsRequired using the transaction-document endpoint.

Editor-only checks before any public update

- Do not change the existing public pages until this draft is reviewed.
- Confirm the public gateway prefix for both mobile-money operator-list endpoints; the two current pages disagree between /checkout and /checkout-core.
- Use one canonical payout operation in the rewrite, with bank account, mobile money and stablecoin as destination-specific variants.
- Add complete 200, validation, authentication, duplicate-reference and processing-failure response examples in the final OpenAPI-backed rewrite.

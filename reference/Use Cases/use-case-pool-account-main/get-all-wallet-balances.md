---
title: Get all wallet balances
excerpt: >-
  This endpoint is used to fetch the various balances for your different
  currency wallets.
api:
  file: awesome-new-api.json
  operationId: get-all-wallet-balances
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Check all other endpoints.
  pages:
    - type: endpoint
      slug: get-account-by-currency
      title: Get Account by Currency
    - type: endpoint
      slug: simulate-collection
      title: Simulate Collection
    - type: endpoint
      slug: get-collection-record-by-reference
      title: Get Collection record by reference
    - type: endpoint
      slug: generate-a-quote
      title: Generate a quote
    - type: endpoint
      slug: convert-funds-in-wallet
      title: Convert funds in wallet
    - type: endpoint
      slug: verify-a-conversion
      title: Verify a conversion
    - type: endpoint
      slug: get-account-statement
      title: Get Account Statement
    - type: endpoint
      slug: make-payout-bank-transfer
      title: Make payout (bank transfer)
    - type: endpoint
      slug: webhooks-1
      title: Webhooks
---
This endpoint can be used to fetch your balance in realtime.

You can also get your opening and closing balance over a period of time once the fields `dateFrom` & `dateTo` are passed.

To get your balance for a specific wallet, you can pass the currency as well.
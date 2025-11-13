---
title: 'Use Case: XTransfer Pool Account'
excerpt: >-
  This documentation contains all endpoints required to achieve XTransfer's
  asynchronous pool account collection, conversion, and payouts flows.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: >-
    Proceed to fetch your account details and simulate a collection. Also view
    Webhooks to learn how to set up your webhook with Fincra. You can also check
    out all other APIs below
  pages:
    - type: endpoint
      slug: get-account-by-currency
      title: Get Account by Currency
    - type: endpoint
      slug: simulate-collection
      title: Simulate Collection
    - type: endpoint
      slug: generate-a-quote
      title: Generate a quote
    - type: endpoint
      slug: convert-funds-in-wallet
      title: Convert funds in wallet
    - type: endpoint
      slug: get-account-statement
      title: Get Account Statement
    - type: endpoint
      slug: get-all-wallet-balances
      title: Get all wallet balances
    - type: endpoint
      slug: make-payout-bank-transfer
      title: Make payout (bank transfer)
    - type: endpoint
      slug: webhooks-1
      title: Webhooks
    - type: link
      title: Collection webhook
      url: https://docs.fincra.com/docs/payin-webhook
    - type: link
      title: Conversion webhook
      url: >-
        https://docs.fincra.com/docs/conversions-webhookhttps://docs.fincra.com/docs/conversions-webhook
    - type: link
      title: Payout webhook
      url: https://docs.fincra.com/docs/payout-webhook
---
## Overview

To achieve the specific flows for pool account collection, conversion and payouts, please see the API list below and advised flow.

## XTransfer use cases and flow

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f539f8b3e0d3208d429164afb24722abdd03a9bea67744d00e2fae52f5bf8aa-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "-2px",
      "border": true
    }
  ]
}
[/block]


## Supported countries for pool account collections

<br />

[block:parameters]
{
  "data": {
    "h-0": "Country",
    "h-1": "Currency",
    "h-2": "Financial institutions",
    "h-3": "Min amount",
    "h-4": "Max amount",
    "0-0": "Kenya",
    "0-1": "KES",
    "0-2": "UBA Kenya",
    "0-3": "N/A",
    "0-4": "N/A",
    "1-0": "Uganda",
    "1-1": "UGX",
    "1-2": "ABSA Bank",
    "1-3": "N/A",
    "1-4": "N/A",
    "2-0": "Ghana",
    "2-1": "GHS",
    "2-2": "First Atlantic Bank,  \nUBA Ghana",
    "2-3": "N/A",
    "2-4": "N/A",
    "3-0": "Zambia",
    "3-1": "ZMW",
    "3-2": "Access Bank Zambia LTD",
    "3-3": "N/A",
    "3-4": "N/A",
    "4-0": "South Africa",
    "4-1": "ZAR",
    "4-2": "Nedbank,  \nAccess Bank South Africa",
    "4-3": "N/A",
    "4-4": "N/A"
  },
  "cols": 5,
  "rows": 5,
  "align": [
    "left",
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


## API list

[block:parameters]
{
  "data": {
    "h-0": "# ",
    "h-1": "**Step**",
    "h-2": "**Detail**",
    "h-3": "**API reference**",
    "0-0": "1",
    "0-1": "Get account by currency",
    "0-2": "This endpoint will allow the XTransfer team get the necessary account details that will be shared with their customer for them to receive inflow",
    "0-3": "<https://docs.fincra.com/reference/get-account-by-currency>",
    "1-0": "2",
    "1-1": "Simulate payment",
    "1-2": "Simulate inflow into any pool account using this endpoint and confirm the webhook received.",
    "1-3": "<https://docs.fincra.com/reference/simulate-collection>",
    "2-0": "3",
    "2-1": "Confirm collection/payment",
    "2-2": "Confirm the simulated inflow and get the status using this endpoint.  \n  \nLearn more about setting up and validating webhooks [here](https://docs.fincra.com/docs/webhooks) .",
    "2-3": "**Webhook**: <https://docs.fincra.com/docs/payin-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/get-collection-record-by-reference>",
    "3-0": "4",
    "3-1": "Get statement of account",
    "3-2": "Get all transactions done on your account with Fincra",
    "3-3": "<https://docs.fincra.com/reference/get-account-statement>",
    "4-0": "5",
    "4-1": "Get Wallet Balances",
    "4-2": "Fetch the balances of your different wallets (currencies)",
    "4-3": "<https://docs.fincra.com/reference/get-all-wallet-balances>",
    "5-0": "6",
    "5-1": "Generate quote ",
    "5-2": "Generate a quote for currency trade to your wallet (conversion) or to a customer (cross-currency payout).",
    "5-3": "<https://docs.fincra.com/reference/generate-quote>",
    "6-0": "7",
    "6-1": "Conversion",
    "6-2": "Initiate a trade and convert funds using the generated quote to lock on a price.",
    "6-3": "<https://docs.fincra.com/reference/initiate-currency-conversion>",
    "7-0": "8",
    "7-1": "Confirm a conversion",
    "7-2": "Confirm the status of your conversion or listen for the successful webhook event",
    "7-3": "**Webhook**: <https://docs.fincra.com/docs/conversions-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/verify-conversion-status>",
    "8-0": "9",
    "8-1": "Make a same currency payout",
    "8-2": "Initiate a payout where source currency and destination currency are the same.",
    "8-3": "<https://docs.fincra.com/reference/initiate-bank-transfer>",
    "9-0": "10",
    "9-1": "Confirm payout",
    "9-2": "Confirm the status of the payout transaction using this endpoint.  \n  \nYou can also listen for the successful payout webhook.",
    "9-3": "**Webhook**: <https://docs.fincra.com/docs/payout-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/verify-payout-status-by-reference>  \n  \n**API**: <https://docs.fincra.com/reference/fetch-payout-by-customer-reference>"
  },
  "cols": 4,
  "rows": 10,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]
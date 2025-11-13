---
title: 'Use Case: Pool Account Solution'
excerpt: >-
  This documentation contains all endpoints required to achieve an asynchronnous
  pool account collection, conversion, and payouts flows.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Overview

To achieve the specific flows for pool account collection, conversion and payouts, please see the API list below and advised flow.

## Use cases and flow

![](https://files.readme.io/73b3255ad0b7c4a480c4fc79d31c1174adf2a4f7433028719dd6078ecb934e51-image.png)

## Supported countries for pool account collections

| Country      | Currency | Financial institutions |
| :----------- | :------- | :--------------------- |
| Uganda       | UGX      | Ecobank, Stanbic Bank  |
| Ghana        | GHS      | Calbank                |
| Zambia       | ZMW      | Access Bank Zambia LTD |
| South Africa | ZAR      | Nedbank                |

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
    "0-2": "This endpoint will allow you get the necessary account details that will be shared with their customer for them to receive inflow",
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
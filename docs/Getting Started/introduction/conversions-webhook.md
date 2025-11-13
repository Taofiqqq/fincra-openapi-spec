---
title: Conversions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## conversion.successful
This event is dispatched when an authenticated user performs a successful conversion
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"event\": \"conversion.successful\",\n  \"data\": {\n    \"business\": \"61aa4e72cc67b6f04d97f874\",\n    \"amountCharged\": 450000,\n    \"amountReceived\": 846.45,\n    \"fee\": 8.55,\n    \"sourceCurrency\": \"NGN\",\n    \"destinationCurrency\": \"GBP\",\n    \"rate\": 0.0019,\n    \"settlement\": null,\n    \"status\": \"successful\",\n    \"createdAt\": \"2022-02-20T18:53:59.310Z\",\n    \"updatedAt\": \"2022-02-20T18:53:59.310Z\",\n    \"reference\": \"883beb04-551b-4114-8ed9-12cb196b67c1\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
### Webhook Parameters And Description
[block:parameters]
{
  "data": {
    "h-0": "Data",
    "h-1": "Description",
    "0-0": "data.business",
    "0-1": "The ID of the business that performed the conversion",
    "1-0": "data.amountCharged",
    "1-1": "The addition of the transaction fee and amount to be converted",
    "2-0": "data.amountReceived",
    "2-1": "The amount that settles in the virtual account after the fee has been deducted",
    "3-0": "data.fee",
    "3-1": "The fee charged for the transaction",
    "4-0": "data.sourceCurrency",
    "4-1": "The currency the funds was converted in",
    "5-0": "data.destinationCurrency",
    "5-1": "The currency the funds was converted to",
    "6-0": "data.rate",
    "6-1": "The conversion rate",
    "7-0": "data.settledAt",
    "8-0": "data.status",
    "8-1": "The status of the conversion",
    "9-0": "data.createdAt",
    "9-1": "The timestamp the conversion was created",
    "10-0": "data.updatedAt",
    "10-1": "The timestamp the conversion was updated",
    "11-0": "data.reference",
    "11-1": "This is the unique reference generated for the conversion",
    "7-1": "The timestamp the fund settles in the user wallet"
  },
  "cols": 2,
  "rows": 12
}
[/block]
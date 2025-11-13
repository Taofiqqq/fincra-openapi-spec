---
title: Conversion Webhook
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## conversion.successful

This event is dispatched when an authenticated user performs a successful conversion

```json
{
  "event": "conversion.successful",
  "data": {
    "business": "61aa4e72cc67b6f04d97f874",
    "amountCharged": 450000,
    "amountReceived": 846.45,
    "fee": 8.55,
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "rate": 0.0019,
    "settlement": null,
    "status": "successful",
    "createdAt": "2022-02-20T18:53:59.310Z",
    "updatedAt": "2022-02-20T18:53:59.310Z",
    "reference": "883beb04-551b-4114-8ed9-12cb196b67c1"
  }
}
```

## conversion.failed

This event is dispatched when a conversion fails

```json
{
      "event": "conversion.failed",
      "data": {
        "_id": "1547",
        "amountCharged": 4989700,
        "amountReceived": 3225.4,
        "business": "61aa4e72cc67b6f04d97f874",
        "createdAt": "2025-08-14T19:51:28.000Z",
        "destinationCurrency": "USD",
        "fee": 0,
        "id": 6777,
        "price": 1547,
        "rate": 0.0006464124,
        "reference": "3b789a24-f9e9-4b66-bd4a",
        "sourceCurrency": "NGN",
        "status": "failed",
        "updatedAt": "2025-08-14T19:51:29.000Z"
      }
    }
```

### 

### Webhook Parameters And Description

| Data                     | Description                                                                    |
| :----------------------- | :----------------------------------------------------------------------------- |
| data.business            | The ID of the business that performed the conversion                           |
| data.amountCharged       | The addition of the transaction fee and amount to be converted                 |
| data.amountReceived      | The amount that settles in the virtual account after the fee has been deducted |
| data.fee                 | The fee charged for the transaction                                            |
| data.sourceCurrency      | The currency the funds was converted in                                        |
| data.destinationCurrency | The currency the funds was converted to                                        |
| data.rate                | The conversion rate                                                            |
| data.settledAt           | The timestamp the fund settles in the user wallet                              |
| data.status              | The status of the conversion                                                   |
| data.createdAt           | The timestamp the conversion was created                                       |
| data.updatedAt           | The timestamp the conversion was updated                                       |
| data.reference           | This is the unique reference generated for the conversion                      |
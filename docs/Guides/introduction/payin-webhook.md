---
title: Payin Webhook
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
collection.successful
---------------------

This event is dispatched when funds are received in the user's virtual account. 

```json
{
  "event": "payin.successful",
  "data": {
    "business": "61602d2950139ad72e619891",
    "virtualAccount": "61dc08222d2cc644566c5a591",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 200,
    "destinationAmount": 200,
    "amountReceived": 100,
    "fee": 100,
    "customerName": "Ultimate Global Ventures",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2022-03-28T07:15:19.402Z",
    "createdAt": "2022-03-28T07:15:19.403Z",
    "updatedAt": "2022-03-28T07:15:19.403Z",
    "reference": "f9121b33-7e15-409e-b588-36c6146d5823"
  }
}
```

collection.failed
-----------------

This event is dispatched when a payin to a user's virtual account fails or gets declined.

```json
{
  "event": "payin.failed",
  "data": {
    "business": "6065958518d58020f20b71f3",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "sourceAmount": 210.55,
    "destinationAmount": 210.55,
    "fee": 0,
    "customerName": "Alan ross",
    "settlementDestination": "wallet",
    "status": "failed",
    "initiatedAt": "2017-09-05T10:37:15.000Z",
    "createdAt": "2021-05-09T21:25:13.393Z",
    "updatedAt": "2021-05-09T22:06:29.201Z",
    "reference": "4cbf8122-d272-47fa-8f09-39e538f6ed35",
    "reason": "compliance reasons",
    "paymentSchemme": "fps",
  }
}
```

| Data                       | Description                                                                    |
| :------------------------- | :----------------------------------------------------------------------------- |
| data.business              | The ID of the parent business or sub-account receiving funds in their wallet   |
| data.virtualAccount        | The ID of the virtual account receiving the payment                            |
| data.sourceCurrency        | The currency the funds was sent in                                             |
| data.destinationCurrency   | The currency that the user receives the funds in                               |
| data.sourceAmount          | The  amount that the funds was sent in                                         |
| data.destinationAmount     | The  amount that the funds was sent in                                         |
| data.amountReceived        | The amount that settles in the virtual account after the fee has been deducted |
| data.fee                   | The fee charged for the transaction                                            |
| data.customerName          | The name of the customer sending the funds                                     |
| data.settlementDestination | This is where the funds settle In e.g a user's wallet                          |
| data.status                | This is the status of the collection                                           |
| data.initiatedAt           | This is the timestamp the collection was initiated                             |
| data.createdAt             | This is the timestamp the collection was created                               |
| data.updatedAt             | This is the timestamp the collection was updated                               |
| data.reference             | This is the unique reference generated for the collection                      |
| data.reason                | The reason the collection fails                                                |
| data.paymentScheme         | The payment scheme used in the collection                                      |
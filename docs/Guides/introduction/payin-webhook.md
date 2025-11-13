---
title: Collection Webhook
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
## collection.successful

This event is dispatched when funds are received in the user's virtual account. 

```json
{
  "event": "collection.successful",
  "data": {
    "business": "64f-------------710",
    "virtualAccount": "65f------------b9",
    "sessionId": "ETZ-09-------------Q9M",
    "senderBankName": "Access Bank PLC",
    "senderAccountName": "John Doe",
    "senderAccountNumber": null,
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 50,
    "destinationAmount": 50,
    "description": "FT//12------8/NXG :TRFFRM John Doe TO John Doe",
    "amountReceived": 49.5,
    "fee": 0.5,
    "customerName": "John Doe",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2024-04-23T10:52:50.845Z",
    "createdAt": "2024-04-23T10:52:50.849Z",
    "updatedAt": "2024-04-23T10:52:50.849Z",
    "reference": "e30---------------------------cbb566"
  }
}
```

## collection.failed

This event is dispatched when a payin to a user's virtual account fails or gets declined.

```json
{
  "event": "collection.failed",
  "data": {
    "business": "jw3e3d4fa8728738k82299h4",
    "virtualAccount": "9889sd878nu883bsjka",
    "sessionId": "8293899898398923899112",
    "senderAccountName": "Palmpay  John Doe",
    "senderAccountNumber": "123456789",
    "senderBankName": "PALMPAY",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 200,
    "destinationAmount": 200,
    "amountReceived": 0,
    "fee": 0,
    "customerName": "Palmpay  John Doe",
    "settlementDestination": "",
    "status": "failed",
    "initiatedAt": "2023-09-13T08:11:12.601Z",
    "createdAt": "2023-09-13T08:11:12.603Z",
    "updatedAt": "2023-09-13T08:11:12.603Z",
    "reference": "as89h9n9a-hs89-hihass-a868-8sih98nsu"
  },
  "business": "jw3e3d4fa8728738k82299h4"
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

---
title: Payout
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
## payout.successful

This event is dispatched whenever an authenticated user initiates transfer/payout and it is successful.

```json
{
 "event": "payout.successful",
 "data": {
   "id": 14380,
   "amountCharged": 528947.3684210526,
   "amountReceived": 855,
   "recipient": {
     "name": "Hassan Sarz",
     "accountNumber": "0124775489",
     "type": "individual",
     "email": "aa@aa.com"
   },
   "fee": 150,
   "rate": 0.0019,
   "paymentScheme": "fps",
   "paymentDestination": "bank_account",
   "sourceCurrency": "NGN",
   "destinationCurrency": "GBP",
   "status": "successful",
   "createdAt": "2022-02-20T21:23:44.000Z",
   "updatedAt": "2022-02-20T21:23:50.000Z",
   "reference": "bf2eb02e-39fe-490a-b933-63f8c4d42125",
   "reason": "Payout was successful",
   "traceId": null,
   "valuedAt": "2022-02-20T21:23:50.000Z"
 }
}
```

## payout.failed

This event is dispatched whenever an authenticated user initiates transfer/payout and it fails.

```json
{
  "event": "payout.failed",
  "data": {
    "id": 14382,
    "amountCharged": 12150,
    "amountReceived": 12000,
    "recipient": {
      "name": "Hassan Sarz",
      "accountNumber": "0124775489",
      "type": "individual",
      "email": "aa@aa.com"
    },
    "fee": 150,
    "rate": 1,
    "paymentScheme": "fps",
    "paymentDestination": "bank_account",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "status": "failed",
    "createdAt": "2022-02-21T03:51:53.000Z",
    "updatedAt": "2022-02-21T03:54:10.000Z",
    "reference": "9fd3f916-3b03-4bb2-af69-f42b64925919",
    "reason": "Wrong beneficiary bank details",
    "traceId": null,
    "valuedAt": null
  }
}
```

## Webhook Parameters And Description

| Data                         | Description                                                                          |
| :--------------------------- | :----------------------------------------------------------------------------------- |
| data.id                      | The unique payout ID generated for the payout                                        |
| data.amountCharged           | The addition of the transaction fee and amount to be sent to the recipient           |
| data.amountReceived          | The amount the recipient receives                                                    |
| data.recipient.name          | The recipient name                                                                   |
| data.recipient.accountNumber | The recipient account number                                                         |
| data.recipient.type          | The recipient type                                                                   |
| data.recipient.email         | The recipient email                                                                  |
| data.fee                     | The fee charged for the transaction                                                  |
| data.rate                    | The quoted rate                                                                      |
| data.paymentScheme           | The payment scheme used in processing the payout                                     |
| data.paymentDestination      | The account that received the payment                                                |
| data.sourceCurrency          | The currency used in making the payout                                               |
| data.destinationCurrency     | The currency that the recipient receives the payment \*in                            |
| data.status                  | The status of the payout                                                             |
| data.createdAt               | The timestamp the payout was created                                                 |
| data.updatedAt               | The timestamp the payout was updated                                                 |
| data.reference               | The unique reference generated for the payout                                        |
| data.reason                  | The reason for making the payout                                                     |
| data.traceId                 | The  traceId(sessionId) is a transaction identifier recognised across Nigerian banks |
| data.valuedAt                | The timestamp on which the account holder receives the funds                         |

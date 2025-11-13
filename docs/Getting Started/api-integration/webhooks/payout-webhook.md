---
title: Payout Webhook
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
## Event :payout.successful

This webhook event is triggered when an authenticated user initiates a transfer or payout, and the transaction is successfully completed

```json
{
    "event": "payout.successful",
    "data": {
        "id": 14380,
        "amountCharged": 212000,
        "amountReceived": 500,
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
        "sourceCurrency": "GBP",
        "destinationCurrency": "GBP",
        "status": "successful",
        "createdAt": "2022-04-02T21:23:44.000Z",
        "updatedAt": "2022-04-02T21:23:50.000Z",
        "reference": "bf2eb02e-39fe-490a-b933-63f8c4d42125",
        "customerReference": "4555r4554",// would be included if its passed at the point where payout was initiated
        "reason": "Payout was successful",
        "traceId": null,
        "valuedAt": "2022-04-03T21:23:50.000Z"
    }
}
```

## Event : payout.failed

This webhook event is triggered when an authenticated user initiates a transfer or payout, but the transaction fails to complete.

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
    "customerReference": "4555r4554",// would be included if its passed at the point where payout was initiated
    "reason": "Wrong beneficiary bank details",
    "traceId": null,
    "valuedAt": null
  }
}
```

## Webhook Parameters And Description

 Here are the webhook parameters and their corresponding descriptions:

| Data                         | Description                                                                                           |
| :--------------------------- | :---------------------------------------------------------------------------------------------------- |
| data.id                      | The unique payout ID generated for the payout                                                         |
| data.amountCharged           | The total amount charged for the payout, including transaction fees                                   |
| data.amountReceived          | The amount received by the recipient after deducting fees.                                            |
| data.recipient.name          | The name of the recipient                                                                             |
| data.recipient.accountNumber | The recipient's account number (in the case of mobile money, it can be the recipient's phone number). |
| data.recipient.type          | The type of recipient (individual, business, etc.).                                                   |
| data.recipient.email         | The email address of the recipient                                                                    |
| data.fee                     | The fee charged for the transaction, specified in the destination currency                            |
| data.rate                    | The quoted exchange rate used for the payout.                                                         |
| data.paymentScheme           | The payment scheme used for processing the payout.                                                    |
| data.paymentDestination      | The account or destination that received the payment.                                                 |
| data.sourceCurrency          | The currency used for making the payout.                                                              |
| data.destinationCurrency     | The currency in which the recipient receives the payment.                                             |
| data.status                  | The status of the payout (e.g. successful, failed, pending, processing).                              |
| data.createdAt               | The timestamp indicating when the payout was created.                                                 |
| data.updatedAt               | The timestamp indicating the last update time of the payout.                                          |
| data.reference               | A unique reference generated for the payout.                                                          |
| data.reason                  | A comment or description related to the transaction.                                                  |
| data.customerReference       | The merchant's unique identifier or reference associated with the payout.                             |
| data.traceId                 | The trace ID or session ID, which is a transaction identifier recognized across Nigerian banks        |
| data.valuedAt                | The timestamp indicating when the account holder receives the funds                                   |

These parameters provide various details about the payout and can be utilized for further processing or analysis.
---
title: Create a quote
excerpt: This endpoint is used for generating a quote.
api:
  file: awesome-new-api.json
  operationId: get-a-quote
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
> 📘 Hey 👋 we recommend checking out the following sections before making use of this endpoint
> 
> - [Payment destinations](https://fincra-api.readme.io/reference/payment-destination)  
> - [Beneficiary Types](https://fincra-api.readme.io/reference/introduction-8) 
> - [Payment Schemes](https://fincra-api.readme.io/reference/payment-scheme)
> - [Supported Currencies](https://fincra-api.readme.io/reference/supported-currencies)
> - [Transaction Types](https://fincra-api.readme.io/reference/transaction-types-1)

### Response Body

| Field               | Data Type | Description                                                                                        |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| sourceCurrency      | String    | The currency in which the funds will be sent                                                       |
| destinationCurrency | String    | The currency in which the funds will be received                                                   |
| sourceAmount        | String    | The amount sent                                                                                    |
| destinationAmount   | String    | The amount that will be received                                                                   |
| action              | String    | The type of action that was performed e.g send                                                     |
| transactionType     | String    | The type of transaction e.g _disbursement_ or _conversion_                                         |
| fee                 | String    | The transaction fee of the destination currency                                                    |
| initialAmount       | String    | The amount sent                                                                                    |
| quotedAmount        | String    | The amount that will be received                                                                   |
| rate                | String    | The quoted amount divided by the initial amount                                                    |
| amountToCharge      | String    | The amount charged for the transaction , this is an addition of the fee and the destination amount |
| amountToReceive     | String    | The amount that will be received by the recipient                                                  |
| reference           | String    | The reference of the transaction                                                                   |
| expireAt            | String    | The time the quote expires                                                                         |

<br>
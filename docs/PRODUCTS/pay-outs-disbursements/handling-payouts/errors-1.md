---
title: Errors
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
Below are lists of errors that can be encountered on calling payout endpoints.

| Error Type                   | Message                                                                                                                                 | Action to take                                                                                                                          |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| NO_ENOUGH_MONEY_IN_WALLET    | You don't have enough money in your wallet to make this payout                                                                          | Please ensure your balance is funded and retry the payout                                                                               |
| INVALID_QUOTE                | Invalid quote supplied                                                                                                                  | Please generate a new quote and retry the payout                                                                                        |
| RESOURCE_NOT_FOUND           | Payout not found                                                                                                                        | Please requery the transaction until you get a definitive response status(processing, failed, successful) from Fincra                   |
| QUOTE_NOT_GENERATED          | Error occurred while generating a quote                                                                                                 | Please retry the request                                                                                                                |
| DUPLICATE_CUSTOMER_REFERENCE | Cannot continue, Duplicate Customer Reference Passed                                                                                    | Please retry the request with a unique customer reference                                                                               |
| UNPROCESSABLE_ENTITY         | Quote Reference not specified, Kindly generate a quote first to continue.                                                               | Happens when you initiate a cross currency payout. Please generate a quote first and supply the reference when re-initiating the payout |
| UNPROCESSABLE_ENTITY         | Destination currency (${destinationCurrency}) not supported                                                                             | please check the API documentation for supported currencies you can payout to                                                           |
| UNPROCESSABLE_ENTITY         | Payment destination ${paymentDestination} not supported for currency ${destinationCurrency}, kindly supply a valid payment destination. | please check the API documentation for supported payment destinations                                                                   |
| UNPROCESSABLE_ENTITY         | ${currency} currency not supported                                                                                                      | please check the API documentation for supported currencies                                                                             |
| UNPROCESSABLE_ENTITY         | Beneficiary country is required                                                                                                         | Happens when you initiate an international payout. Please supply the beneficiary country in the payload                                 |
| SERVICE_UNAVAILABLE          | Error occurred during operation. Please try again later.                                                                                | Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra                |
| INTERNAL_SERVER_ERROR        | Error occured during operation. We're currently checking why this is happening.                                                         | Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra                |
| VALIDATION_FAILED            | Validation failed                                                                                                                       | please re-check the request payload sent for validation error and try again                                                             |
| ACCESS_DENIED                | Access denied to requested resource                                                                                                     | Please contact Fincra support team                                                                                                      |
| OPERATION_FORBIDDEN          | Operation forbidden                                                                                                                     | Please contact Fincra support team                                                                                                      |
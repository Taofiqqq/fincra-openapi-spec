---
title: Payout Errors
excerpt: >-
  This page contains the errors that you can encounter while using Fincra Payout
  Endpoints
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
[block:parameters]
{
  "data": {
    "h-0": "Error Type",
    "h-1": "Message",
    "h-2": "Action to take",
    "h-3": "Category",
    "0-0": "NO_ENOUGH_MONEY_IN_WALLET",
    "0-1": "You don't have enough money in your wallet to make this payout",
    "0-2": "Please ensure your balance is funded and retry the payout",
    "0-3": "Genuine Failure",
    "1-0": "INVALID_QUOTE",
    "1-1": "Invalid quote supplied",
    "1-2": "Please generate a new quote and retry the payout",
    "1-3": "Genuine Failure",
    "2-0": "RESOURCE_NOT_FOUND",
    "2-1": "Payout not found",
    "2-2": "Please requery the transaction until you get a definitive response status(processing, failed, successful) from Fincra",
    "2-3": "Ambiguous",
    "3-0": "RESOURCE_NOT_FOUND",
    "3-1": "Quote not found. Kindly do a re-quote to continue",
    "3-2": "Please re-generate a new quote and re-initiate the payout.",
    "3-3": "Genuine Failure",
    "4-0": "QUOTE_NOT_GENERATED",
    "4-1": "Error occurred while generating a quote",
    "4-2": "Please retry the request",
    "4-3": "Genuine Failure",
    "5-0": "TOO_MANY_REQUESTS",
    "5-1": "The volume of requests sent to the endpoint has exceeded the limit( 200 transaction requests per second per merchant).",
    "5-2": "Kindly ensure that you are not sending over 200 transaction requests per second.",
    "5-3": "Genuine Failure",
    "6-0": "DUPLICATE_CUSTOMER_REFERENCE",
    "6-1": "Cannot continue, Duplicate Customer Reference Passed",
    "6-2": "Please retry the request with a unique customer reference",
    "6-3": "Genuine Failure",
    "7-0": "UNPROCESSABLE_ENTITY",
    "7-1": "Quote Reference not specified, Kindly generate a quote first to continue.",
    "7-2": "Happens when you initiate a cross-currency payout. Please generate a quote first and supply the reference when re-initiating the payout",
    "7-3": "Genuine Failure",
    "8-0": "UNPROCESSABLE_ENTITY",
    "8-1": "Destination currency (${destinationCurrency}) not supported",
    "8-2": "please check the API documentation for supported currencies you can payout to",
    "8-3": "Genuine Failure",
    "9-0": "UNPROCESSABLE_ENTITY",
    "9-1": "Payment destination ${paymentDestination} not supported for currency ${destinationCurrency}, kindly supply a valid payment destination.",
    "9-2": "please check the API documentation for supported payment destinations",
    "9-3": "Genuine Failure",
    "10-0": "UNPROCESSABLE_ENTITY",
    "10-1": "${currency} currency not supported",
    "10-2": "please check the API documentation for supported currencies",
    "10-3": "Genuine Failure",
    "11-0": "UNPROCESSABLE_ENTITY",
    "11-1": "Beneficiary country is required",
    "11-2": "Happens when you initiate an international payout. Please supply the beneficiary country in the payload",
    "11-3": "Genuine Failure",
    "12-0": "UNPROCESSABLE_ENTITY",
    "12-1": "Payout to AIRTEL requires a whole num amount.",
    "12-2": "Happens when a decimal is passed in the amount field when a Mobile Money payout is initiated, with mobileMoneyCode: \"AIRTEL\".  \nIf you are processing a cross-currency payout and the decimal amount generated is post-conversion, you can get a whole number using the quote API with receive action.",
    "12-3": "Genuine Failure",
    "13-0": "SERVICE_UNAVAILABLE",
    "13-1": "Error occurred during operation. Please try again later.",
    "13-2": "Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra",
    "13-3": "Ambiguous",
    "14-0": "INTERNAL_SERVER_ERROR",
    "14-1": "Error occured during operation. We're currently checking why this is happening.",
    "14-2": "Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra",
    "14-3": "Ambiguous",
    "15-0": "VALIDATION_FAILED",
    "15-1": "Validation failed",
    "15-2": "please re-check the request payload sent for validation error and try again",
    "15-3": "Genuine Failure",
    "16-0": "ACCESS_DENIED",
    "16-1": "Access denied to requested resource",
    "16-2": "Please contact Fincra support team",
    "16-3": "Genuine Failure",
    "17-0": "OPERATION_FORBIDDEN",
    "17-1": "Operation forbidden",
    "17-2": "Please contact Fincra support team",
    "17-3": "Genuine Failure"
  },
  "cols": 4,
  "rows": 18,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]
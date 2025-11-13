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
<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Error Type
      </th>

      <th style={{ textAlign: "left" }}>
        Message
      </th>

      <th style={{ textAlign: "left" }}>
        Action to take
      </th>

      <th style={{ textAlign: "left" }}>
        Category
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        NO\_ENOUGH\_MONEY\_IN\_WALLET
      </td>

      <td style={{ textAlign: "left" }}>
        You don't have enough money in your wallet to make this payout
      </td>

      <td style={{ textAlign: "left" }}>
        Please ensure your balance is funded and retry the payout
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        INVALID\_QUOTE
      </td>

      <td style={{ textAlign: "left" }}>
        Invalid quote supplied
      </td>

      <td style={{ textAlign: "left" }}>
        Please generate a new quote and retry the payout
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        RESOURCE\_NOT\_FOUND
      </td>

      <td style={{ textAlign: "left" }}>
        Payout not found
      </td>

      <td style={{ textAlign: "left" }}>
        Please requery the transaction until you get a definitive response status(processing, failed, successful) from Fincra
      </td>

      <td style={{ textAlign: "left" }}>
        Ambiguous
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        RESOURCE\_NOT\_FOUND
      </td>

      <td style={{ textAlign: "left" }}>
        Quote not found. Kindly do a re-quote to continue
      </td>

      <td style={{ textAlign: "left" }}>
        Please re-generate a new quote and re-initiate the payout.
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        QUOTE\_NOT\_GENERATED
      </td>

      <td style={{ textAlign: "left" }}>
        Error occurred while generating a quote
      </td>

      <td style={{ textAlign: "left" }}>
        Please retry the request
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        TOO\_MANY\_REQUESTS
      </td>

      <td style={{ textAlign: "left" }}>
        The volume of requests sent to the endpoint has exceeded the limit( 200 transaction requests per second per merchant).
      </td>

      <td style={{ textAlign: "left" }}>
        Kindly ensure that you are not sending over 200 transaction requests per second.
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        DUPLICATE\_CUSTOMER\_REFERENCE
      </td>

      <td style={{ textAlign: "left" }}>
        Cannot continue, Duplicate Customer Reference Passed
      </td>

      <td style={{ textAlign: "left" }}>
        Please retry the request with a unique customer reference
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        Quote Reference not specified, Kindly generate a quote first to continue.
      </td>

      <td style={{ textAlign: "left" }}>
        Happens when you initiate a cross-currency payout. Please generate a quote first and supply the reference when re-initiating the payout
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        Destination currency ($\{destinationCurrency}) not supported
      </td>

      <td style={{ textAlign: "left" }}>
        please check the API documentation for supported currencies you can payout to
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        Payment destination $\{paymentDestination} not supported for currency $\{destinationCurrency}, kindly supply a valid payment destination.
      </td>

      <td style={{ textAlign: "left" }}>
        please check the API documentation for supported payment destinations
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        $\{currency} currency not supported
      </td>

      <td style={{ textAlign: "left" }}>
        please check the API documentation for supported currencies
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        Beneficiary country is required
      </td>

      <td style={{ textAlign: "left" }}>
        Happens when you initiate an international payout. Please supply the beneficiary country in the payload
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        UNPROCESSABLE\_ENTITY
      </td>

      <td style={{ textAlign: "left" }}>
        Payout to AIRTEL requires a whole num amount.
      </td>

      <td style={{ textAlign: "left" }}>
        Happens when a decimal is passed in the amount field when a Mobile Money payout is initiated, with mobileMoneyCode: "AIRTEL".\
        If you are processing a cross-currency payout and the decimal amount generated is post-conversion, you can get a whole number using the quote API with receive action.
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        SERVICE\_UNAVAILABLE
      </td>

      <td style={{ textAlign: "left" }}>
        Error occurred during operation. Please try again later.
      </td>

      <td style={{ textAlign: "left" }}>
        Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra
      </td>

      <td style={{ textAlign: "left" }}>
        Ambiguous
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        INTERNAL\_SERVER\_ERROR
      </td>

      <td style={{ textAlign: "left" }}>
        Error occured during operation. We're currently checking why this is happening.
      </td>

      <td style={{ textAlign: "left" }}>
        Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra
      </td>

      <td style={{ textAlign: "left" }}>
        Ambiguous
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        VALIDATION\_FAILED
      </td>

      <td style={{ textAlign: "left" }}>
        Validation failed
      </td>

      <td style={{ textAlign: "left" }}>
        please re-check the request payload sent for validation error and try again
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        ACCESS\_DENIED
      </td>

      <td style={{ textAlign: "left" }}>
        Access denied to requested resource
      </td>

      <td style={{ textAlign: "left" }}>
        Please contact Fincra support team
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        OPERATION\_FORBIDDEN
      </td>

      <td style={{ textAlign: "left" }}>
        Operation forbidden
      </td>

      <td style={{ textAlign: "left" }}>
        Please contact Fincra support team
      </td>

      <td style={{ textAlign: "left" }}>
        Genuine Failure
      </td>
    </tr>
  </tbody>
</Table>

---
title: Payment Schemes
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
A payment scheme is a set of rules that Payment Service Providers(PSP) have agreed upon to execute transactions through a specific payment instrument (such as credit transfer, direct debit, card, etc).

Please see the below table for payment schemes supported on Fincra.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Payment Scheme
      </th>

      <th style={{ textAlign: "left" }}>
        Currency
      </th>

      <th style={{ textAlign: "left" }}>
        API Value
      </th>

      <th style={{ textAlign: "left" }}>
        Settlement Time
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        SWIFT
      </td>

      <td style={{ textAlign: "left" }}>
        GBP\
        USD\
        EUR 
      </td>

      <td style={{ textAlign: "left" }}>
        swift
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        FPS
      </td>

      <td style={{ textAlign: "left" }}>
        GBP
      </td>

      <td style={{ textAlign: "left" }}>
        fps
      </td>

      <td style={{ textAlign: "left" }}>
        Within an hour
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        CHAPS
      </td>

      <td style={{ textAlign: "left" }}>
        GBP
      </td>

      <td style={{ textAlign: "left" }}>
        chaps
      </td>

      <td style={{ textAlign: "left" }}>
        Within 1 day
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        SEPA
      </td>

      <td style={{ textAlign: "left" }}>
        EUR
      </td>

      <td style={{ textAlign: "left" }}>
        sepa
      </td>

      <td style={{ textAlign: "left" }}>
        Within 1 day
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        SEPA INSTANT
      </td>

      <td style={{ textAlign: "left" }}>
        EUR
      </td>

      <td style={{ textAlign: "left" }}>
        sepa\_inst
      </td>

      <td style={{ textAlign: "left" }}>
        20 seconds
      </td>
    </tr>
  </tbody>
</Table>

Currency: This refers to the destination currency.

Payment Scheme: This is the valid payment scheme used in the beneficiary region.

API Value: The accepted value of the payment scheme that is to be sent in the API request.

When do you need a payment scheme? When making payments to bank accounts in the currencies specified in the table, you will need a payment scheme

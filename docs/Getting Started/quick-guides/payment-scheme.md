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



[block:parameters]
{
  "data": {
    "h-0": "Payment Scheme",
    "h-1": "Currency",
    "h-2": "API Value",
    "0-0": "SWIFT",
    "0-1": "GBP \nUSD \nEUR ",
    "0-2": "swift",
    "1-0": "FPS",
    "1-1": "GBP",
    "1-2": "fps",
    "2-0": "CHAPS",
    "2-1": "GBP",
    "2-2": "chaps",
    "3-0": "SEPA",
    "3-1": "EUR",
    "3-2": "sepa",
    "4-0": "SEPA INSTANT",
    "4-1": "EUR",
    "4-2": "sepa_inst"
  },
  "cols": 3,
  "rows": 5
}
[/block]
Currency: This refers to the destination currency.

Payment Scheme: This is the valid payment scheme used in the beneficiary region.

API Value: The accepted value of the payment scheme that is to be sent in the API request.
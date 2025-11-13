---
title: Payment Schemes
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
A payment scheme is a set of rules that Payment Service Providers(PSP) have agreed upon to execute transactions through a specific payment instrument (such as credit transfer, direct debit, card, etc).

Please see the below table for payment schemes supported on Fincra.

| Payment Scheme | Currency       | API Value     | Settlement Time   |
| :------------- | :------------- | :------------ | :---------------- |
| SWIFT          | GBP, EUR & USD | swift         | 1-2 business days |
| FPS            | GBP            | fps           | Within an hour    |
| CHAPS          | GBP            | chaps         | Within an hour    |
| SEPA           | EUR            | sepa          | Within 1 day      |
| SEPA INSTANT   | EUR            | sepa\_instant | 20 seconds        |

**Please Note**\
CHAPS payments can be sent between 08:00 – 17:00 Monday to Friday (excluding UK public holidays).

Currency: This refers to the destination currency.

Payment Scheme: This is the valid payment scheme used in the beneficiary region.

API Value: The accepted value of the payment scheme that is to be sent in the API request.

When do you need a payment scheme? When making payments to bank accounts in the currencies specified in the table, you will need a payment scheme

## Nigerian Bank Codes

> Please Note that this section  applies to NGN payouts  and not FCY payouts

Bank Codes is a required field when making NGN payouts or Transfers.

| Bank Code | Bank Name                    |
| :-------- | :--------------------------- |
| 044       | Access Bank Nigeria Plc      |
| 023       | City Bank Nigeria Ltd        |
| 063       | Diamond Bank Plc             |
| 050       | Ecobank Nigeria              |
| 084       | Enterprise Bank Plc          |
| 070       | Fidelity Bank Plc            |
| 011       | First Bank of Nigeria Plc    |
| 214       | First City Monument Bank     |
| 000027    | Globus Bank                  |
| 058       | Guaranty Trust Bank Plc      |
| 030       | Heritage Banking Company Ltd |
| 301       | Jaiz Bank                    |
| 082       | Keystone Bank Ltd            |
| 014       | Mainstreet Bank Plc          |
| 090267    | Kuda                         |
| 101       | Providus Bank                |
| 076       | Skye Bank Plc                |
| 039       | Stanbic IBTC Plc             |
| 232       | Sterling Bank Plc            |
| 032       | Union Bank Nigeria Plc       |
| 033       | United Bank for Africa Plc   |
| 215       | Unity Bank Plc               |
| 090110    | VFD Microfinance Bank        |
| 035       | Wema Bank Plc                |
| 057       | Zenith Bank International    |

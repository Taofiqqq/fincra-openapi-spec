---
title: GBP Payouts (CHAPS)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
This section covers the parameters needed to process payments to bank accounts in the UK.

> 📘 Understanding the sections below is required to fully comprehend how the payout API works.
>
> * [How to transfer money to a bank account ](/docs/introduction-10)
> * [Beneficiary Types](/docs/introduction-10#beneficiary-types)
> * [Payment Schemes](/docs/payment-scheme)

<br />

## CHAPS Transfers

The processing parameters for the Clearing House Automated Payment System (CHAPS) scheme are described in this section. These parameters can be used to process payments to UK bank accounts. Please be aware that the CHAPS payment is available Monday to Friday excluding bank holidays, and usually has a cut-off time of 5.30 pm. Please see the bank of England [documentation](https://www.bankofengland.co.uk/payment-and-settlement/chaps#:~:text=Operating%20hours%3A%20The%20CHAPS%20system,be%20submitted%20by%205.40pm.) on chaps for more details.

To make payments you will need to send the required parameters to the [payout endpoint](/reference/payout-1)

### Individual Beneficiary

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                                                                                          |
| ----------------------------- | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| business                      | Yes       | string | The ID of the business making the payout.                                                                                                                                                                                                                                            |
| sourceCurrency                | Yes       | string | The currency which is used to fund the payout                                                                                                                                                                                                                                        |
| destinationCurrency           | Yes       | string | The currency in which the recipient will be receiving funds                                                                                                                                                                                                                          |
| amount                        | Yes       | string | The value that is to be transferred from the source currency wallet.                                                                                                                                                                                                                 |
| description                   | Yes       | string | The description of the payout                                                                                                                                                                                                                                                        |
| paymentDestination            | Yes       | string | This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details                                                                                                                            |
| customerReference             | No        | string | This is the unique reference generated for the transaction on your platform.                                                                                                                                                                                                         |
| quoteReference                | No        | string | This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint. |
| beneficiary                   | Yes       | object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                                                                                       |
| beneficiary.firstName         | Yes       | string | The first name of the beneficiary .                                                                                                                                                                                                                                                  |
| beneficiary.lastName          | Yes       | string | The last name of the beneficiary .                                                                                                                                                                                                                                                   |
| beneficiary.accountHolderName | Yes       | string | This field is required by all type of beneficiaries.                                                                                                                                                                                                                                 |
| beneficiary.accountNumber     | Yes       | string | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                                                                                          |
| beneficiary.type              | Yes       | string | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                                                                                           |
| beneficiary.country           | Yes       | string | The country in which the beneficiary resides.                                                                                                                                                                                                                                        |
| beneficiary.email             | No        | string | The beneficiary's email                                                                                                                                                                                                                                                              |
| beneficiary.sortCode          | Yes       | string | The beneficiary's bank sort code. Sort codes are the domestic bank codes used to route money transfers between financial institutions in the United Kingdom, and in the Republic of Ireland. e.g 000000                                                                              |
| beneficiary.bankSwiftCode     | Yes       | string | The beneficiary's bank swift code according to [ISO9362](https://en.wikipedia.org/wiki/ISO_9362) . e.g UBSWCHZH80A                                                                                                                                                                   |

The payload should look like this :

```json CHAPS
{
    "business": "{{The business ID}}",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",,
        "sortCode" : "hhgghxgh",
        "bankSwiftCode" : "hhgghxgh"
    },
    "paymentScheme": "chaps",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

### Corporate Beneficiary

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                                                                                          |
| ----------------------------- | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| business                      | Yes       | string | The ID of the business making the payout.                                                                                                                                                                                                                                            |
| sourceCurrency                | Yes       | string | The currency which is used to fund the payout                                                                                                                                                                                                                                        |
| destinationCurrency           | Yes       | string | The currency in which the recipient will be receiving funds                                                                                                                                                                                                                          |
| amount                        | Yes       | string | The amount to be sent.This should be in larger units                                                                                                                                                                                                                                 |
| description                   | Yes       | string | The description of the payout                                                                                                                                                                                                                                                        |
| paymentDestination            | Yes       | string | This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details                                                                                                                            |
| customerReference             | No        | string | This is the unique reference generated for the transaction on your platform.                                                                                                                                                                                                         |
| quoteReference                | No        | string | This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint. |
| beneficiary                   | Yes       | object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                                                                                       |
| beneficiary.accountHolderName | Yes       | string | This field is required by all type of beneficiaries.                                                                                                                                                                                                                                 |
| beneficiary.accountNumber     | Yes       | string | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                                                                                          |
| beneficiary.type              | Yes       | string | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                                                                                           |
| beneficiary.country           | Yes       | string | The country in which the beneficiary resides.                                                                                                                                                                                                                                        |
| beneficiary.email             | No        | string | The beneficiary's email                                                                                                                                                                                                                                                              |
| beneficiary.sortCode          | Yes       | string | The beneficiary's bank sort code                                                                                                                                                                                                                                                     |
| beneficiary.bankSwiftCode     | Yes       | string | The beneficiary's bank swift code                                                                                                                                                                                                                                                    |

The payload should look like this :

```json CHAPS
{
    "business": "{{The business ID}}",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "corporate",
        "email": "aa@aa.com",,
        "sortCode" : "hhgghxgh",
        "bankSwiftCode" : "hhgghxgh"
    },
    "paymentScheme": "chaps",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

<br />

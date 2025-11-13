---
title: African Payouts
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
Payments to bank accounts in African countries are covered in this section.

> 📘 Understanding the sections below is required to fully comprehend how the payout API works.
> 
> - [How to transfer money to a bank account ](/docs/introduction-10)
> - [Beneficiary Types](/docs/introduction-10#beneficiary-types)

<br />

Payout Endpoint
---------------

This endpoint is used to process transfers in all currencies we support and regions we cover. To test a payout please see the [API Reference](/reference/payout-1)

```json json
{{host}}/disbursements/payouts/

```



NGN Payouts
-----------

The parameters that can be used to process payment to a Nigerian Bank Account (NUBAN) are explained below 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                                                                                          |
| ----------------------------- | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| business                      | Yes       | string | The ID of the business making the payout.                                                                                                                                                                                                                                            |
| sourceCurrency                | Yes       | string | The currency which is used to fund the payout                                                                                                                                                                                                                                        |
| destinationCurrency           | Yes       | string | The currency in which the recipient will be receiving funds                                                                                                                                                                                                                          |
| amount                        | Yes       | string | The value that is to be transferred from the source currency wallet.                                                                                                                                                                                                                 |
| description                   | Yes       | string | The description of the payout                                                                                                                                                                                                                                                        |
| paymentDestination            | Yes       | string | This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details .                                                                                                                          |
| customerReference             | No        | string | This is the unique reference generated for the transaction on your platform.                                                                                                                                                                                                         |
| quoteReference                | No        | string | This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint. |
| beneficiary                   | Yes       | object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different. The following tables detail the various beneficiaries.                                                                                                |
| beneficiary.firstName         | No        | string | The first name of the beneficiary . This is only required when you want to make  payments to an individual beneficiary                                                                                                                                                               |
| beneficiary.lastName          | No        | string | This field is optional and only applies to payments that can be made to individual beneficiaries.                                                                                                                                                                                    |
| beneficiary.accountHolderName | Yes       | string | This field is required by both individual and corporate beneficiaries.                                                                                                                                                                                                               |
| beneficiary.accountNumber     | Yes       | string | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                                                                                          |
| beneficiary.phoneNumber     | No       | string | The mobile number of the beneficiary                                                                                                                                                                    |
| beneficiary.type              | Yes       | string | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                                                                                           |
| beneficiary.country           | No        | string | The country's [alpha2Code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) in which the beneficiary resides.                                                                                                                                                                                                                                        |
| beneficiary.email             | No        | string | The beneficiary's email                                                                                                                                                                                                                                                              |
| beneficiary.bankCode          | Yes       | string | The beneficiary bank code. To get the bank code please see the [bank codes](/reference/get-branch-code) for more details. This is required for NGN payouts                                                                                                                           |

The payload should look like this :

```json NGN
{
    "business": "{{The business ID}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",
        "bankCode": "058"
    }
}
```

<br />

GHS, KES Payouts
----------------

The parameters that can be used to process payments to Ghana and Kenya bank accounts are explained below 

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
| beneficiary                   | Yes       | object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different. The following tables detail the various beneficiaries.                                                                                                |
| beneficiary.firstName         | No        | string | The first name of the beneficiary . This is only required when you want to make  payments to an individual beneficiary                                                                                                                                                               |
| beneficiary.lastName          | No        | string | This field is optional and only applies to payments that can be made to individual beneficiaries.                                                                                                                                                                                    |
| beneficiary.accountHolderName | Yes       | string | This field is required by both individual and corporate beneficiaries.                                                                                                                                                                                                               |
| beneficiary.accountNumber     | Yes       | string | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                                                                                          |
| beneficiary.phoneNumber     | No       | string | The mobile number of the beneficiary                                                                                                                                                                    |
| beneficiary.type              | Yes       | string | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                                                                                           |
| beneficiary.country           | No        | string | The country's [alpha2Code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) in which the beneficiary resides.                                                                                                                                                                                                                                         |
| beneficiary.email             | No        | string | The beneficiary's email                                                                                                                                                                                                                                                              |
| beneficiary.bankCode          | Yes       | string | The beneficiary bank code. To get the bank code please see the [bank codes](/reference/get-branch-code) for more details. This is required for NGN payouts                                                                                                                           |

The payload should look like this :

```json KES
{
    "business": "{{The business ID}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "KES",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",
        "bankCode": "058"
    }
}
```
```json GHS
{
    "business": "{{The business ID}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "GHS",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",
        "bankCode": "058"
    }
}
```

<br />
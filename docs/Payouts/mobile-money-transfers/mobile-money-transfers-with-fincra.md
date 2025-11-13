---
title: Payout To Mobile Money Wallets
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
This section covers the parameters needed to process payment to mobile money wallets

> 📘 Understanding the sections below is required to fully comprehend how the payout API works.
> 
> - [How to transfer money to a bank account ](/docs/introduction-10)
> - [Beneficiary Types](/docs/introduction-10#beneficiary-types)

<br />

Payout Endpoint
---------------

This endpoint is used to process transfers in all currencies we support and regions we cover.

```json json
{{host}}/disbursements/payouts/

```

<br />

Endpoint Parameters
-------------------

The parameters that can be used to process payments to Mobile money wallets are explained below 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                                                                                          |
| ----------------------------- | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| business                      | Yes       | string | The ID of the business making the payout.                                                                                                                                                                                                                                            |
| sourceCurrency                | Yes       | string | The currency which is used to fund the payout                                                                                                                                                                                                                                        |
| destinationCurrency           | Yes       | string | The currency in which the recipient will be receiving funds                                                                                                                                                                                                                          |
| amount                        | Yes       | string | The amount to be sent.This should be in larger units                                                                                                                                                                                                                                 |
| description                   | Yes       | string | The description of the payout                                                                                                                                                                                                                                                        |
| paymentDestination            | Yes       | string | This is the type of account you want to send your payments to, see [payment destinations](/docs/payment-destination) for more details                                                                                                                                                |
| customerReference             | No        | string | This is the unique reference generated for the transaction on your platform.                                                                                                                                                                                                         |
| quoteReference                | No        | string | This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint. |
| beneficiary                   | Yes       | object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                                                                                       |
| beneficiary.firstName         | No        | string | The first name of the beneficiary . This field is required for payments to individual beneficiaries.                                                                                                                                                                                 |
| beneficiary.lastName          | No        | string | The last name of the beneficiary . This field applies only to individual beneficiaries and it is optional                                                                                                                                                                            |
| beneficiary.phoneNumber     | No       | string | The mobile number of the beneficiary                                                                                                                                                                    |
| beneficiary.accountHolderName | Yes       | string | This field is required by all type of beneficiaries.                                                                                                                                                                                                                                 |
| beneficiary.accountNumber     | Yes       | string | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                                                                                          |
| beneficiary.mobileMoneyCode   | Yes       | string | This value is the mobile money wallet provider's code. You must use the [List bank endpoint](/reference/get-banks) to obtain this value.                                                                                                                                             |
| beneficiary.type              | Yes       | string | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                                                                                           |
| beneficiary.country           | No        | string | The country in which the beneficiary resides.                                                                                                                                                                                                                                        |
| beneficiary.email             | No        | string | The beneficiary's email                                                                                                                                                                                                                                                              |

The payload should like this :

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
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "mobileMoneyCode": "78988",
        "type": "individual",
        "email": "aa@aa.com",
    }
}
```

<br />
---
title: Bank Account Transfers
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
This section covers the parameters needed to process payments to bank accounts. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/payout-1). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. 

### Common Details

So first, let's go through the basic information needed for any kind of account. You'll need to provide these details. 

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "business",
    "0-1": "Yes",
    "0-2": "String",
    "0-3": "The ID of the business making the payout.",
    "1-0": "sourceCurrency",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The currency which is used to fund the payout",
    "2-0": "destinationCurrency",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "The currency in which the recipient will be receiving funds",
    "3-0": "amount",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "The value that is to be transferred from the source currency wallet.",
    "4-0": "description",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "A simple description of payment e.g \"From Daniella”",
    "5-0": "paymentDestination",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details.",
    "6-0": "customerReference",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advise that you add it to your payload",
    "7-0": "quoteReference",
    "7-1": "No",
    "7-2": "String",
    "7-3": "This is the reference generated when the source currency is compared against the destination currency.  \n  \nThis is required for cross-currency payouts. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)"
  },
  "cols": 4,
  "rows": 8,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

## NGN Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Nigeria. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | No        | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json Individual Beneficiary
{
    "business": "{{Your business ID}}",
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
```json Corporate Beneficiary
{
    "business": "{{Your business ID}}",
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
        "type": "corporate",
        "email": "aa@aa.com",
        "bankCode": "058"
    }
}
```

## GBP Pay-Outs

In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also required when sending money to a bank account in the United Kingdom.

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.accountHolderName | Yes       | String | This field is required by all types of beneficiaries.                                                                                                                                                         |
| beneficiary.accountNumber     | Yes       | String | This is the bank account number of the beneficiary.                                                                                                                                                           |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | Yes       | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.bankSwiftCode     | No        | String | The beneficiary's bank swift code according to [ISO9362](https://en.wikipedia.org/wiki/ISO_9362) . e.g UBSWCHZH80A                                                                                            |
| beneficiary.sortCode          | Yes       | String | The beneficiary's bank sort code. Sort codes are the domestic bank codes used to route money transfers between financial institutions in the United Kingdom, and in the Republic of Ireland. e.g 000000       |
| paymentScheme                 | Yes       | String | The [payment scheme](/docs/payment-scheme) is relevant to the destination currency and region.                                                                                                                |

The payload should look like this :

```json FPS
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
        "accountNumber": "GBXXCLJU04130780008933",
        "type": "individual",
        "email": "aa@aa.com",,
        "sortCode" : "000000"
    },
    "paymentScheme": "fps",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```
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
        "accountNumber": "GBXXCLJU04130780008933",
        "type": "individual",
        "email": "aa@aa.com",,
        "sortCode" : "000000",
        "bankSwiftCode" : "UBSWCHZH80A"
    },
    "paymentScheme": "chaps",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

## EUR Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also required when sending money to a bank account in the European Union.

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.accountHolderName | Yes       | String | This field is required by all types of beneficiaries.                                                                                                                                                         |
| beneficiary.accountNumber     | Yes       | String | This is the [IBAN](https://docs.fincra.com/docs/verify-iban-and-account-numbers#account-number-verification) of the beneficiary.                                                                              |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | Yes       | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | Yes       | String | The type of beneficiary, see beneficiary types for more details                                                                                                                                               |
| paymentScheme                 | Yes       | String | The [payment scheme](/docs/payment-scheme) relevant to the destination currency and region.                                                                                                                   |

The payload should look like this : 

```json SEPA
{
    "business": "{{The business ID}}",
    "sourceCurrency": "EUR",
    "destinationCurrency": "EUR",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "GBXXCLJU04130780008933",
        "type": "individual",
        "email": "aa@aa.com",
    },
    "paymentScheme": "sepa",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```
```json SEPA_INSTANT
{
    "business": "{{The business ID}}",
    "sourceCurrency": "EUR",
    "destinationCurrency": "EUR",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0803443433",
        "accountNumber": "GBXXCLJU04130780008933",
        "type": "individual",
        "email": "aa@aa.com",
    },
    "paymentScheme": "sepa",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

## USD Pay-Outs

In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also required when sending money to a bank account in the United States.

Also, we have catered for making bank transfers to Nigerian Banks for USD Domiciliary account payments.  
Kindly find attached supported bank list [here](/docs/supported-currencies#list-of-nigerian-banks-supported-for-usd-domiciliary-account-payment--for-payoutbank-transfer)

| Field                         | Mandatory | Type              | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| files                         | Yes       | String/file/array | A document explaining the reason for the payment. This can be a file upload or an accessible file URL.                                                                                                        |
| paymentScheme                 | Yes       | String            | The [payment scheme](/docs/payment-scheme)  relevant to the destination currency and region.                                                                                                                  |
| beneficiary                   | Yes       | Object            | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String            | The first name of the beneficiary                                                                                                                                                                             |
| beneficiary.lastName          | Yes       | String            | The last name of the beneficiary .                                                                                                                                                                            |
| beneficiary.phoneNumber       | No        | String            | The mobile number of the beneficiary                                                                                                                                                                          |
| beneficiary.accountHolderName | Yes       | String            | This is the bank account number of the beneficiary                                                                                                                                                            |
| beneficiary.accountNumber     | Yes       | String            | This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.                                                                                                   |
| beneficiary.type              | Yes       | String            | The type of beneficiary, see beneficiary types for more details                                                                                                                                               |
| beneficiary.country           | Yes       | String            | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String            | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankSwiftCode     | No        | String            | The bank swift code according to ISO9362 . These two letters indicate the country where the bank is located.e.g UBSWCHZH80A                                                                                   |

The payload should look like this :

```json USD Payouts
{
    "business": "{{The business ID}}",
    "sourceCurrency": "USD",
    "destinationCurrency": "USD",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "accountHolderName": "Hassan Sarz",
        "country": "NG",
        "phone": "0123456789",
        "accountNumber": "0123456789",
        "type": "corporate",
        "email": "aa@aa.com",
    },
    "paymentScheme": "swift",
    "files": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
    "customerName": "Hassan Sars",
}
```
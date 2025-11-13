---
title: Bank Account Transfers
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
This section covers the parameters needed to process payments to bank accounts. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-bank-transfer). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. 

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
    "7-3": "This is the reference generated when the source currency is compared against the destination currency.  \n  \nThis is required for cross-currency payouts. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)",
    "8-0": "**sender**",
    "8-1": "No",
    "8-2": "Object",
    "8-3": "The details of the customer initiating the payout. This is only required for FCY payouts and cross-border merchants/transactions.",
    "9-0": "sender.type",
    "9-1": "No",
    "9-2": "String",
    "9-3": "One of: `individual`, `corporate`",
    "10-0": "sender.name",
    "10-1": "No",
    "10-2": "String",
    "10-3": "The customer's full name. This name would show up in the transfer narration.",
    "11-0": "sender.email",
    "11-1": "No",
    "11-2": "String",
    "11-3": "The customer's email.",
    "12-0": "sender.idType",
    "12-1": "No",
    "12-2": "String",
    "12-3": "One of: `business_registration_number`, `passport`, `national_identification_number`, `drivers_license`",
    "13-0": "sender.idNumber",
    "13-1": "No",
    "13-2": "String",
    "13-3": "Identity number of selected identification type",
    "14-0": "sender.countryOfOrigin",
    "14-1": "No",
    "14-2": "String",
    "14-3": "Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).  \n  \nOnly required if sender.type is individual",
    "15-0": "sender.countryOfIncorporation",
    "15-1": "No",
    "15-2": "String",
    "15-3": "Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).  \n  \nOnly required if sender.type is corporate",
    "16-0": "sender.address",
    "16-1": "No",
    "16-2": "String",
    "16-3": "Full address of business or individual",
    "17-0": "sender.birthDate",
    "17-1": "No",
    "17-2": "String",
    "17-3": "Person's date of birth (for individual senders)"
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
    "amount": 5070,
    "beneficiary": {
        "accountHolderName": "Customer Name",
        "accountNumber": "17874878234",
        "bankCode": "044",
        // "country": "NG",
        "firstName": "Customer",
        "lastName": "Name",
        "type": "individual"
    },
    "business": "{{Your Business ID}}",
    "customerReference": "{{$randomUUID}}",
    "description": "Test",
    "destinationCurrency": "NGN",
    "paymentDestination": "bank_account",
    "sourceCurrency": "NGN",
    "sender":{
        "name":"Customer Name",
        "email":"customername@theirmail.com"
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
    "customerReference": "{{$randomUUID}}",
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

## ZMW Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Zambia. 

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

```json ZMW
{
    "business": "{{Your Business ID}}",
    "sourceCurrency": "ZMW",
    "destinationCurrency": "ZMW",
    "amount": "121",
    "paymentDestination": "bank_account",
    "customerReference": "{{$randomUUID}}",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "nycix@mailinator.com",
        "accountHolderName": "Tebogo Njoroge",
        "type": "individual",
        "country": "ZM",
        "accountNumber": "260961111111",
        "bankCode": "002"
    },
    "description": "Test",
    "sender": {
        "name": "Customer Name",
        "email":"customername@theirmail.com"
    }
}
```

## ZAR Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in South Africa. 

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

```json ZAR
{
  "sourceCurrency": "ZAR",
  "destinationCurrency": "ZAR",
  "amount": 10,
  "business": "{{Your Business ID}}",
  "description": "Payment",
  "customerReference": "54c80ef8928989",
  "beneficiary": {
    "firstName": "Customer",
    "lastName": "Name",
    "type": "individual",
    "accountHolderName": "Customer Name",
    "accountNumber": "63892389287",
    "bankCode": "250655",
    "country": "ZA",
    "bankSwiftCode": "FIRNZAJJ"
  },
  "paymentDestination": "bank_account"
}
```

## GHS Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Ghana. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | No        | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankSwiftCode     | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json GHS
{
    "business": "653faf6c5eeb80c89ef7dce4",
    "sourceCurrency": "GHS",
    "destinationCurrency": "GHS",
    "amount": "4.00",
    "paymentDestination": "bank_account",
    "customerReference": "22_01_2014_4_20PM",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "customer@theirmail.com",
        "accountHolderName": "Test TECHNOLOGIES LTD",
        "accountNumber": "1020820171412",
        "type": "individual",
        "country": "GH",
        "bankSwiftCode": "ABNGGHAC"
    },
    "description": "Payment for services"
}
```

## KES Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Kenya. 

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

```json KES
{
    "business": "615eb7015e137543357df000",
    "sourceCurrency": "KES",
    "destinationCurrency": "KES",
    "amount": "55.00",
    "paymentDestination": "bank_account",
    "customerReference": "a12FWEWffeeWWWdEdF322",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "nycix@mailinator.com",
        "accountHolderName": "Test TECHNOLOGIES LTD",
        "accountNumber": "1400005942049",
        "type": "corporate",
        "country": "KE",
        "bankCode": "ZEBLGHAC"
    },
    "description": "has"
}
```

## UGX Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Uganda. 

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

```json UGX
{
  "customerReference": "ABC123XYZ789",
  "sourceCurrency": "UGX",
  "destinationCurrency": "UGX",
  "customerName": "Test User",
  "amount": 10000,
  "paymentDestination": "bank_account",
  "beneficiary": {
    "firstName": "Demo Business Ltd",
    "accountHolderName": "Demo Business Ltd",
    "accountNumber": "1234567890",
    "type": "corporate",
    "country": "UG",
    "bankCode": "UBA",
    "bankName": "United Bank for Africa Uganda Limited",
    "bankSwiftCode": "UNAFUGKA",
    "lastName": null
  },
  "description": "Sample transaction description",
  "sender": {
    "name": "Test Sender",
    "address": "123 Sample Street, Kampala",
    "email": "test.sender@example.com",
    "phone": "+256700000000"
  },
  "business": "1234567890abcdef12345678"
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
| beneficiary.bankSwiftCode     | No        | String | The beneficiary's bank swift code according to [ISO9362](https://en.wikipedia.org/wiki/ISO_9362) . e.g UBSWCHZH80A. Only required for swift transfer.                                                         |
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
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
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
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
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
  "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
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
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
}
```

## USD Pay-Outs

In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also required when sending money to a bank account in the United States.

Also, we have catered for making bank transfers to Nigerian Banks for USD Domiciliary account payments.  
Kindly find attached supported bank list [here](/docs/supported-currencies#list-of-nigerian-banks-supported-for-usd-domiciliary-account-payment--for-payoutbank-transfer)

> ❗️ Note:
> 
> USD Payouts can only be made to USD domiciled banks

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "files",
    "0-1": "Yes",
    "0-2": "String/file/array",
    "0-3": "A document explaining the reason for the payment. This can be a file upload or an accessible file URL.",
    "1-0": "paymentScheme",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The [payment scheme](/docs/payment-scheme)  relevant to the destination currency and region.",
    "2-0": "**beneficiary**",
    "2-1": "Yes",
    "2-2": "Object",
    "2-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "3-0": "beneficiary.firstName",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "The first name of the beneficiary",
    "4-0": "beneficiary.lastName",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The last name of the beneficiary .",
    "5-0": "beneficiary.phoneNumber",
    "5-1": "No",
    "5-2": "String",
    "5-3": "The mobile number of the beneficiary",
    "6-0": "beneficiary.email",
    "6-1": "No",
    "6-2": "String",
    "6-3": "The beneficiary's email",
    "7-0": "beneficiary.accountHolderName",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "This is the bank account number of the beneficiary",
    "8-0": "beneficiary.accountNumber",
    "8-1": "Yes",
    "8-2": "String",
    "8-3": "This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.",
    "9-0": "beneficiary.type",
    "9-1": "Yes",
    "9-2": "String",
    "9-3": "The type of beneficiary, see beneficiary types for more details",
    "10-0": "beneficiary.country",
    "10-1": "Yes",
    "10-2": "String",
    "10-3": "The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB",
    "11-0": "**beneficiary.address**",
    "11-1": "Yes",
    "11-2": "Object",
    "11-3": "This is only required for swift payments",
    "12-0": "beneficiary.address.street",
    "12-1": "Yes",
    "12-2": "String",
    "12-3": "",
    "13-0": "beneficiary.address.state",
    "13-1": "Yes",
    "13-2": "String",
    "13-3": "",
    "14-0": "beneficiary.address.city",
    "14-1": "Yes",
    "14-2": "String",
    "14-3": "",
    "15-0": "beneficiary.address.zip",
    "15-1": "Yes",
    "15-2": "String",
    "15-3": "",
    "16-0": "beneficiary.address.country",
    "16-1": "Yes",
    "16-2": "String",
    "16-3": "The country in which the bank of the beneficiary is located. This field should be according to [ISO 3166-1 alpha-2](https://www.nationsonline.org/oneworld/country_code_list.htm) codes standards e.g NG, GB",
    "17-0": "**beneficiary.bankName**",
    "17-1": "Yes",
    "17-2": "String",
    "17-3": "The name of the beneficiary bank.",
    "18-0": "beneficiary.bankCode",
    "18-1": "Yes",
    "18-2": "String",
    "18-3": "This",
    "19-0": "beneficiary.bankSwiftCode",
    "19-1": "No",
    "19-2": "String",
    "19-3": "The bank swift code according to ISO9362 . These two letters indicate the country where the bank is located.e.g UBSWCHZH80A.  \n  \nOnly required for swift transfer.",
    "20-0": "**beneficiary.bankAddress**",
    "20-1": "Yes",
    "20-2": "Object",
    "20-3": "Only required for Swift and Fedwire transfers.",
    "21-0": "beneficiary.bankAddress.street",
    "21-1": "Yes",
    "21-2": "String",
    "21-3": "",
    "22-0": "beneficiary.bankAddress.state",
    "22-1": "Yes",
    "22-2": "String",
    "22-3": "",
    "23-0": "beneficiary.bankAddress.city",
    "23-1": "Yes",
    "23-2": "String",
    "23-3": "",
    "24-0": "beneficiary.bankAddress.zip",
    "24-1": "Yes",
    "24-2": "String",
    "24-3": "",
    "25-0": "beneficiary.bankAddress.country",
    "25-1": "Yes",
    "25-2": "String",
    "25-3": "The country in which the bank of the beneficiary is located. This field should be according to [ISO 3166-1 alpha-2](https://www.nationsonline.org/oneworld/country_code_list.htm)  codes standards e.g NG, GB"
  },
  "cols": 4,
  "rows": 26,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


The payload should look like this :

```json USD (Swift)
{
    "customerReference": "{{Your Transaction Reference}}",
    "sourceCurrency": "USD",
    "destinationCurrency": "USD",
    "customerName": "John Doe",
    "amount": 1000,
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "John",
        "email": "johndoe@gmail.com",
        "address": {
            "street": "123 Main Street",
            "state": "California",
            "city": "Los Angeles",
            "zip": "90001",
            "country": "US"
        },
        "accountHolderName": "John Doe",
        "accountNumber": "9876543210",
        "type": "individual",
        "country": "US",
        "bankName": "Bank of America",
        "bankSwiftCode": "026009593",
        "bankAddress": {
            "street": "100 N Tryon St",
            "state": "North Carolina",
            "city": "Charlotte",
            "zip": "28202",
            "country": "US"
        }
    },
    "files": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
    "paymentScheme": "swift",
    "description": "description",
    "business": "{{Your Business ID}}",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
}

```
```json USD (ACH)
{
    "customerReference": "{{Your Transaction Reference}}",
    "sourceCurrency": "USD",
    "destinationCurrency": "USD",
    "customerName": "John Doe",
    "amount": 1000,
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "John",
        "email": "johndoe@gmail.com",
        "address": {
            "street": "123 Main Street",
            "state": "California",
            "city": "Los Angeles",
            "zip": "90001",
            "country": "US"
        },
        "accountHolderName": "John Doe",
        "accountNumber": "9876543210",
        "type": "individual",
        "country": "US",
        "bankName": "Bank of America",
        "bankCode": "026009593"
    },
    "files": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
    "paymentScheme": "ach",
    "description": "description",
    "business": "{{Your Business ID}}",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
}

```
```json USD (Fedwire)
{
    "customerReference": "{{Your Transaction Reference}}",
    "sourceCurrency": "USD",
    "destinationCurrency": "USD",
    "customerName": "John Doe",
    "amount": 1000,
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "John",
        "email": "johndoe@gmail.com",
        "address": {
            "street": "123 Main Street",
            "state": "California",
            "city": "Los Angeles",
            "zip": "90001",
            "country": "US"
        },
        "accountHolderName": "John Doe",
        "accountNumber": "9876543210",
        "type": "individual",
        "country": "US",
        "bankName": "Bank of America",
        "bankCode": "026009593",
        "bankAddress": {
            "street": "100 N Tryon St",
            "state": "North Carolina",
            "city": "Charlotte",
            "zip": "28202",
            "country": "US"
        }
    },
    "files": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
    "paymentScheme": "fed_wire",
    "description": "description",
    "business": "{{Your Business ID}}",
 "sender": {
        "senderType": "business",
        "name": "Example Corp",
        "email": "business@example.com",
        "idType": "business_registration_number",
        "idNumber": "XXXXXX",
        "countryOfOrigin": "XX",
        "address": {
          "street": "Sample Street",
          "state": "Sample State",
          "city": "Sample City",
          "zip": "000000",
          "country": "XX"
        },
        "proofOfAddress": "https://fastly.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8",
        "websiteAddress": "https://website.com/",
        "birthDate": "01/02/1993",
        "employmentStatus": "employed"
    }
}

```
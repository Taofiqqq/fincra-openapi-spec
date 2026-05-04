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

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>

      <th style={{ textAlign: "left" }}>
        Mandatory
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        business
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the business making the payout.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sourceCurrency
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The currency which is used to fund the payout
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        destinationCurrency
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The currency in which the recipient will be receiving funds
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        amount
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The value that is to be transferred from the source currency wallet.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        description
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        A simple description of payment e.g "From Daniella”
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        paymentDestination
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customerReference
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advise that you add it to your payload
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        quoteReference
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is the reference generated when the source currency is compared against the destination currency.

        This is required for cross-currency payouts. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **sender**
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        The details of the customer initiating the payout. This is only required for FCY payouts and cross-border merchants/transactions.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.type
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        One of: `individual`, `corporate`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.name
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The customer's full name. This name would show up in the transfer narration.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.email
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The customer's email.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.idType
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        One of: `business_registration_number`, `passport`, `national_identification_number`, `drivers_license`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.idNumber
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Identity number of selected identification type
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.countryOfOrigin
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).

        Only required if sender.type is individual
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.countryOfIncorporation
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).

        Only required if sender.type is corporate
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Full address of business or individual
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.birthDate
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Person's date of birth (for individual senders)
      </td>
    </tr>
  </tbody>
</Table>

## NGN Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Nigeria. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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

## EGP Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Egypt. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | No        | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json EGP
{
  "business": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "sourceCurrency": "EGP",
  "destinationCurrency": "EGP",
  "amount": 100,
  "description": "Payment for services",
  "paymentDestination": "bank_account",
  "customerReference": "ref-12345678-xxxx-xxxx-xxxx-1234567890ab",
  "beneficiary": {
    "accountHolderName": "John Doe",
    "accountNumber": "1000******97",
    "type": "individual",
    "firstName": "John",
    "lastName": "Doe",
    "bankCode": "0000"
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
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
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

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Mandatory
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        files
      </td>

      <td>
        Yes
      </td>

      <td>
        String/file/array
      </td>

      <td>
        A document explaining the reason for the payment. This can be a file upload or an accessible file URL.
      </td>
    </tr>

    <tr>
      <td>
        paymentScheme
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The [payment scheme](/docs/payment-scheme)  relevant to the destination currency and region.
      </td>
    </tr>

    <tr>
      <td>
        **beneficiary**
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.firstName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The first name of the beneficiary
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.lastName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The last name of the beneficiary .
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.phoneNumber
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The mobile number of the beneficiary
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.email
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The beneficiary's email
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.accountHolderName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This is the bank account number of the beneficiary
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.accountNumber
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.type
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The type of beneficiary, see beneficiary types for more details
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.country
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB
      </td>
    </tr>

    <tr>
      <td>
        **beneficiary.address**
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        This is only required for swift payments
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.address.street
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.address.state
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.address.city
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.address.zip
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.address.country
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the bank of the beneficiary is located. This field should be according to [ISO 3166-1 alpha-2](https://www.nationsonline.org/oneworld/country_code_list.htm) codes standards e.g NG, GB
      </td>
    </tr>

    <tr>
      <td>
        **beneficiary.bankName**
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The name of the beneficiary bank.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankCode
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankSwiftCode
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The bank swift code according to ISO9362 . These two letters indicate the country where the bank is located.e.g UBSWCHZH80A.

        Only required for swift transfer.
      </td>
    </tr>

    <tr>
      <td>
        **beneficiary.bankAddress**
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        Only required for Swift and Fedwire transfers.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankAddress.street
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankAddress.state
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankAddress.city
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankAddress.zip
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankAddress.country
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the bank of the beneficiary is located. This field should be according to [ISO 3166-1 alpha-2](https://www.nationsonline.org/oneworld/country_code_list.htm)  codes standards e.g NG, GB
      </td>
    </tr>
  </tbody>
</Table>

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

<br />

## TZS Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in Tanzania. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | Yes       | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json TZS
{
  "customerReference": "ABC123XYZ789",
  "sourceCurrency": "TZS",
  "destinationCurrency": "TZS",
  "customerName": "Test User",
  "amount": 10000,
  "paymentDestination": "bank_account",
  "beneficiary": {
    "firstName": "Demo Business Ltd",
    "accountHolderName": "Demo Business Ltd",
    "accountNumber": "12345678901",
    "type": "corporate",
    "country": "TZ",
    "bankCode": "UBA",
    "bankName": "Bank of Tanzania",
    "bankSwiftCode": "TANZTZTX",
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

<br />

## XAF Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in CEMAC regions. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | Yes       | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json XAF
{
  "customerReference": "ABC123XYZ789",
  "sourceCurrency": "XAF",
  "destinationCurrency": "XAF",
  "customerName": "Test User",
  "amount": 10000,
  "paymentDestination": "bank_account",
  "beneficiary": {
    "firstName": "Demo Business Ltd",
    "accountHolderName": "Demo Business Ltd",
    "accountNumber": "1234567890",
    "type": "corporate",
    "country": "CM",
    "bankCode": "80007125",
    "bankName": "BGFIBANK CAMEROUN SA",
    "bankSwiftCode": "BGFICMCX",
    "lastName": null
  },
  "description": "Sample transaction description",
  "sender": {
    "name": "Test Sender",
    "address": "123 Sample Street, Kampala",
    "email": "test.sender@example.com",
    "phone": "+225700000000"
  },
  "business": "1234567890abcdef12345678"
}
```

<br />

<br />

## XOF Pay-Outs

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a bank account in UEMOA/WAEMU regions. 

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | Yes       | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.                                                                            |

The payload should look like this :

```json XOF
{
  "customerReference": "ABC123XYZ789",
  "sourceCurrency": "XOF",
  "destinationCurrency": "XOF",
  "customerName": "Test User",
  "amount": 10000,
  "paymentDestination": "bank_account",
  "beneficiary": {
    "firstName": "Demo Business Ltd",
    "accountHolderName": "Demo Business Ltd",
    "accountNumber": "1234567890",
    "type": "corporate",
    "country": "CI",
    "bankCode": "13505183",
    "bankName": "GT Bank Cote d Ivoire",
    "bankSwiftCode": "GTBICIABXXX",
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

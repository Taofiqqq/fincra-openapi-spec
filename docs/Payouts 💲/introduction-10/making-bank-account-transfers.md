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
This section covers the parameters needed to process payments to bank accounts. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/payout-1). Depending on the type of beneficiary and the account's currency, however, you might need to give some extra information. 

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
        This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details
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
        This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customerReference
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is the unique reference generated for the transaction on your platform.
      </td>
    </tr>
  </tbody>
</Table>

## NGN payouts

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also needed when sending money to a bank account in Nigeria. 

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
        beneficiary
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
        The first name of the beneficiary .
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
        The last name of the beneficiary
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
        This field is required by all type of beneficiaries.
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
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.country
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the beneficiary resides.
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
        beneficiary.bankCode
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.
      </td>
    </tr>
  </tbody>
</Table>

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

## GBP payouts

In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the United Kingdom.

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
        quoteReference
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary
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
        beneficiary.accountHolderName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This field is required by all types of beneficiaries.
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
        This is the bank account number of the beneficiary.
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
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details
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
        The country in which the beneficiary resides.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.email
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details
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
        The beneficiary's bank swift code according to [ISO9362](https://en.wikipedia.org/wiki/ISO_9362) . e.g UBSWCHZH80A
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.sortCode
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The beneficiary's bank sort code. Sort codes are the domestic bank codes used to route money transfers between financial institutions in the United Kingdom, and in the Republic of Ireland. e.g 000000
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
        The [payment scheme](/docs/payment-scheme) is relevant to the destination currency and region.
      </td>
    </tr>
  </tbody>
</Table>

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
        "accountNumber": "0124775489",
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
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",,
        "sortCode" : "000000",
        "bankSwiftCode" : "UBSWCHZH80A"
    },
    "paymentScheme": "chaps",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

## EUR Payouts

In addition to the [common details ](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the European Union.

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
        beneficiary
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
        beneficiary.accountHolderName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This field is required by all types of beneficiaries.
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
        This is the [IBAN](https://docs.fincra.com/docs/verify-iban-and-account-numbers#account-number-verification) of the beneficiary.
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
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details
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
        The country in which the beneficiary resides.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.email
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
        paymentScheme
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The [payment scheme](/docs/payment-scheme) relevant to the destination currency and region.
      </td>
    </tr>
  </tbody>
</Table>

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
        "accountNumber": "0124775489",
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
        "accountNumber": "0124775489",
        "type": "individual",
        "email": "aa@aa.com",
    },
    "paymentScheme": "sepa",
    "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```

## USD Payouts

In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the United States.

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
        No
      </td>

      <td>
        String/file/array
      </td>

      <td>
        A document explaining the reason for the payment. This can be a file upload or
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
        beneficiary
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
        No
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the beneficiary resides.
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
        beneficiary.bankSwiftCode
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The bank swift code according to ISO9362 . These two letters indicate the country where the bank is located.e.g UBSWCHZH80A
      </td>
    </tr>
  </tbody>
</Table>

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
    "files": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg",
    "customerName": "Hassan Sars",
}
```

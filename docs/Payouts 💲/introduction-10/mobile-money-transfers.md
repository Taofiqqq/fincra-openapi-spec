---
title: Mobile Money Transfers
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
This section covers the parameters needed to process payments to mobile money wallets. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/payout-1). Depending on the type of beneficiary and the account's currency, however, you might need to give some extra information. 

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

## GHS,KES payouts

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also needed when sending money to a mobile money wallet in  Ghana and Kenya.

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
        beneficiary.mobileMoneyCode
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This value is the mobile money wallet provider's code. You must use the [List bank endpoint](/reference/get-banks) to obtain this value.
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

```json KES
{
    "business": "{{The business ID}}",
    "sourceCurrency": "KES",
    "destinationCurrency": "KES",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "mobile_money_wallet",
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
    "sourceCurrency": "GHS",
    "destinationCurrency": "GHS",
    "amount": "1000",
    "description": "i want to pay my vendor",
    "paymentDestination": "mobile_money_wallet",
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

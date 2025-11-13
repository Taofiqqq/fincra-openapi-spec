---
title: Mobile Money Payouts
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
This section covers the parameters needed to process payments to mobile money wallets. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/payout-1). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. 

To view all currencies supported for mobile money transfers, please view the [supported currencies page](/docs/supported-currencies) 

### Common Details

So first, let's go through the basic information needed for any account. You'll need to provide these details. 

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
        business
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The ID of the business making the payout.
      </td>
    </tr>

    <tr>
      <td>
        sourceCurrency
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The currency which is used to fund the payout
      </td>
    </tr>

    <tr>
      <td>
        destinationCurrency
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The currency in which the recipient will be receiving funds
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The value that is to be transferred from the source currency wallet.  

        Note: Decimals are not allowed as 'amount', for mobile money payouts with mobileMoneyCode:"AIRTEL".
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details
      </td>
    </tr>

    <tr>
      <td>
        paymentDestination
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The value should be sent as mobile\_money\_wallet
      </td>
    </tr>

    <tr>
      <td>
        customerReference
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advice that you add it to your payload
      </td>
    </tr>

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
        This is the reference generated when the source currency is compared against the destination currency.  

        This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)
      </td>
    </tr>
  </tbody>
</Table>

In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a mobile money wallet.

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
        The first name of the beneficiary.
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
        beneficiary.phone
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number
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
        The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number
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
        The country in which the bank of the beneficiary is located. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB
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

        Note: When mobileMoneyCode is "AIRTEL", the 'amount' field must be a whole number, not a decimal.
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
    "description": "I want to pay my vendor",
    "paymentDestination": "mobile_money_wallet",
    "customerReference": "b67vfv",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "KE",
        "phone": "2548034567898",
        "mobileMoneyCode": "SAFARICOM",
        "accountNumber": "2548034567898",
        "type": "individual",
        "email": "aa@aa.com"
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
    "customerReference": "b67vfv",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "GH",
        "phone": "2330803443433",
        "mobileMoneyCode": "AIRTEL",
        "accountNumber": "2330803443433",
        "type": "individual",
        "email": "aa@aa.com"
    }
}
```
```json UGX
{
    "business": "{{The business ID}}",
    "sourceCurrency": "UGX",
    "destinationCurrency": "UGX",
    "amount": "1000",
    "description": "I want to pay my vendor",
    "paymentDestination": "mobile_money_wallet",
    "customerReference": "b67vfv",
    "quoteReference": "1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary": {
        "firstName": "Hassan",
        "lastName": "Sarz",
        "accountHolderName": "Hassan Sarz",
        "country": "KE",
        "phone": "2548034567898",
        "mobileMoneyCode": "SAFARICOM",
        "accountNumber": "2548034567898",
        "type": "individual",
        "email": "aa@aa.com"
    }
}
```

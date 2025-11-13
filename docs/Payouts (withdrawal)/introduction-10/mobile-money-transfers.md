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
    "3-3": "The value that is to be transferred from the source currency wallet.  \n  \nNote: Decimals are not allowed as 'amount', for mobile money payouts with mobileMoneyCode:\"AIRTEL\".",
    "4-0": "description",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details",
    "5-0": "paymentDestination",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "The value should be sent as mobile_money_wallet",
    "6-0": "customerReference",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advice that you add it to your payload",
    "7-0": "quoteReference",
    "7-1": "No",
    "7-2": "String",
    "7-3": "This is the reference generated when the source currency is compared against the destination currency.  \n  \nThis is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)"
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


In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also required when sending money to a mobile money wallet.

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "beneficiary",
    "0-1": "Yes",
    "0-2": "Object",
    "0-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "1-0": "beneficiary.firstName",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The first name of the beneficiary.",
    "2-0": "beneficiary.lastName",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "The last name of the beneficiary",
    "3-0": "beneficiary.phone",
    "3-1": "No",
    "3-2": "String",
    "3-3": "The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number",
    "4-0": "beneficiary.accountHolderName",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "This field is required by all types of beneficiaries.",
    "5-0": "beneficiary.accountNumber",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number",
    "6-0": "beneficiary.type",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "7-0": "beneficiary.country",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "The country in which the bank of the beneficiary is located. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB",
    "8-0": "beneficiary.email",
    "8-1": "No",
    "8-2": "String",
    "8-3": "The beneficiary's email",
    "9-0": "beneficiary.mobileMoneyCode",
    "9-1": "Yes",
    "9-2": "String",
    "9-3": "This value is the mobile money wallet provider's code. You must use the [List bank endpoint](/reference/get-banks) to obtain this value.  \n  \nNote: When mobileMoneyCode is \"AIRTEL\", the 'amount' field must be a whole number, not a decimal."
  },
  "cols": 4,
  "rows": 10,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


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
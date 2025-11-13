---
title: Mobile Money Payouts
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
This section covers the parameters needed to process payments to mobile money wallets. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-mobile-money-payout). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. 

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
    "3-3": "The value that is to be transferred from the source currency wallet.  \n  \nNote: Decimals are not allowed as 'amount', for UGX payouts",
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
    "9-3": "This value is the mobile money wallet provider's code. You must use the [List bank endpoint](/reference/get-banks) to obtain this value.  \n  \nNote: When mobileMoneyCode is \"AIRTEL\", the 'amount' field must be a whole number, not a decimal.",
    "10-0": "**sender**",
    "10-1": "**No**",
    "10-2": "**Object**",
    "10-3": "The details of the customer initiating the payout. This is required only for cross-border merchants/transactions.",
    "11-0": "sender.type",
    "11-1": "No",
    "11-2": "String",
    "11-3": "One of: `individual`, `corporate`",
    "12-0": "sender.name",
    "12-1": "No",
    "12-2": "String",
    "12-3": "The customer's full name. This name would show up in the transfer narration.",
    "13-0": "sender.email",
    "13-1": "No",
    "13-2": "String",
    "13-3": "The customer's email.",
    "14-0": "sender.idType",
    "14-1": "No",
    "14-2": "String",
    "14-3": "One of: `business_registration_number`, `passport`, `national_identification_number`, `drivers_license`",
    "15-0": "sender.idNumber",
    "15-1": "No",
    "15-2": "String",
    "15-3": "Identity number of selected identification type",
    "16-0": "sender.countryOfOrigin",
    "16-1": "No",
    "16-2": "String",
    "16-3": "Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).  \n  \nOnly required if sender.type is individual",
    "17-0": "sender.countryOfIncorporation",
    "17-1": "No",
    "17-2": "String",
    "17-3": "Country code in ISO 3166-alpha2 format (e.g., NG, US, GB).  \n  \nOnly required if sender.type is corporate",
    "18-0": "sender.address",
    "18-1": "No",
    "18-2": "String",
    "18-3": "Full address of business or individual",
    "19-0": "sender.birthDate",
    "19-1": "No",
    "19-2": "String",
    "19-3": "Person's date of birth (for individual senders)",
    "20-0": "sender.nationality",
    "20-1": "No",
    "20-2": "String",
    "20-3": "The senders nationality"
  },
  "cols": 4,
  "rows": 21,
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
   "business":"{{The business ID}}",
   "sourceCurrency":"KES",
   "destinationCurrency":"KES",
   "amount":"1000",
   "description":"I want to pay my vendor",
   "paymentDestination":"mobile_money_wallet",
   "customerReference":"b67vfv",
   "quoteReference":"1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
   "beneficiary":{
      "firstName":"Hassan",
      "lastName":"Sarz",
      "accountHolderName":"Hassan Sarz",
      "country":"KE",
      "phone":"2548034567898",
      "mobileMoneyCode":"SAFARICOM",
      "accountNumber":"2548034567898",
      "type":"individual",
      "email":"aa@aa.com"
   },
   "sender":{
      "name":"Customer Name",
      "phone":"2548034567898",
      "address":"Customer full address"
   }
}
```
```json GHS
{
    "business":"{{The business ID}}",
    "sourceCurrency":"GHS",
    "destinationCurrency":"GHS",
    "amount":"1000",
    "description":"i want to pay my vendor",
    "paymentDestination":"mobile_money_wallet",
    "customerReference":"b67vfv",
    "quoteReference":"1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
    "beneficiary":{
        "firstName":"Hassan",
        "lastName":"Sarz",
        "accountHolderName":"Hassan Sarz",
        "country":"GH",
        "phone":"2330803443433",
        "mobileMoneyCode":"AIRTEL",
        "accountNumber":"2330803443433",
        "type":"individual",
        "email":"aa@aa.com"
    },
    "sender":{
      "name":"Customer Name",
      "phone":"2548034567898",
      "address":"Customer full address"
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
        "country": "UG",
        "phone": "2567734567898",
        "mobileMoneyCode": "SAFARICOM",
        "accountNumber": "2567734567898",
        "type": "individual",
        "email": "aa@aa.com"
    },
    "sender":{
      "name":"Customer Name",
      "phone":"2567734567898",
      "address":"Customer full address"
   }
}
```
```json ZMW
{
    "business": "{{The business ID}}",
    "sourceCurrency": "ZMW",
    "destinationCurrency": "ZMW",
    "amount": "10",
    "paymentDestination": "mobile_money_wallet",
    "customerName": "Test Fincra",
    "customerReference": "02_11_2024_26_39PM",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "chukwuemeka@fincra.com",
        "accountHolderName": "Test TECHNOLOGIES LTD",
        "accountNumber": "0961111111",
        "type": "individual",
        "country": "ZM",
        "mobileMoneyCode": "MTN"
    },
    "files": {},
    "description": "I want to pay my vendor"
}
```
```Text TZS
{
   "business":"{{The business ID}}",
   "sourceCurrency":"TZS",
   "destinationCurrency":"TZS",
   "amount":"1000",
   "description":"I want to pay my vendor",
   "paymentDestination":"mobile_money_wallet",
   "customerReference":"b67vfv",
   "quoteReference":"1330bd3c-1e09-4c1c-887f-7f1d72ff905e",
   "beneficiary":{
      "firstName":"Hassan",
      "lastName":"Sarz",
      "accountHolderName":"Hassan Sarz",
      "country":"TZ",
      "phone":"255789292000",
      "mobileMoneyCode":"SAFARICOM",
      "accountNumber":"2548034567898",
      "type":"individual",
      "email":"aa@aa.com"
   },
   "sender":{
      "name":"Customer Name",
      "phone":"255717292000",
      "address":"Customer full address"
   }
}
```
```json XOF
{
    "business": "{{The business ID}}",
    "sourceCurrency": "XOF",
    "destinationCurrency": "XOF",
    "amount": "10",
    "paymentDestination": "mobile_money_wallet",
    "customerName": "Test Fincra",
    "customerReference": "02_11_2024_26_39PM",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "chukwuemeka@fincra.com",
        "accountHolderName": "Test TECHNOLOGIES LTD",
        "accountNumber": "0961111111",
        "type": "individual",
        "country": "BN",
        "mobileMoneyCode": "MTN"
    },
    "files": {},
    "description": "I want to pay my vendor"
}
```
```json XAF
{
    "business": "{{The business ID}}",
    "sourceCurrency": "XAF",
    "destinationCurrency": "XAF",
    "amount": "10",
    "paymentDestination": "mobile_money_wallet",
    "customerName": "Test Fincra",
    "customerReference": "02_11_2024_26_39PM",
    "beneficiary": {
        "firstName": "Test",
        "lastName": "Technologies",
        "email": "chukwuemeka@fincra.com",
        "accountHolderName": "Test TECHNOLOGIES LTD",
        "accountNumber": "0961111111",
        "type": "individual",
        "country": "CM",
        "mobileMoneyCode": "MTN"
    },
    "files": {},
    "description": "I want to pay my vendor"
}
```

> ❗️ Note
> 
> When paying out to UGX, amount must be a whole number
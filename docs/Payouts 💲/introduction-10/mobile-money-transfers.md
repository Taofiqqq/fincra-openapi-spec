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

###Common Details
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
    "4-3": "This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details",
    "4-2": "String",
    "5-0": "paymentDestination",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details",
    "6-0": "customerReference",
    "6-1": "No",
    "6-2": "String",
    "6-3": "This is the unique reference generated for the transaction on your platform."
  },
  "cols": 4,
  "rows": 7
}
[/block]
##GHS,KES payouts
In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also needed when sending money to a mobile money wallet in  Ghana and Kenya.
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
    "1-3": "The first name of the beneficiary .",
    "2-0": "beneficiary.lastName",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "The last name of the beneficiary",
    "3-0": "beneficiary.accountHolderName",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "This field is required by all type of beneficiaries.",
    "4-0": "beneficiary.type",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "5-0": "beneficiary.country",
    "5-1": "No",
    "5-2": "String",
    "5-3": "The country in which the beneficiary resides.",
    "6-0": "beneficiary.email",
    "8-0": "beneficiary.bankCode",
    "6-1": "No",
    "8-1": "Yes",
    "6-2": "String",
    "8-2": "String",
    "6-3": "The beneficiary's email",
    "8-3": "The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details.",
    "7-0": "beneficiary.mobileMoneyCode",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "This value is the mobile money wallet provider's code. You must use the [List bank endpoint](/reference/get-banks) to obtain this value."
  },
  "cols": 4,
  "rows": 9
}
[/block]
The payload should look like this :
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"KES\",\n    \"destinationCurrency\": \"KES\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"mobile_money_wallet\",\n    \"quoteReference\": \"1330bd3c-1e09-4c1c-887f-7f1d72ff905e\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",\n        \"bankCode\": \"058\"\n    }\n}",
      "language": "json",
      "name": "KES"
    },
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"GHS\",\n    \"destinationCurrency\": \"GHS\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"mobile_money_wallet\",\n    \"quoteReference\": \"1330bd3c-1e09-4c1c-887f-7f1d72ff905e\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",\n        \"bankCode\": \"058\"\n    }\n}",
      "language": "json",
      "name": "GHS"
    }
  ]
}
[/block]
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
##NGN payouts
In addition to the [common details ](/docs/bank-account-transfers#common-details)needed to process successful payments, the following fields are also needed when sending money to a bank account in Nigeria. 
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
    "7-0": "beneficiary.bankCode",
    "6-1": "No",
    "7-1": "Yes",
    "6-2": "String",
    "7-2": "String",
    "6-3": "The beneficiary's email",
    "7-3": "The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks) codes for more details."
  },
  "cols": 4,
  "rows": 8
}
[/block]
The payload should look like this :
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"business\": \"{{Your business ID}}\",\n    \"sourceCurrency\": \"NGN\",\n    \"destinationCurrency\": \"NGN\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"quoteReference\": \"1330bd3c-1e09-4c1c-887f-7f1d72ff905e\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",\n        \"bankCode\": \"058\"\n    }\n}",
      "language": "json",
      "name": "Individual Beneficiary"
    },
    {
      "code": "{\n    \"business\": \"{{Your business ID}}\",\n    \"sourceCurrency\": \"NGN\",\n    \"destinationCurrency\": \"NGN\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"quoteReference\": \"1330bd3c-1e09-4c1c-887f-7f1d72ff905e\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"corporate\",\n        \"email\": \"aa@aa.com\",\n        \"bankCode\": \"058\"\n    }\n}",
      "language": "json",
      "name": "Corporate Beneficiary"
    }
  ]
}
[/block]

##GBP payouts
In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the United Kingdom.
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "quoteReference",
    "0-1": "No",
    "0-2": "String",
    "0-3": "This is the reference generated when the source currency is compared against the destination currency. This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote](/reference/get-a-quote)  endpoint.",
    "1-0": "beneficiary",
    "1-1": "Yes",
    "1-2": "Object",
    "1-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "2-0": "beneficiary.accountHolderName",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "This field is required by all types of beneficiaries.",
    "4-0": "beneficiary.type",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "5-0": "beneficiary.country",
    "5-1": "Yes",
    "5-3": "The country in which the beneficiary resides.",
    "5-2": "String",
    "6-0": "beneficiary.email",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "7-0": "beneficiary.bankSwiftCode",
    "7-1": "No",
    "7-2": "String",
    "7-3": "The beneficiary's bank swift code according to [ISO9362](https://en.wikipedia.org/wiki/ISO_9362) . e.g UBSWCHZH80A",
    "8-0": "beneficiary.sortCode",
    "8-1": "Yes",
    "8-2": "String",
    "8-3": "The beneficiary's bank sort code. Sort codes are the domestic bank codes used to route money transfers between financial institutions in the United Kingdom, and in the Republic of Ireland. e.g 000000",
    "9-0": "paymentScheme",
    "9-1": "Yes",
    "9-2": "String",
    "9-3": "The [payment scheme](/docs/payment-scheme) is relevant to the destination currency and region.",
    "3-0": "beneficiary.accountNumber",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "This is the bank account number of the beneficiary."
  },
  "cols": 4,
  "rows": 10
}
[/block]
The payload should look like this :
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"GBP\",\n    \"destinationCurrency\": \"GBP\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",,\n        \"sortCode\" : \"000000\"\n    },\n    \"paymentScheme\": \"fps\",\n    \"quoteReference\": \"d187b2fa-27cd-43e6-b622-66361e409c6d\"\n}",
      "language": "json",
      "name": "FPS"
    },
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"GBP\",\n    \"destinationCurrency\": \"GBP\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",,\n        \"sortCode\" : \"000000\",\n        \"bankSwiftCode\" : \"UBSWCHZH80A\"\n    },\n    \"paymentScheme\": \"chaps\",\n    \"quoteReference\": \"d187b2fa-27cd-43e6-b622-66361e409c6d\"\n}\n",
      "language": "json",
      "name": "CHAPS"
    }
  ]
}
[/block]
##EUR Payouts
In addition to the [common details ](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the European Union.
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
    "1-0": "beneficiary.accountHolderName",
    "2-0": "beneficiary.accountNumber",
    "3-0": "beneficiary.type",
    "4-0": "beneficiary.country",
    "5-0": "beneficiary.email",
    "6-0": "paymentScheme",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "This field is required by all types of beneficiaries.",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "This is the [IBAN](https://docs.fincra.com/docs/verify-iban-and-account-numbers#account-number-verification) of the beneficiary.",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The country in which the beneficiary resides.",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "The type of beneficiary, see beneficiary types for more details",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The [payment scheme](/docs/payment-scheme) relevant to the destination currency and region."
  },
  "cols": 4,
  "rows": 7
}
[/block]
The payload should look like this : 
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"EUR\",\n    \"destinationCurrency\": \"EUR\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",\n    },\n    \"paymentScheme\": \"sepa\",\n    \"quoteReference\": \"d187b2fa-27cd-43e6-b622-66361e409c6d\"\n}",
      "language": "json",
      "name": "SEPA"
    },
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"EUR\",\n    \"destinationCurrency\": \"EUR\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"beneficiary\": {\n        \"firstName\": \"Hassan\",\n        \"lastName\": \"Sarz\",\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0803443433\",\n        \"accountNumber\": \"0124775489\",\n        \"type\": \"individual\",\n        \"email\": \"aa@aa.com\",\n    },\n    \"paymentScheme\": \"sepa\",\n    \"quoteReference\": \"d187b2fa-27cd-43e6-b622-66361e409c6d\"\n}",
      "language": "json",
      "name": "SEPA_INSTANT"
    }
  ]
}
[/block]
##USD Payouts
In addition to the [common details](/docs/bank-account-transfers#common-details) needed to process a successful payment, the following fields are also needed when sending money to a bank account in the United States.
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "files",
    "0-1": "No",
    "0-2": "String/file/array",
    "0-3": "A document explaining the reason for the payment. This can be a file upload or",
    "2-0": "beneficiary",
    "2-1": "Yes",
    "2-2": "Object",
    "2-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "3-0": "beneficiary.firstName",
    "4-0": "beneficiary.lastName",
    "5-0": "beneficiary.phoneNumber",
    "6-0": "beneficiary.accountHolderName",
    "7-0": "beneficiary.accountNumber",
    "8-0": "beneficiary.type",
    "9-0": "beneficiary.country",
    "10-0": "beneficiary.email",
    "11-0": "beneficiary.bankSwiftCode",
    "3-3": "The first name of the beneficiary",
    "3-1": "Yes",
    "3-2": "String",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The last name of the beneficiary .",
    "5-1": "No",
    "5-2": "String",
    "5-3": "The mobile number of the beneficiary",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "This is the bank account number of the beneficiary",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "This is the bank account number of the beneficiary or phone number if the account is a mobile money wallet.",
    "8-1": "Yes",
    "8-2": "String",
    "8-3": "The type of beneficiary, see beneficiary types for more details",
    "9-1": "No",
    "9-2": "String",
    "9-3": "The country in which the beneficiary resides.",
    "10-1": "No",
    "10-2": "String",
    "10-3": "The beneficiary's email",
    "11-1": "Yes",
    "11-2": "String",
    "11-3": "The bank swift code according to ISO9362 . These two letters indicate the country where the bank is located.e.g UBSWCHZH80A",
    "1-0": "paymentScheme",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The [payment scheme](/docs/payment-scheme)  relevant to the destination currency and region."
  },
  "cols": 4,
  "rows": 12
}
[/block]
The payload should look like this :
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"business\": \"{{The business ID}}\",\n    \"sourceCurrency\": \"USD\",\n    \"destinationCurrency\": \"USD\",\n    \"amount\": \"1000\",\n    \"description\": \"i want to pay my vendor\",\n    \"paymentDestination\": \"bank_account\",\n    \"beneficiary\": {\n        \"accountHolderName\": \"Hassan Sarz\",\n        \"country\": \"NG\",\n        \"phone\": \"0123456789\",\n        \"accountNumber\": \"0123456789\",\n        \"type\": \"corporate\",\n        \"email\": \"aa@aa.com\",\n    },\n    \"paymentScheme\": \"swift\",\n    \"files\": \"https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg\",\n    \"customerName\": \"Hassan Sars\",\n}",
      "language": "json",
      "name": "USD Payouts"
    }
  ]
}
[/block]
---
title: '[DEL] Payouts APIs'
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
# 1. Fund your Fincra wallet

You can fund your wallet by making deposits into the virtual account generated for your business or by requesting a manual top-up. Learn more about [\[creating a virtual account\] ](virtual-account-api)and funding your account to make the most of our virtual account collection method.

> 🚧 Note
> 
> For test transactions, you must fund your sandbox account. For more information on how to achieve this, please see the [test section](/docs/testing-your-integration#test-payouts-for--transfers)

# 2. Collect payment information

To initiate the transaction, you'll need to obtain and pass the relevant information about your payout like the beneficiary information, amount, sender information (in some cases) etc. 

See all fields used in making a payout request.

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
    "0-3": "The ID of the business making the payout. You can get this from your Account page on the merchant portal.",
    "1-0": "sourceCurrency",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The currency which is used to fund the payout.",
    "2-0": "destinationCurrency",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "The currency in which the recipient will be receiving funds.  \n  \nFor cross currency payouts, this value will vary from the ",
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
    "5-3": "This is the type of account you want to send your payments to, see [payment destinations]\\(# Payment Destinations) for more details.",
    "6-0": "customerReference",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advise that you add it to your payload",
    "7-0": "quoteReference",
    "7-1": "No",
    "7-2": "String",
    "7-3": "This is the reference generated when the source currency is compared against the destination currency.  \n  \nThis is **required** for cross-currency payouts. You can generate a quote using the [~~Generate quote endpoint.~~](/reference/get-a-quote)",
    "8-0": "sender",
    "8-1": "Conditional",
    "8-2": "Object",
    "8-3": "The details of the customer initiating the payout",
    "9-0": "sender.name",
    "9-1": "Conditional",
    "9-2": "String",
    "9-3": "The customer's full name. This name would show up in the transfer narration.",
    "10-0": "sender.email",
    "10-1": "Conditional",
    "10-2": "String",
    "10-3": "The customer's email.",
    "11-0": "beneficiary",
    "11-1": "Yes",
    "11-2": "Object",
    "11-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "12-0": "beneficiary.firstName",
    "12-1": "Yes",
    "12-2": "String",
    "12-3": "The first name of the beneficiary.",
    "13-0": "beneficiary.lastName",
    "13-1": "Yes",
    "13-2": "String",
    "13-3": "The last name of the beneficiary.",
    "14-0": "beneficiary.accountHolderName",
    "14-1": "Yes",
    "14-2": "String",
    "14-3": "This field is required by all type of beneficiaries.",
    "15-0": "beneficiary.accountNumber",
    "15-1": "Yes",
    "15-2": "String",
    "15-3": "",
    "16-0": "beneficiary.country",
    "16-1": "Yes",
    "16-2": "String",
    "16-3": "The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB",
    "17-0": "beneficiary.email",
    "17-1": "No",
    "17-2": "String",
    "17-3": "The beneficiary's email.",
    "18-0": "beneficiary.phone",
    "18-1": "No",
    "18-2": "String",
    "18-3": "",
    "19-0": "beneficiary.type",
    "19-1": "Yes",
    "19-2": "String",
    "19-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types)  for more details",
    "20-0": "beneficiary.bankCode",
    "20-1": "Conditional",
    "20-2": "String",
    "20-3": "The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks)  codes for more details.",
    "21-0": "beneficiary.mobileMoneyCode",
    "21-1": "",
    "21-2": "",
    "21-3": "",
    "22-0": "",
    "22-1": "",
    "22-2": "",
    "22-3": "",
    "23-0": "",
    "23-1": "",
    "23-2": "",
    "23-3": ""
  },
  "cols": 4,
  "rows": 24,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


# 3. Initiate Payout

Using the fields collected, make a POST request to our [Payout API](/reference/payout-1). Depending on the type of beneficiary and the account's currency, you might need to give some extra information. See sample payloads for each currency

```json NGN

```
```Text KES

```
```Text GHS

```
```Text UGX

```
```json GBP
{
  "business": "{{The business ID}}",
  "sourceCurrency": "GBP",
  "destinationCurrency": "GBP",
  "amount": "1000",
  "description": "i want to pay my vendor",
  "paymentDestination": "bank_account",
  "customerReference": "{{$randomUUID}}",
  "beneficiary": {
    "firstName": "Hassan",
    "lastName": "Sarz",
    "accountHolderName": "Hassan Sarz",
    "country": "NG",
    "phone": "0803443433",
    "accountNumber": "GBXXCLJU04130780008933",
    "type": "individual",
    "email": "aa@aa.com",
    "sortCode": "00000",
    "bankSwiftCode": "UBSWCHZH80A"//required for Chaps payment scheme only
  },
  "paymentScheme": "{{paymentScheme}}",
  "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```
```Text EUR

```
```Text USD

```
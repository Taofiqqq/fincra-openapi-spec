---
title: Mobile Money Wallet Transfer
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
This section outlines the required parameters for processing payments to mobile money wallets. Transfers to bank accounts follow a similar format—simply make a POST request to our [Payout API](initiate-bank-transfer). However, depending on the beneficiary type and the currency of the account, additional information may be required.

For a complete list of currencies supported for mobile money transfers, please refer to the [Supported Currencies page.](supported-currencies-1)

# How Mobile Money Payout Works

The Fincra Mobile Money API enables businesses to send and receive payments via mobile money providers across Africa. When sending money to a mobile wallet:

1. Your business initiates a payout request through Fincra's API with recipient mobile wallet details
2. Fincra processes the request and connects to the appropriate mobile money provider
3. The recipient receives funds directly in their mobile money wallet
4. Your business receives a webhook notification confirming the successful transaction
5. Transaction details are available in your Fincra dashboard for reconciliation

# Common Use Cases

1. **Cross-Border Remittances**: Send money to recipients in multiple African countries
2. **Salary Disbursements**: Pay employees or contractors who use mobile money wallets
3. **Merchant Payouts**: Distribute funds to sellers in marketplaces or gig economy platforms
4. **Bill Payments**: Enable utility bill payments via mobile money providers
5. **Cash Distribution**: Disburse loans, grants, or aid payments to recipients in remote areas
6. **Refunds Processing**: Return funds to customers who originally paid via mobile money
7. **Bulk Payments**: Process multiple payments in a single batch operation

# Mobile Money Properties by Country

| Features                   | GHS (Ghana)               | KES (Kenya)                | UGX (Uganda)  |
| -------------------------- | ------------------------- | -------------------------- | ------------- |
| Mobile wallet providers    | MTN, Vodafone, AirtelTigo | Safaricom (M-Pesa), Airtel | MTN, Airtel   |
| Transaction limit (min)    | 1 GHS                     | 10 KES                     | 500 UGX       |
| Transaction limit (max)    | 10,000 GHS                | 150,000 KES                | 5,000,000 UGX |
| Available for pay-ins      | ✅                         | ✅                          | ✅             |
| Available for payouts      | ✅                         | ✅                          | ✅             |
| Real-time processing       | ✅                         | ✅                          | ✅             |
| Webhook notifications      | ✅                         | ✅                          | ✅             |
| Customer phone required    | ✅                         | ✅                          | ✅             |
| Name validation            | ✅                         | ✅                          | ✅             |
| Settlement time            | Instant                   | Instant                    | Instant       |
| Cross-currency support     | ✅                         | ✅                          | ✅             |
| Supports checkout          | ✅                         | ✅                          | ✅             |
| Status tracking            | ✅                         | ✅                          | ✅             |
| Reference ID support       | ✅                         | ✅                          | ✅             |
| Refund support             | Partial                   | Partial                    | Partial       |
| Bulk payments              | ✅                         | ✅                          | ✅             |
| API access                 | ✅                         | ✅                          | ✅             |
| Required sender info       | Name, Email               | Name, Email                | Name, Email   |
| Required recipient info    | Phone, Name               | Phone, Name                | Phone, Name   |
| Decimal amount support     | ✅                         | ✅                          | ✅             |
| AIRTEL decimal restriction | ❌                         | ✅                          | ✅             |

**Common Details**  
So first, let's go through the basic information needed for any account. You'll need to provide these details.

[block:parameters]
{
  "data": {
    "h-0": "**Field**",
    "h-1": "**Mandatory**",
    "h-2": "**Type**",
    "h-3": "**Description**",
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
    "3-3": "The value that is to be transferred from the source currency wallet.  \n**Note**: Decimals are not allowed as '**amount**', for mobile money payouts with mobileMoneyCode:\"AIRTEL\".",
    "4-0": "description",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "This is the type of account you want to send your payments to; see [payment destinations](https://docs.fincra.com/docs/transaction-types-1#payment-destination) for more details",
    "5-0": "paymentDestination",
    "5-1": "Yes",
    "5-2": "String",
    "5-3": "The value should be sent as `mobile_money_wallet`",
    "6-0": "customerReference",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advice that you add it to your payload",
    "7-0": "quoteReference",
    "7-1": "No",
    "7-2": "String",
    "7-3": "This is the reference generated when the source currency is compared against the destination currency.This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote endpoint.](https://docs.fincra.com/reference/get-a-quote)"
  },
  "cols": 4,
  "rows": 8,
  "align": [
    null,
    null,
    null,
    null
  ]
}
[/block]


In addition to the [common details](https://docs.fincra.com/docs/bank-account-transfers#common-details) needed to process successful payments, the following fields are also required when sending money to a mobile money wallet.

| **Field**                     | **Mandatory** | **Type** | **Description**                                                                                                                                                                                                                                                  |
| ----------------------------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beneficiary                   | Yes           | Object   | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                                                                   |
| beneficiary.firstName         | Yes           | String   | The first name of the beneficiary.                                                                                                                                                                                                                               |
| beneficiary.lastName          | Yes           | String   | The last name of the beneficiary                                                                                                                                                                                                                                 |
| beneficiary.phone             | No            | String   | The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number                                                                                    |
| beneficiary.accountHolderName | Yes           | String   | This field is required by all types of beneficiaries.                                                                                                                                                                                                            |
| beneficiary.accountNumber     | Yes           | String   | The mobile number of the beneficiary. It should be in this format countryCallingCode(mobile number).e.g 2348027438483. NB: please exclude passing the plus(+) with the number                                                                                    |
| beneficiary.type              | Yes           | String   | The type of beneficiary, see [beneficiary types](https://docs.fincra.com/docs/introduction-10#beneficiary-types) for more details                                                                                                                                |
| beneficiary.country           | Yes           | String   | The country in which the bank of the beneficiary is located. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB                                                                         |
| beneficiary.email             | No            | String   | The beneficiary's email                                                                                                                                                                                                                                          |
| beneficiary.mobileMoneyCode   | Yes           | String   | This value is the mobile money wallet provider's code. You must use the [List bank endpoint](https://docs.fincra.com/reference/get-banks) to obtain this value.Note: When mobileMoneyCode is "AIRTEL", the 'amount' field must be a whole number, not a decimal. |

The payload should look like this:

```javascript KES
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
```javascript GHS
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
```javascript UGX
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
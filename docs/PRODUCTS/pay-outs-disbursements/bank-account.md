---
title: Bank Transfer
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
This section outlines the parameters required for processing payments to bank accounts. All bank account transfers follow a standard format: you make a POST request to our [Payout API](https://docs.fincra.com/reference/payout-1). However, depending on the beneficiary type and account currency, you may need to provide additional information.

<br />

<br />

## How Bank Transfers Work

The Fincra Bank Transfer service follows a standard process:

1. **API Request**: You make a POST request to the Payout API with the required parameters
2. **Beneficiary Details**: You provide information about the recipient based on currency and destination requirements
3. **Transaction Processing**: Fincra validates the information and processes the transfer
4. **Confirmation**: You receive a response with transaction identifiers (`id` and `reference`)
5. **Status Tracking**: You can monitor the transaction status (only retry if status is `failed`)
6. **Settlement**: Funds are delivered to the recipient's account according to the timeline for that currency

## Common Use Cases

1. **Vendor Payments**: Automate payments to suppliers and service providers
2. **Salary Disbursements**: Process payroll for employees across multiple regions
3. **Customer Refunds**: Return funds to customers through their bank accounts
4. **Affiliate Payouts**: Make commission payments to partners and affiliates
5. **Cross-Border Transactions**: Send funds internationally with support for multiple currencies
6. **Marketplace Seller Payouts**: Distribute earnings to sellers on e-commerce platforms
7. **Loan Disbursements**: Deliver approved loan amounts directly to borrowers' accounts

## Bank Transfer Properties by Currency

| Features                   | NGN     | GHS       | KES       | UGX       | ZAR       | USD      | EUR      | GBP      |
| -------------------------- | ------- | --------- | --------- | --------- | --------- | -------- | -------- | -------- |
| Same currency transfer     | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| Cross-currency transfer    | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| KYC documentation required | ❌       | ❌         | ❌         | ❌         | ❌         | ✅        | ✅        | ✅        |
| Settlement time            | Instant | 1-2 hours | 1-2 hours | 1-2 hours | 1-2 hours | 1-2 days | 1-2 days | 1-2 days |
| Bank code required         | ✅       | ✅         | ✅         | ✅         | ✅         | ❌        | ❌        | ✅        |
| Sort code required         | ❌       | ❌         | ❌         | ❌         | ❌         | ✅        | ❌        | ✅        |
| IBAN support               | ❌       | ❌         | ❌         | ❌         | ❌         | ❌        | ✅        | ❌        |
| Individual transfers       | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| Corporate transfers        | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| Webhook notifications      | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| API availability           | ✅       | ✅         | ✅         | ✅         | ✅         | ✅        | ✅        | ✅        |
| Minimum transfer amount    | 100     | 5         | 100       | 1000      | 10        | 1        | 1        | 1        |

<br />

### Common Details

First, let's review the essential information required for all account types. You must provide the following details:

| **Field**           | **Mandatory** | **Type** | **Description**                                                                                                                                                                                                                                                 |
| ------------------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| business            | Yes           | String   | The ID of the business making the payout.                                                                                                                                                                                                                       |
| sourceCurrency      | Yes           | String   | The currency which is used to fund the payout                                                                                                                                                                                                                   |
| destinationCurrency | Yes           | String   | The currency in which the recipient will be receiving funds                                                                                                                                                                                                     |
| amount              | Yes           | String   | The value that is to be transferred from the source currency wallet.                                                                                                                                                                                            |
| description         | Yes           | String   | A simple description of payment e.g "From Daniella”                                                                                                                                                                                                             |
| paymentDestination  | Yes           | String   | This is the type of account you want to send your payments to, see [payment destinations](https://docs.fincra.com/docs/transaction-types-1#payment-destination) for more details.                                                                               |
| customerReference   | Yes           | String   | The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advise that you add it to your payload                                                                                                               |
| quoteReference      | No            | String   | This is the reference generated when the source currency is compared against the destination currency.This is required for cross-currency payouts. You can generate a quote using the [Generate quote endpoint.](https://docs.fincra.com/reference/get-a-quote) |
| sender              | No            | Object   | The details of the customer initiating the payout                                                                                                                                                                                                               |
| sender.name         | No            | String   | The customer's full name. This name would show up in the transfer narration.                                                                                                                                                                                    |
| sender.email        | No            | String   | The customer's email.                                                                                                                                                                                                                                           |

## NGN Pay-Outs

In addition to the [common details](https://docs.fincra.com/docs/bank-account-transfers#common-details) needed to process successful payments, the following fields are also required when sending money to a bank account in Nigeria.

| **Field**                     | **Mandatory** | **Type** | **Description**                                                                                                                                                                                              |
| ----------------------------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes           | Object   | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                               |
| beneficiary.firstName         | Yes           | String   | The first name of the beneficiary .                                                                                                                                                                          |
| beneficiary.lastName          | Yes           | String   | The last name of the beneficiary                                                                                                                                                                             |
| beneficiary.accountHolderName | Yes           | String   | This field is required by all type of beneficiaries.                                                                                                                                                         |
| beneficiary.type              | Yes           | String   | The type of beneficiary, see [beneficiary types](https://docs.fincra.com/docs/introduction-10#beneficiary-types) for more details                                                                            |
| beneficiary.country           | No            | String   | The country in which the bank of the beneficiary is located. This field should be according to [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No            | String   | The beneficiary's email                                                                                                                                                                                      |
| beneficiary.bankCode          | Yes           | String   | The beneficiary bank code. To get the bank code please see the [list banks endpoint](https://docs.fincra.com/reference/get-banks) codes for more details.                                                    |

The payload should look like this :

```Text Individual Beneficiary
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
```Text Corporate Beneficiary
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
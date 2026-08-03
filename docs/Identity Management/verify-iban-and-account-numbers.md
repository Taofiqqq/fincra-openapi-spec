---
title: Verify Bank Account Number
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
Learn how to use Fincra to verify your customer's identity.

## Account Types

Merchants can use our account [verification API](/reference/verify-account-number) to verify the authenticity of a customer’s account number before paying money to them. This is to ensure that your payment is routed to the right beneficiary. To learn more about the type of accounts we can verify, please see the table below:

| Type         | API Value    | Availability                                                                           | Description                                                          |
| :----------- | :----------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| Bank Account | bank_account | Nigeria, Ghana, South Africa                                                           | Used to verify and return the names attached to bank accounts.       |
| Mobile Money | mobile_money | Ghana                                                                                  | Used to verify and return the names attached to mobile money wallets |
| IBAN         | iban         | European Union, Africa, Asia, North and South America, Oceania, and the United Kingdom | International Bank Account Number                                    |
| NUBAN        | nuban        | Nigeria                                                                                | Nigeria Uniform Bank Account Number                                  |

## Implementation

To verify an `account number`, `mobile money wallet`, or `IBAN`, you would need to send the required parameters to the [verify account endpoint](/reference/verify-account-number), and the endpoint will return the customer's account information.

Endpoint:

```json POST
{{base_url}}/core/accounts/resolve
```

```json cURL
curl --location 'https://api.fincra.com/core/accounts/resolve' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

<Callout icon="⚠️" theme="warn">
  ### Note

  - Please note that when validating an IBAN (`iban`) or NUBAN (`nuban`) there should be no spaces between the values, as this would return an error response.
  - For `ZAR` bank account verification using PayShap, send the full PayShap ID (including everything after the `@`) as the `accountNumber`, and use `PAYSHAP_ID` as the `bankCode`.
</Callout>

Below are the payload structures for each account type. It denotes the fields to be sent to the [verify account endpoint](/reference/verify-account-number).

### Bank Account Number Verification

```json NGN Sample
{
    "accountNumber":"0000000000",
    "bankCode":"044",
    "currency": "NGN",
    "type": "bank_account"
}
```
```json GHS Sample
{
    "accountNumber": "1020820171412",
    "bankSwiftCode": "ADNTGHAC",
    "currency": "GHS",
    "type": "bank_account"
}
```
```json ZAR Sample
{
    "accountNumber": "0713058274@nedbank",
    "bankCode": "PAYSHAP_ID",
    "currency": "ZAR",
    "type": "bank_account"
}
```

If the API call is successful, Fincra returns the following response:

```json NGN Response
{
    "success": true,
    "message": "Account resolve successful",
    "data": {
        "accountNumber": "0000000000",
        "accountName": "John Doe",
        "bankCode": "044"
    }
}
```
```json GHS Response
{
    "success": true,
    "message": "Account resolve successful",
    "data": {
        "accountNumber": "1020820171412",
        "accountName": "John Doe",
        "bankSwiftCode": "ADNTGHAC"
    }
}
```
```json ZAR Response
{
    "success": true,
    "message": "Account resolve successful",
    "data": {
        "accountNumber": "0713058274@nedbank",
        "accountName": "Khanya Fresh Produce",
        "bankCode": "PAYSHAP_ID"
    }
}
```

### Mobile Money Wallet Verification

```json GHS Sample
{
    "accountNumber": "233246089019",
    "mobileMoneyCode": "MTN",
    "currency": "GHS",
    "type": "mobile_money"
}
```

If the API call is successful, Fincra returns the following response:

```json GHS Response
{
    "success": true,
    "message": "Account resolve successful",
    "data": {
        "accountName": "John Doe",
        "accountNumber": "233246089019",
        "bankCode": "MTN"
    }
}
```

### International Bank Account Number (IBAN) Verification

```json Request
{
   "iban":"GB88CLJU04130734505781",
   "type":"iban"
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
    "success": true,
    "message": "Account resolve successful",
    "data": {
        "iban": "GB88CLJU0413111111111",
        "accountNumber": "11111111",
        "bankName": "BARCLAYS",
        "bankCode": "CLJU",
        "bic": "CLJUFV21XXX",
        "branchName": "BARCLAYS LTD",
        "branchCode": "041311",
        "country": "United Kingdom",
        "countryIso": "GB",
        "address": "16 ... Street ",
        "city": "London",
        "state": null,
        "zip": null
    }
}
```

<br />

## Account Verification Error

`Account could not be resolved. Please check your selection and try again`

This error happens when our system is unable to effectively check the validity of a customer's bank account.

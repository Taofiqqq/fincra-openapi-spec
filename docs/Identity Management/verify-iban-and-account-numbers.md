---
title: Account Number Verification
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
Learn how to use Fincra to verify your customer's identity.

## Account number verification

Merchants can use our account [verification API](reference/verify-account-number) to verify the authenticity of a customer’s account number before paying money to them. This is to ensure that your payment is routed to the right beneficiary. To learn more about the type of accounts we can verify, please see the table below:

| Name  | Availability                                                                           | Description                         |
| :---- | :------------------------------------------------------------------------------------- | :---------------------------------- |
| NUBAN | Nigeria                                                                                | Nigeria Uniform Bank Account Number |
| IBAN  | European Union, Africa, Asia, North and South America, Oceania, and the United Kingdom | International Bank Account Number   |

## Account Types

We are able to verify IBAN as well as Nigerian bank accounts (NUBAN). The API values (types) for these accounts are `iban` and `nuban`, as shown in the code implementations below.

> ⚠️ Note
>
> * Please note that when validating an IBAN(iban) or NUBAN(nuban) there should be no spaces between the values, as this would return an error response.

**NGN bank account numbers(Nuban)**\
To verify an account number send the  `account number`, `type` and `bank code` to the [verify account endpoint](/reference/verify-account-number), and the endpoint will return the customer's account information.

```json Request
{
   "accountNumber":"000",
   "bankCode":"00",
   "type": "nuban" // This is optional 
}
```
```json Response
{
  "success": true,
  "data": {
    "number": "3089570843",
    "name": "ARENE EFE MOSHOOD"
  }
}
```

**International bank account numbers(Iban)**\
To verify an IBAN send the  `iban` and `type` to the [verify account endpoint](/reference/verify-account-number), and the endpoint will return the customer's account information.

```json Request
{
   "iban":"GB88CLJU04130734505781",
   "type":"iban"
}
```
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

## Account Verification Error

`Account could not be resolved. Please check your selection and try again`

This error happens when our system is unable to effectively check the validity of a customer's bank account.

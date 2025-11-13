---
title: NGN (Nigerian Naira) Account
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
This section describes the requirements for creating a virtual account in Naira(NGN). In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take your time to go through each request properly.

Our Virtual account API can be used to create permanent and temporary NGN virtual accounts. There are no prefixes or suffixes added to the accounts we generate thereby ensuring that these accounts are fully personalized. Fincra merchants are able to add a prefix or suffix when requesting a virtual account.

## Multiple Bank Options

With our virtual account API, you can request virtual accounts from any of our supported banks. Please see the [API Document](/docs/nigerian-naira-virtual-account) for parameters needed to create virtual accounts in `NGN`

Here is a list of banks that we support for the creation of NGN virtual accounts.

| **S/N** | **Bank**              | **Value** |
| ------- | --------------------- | --------- |
| 1       | VFD microfinance bank | vfd       |
| 2       | Wema bank             | wema      |
| 3       | Providus              | providus  |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests:

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/v2/accounts
```

* [Create a virtual account for a sub-account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account for a sub account in any currency

```json
{{host}}/v2/accounts
```

**Note** 

* After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.
* `bvn` is required when creating permanent virtual accounts
* Funds are instantly transferred to your NGN account.

***

### Individual Request

These are the fields required to process an individual virtual account request in NGN

| Field                    | Mandatory | type   | Description                                                                                                                 |
| ------------------------ | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                 | yes       | string | The virtual account currency.e.g NGN                                                                                        |
| businessId               | yes       | string | The unique Identifier of the business i.e The business ID of the merchant                                                   |
| subAccountId             | yes       | string | The unique Identifier of the sub account i.e The business ID of the merchant [About Subaccounts](reference/sub-accounts)    |
| accountType              | yes       | string | The virtual account type. Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                  | No        | string | The value should be `wema` for wema bank accounts and `vfd` for VFD bank accounts. `wema` is the default channel            |
| dateOfBirth              | No        | string | The date of birth of the customer. required only when creating VFD virtual accounts in NGN. Format (mm/dd/yyyy)            |
| KYCInformation.firstName | No        | string | The customer's first name. This is required to create an individual account                                               |
| KYCInformation.lastName  | No        | string | The customer's last name. This is required to create an individual account                                                |
| KYCInformation.email     | No        | string | The customer's email.                                                                                                       |
| KYCInformation.bvn       | Yes       | string | Bank verification number                                                                                                    |

<br />

The payload should look like this:

```json Individual
{
    "dateOfBirth": "10-12-1993",
    "businessId": "6094eebs7062827a9ec9007f",
    "subAccountId": "60a6767a9d9fc63c92eda621",
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "090909909"}
}
```

<br />

### Corporate Request

These are the fields required to process a corporate virtual account request in NGN

| Field                       | Mandatory | type   | Description                                                                                                                 |
| --------------------------- | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                    | yes       | string | The virtual account currency.e.g NGN                                                                                        |
| businessId                  | yes       | string | The unique Identifier of the business i.e The business ID of the merchant                                                   |
| subAccountId                | yes       | string | The unique Identifier of the sub account i.e The business ID of the merchant [Get Subaccount ID](reference/sub-accounts)    |
| accountType                 | yes       | string | The virtual account type. Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                     | No        | string | The value should be `wema` for wema bank accounts and `vfd` for VFD bank accounts. `wema` is the default channel            |
| dateOfBirth                 | No        | string | The date of birth of the customer. required only when creating VFD virtual accounts in NGN. Format (mm/dd/yyyy)            |
| bvn                         | No        | string | Bank verification number. compulsory for `vfd` bank accounts                                                                |
| KYCInformation.email        | No        | string | The customer's email.                                                                                                       |
| KYCInformation.businessName | No        | string | The customer's business name.                                                                                              |
| KYCInformation.bvn          | Yes       | string | Bank verification number. compulsory for `vfd` bank accounts                                                                |

<br />

The payload should look like this:

```json
{
    "businessId": "6094eebs7062827a9ec9007f",
    "subAccountId": "60a6767a9d9fc63c92eda621",
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "90909090909", "businessName": "jane"},
    "channel": "wema"
}
```
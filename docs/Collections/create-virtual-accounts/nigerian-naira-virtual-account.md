---
title: NGN (Nigerian Naira) Virtual Account
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

With an NGN virtual account, payments can be received in Naira and made in different currencies.

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> * [How to create a virtual account](/docs/fincra-virtual-account-creation)
> * [Currencies we support for virtual account creations](/docs/create-virtual-accounts)
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> * [Sub accounts](/docs/sub-accounts)
> * [Use cases](/docs/create-virtual-accounts#use-cases)
> * [Differences between corporate and individual virtual account requests](docs/create-virtual-accounts#virtual-account-types)

<br />

This parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/profile/virtual-accounts/requests/
```

* [Create a virtual account for your sub-account](/reference/request-individual-virtual-account-for-a-sub-account-1): This endpoint be used to request a virtual account in any currency,  but you must first create a [sub account.](/reference/create-subaccount).

```json
{{host}}/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests/
```

> 📘 NOTE
>
> * After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.
> * `bvn` is required when creating permanent virtual accounts 
> * Please ensure that the `dateOfBirth` on your request matches the date of birth of the 'BVN' provided when creating accounts in `VFD` or the request will fail with the error response `"error": "Error occured while generating virtual account. Please try again."`,

<br />

## Endpoint Parameters

***

### Individual Request

These are the fields required to process an individual virtual account request in NGN

| Field                    | Mandatory | type   | Description                                                                                                                 |
| ------------------------ | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                 | yes       | string | The virtual account currency.e.g NGN                                                                                        |
| accountType              | yes       | string | The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                  | No        | string | The value should be `wema` for wema bank accounts and `vfd` for VFD bank accounts. `wema` is the default channel            |
| dateOfBirth              | No        | string | The date of birth of the customer. required only when creating VFD virtual accounts in NGN. Format (mm/dd/yyyy )            |
| KYCInformation.firstName | No        | string | The customer's first name . This is required to create an individual  account                                               |
| KYCInformation.lastName  | No        | string | The customer's last name . This is required to create an individual  account                                                |
| KYCInformation.email     | No        | string | The customer's email.                                                                                                       |
| KYCInformation.bvn       | Yes       | string | Bank verification number                                                                                                    |

<br />

The payload should look like this :

```json Individual
{
    "dateOfBirth": "10-12-1993",
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "090909909"}
}
```

<br />

### Corporate Request

These are the fields required to process an individual virtual account request in NGN

| Field                       | Mandatory | type   | Description                                                                                                                 |
| --------------------------- | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                    | yes       | string | The virtual account currency.e.g NGN                                                                                        |
| accountType                 | yes       | string | The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                     | No        | string | The value should be `wema` for wema bank accounts and `vfd` for VFD bank accounts. `wema` is the default channel            |
| dateOfBirth                 | No        | string | The date of birth of the customer. required only when creating VFD virtual accounts in NGN. Format (mm/dd/yyyy )            |
| bvn                         | No        | string | Bank verification number. compulsory for `vfd` bank accounts                                                                |
| KYCInformation.email        | No        | string | The customer's email.                                                                                                       |
| KYCInformation.businessName | No        | string | The customer's business name .                                                                                              |
| KYCInformation.bvn          | Yes       | string | Bank verification number. compulsory for `vfd` bank accounts                                                                |

<br />

The payload should look like this :

```json
{
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "90909090909", "businessName": "jane"},
    "channel": "wema"
}
```
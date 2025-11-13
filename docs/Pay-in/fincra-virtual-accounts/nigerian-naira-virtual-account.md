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
This section describes the requirements for creating a virtual account in Naira(NGN). In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take time to go through each request properly.

You can use the Virtual account API to create permanent and temporary NGN Virtual Accounts. 

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> * [How to create a virtual account](/docs/fincra-virtual-accounts)
> * [Currencies we support for virtual account creations](/docs/fincra-virtual-accounts#requesting-virtual-accounts)
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)

## Multiple Bank Options

You can request a Virtual Accounts from our supported bank with the Virtual Account API. Please see the [API Documentation](/docs/nigerian-naira-virtual-account) for the parameters needed to create virtual accounts in NGN. Listed below are the banks that are supported in the creation of NGN virtual accounts.

Here is a list of banks that we support for the creation of NGN Virtual Accounts.

| **S/N** | **Bank**    | **Value** |
| ------- | ----------- | --------- |
| 1       | Globus Bank | globus    |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints supported for creating virtual accounts :

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a Virtual Account in any currency

```json
{{host}}/profile/virtual-accounts/requests
```

**Note** 

* After a virtual account creation request is made, a response with a data object containing a unique identifier `_id` of the virtual account will be returned, which will also be included in the webhook sent as `id` if the virtual account is declined or approved.
* `bvn` is required when creating permanent virtual accounts
* Funds transfers made to NGN accounts are instant
* The name on the BVN must correspond with both the `KYCInfomation.firstName`, `KYCInfomation.lastName` or `KYCInfomation.bvnName` sent in the payload, otherwise, the following error will be received:  `BVN doesn't match the provided name`
* The order of arrangement of the `bvnName`  matters when verifying against the name on the BVN. Kindly pass the exact value as it is on the `BVN` e.g Fincra developers == Fincra developers

***

### Individual Request

These are the fields required to process an individual virtual account request in NGN

| Field                    | Mandatory | type   | Description                                                                                                                 |
| ------------------------ | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                 | Yes       | string | The virtual account currency.e.g NGN                                                                                        |
| accountType              | Yes       | string | The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                  | No        | string | The value should be `globus` for globus bank accounts .                                                                     |
| dateOfBirth              | No        | string | The date of birth of the customer.                                                                                          |
| KYCInformation.firstName | Yes       | string | The customer's first name . This is required to create an individual  account                                               |
| KYCInformation.lastName  | Yes       | string | The customer's last name . This is required to create an individual  account                                                |
| KYCInformation.email     | No        | string | The customer's email.                                                                                                       |
| KYCInformation.bvn       | Yes       | string | Bank verification number.                                                                                                   |

<br />

The payload should look like this :

```json Individual
{
    "dateOfBirth": "10-12-1993",
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "090909909"},
    "channel": "globus"
}
```

### Corporate Request

These are the fields required to process an individual Virtual Account request in NGN

| Field                       | Mandatory | type   | Description                                                                                                                 |
| --------------------------- | --------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| currency                    | yes       | string | The virtual account currency.e.g NGN                                                                                        |
| accountType                 | yes       | string | The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details |
| channel                     | No        | string | The value should be `wema` for wema bank accounts and `vfd` for VFD bank accounts. `wema` is the default channel            |
| dateOfBirth                 | No        | string | The date of birth of the customer. required only when creating VFD virtual accounts in NGN. Format (mm/dd/yyyy )            |
| bvn                         | No        | string | Bank verification number. compulsory for `vfd` bank accounts . This must be the date of birth on thee customer's `BVN`      |
| KYCInformation.email        | No        | string | The customer's email.                                                                                                       |
| KYCInformation.businessName | Yes       | string | The customer's business name .                                                                                              |
| KYCInformation.bvn          | Yes       | string | Bank verification number.                                                                                                   |
| KYCInformation.bvnName      | Yes       | string | The name you want to be on the account. This must be the same name on the customer's`BVN`                                   |

<br />

The payload should look like this :

```json
{
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "90909090909", "bvnName": "jane foster", "businessName": "jane"},
    "channel": "globus"
}
```

**Please note that the BVN provided for a corporate account request must match the details of any of the directors or shareholders on the CAC record for the corporate entity**
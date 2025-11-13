---
title: API Changelog 🔊
excerpt: Stay up-to-date with the latest changes on our APIs
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## AUGUST 15 2022

***

### RELEASE OF FINCRA VERSION 2.0

We've updated our APIs, and the new endpoints in this version are quicker and more effective.

* The base URLs for our V2 API Endpoints are [https://api.fincra.com/v2](https://api.fincra.com/v2) for the live environment and [https://sandboxapi.fincra.com/v2](https://sandboxapi.fincra.com/v2) for the test environment.

* The following APIs have been renamed: `disbursement` is now `payout` and `collections` is now`payins`.

New names and updates have been made to the following endpoints:

* `/disbursements/payouts` is now `v2/payouts`
* `/virtual-accounts/requests` is now `v2/accounts`
* `/collections` is now `v2/payins`.

 Developers can now request virtual accounts for both main and sub-accounts from just one endpoint `(v2/accounts)` instead of the old scenario of different endpoints for main and sub-accounts.

Happy Integrations

## NOVEMBER 9, 2022

***

When requesting a corporate virtual account in any currency except NGN, the `KYCInformation.email` email parameter is now required. This change affects the create virtual account endpoint `/profile/virtual-accounts/requests`

## NOVEMBER 25,2022

The [virtual account endpoint](https://docs.fincra.com/reference/create-a-virtual-account-for-a-sub-account) below has been deprecated :

`/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests/auto` 

 Kindly make use of the new endpoint :

`/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests`

## December 4, 2022

Requests for corporate NGN accounts now have a new parameter called `bvnName` . Read more [here](/docs/nigerian-naira-virtual-account#corporate-request).         

## January 2023

The virtual account endpoints have been updated and have new changes. 

1. Addition of KYCInformation.address.number (where the individual's house number is passed) to USD, GBP  and  EURO  Individual virtual accounts. Please note that this field is compulsory for UK residents.
2. Addition of KYCInformation.houseId (where the business's building number is passed) to USD, GBP and  EURO  Corporate virtual accounts. Please note that this field is compulsory for UK residents.
3. We now have an endpoint that makes it possible to use more than 2  currencies on a virtual account [List of Accessible currencies on Multicurrency Virtual Account Endpoint](/docs/multicurrency-virtual-account#list-of-available-currencies-on-multicurrency-endpoint). [Multicurrency Virtual Account](/docs/multicurrency-virtual-account) makes this seamless.

## February 2023

Calculate fee on checkout  [endpoint](/reference/calculate-fee-on-checkout) was added to help calculate the fee required at the checkout point. This endpoint can be useful for currency conversion on checkout.

## February  22, 2023.

Globus was added to NGN virtual account channel. This implies that clients can now request  Globus virtual account.

## August 21, 2023

All agency banking [utillities](https://docs.fincra.com/docs/utilities-overview)  and  [cashout service(card withdrawal)](https://docs.fincra.com/reference/card-transaction)base url has been updated, Kindly check it out for more update

## September 28, 2023

Fincra Core

* Catering for merchants IP Addresses (IP Whitelisting) via the merchant dashboard.
* Fincra Merchant Dashboard (Settings Module) Revamp.

Agency Banking:

* Globus Bank domain mapping on the agent portal.

## September 29, 2023

Added more banks to our list of supported banks.

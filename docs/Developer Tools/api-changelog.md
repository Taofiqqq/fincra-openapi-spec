---
title: API Changelog 🔊
excerpt: Stay up-to-date with the latest changes on our APIs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
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

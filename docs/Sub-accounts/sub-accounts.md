---
title: Overview
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
A subaccount is a user who is created under your account. You can use the API to manage many parts of subaccount logistics, such as account administration, virtual account creation, and so on.

> ❗ ️NOTE
> 
> A subaccount is not the same as a virtual account. To read about virtual accounts please see the[ virtual account section](/docs/create-virtual-accounts)

Subaccount ID
-------------

When you create a subaccount or try to get all sub-accounts, the ID of your subaccount, also known as its [business ID](/reference/get-business-id-1), can be obtained from the Data object of a successful response.

The subaccount ID or business ID of a subaccount can be fetched by [calling the subaccount ](/reference/get-all-sub-accounts) 

```json
"data": {
    "_id": "621b1c7acb0e3e7249fdeff7",
    "status": "enabled",
    ......
  }
```

Features of a subaccount
------------------------

- **Payouts request**: Sub-accounts can send money to another sub-account or to a bank account. 
- **Wallets**: Sub-accounts have their unique wallet, independent from the parent's business wallet. e.g If a parent business has five wallets, a sub-account will have its own set of five wallets that are distinct from the wallets of the parent business. 
- **Collections**: Sub-accounts can receive money in their wallets.
- **Quote generation**: Quotes can be generated for a sub-account.
- **Virtual account creation**: Sub-accounts can also request virtual accounts

How to create a sub-account
---------------------------

A sub-account can be created by making use of the[ create sub-account endpoint](/reference/create-subaccount).

```json request
{
     "name": "john doe",
     "email": "wsbdev@gmail.com",
     "mobile": "+88998989898",
     "country": "NG"
}
```
```json response
{
  "success": true,
  "message": "You have successfully created a sub-account",
  "data": {
    "_id": "6255b3a37ebbbf852ccff47e",
    "status": "enabled",
    "businessTag": 120910,
    "isKYCApproved": true,
    "name": "efe",
    "email": "wsbdev@gmail.com",
    "mobile": "+88998989898",
    "country": "NG",
    "parentBusiness": "607b3cae67c64480bbf1b995",
    "createdAt": "2022-04-12T17:15:15.793Z",
    "updatedAt": "2022-04-12T17:15:15.870Z"
  }
}
```
---
title: Sub-accounts
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A subaccount is a user created under your account. The API empowers you to handle various aspects of subaccount logistics: manage accounts, creation of virtual accounts, and so on.

## Subaccount ID

The  ID of your subaccount can be obtained from the Data object of a successful response when you create a subaccount or try to get all sub-accounts.

```json
"data": {
    "_id": "621b1c7acb0e3e7249fdeff7",
    "status": "enabled",
    ......
  }
```



## Features Of A Subaccount

- Payouts: Sub-accounts can make transfers to a bank account or another sub-account.
- Balance: Sub-accounts have a different account balance that is separate from their parent's business balance.e.g if a parent business has 5 account balances in different currencies, a sub-account will have its own unique 5 account balances that are separate from its parent business balances.
- Collections: Sub-accounts can receive money and it will be settled in their account balance.
- Quotes: Quotes can be generated for a sub-account.

## Fetch A Sub Account Balance

To fetch the account balances of a sub-account, you will need to make an API request to the get [balance endpoint](/reference/get-all-the-balance-for-a-business).
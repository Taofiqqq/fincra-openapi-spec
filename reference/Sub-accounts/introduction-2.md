---
title: Introduction
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
A subaccount is a user created under your account. The API empowers you to handle various aspects of subaccount logistics: manage accounts, creation of virtual accounts, and so on.

##Subaccount ID

The  ID of your subaccount can be obtained from the Data object of a successful response when you create a subaccount or try to get all sub-accounts.
[block:code]
{
  "codes": [
    {
      "code": "\"data\": {\n    \"_id\": \"621b1c7acb0e3e7249fdeff7\",\n    \"status\": \"enabled\",\n    ......\n  }",
      "language": "json"
    }
  ]
}
[/block]
## Features of a subaccount 
  * Payouts: Sub-accounts can make transfers to a bank account or another sub-account.
  * Wallets: Sub-accounts have a different wallet that is separate from their parent's business wallet.e.g if a parent business has 5 wallets, a sub-account will have its own unique 5 wallets that are separate from its parent business wallets.
  * Collections: Sub-accounts can receive money in their wallets.
  * Quotes: Quotes can be generated for a sub-account.
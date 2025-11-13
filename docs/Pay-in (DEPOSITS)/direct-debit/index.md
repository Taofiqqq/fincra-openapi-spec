---
title: Direct Debit (Mandate Management)
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
### What is direct debit

Direct debit is a form of pull payment. It is based on arrangement with between a third-party and the customers bank that allows the third-party transfer money from a person's account on agreed dates, typically in order to pay bills.

The arrangement in most cases is a mandate that is placed on the customers account with their consent. Once a mandate is activated on an account, you can initiate a debit from that account at any frequency that works for you. In essence, a mandate is a pre-cursor to direct debit.

### How Fincra’s direct debit solution works

Fincra’s direct debit service is powered by NIBSS. Our direct debit solution is fully automated and we have eliminated the strains of the traditional process that involve bank visits by your customers and 36+ hours mandate activation wait time.

With our solution, a mandate on an account is activated within minutes of the user making the token payment (N50) to NIBSS and it involves NO visit to a bank.

Here are the steps:

1. First you will need to [create a mandate](initiate-mandate) with the relevant bank details of your customers. Once this has been done, your customer will be instructed to make a payment to an account. This payment activates the mandate.
2. Next, [debit the account](initiate-direct-debit) at your desired frequency!

### Use Cases:

* Directly debiting a customers bank account.
* Recurring payments.
* Loan repayments.
* Subscription services.

> 🚧 Note
>
> * For a mandate to be in effect, the account owner would have to authorize the mandate request by sending ₦50 to the account returned in the `responseDescription` when mandate is created.
> * Direct debit powered by NIBSS is currently only available for the 25 commercial banks in Nigeria. See the list of commercial banks here. Please note that Heritage bank is to be disregarded from this list.

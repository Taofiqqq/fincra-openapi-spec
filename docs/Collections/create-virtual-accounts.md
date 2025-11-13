---
title: Virtual Accounts
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
Virtual accounts are unique account details (account number and bank) that enable Fincra merchants to receive payments from customers via bank transfer.

**Virtual accounts are currently available in the following currencies :  
** 

| S/N | Currency Name | Currency Code |
| :-- | :------------ | :------------ |
| 1   | EURO          | EUR           |
| 2   | British Pound | GBP           |
| 3   | Naira         | NGN           |

Our Virtual account API can be used to create permanent and temporary NGN virtual accounts. There are no prefixes or suffixes added to the accounts we generate thereby ensuring that these accounts are fully personalized. Fincra merchants are able to add a prefix or suffix when requesting a virtual account.

> 🚧 Note
> 
> - A subaccount is not the same as a virtual account. To read about subaccounts please see the [Sub-account section](/reference/introduction-2) .
> - It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you amd the funds get settled in your wallet, to check your wallet balance please see the [wallet API](/reference/get-a-wallet)

Multiple Bank Options
---------------------

With our virtual account API, you can request virtual accounts from any of our supported banks. Please see the [API Document](/docs/nigerian-naira-virtual-account) for  parameters needed to create virtual accounts in `NGN`

Here is a list of banks that we support for the creation of NGN virtual accounts.

| **S/N** | **Bank**              | **Value** |
| ------- | --------------------- | --------- |
| 1       | VFD microfinance bank | vfd       |
| 2       | Wema bank             | wema      |
| 3       | Providus              | providus  |

To create NGN virtual bank accounts , please add the value of the bank in the `channel` field of the request e.g

```json
{
    "dateOfBirth": "18-06-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "22213702821"},
    "channel": "vfd"
}
```

Use Cases
---------

Temporary virtual accounts are useful for receiving one-off payments via bank transfer. When a customer is at the check-out point, a temporary virtual account with an expiry time can be generated and provided to the customer to complete the checkout process.

To learn how to create temporary virtual accounts , please read this [page](/reference/create-temporary-virtual-account) 

> 📘 Temporary Virtual Account Flow
> 
> - You create a virtual account with our API and provide your customer with the details of the account
> - The customer transfers funds to the account
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> - You provide the product or service that you received payment for to the customer

Permanent virtual accounts are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform.

To learn how to create permanent virtual accounts , please read this [page](https://docs.fincra.com/docs/fincra-virtual-account-creation) 

> 📘 Permanent Virtual Account Flow
> 
> - You create a virtual account for the customer with our API and provide your customer with the details of the account.
> - The customer transfers funds to the virtual account created.
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> - You provide the product or service that you received payment for to the customer.

Types Of Virtual Account Status
-------------------------------

A virtual account request can have any of the following statuses as supported on Fincra. Please see the table below for descriptions of the statuses.

| S/N | status   | description                                                                         |
| :-- | :------- | :---------------------------------------------------------------------------------- |
| 1   | approved | The virtual account is approved and can be used for making or receiving payments    |
| 2   | pending  | The virtual account is pending and has neither been declined nor approved.          |
| 3   | declined | The virtual account is declined and cannot be used for making or receiving payments |

Types Of Virtual Accounts
-------------------------

There are two types of virtual accounts that can be created. Please see the table below for more description.

[block:parameters]
{
  "data": {
    "h-0": "S/N",
    "h-1": "Account Type",
    "h-2": "description",
    "h-3": "API Value",
    "0-0": "1",
    "0-1": "Corporate",
    "0-2": "This virtual account can be used by a company or organization to hold its money and perform transactions on behalf of that organization.",
    "0-3": "corporate",
    "1-0": "2",
    "1-1": "individual",
    "1-2": "This virtual account is named and owned by just one person.  \nindividual",
    "1-3": "individual"
  },
  "cols": 4,
  "rows": 2,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]
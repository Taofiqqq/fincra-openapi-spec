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
Virtual accounts contain unique account information (account number and bank) that allow Fincra merchants to receive payments from customers via bank transfer. With our virtual accounts, you can accept payments from Africa, Europe, the US, the UK, and anywhere in the world.
[block:callout]
{
  "type": "warning",
  "title": "Note",
  "body": "*  A subaccount is not the same as a virtual account. To read about subaccounts please see the [Sub-account section](/reference/introduction-2) .\n* It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)"
}
[/block]
##Requesting Virtual Accounts
Virtual accounts are currently available in the following currencies :  
[block:parameters]
{
  "data": {
    "h-0": "Currency Name",
    "h-1": "Currency Code",
    "0-0": "EURO",
    "0-1": "EUR",
    "1-0": "British  Pounds",
    "1-1": "GBP",
    "2-0": "Naira",
    "2-1": "NGN",
    "h-2": "About",
    "0-2": "[Euro Accounts](/docs/eur-virtual-account)",
    "1-2": "[GBP Accounts](/docs/gbp-british-pounds-account)",
    "2-2": "[NGN (Nigerian Naira) Account](doc:nigerian-naira-virtual-account)",
    "h-3": "Payment Schemes",
    "0-3": "SEPA,SEPA Instant",
    "1-3": "FPS,CHAPS",
    "2-3": "NIBBS"
  },
  "cols": 4,
  "rows": 3
}
[/block]
<br />
A virtual account can be requested through your portal or through the virtual account API. The video below depicts how to request a virtual account from your portal.
[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbZLcY1fJdTc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbZLcY1fJdTc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbZLcY1fJdTc%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=bZLcY1fJdTc",
  "title": "How to Request A Virtual Account Via Your Merchant Portal",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/bZLcY1fJdTc/hqdefault.jpg"
}
[/block]
Virtual Account Use Cases
-----------------------------
We can divide virtual account use cases into two categories: temporary virtual accounts and permanent virtual accounts.

###Temporary virtual accounts
Temporary accounts are useful for receiving one-off payments via bank transfer. When a customer is at the check-out point, a temporary virtual account with an expiry time can be generated and provided to the customer to complete the checkout process.

To learn how to create temporary virtual accounts , please read this [page](/reference/create-temporary-virtual-account) 

> 📘 Temporary Virtual Account Flow
> 
> - You create a virtual account with our API and provide your customer with the details of the account
> - The customer transfers funds to the account
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> - You provide the product or service that you received payment for to the customer

###Permanent virtual accounts 
Permanent accounts are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform.

To learn how to create permanent virtual accounts , please read this [page](https://docs.fincra.com/docs/fincra-virtual-account-creation) 

> 📘 Permanent Virtual Account Flow
> 
> - You create a virtual account for the customer with our API and provide your customer with the details of the account.
> - The customer transfers funds to the virtual account created.
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> - You provide the product or service that you received payment for to the customer.


<br />

Technical Classification Of Virtual Accounts
-----------------------------

###By Funding
Our Virtual Accounts can be classified into two based on how they can be funded: 

- Main virtual accounts are corporate virtual accounts that belong to a registered merchant on Fincra and are the first corporate virtual accounts created by the merchant. Funds that come into the main virtual account can be fetched by the [wallet top-up API](/reference/get-wallet-top-ups).
- After creating a main virtual account, a merchant may create any other virtual accounts. Payins made to these accounts can be retrieved using the [payin API](/reference/get-all-payins).

**Note** : All main accounts are corporate, however additional accounts can be either corporate or individual.


###By Entity
Our virtual accounts can also be classified according to whether they are used by an individual or a corporate entity.
[block:parameters]
{
  "data": {
    "h-0": "S/N",
    "h-1": "Account Type",
    "h-2": "Description",
    "h-3": "API value",
    "0-0": "1",
    "1-0": "2",
    "0-1": "Inidividual",
    "1-1": "Corporate",
    "0-2": "This virtual account can be used by a company or organization to hold its money and perform transactions on behalf of that organization.",
    "1-2": "This virtual account is named and owned by just one person.  \nindividual",
    "0-3": "individual",
    "1-3": "corporate"
  },
  "cols": 4,
  "rows": 2
}
[/block]
<br/>
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"dateOfBirth\": \"10-12-1993\",\n    \"accountType\": \"individual\",\n    \"currency\": \"NGN\",\n    \"KYCInformation\": {\"firstName\": \"rita\", \"lastName\": \"general\", \"bvn\": \"090909909\"}\n}",
      "language": "json",
      "name": "NGN Individual Account"
    },
    {
      "code": "{\n    \"dateOfBirth\": \"10-12-1993\",\n    \"accountType\": \"corporate\",\n    \"currency\": \"NGN\",\n    \"KYCInformation\": {\"bvn\": \"90909090909\", \"businessName\": \"jane\"},\n    \"channel\": \"vfd\"\n}",
      "language": "json",
      "name": "NGN Corporate Acccount"
    }
  ]
}
[/block]
**Note**: In the preceding examples, we specified the `accounType` as `individual` and `corporate` Please include the 'accountType' field in your calls to the virtual account API.

Get Virtual Accounts Balance
-----------------------------
It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e4d2ed3-Balance_API.png",
        "Balance API.png",
        3314,
        998,
        "#f6f6fc"
      ]
    }
  ]
}
[/block]
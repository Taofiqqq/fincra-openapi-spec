---
title: Virtual Accounts
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
Virtual accounts contain unique account information (account number and bank) that allow Fincra merchants to receive payments from customers via bank transfer. With our virtual accounts, you can accept payments from Africa, Europe, the US, the UK, and anywhere in the world.

> 🚧 Note
> 
> - It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

## Available Currencies

Virtual accounts are currently available in the following currencies :  

| Currency Name   | Currency Code | Payment Schemes    | Availability |
| :-------------- | :------------ | :----------------- | :----------- |
| Naira           | NGN           | NIBBS              | Yes          |
| Ghana Cedis            | GHS           | GhIPSS | Yes          |
| Kenyan Shillings            | KES           | KEPSS | Yes          |
| United States dollar            | USD           | ACH, Swift | Yes          |
| EURO            | EUR           | SEPA, SEPA Instant | Yes          |
| British  Pounds | GBP           | FPS, CHAPS         | Yes           |

<br />

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbZLcY1fJdTc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbZLcY1fJdTc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbZLcY1fJdTc%2Fhqdefault.jpg&key=02466f963b9b4bb8845a05b53d3235d7&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
  "url": "http://www.youtube.com/watch?v=bZLcY1fJdTc",
  "title": "How to Request A Virtual Account Via Your Merchant Portal",
  "image": "https://i.ytimg.com/vi/bZLcY1fJdTc/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "http://www.youtube.com/watch?v=bZLcY1fJdTc",
  "typeOfEmbed": "default"
}
[/block]


## Types of Virtual Accounts

We can divide virtual account into two categories: Temporary virtual accounts and Permanent virtual accounts.

### Temporary Virtual Accounts

Temporary virtual accounts are useful for receiving one-off payments. A use case for the temporary accounts is when a customer is at the check-out point, a temporary virtual account with an expiry time can be generated and provided to the customer to complete the checkout process.

To learn how to create temporary virtual accounts, please read this [page](/reference/create-temporary-virtual-account) 

> 📘 Temporary Virtual Account Flow
> 
> - You create a temporary virtual account with our API and provide your customer with the details of the account
> - The customer transfers funds to the account
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.

### Permanent Virtual Accounts

Permanent virtual accounts are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform. These accounts are static and can be used to receive payments subsequently.

To learn how to create permanent virtual accounts, please read this [page](https://docs.fincra.com/reference/request-virtual-accounts) 

> 📘 Permanent Virtual Account Flow
> 
> - You create a virtual account for the customer with our API and provide your customer with the details of the account.
> - The customer transfers funds to the virtual account created.
> - A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> - You provide the product or service that you received payment for to the customer.

<br />

## Technical Classification Of Virtual Accounts

### By Funding

Our Virtual Accounts can be classified into two based on how they can be funded: 

- Main virtual accounts are corporate virtual accounts that belong to a registered merchant on Fincra and are the first corporate virtual accounts created by the merchant. Funds that come into the main virtual account can be fetched by the [wallet top-up API](/reference/get-wallet-top-ups).
- After creating a main virtual account, a merchant may create any other virtual account. Payins made to these accounts can be retrieved using the [payin API](/reference/get-all-collections).

**Note**: All main accounts are corporate, however, additional accounts can be either corporate or individual.

### By Entity

Our virtual accounts can also be classified according to whether they are used by an individual or a corporate entity.

| S/N | Account Type | Description                                                                 | API value  |
| :-- | :----------- | :-------------------------------------------------------------------------- | :--------- |
| 1   | Individual   | This virtual account is named and owned by an individual.                   | individual |
| 2   | Corporate    | This virtual account is owned and can be used by a company or organization. | corporate  |

<br />

```json NGN Individual Account
{
    "dateOfBirth": "10-12-1993",
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "090909909"}
}
```

**Note**: In the preceding examples, we specified the `accountType` as `individual`. Please include the 'accountType' field in your calls to the virtual account API.

## Get Virtual Accounts Balance

It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts. They only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

![](https://files.readme.io/e4d2ed3-Balance_API.png "Balance API.png")
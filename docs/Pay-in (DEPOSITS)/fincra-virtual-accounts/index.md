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
> * It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

## Available Currencies

Virtual accounts are currently available in the following currencies :  

| Currency Name        | Currency Code | Payment Schemes    | Availability |
| :------------------- | :------------ | :----------------- | :----------- |
| Naira                | NGN           | NIBBS              | Yes          |
| Ghana Cedis          | GHS           | GhIPSS             | Yes          |
| Kenyan Shillings     | KES           | KEPSS              | Yes          |
| United States dollar | USD           | ACH, Swift         | Yes          |
| EURO                 | EUR           | SEPA, SEPA Instant | Yes          |
| British  Pounds      | GBP           | FPS, CHAPS         | Yes          |

<br />

<Embed url="http://www.youtube.com/watch?v=bZLcY1fJdTc" title="How to Request A Virtual Account Via Your Merchant Portal" image="https://i.ytimg.com/vi/bZLcY1fJdTc/hqdefault.jpg" provider="youtube.com" href="http://www.youtube.com/watch?v=bZLcY1fJdTc" typeOfEmbed="default" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FbZLcY1fJdTc%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DbZLcY1fJdTc%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FbZLcY1fJdTc%252Fhqdefault.jpg%26key%3D02466f963b9b4bb8845a05b53d3235d7%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

## Types of Virtual Accounts

We can divide virtual account into two categories: Temporary virtual accounts and Permanent virtual accounts.

### Temporary Virtual Accounts

Temporary virtual accounts are useful for receiving one-off payments. A use case for the temporary accounts is when a customer is at the check-out point, a temporary virtual account with an expiry time can be generated and provided to the customer to complete the checkout process.

To learn how to create temporary virtual accounts, please read this [page](/reference/create-temporary-virtual-account) 

> 📘 Temporary Virtual Account Flow
>
> * You create a temporary virtual account with our API and provide your customer with the details of the account
> * The customer transfers funds to the account
> * A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.

### Permanent Virtual Accounts

Permanent virtual accounts are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform. These accounts are static and can be used to receive payments subsequently.

To learn how to create permanent virtual accounts, please read this [page](https://docs.fincra.com/reference/request-virtual-accounts) 

> 📘 Permanent Virtual Account Flow
>
> * You create a virtual account for the customer with our API and provide your customer with the details of the account.
> * The customer transfers funds to the virtual account created.
> * A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> * You provide the product or service that you received payment for to the customer.

<br />

## Technical Classification Of Virtual Accounts

### By Funding

Our Virtual Accounts can be classified into two based on how they can be funded: 

* Main virtual accounts are corporate virtual accounts that belong to a registered merchant on Fincra and are the first corporate virtual accounts created by the merchant. Funds that come into the main virtual account can be fetched by the [wallet top-up API](/reference/get-wallet-top-ups).
* After creating a main virtual account, a merchant may create any other virtual account. Payins made to these accounts can be retrieved using the [payin API](/reference/get-all-collections).

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

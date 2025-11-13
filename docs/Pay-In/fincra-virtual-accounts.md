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

> 🚧 Note
>
> * A subaccount is not the same as a virtual account. To read about subaccounts please see the [Sub-account section](/reference/introduction-2) .
> * It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

## Requesting Virtual Accounts

Virtual accounts are currently available in the following currencies :  

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Currency Name
      </th>

      <th>
        Currency Code
      </th>

      <th>
        About
      </th>

      <th>
        Payment Schemes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        EURO
      </td>

      <td>
        EUR
      </td>

      <td>
        [Euro Accounts](/docs/eur-virtual-account)
      </td>

      <td>
        SEPA,SEPA Instant
      </td>
    </tr>

    <tr>
      <td>
        British  Pounds
      </td>

      <td>
        GBP
      </td>

      <td>
        [GBP Accounts](/docs/gbp-british-pounds-account)
      </td>

      <td>
        FPS,CHAPS
      </td>
    </tr>

    <tr>
      <td>
        Naira
      </td>

      <td>
        NGN
      </td>

      <td>
        [NGN (Nigerian Naira) Account](doc:nigerian-naira-virtual-account)
      </td>

      <td>
        NIBBS
      </td>
    </tr>
  </tbody>
</Table>

<br />
A virtual account can be requested through your portal or through the virtual account API. The video below depicts how to request a virtual account from your portal.

<Embed url="https://www.youtube.com/watch?v=bZLcY1fJdTc" title="How to Request A Virtual Account Via Your Merchant Portal" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/bZLcY1fJdTc/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=bZLcY1fJdTc" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FbZLcY1fJdTc%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DbZLcY1fJdTc%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FbZLcY1fJdTc%252Fhqdefault.jpg%26key%3Df2aa6fc3595946d0afc3d76cbbd25dc3%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

## Virtual Account Use Cases

We can divide virtual account use cases into two categories: temporary virtual accounts and permanent virtual accounts.

### Temporary virtual accounts

Temporary accounts are useful for receiving one-off payments via bank transfer. When a customer is at the check-out point, a temporary virtual account with an expiry time can be generated and provided to the customer to complete the checkout process.

To learn how to create temporary virtual accounts , please read this [page](/reference/create-temporary-virtual-account) 

> 📘 Temporary Virtual Account Flow
>
> * You create a virtual account with our API and provide your customer with the details of the account
> * The customer transfers funds to the account
> * A [webhook](/docs/collection-webhook) is sent notifying you that payment has been received.
> * You provide the product or service that you received payment for to the customer

### Permanent virtual accounts 

Permanent accounts are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform.

To learn how to create permanent virtual accounts , please read this [page](https://docs.fincra.com/docs/fincra-virtual-account-creation) 

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
* After creating a main virtual account, a merchant may create any other virtual accounts. Payins made to these accounts can be retrieved using the [payin API](/reference/get-all-payins).

**Note** : All main accounts are corporate, however additional accounts can be either corporate or individual.

### By Entity

Our virtual accounts can also be classified according to whether they are used by an individual or a corporate entity.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        S/N
      </th>

      <th>
        Account Type
      </th>

      <th>
        Description
      </th>

      <th>
        API value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1
      </td>

      <td>
        Inidividual
      </td>

      <td>
        This virtual account can be used by a company or organization to hold its money and perform transactions on behalf of that organization.
      </td>

      <td>
        individual
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        Corporate
      </td>

      <td>
        This virtual account is named and owned by just one person.\
        individual
      </td>

      <td>
        corporate
      </td>
    </tr>
  </tbody>
</Table>

<br/>

```json NGN Individual Account
{
    "dateOfBirth": "10-12-1993",
    "accountType": "individual",
    "currency": "NGN",
    "KYCInformation": {"firstName": "rita", "lastName": "general", "bvn": "090909909"}
}
```
```json NGN Corporate Acccount
{
    "dateOfBirth": "10-12-1993",
    "accountType": "corporate",
    "currency": "NGN",
    "KYCInformation": {"bvn": "90909090909", "businessName": "jane"},
    "channel": "vfd"
}
```

**Note**: In the preceding examples, we specified the `accounType` as `individual` and `corporate` Please include the 'accountType' field in your calls to the virtual account API.

## Get Virtual Accounts Balance

It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the [balance API](/reference/get-balances)

![3314](https://files.readme.io/e4d2ed3-Balance_API.png "Balance API.png")

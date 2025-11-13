---
title: Make Payouts (Disbursements)
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
Your Fincra account can be used to send money across different countries and currencies. Fincra provides different options to match your use case. With Fincra you can transfer to bank accounts, mobile money wallets, and other Fincra accounts.

**Learn how you can make payments to**:

* Local and International [ bank accounts ](bank-account)
* [ Mobile money wallets](mobile-money-wallet)
* Another Fincra account by using the [Fincra to Fincra transfer API](fincra-account-to-account-transfer)

## Same Currency Payout vs Cross Currency Payout

The Payout API lets you transfer money to an account in the same currency as well as to an account in a different currency. Both bank account transfers and mobile money transfers have this feature available.\
You can perform these transfers both through your portal and using the API. 

**Learn how you can make** :

* [Same Currency Payouts](/docs/same-currency-payouts)
* [Cross Currency Payouts](/docs/cross-border-payouts)

### Making Payouts On Your Portal

You must have a Fincra account in order to make payments from your portal. After successfully registering, all you have to do is navigate to the payout tab of the portal and make the payout. The video below will walk you through all you need to know about making payments on your portal.

<Embed url="https://www.youtube.com/watch?v=XUPcYa8YVck" title="How To Make Payouts Via Your Merchant Portal" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/XUPcYa8YVck/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=XUPcYa8YVck" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FXUPcYa8YVck%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DXUPcYa8YVck%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FXUPcYa8YVck%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

**Note:** As you can see in the video, when you try to make payments using the payout API, we ask for information such as payout schemes and destinations. In the following section, we will go over payment schemes and payment destinations in detail.

## Payment Destination

This is the type of account you want to send your payments to. Find the payment destinations we currently support at Fincra below

| Payment destination | API value             |
| :------------------ | :-------------------- |
| Bank accounts       | bank\_account         |
| Mobile money wallet | mobile\_money\_wallet |
| Fincra Account      | wallet                |
| Cash PickUp         | cash\_pick\_u         |

## List Of Currencies Supported For Payouts

Please read this [section](supported-currencies-1) to access all currencies to which you can make payouts.

## Payout Status

 A Payout request can have any of the statuses we support on Fincra. Please see the table below for more descriptions of the statuses we support.

> 📘 Note
>
> Kindly update your transactions status ONLY when you get the below status explicitly from our end. Any other status should be disregarded.

| S/N | status     | Description                                |
| :-- | :--------- | :----------------------------------------- |
| 1   | successful | The payout is successful                   |
| 2   | processing | The payout is neither successful or failed |
| 3   | failed     | The payout has failed                      |

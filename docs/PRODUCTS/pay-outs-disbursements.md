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

- Local and International [ bank accounts ](bank-account)
- [ Mobile money wallets](mobile-money-wallet)
- Another Fincra account by using the [Fincra to Fincra transfer API](fincra-account-to-account-transfer)

## Same Currency Payout vs Cross Currency Payout

The Payout API lets you transfer money to an account in the same currency as well as to an account in a different currency. Both bank account transfers and mobile money transfers have this feature available.  
You can perform these transfers both through your portal and using the API. 

**Learn how you can make **:

- [Same Currency Payouts](/docs/same-currency-payouts)
- [Cross Currency Payouts](/docs/cross-border-payouts)

### Making Payouts On Your Portal

You must have a Fincra account in order to make payments from your portal. After successfully registering, all you have to do is navigate to the payout tab of the portal and make the payout. The video below will walk you through all you need to know about making payments on your portal.

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXUPcYa8YVck%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXUPcYa8YVck&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXUPcYa8YVck%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=XUPcYa8YVck",
  "title": "How To Make Payouts Via Your Merchant Portal",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/XUPcYa8YVck/hqdefault.jpg",
  "provider": "https://www.youtube.com/",
  "href": "https://www.youtube.com/watch?v=XUPcYa8YVck",
  "typeOfEmbed": "youtube"
}
[/block]


**Note: ** As you can see in the video, when you try to make payments using the payout API, we ask for information such as payout schemes and destinations. In the following section, we will go over payment schemes and payment destinations in detail.

## Payment Destination

This is the type of account you want to send your payments to. Find the payment destinations we currently support at Fincra below

| Payment destination | API value           |
| :------------------ | :------------------ |
| Bank accounts       | bank_account        |
| Mobile money wallet | mobile_money_wallet |
| Fincra Account      | wallet              |
| Cash PickUp         | cash_pick_u         |

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
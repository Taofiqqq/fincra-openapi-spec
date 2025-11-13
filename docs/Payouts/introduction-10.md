---
title: Overview
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
Your Fincra account can be used to send money across different countries and currencies. Fincra provides different options to match your use case. With Fincra you can transfer to bank accounts, mobile money wallets, and other Fincra accounts.

**Learn how you can make payments to**:

- Local and International [ bank accounts ](/docs/making-bank-account-transfers)
- [ Mobile money wallets](/docs/mobile-money-transfers)
- Another Fincra account by using the [Fincra to Fincra transfer API](/docs/wallet-to-wallet-transfer-api-1)

## Local Payout vs Cross Border Payout

The Payout API lets you transfer money to an account in the same currency as well as to an account in a different currency. Both bank account transfers and mobile money transfers have this feature available.  
You can perform these transfers both through your portal and using the API. 

**Learn how you can make **:

- [Local Payouts](/docs/same-currency-payouts)
- [Cross Border Payouts](/docs/cross-border-payouts)

### Making Payouts On Your Portal

You must have a Fincra account in order to make payments from your portal. After successfully registering, all you have to do is navigate to the payout tab of the portal and make the payout. The video below will walk you through all you need to know about making payments on your portal.


[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXUPcYa8YVck%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXUPcYa8YVck&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXUPcYa8YVck%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=XUPcYa8YVck",
  "title": "How To Make Payouts Via Your Merchant Portal",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/XUPcYa8YVck/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=XUPcYa8YVck"
}
[/block]


### Making Payouts Using Payout API

If you are technically savvy and can code in any programming language, all you have to do is follow the payment instructions to:

- [Bank accounts](/v2.0/docs/making-bank-account-transfers)
- [Mobile Money wallets](/v2.0/docs/mobile-money-transfers)

**Note: ** As you can see in the video, when you try to make payments using the payout API, we ask for information such as payout schemes and destinations. In the following section, we will go over payment schemes and payment destinations in detail.

## Payment Destination

This is the type of account you want to send your payments to. Find the payment destinations we currently support at Fincra below

| Payment destination | API value           |
| :------------------ | :------------------ |
| Bank accounts       | bank_account        |
| Mobile money wallet | mobile_money_wallet |
| Fincra Account      | wallet              |
| Cash PickUp         | cash_pick_up        |

## List Of Currencies Supported For Payouts

Please read this [section](https://docs.fincra.com/docs/supported-currencies) to access all currencies to which you can make payouts.

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

## Payout Errors

Below are lists of errors that can be encountered on calling payout endpoints.

| Error Type                   | Message                                                                                                                                 | Action to take                                                                                                                          |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| NO_ENOUGH_MONEY_IN_WALLET    | You don't have enough money in your wallet to make this payout                                                                          | Please ensure your balance is funded and retry the payout                                                                               |
| INVALID_QUOTE                | Invalid quote supplied                                                                                                                  | Please generate a new quote and retry the payout                                                                                        |
| RESOURCE_NOT_FOUND           | Payout not found                                                                                                                        | Please requery the transaction until you get a definitive response status(processing, failed, successful) from Fincra                   |
| QUOTE_NOT_GENERATED          | Error occurred while generating a quote                                                                                                 | Please retry the request                                                                                                                |
| DUPLICATE_CUSTOMER_REFERENCE | Cannot continue, Duplicate Customer Reference Passed                                                                                    | Please retry the request with a unique customer reference                                                                               |
| UNPROCESSABLE_ENTITY         | Quote Reference not specified, Kindly generate a quote first to continue.                                                               | Happens when you initiate a cross currency payout. Please generate a quote first and supply the reference when re-initiating the payout |
| UNPROCESSABLE_ENTITY         | Destination currency (${destinationCurrency}) not supported                                                                             | please check the API documentation for supported currencies you can payout to                                                           |
| UNPROCESSABLE_ENTITY         | Payment destination ${paymentDestination} not supported for currency ${destinationCurrency}, kindly supply a valid payment destination. | please check the API documentation for supported payment destinations                                                                   |
| UNPROCESSABLE_ENTITY         | ${currency} currency not supported                                                                                                      | please check the API documentation for supported currencies                                                                             |
| UNPROCESSABLE_ENTITY         | Beneficiary country is required                                                                                                         | Happens when you initiate an international payout. Please supply the beneficiary country in the payload                                 |
| SERVICE_UNAVAILABLE          | Error occurred during operation. Please try again later.                                                                                | Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra                |
| INTERNAL_SERVER_ERROR        | Error occured during operation. We're currently checking why this is happening.                                                         | Please requery the transaction until you get a definitive response status(processing, failed and successful) from Fincra                |
| VALIDATION_FAILED            | Validation failed                                                                                                                       | please re-check the request payload sent for validation error and try again                                                             |
| ACCESS_DENIED                | Access denied to requested resource                                                                                                     | Please contact Fincra support team                                                                                                      |
| OPERATION_FORBIDDEN          | Operation forbidden                                                                                                                     | Please contact Fincra support team                                                                                                      |

## Beneficiary Types

A beneficiary is a person or organization whom you want to send money or make payments to

| Beneficiary Type | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| individual       | An individual that is the sole beneficiary of the payment.              |
| corporate        | An organization or company that is the sole beneficiary of the payment. |
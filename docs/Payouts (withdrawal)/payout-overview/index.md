---
title: Overview
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
Your Fincra account can be used to send money across different countries and currencies. Fincra provides different options to match your use case. With Fincra you can transfer to bank accounts, mobile money wallets, stablecoin wallets, and other Fincra accounts.

**Learn how you can make payments to**:

- Local and International  bank accounts&#x20;
- &#x20;Mobile money wallets
- Stablecoin wallets
- Another Fincra account by using the Fincra to Fincra transfer API

## Supported Payout Currencies

| Currency | Supported Methods                       |
| :------- | :-------------------------------------- |
| NGN      | Bank Account                            |
| GHS      | Mobile Money, Bank Account              |
| KES      | Mobile Money, Bank Account              |
| UGX      | Mobile Money, Bank Account              |
| ZMW      | Mobile Money, Bank Account              |
| TZS      | Mobile Money, Bank Account              |
| XAF      | Mobile Money, Bank Account              |
| XOF      | Mobile Money, Bank Account              |
| ZAR      | Bank Account                            |
| EGP      | Cash Pickup, Mobile Money, Bank Account |
| USD      | Bank Account                            |
| EUR      | Bank Account                            |
| GBP      | Bank Account                            |
| USDT     | Crypto Wallet                           |
| USDC     | Crypto Wallet                           |
| CNGN     | Crypto Wallet                           |

## Local Payout vs Cross Border Payout

The Payout API lets you transfer money to an account in the same currency as well as to an account in a different currency. Both bank account transfers and mobile money transfers have this feature available.<br />You can perform these transfers both through your portal and using the API.

**Learn how you can make** :

- [Local Payouts](/docs/same-currency-payouts)
- [Cross Border Payouts](/docs/cross-border-payouts)

## Stablecoin Payout

The Stablecoin Payout API allows you to send funds directly to cryptocurrency wallets using supported stablecoin networks. You can disburse stablecoins to recipients globally without relying on traditional banking rails.
Stablecoin payouts are available through both your portal and the API

**Learn how you can make** :

- [Stablecoin Payouts](/docs/stablecoin-payouts)

### Making Payouts On Your Portal

You must have a Fincra account in order to make payments from your portal. After successfully registering, all you have to do is navigate to the payout tab of the portal and make the payout. The video below will walk you through all you need to know about making payments on your portal.

<Embed title="" typeOfEmbed="youtube" url="https://www.youtube.com/watch?v=XUPcYa8YVck" href="https://www.youtube.com/watch?v=XUPcYa8YVck" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FXUPcYa8YVck%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DXUPcYa8YVck%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FXUPcYa8YVck%252Fhqdefault.jpg%26key%3Df2aa6fc3595946d0afc3d76cbbd25dc3%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

### Making Payouts Using Payout API

If you are technically savvy and can code in any programming language, all you have to do is follow the payment instructions to:

- [Bank accounts](/v2.0/docs/making-bank-account-transfers)
- [Mobile Money wallets](/v2.0/docs/mobile-money-transfers)
- [Stablecoin Payouts](/docs/stablecoin-payouts)

**Note:** As you can see in the video, when you try to make payments using the payout API, we ask for information such as payout schemes and destinations. In the following section, we will go over payment schemes and payment destinations in detail.

## Payment Destination

This is the type of account you want to send your payments to. Find the payment destinations we currently support at Fincra below

| Payment destination | API value           |
| :------------------ | :------------------ |
| Bank accounts       | bank_account        |
| Mobile money wallet | mobile_money_wallet |
| Fincra Account      | wallet              |
| Cash PickUp         | cash_pick_up        |
| Crypto Wallet       | crypto_wallet       |

## List Of Currencies Supported For Payouts

Please read this [section](https://docs.fincra.com/docs/supported-currencies) to access all currencies to which you can make payouts.

## Payout Status

A Payout request can have any of the statuses we support on Fincra. Please see the table below for more descriptions of the statuses we support.

<Callout icon="📘" theme="info">
  ### Note

  Kindly update your transactions status ONLY when you get the below status explicitly from our end. Any other status should be disregarded.
</Callout>

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

<br />

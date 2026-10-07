---
title: Cards Overview
excerpt: Issue virtual cards to your customers and fund them from your Fincra wallet.
deprecated: false
hidden: true
metadata:
  robots: index
---
Issue virtual cards to your customers. Fincra issues the card, you fund it from your Fincra wallet, and the cardholder spends online.

Card issuing uses these objects. You make the setup objects once, then reuse them.

| Object           | What it is                                                                        | Ready when                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Card product     | The product a card is issued under. It sets the scheme.                           | `activationStatus` is `active`.                                                         |
| Business program | How a set of cards is funded and authorised. You pass one when you create a card. | `status` is `active`.                                                                   |
| Cardholder       | The party the card is issued to.                                                  | `verificationStatus` is not `rejected`. Fincra sends `cardholder.validation.completed`. |
| Card             | One card issued to a cardholder.                                                  | `status` is `active`. Fincra sends `card.created`.                                      |
| Transaction      | One funding, spend or reversal on a card.                                         | Recorded as it happens.                                                                 |

```mermaid
sequenceDiagram
    participant You
    participant Fincra
    You->>Fincra: POST /issuing/card_products/{id}/activate
    You->>Fincra: POST /issuing/cardholders
    Fincra-->>You: cardholder.validation.completed
    You->>Fincra: POST /issuing/cards
    Fincra->>Fincra: Issue the card
    Fincra-->>You: card.created
    You->>Fincra: POST /issuing/cards/{id}/activate
    You->>Fincra: POST /issuing/cards/{id}/fund
    Fincra-->>You: card.funding.completed
```

## Three things to know

**A card spends from a balance you load.** A card is not an account. A card is either prepaid, which you fund from your wallet before the cardholder spends, or debit, which draws on your funds and asks your server to authorise each spend. Most merchants use prepaid. See [Cards](doc:card-issuing-cards).

**Full card details are never returned in plain text on a normal call.** You reveal the card number, the security code and the expiry through a separate, single-use flow. See [Fund and reveal a card](doc:card-issuing-fund-and-reveal).

**A business outside Nigeria needs a Nigerian director.** To issue a card to a business registered outside Nigeria, at least one director must be Nigerian. Each cardholder needs a unique email, phone number, and identity number.

## Card statuses

| Status      | What it means                                                       |
| :---------- | :------------------------------------------------------------------ |
| `pending`   | Fincra is still issuing the card.                                   |
| `inactive`  | Created, not yet activated. The card cannot transact.               |
| `active`    | Live. The card transacts once it is funded.                         |
| `cancelled` | Closed. A terminated card is cancelled and cannot return to active. |

A card also carries `isFrozen`. A frozen card is blocked for now, and you unfreeze it to restore it. Freezing is separate from the status.

## Card products

Fincra issues three Mastercard products. Two are business cards, Business Standard and Business World. The third is a consumer card, Platinum. You choose the product when you create a card, and Fincra enables each product for your business separately.

| Product                      | Who it is for                        | Easy Savings Specials |
| :--------------------------- | :----------------------------------- | :-------------------- |
| Mastercard Business Standard | Growing companies that spend online. | Yes                   |
| Mastercard Business World    | Business leaders who travel.         | Yes                   |
| Mastercard Platinum          | Individual cardholders.              | No                    |

### The two business cards

Both business cards work anywhere Mastercard is accepted online, protect against unauthorised transactions, and carry the same Easy Savings Specials offers. The difference is the holding fee and the travel benefits.

|                                                  | Business Standard | Business World       |
| :----------------------------------------------- | :---------------- | :------------------- |
| Online purchase, anywhere Mastercard is accepted | Yes               | Yes                  |
| Protection against unauthorised transactions     | Yes               | Yes                  |
| Easy Savings Specials                            | Yes               | Yes                  |
| Pay in China with Alipay and WeChat Pay          | Yes               | Yes                  |
| Premium travel benefits                          | —                 | Yes                  |
| Holding fee                                      | Free to hold      | A quarterly card fee |

**Business Standard** is a free business card. It works anywhere Mastercard is accepted online, protects against unauthorised transactions, and gets the Easy Savings Specials offers. It costs nothing to hold.

**Business World** is built for business leaders who travel. It pairs the business card's protection with premium travel benefits: lounge access, hotel and car rental offers, travel insurance, and VIP VAT refunds.

For the fee on each card, see your fee schedule or ask your account manager.

### Easy Savings Specials

Easy Savings Specials is a Mastercard programme of about 200 business offers, built around the tools a business already pays for: software, advertising, workspaces and transport such as ride-hailing. Named partners include DocuSign, Zoho, Xero, Monday.com, Adobe, Google Ads, TikTok for Business, Udemy, Regus, SAP, Uber and Bolt. The offers apply worldwide and in Nigeria. A cardholder browses the offers at [easysavingsspecials.com](https://www.easysavingsspecials.com/en/), selects one, and provides the first digits of the card number to get a checkout code. Business cards carry Easy Savings Specials; consumer cards do not.

### Pay in China with Alipay and WeChat Pay

A business cardholder can link the card to Alipay or WeChat Pay and pay in person in China. This gives a route to Chinese suppliers who take neither dollars nor a card at the till. The link works for in-person purchases in China only.

### Mastercard Platinum

Platinum is a consumer card for individual cardholders. It works anywhere Mastercard is accepted online and protects against unauthorised transactions. Its benefit set is being finalised. A consumer card does not carry Easy Savings Specials.

## Before you begin

Put these five things in place first.

1. **An API key with the card issuing permission.** Get the key from your dashboard. See [Authentication](doc:authentication).
2. **Card issuing enabled for your business.** Ask your account manager.
3. **A funded wallet.** Fincra funds each card from your wallet.
4. **Your server IP addresses on the allow-list.** Production only. See [IP Whitelisting](doc:ip-whitelisting).
5. **A webhook URL.** Fincra sends `card.created`, `cardholder.validation.completed` and the funding status to it. See [Webhooks](doc:webhooks).

## Base URLs

Every card issuing call sits under the `/issuing` prefix.

| Calls                      | Sandbox                                 | Production                       |
| :------------------------- | :-------------------------------------- | :------------------------------- |
| All card issuing endpoints | `https://sandboxapi.fincra.com/issuing` | `https://api.fincra.com/issuing` |

Send your API key in the `api-key` header on every call.

```bash
curl https://api.fincra.com/issuing/card_products \
  -H "api-key: $FINCRA_API_KEY"
```

The one exception is the card-details reveal call, which uses a short-lived token instead of your API key. See [Fund and reveal a card](doc:card-issuing-fund-and-reveal).

## Test in the sandbox first

Run the whole flow in the sandbox with your test key before you go live: activate a card product, create a cardholder, create and activate a card, fund it, reveal the details, then read the balances and transactions.

| The sandbox does                                     | The sandbox does not                                      |
| :--------------------------------------------------- | :-------------------------------------------------------- |
| Validate every field and return every error.         | Issue a real card.                                        |
| Return every object, so you can walk the whole flow. | Move real money.                                          |
|                                                      | Check the IP allow-list or the Know Your Business status. |

When you go live, put your production IPs on the allow-list, get your Know Your Business status approved, set your live webhook URL, and switch the base URL to `https://api.fincra.com/issuing` with your live key.

## What is enabled for you

Fincra enables card issuing for each merchant one at a time, and sets the schemes, currencies and card types your business can issue. Ask your account manager what is enabled for you, and for your card limits and fees.

<Callout icon="📘" theme="info">
  ### Ask before you go live

  Tell your account manager before you issue your first card. Fincra turns the product on for each merchant one at a time.
</Callout>

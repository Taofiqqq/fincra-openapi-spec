---
title: Multicurrency Account
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: Multi Currency Account API
  description: >-
    Our Multicurrency account solution, simplifies international payments and
    provides seamless access to multicurrency accounts, which enables merchants
    to issue named EUR and USD accounts to individuals.
  image: >-
    https://files.readme.io/ed35f1d0c022faaa714e1f8ed63aef12748c2d99027fc033b86a7cebdacbcd13-website_header.png
  robots: index
next:
  description: ''
---
# Multicurrency Account

The Multicurrency Account lets your business collect money in foreign currency from customers in other countries. Your business can hold an account in its own name. Your business can also issue accounts that carry the names of your own customers.

Fincra onboards businesses. Fincra does not onboard an individual directly. An account in a person's name always belongs to a business that Fincra has onboarded.

<Callout icon="📘" theme="info">
  ### **Note**

  Read these three points before you build.

  - **Fincra reviews every request and can decline it.** An approval is never guaranteed before the review is complete. Tell your customer this before they collect their documents.
  - **The monthly figure of 10,000 applies to an account issued in the name of an individual.** It is not the limit on a business account. Fincra confirms the limit on a business account when it issues the account.
  - **An account in the name of an individual is available in the euro and the Canadian dollar.** For the US dollar and the British pound, request a corporate account.
</Callout>

## Purpose

The Multicurrency Account gives your business a local presence in a currency without a banking relationship in that country. Your customer pays into an account in the currency they already hold, on the payment scheme they already use. You receive the money in your Fincra wallet.

Use it to collect from a foreign buyer, to pay a foreign worker, or to give each of your own customers an account in their own name.

## How it works

1. Your business is onboarded and approved by Fincra.
2. You request an account. You send the account holder's details and documents through the API.
3. Fincra reviews the request and tells you the outcome by webhook.
4. Fincra issues the account and returns the account details.
5. You give those details to the payer.
6. Money the payer sends settles to your Fincra wallet.

## Supported Currencies

| Currency Name   | Currency Code | Payment Schemes         | Availability                                                    |
| --------------- | ------------- | ----------------------- | --------------------------------------------------------------- |
| US Dollar       | USD           | ACH, SWIFT, Fedwire     | Live. Corporate accounts.                                       |
| Euro            | EUR           | SEPA, SEPA Instant      | Live. Corporate accounts, and accounts named for your customer. |
| British Pound   | GBP           | FPS, CHAPS              | Live. Corporate accounts.                                       |
| Canadian Dollar | CAD           | Interac e-Transfer, EFT | Live. Request the Interac alias separately from the account.    |

Fincra sends money out in the US dollar, the euro, the British pound and the Chinese yuan. A payout is a separate product. Read the Payouts section.

## How transactions are treated

1. The payer sends money by bank transfer to the account details, on one of the payment schemes listed for that currency.
2. The money settles to your Fincra wallet. It does not stay in the virtual account.

The payer must enter the account holder's first name and last name exactly as Fincra registered them.

Fincra reviews a payment in these cases.

- The sender's name does not match the account name.
- A single payment is above 2,000 in the account currency.
- It is the third payment into the account in one day.

A review is not the monthly limit. A payment inside the monthly limit still meets these three rules.

Fincra deducts its fee in your wallet at settlement. A payment below 10 in the account currency settles to your wallet with the fee taken there.

## Whitelisted Third Party Transactions

A third-party payment is a payment from a sender whose name does not match the account name. Fincra checks it automatically.

1. Fincra raises a request for information by itself.
2. The money settles when the answer arrives inside 48 hours. Treat 48 hours as the absolute maximum, and answer sooner.
3. Fincra then adds that sender to the approved list for this account. A later payment from the same sender settles by itself.

A payment that nobody answers in time is returned to the sender.

An account held by a licensed financial institution cannot receive a third-party payment at all. Any payment into it from a name that does not match the account name is returned to the sender.

## CHARGEBACK AND REFUNDS

A chargeback is a payment the sender's bank reclaims after the money has settled.

- Fincra debits the amount of the chargeback from your wallet.
- Fincra charges a chargeback fee of €15 for a euro payment, or $35 for a US dollar payment.
- Fincra asks you for evidence. Send it inside the window given in the request.
- Fincra monitors the share of your payments that end in a chargeback. Read the ratio below.

### CHARGEBACK RATIO:

The chargeback ratio is the value of chargebacks divided by the value of payments received, in the same period.

1. **Below 0.1 per cent.** Normal. No action.
2. **0.1 per cent to 0.49 per cent.** Fincra monitors the account.
3. **0.5 per cent to 0.99 per cent.** Fincra asks you for a written plan to bring the ratio down.
4. **1 per cent and above.** Urgent. Fincra can suspend account issuing, and can close accounts, until the ratio falls.

## Account Issuing Requirement

The applicant must be a business. These rules apply to the US dollar, the euro and the British pound.

- **A business that is not a financial institution** — a manufacturer, a trading company, a marketplace. Accepted. It can receive money from individuals and from businesses.
- **A licensed financial institution.** Accepted. It can receive money only from a sender whose name matches the account name.
- **A fintech.** Accepted where it holds at least one licence — a Payment Solution Service Provider licence in Nigeria, a Money Services Business registration in Canada, or the equivalent in its own country. Fincra does not issue these accounts to a fintech with no licence.
- **A company registered in the United States.** Not accepted. Present a company registered outside the United States.
- **A business registered in Nigeria.** Accepted.

Read the prohibited activities and countries page before you apply.

## Closing a Virtual Account

Fincra closes an account in these cases.

- You ask Fincra to close it.
- The account holder no longer meets the requirements on this page.
- Fincra's review of the account requires it.

Fincra sends the `virtualaccount.closed` webhook with the reason. A closed account cannot be reopened. Request a new account instead.

## Impact of Closing an IBAN

A closed account stops receiving money at once.

**Money sent to a closed account.** The payment is returned to the sender. The sender's bank can charge them for the return.

**Money already settled.** It stays in your Fincra wallet. Closing the account does not affect money that has already settled.

**The account holder.** Tell them before the account closes, and give them the new account details if you have requested a replacement. A payer using old details will have the payment returned.

## Use Cases

- **Marketplaces and platforms.** Issue an account in each seller's own name, and collect that seller's money under their own name.
- **Payment and remittance companies.** Collect in foreign currency for your own customers, on one integration.
- **Importers and exporters.** Receive payment from a foreign buyer in the buyer's own currency, without a bank account in that country.
- **Payroll and contractor platforms.** Issue an account in the name of each worker you pay.
- **Aggregators collecting into Africa.** Collect in the US dollar, the euro or the British pound, and settle through Fincra.

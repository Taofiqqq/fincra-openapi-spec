---
title: CAD Virtual Account (Interac e-Transfer)
excerpt: >-
  Receive Canadian Dollars from Canadian payers through Interac e-Transfer using
  your Fincra-issued Interac email.
deprecated: false
hidden: false
metadata:
  robots: index
---
Fincra CAD virtual accounts let you receive Canadian Dollars (CAD) from Canadian payers through Interac e-Transfer, Canada's account-to-account payment network.

Instead of an account number, Fincra issues you an **Interac email** — a unique email-style identifier in the format `merchantname@fincra.ca`, registered on the Interac network and linked to your CAD balance. Any Interac e-Transfer sent to your Interac email is automatically deposited into your CAD balance.

API Reference: [create virtual account endpoint](/reference/create-fcy-virtual-account)

<Callout icon="📘" theme="info">
  ### Important

  - This product is available to Individual and Corporate merchants approved through Fincra's CAD onboarding process.
  - Your Interac email has Auto Deposit enabled. Funds gets settled into your CAD balance automatically.
  - Payers can only send CAD. Interac e-Transfer is a Canadian rail and does not support other currencies.
  - Most transfers credit to your CAD balance within minutes.
  - Collected CAD stays in your CAD balance. It does not auto-convert on receipt, you decide when and how much to convert.
  - You get one Interac email per merchant profile. It is your permanent CAD collection identifier.
</Callout>

## How it works

### Getting your Interac email

1. Complete your KYC/KYB verification.
2. Request a CAD virtual account via API or the dashboard.
3. Fincra generates your Interac email and registers it on the Interac network, with Auto Deposit enabled.
4. You receive a notification once your Interac email is active and ready to receive CAD.

### Receiving a payment

1. Share your Interac email (`merchantname@fincra.ca`) with your Canadian payer.
2. The payer logs into their Canadian bank's online banking or app and sends an Interac e-Transfer to your Interac email.
3. Funds are deposited automatically. The payer is not asked a security question, and you do not need to accept the transfer.
4. Your CAD balance is credited, and a webhook notification is sent to you.
5. The collection appears in your dashboard and is retrievable via API.

## API Guide

### 1 - Request a CAD virtual account

CAD accounts are requested the same way as other FCY virtual accounts, with `currency` set to `CAD`. Follow the request guide for your merchant type:

- [Request FCY Account \[Individual\]](request-fcy-virtual-account)
- [Request FCY Account \[Corporate\]](request-fcy-corporate-virtual-account)

Endpoint:

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```

Once your request is approved, Fincra generates your Interac email and notifies you when it is active.

2 - Retrieve your Interac email

Fetch your CAD account details, including your Interac email:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/?currency=cad
```

You can also fetch a single account by its ID:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```

Your Interac email is also displayed in your Merchant Portal.

3 - Get notified of collections

When a payer sends an Interac e-Transfer to your Interac email, Fincra credits your CAD balance and sends a webhook notification to your configured webhook URL. See Virtual Account Webhook for how to receive and validate webhook notifications.

Each collection is recorded with a unique transaction reference. Your balance, incoming collection history, and conversion history are all visible in your Merchant Portal and retrievable via API.

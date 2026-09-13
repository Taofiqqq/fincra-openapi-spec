---
title: Send CAD payouts via Interac e-Transfer
excerpt: >-
  Verify a recipient’s Interac Autodeposit status and send CAD payouts from your
  CAD balance or another supported currency.
deprecated: false
hidden: false
metadata:
  robots: index
---
Use Fincra to send Canadian dollars directly to a recipient’s Canadian bank account through Interac e-Transfer.

The recipient is identified using the email address registered for Interac Autodeposit. You do not need their bank account number.

This guide explains how to:

- Verify that the recipient has Interac Autodeposit enabled.
- Send CAD from your CAD wallet.
- Send CAD from another supported currency, such as KES.
- Track the payout until it succeeds or fails.

```mermaid
flowchart TD
  A["Collect recipient's<br/>Interac email"] --> B["Verify email and<br/>Autodeposit status"]
  B --> C{"Autodeposit<br/>enabled?"}
  C -->|Enabled| D["Generate a quote<br/>if currencies differ"]
  C -->|Disabled| E["Stop and ask the recipient<br/>to enable Autodeposit"]
  D --> F["Create the payout"]
  F --> G["Track the payout<br/>using webhooks"]
```

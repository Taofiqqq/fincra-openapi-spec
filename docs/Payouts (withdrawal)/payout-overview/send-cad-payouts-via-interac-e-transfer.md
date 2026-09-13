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
  A["Collect recipient's Interac email"] --> B["Verify email and Autodeposit status"]
  B --> C{"Autodeposit enabled?"}
  C -->|No| D["Stop and ask the recipient to enable Autodeposit"]
  C -->|Yes| E{"Source and destination currencies differ?"}
  E -->|Yes| F["Generate a quote"]
  E -->|No| G["Create the payout"]
  F --> G
  G --> H["Track the payout using webhooks"]
```

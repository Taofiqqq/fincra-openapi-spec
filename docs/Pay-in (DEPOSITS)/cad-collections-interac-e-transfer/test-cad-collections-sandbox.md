---
title: Test CAD Collections (Sandbox)
excerpt: >-
  Simulate a CAD Interac e-Transfer collection in the Sandbox environment to
  test your integration and verify your webhook listeners before going live.
deprecated: false
hidden: false
metadata:
  robots: index
---
In the Sandbox environment, you can simulate a CAD Interac e-Transfer collection without moving real funds. A simulation goes through the same collection pipeline as a live transfer: it credits your Sandbox CAD wallet and dispatches the same webhook your server will receive in production.

> The simulation endpoint is available in the Sandbox environment only. It has no equivalent in Live (Production), where collections are triggered by real Interac e-Transfers from your payers.

<br />

## Before you begin

You need the following in your Sandbox account:

| Requirement                     | Description                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| An approved CAD virtual account | The account must have a status of `approved`. See [CAD Collections (Interac e-Transfer)](doc:cad-collections-interac-e-transfer) to request one. |
| Your Interac email alias        | The email address assigned to your CAD virtual account. CAD collections are addressed to this alias, not to an account number.                   |
| Your Sandbox API key            | Used to authenticate the request. See [Authentication](doc:authentication).                                                                      |
| A configured webhook URL        | Required only if you want to see the webhook format. See [Setup Webhook](doc:setup-webhook).                                                     |

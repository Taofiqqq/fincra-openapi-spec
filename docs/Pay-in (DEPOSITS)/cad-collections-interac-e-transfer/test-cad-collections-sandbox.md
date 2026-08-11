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

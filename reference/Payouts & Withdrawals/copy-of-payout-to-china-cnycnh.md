---
title: CAD Payout (Interac e-Transfer)
deprecated: false
hidden: false
metadata:
  robots: noindex
---
## How it works

1. Verify the recipient's Interac email.
2. Generate a quote when the source currency is not CAD.
3. Create the CAD payout.
4. Track the final status through payout webhooks.

## Supported flows

| Flow                              | Quote required |
| :-------------------------------- | :------------- |
| CAD to CAD                        | No             |
| Another supported currency to CAD | Yes            |

## Before you begin

You need your API credentials, business ID, a funded source wallet, and the recipient's Interac Autodeposit email.

## Related endpoints

- Verify an Interac Recipient
- Generate a Quote
- Create a CAD Interac Payout
- Verify Payout Status
- Payout Webhooks

---
title: CAD Payout (Interac e-Transfer)
excerpt: >-
  Send Canadian dollar payouts directly to recipients' Canadian bank accounts
  using their verified Interac Autodeposit email.
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

- [Verify an Interac Recipient](https://docs.fincra.com/reference/verify-account-number)
- [Generate a Quote](https://docs.fincra.com/reference/generate-quote)
- [Create a CAD Interac Payout](https://docs.fincra.com/reference/create-cad-payout)
- [Verify Payout Status](https://docs.fincra.com/reference/verify-payout-status-by-reference)
- [Payout Webhooks](https://docs.fincra.com/docs/payout-webhook)

New to CAD Interac payouts? Follow the [Send CAD payouts via Interac e-Transfer](/docs/send-cad-payouts-via-interac-e-transfer) guide for the complete integration flow.

<br />

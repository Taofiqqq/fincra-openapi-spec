---
title: CAD Collections (Interac e-Transfer)
excerpt: >-
  Receive Canadian Dollars from Canadian payers through Interac e-Transfer,
  Canada's real-time payment network.
deprecated: false
hidden: false
metadata:
  robots: index
---
Fincra's CAD collection product lets you receive Canadian Dollars (CAD) from Canadian payers through **Interac e-Transfer**, Canada's dominant real-time payment network. Interac is embedded in virtually every Canadian bank, including RBC, TD, Scotiabank, BMO, and CIBC, and is used by 9 in 10 Canadians.

Instead of an account number, you are issued a unique **Interac collection alias**, an email address in the format `merchantname@fincra.ca`. Canadian payers send an Interac e-Transfer to this email from their bank, and funds are automatically credited to your Fincra CAD wallet. You don't need a Canadian bank account.

## How it works

1. **Request a CAD collection account** through the API or Merchant Portal and complete KYC/KYB verification.
2. Once approved, Fincra generates your **Interac collection alias** and registers it on the Interac network with **Autodeposit** enabled.
3. Share your alias with your Canadian payer.
4. The payer logs into their bank, initiates an Interac e-Transfer, and enters your alias as the recipient email.
5. Funds are deposited automatically. No security question, no manual acceptance.
6. Your Fincra CAD wallet is credited, a collection webhook is sent to you, and the transaction appears in your Merchant Portal and via API.

## Key things to know

- **Payers send CAD only.** Interac e-Transfer is a Canadian domestic rail.
- **Autodeposit is always enabled.** The payer experience is identical to any other e-Transfer they send.
- **Funds stay in your CAD wallet** until you choose to convert. There is no forced conversion; you initiate CAD-to-NGN (or other supported currency) conversion at your preferred time, then settle through existing payout rails.
- **Most transfers arrive within minutes**, as Interac e-Transfer is near real-time across most Canadian banks.
- Both **Individual and Corporate** merchants can be enabled, subject to CAD onboarding approval.

## Getting started

1. Create a CAD collection account via the [Create CAD Collection Account](https://docs.fincra.com/reference/create-cad-collection-account) endpoint.
2. Retrieve your assigned alias via API or view it in your Merchant Portal.
3. Start sharing your alias with Canadian payers.

For endpoint definitions, request and response schemas, and code samples, see the [CAD (Interac e-Transfer) API Reference](https://docs.fincra.com/reference/cad-interac-e-transfer).

---
api:
  file: awesome-new-api.json
  operationId: verify-account-number
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Callout icon="⚠️" theme="warn">
  ### Note

  - Please note that when validating an IBAN (`iban`) or NUBAN (`nuban`) there should be no spaces between the values, as this would return an error response.
  - For `ZAR` bank account verification using PayShap, send the full PayShap ID (including everything after the `@`) as the `accountNumber`, and use `PAYSHAP_ID` as the `bankCode`.
</Callout>

## Verify an Interac recipient

Use `type=interac_etransfer` before creating a CAD Interac payout. It checks whether the recipient's email is registered for Interac Autodeposit.

The endpoint does not create or submit a payout. Only proceed with the payout when `autoDepositEnabled` is true.

<Callout icon="📘" theme="info">
  ### Confirm the resolved account name

  When `autoDepositEnabled` is true, confirm the returned `accountName` and use it as `beneficiary.accountHolderName` when creating the payout.
</Callout>

<Callout icon="🚧" theme="warn">
  ### Autodeposit not enabled

  `autoDepositEnabled: false` is a successful resolution response, not an API error. Do not create the payout. Ask the recipient to enable Interac Autodeposit and verify the email again.
</Callout>

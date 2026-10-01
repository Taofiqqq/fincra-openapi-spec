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
</Callout>

## Verify a PayShap ID

Use `type=bank_account` with `currency=ZAR` to verify a PayShap ID. A PayShap ID is an alias for a South African bank account. For ZAR, PayShap is currently the only supported verification method.

Set `bankCode` to `PAYSHAP_ID` and send the full PayShap ID in `accountNumber`, in the format `number@bank`, for example `0713058274@nedbank`.

If the PayShap ID cannot be validated, the request returns a `422` with `errorType: UNPROCESSABLE_ENTITY`. Handle the failure using the status code and `errorType`, not the `error` text, because the text can change.

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

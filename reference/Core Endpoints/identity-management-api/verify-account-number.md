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
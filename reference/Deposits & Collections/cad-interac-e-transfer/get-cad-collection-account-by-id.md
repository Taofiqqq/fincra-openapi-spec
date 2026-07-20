---
api:
  file: awesome-new-api.json
  operationId: get_profile-virtual-accounts-virtualaccountid
hidden: false
link:
  new_tab: false
metadata:
  robots: index
---
Returns the details of a single CAD collection account, including the Interac email under `accountInformation.otherInfo.interacEmail`.

Use the `_id` returned from [Create CAD Collection Account](link-to-create-page) as the `virtualAccountId`.
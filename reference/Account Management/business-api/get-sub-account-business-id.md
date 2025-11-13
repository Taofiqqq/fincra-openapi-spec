---
title: Get sub account business ID
excerpt: >-
  This API lets you retrieves the unique Identifier of your business and other
  information such as your email etc.
api:
  file: awesome-new-api.json
  operationId: get_profile-business
deprecated: false
hidden: true
link:
  new_tab: false
  url: https://docs.fincra.com/reference/sub-accounts
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Response Body

```json
"data": {
        "settings": {
            "feeBearer": "customer",
            "settlementDestination": "wallet",
            "enableWebhook": false,
            "callbackURL": "https://webhook.site/6e8fefa8-f66b-40c8-af0b-dc6cd98bb9e4"
        },
        "status": "enabled",
        "businessTag": 121114,
        "emailSettings": null,
        "isKYCApproved": true,
        "isBlocked": false,
        "_id": "61aa4e72cc67b6f04d97f874",
        "name": "test account",
        "email": "test13@nk.cm",
        "mobile": "08025666566",
        "country": "NG",
        "businessKey": "B-7s93vpswZbEH",
        "createdAt": "2021-12-03T17:05:54.154Z",
        "updatedAt": "2022-07-21T10:09:39.799Z"
    }
```

**Please take note of the following:**\
The `_id`  in data object obtained from the API response   is your business ID.

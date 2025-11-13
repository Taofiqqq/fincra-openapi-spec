---
title: Mandate Webhook
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Event: mandate.successful

This webhook event is triggered when the mandate has been approved by the account owner.

```json
{
  "event": "mandate.approved",
  "data": {
    "amount": 5000,
    "description": "let the test begin",
    "responseDescription": "",
    "startDate": "2024-04-06T00:00:00.000Z",
    "endDate": "2024-04-30T00:00:00.000Z",
    "status": "approved",
    "reference": "mr_01bc59a4-32d6-45e2-9291-e8b2c64b6cfd",
    "createdAt": "2024-04-04T12:06:29.055Z"
  }
}
```
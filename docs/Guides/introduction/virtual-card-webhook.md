---
title: Virtual Card Webhook
excerpt: >-
  The webhook service provides real-time notifications on virtual card
  transactions. To enable this service, a callback URL is required upon
  registration.


  The webhook format is as shown below:
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
```json
{
  "event": "issuing.transaction",
  "data": {
      "amount": 10000,
      "currency": "USD",
      "cardId": "3f0b15e8-af5f-455f-986e-a538ef44ca48",
      "type": "credit",
      "reference": null,
      "description": "Visa Virtual dollar card funding",
      "status": "successful"
  }
}
```

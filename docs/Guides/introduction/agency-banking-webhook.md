---
title: Agency Banking Webhook
excerpt: >-
  The webhook service provides real-time notification of transactions. To enable
  this service, a callback URL is required upon registration.


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
    "terminal_id" : "5930LB43",
    "pan" : "3232**********343",
    "rrn" : "00000001",
    "stan" : "stan",
    "reference" : "FNC_TEST000095",
    "transaction_id" : "a201efa111ab11",
    "serial_number" : "19",
    "amount" : 1000,
    "net_amount" : 900,
    "fee" : 100,
    "customer_info" : "TEST",
    "status_code" : "00",
    "status" : "successful",
    "description" : "description",
    "business_id" : "398b9dc0e0111c06cb27bd7b",
    "created_at": "2022-06-24T08:01:20.000000Z"
}
```
---
title: Charges Webhook (Checkout & Direct Charge)
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
## Event: charge.successful

This webhook event is triggered when payment has been successfully made for a checkout or direct charge that was initiated.

```json
{
  "event": "charge.successful",
  "data": {
    "chargeReference": "fcr-bt-1fdb97899hd82",
    "amountToSettle": 100,
    "id": 892892,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 101.51,
    "amountExpected": 101.51,
    "amountReceived": 101.51,
    "varianceType": null,
    "currency": "NGN",
    "fee": 1.51,
    "vat": 0.11,
    "message": "",
    "actionRequired": null,
    "status": "success",
    "reference": "31c1169c-d535-4e0b-90eb-a03a99c2f334",
    "description": "checkout",
    "type": "bank_transfer",
    "customer": {
      "name": "Customer name",
      "email": "customer@theirmail.com",
      "phoneNumber": "2348189299860"
    },
    "metadata": {},
    "settlementDestination": "wallet",
    "settlementTime": "instant",
    "virtualAccount": {
      "bankName": "globus",
      "id": "6645e0h8s783h8s0ee8f673",
      "bankCode": "103",
      "accountName": "Fincra DevRel",
      "accountNumber": "39973787851",
      "sessionId": "ETZ-09F87348787388OHT",
      "channelName": "globus",
      "payerAccountNumber": "1228939338",
      "payerAccountName": " Fincra DevRel",
      "payerBankName": "Access Bank PLC",
      "payerBankCode": "044",
      "expiresAt": "2024-05-16T10:51:36.000Z",
      "business": "64f1c939hhsu993sf4a710"
    }
  }
}
```
---
title: Status responses and their meanings
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
This document explains the payload response statuses returned by our endpoints. These are commonly seen when consuming the mobile money and card collections endpoint. Note, these applies anywhere and every

 Kindly find the statuses and descriptions.

## List of status descriptions (General)

| Status      | Meaning                                                    | Recommended Action                                                                      |
| :---------- | :--------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **pending** | Transaction is in progress and awaiting user authorization | You can re-query the associated endpoint to check if there has been a change in status. |
| **failed**  | Transaction failed and not processed                       | Mark the transaction as failed on your end                                              |
| **success** | Transaction has been processed successfully                | Mark the transaction as successful                                                      |

Note: A transaction automatically reads as "expired" if it has been pending past two hours.

## List of status descriptions (Checkout)

| Status        | Meaning                                               | Recommended Action                                 |
| :------------ | :---------------------------------------------------- | :------------------------------------------------- |
| **initiated** | Charge has been created                               | Render generated checkout page to complete payment |
| **pending**   | Charge is in progress and awaiting user authorization | Call authorize charge API to authorize payment     |
| **success**   | Charge has been processed successfully                | Mark payment as successful                         |
| **failed**    | Charge failed and not processed                       | Mark payment as failed                             |
| **expired**   | Charge not completed by user                          | Mark payment as failed                             |

Here's a sample of a webhook response for mobile money with status "successful":

```json
{
  "event": "charge.successful",
  "data": {
    "id": 932,
    "authorization": {
      "mode": "NONE",
      "redirect": null
    },
    "auth_model": "NONE",
    "amount": 50000,
    "currency": "NGN",
    "fee": 699.99,
    "message": "Mobile money charged successfully",
    "status": "success",
    "reference": "98329uniwud",
    "description": "",
    "type": "mobile_money",
    "customer": {
      "name": "Fincra Developers",
      "email": "taofiq@fincra.com",
      "phoneNumber": "+2348142986562"
    },
    "settlementDestination": "wallet"
  }
}
}
```

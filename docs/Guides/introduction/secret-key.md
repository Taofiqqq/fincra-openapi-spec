---
title: How To Validate Webhooks
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Merchants will be able to validate webhooks received from the Fincra platform using this feature. A signature is included in the headers of every webhook sent, which is the webhook data encrypted with the merchants.

## Validating On The Merchant’s End

Merchant can run the same data encryption on their end using their secret key and comparing the result with the signature that was sent. If they match, then the merchant can go ahead to process. If it isn't a match, the merchant is expected to discard and not process the Webhook.

```javascript Node Js
import crypto from "crypto";

const encryptedData =  crypto
      .createHmac("SHA512", merchantWebhookSecretKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");
const signatureFromWebhook = req.headers['signature'];

if(encryptedData === signatureFromWebhook) {
  console.log("process");
}
else {
  console.log("discard");
}
```

**NOTE**\
The **payload** is an object that contains the event and data fields of the webhook notification. Please see a sample [payout webhook notification data](/docs/payout-webhook#payoutsuccessful) for more details on the structure of our webhooks.

## Get Webhook Secret Key

The webhook secret key can be obtained from the Fincra platform, Please see below for Merchants to view and obtain their secret key.

<Image title="Webhook Hashing.png" alt={3360} width="auto" src="https://files.readme.io/d50741b-Webhook_Hashing.png" />

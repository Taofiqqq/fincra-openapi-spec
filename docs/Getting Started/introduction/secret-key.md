---
title: Validating Webhooks
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

## Validating on the Merchant’s End

Merchants can run the same data encryption on their end using their secret key and compare the result with the signature that was sent. If they match, then the merchant can go ahead to process them. If it isn't a match, the merchant is expected to discard and not process the Webhook.

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
```python
import hmac
import hashlib
import json

def encrypt_webhook_data():
    webhook_secret_key = "The webhook secret key"
    payload = "The webhook payload"
    
    #encode the webhook key and save it in a variable
    key = webhook_secret_key.encode("utf-8")
    
    #convert the payload into serialized json 
    message = json.dumps(payload, separators=(',', ':')).encode("utf-8")

    #encrypt the payload
    encrypted_data = hmac.new(key, message, hashlib.sha512).hexdigest()

    #get the signature from the header
    signature = req.headers['signature'];
    
    #check signature authencity
    if signature == encrypted_data:
        print("process")
    else:
        print("discard!")
```

**NOTE**\
The **payload** is an object that contains the event and data fields of the webhook notification. Please see a sample [payout webhook notification data](/docs/payout-webhook#payoutsuccessful) for more details on the structure of our webhooks.

## Get Webhook Secret Key

The webhook secret key can be obtained from the Fincra platform, Please see below for Merchants to view and obtain their secret key.

<Image title="Webhook Hashing.png" alt={3360} width="auto" src="https://files.readme.io/d50741b-Webhook_Hashing.png" />

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


##Validating on the Merchant’s End
Merchants can run the same data encryption on their end using their secret key and compare the result with the signature that was sent. If they match, then the merchant can go ahead to process them. If it isn't a match, the merchant is expected to discard and not process the Webhook.
[block:code]
{
  "codes": [
    {
      "code": "import crypto from \"crypto\";\n\nconst encryptedData =  crypto\n      .createHmac(\"SHA512\", merchantWebhookSecretKey)\n      .update(JSON.stringify(payload)) \n      .digest(\"hex\");\nconst signatureFromWebhook = req.headers['signature'];\n\nif(encryptedData === signatureFromWebhook) {\n  console.log(\"process\");\n}\nelse {\n  console.log(\"discard\");\n}",
      "language": "javascript",
      "name": "Node Js"
    },
    {
      "code": "import hmac\nimport hashlib\nimport json\n\ndef encrypt_webhook_data():\n    webhook_secret_key = \"The webhook secret key\"\n    payload = \"The webhook payload\"\n    \n    #encode the webhook key and save it in a variable\n    key = webhook_secret_key.encode(\"utf-8\")\n    \n    #convert the payload into serialized json \n    message = json.dumps(payload, separators=(',', ':')).encode(\"utf-8\")\n\n    #encrypt the payload\n    encrypted_data = hmac.new(key, message, hashlib.sha512).hexdigest()\n\n    #get the signature from the header\n    signature = req.headers['signature'];\n    \n    #check signature authencity\n    if signature == encrypted_data:\n        print(\"process\")\n    else:\n        print(\"discard!\")\n    \n",
      "language": "python"
    }
  ]
}
[/block]
**NOTE**
The **payload** is an object that contains the event and data fields of the webhook notification. Please see a sample [payout webhook notification data](/docs/payout-webhook#payoutsuccessful) for more details on the structure of our webhooks.

##Get Webhook Secret Key
The webhook secret key can be obtained from the Fincra platform, Please see below for Merchants to view and obtain their secret key.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d50741b-Webhook_Hashing.png",
        "Webhook Hashing.png",
        3360,
        2100,
        "#f6f5fd"
      ],
      "sizing": "original"
    }
  ]
}
[/block]
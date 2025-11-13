---
title: Encryption
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
This documentation will guide you on how to:

1. Encrypt a request payload before sending it to us.
2. Decrypt and validate a webhook response from us.

> 🚧 Note
> 
> Encryption is optional and specifically designed for requests sent using our [payout API](/reference/payout-1). Follow the steps below to ensure secure communication with our system.

# Encrypting Your Payout Request

When transferring money with our [Payout API](/reference/payout-1), you may choose to encrypt the payload before making the request. You'll need your encryption key (found in the Settings > API section of your [dashboard](https://sandbox.fincra.com/settings/api)) to manually encrypt the payload.

Here is a [Node JS](https://nodejs.org/en/)  and a PHP example of how to encrypt a payload.

> 📘 Note
> 
> 1. `Payload`  contains the default parameters needed to process the request. For currency specific parameters that you may need, see the [Payout API](/reference/payout-1) section.
> 2. `encryptionKey` here refers to the encryption key. Get this from the settings page on the dashboard.
> 3. `signature` holds the value of the encrypted payload that should be added to your headers. We make use of the **SHA512** encryption algorithm

> ❗️ Important
> 
> If you encrypt your payout request payload, please ensure:
> 
> 1. The amount is always sent in 2 decimal places.
> 2. That the payload structure remains exactly the same before encryption and when sent to the API.

```json Node JS

import crypto from "crypto";

const payload = {
    "business": "{{businessId}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "amount": "20",
    "description": "i want to sha pay money",
    "paymentDestination": "bank_account",
    "beneficiary": {
        "firstName": "Alan",
        "lastName": "Ross",
        "accountHolderName": "Alan Ross",
        "country": "ng",
        "phone": "0803443433",
        "accountNumber": "012344345",
        "type": "individual",
        "email": "aa@aa.com",
        "bankCode":"058",
        "bankName":"Guaranty Trust Bank"
    }
};

const encryptionKey="";//Get this key from the API settings page on your portal
const signature =  crypto
      .createHmac("SHA512", encryptionKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");

//add generated signature to your headers as `signature` when initiating a payout
```
```php PHP
<?php

$payload = array(
    "business" => "{{businessId}}",
    "sourceCurrency" => "NGN",
    "destinationCurrency" => "NGN",
    "amount" => "20",
    "description" => "Transfer request",
    "paymentDestination" => "bank_account",
    "beneficiary" => array(
        "firstName" => "Alan",
        "lastName" => "Ross",
        "accountHolderName" => "Alan Ross",
        "country" => "ng",
        "phone" => "0803043431",
        "accountNumber" => "012344345",
        "type" => "individual",
        "email" => "aa@aa.com",
        "bankCode" => "058",
        "bankName" => "Guaranty Trust Bank"
    )
);

$encryptionKey = ""; // Get this key from the API settings page on your portal
$signature = hash_hmac('SHA512', json_encode($payload), $encryptionKey);

```

# Decrypting and Validating a Webhook

When our system sends you a webhook, you’ll need to decrypt it and confirm the authenticity. 

Here is a [Node JS](https://nodejs.org/en/)  and a PHP example of how to decrypt a webhook.

```php
<?php

$encryptedData = hash_hmac('SHA512', json_encode($payload), $merchantWebhookSecretKey);
$signatureFromWebhook = $_SERVER['HTTP_SIGNATURE'];

if ($encryptedData === $signatureFromWebhook) {
  echo "Process request";
} else {
  echo "Discard request";
}
```

> 📘 Note
> 
> 1. **encryptedData**: Your generated signature using the webhook secret key.
> 2. **signatureFromWebhook**: Signature received in the webhook headers (`HTTP_SIGNATURE`).
> 3. **Validation**: Compare `encryptedData` with `signatureFromWebhook`. If they match, process the request; otherwise, discard it.
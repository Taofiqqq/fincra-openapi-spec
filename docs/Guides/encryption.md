---
title: Encryption
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
## Encryption

When transferring money with our [Payout API](/reference/payout-1), you may choose to encrypt the payload before making the request. You'll need your encryption key (found in the Settings > API section of your [dashboard](https://sandbox.fincra.com/settings/api)) to manually encrypt the payload.

> 📘
>
> Encryption is optional and can only be used with the [payout API](/reference/payout-1)

Here is a [Node JS](https://nodejs.org/en/)  and a PHP example of how to encrypt a payload.

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

const encryptionKey="";//get from settings page on the portal
const signature =  crypto
      .createHmac("SHA512", encryptionKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");

//add generated signature to your headers as `signature` when initiating a payout
```
```php
<?php
use \Firebase\JWT\JWT;

$payload = array(
    "business" => "{{businessId}}",
    "sourceCurrency" => "NGN",
    "destinationCurrency" => "NGN",
    "amount" => "20",
    "description" => "i want to sha pay money",
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
$encryptionKey = ""; // get from settings page on the portal
$signature = hash_hmac('SHA512', json_encode($payload), $encryptionKey);



$encryptedData = hash_hmac('SHA512', json_encode($payload), $merchantWebhookSecretKey);
$signatureFromWebhook = $_SERVER['HTTP_SIGNATURE'];

if ($encryptedData === $signatureFromWebhook) {
  echo "process";
} else {
  echo "discard";
}
```

**Please take note of the folllowing** : 

* `Payload`  contains the paramters needed to process the request
* `encryptionKey` here refers to the encryption key
* `signature` holds the value of the encrypted payload that should be added to your headers

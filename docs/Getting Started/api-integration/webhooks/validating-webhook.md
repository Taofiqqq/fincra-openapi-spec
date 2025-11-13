---
title: How To Validate Webhooks
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
Merchants can easily validate webhooks received from the Fincra platform using the following steps:

**Signature Inclusion**: Every webhook sent includes a signature in the headers. This signature is the encrypted webhook data using the merchant's webhook secret key.

**Validation on Merchant's End: **Merchants can perform the same encryption process on their end using their webhook secret key. They can then compare the resulting signature with the one received. If the signatures match, the merchant can proceed with processing the webhook. However, if the signatures do not match, the merchant must discard the webhook and refrain from processing it.

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
```json Java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import org.json.*;

public class WebhookEncrypter {
    public static void encryptWebhookData() {
        String webhookSecretKey = "The webhook secret key";
        String payload = "The webhook payload";

        // encode the webhook key and save it in a variable
        byte[] key = webhookSecretKey.getBytes(StandardCharsets.UTF_8);

        // convert the payload into serialized JSON
        String message = new JSONObject(payload).toString();

        // encrypt the payload
        Mac sha512Hmac;
        try {
            sha512Hmac = Mac.getInstance("HmacSHA512");
            SecretKeySpec secretKey = new SecretKeySpec(key, "HmacSHA512");
            sha512Hmac.init(secretKey);
            byte[] hmacData = sha512Hmac.doFinal(message.getBytes(StandardCharsets.UTF_8));
            String encryptedData = bytesToHex(hmacData);

            // get the signature from the header
            String signature = req.getHeader("signature");

            // check signature authenticity
            if (signature.equals(encryptedData)) {
                System.out.println("process");
            } else {
                System.out.println("discard!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }
}
```
```Text Vanilla Javascript
<script>
  function generateHmacSHA512Signature(key, jsonData) {
      // Convert JSON data to a string
      const jsonString = JSON.stringify(jsonData);

      // Convert key and data to Uint8Array
      const keyBytes = new TextEncoder().encode(key);
      const dataBytes = new TextEncoder().encode(jsonString);

      // Compute HMAC SHA-512
      const hmacSha512 = window.crypto.subtle.importKey(
          "raw", 
          keyBytes, 
          { name: "HMAC", hash: "SHA-512" },
          true, 
          ["sign"]
      ).then((key) => {
          return window.crypto.subtle.sign(
              "HMAC", 
              key, 
              dataBytes
          );
      });

      return hmacSha512.then((signature) => {
          // Convert the signature to hexadecimal format
          return Array.from(new Uint8Array(signature)).map(byte => {
              return ('0' + byte.toString(16)).slice(-2);
          }).join('');
      });
  }

  // Example usage:
  const key = '6d1d475adef242e59a648335288ee80b';
  const jsonData = {
    "event": "payout.successful",
    "data": {
      "id": 40614,
      "amountCharged": 350,
      "amountReceived": 200,
      "recipient": {
        "name": "Customer Name",
        "accountNumber": "1226742538",
        "type": "individual",
        "email": null
      },
      "fee": 150,
      "rate": 1,
      "paymentScheme": null,
      "paymentDestination": "bank_account",
      "sourceCurrency": "NGN",
      "destinationCurrency": "NGN",
      "status": "successful",
      "createdAt": "2024-02-27T09:33:35.000Z",
      "updatedAt": "2024-02-27T09:33:36.000Z",
      "reference": "33aef44be6f7441a",
      "customerReference": "test-006a133est",
      "reason": "Disbursement was successful",
      "traceId": null,
      "valuedAt": "2024-02-27T09:33:36.000Z"
    }
  };

  generateHmacSHA512Signature(key, jsonData)
      .then((signature) => {
          console.log("HMAC SHA-512 Signature:", signature);
          var h3Element = document.getElementById("sig");
          h3Element.textContent = signature;
      })
      .catch((error) => {
          console.error("Error:", error);
      });
</script>
```

**NOTE**

- In the context of our webhooks, a payload refers to an object that comprises the event and data fields of the webhook notification. To better understand the structure of our webhooks, please refer to [sample payout webhook notification data](/docs/payout-webhook#payoutsuccessful) . It is important to note that the webhook payload structure should remain encrypted and unmodified as received.
- Fincra events, including ([Payouts](https://docs.fincra.com/docs/payout-webhook), [Conversions](https://docs.fincra.com/docs/conversions-webhook), [Virtual Account](https://docs.fincra.com/docs/virtual-account-webhook),and [Collections](https://docs.fincra.com/docs/payin-webhook)) are accompanied by a signature header. This header contains an HMAC SHA512 signature that is signed with your webhook secret key. Prior to processing the event, it is crucial to verify the signature provided in the header to ensure its authenticity.

## Obtaining the Webhook Secret Key

To access and obtain your webhook secret key from the Fincra platform, please follow the instructions provided below for merchants:

1. Log in to the Fincra platform.
2. Then, navigate to the settings page in the navigation bar.
3. From the settings dropdown, select "Portal Settings."
4. Navigate to the Secret keys.
5. Once located, you will be able to obtain your webhook secret key.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d50741b-Webhook_Hashing.png",
        "Webhook Hashing.png",
        3360
      ],
      "align": "center",
      "sizing": "auto"
    }
  ]
}
[/block]
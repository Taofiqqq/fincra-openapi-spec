---
title: Get your API key 🔐
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
To enable communication between your application and Fincra, you'll need your secret key. Fincra authenticates your API requests using your account’s Secret key. 

**Note**: Your  **Secret Key**  should be kept confidential. It can perform any API request to Fincra without restriction.

```curl
-H "api-key: your_secret_key".
```

If you do not include your key when making an API request or use one that is incorrect, Fincra will return an error. 

```json Invalid API key Error
"message": "Invalid authentication credentials"
```
```json No API key Found
"message": "No API key found in request"
```

## Getting your API keys

Every account comes with three sets of API keys : The **Secret key** used for making API requests, The **Public key** that identifies your account with Fincra, and the **Webhook secret key** that is used for validating webhooks. All API keys are available for Live and Test modes.

**The instructions below will aid you in getting your API keys…\&#xA;**

## Step 1

Login to your Fincra dashboard and navigate to Settings on the side menu.

![](https://files.readme.io/87f5d9c-Step_1.png "Step 1.png")

## Step 2

Copy the API key you want from the API keys and webhook Configuration tab on the Settings page.

* Your **Secret Key** should be kept confidential. Your account’s secret API key can perform any API request to Fincra without restriction.

* The **Public Key** is meant solely to identify your account with Fincra. It can safely be published in places like your Frontend, or Mobile app.

* The **Encryption Key**  can be used for the following :
  * Validating webhooks, See the webhook validation [guide](/docs/secret-key) for details.
  * Encryption , See the encryption [guide](/docs/encryption) for details.

<Image width="[object Object]" src="https://files.readme.io/ede1a31-Encryption_key.png" />

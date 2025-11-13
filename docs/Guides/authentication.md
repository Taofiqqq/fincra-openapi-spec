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
In order to establish communication between your application and Fincra, it is necessary to have your secret key. Fincra utilizes your account's secret key to authenticate your API requests.

Note: Your secret key should be treated as confidential information, as it grants unrestricted access to perform API requests to Fincra.

```curl
-H "api-key: your_secret_key".
```

I f you fail to include your key when making an API request or provide an incorrect key, Fincra will respond with an error message.

```json Invalid API key Error
"message": "Invalid authentication credentials"
```
```json No API key Found
"message": "No API key found in request"
```

## Getting your API keys

Every account comes with three sets of API keys : The **Secret key** used for making API requests, The **Public key** that identifies your account with Fincra, and the **Webhook secret key** that is used for validating webhooks. All API keys are available for Live and Test modes.

**To obtain your API keys, follow the instructions below:\&#xA;**

## Step 1

Log in to your Fincra dashboard and navigate to the Settings section in the side menu.

![](https://files.readme.io/8e82e45-Screenshot_2023-06-20_at_5.40.13_PM.png)

## Step 2

On the Settings page, locate the API keys and webhook Configuration tab. Copy the desired API key from this section.

It is crucial to keep your Secret Key confidential as it grants unrestricted access to perform API requests to Fincra.

The Public Key is intended solely for identifying your account with Fincra. It can be safely published in places like your frontend or mobile app.

The Encryption Key can be utilized for the following purposes:

* Validating webhooks (refer to the webhook validation  [guide](/docs/secret-key) for details).
* Encryption (refer to the encryption  [guide](/docs/encryption) for details).

![](https://files.readme.io/19e5ad1-Screenshot_2023-06-20_at_5.41.54_PM.png)

---
title: 🔐 Authentication (Get your API key)
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
In order to establish communication between your application and Fincra, it is necessary to have your secret key. Fincra utilizes your account's secret key to authenticate your API requests.

Note: Your secret key should be treated as confidential information, as it grants unrestricted access to perform API requests to Fincra.

```curl
-H "api-key: your_secret_key".
```

If you fail to include your key when making an API request or provide an incorrect key, Fincra will respond with an error message.

```json Invalid API key Error
"message": "Invalid authentication credentials"
```
```json No API key Found
"message": "No API key found in request"
```

## Getting your API keys

Every account comes with three sets of API keys : The **Secret key** used for making API requests, The **Public key** that identifies your account with Fincra, and the **Webhook secret key** that is used for validating webhooks. All API keys are available for Live and Test modes.

To ensure you're using the correct environment-specific API keys, please use the environment toggle at the top right corner of your dashboard to switch between Live and Test Mode (Sandbox) modes.

Your API keys are generated based on the selected environment:

* When in Sandbox mode, you'll see Sandbox API keys meant for testing.
* When in Live mode, you'll see Live API keys for real transactions.

> 🚧 Note:
>
> Switching environments using the toggle does not affect your integrations or transactions in any way. It only changes the information displayed on the dashboard (e.g., API keys, transaction logs, and balances), allowing you to manage either environment separately.

**To obtain your API keys, follow the instructions below:\&#xA;**

## Step 1

Log in to your Fincra dashboard and navigate to the Profile section in the side menu.

<Image align="center" src="https://files.readme.io/eea83ef-Screenshot_2024-01-29_at_16.44.39.png" />

## Step 2

On the Settings page, locate the API keys and webhook Configuration tab. 

<Image align="center" src="https://files.readme.io/199fb9d-Screenshot_2024-01-29_at_16.51.45.png" />

You would find two set of API keys:

1. The "`Secret Key`":\
   It is crucial to keep your Secret Key confidential as it grants unrestricted access to perform API requests to Fincra. This is to be sent along in a header field: `api-key`, when making api requests.
2. The "`Public Key`":\
   The Public Key is intended solely for identifying your account with Fincra. It can be safely published in places like your frontend or mobile app. This is to be sent along in a header field: `x-pub-key`, when making api requests.
3. The "`Webhook Encryption Key`":\
   The Encryption Key can be utilized to validate webhooks (refer to the webhook validation  [guide](/docs/secret-key) for details).

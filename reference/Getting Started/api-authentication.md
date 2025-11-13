---
title: 🔐 API Authentication
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

Additionally, for specific endpoints, you must include your `Business ID` as part of the request, either in the header or the payload, depending on the API's requirements. This ensures that the request is correctly associated with your business.

```curl
--header 'api-key: your_secret_key' \
--header 'x-pub-key: your_public_key' \
--header 'x-business-id: your_business_id' \
```

> 🚧 Note
> 
> Your secret key should be treated as confidential information, as it grants unrestricted access to perform API requests to Fincra. Similarly, ensure the proper use of your `Business ID` to avoid unauthorized or incorrect requests.

If you fail to include your key when making an API request or provide an incorrect key, Fincra will respond with an `error message`, as shown below:

```json Invalid API key Error
{
    "message": "Invalid authentication credentials"
}
```
```json No API key Found
{
    "message": "No API key found in request"
}
```

If you fail to include your `Business ID` when required in an API request, either in the request header or payload, as the case may be, for endpoints that require it, `Fincra` will respond with an `error message`, as shown below:

```json Missing in Header
{
    "message": "x-business-id must be provided in the header",
    "error": "Unauthorized",
    "statusCode": 401
}
```
```json Missing in payload
{
    "success": false,
    "error": "Error occurred during payload validation. business is required",
    "errorType": "VALIDATION_FAILED",
    "errors": [
        "Error occurred during payload validation. business is required"
    ]
}
```

## Getting your API keys & Business ID

Every account comes with three sets of API keys : The **Secret key** used for making API requests, The **Public key** that identifies your account with Fincra, and the **Webhook secret key** that is used for validating webhooks. All API keys are available for Live and Test modes.

**To obtain your API keys, follow the instructions below:**

### Step 1

Log in to your Fincra dashboard and navigate to the Profile section in the side menu.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eea83ef-Screenshot_2024-01-29_at_16.44.39.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Step 2

In the `My Profile` tab,  you would see your `Business ID`. For specific endpoints, the `Business ID` is to be sent alongside the `API Key` in a header field: `x-business-id`, when making api requests. While in other endpoints, you might be required to pass the `Business ID` as part of the payload, in a field `business`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/77147360dd8e9181259c54fb82c17e44050da0133112cca34048b99828bdd384-Screenshot_2024-09-27_at_12.52.02.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Step 3

On the Settings page, locate the API keys and webhook Configuration tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/199fb9d-Screenshot_2024-01-29_at_16.51.45.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You would find two set of API keys:

1. The "`Secret Key`":  
   It is crucial to keep your Secret Key confidential as it grants unrestricted access to perform API requests to Fincra. This is to be sent along in a header field: `api-key`, when making api requests.
2. The "`Public Key`":  
   The Public Key is intended solely for identifying your account with Fincra. It can be safely published in places like your frontend or mobile app. This is to be sent along in a header field: `x-pub-key`, when making api requests.
3. The "`Webhook Encryption Key`":  
   The Encryption Key can be utilized to validate webhooks (refer to the webhook validation  [guide](/docs/secret-key) for details).
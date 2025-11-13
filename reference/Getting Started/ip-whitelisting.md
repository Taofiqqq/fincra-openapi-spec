---
title: 🛡️ IP Whitelisting
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
To establish secure communication between your application and Fincra, it is necessary to have your IP address whitelisted. Without your server IP address whitelisted, you would be unable to make any requests to our endpoints.

Fincra will respond with an error message when any non-whitelisted IP tries to access our endpoints.

```curl 403 Forbidden
{
    "success": false,
    "error": "Your IP address is not allowed to access this service",
    "errorType": "ACCESS_DENIED"
}
```

Also, note that you would not be able to access your API keys if you haven't submitted an IP address to be whitelisted.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/352f1a7-Step_5.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Steps to getting your IP address whitelisted

Note: When you are in live mode, the IP address provided should be the public address of your server. You can also do the same for tests on the sandbox (test mode). However, we are not strict on specific IP addresses on test mode since we understand some of these tests might be done on Postman.

**To whitelist your server IP address, follow the instructions below:  
**

## Step 1

Log in to your [Fincra dashboard](https://app.fincra.com).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/56b6021-Step_1.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Step 2

Go to the account/settings page, which you can access via the menu once you click the profile icon.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0337afd-Step_2.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Step 3

Navigate to the IP whitelisting tab.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9c6cab5-Step_6.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Step 4

Input a valid server IP address.

If your IP address is dynamic and you would like to have any IP access using your credentials, you can set the IP address to the wildcard ip "0.0.0.0". We only accept actual IP addresses and not CIDR Blocks (e.g. 0.0.0.0/0).

**Caution ⚠️⚠️:** Exercise extreme caution when considering whitelisting 0.0.0.0. This action is strongly discouraged and is undertaken entirely at your own risk. It opens the door to requests from any IP address utilizing your API key. Fincra explicitly disclaims all responsibility for any consequences stemming from this decision.

Note, for dynamic IP to be in effect, you can only have one entry of "0.0.0.0". If you already inputted an IP before this, contact support to remove the previously inputted IP.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5f6084-Step_7.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Step 5

Save changes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aeeeff0-Step_8.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Step 6

Check for a success notification.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8de818d-Step_9.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

> 🚧 Note
> 
> You are only allowed three IP address entries, which also counts when you change a previously inputted IP address. So, we recommend double-checking the inputted IP address before saving.
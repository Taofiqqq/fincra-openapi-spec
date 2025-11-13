---
title: Webhooks
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
Our webhooks provide real-time notifications when certain events happen on your account. These events could range from a successful transaction to a failed transaction.

Some examples of events that you could be notified of include:
  * When you receive a settlement transaction.
  * When you performed a successful payout transaction.

Some examples of things you could do with our webhooks include :
  * Update your database when the status of a pending payment is successful.
  * Notify a customer when payment is successful or unsuccessful etc.

In order to receive these notifications, you need the following:
  * An endpoint on your server that will be called by us to send you notifications
  * Webhook enabled on your Fincra dashboard.

## HOW TO ENABLE WEBHOOKS ON YOUR **DASHBOARD**
To enable webhook, kindly follow the steps below:

### Step 1
Log into your Fincra dashboard. Then click on the settings page in the navigation bar, then click on My Account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dbc347b-Step_1.png",
        "Step 1.png",
        3360,
        2100,
        "#f9f9fd"
      ]
    }
  ]
}
[/block]
###Step 2
Go to the API keys and webhook Configuration tab on the Settings page paste the URL of your server endpoint in the appropriate webhook URL field.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8043424-Step_5.png",
        "Step 5.png",
        3360,
        2100,
        "#f8f8fd"
      ]
    }
  ]
}
[/block]
###Step 3
Hit save, toggle on the webhook and you are good to go.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3891ce7-Step_4.png",
        "Step 4.png",
        3360,
        2100,
        "#f8f8fd"
      ]
    }
  ]
}
[/block]
## WEBHOOK EVENTS 🪝.
Please feel free to read more on our webhooks and the types of events we support

[Payout Events](/docs/payout-webhook) 
[Payin Events](/docs/collection-webhook) 
[Conversions Events](/docs/conversions-webhook) 
[Virtual Accounts Events](/docs/virtual-account-webhook) 

## WEBHOOK VALIDATION
  * Depending on the type of [transaction](/docs/transaction-types-1) you can validate a webhook by querying the transaction by its reference to confirm its existence 
  * [Webhook signature verification](/docs/secret-key) , you can verify our webhook signature
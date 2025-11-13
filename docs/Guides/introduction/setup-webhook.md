---
title: Setup Webhook
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

## How To Enable Webhooks On Your  **Fincra Portal**

To enable webhook, kindly follow the steps below:

### Step 1

Log into your Fincra dashboard. Then click on the settings page in the navigation bar, then click on My Account.

![3360](https://files.readme.io/dbc347b-Step_1.png "Step 1.png")

### Step 2

Go to the API keys and webhook Configuration tab on the Settings page paste the URL of your server endpoint in the appropriate webhook URL field.

![3360](https://files.readme.io/8043424-Step_5.png "Step 5.png")

### Step 3

Hit save, toggle on the webhook and you are good to go.

![3360](https://files.readme.io/3891ce7-Step_4.png "Step 4.png")

## Webhook Events 🪝.

Please feel free to read more on our webhooks and the types of events we support

[PAYOUTS EVENTS](/docs/payout-webhook)\
[PAYIN EVENTS](/docs/collection-webhook)\
[CONVERSION EVENTS](/docs/conversions-webhook)\
[VIRTUAL ACCOUNT EVENTS](/docs/virtual-account-webhook) 

## Webhook Validation

* Depending on the type of [transaction](/docs/transaction-types-1) you can validate a webhook by querying the transaction by its reference to confirm its existence 
* [Webhook signature verification](/docs/secret-key) , you can verify our webhook signature

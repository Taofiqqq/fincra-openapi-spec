---
title: Setup Webhook
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
Our webhooks deliver real-time notifications whenever specific events occur on your account. These events can encompass a range of activities, from successful transactions to failed transactions.

Here are some examples of events that you can be notified about:

* Receipt of a settlement transaction.
* Successful completion of a payout transaction.

And here are a few examples of what you can achieve with our webhooks:

* Update your database when a pending payment transitions to a successful status.
* Notify a customer about the success or failure of a payment, and so on.

To receive these notifications, you will need the following:

1. An endpoint on your server that can be called by our system to send you notifications.
2. Webhook functionality is enabled on your Fincra dashboard.

## Enabling Webhooks on Your Fincra Portal

To enable Webhooks, please follow the steps below:

### Step 1

Log in to your Fincra dashboard.\
Then, navigate to your account section in the navigation bar.

<Image align="center" src="https://files.readme.io/b2ed3a8-Step_1.png" />

### Step 2

1. Navigate to the API keys and webhook Configuration tab on the Settings page.
2. Paste the URL of your server endpoint in the designated webhook URL field.
3. You can choose to generate a new webhook encryption key.
4. Click on save changes. Once done, you are all set to proceed.

<Image align="center" src="https://files.readme.io/1eb19e2-Step_2.png" />

Note: You would also have to repeat this process on the live environment if previously done on sandbox, as the credentials are independent across environments. 

## Webhook Events 🪝.

Explore further information about our webhooks and the different types of events we support:

[Payouts events](/docs/payout-webhook)\
[Collection events](/docs/payin-webhook)\
[Conversion events](/docs/conversions-webhook)\
[Virtual account events](/docs/virtual-account-webhook) 

## Webhook Validation

For webhook validation, you have two options depending on the type of transaction:

* Query Transaction: Validate a webhook by querying the [transaction](/docs/transaction-types-1) using its reference to confirm its existence.  
* Webhook Signature Verification: Verify our [Webhook signature](/docs/validating-webhook)  to ensure its authenticity and integrity.

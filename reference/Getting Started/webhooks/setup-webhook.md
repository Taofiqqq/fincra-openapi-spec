---
title: 🛠️ Setup webhook
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
To enable Webhooks, please follow the steps below:

### Step 1

Log in to your Fincra dashboard. [https://app.fincra.com](https://app.fincra.com) 

### Step 2

Once logged in, navigate to your account section in the navigation bar.

<Image align="center" src="https://files.readme.io/b2ed3a8-Step_1.png" />

### Step 3

1. Navigate to the `API keys and Webhook` Configuration tab on the `Account Settings` page.
2. Paste the URL of your server endpoint in the designated `webhook` URL field.
3. You can choose to generate a new `webhook` encryption key.
4. Click on save changes. Once done, you are all set to proceed.

<Image align="center" src="https://files.readme.io/1eb19e2-Step_2.png" />

> 🚧 Note:
>
> You would also have to repeat this process on the live environment if previously done on sandbox, as the credentials are independent across environments.

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

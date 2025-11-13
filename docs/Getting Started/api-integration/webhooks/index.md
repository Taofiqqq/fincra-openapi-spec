---
title: 🔗 Webhooks (Callbacks)
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
Our webhooks provide **real-time notifications** whenever specific events occur on your account. These events can include various payment activities, such as successful transactions, refunds, or payment failures.

### **Examples of Webhook Events**

You can receive notifications for several events, such as:

* Receipt of a settlement transaction
* Successful completion of a payout transaction
* Refund processing
* Conversion completion

### How Do Webhooks Work at Fincra?

Here’s a simplified overview of how webhooks operate with Fincra:

1. **👇 Trigger Event**:\
   A payment-related event occurs, like a successful transaction, a refund, or a payment failure.
2. **👇 Notification Sent**:\
   Fincra sends a message (the webhook) to your application (webhook url), notifying it of the event. The message sent, usually in JSON format, contains detailed information about the event (e.g., transaction amount, status, payment reference)
3. **Action Taken**:\
   Your system receives this notification and can automatically take action, such as updating your customer’s payment status or sending an email confirmation. It's recommended to acknowledge the webhook by responding with a 200 OK status code to confirm receipt of the notification

### How to Set Up Webhooks

To integrate webhooks with your application, you'll need to follow a few steps, including specifying your webhook URL, running some tests, and verifying payload signatures for security. To receive webhook notifications, you'll need to do the following:

1. **Create an endpoint on your server**: This is where we will send HTTP POST requests with event data.
2. **Enable webhook functionality on your Fincra dashboard**: Ensure you have activated the webhook feature from your account. For a detailed guide, check out our [How to Set Up Webhooks](setup-webhook) page.

<br />

> 🚧 Common Webhook Use Cases
>
> **Payment Confirmation**: Automatically update your system when a payment is successfully processed.
>
> **Refund Processing**: Notify your team when a refund is completed.
>
> **Failed Payment Alerts**: Get real-time alerts when a payment fails, allowing you to act quickly.

---
title: '[DEL] Environments'
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
# Overview

Fincra provides two distinct environments for API integration, each designed for specific stages of your development and implementation process. Understanding the purpose and functionality of each environment is crucial for successful integration.

* **Test Environment (Sandbox):** This environment is designed exclusively for testing purposes, using simulated data to replicate real-world scenarios without any financial impact. It allows you to test and validate your integration before going live.

* **Live Environment:** This is the production environment where real transactions and operations take place. It handles actual customer data and financial transactions, making it crucial to ensure that your integration is fully tested and functional before transitioning to this environment.

> 📘 Key points to remember
>
> * **Isolation:** Accounts created in the Test environment are isolated and cannot be transferred or used in the Live environment. Each environment requires separate business IDs, API keys, and other identifiers.
> * **Data Integrity:** Since the Test environment uses simulated data, the behavior of APIs might differ slightly from the Live environment, which processes real data.

# Sandbox Environment

The Sandbox environment is a safe, isolated testing space where you can simulate and experiment with Fincra’s APIs without affecting real-world transactions. This environment mirrors the production setup, enabling you to thoroughly test your integration before going live.

In the Sandbox, you can:

* **Test Card Payments:** Use a variety of test cards to simulate different payment scenarios and ensure your integration handles them effectively.
* **Simulate Mobile Money Transactions:** Utilize test mobile numbers to replicate Mobile Money and PayAttitude deposits, verifying that these processes work as expected.
* **Fund Your Test Balance:** Add test funds to your account to simulate transactions and manage balances as you would in a live environment.

Each of these features is crucial for validating your integration and ensuring a seamless experience when you move to the live environment. Explore the following sections for detailed instructions and test data:

* **[Test Cards](test-cards)**: Simulate different card payment scenarios.
* **[Test Mobile Numbers](test-mobile-numbers)**: Test Mobile Money and PayAttitude deposits.
* **[Funding Test Balance](funding-test-balance)**: Learn how to top up your Sandbox balance for testing purposes.

> 📘 Sandbox Environment URL
>
> [https://sandboxapi.fincra.com](https://sandboxapi.fincra.com)

# Live Environment

The Live environment is where you conduct real-world transactions and handle actual customer data. Ensure your integration is fully prepared before transitioning to this environment.

> 👍 Key Features
>
> * **Security**: The Live environment adheres to the highest security standards, ensuring that all sensitive data, such as customer information and transaction details, is protected.
> * **Compliance**: Fincra’s Live environment complies with relevant financial regulations, providing a reliable and compliant framework for handling transactions across various regions.

## Key Points to Note:

* **KYC Completion:** Ensure your KYC (Know Your Customer) process is completed before you start using Live API keys. Live API access is granted only after successful KYC verification.

* **API Keys:** Sandbox API keys are different from Live API keys. Generate and use the correct API keys for the Live environment.

* **Dashboard Configuration:** Switch your dashboard to Live mode to obtain the correct API keys and settings for the Live environment.

* **Webhook Setup:** Configure and test webhooks in the Sandbox environment before transitioning to Live. Webhooks set up in Sandbox do not carry over to the Live environment.

> 📘 Live Environment URL
>
> [https://api.fincra.com](https://api.fincra.com)

## Steps to Get Started on Live Environment:

1. **Complete KYC:** Finalise your KYC process.
2. **Switch to Live Mode:** Update your dashboard settings to Live mode.
3. **Generate Live API Keys:** Obtain your Live API keys from the dashboard.
4. **Update Your Application:** Replace Sandbox URLs with the Live URL in your application’s configuration.
5. **Verify Webhooks:** Test and confirm webhook functionality in Sandbox before going live.

> 👍 Perfect time to create an account!
>
> To ensure a seamless integration experience, you will need your API keys. These keys can be obtained by either  [creating an account](https://app.fincra.com/auth/signup?_token=98huni2wewuinj) or reaching out to [us](https://fincra.com/contact-us) directly.

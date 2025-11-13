---
title: 🌍 API Environments
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
The Fincra API supports two distinct environments: **Live** and **Test (Sandbox)**. Understanding the difference between these environments is essential for a smooth integration process.

- **Test Environment (Sandbox):** This environment is designed exclusively for testing purposes, using simulated data to replicate real-world scenarios without any financial impact. It allows you to test and validate your integration before going live.

- **Live Environment (Production):** This is the production environment where real transactions and operations take place. It handles actual customer data and financial transactions, making it crucial to ensure that your integration is fully tested and functional before transitioning to this environment.

### Key Points to Remember:

- **Isolation:** Accounts created in the Test environment are isolated and cannot be transferred or used in the Live environment. Each environment requires separate business IDs, API keys, and other identifiers.
- **Data Integrity:** Since the Test environment uses simulated data, the behavior of APIs might differ slightly from the Live environment, which processes real data.

### Environment URLs:

- **Test Environment:** <https://sandboxapi.fincra.com>
- **Live Environment:** <https://api.fincra.com>

> 👍 Perfect time to create an account!
> 
> To ensure a seamless integration experience, you will need your API keys. These keys can be obtained by either  [creating an account](https://app.fincra.com/auth/signup?_token=98huni2wewuinj) or reaching out to [us](https://fincra.com/contact-us) directly.
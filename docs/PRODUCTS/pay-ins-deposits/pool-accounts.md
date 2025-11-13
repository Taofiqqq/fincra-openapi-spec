---
title: Pool Accounts
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

A Pool Account is a central account on Fincra that allows you to collect funds into a single merchant-controlled balance. Instead of creating a dedicated virtual account for each customer, you can receive payments into one pool and reconcile transactions using a unique customer reference.  

This product is best for **B2B platforms, PSPs, and businesses handling large volume transfers** in markets where mobile money or card acceptance is limited. By using Pool Accounts, you can localize collections and still receive settlements in your preferred currency.

With a pool account, you can:

* Receive payments across supported currencies.  
* Convert collected funds using Fincra’s FX services.  
* Payout to beneficiaries locally or internationally.  

> 📘 NOTE
>
> Pool accounts are provisioned manually. There is currently **no API to create a pool account**.\
> To request one, reach out to your Relationship Manager, email [support@fincra.com](mailto:support@fincra.com), or submit a [pool account requisition form](https://forms.gle/Lt97N3tf1e6oVPYF6) for a faster response.

# How It Works

1. You request a Pool Account by contacting your Relationship Manager, emailing [support@fincra.com](mailto:support@fincra.com), or submitting the [Pool Account Requisition Form](https://forms.gle/Lt97N3tf1e6oVPYF6).
2. Fincra opens the account according to **currency-specific SLAs** (see properties below).
3. Your customers (payers) transfer money into the Pool Account.
4. Each payment must include your **merchant reference code** in the narration or reference field.

   * This reference returns \~60% of the time on bank statements.
   * When present, it allows you to map the payment back to your end customer.
5. Fincra reconciles incoming transactions:

   * Payments with a valid merchant reference are automatically credited to your balance.
   * Payments without a reference can still be credited if you design your own reconciliation process.
6. Fincra sends a **webhook** notification with the transaction details, including any reference code parsed from the statement.

## Flow steps

<Image align="center" src="https://files.readme.io/8ccb6c9dcb148911b5a45a7a67921319b75a89497cf5ac4db2b2f3f9277f341e-image.png" />

* Merchant submits Pool Account request → Fincra Ops receives.
* Fincra processes account creation within SLA for the currency.
* Merchant receives Pool Account details (Bank name, Account number, Currency).
* Payer initiates bank transfer to Pool Account.
* Payer includes Merchant Reference Code in narration/reference field.
* Bank posts transaction into Pool Account.
* Fincra fetches bank statement, parses reference field.
* If reference matches merchant mapping → credit merchant balance.
* If reference is missing → optional credit based on agreed workflow.
* Webhook fired to merchant with transaction details.

# Properties

## Account creation SLAs and settlement properties

| Currency    | Supported Schemes             | Account Opening SLA | Settlement Time | Daily Limits | Supported Banks/Networks        |
| ----------- | ----------------------------- | ------------------- | --------------- | ------------ | ------------------------------- |
| NGN         | Bank transfer                 | 2–3 business days   | T+1             | Configurable | Major Nigerian banks            |
| KES         | Bank transfer, M-PESA paybill | 2–5 business days   | T+1             | Configurable | Kenyan banks, Safaricom         |
| GHS         | Bank transfer, Mobile Money   | 3–5 business days   | T+1             | Configurable | Ghanaian banks, MTN, AirtelTigo |
| ZAR         | Bank transfer (EFT)           | 3–7 business days   | T+2             | Configurable | South African banks             |
| UGX         | Mobile Money, Bank transfer   | 3–5 business days   | T+1             | Configurable | Airtel, MTN Uganda              |
| USD/GBP/EUR | Bank wire                     | 5–10 business days  | T+2             | Configurable | Partner correspondent banks     |

# Integration Guide

Currently there is **no API endpoint to create Pool Accounts**. You must log a request via your RM, Support, or [this form](https://forms.gle/Lt97N3tf1e6oVPYF6).

API references you should use:

* [Pool Account Solution API](https://docs.fincra.com/reference/pool-account-solution)

**Webhook sample (transaction credited):**

```json
{
  "event": "collection.successful",
  "data": {
    "amount": "150000",
    "currency": "NGN",
    "reference": "INV12345",
    "narration": "Payment for Invoice INV12345",
    "status": "successful",
    "timestamp": "2025-08-16T12:45:00Z"
  }
}
```

***

### Example requests

#### cURL

```bash
curl -X GET "https://api.fincra.com/v1/pool-accounts/transactions" \
  -H "Authorization: Bearer <YOUR_SECRET_KEY>"
```

#### JavaScript

```javascript
const axios = require("axios");

async function getPoolTransactions() {
  const response = await axios.get(
    "https://api.fincra.com/v1/pool-accounts/transactions",
    {
      headers: { Authorization: "Bearer YOUR_SECRET_KEY" },
    }
  );
  console.log(response.data);
}
```

> 🚧 NOTE
>
> Always include your merchant reference in payer instructions to ensure accurate reconciliation. Payments without references require manual mapping on your end.

## Managing Pool Account Payments

* See [Handling Collections](../handling-collections) for guidance on:

  * Overpayments & underpayments
  * Webhooks setup and retries
  * Errors and reconciliation
  * Disputes and RFIs

***

## Common Use Cases

* **Remittance companies**: Collect local transfers from senders, settle to receivers in foreign currency.
* **E-commerce platforms**: Accept local payments into a shared account and reconcile by reference code.
* **Exporters & traders**: Collect large transfers in NGN/GHS/ZAR and settle in USD/GBP/EUR.
* **Fintechs & PSPs**: Enable SMEs to receive local bank transfers without setting up multiple virtual accounts.
* **Subscription platforms**: Reconcile recurring bank transfers tagged with customer references.

***

## FAQs

**1. What if the payer forgets to include the merchant reference?**\
Fincra can still credit your account if you design an internal process for mapping such payments. By default, reconciliation relies on the merchant reference.

**2. How long does it take to open a Pool Account?**\
SLAs vary by currency (see Properties table). Typically between 2–10 business days.

**3. Are Pool Accounts available via API?**\
Not yet. You must request manually. An API for logging requests is planned.

**4. Can Pool Accounts be used for card or mobile money?**\
No. They are strictly for bank transfers (with some corridors supporting mobile money-to-bank rails, e.g., GHS, UGX).

***

## Internal Links Map

* [Handling Collections](../handling-collections) → Managing Pool Account Payments section.
* [Pool Account Solution API](https://docs.fincra.com/reference/pool-account-solution).

***

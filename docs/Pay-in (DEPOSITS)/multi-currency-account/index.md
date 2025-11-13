---
title: Multicurrency Account
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: Multi Currency Account API
  description: >-
    Our Multicurrency account solution, simplifies international payments and
    provides seamless access to multicurrency accounts, which enables merchants
    to issue named EUR and USD accounts to individuals.
  image: >-
    https://files.readme.io/ed35f1d0c022faaa714e1f8ed63aef12748c2d99027fc033b86a7cebdacbcd13-website_header.png
  robots: index
next:
  description: ''
---
Our Multicurrency account solution, simplifies international payments and provides seamless access to multicurrency accounts, which enables merchants to issue named EUR, USD and GBP accounts to individuals.

With this product Businesses can issue named foreign currency accounts to their users by leveraging our MCY Account API. Note that 

> 📘 Note:
>
> Only configured merchants can go live with the Multicurrency Account product, and is only accessible via API. 
>
> Monthly Inflow limit on issued Accounts are `10,000 USD`, `10,000 EUR` and `10,000 GBP` for USD, EUR and GBP accounts respectively.
>
> Maximum amount per transaction is `10,000 USD` for USD accounts, `10,000 EUR` for EURO accounts and `10,000 GBP` for POUND STERLING accounts.
>
> Transactions under €10 / $10 / £10 will settle to the merchant’s wallet, and any applicable fees will be deducted directly from merchant wallet.
>
> Kindly ensure that when sending money to the MCY account,  the first and last name of the account holder is exactly as the name registered to the account. E.g if registered account holder name is Abubakar Chukwuemeka and sender inputs Abu Emeka, such transactions would be failed and reversed automatically.
>
> More information would be required for transaction that exceeds set limits before they can be settled.
>
> ### Business Onboarding Requirements
>
> To get started with Fincra, to use this product: please sign up [here](https://app.fincra.com/auth/signup)

### Purpose

These accounts are design to help individuals own named foreign currency accounts and facilitate international transactions for individuals. With these accounts freelancers, remote workers, payroll companies contractors and more can receive payment for their services with ease and transparency. 

For a detailed list of prohibited activities and restricted countries, please check out our [Prohibited Activities and Restricted Countries](mcy-prohibited-activities-and-countries) section.

### How it works

The product is accessible via API. Merchants such as Fintech companies, Payroll companies, eCommerce companies, contractors and more can integrate with Fincra to access this product and then provide the product to their individual users.\
The accounts are issued to individuals and named after individuals which implies that the account are designed for individual use only.

### Supported Currencies

Virtual accounts are currently available in the following currencies :  

| Currency Name   | Currency Code | Payment Schemes        | Availability |
| :-------------- | :------------ | :--------------------- | :----------- |
| US Dollar       | USD           | ACH, SWIFT and Fedwire | Yes          |
| EURO            | EUR           | SEPA, SEPA Instant     | Yes          |
| British  Pounds | GBP           | FPS, CHAPS             | Yes          |

### How transactions are treated

Inflow to the multicurrency accounts are treated depending on the inflow type.

There are 2 types of inflow

1. First party inflow: These are transactions and payments that come from an account with the same name as the receiver account.
2. Third party inflow: These are transactions that come from an account name different from the receiver account name.

First party transactions are quite straight forward as such they  do not require additional review or RFI (Request For Information) because the transaction is between accounts of the same user.

Third party transactions would trigger an RFI for further review to ensure compliance with regulatory and security standards. An alert would be sent to the email associated with the account, once RFI is triggered.

In this case, the recipient of third party transactions may be required to provide more information before such transactions are fully executed. If the required information are not provided within 48 hours of transactions such transactions would be returned to the originator/ sender and a return fee of €15 in the case of an EUR transaction, or $35 in the case of a USD transaction would be charged.

All inflows above set threshold (both first-party and third-party) would be subject to further review and would trigger the RFI process. 

Some of the required information may include;

* Source of the funds
* Relationship with the sender
* Evidence of such relationship (contractual agreement, etc)
* Purpose of funds
* Identity of the sender
* Confirm transaction frequency (One off or Recurring)

Please refer to the [Required Information/Documents (RFI)](mcy-required-information-and-documents) section for detailed information on the documents and information needed to complete third-party transactions and inflows above the set threshold.

**Note**: When displaying the virtual account information to the customer for crediting, please ensure that the customer inputs the recipient's first and last name exactly as it appears on the USD, EUR or GBP account created on our platform via API. If the names do not match the account holder's name, the transaction will be returned.

### Whitelisted Third Party Transcations

Upon review and approval, a third-party may be whitelisted and would not require approval for subsequent transactions. In the case of fraud, non-compliance, and security threats, issued MCY accounts may/will be blocked.

### CHARGEBACK AND REFUNDS

In certain circumstances, our payment partners may require repayment/ refund for transaction previously settled through a process referred to as "Chargeback". 

Chargebacks may be the whole or part value of the original transaction.

Where a Chargeback occurs or where the merchant fails to address a Chargeback claim within 24 hours, FINCRA shall immediately be entitled to debit the merchants position or make a deduction from any remittance, reserve and/or invoice to the merchant to recover:

* The full amount of the relevant Chargeback
* The sum of 15 EUROs for EURO denominated transactions and 35USD for DOLLAR denominated transactions as chargeback fees.

#### CHARGEBACK RATIO:

For all complaints received, whether accepted or declined, we will calculate the Chargeback ratio

1. We set out chargeback and fraud ratio at 0.35%
2. Our chargeback ratio is calculated based on the following criteria

   Acceptable thresholds:

   ▪️ Less than 0.1% - This is a normal level.

   ▪️ 0.1% to 0.49% - This requires close monitoring.

   ▪️ 0.5% to 0.99% - This requires changes to be implemented.

   ▪️ Above 1% - This is above manageable levels across the industry and urgent

   action is required.

### Account Issuing Requirement

For business to issue named MCY account to individuals verification is required and the following information  must be provided;

* **Personal Information**: First Name, Last Name, Address, Zip Code, Email, Date of Birth and country of residence.
* **ID Information**: International Passport, Residence Permit, National ID (both front and back)
* **Proof of Address:** Bank statement with address, utility bill with address.

### Closing a Virtual Account

In certain circumstances, such as compliance reviews, regulatory requirements, or business-related decisions, an IBAN may need to be closed. When an IBAN is closed, it becomes permanently deactivated and cannot process any further transactions.

### Impact of Closing an IBAN

**Funds Restriction:** Users will no longer be able to receive funds into the closed IBAN.\
Any incoming transactions directed to this IBAN will be automatically rejected.

**Notifications**An email will be sent to the associated merchant to inform them of the closure of the IBAN\
Webhook Notification: A webhook event will be triggered in real-time to inform the merchant about the IBAN closure.

### Use Cases

* **Payroll Companies**\
    Global payroll company manages the salaries of remote employees located in different countries.\
    By integrating with the our Multicurrency Account API, the payroll companies can issue named foreign currency accounts to their remote employees. This allows for seamless and efficient salary payments in USD, EUR or GBP, enhancing employee satisfaction and reducing administrative overhead.
* **Fintech Companies**\
    Fintech company offers financial services to freelancers that operate internationally. By leveraging the Multicurrency Account API, fintech companies can offer its users named foreign currency accounts which allows users to manage their international payments more efficiently, reducing transfer times and costs while ensuring compliance with regulatory standards.
* **Individuals with Friends and Family Abroad**\
    Individuals that receive financial support from friends and family abroad. Can now receive USD, EUR or GBP directly into their named accounts.
* **Digital Nomads**\
    A Digital nomad travels and works from various countries, and a reliable way to receive payments from clients worldwide. Digital nomad can now receive payments in USD or EUR directly into their named account, regardless of their current location.
* **Freelancers and Remote Workers**\
    With a our Multicurrency Account, freelancers and remote workers can now receive payments directly into their named USD, EUR or GBP account.

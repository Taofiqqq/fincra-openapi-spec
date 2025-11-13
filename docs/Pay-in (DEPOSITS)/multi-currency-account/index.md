---
title: Multicurrency Account API
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
Fincra is proud to present a product that simplifies international payments and expands opportunities for the gig economy, remote work, freelancing, payroll, fintech, ecommerce and more. Fincra Multicurrency Account supports issuing of named EUR and USD accounts to individual.

With this product Businesses can issue named foreign currency accounts to their users by leveraging our MCY Account API.

> 📘 Note:
>
> The Multicurrency Account is accessible via API only. 
>
> Monthly Inflow limit on issued Accounts are `10,000 USD` and `10,000 EUR` for USD and EUR accounts respectively.
>
> Maximum amount per transaction is `10,000 USD` for USD accounts and `10,000 EUR` for EURO accounts.
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

The supported currencies include USD and EUR with more currencies to come. The individual USD account supports ACH only while the EUR account supports SEPA. 

#### Links to Individual Pages

For more detailed information, please visit the individual pages for:

* [EUR Virtual Account](eur-virtual-account)
* [USD Virtual Account](usd-virtual-account)

### How transactions are treated

Inflow to the multicurrency accounts are treated depending on the inflow type.

There are 2 types of inflow

1. First party inflow: These are transactions and payments that come from an account with the same name as the receiver account.
2. Third party inflow: These are transactions that come from an account name different from the receiver account name.

First party transactions are quite straight forward as such they  do not require additional review or RFI (Request For Information) because the transaction is between accounts of the same user.

All third party transactions will be subject to further review to ensure compliance with regulatory and security standards. Recipient of third party transactions may be required to provide more information before such transactions are fully executed. If the required information are not provided within 72 hours of transactions such transactions would be returned to the originator/ sender and a return fee of €5 in the case of an EUR transaction, or $20 in the case of a USD transaction would be charged.

For all inflows above set threshold (both first-party and third-party) would be subject to further review and additional information may be required. 

Some of the required information may include;

* Source of the funds
* Relationship with the sender
* Evidence of such relationship (contractual agreement, etc)
* Purpose of funds
* Identity of the sender
* Confirm transaction frequency (One off or Recurring)

Please refer to the [Required Information/Documents (RFI)](mcy-required-information-and-documents) section for detailed information on the documents and information needed to complete third-party transactions and inflows above the set threshold.

**Note**: When displaying the virtual account information to the customer for crediting, please ensure that the customer inputs the recipient's first and last name exactly as it appears on the EUR or USD account created on our platform via API. If the names do not match the account holder's name, the transaction will be returned.

### Whitelisted Third Party Transcations

Upon review and approval, a third-party may be whitelisted and would not require approval for subsequent transactions. In the case of fraud, non-compliance, and security threats, issued MCY accounts may/will be blocked.

### CHARGEBACK AND REFUNDS

In certain circumstances, our payment partners may require repayment/ refund for transaction previously settled through a process referred to as "Chargeback". 

Chargebacks may be the whole or part value of the original transaction.

Where a Chargeback occurs or where the merchant fails to address a Chargeback claim within 24 hours, FINCRA shall immediately be entitled to debit the merchants position or make a deduction from any remittance, reserve and/or invoice to the merchant to recover:

* The full amount of the relevant Chargeback
* The sum of 5 EUROs for EURO denominated transactions and 20USD for DOLLAR denominated transactions as chargeback fees.

### Account Issuing Requirement

For business to issue named MCY account to individuals verification is required and the following information  must be provided;

* **Personal Information**: First Name, Last Name, Address, Zip Code, Email, Date of Birth and country of residence.
* **ID Information**: International Passport, Residence Permit, National ID (both front and back)
* **Proof of Address:** Bank statement with address, utility bill with address.

### Use Cases

* **Payroll Companies**\
    Global payroll company manages the salaries of remote employees located in different countries.\
    By integrating with the our Multicurrency Account API, the payroll companies can issue named foreign currency accounts to their remote employees. This allows for seamless and efficient salary payments in USD or EUR, enhancing employee satisfaction and reducing administrative overhead.
* **Fintech Companies**\
    Fintech company offers financial services to freelancers that operate internationally. By leveraging the Multicurrency Account API, fintech companies can offer its users named foreign currency accounts which allows users to manage their international payments more efficiently, reducing transfer times and costs while ensuring compliance with regulatory standards.
* **Individuals with Friends and Family Abroad**\
    Individuals that receive financial support from friends and family abroad. Can now receive USD and EUR directly into their named accounts.
* **Digital Nomads**\
    A Digital nomad travels and works from various countries, and a reliable way to receive payments from clients worldwide. Digital nomad can now receive payments in USD or EUR directly into their named account, regardless of their current location.
* **Freelancers and Remote Workers**\
    With a our Multicurrency Account, freelancers and remote workers can now receive payments directly into their named USD or EUR account.

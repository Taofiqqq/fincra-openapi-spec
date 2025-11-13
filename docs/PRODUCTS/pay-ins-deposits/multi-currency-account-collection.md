---
title: Multi-currency Account Collection
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
Our Multicurrency Account product simplifies international payments by enabling businesses to issue named EUR and USD accounts to individuals via our API.

> 📘 Note
> 
> - **Monthly inflow limits:** $10,000 for USD and €10,000 for EUR accounts.
> - **Transaction limits:** Max $10,000 or €10,000 per transaction.
> - **Auto-settlement: **Transactions below $2,000 or €2,000 settle automatically; larger amounts require additional information.
> - **Name Matching: **Account holder names must match exactly, or the transaction will be reversed.
> - Only configured merchants can access this via API.  
>   To get started, businesses must sign up and undergo verification.

### Purpose

Our Multicurrency Accounts are designed to help individuals own named foreign currency accounts, facilitating hassle-free international transactions. Whether you’re a freelancer, remote worker, contractor, or part of a payroll company, these accounts make it easy to receive payments for services from around the world.

Our MCY account is restricted to certain activities and countries. For a detailed list of prohibited activities and restricted countries, please check out our [Prohibited Activities and Restricted Countries section.](https://docs.fincra.com/docs/mcy-prohibited-activities-and-countries)

### Transaction Handling for Multi-currency Accounts

Inflow transactions are processed based on their type:

- **First-party inflows**: These are payments from accounts with the same name as the recipient account. They are straightforward and do not require additional review or a Request For Information (RFI).

- **Third-party inflows**: Payments from accounts with different names than the recipient’s account may require additional review, especially for amounts over $2,000 or €2,000. An RFI is also triggered after three consecutive third-party deposits.

For third-party transactions, if the required information is not provided within 48 hours, the funds will be returned to the sender, with a return fee of €15 for EUR or $35 for USD transactions.

#### Information required for inflows exceeding thresholds:

- Source of funds
- Relationship with the sender
- Evidence of relationship (e.g., contracts)
- Purpose of funds
- Sender's identity
- Frequency of transactions (One-off or Recurring)

For full details, please refer to the [Required Information/Documents (RFI)](https://docs.fincra.com/docs/mcy-required-information-and-documents) section.

## Whitelisted Third-Party Transactions

After review and approval, a third-party may be whitelisted, allowing future transactions without additional approval. However, if there is any indication of fraud, non-compliance, or security threats, the associated MCY accounts may be blocked.

## Chargebacks and Refunds

In certain cases, our payment partners may request a refund through a "Chargeback" process, which can cover the full or partial value of a previously settled transaction. If a merchant fails to resolve a chargeback claim within 24 hours, FINCRA is entitled to:

- Debit the merchant’s account or deduct from any remittance, reserve, or invoice.
- Charge a fee of €15 for EUR transactions or $35 for USD transactions.

## Account Issuance Requirements

To issue a named MCY account for individuals, businesses must provide verified information, including:

Personal Information: First name, last name, address, zip code, email, date of birth, and country of residence.  
ID Information: International passport, residence permit, or national ID (both front and back).  
Proof of Address: Recent bank statement or utility bill.

### Accepted identity documents for MCY account.

| **Document**           | **API Value** | **Description**                                                                                                                                                                        |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.)                |
| Driver License         | driverLicense | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).                      |
| National ID card only  | nationalId    | National ID Card (Not NIN or v-NIN).                                                                                                                                                   |
| Identity Card          | idCard        | This would accept an identity card, including Resident Permit. This identity card has to be a valid government issued ID, with the name, issue date and date of birth clearly visible. |

For more detailed information on getting started, visit our dedicated page on [Multicurrency Accounts](multicurrency-virtual-account-1).
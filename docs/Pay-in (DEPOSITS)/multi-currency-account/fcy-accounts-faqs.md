---
title: FAQs
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
### What is the Fincra Multicurrency Account?

The Fincra Multicurrency Account is a product that simplifies international payments and expands opportunities for the gig economy, remote work, freelancing, payroll, fintech, eCommerce, and more. It supports issuing named EUR and USD accounts to individuals via API.

### Who can use the Fincra Multicurrency Account?

The product is designed for individuals such as freelancers, remote workers, payroll companies, contractors, and more who need to receive payments for their services easily and transparently.

### How do businesses leverage the Fincra Multicurrency Account API?

Businesses such as fintech companies, payroll companies, and eCommerce companies can integrate with Fincra's API to issue named foreign currency accounts to their individual users.

### What currencies are supported by the Fincra Multicurrency Account?

 Currently, the supported currencies include USD and EUR, with more currencies to be added in the future.

### What transaction types are supported?

 For USD accounts, the supported transaction is ACH only. 

 For EUR accounts, the supported transaction is SEPA.

### What are first-party and third-party inflows?

- **First-party inflow:** Transactions from an account with the same name as the receiver account.
- **Third-party inflow:** Transactions from an account with a different name from the receiver account.

### Are there any special considerations for third-party transactions?

 Third-party transactions above 2000 EUR would be subjected to further review to ensure compliance with regulatory and security standards. Recipients of such transactions may be required to provide additional information within 48 hours. If not provided, the transaction will be returned to the sender with a 15% return fee charged.

### What information is required for verification to get a named MCY Account?

- **Personal Information:** First Name, Last Name, Address, Zip Code, Email, Date of Birth, and country of residence.
- **ID Information:** International Passport, Residence Permit, National ID (both front and back).
- **Proof of Address:** Bank statement with address, utility bill with address.

### Can I use an expired ID?

 No, only valid means ID are acceptable and validity of ID must not be less than 1month

### Can I use ID Document and 2 Different Countries?

The country passed in payload will be checked against all provided document. Hence, you are required to provide documents with same country.

### How do I ensure my documents are accepted?

- Provide clear, scanned copies of your ID and address documents.
- Ensure all details in the documents match the information provided in the payload.

### Where can I find the zip code format guide?

 Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html).

### Why will an inflow be reversed to sender?

An inflow will be returned to the sender if the receiver account name inputed for the transaction is incorrect.  
Always ensure that first and last name of the receiver account is correct for all transactions to prevent fund reversal to sender.

### When will a transaction be flagged?

When a single transaction is above 2,000 EUR or 2,000 USD respectively and/or the third transaction within a day. These transactions would trigger a request for more information.

### What is the monthly transaction limit?

Monthly transaction limit is 10,000 EUR and 10,000 USD respectively. Transactions above this limit would require more information before they are settled.

### How can I get started with the Fincra Multicurrency Account?

 Visit us [here](https://fincra.com/multicurrency-account/?utm_source=News+letter&utm_medium=email&utm_campaign=Multicurrency+Campaign&utm_id=MCY) to get started.

### Who can I contact for questions and support?

 For questions and support, contact us at [fincra.com/contact-us](mailto:fincra.com/contact-us) or send an email to [support@fincra.com](mailto:support@fincra.com).
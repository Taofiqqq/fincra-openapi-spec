---
title: MCY FAQs
excerpt: Multi-currency Account Frequently Asked Questions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**What is the Fincra Multicurrency Account?**\
The Fincra Multicurrency Account simplifies international payments and creates opportunities for freelancers, remote workers, payroll companies, fintechs, eCommerce, and more. It allows individuals to access named EUR and USD accounts via API.

***

**Who can use the Fincra Multicurrency Account?**\
The account is tailored for individuals such as freelancers, remote workers, payroll companies, and contractors who need a seamless way to receive payments for their services.

***

**How do businesses leverage the Fincra Multicurrency Account API?**\
Businesses like fintech companies, payroll processors, and eCommerce platforms can integrate Fincra’s API to issue named foreign currency accounts to their users.

***

**What currencies are supported by the Fincra Multicurrency Account?**\
Currently, the supported currencies are USD and EUR, with plans to add more in the future.

***

**What transaction types are supported?**  

* For USD accounts: ACH transactions.  
* For EUR accounts: SEPA transactions.

***

**What are first-party and third-party inflows?**  

* **First-party inflow:** Transactions from an account with the same name as the recipient’s account.  
* **Third-party inflow:** Transactions from an account with a different name than the recipient’s.

***

**Are there special considerations for third-party transactions?**\
Yes, third-party transactions exceeding 2,000 EUR are subject to further review for compliance. The recipient may need to provide additional information within 48 hours. Failure to do so will result in the transaction being returned to the sender, with a 15% return fee applied.

***

**What information is required for verification to obtain a named Multicurrency Account?**  

* **Personal Information:** First and last name, address, zip code, email, date of birth, and country of residence.  
* **ID Information:** International passport, residence permit, or national ID (front and back).  
* **Proof of Address:** Bank statement or utility bill showing your address.

***

**Can I use an expired ID?**\
No, only valid IDs are accepted, and they must remain valid for at least one month from submission.

***

**Can I submit ID documents from two different countries?**\
No. The country provided in the payload must match the country on all submitted documents.

***

**How do I ensure my documents are accepted?**  

* Submit clear, scanned copies of your ID and address documents.  
* Ensure the information on the documents matches the details in the payload.

***

**Where can I find the zip code format guide?**\
You can refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html) for assistance.

***

**Why would an inflow be reversed to the sender?**\
An inflow may be reversed if the recipient account name is incorrect. Always ensure the first and last name of the recipient match to prevent funds from being returned to the sender.

***

**When is a transaction flagged?**\
Transactions will be flagged if they exceed 2,000 EUR or 2,000 USD or if there are more than three transactions in a single day. These will prompt a request for additional information.

***

**What is the monthly transaction limit?**\
The monthly transaction limit is 10,000 EUR and 10,000 USD. Transactions beyond this limit will require additional information before settlement.

***

**How can I get started with the Fincra Multicurrency Account?**\
Visit \[this link] to get started.

***

**Who can I contact for questions and support?**\
For support, visit fincra.com/contact-us or email [support@fincra.com](mailto:support@fincra.com).

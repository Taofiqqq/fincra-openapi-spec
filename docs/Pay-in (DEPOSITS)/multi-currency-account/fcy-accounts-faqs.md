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
# FAQs

### What is the Fincra Multicurrency Account?

The Multicurrency Account is an account in a foreign currency that your business uses to collect money from customers in other countries.

Your business can hold an account in its own name. Your business can also issue accounts that carry the names of your own customers, such as freelancers, contractors, marketplace sellers and payroll recipients.

Money that arrives settles to your Fincra wallet.

### Who can use the Fincra Multicurrency Account?

A registered business. Fincra onboards businesses, not individuals.

Your business can hold accounts in its own name. Your business can also issue accounts in the names of its own customers, once Fincra has approved it to do so.

A person who holds one of these accounts is a customer of your business. They are not a customer of Fincra.

### How do businesses leverage the Fincra Multicurrency Account API?

A business uses the API to request an account in its own name, or an account in the name of one of its customers. The API returns the account details, reports the outcome by webhook, and lists the money that arrives.

Freelancers, contractors, marketplace sellers and payroll recipients get their accounts through the business that serves them.

### What currencies are supported by the Fincra Multicurrency Account?

Fincra issues accounts in the US dollar, the euro, the British pound and the Canadian dollar.

An account in the name of an individual is available in the euro and the Canadian dollar. For the US dollar and the British pound, request a corporate account.

Fincra sends money out in the US dollar, the euro, the British pound and the Chinese yuan.

### What transaction types are supported?

The account receives money by bank transfer, on the payment schemes listed for that currency.

Money that arrives settles to your Fincra wallet. It does not stay in the virtual account. Read the funding guide.

### What are first-party and third-party inflows?

- **A first-party inflow** is a payment where the sender's name matches the name on the account. The account holder is paying themselves.
- **A third-party inflow** is a payment where the sender's name does not match the name on the account. Somebody else is paying the account holder.

### Are there any special considerations for third-party transactions?

Yes. Fincra checks a third-party payment automatically.

1. A payment arrives from a sender whose name does not match the account name.
2. Fincra raises a request for information by itself.
3. The money settles when the answer arrives inside 48 hours.
4. Fincra adds that sender to the approved list. A later payment from the same sender settles by itself.

Treat 48 hours as the absolute maximum. Answer sooner. A payment that nobody answers in time is returned to the sender.

An account held by a licensed financial institution cannot receive a third-party payment at all. The payment is returned to the sender.

### What information is required for verification to get a named MCY Account?

**Personal Information**

- First name and last name
- Date of birth
- Residential address and zip code
- Country of residence
- Email address

**ID Information**

- A valid government identity document
- The document must match the country given in the request

**Proof of Address**

- A bank statement or a utility bill
- **The document must carry the applicant's own name.** A bill in a landlord's name or a family member's name is refused. Where a utility bill is not in the applicant's name, send a bank statement.
- The document must be less than 3 months old, counted from the day it is provided.

### Can I use an expired ID?

No. The identity document must be valid on the day you send the request.

A document that expired less than one month ago can be accepted. A document that expired earlier than that is refused. Send a current document.

### Can I use ID Document and 2 Different Countries?

No. Every document must match the country you give in the request.

An identity document issued by one country and a proof of address from another country is refused. Send the request with the country that matches the documents.

### How do I ensure my documents are accepted?

Check three things before you send the request.

- **The typed values match the document.** The name, the address, the date of birth and the document number must be the same in the form and on the file. A value that does not match is the most frequent single cause of a decline.
- **The proof of address carries the applicant's own name and is less than 3 months old.**
- **The file is an original image of the whole document.** Fincra refuses a screenshot, a photograph of another screen, an expired document, an altered image, and an image where the text is not clear.

### Where can I find the zip code format guide?

The zip code format guide is linked from this page. Use it to write the zip code in the format the destination country expects. A zip code in the wrong format causes an address check to fail.

Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html).

### Why will an inflow be reversed to sender?

An inflow is returned to the sender in these cases.

- The payer entered a name that does not match the account holder's registered name, and the account is held by a licensed financial institution.
- Fincra asked for information about the payment and nobody answered inside 48 hours.
- The payment breaks a rule on the prohibited activities and countries page.

### When will a transaction be flagged?

Fincra reviews a payment in these cases.

- A single payment above 2,000 in the account currency.
- The third payment into the account in one day.
- A payment from a sender whose name does not match the account name.

A review holds the money until the question is answered. It does not on its own mean the payment is refused.

### What is the monthly transaction limit?

The monthly figure of 10,000 applies to an account issued in the name of an individual.

**A business account does not use that figure.** Fincra confirms the limit on a business account when it issues the account.

### How can I get started with the Fincra Multicurrency Account?

Contact Fincra to have your business onboarded and approved for account issuing. Once you are approved, follow the request guides in this section.

Visit us [here](https://fincra.com/multicurrency-account/?utm_source=News+letter\&utm_medium=email\&utm_campaign=Multicurrency+Campaign\&utm_id=MCY) to get started.

### Who can I contact for questions and support?

Email the Fincra support team, or use the contact form on the Fincra website. Include the account identifier and the request identifier where you have them.

_\[Editor: restore the existing support email address and contact link here.]_

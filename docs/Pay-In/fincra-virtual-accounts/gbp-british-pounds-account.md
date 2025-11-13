---
title: GBP (British Pounds) Account
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
This section describes the requirements for creating a virtual account in GBP. In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take your time to go through each request properly.

With a GBP virtual account, payments can be received in GBP 

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
> 
> - [How to create a virtual account](/docs/fincra-virtual-account-creation)
> - [Currencies we support for virtual account creations](/docs/create-virtual-accounts)
> - [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> - [Sub accounts](/docs/sub-accounts)

<br />

GBP Account Settlement Time
-------------------
The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.
[block:parameters]
{
  "data": {
    "h-0": "Payment Scheme",
    "h-1": "Time",
    "0-0": "CHAPS",
    "1-0": "FPS",
    "0-1": "Within 24 hours",
    "1-1": "10 seconds to one day"
  },
  "cols": 2,
  "rows": 2
}
[/block]
<br />

Endpoint Parameters
-------------------
These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

- [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/v2/accounts
```

- [Create a virtual account for a sub-account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account  for a sub account in any currency

```json
{{host}}/v2/accounts
```

**Note** 

- After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

- The `meansOfId` can be sent as a string, file, or array of URLs when making use of the [create virtual account endpoint] (/reference/request-virtual-accounts)

***

### Individual Request

These are the fields required to process an individual virtual account request in GBP

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "type",
    "h-3": "Description",
    "0-0": "currency",
    "0-1": "Yes",
    "0-2": "string",
    "0-3": "The virtual account currency.e.g EUR",
    "1-0": "accountType",
    "1-1": "Yes",
    "1-2": "string",
    "1-3": "The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details",
    "4-0": "meansOfId",
    "4-1": "No",
    "4-2": "string/array",
    "4-3": "The customer's means of identification which should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation)",
    "5-0": "utilityBill",
    "5-1": "No",
    "5-2": "string",
    "5-3": "Electricity bills, water bills or any detailed invoice showing the usage of a service. This can be a File Upload or URL link to the document. ",
    "6-0": "KYCInformation.firstName",
    "6-1": "Yes",
    "6-2": "string",
    "6-3": "The customer's first name . This is required to create an individual  account",
    "7-0": "KYCInformation.lastName",
    "7-1": "Yes",
    "7-2": "string",
    "7-3": "The customer's last name . This is required to create an individual  account",
    "8-0": "KYCInformation.birthDate",
    "8-1": "Yes",
    "8-2": "string",
    "8-3": "The birthdate of the customer(YYYY-MM-DD ).",
    "9-0": "KYCInformation.email",
    "9-1": "No",
    "9-2": "string",
    "9-3": "The customer's email.",
    "10-0": "KYCInformation.address",
    "10-1": "No",
    "10-2": "Object",
    "10-3": "The address of the customer",
    "11-0": "KYCInformation.address.country",
    "11-1": "yes",
    "11-2": "string",
    "11-3": "The address of the country",
    "12-0": "KYCInformation.address.state",
    "12-1": "yes",
    "12-2": "string",
    "12-3": "The address of the state",
    "13-0": "KYCInformation.address.zip",
    "13-1": "yes",
    "13-2": "string",
    "13-3": "The zip code",
    "14-0": "KYCInformation.address.street",
    "14-1": "yes",
    "14-2": "string",
    "14-3": "The street name",
    "15-0": "KYCInformation.address.city",
    "15-1": "yes",
    "15-2": "string",
    "15-3": "The city name",
    "16-0": "KYCInformation.document",
    "16-1": "Yes",
    "16-2": "object",
    "16-3": "The document ",
    "17-0": "KYCInformation.document.type",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The type of ID document e.g `passport`, `driverLicense`, `idCard`.  \n  \nPlease see the required values [here](/docs/documents-required-for-virtual-accounts-creation#individual-virtual-account)",
    "18-0": "KYCInformation.  \ndocument.number",
    "18-1": "Yes",
    "18-2": "string",
    "18-3": "The number on the document",
    "19-0": "KYCInformation.  \ndocument.issuedCountryCode",
    "19-1": "Yes",
    "19-2": "string",
    "19-3": "The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)",
    "20-0": "KYCInformation.  \ndocument.issuedBy",
    "20-1": "Yes",
    "20-2": "string",
    "20-3": "The government agency in charge of issuing the document.",
    "21-0": "KYCInformation.  \ndocument.issuedDate",
    "21-1": "Yes",
    "21-2": "string",
    "21-3": "The date the document was issued(\"YYYY-mm-dd\")",
    "22-0": "KYCInformation.  \ndocument.expirationDate",
    "22-1": "Yes",
    "22-2": "string",
    "22-3": "The expiration date on the document(\"YYYY-mm-dd\")",
    "23-0": "KYCInformation.  \ndocument.occupation",
    "23-1": "Yes",
    "23-2": "string",
    "23-3": "The occupation of the customer.",
    "2-0": "businessId",
    "3-0": "subAccountId",
    "2-1": "Yes",
    "3-1": "Yes",
    "2-2": "string",
    "3-2": "string",
    "2-3": "The unique Identifier of the business i.e The business ID of the merchant",
    "3-3": "The unique Identifier of the sub-account i.e The business ID of the merchant\n\n[Get Subaccount ID](reference/sub-accounts)"
  },
  "cols": 4,
  "rows": 24,
  "align": [
    null,
    null,
    null,
    null
  ]
}
[/block]

<br />

The payload should look like this :

```json EUR/GBP individual account
{
    "currency": "GBP",
    "accountType": "individual",
    "businessId": "6094eebs7062827a9ec9007f",
   "subAccountId": "60a6767a9d9fc63c92eda621",
    "meansOfId": ["https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg",
             "https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg"],
    "utilityBill": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg",
     "KYCInformation": {
      "firstName": "john",
       "lastName": "doe",
       "email": "admin@gmail.com",
       "birthDate": "2009-12-31",
      "address": {
       "country": "NG",
        "zip": "234",
       "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
       },
      "document": {
      "type": "passport",
         "number": "123433",
        "issuedCountryCode": "NG",
       "issuedBy": "government",
      "issuedDate": "2011-07-21",
     "expirationDate": "2011-07-21"
     },
      "occupation": "Software Engineer"
    }
  }
```

</br>

### Corporate Request

These are the fields required to process a corporate virtual account request in EUR/GBP.

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "type",
    "h-3": "Description",
    "0-0": "currency",
    "0-1": "Yes",
    "0-2": "string",
    "0-3": "The virtual account currency.e.g EUR",
    "3-0": "accountType",
    "3-1": "Yes",
    "3-2": "string",
    "3-3": "The virtual account type e.h corporate",
    "4-0": "reason",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "The reason for requesting a virtual account.",
    "5-0": "paymentFlowDescription",
    "5-1": "Yes",
    "5-2": "string",
    "5-3": "The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc.",
    "6-0": "monthlyVolume",
    "6-1": "Yes",
    "6-2": "string",
    "6-3": "This is the committed transaction volume multiplied by the number of days in the relevant month.",
    "7-0": "entityName",
    "7-1": "Yes",
    "7-2": "string",
    "7-3": "This is the legal name of the business or company.",
    "8-0": "attachments",
    "8-1": "No",
    "8-2": "string",
    "8-3": "This can be a single document, a list of documents, or a URL to the required documents. Please see the [API documentation ](/docs/documents-required-for-virtual-accounts-creation) for more details",
    "9-0": "KYCInformation.email",
    "9-1": "No",
    "9-2": "string",
    "9-3": "The customer's email.",
    "10-0": "KYCInformation.businessName",
    "10-1": "Yes",
    "10-2": "string",
    "10-3": "The customer's business name . This is required to create a corporate  account",
    "11-0": "KYCInformation.businessCategory",
    "11-1": "No",
    "11-2": "string",
    "11-3": "The type of business e.g Consultant, Advertising Government Agency. Financial Institution/Investment Bank etc.",
    "12-0": "KYCInformation.  \nbusinessRegistrationNumber",
    "12-1": "No",
    "12-2": "string",
    "12-3": "The registration number of the business. ",
    "13-0": "KYCInformation.additionalInfo",
    "13-1": "No",
    "13-2": "string",
    "13-3": "Some more information about the customer's business",
    "14-0": "KYCInformation.incorporationDate",
    "14-1": "No",
    "14-2": "string",
    "14-3": "The date that the customer's company was incorporated",
    "15-0": "KYCInformation.  \nbusinessActivityDescription",
    "15-1": "No",
    "15-2": "string",
    "15-3": "businessActivityDescription",
    "16-0": "KYCInformation.address",
    "16-1": "No",
    "16-2": "Object",
    "16-3": "The address of the customer",
    "17-0": "KYCInformation.address.country",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The address of the country",
    "18-0": "KYCInformation.address.state",
    "18-1": "Yes",
    "18-2": "string",
    "18-3": "The address of the state",
    "19-0": "KYCInformation.address.zip",
    "19-1": "Yes",
    "19-2": "string",
    "19-3": "The zip code",
    "20-0": "KYCInformation.address.street",
    "20-1": "Yes",
    "20-2": "string",
    "20-3": "The street name",
    "1-0": "businessId",
    "2-0": "subAccountId",
    "1-1": "Yes",
    "2-1": "Yes",
    "1-2": "string",
    "2-2": "string",
    "1-3": "The unique Identifier of the business i.e The business ID of the merchant",
    "2-3": "The unique Identifier of the sub-account i.e The business ID of the merchant\n\n[Get Subaccount ID](reference/sub-accounts"
  },
  "cols": 4,
  "rows": 21,
  "align": [
    null,
    null,
    null,
    null
  ]
}
[/block]

<br />

The payload should look like this :

```json EUR/GBP Corporate
{
  "currency": "EUR",
  "accountType": "corporate",
   "businessId": "6094eebs7062827a9ec9007f",
   "subAccountId": "60a6767a9d9fc63c92eda621",
  "entityName": "john doe legal enterprise",
  "reason": "The reason for requesting a corporate account",
  "monthlyVolume": "60000",
  "paymentFlowDescription": "we pay in pounds every month",
   "KYCInformation": {
      "email": "james@joy.com",
      "businessName": "testing",
      "businessRegistrationNumber": "testing",
      "businessCategory": "testing",
      "address": {
        "country": "NG",
        "zip": "234",
        "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
      },
      "additionalInfo": "testing",
      "incorporationDate": "20919",
      "businessActivityDescription": "testing"
    },
"attachments": "https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg",
             
}
}
```
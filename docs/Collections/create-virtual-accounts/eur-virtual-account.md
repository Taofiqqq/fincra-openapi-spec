---
title: EUR (Euro) Virtual Account
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
This section describes the requirements for creating a virtual account in EURO(EUR). In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take your time to go through each request properly.

With a EUR virtual account, payments can be received in EURO and made in different currencies.

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
> 
> - [How to create a virtual account](/docs/fincra-virtual-account-creation)
> - [Currencies we support for virtual account creations](/docs/create-virtual-accounts)
> - [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> - [Sub accounts](/docs/sub-accounts)
> - [Use cases](/docs/create-virtual-accounts#use-cases)
> - [Differences between corporate and individual virtual account requests](docs/create-virtual-accounts#virtual-account-types)

<br />

These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

- [Create a virtual account](/reference/request-virtual-accounts): This endpoint can be used to request a virtual account in any currency

```json
{{host}}/profile/virtual-accounts/requests/
```

- [Create a virtual account for your sub-account](/reference/request-individual-virtual-account-for-a-sub-account-1): This endpoint be used to request a virtual account in any currency ,  but you must first create a [sub account](/reference/create-subaccount).

```json
{{host}}/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests/auto
```

**Note** 

- After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

- The meansOfId must be sent as a string or file when making use of the [create virtual account endpoint] (/reference/request-virtual-accounts)

- The meansOfId can also be sent as a string, file, or array of URLs when making use of the [Create a virtual account for your sub-account](/reference/request-individual-virtual-account-for-a-sub-account-1).

<br />

## Euro Account Settlement Time
The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.
[block:parameters]
{
  "data": {
    "h-0": "Payment Scheme",
    "h-1": "Time",
    "0-0": "SEPA",
    "1-0": "SEPA INSTANT",
    "0-1": "Within 24hours-2 days",
    "1-1": "Within 10 seconds to one day"
  },
  "cols": 2,
  "rows": 2
}
[/block]
Endpoint Parameters
-------------------

***

### Individual Request

These are the fields required to process an individual virtual account request in EUR

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
    "2-0": "meansOfId",
    "2-1": "No",
    "2-2": "string/array",
    "2-3": "The customer's means of identification which should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation)",
    "3-0": "utilityBill",
    "3-1": "No",
    "3-2": "string",
    "3-3": "Electricity bills, water bills or any detailed invoice showing the usage of a service. This can be a File Upload or URL link to the document. ",
    "4-0": "KYCInformation.firstName",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "The customer's first name . This is required to create an individual  account",
    "5-0": "KYCInformation.lastName",
    "5-1": "Yes",
    "5-2": "string",
    "5-3": "The customer's last name . This is required to create an individual  account",
    "6-0": "KYCInformation.birthDate",
    "6-1": "Yes",
    "6-2": "string",
    "6-3": "The birthdate of the customer(YYYY-MM-DD ).",
    "7-0": "KYCInformation.email",
    "7-1": "No",
    "7-2": "string",
    "7-3": "The customer's email.",
    "8-0": "KYCInformation.address",
    "8-1": "No",
    "8-2": "Object",
    "8-3": "The address of the customer",
    "9-0": "KYCInformation.address.country",
    "9-1": "yes",
    "9-2": "string",
    "9-3": "The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria",
    "10-0": "KYCInformation.address.state",
    "10-1": "yes",
    "10-2": "string",
    "10-3": "The address of the state",
    "11-0": "KYCInformation.address.zip",
    "11-1": "yes",
    "11-2": "string",
    "11-3": "The zip code",
    "12-0": "KYCInformation.address.street",
    "12-1": "yes",
    "12-2": "string",
    "12-3": "The street name",
    "13-0": "KYCInformation.address.city",
    "13-1": "yes",
    "13-2": "string",
    "13-3": "The city name",
    "14-0": "KYCInformation.document",
    "14-1": "Yes",
    "14-2": "object",
    "14-3": "The document ",
    "15-0": "KYCInformation.document.type",
    "15-1": "Yes",
    "15-2": "string",
    "15-3": "The type of ID document e.g `passport`, `driverLicense`, `idCard`.  \n  \nPlease see the required values [here](/docs/documents-required-for-virtual-accounts-creation#individual-virtual-account)",
    "16-0": "KYCInformation.  \ndocument.number",
    "16-1": "Yes",
    "16-2": "string",
    "16-3": "The number on the document",
    "17-0": "KYCInformation.  \ndocument.issuedCountryCode",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria",
    "18-0": "KYCInformation.  \ndocument.issuedBy",
    "18-1": "Yes",
    "18-2": "string",
    "18-3": "The government agency in charge of issuing the document.",
    "19-0": "KYCInformation.  \ndocument.issuedDate",
    "19-1": "Yes",
    "19-2": "string",
    "19-3": "The date the document was issued(\"YYYY-mm-dd\")",
    "20-0": "KYCInformation.  \ndocument.expirationDate",
    "20-1": "Yes",
    "20-2": "string",
    "20-3": "The expiration date on the document(\"YYYY-mm-dd\")",
    "21-0": "KYCInformation.  \ndocument.occupation",
    "21-1": "Yes",
    "21-2": "string",
    "21-3": "The occupation of the customer."
  },
  "cols": 4,
  "rows": 22,
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
    "1-0": "accountType",
    "1-1": "Yes",
    "1-2": "string",
    "1-3": "The virtual account type e.h corporate",
    "2-0": "reason",
    "2-1": "Yes",
    "2-2": "string",
    "2-3": "The reason for requesting a virtual account.",
    "3-0": "paymentFlowDescription",
    "3-1": "Yes",
    "3-2": "string",
    "3-3": "The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc.",
    "4-0": "monthlyVolume",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "This is the committed transaction volume multiplied by the number of days in the relevant month.",
    "5-0": "entityName",
    "5-1": "Yes",
    "5-2": "string",
    "5-3": "This is the legal name of the business or company.",
    "6-0": "attachments",
    "6-1": "No",
    "6-2": "string",
    "6-3": "This can be a single document, a list of documents, or a URL to the required documents. Please see the [API documentation ](/docs/documents-required-for-virtual-accounts-creation) for more details",
    "7-0": "KYCInformation.email",
    "7-1": "No",
    "7-2": "string",
    "7-3": "The customer's email.",
    "8-0": "KYCInformation.businessName",
    "8-1": "Yes",
    "8-2": "string",
    "8-3": "The customer's business name . This is required to create a corporate  account",
    "9-0": "KYCInformation.businessCategory",
    "9-1": "No",
    "9-2": "string",
    "9-3": "The type of business e.g Consultant, Advertising Government Agency. Financial Institution/Investment Bank etc.",
    "10-0": "KYCInformation.  \nbusinessRegistrationNumber",
    "10-1": "No",
    "10-2": "string",
    "10-3": "The registration number of the business. ",
    "11-0": "KYCInformation.additionalInfo",
    "11-1": "No",
    "11-2": "string",
    "11-3": "Some more information about the customer's business",
    "12-0": "KYCInformation.incorporationDate",
    "12-1": "No",
    "12-2": "string",
    "12-3": "The date that the customer's company was incorporated",
    "13-0": "KYCInformation.  \nbusinessActivityDescription",
    "13-1": "No",
    "13-2": "string",
    "13-3": "businessActivityDescription",
    "14-0": "KYCInformation.address",
    "14-1": "No",
    "14-2": "Object",
    "14-3": "The address of the customer",
    "15-0": "KYCInformation.address.country",
    "15-1": "Yes",
    "15-2": "string",
    "15-3": "The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria",
    "16-0": "KYCInformation.address.state",
    "16-1": "Yes",
    "16-2": "string",
    "16-3": "The address of the state",
    "17-0": "KYCInformation.address.zip",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The zip code",
    "18-0": "KYCInformation.address.street",
    "18-1": "Yes",
    "18-2": "string",
    "18-3": "The street name"
  },
  "cols": 4,
  "rows": 19,
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

<br />

### Corporate Request  [ For sub-accounts ]

These are the fields required to process a corporate virtual account request in EUR for your sub account.

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
    "1-3": "The virtual account type . See",
    "2-0": "reason",
    "2-1": "Yes",
    "2-2": "string",
    "2-3": "The reason for requesting a virtual account.",
    "3-0": "paymentFlowDescription",
    "3-1": "Yes",
    "3-2": "string",
    "3-3": "The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc.",
    "4-0": "monthlyVolume",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "This is the committed transaction volume multiplied by the number of days in the relevant month.",
    "5-0": "entityName",
    "5-1": "Yes",
    "5-2": "string",
    "5-3": "This is the legal name of the business or company.",
    "6-0": "KYCInformation.email",
    "6-1": "No",
    "6-2": "string",
    "6-3": "The customer's email.",
    "7-0": "KYCInformation.businessName",
    "7-1": "Yes",
    "7-2": "string",
    "7-3": "The customer's business name . This is required to create a corporate  account",
    "8-0": "KYCInformation.businessRegistrationNumber",
    "8-1": "Yes",
    "8-2": "string",
    "8-3": "The registration number of the business",
    "9-0": "KYCInformation.businessCategory",
    "9-1": "Yes",
    "9-2": "string",
    "9-3": "The type of business e.g Consultant, Advertising Government Agency. Financial Institution/Investment Bank etc.",
    "10-0": "KYCInformation.additionalInfo",
    "10-1": "Yes",
    "10-2": "string",
    "10-3": "Some more information about the business",
    "11-0": "KYCInformation.incorporationDate",
    "11-1": "Yes",
    "11-2": "string",
    "11-3": "The date that the customer's company was incorporated",
    "12-0": "KYCInformation.businessActivityDescription",
    "12-1": "Yes",
    "12-2": "string",
    "12-3": "The description of the customer's business",
    "13-0": "KYCInformation.  \nultimateBeneficialOwners",
    "13-1": "yes",
    "13-2": "array of objects",
    "13-3": "The ultimate beneficial owners of the company . see details about [ultimate beneficial owners here](https://insights.namescan.io/knowledgebase/ultimate-beneficial-owner/)",
    "14-0": " KYCInformation.  \nultimateBeneficialOwners.lastName",
    "14-1": "yes",
    "14-2": "string",
    "14-3": "The last name",
    "15-0": "KYCInformation.  \nultimateBeneficialOwners.firstName",
    "15-1": "yes",
    "15-2": "string",
    "15-3": "The first name",
    "16-0": "KYCInformation.  \nultimateBeneficialOwners.document",
    "16-1": "yes",
    "16-2": "string",
    "16-3": "The document",
    "17-0": "KYCInformation.  \nultimateBeneficialOwners.  \nownershipPercentage",
    "17-1": "yes",
    "17-2": "string",
    "17-3": "The ownership percentage",
    "18-0": " KYCInformation  \n.ultimateBeneficialOwners.  \npoliticallyExposedPerson",
    "18-1": "yes",
    "18-2": "string",
    "18-3": "If the ultimate beneficial owner is a politically exposed person. see details [here](https://www.fatf-gafi.org/documents/documents/peps-r12-r22.html)",
    "19-0": "KYCInformation.address",
    "19-1": "yes",
    "19-2": "Object",
    "19-3": "The address of the customer",
    "20-0": "KYCInformation.address.country",
    "20-1": "yes",
    "20-2": "string",
    "20-3": "The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria",
    "21-0": "KYCInformation.address.state",
    "21-1": "yes",
    "21-2": "string",
    "21-3": "The address of the state",
    "22-0": "KYCInformation.address.zip",
    "22-1": "yes",
    "22-2": "string",
    "22-3": "The zip code",
    "23-0": "KYCInformation.address.street",
    "23-1": "yes",
    "23-2": "string",
    "23-3": "The street name"
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

```json
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": "jacob zuma",
  "reason": "ffsf",
  "monthlyVolume": "9090",
  "paymentFlowDescription": "nhshsh",
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
      "ultimateBeneficialOwners": [
        {
          "firstName": "john",
          "lastName": "doe",
          "ownershipPercentage": 79,
          "document": {
            "type": "other",
            "number": "123433",
            "issuedCountryCode": "NG",
            "issuedBy": "government",
            "issuedDate": "2011-07-21"
          },
          "politicallyExposedPerson": true
        }
      ],
      "businessActivityDescription": "testing"
    }
}
```
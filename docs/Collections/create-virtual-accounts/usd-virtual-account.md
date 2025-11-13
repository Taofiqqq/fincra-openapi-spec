---
title: USD Virtual Account
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
This section describes the requirements for creating a virtual account in the United States Dollar(USD). In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take your time to go through each request properly.

With a USD virtual account, payments can be received in USD and made in different currencies.

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> * [How to create a virtual account](/docs/fincra-virtual-account-creation)
> * [Currencies we support for virtual account creations](/docs/create-virtual-accounts)
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> * [Sub accounts](/docs/sub-accounts)
> * [Use cases](/docs/create-virtual-accounts#use-cases)
> * [Differences between corporate and individual virtual account requests](docs/create-virtual-accounts#virtual-account-types)

<br />

This parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/profile/virtual-accounts/requests/
```

* [Create a virtual account for your sub-account](/reference/request-individual-virtual-account-for-a-sub-account-1): This endpoint be used to request a virtual account in any currency ,  but you must first create a [sub account](/reference/create-subaccount).

```json
{{host}}/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests/auto
```

**Note** 

* After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account , which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

* The meansOfId must be sent as a string or file when making use of the [create virtual account endpoint](/reference/request-virtual-accounts)

* The meansOfId can also be sent as a string, file, or array of URLs when making use of the [Create a virtual account for your sub-account](/reference/request-individual-virtual-account-for-a-sub-account-1).

## GBP Account Settlement Time

The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Payment Scheme
      </th>

      <th>
        Time
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CHAPS
      </td>

      <td>
        Within 24 hours
      </td>
    </tr>

    <tr>
      <td>
        FPS
      </td>

      <td>
        10 seconds to one day
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Endpoint Parameters

***

### Individual Request

These are the fields required to process an individual virtual account request in EUR

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Mandatory
      </th>

      <th>
        type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        currency
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account currency.e.g GBP
      </td>
    </tr>

    <tr>
      <td>
        accountType
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account type . Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details
      </td>
    </tr>

    <tr>
      <td>
        meansOfId
      </td>

      <td>
        NO
      </td>

      <td>
        string
      </td>

      <td>
        The customer's means of identification which should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation)
      </td>
    </tr>

    <tr>
      <td>
        utilityBill
      </td>

      <td>
        NO
      </td>

      <td>
        string
      </td>

      <td>
        Electricity bills, water bills or any detailed invoice showing the usage of a service. This can be a File Upload or URL link to the document.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.firstName
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's first name . This is required to create an individual  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.lastName
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's last name . This is required to create an individual  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.birthDate
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The birthdate of the customer(YYYY-MM-DD ).
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.email
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's email.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        The address of the customer
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.country
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.state
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the state
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.zip
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The zip code
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.street
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The street name
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.city
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The city name
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.document
      </td>

      <td>
        Yes
      </td>

      <td>
        object
      </td>

      <td>
        The document 
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.document.type
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The type of ID document e.g `passport`, `driverLicense`, `idCard`.   

        Please see the required values [here](/docs/documents-required-for-virtual-accounts-creation#individual-virtual-account)
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.number
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The number on the document
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.issuedCountryCode
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.issuedBy
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The government agency in charge of issuing the document.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.issuedDate
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The date the document was issued("YYYY-mm-dd")
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.expirationDate
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The expiration date on the document("YYYY-mm-dd")
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        document.occupation
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The occupation of the customer.
      </td>
    </tr>
  </tbody>
</Table>

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

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Mandatory
      </th>

      <th>
        type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        currency
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account currency.e.g GBP
      </td>
    </tr>

    <tr>
      <td>
        accountType
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account type e.h corporate
      </td>
    </tr>

    <tr>
      <td>
        reason
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The reason for requesting a virtual account.
      </td>
    </tr>

    <tr>
      <td>
        paymentFlowDescription
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc.
      </td>
    </tr>

    <tr>
      <td>
        monthlyVolume
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        This is the committed transaction volume multiplied by the number of days in the relevant month.
      </td>
    </tr>

    <tr>
      <td>
        entityName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        This is the legal name of the business or company.
      </td>
    </tr>

    <tr>
      <td>
        attachments
      </td>

      <td>
        No
      </td>

      <td>
        array or string
      </td>

      <td>
        This can be a single document, a list of documents, or a URL to the required documents. Please see the [API documentation ](/docs/documents-required-for-virtual-accounts-creation) for more details
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.firstName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's first name . This is required to create an individual  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.lastName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's last name . This is required to create an individual  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.email
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's email.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's business name . This is required to create a corporate  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessCategory
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The type of business e.g Consultant, Advertising Government Agency. Financial Institution/Investment Bank etc.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        businessRegistrationNumber
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The registration number of the business. 
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.additionalInfo
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        Some more information about the customer's business
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.incorporationDate
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The date that the customer's company was incorporated
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        businessActivityDescription
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        businessActivityDescription
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        The address of the customer
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.country
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.state
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The address of the state
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.zip
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The zip code
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.street
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The street name
      </td>
    </tr>
  </tbody>
</Table>

<br />

The payload should look like this :

```json EUR/GBP Corporate
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": "the legal enterprise",
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

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Mandatory
      </th>

      <th>
        type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        currency
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account currency.e.g GBP
      </td>
    </tr>

    <tr>
      <td>
        accountType
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The virtual account type . See
      </td>
    </tr>

    <tr>
      <td>
        reason
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The reason for requesting a virtual account.
      </td>
    </tr>

    <tr>
      <td>
        paymentFlowDescription
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc.
      </td>
    </tr>

    <tr>
      <td>
        monthlyVolume
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        This is the committed transaction volume multiplied by the number of days in the relevant month.
      </td>
    </tr>

    <tr>
      <td>
        entityName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        This is the legal name of the business or company.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.email
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's email.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's business name . This is required to create a corporate  account
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessRegistrationNumber
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The registration number of the business
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessCategory
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The type of business e.g Consultant, Advertising Government Agency. Financial Institution/Investment Bank etc.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.additionalInfo
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        Some more information about the business
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.incorporationDate
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The date that the customer's company was incorporated
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.businessActivityDescription
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The description of the customer's business
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        ultimateBeneficialOwners
      </td>

      <td>
        yes
      </td>

      <td>
        array of objects
      </td>

      <td>
        The ultimate beneficial owners of the company . see details about [ultimate beneficial owners here](https://insights.namescan.io/knowledgebase/ultimate-beneficial-owner/)
      </td>
    </tr>

    <tr>
      <td>
         KYCInformation.\
        ultimateBeneficialOwners.lastName
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The last name
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        ultimateBeneficialOwners.firstName
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The first name
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        ultimateBeneficialOwners.document
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The document
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.\
        ultimateBeneficialOwners.\
        ownershipPercentage
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The ownership percentage
      </td>
    </tr>

    <tr>
      <td>
         KYCInformation\
        .ultimateBeneficialOwners.\
        politicallyExposedPerson
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        If the ultimate beneficial owner is a politically exposed person. see details [here](https://www.fatf-gafi.org/documents/documents/peps-r12-r22.html)
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address
      </td>

      <td>
        yes
      </td>

      <td>
        Object
      </td>

      <td>
        The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.country
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the country. This Should be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format e.g NG should be used in place of Nigeria
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.state
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the state
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.zip
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The zip code
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.street
      </td>

      <td>
        yes
      </td>

      <td>
        string
      </td>

      <td>
        The street name
      </td>
    </tr>
  </tbody>
</Table>

<br />

The payload should look like this :

```json
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": "jacob zuma",
  "reason": "ffsf",
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

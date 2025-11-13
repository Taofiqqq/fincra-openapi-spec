---
title: EUR (Euro) Account
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

With a EUR virtual account, payments can be received in EURO

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> * [How to create a virtual account](/docs/fincra-virtual-account-creation)
> * [Currencies we support for virtual account creations](/docs/create-virtual-accounts)
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)
> * [Sub accounts](/docs/sub-accounts)

<br />

## Euro Account Settlement Time

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
        SEPA
      </td>

      <td>
        Within 24hours-2 days
      </td>
    </tr>

    <tr>
      <td>
        SEPA INSTANT
      </td>

      <td>
        Within 10 seconds to one day
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/v2/accounts
```

* [Create a virtual account for a sub-account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account  for a sub account in any currency

```json
{{host}}/v2/accounts
```

**Note** 

* After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

* The `meansOfId` can be sent as a string, file, or array of URLs when making use of the \[create virtual account endpoint] (/reference/request-virtual-accounts)

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
        The virtual account currency.e.g EUR
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
        businessId
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The unique Identifier of the business i.e The business ID of the merchant
      </td>
    </tr>

    <tr>
      <td>
        subAccountId
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The unique Identifier of the sub-account i.e The business ID of the merchant

        [Get Subaccount ID](reference/sub-accounts)
      </td>
    </tr>

    <tr>
      <td>
        meansOfId
      </td>

      <td>
        No
      </td>

      <td>
        string/array
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
        No
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
        No
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
        The address of the country
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
        The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)
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
        The virtual account currency.e.g EUR
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
        The virtual account type e.g corporate
      </td>
    </tr>

    <tr>
      <td>
        businessId
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The unique Identifier of the business i.e The business ID of the merchant
      </td>
    </tr>

    <tr>
      <td>
        subAccountId
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The unique Identifier of the sub-account i.e The business ID of the merchant

        [Get Subaccount ID](reference/sub-accounts)
      </td>
    </tr>

    <tr>
      <td>
        reason
      </td>

      <td>
        Yes
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
        Yes
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
        Yes
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
        Yes
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
        string
      </td>

      <td>
        This can be a single document, a list of documents, or a URL to the required documents. Please see the [API documentation ](/docs/documents-required-for-virtual-accounts-creation) for more details
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
        Yes
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
        No
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
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The address of the country
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.address.state
      </td>

      <td>
        Yes
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
        Yes
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
        Yes
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
  "currency": "EUR",
   "businessId": "6094eebs7062827a9ec9007f",
   "subAccountId": "60a6767a9d9fc63c92eda621",
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

---
title: GBP (British Pounds) Account
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This section describes the requirements for creating a virtual account in GBP. In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take your time to go through each request properly.

With a GBP virtual account, payments can be received in GBP 

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> * [How to create a virtual account](/docs/fincra-virtual-accounts)
> * [Currencies we support for virtual account creations](/docs/fincra-virtual-accounts#requesting-virtual-accounts)
> * [Virtual Account Webhook Structure](/docs/virtual-account-webhook)

<br />

## GBP Account Settlement Time

The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.

| Payment Scheme | Time                  |
| :------------- | :-------------------- |
| CHAPS          | Within 24 hours       |
| FPS            | 10 seconds to one day |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

* [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/profile/virtual-accounts/requests
```

**Note** 

* After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

* The `meansOfId` can be sent as a string, file, or array of URLs when making use of the [create virtual account endpoint](/reference/request-virtual-accounts)

***

### Individual Request

These are the fields required to process an individual virtual account request in GBP

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
        meansOfId
      </td>

      <td>
        Yes
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
        Yes
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
        bankStatement
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Account statement from the user's bank. This can be a File Upload or URL link to the document.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        KYC Information object
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
        KYCInformation.nationality
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's place of birth
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.email
      </td>

      <td>
        Yes
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
        KYCInformation.address.countryOfResidence
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

    <tr>
      <td>
        KYCInformation.address.number
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The house number
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.sourceOfIncome
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Customer's source of income
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.accountDesignation
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Specific use of the account e.g for personal use, corporate use, school fee payments etc
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.employmentStatus
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Customer's employment status
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.incomeBand
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Customer's income band.IncomeBand can be described as earning range or salary range of the customer.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.phone
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's phone number.
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
        The expiration date on the document ("mm-dd-YYYY").
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.occupation
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

```json GBP individual account
{
    "currency": "GBP",
    "meansOfId": [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ],
    "utilityBill": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "bankStatement": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "accountType": "individual",
    "KYCInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@gmail.com",
        "birthDate": "1984-07-24",
        "nationality": "NG",
        "incomeBand": "0-100000",
        "phone": "09031234321",
        "address": {
            "countryOfResidence": "NG",
            "zip": "23401",
            "street": "Obada",
            "number": "10",
            "state": "Lagos",
            "city": "Alimosho"
        },
        "document": {
            "type": "passport",
            "number": "B00530002",
            "issuedCountryCode": "NG",
            "issuedBy": "government",
            "issuedDate": "2000-09-14",
            "expirationDate": "02-09-2024"
        },
        "occupation": "Software-Developer",
        "sourceOfIncome": "Software-Development",
        "accountDesignation": "personal",
        "employmentStatus": "Employed"
    }
}
```

</br>

### Corporate Request

These are the fields required to process a corporate virtual account request in EUR/GBP.

| Field                          | Mandatory | type   | Description                                                                                                                          |
| ------------------------------ | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| currency                       | Yes       | string | The virtual account currency.e.g GBP                                                                                                 |
| accountType                    | Yes       | string | The virtual account type e.h corporate                                                                                               |
| reason                         | Yes       | string | The reason for requesting a virtual account.                                                                                         |
| paymentFlowDescription         | Yes       | string | The countries payments are coming from and going to, The general purpose of these payments, Customer categories of the business etc. |
| monthlyVolume                  | Yes       | string | This is the committed transaction volume multiplied by the number of days in the relevant month.                                     |
| entityName                     | Yes       | string | This is the legal name of the business or company.                                                                                   |
| KYCInformation.address         | Yes       | Object | The address of the customer                                                                                                          |
| KYCInformation.address.country | Yes       | string | The address of the country                                                                                                           |
| KYCInformation.address.state   | Yes       | string | The address of the state                                                                                                             |
| KYCInformation.address.zip     | Yes       | string | The zip code                                                                                                                         |
| KYCInformation.address.street  | Yes       | string | The street name                                                                                                                      |
| KYCInformation.address.houseId | Yes       | string | The business address number(Required for only UK residents)                                                                          |

<br />

The payload should look like this :

```json GBP Corporate
{
    "currency": "GBP",
    "accountType": "corporate",
    "KYCInformation": {
        "city": "Lekki",
        "state": "lagos",
        "zip": "234",
        "houseId": "12345" //for UK residents
    },
    "reason": "The reason for requesting a corporate account",
    "monthlyVolume": 10000,
    "entityName": "john doe legal enterprise",
    "paymentFlowDescription": "we pay in pounds every month"
}
```

**Please note that we will get other required information from the KYC that was submitted during onboarding**

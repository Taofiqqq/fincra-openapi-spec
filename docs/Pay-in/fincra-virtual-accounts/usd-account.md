---
title: USD Account
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
This section describes the requirements for creating a virtual account in USD. In this section, the payloads have been separated into the requirements for individual and corporate accounts. Please take time to go through each request properly.

With a USD Virtual Account, merchants can receive payments in USD. 

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
>
> [How to create a virtual account](/docs/fincra-virtual-accounts)\
>  [Currencies we support for virtual account creations](/docs/fincra-virtual-accounts#requesting-virtual-accounts)\
>  [Virtual Account Webhook Structure](/docs/virtual-account-webhook)

<br />

## USD Account Settlement Time

The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, which is determined by the payment scheme the sender uses.

| Payment Scheme | Time                  |
| :------------- | :-------------------- |
| CHAPS          | Within 24 hours       |
| FPS            | 10 seconds to one day |
| SWIFT          | 1-5 days              |
| Wire           | Less than 10 hours    |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints supported for our virtual account requests :

* [Create a virtual account](/reference/request-virtual-accounts): This endpoint can be used to request a Virtual Account in any currency

```json
{{host}}/profile/virtual-accounts/requests
```

* [Create a virtual account for a sub-account](/reference/create-a-virtual-account-for-a-sub-account) : This endpoint can be used to request a Virtual Account  for a sub account in any currency

```json
{{host}}/profile/virtual-accounts/business/{businessId}/sub-accounts/{subAccountId}/requests
```

**Note** 

* After a Virtual Account creation request is made, a response with a data object containing a unique identifier `_id` of the virtual account will be returned, which would also be included in the webhook sent as `id`  if the virtual account is declined or approved.

* The `meansOfId` can be sent as a string, file, or array of URLs when making use of the [create virtual account endpoint](/reference/request-virtual-accounts)

***

### Individual Request

These are the fields required to process an individual Virtual Account request in USD

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
        String
      </td>

      <td>
        The virtual account currency.e.g USD
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
        String
      </td>

      <td>
        The virtual account type. Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details
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
        String/Array
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
        String
      </td>

      <td>
        Electricity bills, water bills or any detailed invoice showing the usage of a service. This can be a File Upload or a URL link to the document. 
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
        String
      </td>

      <td>
        The customer's first name. This is required to create an individual  account
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
        String
      </td>

      <td>
        The customer's last name. This is required to create an individual  account
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
        String
      </td>

      <td>
        The customer's phone number.
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
        String
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
        String
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
        String
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
        yes
      </td>

      <td>
        String
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
        String
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
        String
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
        String
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
        yes
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
        KYCInformation.address.city
      </td>

      <td>
        yes
      </td>

      <td>
        String
      </td>

      <td>
        The city name
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.sourceOfIncome
      </td>

      <td>
        yes
      </td>

      <td>
        String
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
        yes
      </td>

      <td>
        String
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
        yes
      </td>

      <td>
        String
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
        yes
      </td>

      <td>
        String
      </td>

      <td>
        Customer's income band. IncomeBand can be described as earning range or salary range of the customer.
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
        Object
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
        String
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
        String
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
        String
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
        String
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
        String
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
        String
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
        String
      </td>

      <td>
        The occupation of the customer.
      </td>
    </tr>
  </tbody>
</Table>

<br />

The payload should look like this :

```json USD individual account
{"currency":"USD",
  "meansOfId":["https://reviewtestbucket.s3.amazonaws.com/va_documents/passport-min-compressed_f5f30001-34cc-466b-a49f-4931b6531117.jpg"],
            "utilityBill":"https://reviewtestbucket.s3.amazonaws.com/va_documents/image%20%2816%29_04a5a024-14de-491e-9ecf-2861dd111cb7.png",
            "bankStatement": "https://reviewtestbucket.s3.amazonaws.com/va_documents/ZEN_20220801_20221031_191_AAAAA_152_-387091521_1668626227521_feeaa8e5-28b9-487a-1172-f1b5ecc96158.pdf",
            "accountType":"individual",
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
                "number":"10",
                "state": "Lagos",
                "city": "Alimosho"
            },
            "document": {
                "type": "passport",
                "number": "B00530002",
                "issuedCountryCode": "NG",
                "issuedBy": "government",
                "issuedDate": "2000-09-14",
                "expirationDate": "2000-09-13"
            },
            "occupation": "Software-Developer",
            "sourceOfIncome": "Software-Development",
            "accountDesignation": "personal",
            "employmentStatus": "Employed"
        }
```

</br>

### Corporate Request

These are the fields required to process a corporate Virtual Account request in EUR/GBP.

| Field                          | Mandatory | type   | Description                                                                                                                          |
| ------------------------------ | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| currency                       | Yes       | String | The virtual account currency.e.g USD                                                                                                 |
| accountType                    | Yes       | String | The virtual account type e.h corporate                                                                                               |
| reason                         | Yes       | String | The reason for requesting a virtual account.                                                                                         |
| paymentFlowDescription         | Yes       | String | The countries payments are coming from and going to, The general purpose of these payments, Customer categories of the business etc. |
| monthlyVolume                  | Yes       | String | This is the committed transaction volume multiplied by the number of days in the relevant month.                                     |
| entityName                     | Yes       | String | This is the legal name of the business or company.                                                                                   |
| KYCInformation.address.state   | Yes       | String | The address of the state                                                                                                             |
| KYCInformation.address.zip     | Yes       | String | The zip code                                                                                                                         |
| KYCInformation.address.city    | Yes       | String | The business City                                                                                                                    |
| KYCInformation.address.houseId | Yes       | String | The house number (This is only required for  UK residents)                                                                           |

<br />

The payload should look like this :

```json USD Corporate
{
  "currency": "USD",
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
  "paymentFlowDescription": "we pay in pounds every month",
}
```

 **Please Note That we will get the other information from the KYC that was  submitted during onboarding**

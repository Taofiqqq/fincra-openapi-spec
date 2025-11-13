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
> - [How to create a virtual account](/docs/fincra-virtual-accounts)
> - [Currencies we support for virtual account creations](/docs/fincra-virtual-accounts#requesting-virtual-accounts)
> - [Virtual Account Webhook Structure](/docs/virtual-account-webhook)

<br />

## Euro Account Settlement Time

The settlement time is the amount of time it takes for funds to be deposited into your Fincra account/IBAN, and it is determined by the payment scheme used by the sender.

| Payment Scheme | Time                         |
| :------------- | :--------------------------- |
| SEPA           | Within 24hours-2 days        |
| SEPA INSTANT   | Within 10 seconds to one day |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints we support for our virtual account requests :

- [Create a virtual account](/reference/request-virtual-accounts) : This endpoint can be used to request a virtual account in any currency

```json
{{host}}/profile/virtual-accounts/requests
```

**Note** 

- After a virtual account creation request is made, we will return a response with a data object containing a unique identifier `_id` of the virtual account, which we would also include in the webhook we send to you as `id` if the virtual account is declined or approved.

- The `meansOfId` can be sent as a string, file, or array of URLs when making use of the [create virtual account endpoint](/reference/request-virtual-accounts)

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
    "2-1": "Yes",
    "2-2": "string/array",
    "2-3": "The customer's means of identification which should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation)",
    "3-0": "utilityBill",
    "3-1": "Yes",
    "3-2": "string",
    "3-3": "Electricity bills, water bills or any detailed invoice showing the usage of a service. This can be a File Upload or a URL link to the document. ",
    "4-0": "bankStatement",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "Account statement from the user's bank. This can be a File Upload or URL link to the document.",
    "5-0": "KYCInformation",
    "5-1": "Yes",
    "5-2": "Object",
    "5-3": "KYC Information  object",
    "6-0": "KYCInformation.firstName",
    "6-1": "Yes",
    "6-2": "string",
    "6-3": "The customer's first name. This is required to create an individual  account",
    "7-0": "KYCInformation.lastName",
    "7-1": "Yes",
    "7-2": "string",
    "7-3": "The customer's last name. This is required to create an individual  account",
    "8-0": "KYCInformation.birthDate",
    "8-1": "Yes",
    "8-2": "string",
    "8-3": "The birthdate of the customer(YYYY-MM-DD ).",
    "9-0": "KYCInformation.nationality",
    "9-1": "Yes",
    "9-2": "string",
    "9-3": "The birthplace of the customer",
    "10-0": "KYCInformation.email",
    "10-1": "Yes",
    "10-2": "string",
    "10-3": "The customer's email.",
    "11-0": "KYCInformation.address",
    "11-1": "Yes",
    "11-2": "Object",
    "11-3": "The address of the customer",
    "12-0": "KYCInformation.address.countryOfResidence",
    "12-1": "Yes",
    "12-2": "string",
    "12-3": "The address of the country",
    "13-0": "KYCInformation.address.state",
    "13-1": "Yes",
    "13-2": "string",
    "13-3": "The address of the state",
    "14-0": "KYCInformation.address.zip",
    "14-1": "Yes",
    "14-2": "string",
    "14-3": "The zip code",
    "15-0": "KYCInformation.address.street",
    "15-1": "Yes",
    "15-2": "string",
    "15-3": "The street name",
    "16-0": "KYCInformation.address.city",
    "16-1": "Yes",
    "16-2": "string",
    "16-3": "The city name",
    "17-0": "KYCInformation.address.number",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The house number",
    "18-0": "KYCInformation.sourceOfIncome",
    "18-1": "Yes",
    "18-2": "string",
    "18-3": "Customer's source of income",
    "19-0": "KYCInformation.accountDesignation",
    "19-1": "Yes",
    "19-2": "string",
    "19-3": "Specific use of the account e.g for personal use, corporate use, school fee payments etc.",
    "20-0": "KYCInformation.incomeBand",
    "20-1": "Yes",
    "20-2": "string",
    "20-3": "Customer's income band. IncomeBand can be described as earning range or salary range of the customer.",
    "21-0": "KYCInformation.phone",
    "21-1": "Yes",
    "21-2": "string",
    "21-3": "The customer's phone number",
    "22-0": "KYCInformation.employmentStatus",
    "22-1": "Yes",
    "22-2": "string",
    "22-3": "Customer's employment status",
    "23-0": "KYCInformation.document",
    "23-1": "Yes",
    "23-2": "object",
    "23-3": "The document ",
    "24-0": "KYCInformation.document.type",
    "24-1": "Yes",
    "24-2": "string",
    "24-3": "The type of ID document e.g `passport`, `driverLicense`, `idCard`.  \n  \nPlease see the required values [here](/docs/documents-required-for-virtual-accounts-creation#individual-virtual-account)",
    "25-0": "KYCInformation.  \ndocument.number",
    "25-1": "Yes",
    "25-2": "string",
    "25-3": "The number on the document",
    "26-0": "KYCInformation.  \ndocument.issuedCountryCode",
    "26-1": "Yes",
    "26-2": "string",
    "26-3": "The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)",
    "27-0": "KYCInformation.  \ndocument.issuedBy",
    "27-1": "Yes",
    "27-2": "string",
    "27-3": "The government agency in charge of issuing the document.",
    "28-0": "KYCInformation.  \ndocument.issuedDate",
    "28-1": "Yes",
    "28-2": "string",
    "28-3": "The date the document was issued(\"YYYY-mm-dd\")",
    "29-0": "KYCInformation.  \ndocument.expirationDate",
    "29-1": "Yes",
    "29-2": "string",
    "29-3": "The expiration date on the document (\"mm-dd-YYYY\").",
    "30-0": "KYCInformation.occupation",
    "30-1": "Yes",
    "30-2": "string",
    "30-3": "The occupation of the customer."
  },
  "cols": 4,
  "rows": 31,
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

```json EUR individual account
{
    "currency": "EUR",
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

| Field                          | Mandatory | type   | Description                                                                                                                         |
| ------------------------------ | --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| currency                       | Yes       | string | The virtual account currency.e.g EUR                                                                                                |
| accountType                    | Yes       | string | The virtual account type e.g corporate                                                                                              |
| reason                         | Yes       | string | The reason for requesting a virtual account.                                                                                        |
| paymentFlowDescription         | Yes       | string | The countries payments are coming from and going to, The general purpose of these payments,Customer categories of the business etc. |
| monthlyVolume                  | Yes       | string | This is the committed transaction volume multiplied by the number of days in the relevant month.                                    |
| entityName                     | Yes       | string | This is the legal name of the business or company.                                                                                  |
| KYCInformation.address         | Yes       | Object | The address of the customer                                                                                                         |
| KYCInformation.address.state   | Yes       | string | The address of the state                                                                                                            |
| KYCInformation.address.zip     | Yes       | string | The zip code                                                                                                                        |
| KYCInformation.address.houseId | Yes       | string | The house number(Required for only UK residents)                                                                                    |

<br />

The payload should look like this :

```json EUR/GBP Corporate
{
    "currency": "EUR",
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

**Please Note that we will get other required information from the KYC submitted during onboarding**
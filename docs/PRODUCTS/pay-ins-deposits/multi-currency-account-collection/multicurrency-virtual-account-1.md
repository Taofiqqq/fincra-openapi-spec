---
title: Integrating the multicurrency account native API
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
## Simplify International Payments with Our Multicurrency Account Solution

Our Multicurrency Account solution streamlines global payments, offering merchants seamless access to multicurrency accounts. This product empowers businesses to issue named EUR and USD accounts to individuals, simplifying cross-border transactions.

### To get access to this product

To get started with Fincra and leverage this product, please [sign up here](#).

> 📘 To fully understand all things MCY visit our dedicated page on [Multicurrency Accounts Collection](multi-currency-account-collection).

### How It Works

This product is accessible via API, enabling merchants to integrate Fincra’s solution into their systems and offer named currency accounts to their individual users.

The accounts are issued in the name of the individual, meaning they are for personal use only. Supported currencies include USD and EUR, with more options coming soon. Currently, USD accounts support ACH transactions, while EUR accounts are compatible with SEPA transfers.

## Creating an EUR Virtual Account

The following outlines the requirements for creating a EUR virtual account. At Fincra, we currently support only individual accounts for EUR. Here's a quick guide to how permanent EUR virtual accounts can be created on our platform.

### Collect Customer Details

To create a virtual account, you'll need to pass information such as currency, accountType, meansOfID KYCInformation, etc.

Please find below the request parameters for the endpoint.

| **Field**                                 | **Mandatory** | **type**     | **Description**                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                                  | Yes           | string       | The virtual account currency.e.g EUR                                                                                                                                                                                                                      |
| accountType                               | Yes           | string       | The virtual account type. For EUR, we currently only offer `individual` accounts.                                                                                                                                                                         |
| meansOfId                                 | Yes           | string/array | The customer's means of identification which should be a valid government ID e.g passport, driver license. Please see the [Accepted Documents](https://docs.fincra.com/docs/eur-virtual-account#accepted-identity-documents-for-eur-virtual-account)      |
| utilityBill                               | Yes           | string       | Accepted documents, such as electricity bills, water bills, service invoices, or bank statements, must be issued within the last 3 months, with the name and address matching the payload details. These can be submitted as a file upload or a URL link. |
| bankStatement                             | Yes           | string       | A bank account statement, issued within the last 3 months, with the name and address matching the payload details, can be submitted as a file upload or URL link.                                                                                         |
| **KYCInformation**                        | Yes           | Object       | KYC Information object                                                                                                                                                                                                                                    |
| KYCInformation.firstName                  | Yes           | string       | The customer's first name. This is required to create an individual account                                                                                                                                                                               |
| KYCInformation.lastName                   | Yes           | string       | The customer's last name. This is required to create an individual account                                                                                                                                                                                |
| KYCInformation.birthDate                  | Yes           | string       | The birthdate of the customer(YYYY-MM-DD). Please ensure that the DOB presented here matches with the date of birth visible on the means of ID.                                                                                                           |
| KYCInformation.nationality                | Yes           | string       | The birthplace of the customer                                                                                                                                                                                                                            |
| KYCInformation.email                      | Yes           | string       | The customer's email.                                                                                                                                                                                                                                     |
| **KYCInformation.address**                | Yes           | Object       | The address of the customer                                                                                                                                                                                                                               |
| KYCInformation.address.countryOfResidence | Yes           | string       | The address of the country                                                                                                                                                                                                                                |
| KYCInformation.address.state              | Yes           | string       | The address of the state                                                                                                                                                                                                                                  |
| KYCInformation.address.zip                | Yes           | string       | The zip code must be valid. Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html) .                                                                                                                 |
| KYCInformation.address.street             | Yes           | string       | The street name                                                                                                                                                                                                                                           |
| KYCInformation.address.city               | Yes           | string       | The city name                                                                                                                                                                                                                                             |
| KYCInformation.address.number             | Yes           | string       | The house number                                                                                                                                                                                                                                          |
| KYCInformation.sourceOfIncome             | Yes           | string       | Customer's source of income                                                                                                                                                                                                                               |
| KYCInformation.accountDesignation         | Yes           | string       | Specific use of the account e.g for personal use, corporate use, school fee payments etc.                                                                                                                                                                 |
| KYCInformation.incomeBand                 | Yes           | string       | Customer's income band. IncomeBand can be described as earning range or salary range of the customer.                                                                                                                                                     |
| KYCInformation.phone                      | Yes           | string       | The customer's phone number                                                                                                                                                                                                                               |
| KYCInformation.employmentStatus           | Yes           | string       | Customer's employment status                                                                                                                                                                                                                              |
| **KYCInformation.document**               | Yes           | object       | The document                                                                                                                                                                                                                                              |
| KYCInformation.document.type              | Yes           | string       | The type of ID document e.g `passport`, `driverLicense`, `nationalId`.                                                                                                                                                                                    |
| KYCInformation.document.number            | Yes           | string       | The number on the document                                                                                                                                                                                                                                |
| KYCInformation.document.issuedCountryCode | Yes           | string       | The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)                                                                                                                                                |
| KYCInformation.document.issuedBy          | Yes           | string       | The government agency in charge of issuing the document.                                                                                                                                                                                                  |
| KYCInformation.document.issuedDate        | Yes           | string       | The date the document was issued("YYYY-mm-dd")                                                                                                                                                                                                            |
| KYCInformation.document.expirationDate    | Yes           | string       | The expiration date on the document ("YYYY-mm-dd"). Optional only when document type is `nationalId`.                                                                                                                                                     |
| KYCInformation.occupation                 | Yes           | string       | The occupation of the customer.                                                                                                                                                                                                                           |
| merchantReference                         | No            | string       | A unique ID/reference of the virtual account on your syste                                                                                                                                                                                                |

### Accepted identity documents for EUR virtual account.

| **Document**           | **API Value** | **Description**                                                                                                                                                                        |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.)                |
| Driver License         | driverLicense | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).                      |
| National ID card only  | nationalId    | National ID Card (Not NIN or v-NIN).                                                                                                                                                   |
| Identity Card          | idCard        | This would accept an identity card, including Resident Permit. This identity card has to be a valid government issued ID, with the name, issue date and date of birth clearly visible. |

### Request a virtual account

Make an API request to the create virtual account endpoint.

Endpoint:

```Text POST
{{base_url}}/profile/virtual-accounts/requests
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

Payload:

```Text Payload
{
    "currency": "EUR",
    "accountType": "individual",
    "utilityBill": "https://yourtestbucket.s3.amazonaws.com/va_documents/utility-bill.pdf",
    "bankStatement": "https://yourtestbucket.s3.amazonaws.com/va_documents/account-statement.pdf",
    "meansOfId": [
      "https://yourtestbucket.s3.amazonaws.com/va_documents/passport.pdf"
    ],
    "KYCInformation": {
      "address": {
        "state": "State",
        "city": "City",
        "street": "Full Street Address",
        "zip": "100020",
        "countryOfResidence": "NG",
        "number": "25"
      },
      "email": "customer@theiremail.com",
      "incomeBand": "$0 - $2,000",
      "sourceOfIncome": "Salary",
      "accountDesignation": "Personal use",
      "phone": "08012345678",
      "occupation": "Business",
      "nationality": "NG",
      "birthDate": "1998-03-29",
      "firstName": "John",
      "lastName": "Doe",
      "document": {
        "type": "passport",
        "number": "A89238923",
        "issuedCountryCode": "NG",
        "issuedBy": "government",
        "issuedDate": "2017-09-07",
        "expirationDate": "2027-07-23"
      },
      "employmentStatus": "Business",
    }
}
```

Response: You would receive a JSON snippet with the details of the virtual account, along with the id and status:

```Text Response
{
    "success": true,
    "message": "Thank you, John Doe. We are now processing your EUR account request",
    "data": {
        "status": "pending",
        "isActive": false,
        "accountNumber": null,
        "merchantReference": null,
        "virtualAccountType": "additional",
        "riskRating": "high",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "661e83489349bwe342c6a70",
        "business": "62787427843dfn3848ws",
        "currency": "EUR",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-16T14:03:50.757Z",
        "updatedAt": "2024-04-16T14:03:50.757Z"
    }
}
```

> 📘 Important Notes:
>
> * **\_id**: This is the unique identifier for the newly created virtual account. Be sure to save it, as it will be required for retrieving account details or transaction records.
> * Other fields will be included in the response, but only the key ones are highlighted here. The full request payload will also be returned in the response.

### Receive and Validate Webhook Notifications

Set up your system to listen for webhook events. We will send a notification to your specified webhook URL with the status of the virtual account creation. For details on how to secure and validate these notifications, please refer to our [guide](https://docs.fincra.com/docs/validating-webhook).

Webhook Response

```Text Success
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "approved",
    "email": "customer@theiremail.com",
    "accountType": "individual",
    "accountInformation": {},
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T13:41:38.658Z",
    "updatedAt": "2024-04-17T13:46:01.528Z"
  }
}
```
```Text Error [Doc Type]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Document type is different from the provided options",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-16T14:07:12.781Z",
    "updatedAt": "2024-04-16T14:08:32.442Z"
  }
}
```
```Text Error [Address]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Address on the document does not match with the provided one",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:34:44.138Z",
    "updatedAt": "2024-04-17T08:36:47.462Z"
  }
}
```
```Text Error [Doc Number]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Document number is not clearly visible",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:39:22.670Z",
    "updatedAt": "2024-04-17T08:41:05.941Z"
  }
}
```
```Text Error [Missing Param]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "Error occured while approving virtual account, Missing or invalid parameter: registrant.individual.address.zip - Invalid zip.",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T17:11:27.858+00:00",
    "updatedAt": "2024-04-17T17:13:27.858+00:00"
  }
}
```
```Text Error [Document]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "6655eecd8f61b674ad119828",
    "business": "64f1c9edf3c8f2940df4a710",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Address proof and document proof are of different persons",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-05-28T14:48:45.857Z",
    "updatedAt": "2024-05-28T14:51:26.445Z"
  }
}
```

> 📘 Important Notes
>
> For more information on possible verification errors, please consult our **Multicurrency Account[Verification Errors Documentation](https://docs.fincra.com/docs/mcy-account-verification-errors)**. 
>
> After the **virtualaccount.approved** event, expect a second webhook: **virtualaccount.issued**, which is triggered once the bank account is fully ready. This webhook will include the **accountInformation** field, containing the details of the newly created account.

```Text JSON
{
   "event":"virtualaccount.issued",
   "data":{
      "id":"661e83489349bwe342c6a70",
      "business":"62787427843dfn3848ws",
      "isSubAccount":false,
      "currency":"EUR",
      "currencyType":"fiat",
      "status":"approved",
      "email":"customer@theiremail.com",
      "accountType":"individual",
      "accountInformation":{
         "accountNumber":"GB27CLJU00997189822019",
         "bankName":"Clear Junction Limited",
         "bankCode":"CLJU",
         "countryCode":"GB",
         "otherInfo":{
            "iban":"GB27CLJU893899998489834",
            "accountNumber":"898989833",
            "checkNumber":"27",
            "sortCode":"009971",
            "bankSwiftCode":"CLJUGB21XXX",
            "addressableIn":"SEPA",
            "bankAddress":"6th Floor Manfield House, 1 Southampton Street, London, United Kingdom, WC2R 0LR"
         }
      },
      "accountOpeningFee":0,
      "isPermanent":true,
      "virtualAccountType":"additional",
      "createdAt":"2024-04-17T13:41:38.658Z",
      "updatedAt":"2024-04-17T13:46:01.528Z"
   }
}
```

## Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the Virtual Bank Account Query API.

**Endpoint:**

```Text GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```Text Response [Approved]
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "GB77CLJU28398298924722",
        "merchantReference": null,
        "KYCInformation": {...},
        "accountInformation": {
            "accountNumber": "GB77CLJU28398298924722",
            "bankName": "Clear Junction Limited",
            "bankCode": "CLJU",
            "countryCode": "GB",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "GB77CLJU28398298924722",
                "accountNumber": "92898942",
                "checkNumber": "19",
                "sortCode": "0089829",
                "bankSwiftCode": "CLJUGB21XXX"
            }
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [
            {
                "name": "Passport",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/International%2BPassport.pdf"
            }
        ],
        "bankStatement": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "utilityBill": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "virtualAccountType": "additional",
        "riskRating": "high",
        "checklist": {...},
        "riskScreening": "no negative check",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "6620061298389es2279c4",
        "business": {
            "name": "Merchant Name",
            "email": "merchant@theiremail.com"
        },
        "currency": "EUR",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}
```

## Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the list virtual accounts endpoint.

```Text GET
{{base_url}}/profile/virtual-accounts/?currency=eur
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=eur' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```Text JSON
{
    "success": true,
    "message": "Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
          {...},
          {...},
          {...}
				],
        "total": 3
    }
}
```

# USD Virtual Account

This account is intended for personal use, supporting only ACH transactions with a monthly limit of $10,000. The Fincra MCY account is available exclusively through API integration.

Below, we outline the requirements for creating a USD virtual account. Currently, Fincra only offers individual USD accounts, and here’s how permanent accounts can be created.

> 📘 Important
>
> * Funds received by a virtual account created, settles in the respective currency balance of the merchant.
> * Monthly limit per virtual account is 10,000 USD
> * The generated accounts are personal accounts, USD virtual account is issued in the individual’s name, and not suitable for business use.
> * The account supports ACH transactions only, ensuring swift and efficient payments.
> * To ensure compliance, it's important to note the [prohibited activities and countries restricted](https://docs.fincra.com/docs/mcy-prohibited-activities-and-countries) from having access to this product.
> * Check possible verification errors that may occur during account request [here](https://docs.fincra.com/docs/mcy-account-verification-errors).
> * Consult the guide here, for more information on how to treat requests for information on an expected deposit/inflow.
> * You can check out our [FAQ](https://docs.fincra.com/docs/mcy-accounts-faqs) section for more information.

# API Guide

## Collect Customer Details

To create a virtual account, you'll need to pass information such as currency, accountType, meansOfID KYCInformation, etc.

Please find below the request parameters for the endpoint.

| **Field**                                 | **Mandatory** | **type**     | **Description**                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                                  | Yes           | string       | The virtual account currency.e.g USD                                                                                                                                                                                                                      |
| accountType                               | Yes           | string       | The virtual account type. For USD, we currently only offer `individual` accounts.                                                                                                                                                                         |
| meansOfId                                 | Yes           | string/array | The customer's means of identification which should be a valid government ID e.g passport, driver license. Please see the [Accepted Documents](https://docs.fincra.com/docs/eur-virtual-account#accepted-identity-documents-for-eur-virtual-account)      |
| utilityBill                               | Yes           | string       | Accepted documents, such as electricity bills, water bills, service invoices, or bank statements, must be issued within the last 3 months, with the name and address matching the payload details. These can be submitted as a file upload or a URL link. |
| bankStatement                             | Yes           | string       | A bank account statement, issued within the last 3 months, with the name and address matching the payload details, can be submitted as a file upload or URL link.                                                                                         |
| **KYCInformation**                        | Yes           | Object       | KYC Information object                                                                                                                                                                                                                                    |
| KYCInformation.firstName                  | Yes           | string       | The customer's first name. This is required to create an individual account                                                                                                                                                                               |
| KYCInformation.lastName                   | Yes           | string       | The customer's last name. This is required to create an individual account                                                                                                                                                                                |
| KYCInformation.birthDate                  | Yes           | string       | The birthdate of the customer(YYYY-MM-DD). Please ensure that the DOB presented here matches with the date of birth visible on the means of ID.                                                                                                           |
| KYCInformation.birthPlace                 | No            | string       | The place of birth                                                                                                                                                                                                                                        |
| KYCInformation.birthCountry               | No            | string       | Please provide the country codes in the ISO 3166-1 alpha-2 format (e.g., US for the United States, EU for the European Union, NG for Nigeria)                                                                                                             |
| KYCInformation.taxCountry                 | Yes           | string       | Please provide the country codes in the ISO 3166-1 alpha-2 format (e.g., US for the United States, EU for the European Union, NG for Nigeria)                                                                                                             |
| KYCInformation.taxNumber                  | No            | string       | Only required when tax country is `US`                                                                                                                                                                                                                    |
| KYCInformation.nationality                | Yes           | string       | The birthplace of the customer                                                                                                                                                                                                                            |
| KYCInformation.email                      | Yes           | string       | The customer's email.                                                                                                                                                                                                                                     |
| **KYCInformation.address**                | Yes           | Object       | The address of the customer                                                                                                                                                                                                                               |
| KYCInformation.address.countryOfResidence | Yes           | string       | The address of the country                                                                                                                                                                                                                                |
| KYCInformation.address.state              | Yes           | string       | The address of the state                                                                                                                                                                                                                                  |
| KYCInformation.address.zip                | Yes           | string       | The zip code must be valid. Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html) .                                                                                                                 |
| KYCInformation.address.street             | Yes           | string       | The street name                                                                                                                                                                                                                                           |
| KYCInformation.address.city               | Yes           | string       | The city name                                                                                                                                                                                                                                             |
| KYCInformation.address.number             | Yes           | string       | The house number                                                                                                                                                                                                                                          |
| KYCInformation.sourceOfIncome             | Yes           | string       | Customer's source of income                                                                                                                                                                                                                               |
| KYCInformation.accountDesignation         | Yes           | string       | Specific use of the account e.g for personal use, corporate use, school fee payments etc.                                                                                                                                                                 |
| KYCInformation.incomeBand                 | Yes           | string       | Customer's income band. IncomeBand can be described as earning range or salary range of the customer.                                                                                                                                                     |
| KYCInformation.phone                      | Yes           | string       | The customer's phone number                                                                                                                                                                                                                               |
| KYCInformation.employmentStatus           | Yes           | string       | Customer's employment status                                                                                                                                                                                                                              |
| **KYCInformation.document**               | Yes           | object       | The document                                                                                                                                                                                                                                              |
| KYCInformation.document.type              | Yes           | string       | The type of ID document e.g `passport`, `driverLicense`, `nationalId`.                                                                                                                                                                                    |
| KYCInformation.document.number            | Yes           | string       | The number on the document                                                                                                                                                                                                                                |
| KYCInformation.document.issuedCountryCode | Yes           | string       | The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)                                                                                                                                                |
| KYCInformation.document.issuedBy          | Yes           | string       | The government agency in charge of issuing the document.                                                                                                                                                                                                  |
| KYCInformation.document.issuedDate        | Yes           | string       | The date the document was issued("YYYY-mm-dd")                                                                                                                                                                                                            |
| KYCInformation.document.expirationDate    | Yes           | string       | The expiration date on the document ("YYYY-mm-dd"). Optional only when document type is `nationalId`.                                                                                                                                                     |
| KYCInformation.occupation                 | Yes           | string       | The occupation of the customer.                                                                                                                                                                                                                           |
| merchantReference                         | No            | string       | A unique ID/reference of the virtual account on your system.                                                                                                                                                                                              |

### Accepted identity documents for USD virtual account.

| **Document**           | **API Value** | **Description**                                                                                                                                                                        |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.)                |
| Driver License         | driverLicense | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).                      |
| National ID card only  | nationalId    | National ID Card (Not NIN or v-NIN).                                                                                                                                                   |
| Identity Card          | idCard        | This would accept an identity card, including Resident Permit. This identity card has to be a valid government issued ID, with the name, issue date and date of birth clearly visible. |

## Request a virtual account

Make an API request to the create virtual account endpoint.

Endpoint:

```Text POST
{{base_url}}/profile/virtual-accounts/requests
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

Payload:

```Text Payload
{
    "currency": "USD",
    "accountType": "individual",
    "utilityBill": "https://yourtestbucket.s3.amazonaws.com/va_documents/utility-bill.pdf",
    "bankStatement": "https://yourtestbucket.s3.amazonaws.com/va_documents/account-statement.pdf",
    "meansOfId": [
      "https://yourtestbucket.s3.amazonaws.com/va_documents/passport.pdf"
    ],
    "KYCInformation": {
      "address": {
        "state": "State",
        "city": "City",
        "street": "Full Street Address",
        "zip": "100020",
        "countryOfResidence": "NG",
        "number": "25"
      },
      "email": "customer@theiremail.com",
      "incomeBand": "$0 - $2,000",
      "sourceOfIncome": "Salary",
      "accountDesignation": "Personal use",
      "phone": "08012345678",
      "occupation": "Business",
      "nationality": "NG",
      "birthDate": "1998-03-29",
      "taxCountry": "US",
      // "taxNumber": "199180037820", (If tax country is the US, the tax number would be required)
      "firstName": "John",
      "lastName": "Doe",
      "document": {
        "type": "passport",
        "number": "A89238923",
        "issuedCountryCode": "NG",
        "issuedBy": "government",
        "issuedDate": "2017-09-07",
        "expirationDate": "2027-07-23"
      },
      "employmentStatus": "Business",
    }
}
```

You would receive a JSON snippet with the details of the virtual account, along with the id and status:

```Text Response
{
    "success": true,
    "message": "Thank you, John Doe. We are now processing your EUR account request",
    "data": {
        "status": "pending",
        "isActive": false,
        "accountNumber": null,
        "merchantReference": null,
        "virtualAccountType": "additional",
        "riskRating": "high",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "661e83489349bwe342c6a70",
        "business": "62787427843dfn3848ws",
        "currency": "USD",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-16T14:03:50.757Z",
        "updatedAt": "2024-04-16T14:03:50.757Z"
    }
}
```

> 📘 Important Notes:
>
> * **\_id**: This is the unique identifier for the newly created virtual account. Be sure to save it, as it will be required for retrieving account details or transaction records.
> * Other fields will be included in the response, but only the key ones are highlighted here. The full request payload will also be returned in the response.

### Receive and Validate Webhook Notifications

Set up your system to listen for webhook events. We will send a notification to your specified webhook URL with the status of the virtual account creation. For details on how to secure and validate these notifications, please refer to our [guide](https://docs.fincra.com/docs/validating-webhook).

Webhook Response

```Text Success
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "approved",
    "email": "customer@theiremail.com",
    "accountType": "individual",
    "accountInformation": {},
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T13:41:38.658Z",
    "updatedAt": "2024-04-17T13:46:01.528Z"
  }
}
```
```Text Error [Doc Type]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Document type is different from the provided options",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-16T14:07:12.781Z",
    "updatedAt": "2024-04-16T14:08:32.442Z"
  }
}
```
```Text Error [Address]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Address on the document does not match with the provided one",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:34:44.138Z",
    "updatedAt": "2024-04-17T08:36:47.462Z"
  }
}
```
```Text Error [Doc Number]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Document number is not clearly visible",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:39:22.670Z",
    "updatedAt": "2024-04-17T08:41:05.941Z"
  }
}
```
```Text Error [Missing Param]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "Error occured while approving virtual account, Missing or invalid parameter: registrant.individual.address.zip - Invalid zip.",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T17:11:27.858+00:00",
    "updatedAt": "2024-04-17T17:13:27.858+00:00"
  }
}
```
```Text Error [Document]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "6655eecd8f61b674ad119828",
    "business": "64f1c9edf3c8f2940df4a710",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Address proof and document proof are of different persons",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-05-28T14:48:45.857Z",
    "updatedAt": "2024-05-28T14:51:26.445Z"
  }
}
```

> 📘 Important Notes
>
> For more information on possible verification errors, please consult our **Multicurrency Account[Verification Errors Documentation](https://docs.fincra.com/docs/mcy-account-verification-errors)**. 
>
> After the **virtualaccount.approved** event, expect a second webhook: **virtualaccount.issued**, which is triggered once the bank account is fully ready. This webhook will include the **accountInformation** field, containing the details of the newly created account.

```Text JSON
{
   "event":"virtualaccount.issued",
   "data":{
      "id":"661e83489349bwe342c6a70",
      "business":"62787427843dfn3848ws",
      "isSubAccount":false,
      "currency":"EUR",
      "currencyType":"fiat",
      "status":"approved",
      "email":"customer@theiremail.com",
      "accountType":"individual",
      "accountInformation":{
         "accountNumber":"8373878380",
         "bankName":"Community Federal Savings Bank",
         "bankCode":null,
         "countryCode":"",
         "reference":"n87z37-bd26-4b5b-a147-e6hd8j",
         "otherInfo":{
            "iban":"",
            "accountNumber":"8373878380",
            "checkNumber":"",
            "sortCode":"",
            "bankSwiftCode":""
         }
      },
      "accountOpeningFee":0,
      "isPermanent":true,
      "virtualAccountType":"additional",
      "createdAt":"2024-04-17T13:41:38.658Z",
      "updatedAt":"2024-04-17T13:46:01.528Z"
   }
}
```

## Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the Virtual Bank Account Query API.

Endpoint:

```Text GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```Text Response [Approved]
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "GB77CLJU28398298924722",
        "merchantReference": null,
        "KYCInformation": {...},
        "accountInformation": {
            "accountNumber": "92898942",
            "bankName": "Community Federal Savings Bank",
            "bankCode": null,
            "countryCode": "",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "",
                "accountNumber": "92898942",
                "checkNumber": "",
                "sortCode": "",
                "bankSwiftCode": ""
            }
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [
            {
                "name": "Passport",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/International%2BPassport.pdf"
            }
        ],
        "bankStatement": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "utilityBill": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "virtualAccountType": "additional",
        "riskRating": "high",
        "checklist": {...},
        "riskScreening": "no negative check",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "6620061298389es2279c4",
        "business": {
            "name": "Merchant Name",
            "email": "merchant@theiremail.com"
        },
        "currency": "USD",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}
```

## Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the list virtual accounts endpoint.

```Text GET
{{base_url}}/profile/virtual-accounts/?currency=eur
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=usd' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```Text Response
{
    "success": true,
    "message": "Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
          {...},
          {...},
          {...}
				],
        "total": 3
    }
}
```

# Funding an MCY  Account

You can fund your multi-currency account [USD / EUR] via bank transfer, with the funds immediately reflected in your balance. Additionally, a web notification will be sent each time your account is credited through a bank transfer.

> 🚧 Important!!
>
> Consult the guide [here](https://docs.fincra.com/docs/mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.

### Get the account details

If the account details are not already saved on your end, you can retrieve them by calling our get account endpoint using the [virtual account ID](/reference/get-one-virtual-account). Below are sample responses for EUR and USD virtual accounts:

```json EUR
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "GB77CLJU28398298924722",
        "merchantReference": null,
        "KYCInformation": {...},
        "accountInformation": {
            "accountNumber": "GB77CLJU28398298924722",
            "bankName": "Clear Junction Limited",
            "bankCode": "CLJU",
            "countryCode": "GB",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "GB77CLJU28398298924722",
                "accountNumber": "92898942",
                "checkNumber": "19",
                "sortCode": "0089829",
                "bankSwiftCode": "CLJUGB21XXX"
            }
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [
            {
                "name": "Passport",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/International%2BPassport.pdf"
            }
        ],
        "bankStatement": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "utilityBill": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "virtualAccountType": "additional",
        "riskRating": "high",
        "checklist": {...},
        "riskScreening": "no negative check",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "6620061298389es2279c4",
        "business": {
            "name": "Merchant Name",
            "email": "merchant@theiremail.com"
        },
        "currency": "EUR",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}

```

Note, the data needed for credit is contained within the `data.accountInformation` field. See sample below:

```json EUR
{
  "accountInformation": {
    "accountNumber": "GB77CLJU28398298924722",
    "bankName": "Clear Junction Limited",
    "bankCode": "CLJU",
    "countryCode": "GB",
    "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
    "otherInfo": {
      "iban": "GB77CLJU28398298924722",
      "accountNumber": "92898942",
      "checkNumber": "19",
      "sortCode": "0089829",
      "bankSwiftCode": "CLJUGB21XXX"
    }
  },
}
```

> ❗️ Note
>
> When displaying the virtual account information to the customer for crediting, please ensure that the customer inputs the recipient's first and last name exactly as it appears on the EUR or USD account created on our platform via API. If the names do not match the account holder's name, the transaction will be returned.

### Receiving webhook notification

Once these details have been shared with the payer, you can expect a deposit notification when payment has been made. Please refer to our guide on [setting up webhook](setup-webhook) notifications for more information. Additionally, transaction records are always available via your dashboard.

```json EUR
{
   "event":"collection.successful",
   "data":{
      "business":"64f1c99238hh9j9d210",
      "virtualAccount":"2ehj23ndd28928j89093aee",
      "senderAddress":"Street Address",
      "sourceCurrency":"EUR",
      "destinationCurrency":"EUR",
      "sourceAmount":15,
      "destinationAmount":5,
      "description":"Sent from John",
      "amountReceived":4.98,
      "fee":10.025,
      "customerName":"Customer Name",
      "settlementDestination":"wallet",
      "status":"successful",
      "initiatedAt":"2024-06-21T09:27:25.000z",
      "createdAt":"2024-06-21T09:28:35.000z",
      "updatedAt":"2024-06-21710:35:20.000z",
      "reference":"160525e1-2069-4d45-8984-01967fc0344b",
      "paymentScheme":"sepa"
   }
}
```

### Fetch payins into account

To retrieve a list of all inflows into a virtual account, you can make a GET request to our [fetch virtual account payins](/reference/fetch-payins-by-virtual-account) endpoint using the virtual account ID. This allows you to track all transactions and manage your account effectively.

```Text GET
{{base_url}}/collections?business={business_id}&virtualAccount={virtual_account_id}
```
```json cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?virtualAccount=<The Virtual Account ID>' \
     --header 'accept: application/json'
```

Response:

```Text EUR
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "EUR",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```

## Fetch all payins for specific currency

To retrieve a list of all inflows by currency, you can make a GET request to our get collections endpoint. This allows you to track all transactions and manage your account effectively.

```Text GET
{{base_url}}/collections?business={business_id}&destinationCurrency=EUR
```
```
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?business={business_id}&destinationCurrency=<Put Currency Here>' \
     --header 'accept: application/json'
```

Response:

```Text EUR
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "EUR",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```
```Text USD
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "USD",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```

For more information on chargebacks; refunds, visit our dedicated page on [Multicurrency Accounts Collection](multi-currency-account-collection).

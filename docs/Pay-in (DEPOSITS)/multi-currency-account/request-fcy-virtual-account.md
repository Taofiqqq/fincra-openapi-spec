---
title: Request FCY Account [Individual]
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
Fincra Multicurrency (FCY) Virtual Account product allows merchants to offer their `individual` users the ability to create a virtual accounts in their own names. With Fincra `FCY` Account, users can receive funds in foreign currencies, providing a seamless and efficient way to manage international transactions.

The section below, describes the requirements for creating a virtual account for USD/EUR/GBP/CAD collections. We would like to start by explaining how permanent FCY virtual accounts can be created on Fincra. We currently only offer `individual` accounts.

API Reference: [create virtual account endpoint](/reference/create-fcy-virtual-account) 

> 📘 Important
>
> * Funds received by a virtual account created, settles in the respective currency balance of the merchant.
> * Monthly limit per virtual account is 10,000 USD/GBP
> * The generated accounts are personal accounts, FCY virtual account is issued in the individual’s name, and not suitable for business use.
> * The USD account supports ACH, SWIFT and Fedwire transactions, ensuring swift and efficient payments.
> * The EUR account supports SEPA and SEPA Instant ensuring swift and efficient payments across Europe.
> * The GBP account supports FPS and CHAPS ensuring swift and efficient payments.
> * The CAD account supports Interac Etransfer ensuring swift and efficient payments across Canada.
> * To ensure compliance, it's important to note the [prohibited activities and countries ](mcy-prohibited-activities-and-countries)restricted from having access to this product.
> * Check possible verification errors that may occur during account request [here](mcy-account-verification-errors).
> * Consult the guide [here](mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.
> * You can check out our FAQ section for more [information](mcy-accounts-faqs).

## Available Currencies

Virtual accounts are currently available in the following currencies :  

| Currency Name   | Currency Code | Payment Schemes        | Availability |
| :-------------- | :------------ | :--------------------- | :----------- |
| US Dollar       | USD           | ACH, SWIFT and Fedwire | Yes          |
| EURO            | EUR           | SEPA, SEPA Instant     | Yes          |
| British  Pounds | GBP           | FPS, CHAPS             | Yes          |
| CAD Dollar      | CAD           | Interac Etransfer      | Yes          |

## API Guide

### 1 - Collect Customer Details

To create a virtual account, you'll need to pass information such as currency, accountType, meansOfID KYCInformation, etc.

Please find below the request parameters for the endpoint.

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
        string
      </td>

      <td>
        The virtual account type. For USD, we currently only offer `individual` accounts.
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
        The customer's means of identification which should be a valid government ID e.g passport, driver license. Please see the [Accepted Documents](https://docs.fincra.com/docs/request-fcy-virtual-account#accepted-identity-documents-for-fcy-virtual-account)
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
        Electricity bills, water bills or any detailed invoice showing the usage of a service. Bank Statement is also accepted. This can be a File Upload or a URL link to the document.  

        Note, utility bill must be a valid document within the last 3 months. Name and address on utility has to match details sent in payload.
      </td>
    </tr>

    <tr>
      <td>
        bankStatement
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        Account statement from the user's bank. This can be a File Upload or URL link to the document.  

        If you would be using `bankStatement` as the proof of address, you would need to pass the bank statement in both the `utilityBill` field and the `bankStatement` field.  

        Note, bankStatement must be a valid document within the last 3 months.\
        Name and address on statement has to match details sent in payload.
      </td>
    </tr>

    <tr>
      <td>
        **KYCInformation**
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        KYC Information  object
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
        string
      </td>

      <td>
        The customer's last name. This is required to create an individual  account
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
        The birthdate of the customer(YYYY-MM-DD). Please ensure that the DOB presented here matches with the date of birth visible on the means of ID.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.taxCountry
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Please provide the country codes in the ISO 3166-1 alpha-2 format (e.g., US for the United States, EU for the European Union, NG for Nigeria)
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.taxNumber
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        This is required if taxCountry is US
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
        The birthplace of the customer
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
        monthlyTransactionCount
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The expected number of transactions.
      </td>
    </tr>

    <tr>
      <td>
        monthlyTransactionVolume
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The expected volume account would be receiving monthly.
      </td>
    </tr>

    <tr>
      <td>
        **KYCInformation.address**
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
        The zip code must be valid. Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html) .
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
        KYCInformation.address.city
      </td>

      <td>
        Yes
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
        Customer's source of income.\
        Options:\
        `salary`, `business_income`, `investment`, `gift`, `inheritance`, `real_estate`, `loan`, `pension`, `grant`, `trust`, `crypto`, `other`.
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
        Specific use of the account e.g for personal use, corporate use, school fee payments etc.
      </td>
    </tr>

    <tr>
      <td>
        **KYCInformation.incomeBand**
      </td>

      <td>
        Yes
      </td>

      <td>
        object
      </td>

      <td>
        Customer's income band. IncomeBand can be described as earning range or salary range of the customer.
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.incomeBand.lower
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The start of the income band
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.incomeBand.upper
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The end of the income band
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
        The customer's phone number
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
        Customer's employment status.\
        Options:\
        `employed`, `self_employed`, `unemployed`, `student`, `retired`, `homemaker`, `freelancer`, `other`.
      </td>
    </tr>

    <tr>
      <td>
        **KYCInformation.document**
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
        The type of ID document. Only `passport` is allowed for USD requests. Please see the [Accepted Documents](https://docs.fincra.com/docs/request-fcy-virtual-account#accepted-identity-documents-for-fcy-virtual-account)  for other currencies.
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
        The expiration date on the document ("YYYY-mm-dd"). Optional only when document type is `nationalId`.
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

    <tr>
      <td>
        merchantReference
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        A unique ID/reference of the virtual account on your system.
      </td>
    </tr>
  </tbody>
</Table>

#### Accepted identity documents for FCY virtual account

| Document               | API Value     | Currency           | Description                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------- | :------------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | USD, EUR, GBP, CAD | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.)                                                                                                                                                                                      |
| Driver License         | driverLicense | EUR                | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).                                                                                                                                                                                            |
| National ID card only  | nationalId    | EUR                | National ID Card (Not NIN or v-NIN). (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back). National ID of any country is accepted.                                                                                                                                                     |
| Identity Card          | idCard        | EUR                | This would accept an identity card, including Resident Permit. This identity card has to be a valid government issued ID, with the name, issue date and date of birth clearly visible. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back). Identity card of any country is accepted. |

### 2 - Request a virtual account

Make an API request to the [create virtual account endpoint](/reference/create-fcy-virtual-account).

Endpoint:

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

Payload:

```json Corporate
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
      "incomeBand": {
        "lower": "1000",
				"upper": "6460"
      },
      "sourceOfIncome": "Salary",
      "accountDesignation": "Personal use",
      "phone": "08012345678",
      "occupation": "Business",
      "nationality": "NG",
      "birthDate": "1998-03-29",
      "taxCountry": "US",
      "taxNumber": "199180037820", // only required if Tax Country is US
      "firstName": "John",
      "lastName": "Doe",
      "otherName": "Claude",
      "document": {
        "type": "passport",
        "number": "A89238923",
        "issuedCountryCode": "NG",
        "issuedBy": "government",
        "issuedDate": "2017-09-07",
        "expirationDate": "2027-07-23"
      },
      "employmentStatus": "Business",
      "monthlyTransactionCount": "5",
      "monthlyTransactionVolume": "10000"
    }
}
```

You would receive a JSON snippet with the details of the virtual account, along with the `id` and `status`:

```json Response
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

Important Notes:

* `\_id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
* It is also good to note that other fields would be included in the response. The ones shared are the ones that are necessary to note. The full payload sent in the request would also be returned in this response.

### 3 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the virtual account creation. Read our guide on securing and [validating the webhook](https://docs.fincra.com/docs/validating-webhook) notification on your end.

Webhook Response:

```json Success
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
```json Error [Doc Type]
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
```json Error [Address]
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
```json Error [Doc Number]
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
```json Error [Missing Param]
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
```json Error [Document]
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

> 🚧 Important Notes
>
> * `id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
> * For detailed information on verification errors that might be encountered here, please refer to our Multicurrency [Account Verification Errors Documentation](mcy-account-verification-errors).
> * Expect to recieve a second webhook after the `virtualaccount.approved` event. The new webhook event "`virtualaccount.issued`", is dispatched once the bank account is ready. Contained within this new webhook, is the `accountInformation` field, which contains the details of the newly generated account.

```json USD
{
  "event": "virtualaccount.issued",
  "data": {
    "accountInformation": {
      "accountNumber": "998877665544",
      "alternateAccountDetails": [
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "123456789",
          "countryCode": "NG",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "",
            "addressableIn": "FEDWIRE",
            "bankAddress": "123 Example Street, Lagos, NG",
            "memo": "X1Y2Z3A4"
          }
        },
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "",
          "countryCode": "US",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "PORGUS62XXX",
            "addressableIn": "SWIFT",
            "bankAddress": "456 Sample Blvd, New York, NY, US",
            "memo": "D3M0SW1F"
          }
        }
      ],
      "bankCode": "123456789",
      "bankName": "Portage Bank",
      "countryCode": "",
      "otherInfo": {
        "accountNumber": "998877665544",
        "addressableIn": "ACH",
        "bankAddress": "",
        "bankSwiftCode": "",
        "checkNumber": "",
        "iban": "",
        "memo": "ACH000X1",
        "sortCode": ""
      }
    },
    "accountOpeningFee": 0,
    "accountType": "individual",
    "business": "abc123def456ghi789jkl000",
    "createdAt": "2025-05-27T15:06:05.712Z",
    "currency": "USD",
    "currencyType": "fiat",
    "email": "demo.user@example.com",
    "id": "abcde12345fgh67890ijk000",
    "isPermanent": true,
    "isSubAccount": false,
    "status": "approved",
    "updatedAt": "2025-06-06T00:55:20.983Z",
    "virtualAccountType": "additional"
  }
}
```
```json EUR
{
   "event":"virtualaccount.issued",
   "data":{
      "id":"661e83489349bwe342c6a70",
      "business":"62787427843dfn3848ws",
      "isSubAccount":false,
      "currency":"USD",
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
            "bankSwiftCode":"",
            "memo":""
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

> ❗️ Changes to account details
>
> In the event of any changes to the virtual account details, a `virtualaccount.changed` event will be triggered. Please use the `_id` field to uniquely identify and track virtual account records.

```json USD
{
  "event": "virtualaccount.changed",
  "data": {
    "accountInformation": {
      "accountNumber": "998877665544",
      "alternateAccountDetails": [
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "123456789",
          "countryCode": "NG",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "",
            "addressableIn": "FEDWIRE",
            "bankAddress": "123 Example Street, Lagos, NG",
            "memo": "X1Y2Z3A4"
          }
        },
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "",
          "countryCode": "US",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "PORGUS62XXX",
            "addressableIn": "SWIFT",
            "bankAddress": "456 Sample Blvd, New York, NY, US",
            "memo": "D3M0SW1F"
          }
        }
      ],
      "bankCode": "123456789",
      "bankName": "Portage Bank",
      "countryCode": "",
      "otherInfo": {
        "accountNumber": "998877665544",
        "addressableIn": "ACH",
        "bankAddress": "",
        "bankSwiftCode": "",
        "checkNumber": "",
        "iban": "",
        "memo": "ACH000X1",
        "sortCode": ""
      }
    },
    "accountOpeningFee": 0,
    "accountType": "individual",
    "business": "abc123def456ghi789jkl000",
    "createdAt": "2025-05-27T15:06:05.712Z",
    "currency": "USD",
    "currencyType": "fiat",
    "email": "demo.user@example.com",
    "id": "abcde12345fgh67890ijk000",
    "isPermanent": true,
    "isSubAccount": false,
    "status": "approved",
    "updatedAt": "2025-06-06T00:55:20.983Z",
    "virtualAccountType": "additional"
  }
}
```
```json EUR
{
   "event":"virtualaccount.changed",
   "data":{
      "id":"661e83489349bwe342c6a70",
      "business":"62787427843dfn3848ws",
      "isSubAccount":false,
      "currency":"USD",
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
            "bankSwiftCode":"",
            "memo":""
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

<br />

### 4 - Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](/reference/get-one-virtual-account). 

Endpoint:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```json Response [Approved]
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

### 5 - Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the [list virtual accounts endpoint](https://docs.fincra.com/reference/get-merchant-virtual-account-requests).

```coffeescript GET
{{base_url}}/profile/virtual-accounts/?currency=eur
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=eur' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```json Response
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

<br />

### 6 - Virtual Account Closed

When a virtual account is closed; webhook notifications is sent.

> 🚧 * Expect to recieve a webhook that states `virtualaccount.closed` event. Contained within this new webhook, is the `accountInformation` and  `reason` field, which contains the details of the account closure.

```json
{
  "event": "virtualaccount.closed",
  "data": {
    "id": "62135abbcb0e3e0535fdc2ac",
    "business": "61aa4e72cc67b6f04d97f874",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "closed",
    "accountType": "corporate",
    "reason":"reason for account closure",
    "accountInformation": {
      "accountNumber": "GB88BLFN04270670217485",
      "email": "devbola@gmail.com", 
      "bankName": "Blacktorn Finance",
      "bankAddress": "The Business Complex, 100  Church Ln, London E1 1LX, UK",
      "accountName": " Ventures",
      "swiftCode": "BLFNGB21XXX"
    },
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2022-02-21T09:26:19.167Z",
    "updatedAt": "2022-02-21T09:28:35.808Z"
  }
}
```

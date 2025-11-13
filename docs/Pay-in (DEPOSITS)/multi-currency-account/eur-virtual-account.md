---
title: EUR Virtual Account
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: EUR Virtual Account
  description: >-
    Fincra Multicurrency (MCY) Virtual Account product allows merchants to offer
    their individual users the ability to create a virtual EUR account in their
    own names. With Fincra MCY Account, users can receive funds in foreign
    currencies, providing a seamless and efficient way to manage international
    transactions.
  robots: index
next:
  description: ''
---
Fincra Multicurrency (MCY) Virtual Account product allows merchants to offer their `individual` users the ability to create a virtual EUR account in their own names. With Fincra `MCY` Account, users can receive funds in foreign currencies, providing a seamless and efficient way to manage international transactions.

This account is designed for personal use and supports SEPA and SEPA Instant transactions, with a `monthly limit of 10,000 EUR`. The Fincra MCY account is accessible exclusively via API integration.

The section below, describes the requirements for creating a virtual account in EURO (EUR). We would like to start by explaining how permanent EUR virtual accounts can be created on Fincra. For EUR, we currently only offer `individual` accounts.

API Reference: [create virtual account endpoint](/reference/request-eur-virtual-account) 

> 📘 Important
> 
> - Funds received by a virtual account created, settles in the respective currency balance of the merchant.
> - Monthly limit per virtual account is 10,000 EUR
> - The generated accounts are personal accounts, EUR virtual account is issued in the individual’s name, and not suitable for business use.
> - The account supports SEPA, ensuring swift and efficient payments across Europe.
> - To ensure compliance, it's important to note the [prohibited activities and countries ](mcy-prohibited-activities-and-countries)restricted from having access to this product.
> - Check possible verification errors that may occur during account request [here](mcy-account-verification-errors).
> - Consult the guide [here](mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.
> - You can check out our FAQ section for more [information](mcy-accounts-faqs).

## API Guide

### 1 - Collect Customer Details

To create a virtual account, you'll need to pass information such as currency, accountType, meansOfID KYCInformation, etc.

Please find below the request parameters for the endpoint.

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
    "1-3": "The virtual account type. For EUR, we currently only offer `individual` accounts.",
    "2-0": "meansOfId",
    "2-1": "Yes",
    "2-2": "string/array",
    "2-3": "The customer's means of identification which should be a valid government ID e.g passport, driver license. Please see the [Accepted Documents](https://docs.fincra.com/docs/eur-virtual-account#accepted-identity-documents-for-eur-virtual-account)",
    "3-0": "utilityBill",
    "3-1": "Yes",
    "3-2": "string",
    "3-3": "Electricity bills, water bills or any detailed invoice showing the usage of a service. Bank Statement is also accepted. This can be a File Upload or a URL link to the document.  \n  \nNote, utility bill must be a valid document within the last 3 months. Name and address on utility has to match details sent in payload.",
    "4-0": "bankStatement",
    "4-1": "Yes",
    "4-2": "string",
    "4-3": "Account statement from the user's bank. This can be a File Upload or URL link to the document.  \n  \nNote, bankStatement must be a valid document within the last 3 months.  \nName and address on statement has to match details sent in payload.",
    "5-0": "**KYCInformation**",
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
    "8-3": "The birthdate of the customer(YYYY-MM-DD). Please ensure that the DOB presented here matches with the date of birth visible on the means of ID.",
    "9-0": "KYCInformation.nationality",
    "9-1": "Yes",
    "9-2": "string",
    "9-3": "The birthplace of the customer",
    "10-0": "KYCInformation.email",
    "10-1": "Yes",
    "10-2": "string",
    "10-3": "The customer's email.",
    "11-0": "**KYCInformation.address**",
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
    "14-3": "The zip code must be valid. Refer to the [ZIP Code Format Guide](https://74353748992479739.s3.amazonaws.com/files/zip_code_format.html) .",
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
    "23-0": "**KYCInformation.document**",
    "23-1": "Yes",
    "23-2": "object",
    "23-3": "The document ",
    "24-0": "KYCInformation.document.type",
    "24-1": "Yes",
    "24-2": "string",
    "24-3": "The type of ID document e.g `passport`, `driverLicense`, `nationalId`.",
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
    "29-3": "The expiration date on the document (\"YYYY-mm-dd\"). Optional only when document type is `nationalId`.",
    "30-0": "KYCInformation.occupation",
    "30-1": "Yes",
    "30-2": "string",
    "30-3": "The occupation of the customer.",
    "31-0": "merchantReference",
    "31-1": "No",
    "31-2": "string",
    "31-3": "A unique ID/reference of the virtual account on your system."
  },
  "cols": 4,
  "rows": 32,
  "align": [
    null,
    null,
    null,
    null
  ]
}
[/block]


#### Accepted identity documents for EUR virtual account.

| Document               | API Value     | Description                                                                                                                                                                                                                                                                                                       |
| :--------------------- | :------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.)                                                                                                                                           |
| Driver License         | driverLicense | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).                                                                                                                                                 |
| National ID card only  | nationalId    | National ID Card (Not NIN or v-NIN). (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back)                                                                                                                                                   |
| Identity Card          | idCard        | This would accept an identity card, including Resident Permit. This identity card has to be a valid government issued ID, with the name, issue date and date of birth clearly visible. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back) |

### 2 - Request a virtual account

Make an API request to the [create virtual account endpoint](/reference/request-virtual-accounts).

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

```json Individual
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
        "currency": "EUR",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-16T14:03:50.757Z",
        "updatedAt": "2024-04-16T14:03:50.757Z"
    }
}
```

Important Notes:

- `\_id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
- It is also good to note that other fields would be included in the response. The ones shared are the ones that are necessary to note. The full payload sent in the request would also be returned in this response.

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
```json Error \[Doc Type]
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
```json Error \[Address]
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
```json Error \[Doc Number]
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
```json Error \[Missing Param]
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
```json Error \[Document]
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

> 🚧 Important Notes
> 
> - `id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
> - For detailed information on verification errors that might be encountered here, please refer to our Multicurrency [Account Verification Errors Documentation](mcy-account-verification-errors).
> - Expect to recieve a second webhook after the `virtualaccount.approved` event. The new webhook event "`virtualaccount.issued`", is dispatched once the bank account is ready. Contained within this new webhook, is the `accountInformation` field, which contains the details of the newly generated account.

```json
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

```json Response \[Approved]
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

### 6 - Virtual Account Closed

When a virtual account is closed; webhook notifications is sent.

> 🚧 - Expect to recieve a webhook that states `virtualaccount.closed` event. Contained within this new webhook, is the `accountInformation` and  `reason` field, which contains the details of the account closure.

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
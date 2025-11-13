---
title: USD Virtual Account
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: USD Virtual Account
  description: >-
    Fincra Multicurrency (MCY) Virtual Account product allows merchants to offer
    their individual users the ability to create a virtual USD account in their
    own names. With Fincra MCY Account, users can receive funds in foreign
    currencies, providing a seamless and efficient way to manage international
    transactions.
  robots: index
next:
  description: ''
---
Fincra Multicurrency (MCY) Virtual Account product allows merchants to offer their `individual` users the ability to create a virtual USD account in their own names. With Fincra `MCY` Account, users can receive funds in foreign currencies, providing a seamless and efficient way to manage international transactions.

This account is designed for personal use and supports ACH transactions only, with a `monthly limit of 10,000 USD`. The Fincra MCY account is accessible exclusively via API integration.

The section below, describes the requirements for creating a virtual account in Dollar (USD). We would like to start by explaining how permanent USD virtual accounts can be created on Fincra. For USD, we currently only offer `individual` accounts.

API Reference: [create virtual account endpoint](/reference/request-usd-virtual-account) 

> 📘 Important
>
> * Funds received by a virtual account created, settles in the respective currency balance of the merchant.
> * Monthly limit per virtual account is 10,000 USD
> * The generated accounts are personal accounts, USD virtual account is issued in the individual’s name, and not suitable for business use.
> * The account supports ACH transactions only, ensuring swift and efficient payments.
> * To ensure compliance, it's important to note the [prohibited activities and countries ](mcy-prohibited-activities-and-countries)restricted from having access to this product.
> * Check possible verification errors that may occur during account request [here](mcy-account-verification-errors).
> * Consult the guide [here](mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.
> * You can check out our FAQ section for more [information](mcy-accounts-faqs).

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
        The customer's means of identification which should be a valid government ID e.g passport, driver license. Please see the [Accepted Documents](https://docs.fincra.com/docs/eur-virtual-account#accepted-identity-documents-for-eur-virtual-account)
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
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Account statement from the user's bank. This can be a File Upload or URL link to the document.  

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
        KYCInformation.birthPlace
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The place of birth
      </td>
    </tr>

    <tr>
      <td>
        KYCInformation.birthCountry
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
        Only required when tax country is `US`
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
        Specific use of the account e.g for personal use, corporate use, school fee payments etc.
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
        Customer's income band. IncomeBand can be described as earning range or salary range of the customer.
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
        Customer's employment status
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
        The type of ID document e.g `passport`, `driverLicense`, `nationalId`.
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

#### Accepted identity documents for EUR virtual account.

| Document               | API Value     | Description                                                                                                                                                             |
| :--------------------- | :------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport      | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.) |
| Driver License         | driverLicense | The driver's license of the customer. (When uploading this in the `meansOfId` field, ensure to send two string urls in an array, one for front and one for back).       |
| National ID card only  | nationalId    | National ID Card (Not NIN or v-NIN).                                                                                                                                    |
| Identity Card          | idCard        | This would accept an identity card, including Resident Permit.                                                                                                          |

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
			"birthPlace": "Madrid, Spain",
      "birthCountry": "EU",
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

Important Notes:

* `id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
* For detailed information on verification errors that might be encountered here, please refer to our Multicurrency [Account Verification Errors Documentation](mcy-account-verification-errors).

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

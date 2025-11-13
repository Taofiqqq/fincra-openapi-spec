---
title: Virtual Cards
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
To start interacting with the Virtual Cards API endpoints, you need to have your API key, which you can get from your dashboard and pass to the request headers.

| Key     | Value         |
| :------ | :------------ |
| api-key | \{\{api-key}} |

To start using a virtual card endpoint, it is important to note the following steps

### **CREATE A CUSTOMER**

To create virtual cards, you can either create them directly with the issuing endpoint or call the customer endpoint and pass in the payload to create a customer, then use the `cid` (Customer ID) generated from the response data to create the virtual card.

`POST` request `https://sandboxapi.fincra.com/profile/customers`

These are the fields required to create a customer

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Fied
      </th>

      <th>
        Mandatory
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        identifier
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        An identifier is anything that uniquely identifies the customer on your end. e.g user id, email address, etc.
      </td>
    </tr>

    <tr>
      <td>
        business
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Your business ID.
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The email must be unique just as the identifier.
      </td>
    </tr>

    <tr>
      <td>
        firstName
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's first name. This is required to create a virtual card.
      </td>
    </tr>

    <tr>
      <td>
        lastName
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's last name. This is required to create a virtual card.
      </td>
    </tr>

    <tr>
      <td>
        middleName
      </td>

      <td>
        No
      </td>

      <td>
        string
      </td>

      <td>
        The customer's middle name
      </td>
    </tr>

    <tr>
      <td>
        dob
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The birthdate of the customer (YYYY-MM-DD).
      </td>
    </tr>

    <tr>
      <td>
        phone.countryCode
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The customer's country dialing code. e.g +234
      </td>
    </tr>

    <tr>
      <td>
        phone.number
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
        address.country
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
        address.zip
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The country zip code
      </td>
    </tr>

    <tr>
      <td>
        address.street
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
        address.state
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The state address
      </td>
    </tr>

    <tr>
      <td>
        address.city
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The city address
      </td>
    </tr>

    <tr>
      <td>
        chargeCurrency
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        This allows the customer  to specify the Fincra balance they want to be debited from or credited to (in the case of card withdrawal)
      </td>
    </tr>

    <tr>
      <td>
        documents
      </td>

      <td>
        Yes
      </td>

      <td>
        Array of objects - image, type, number, issuedCountryCode, issuedDate, expirationDate as string.\
        The document `type` can either be a `passport`, `driverLicense` or `votersCard`
      </td>

      <td>
        Customer's identification documents. At least one document is required.
      </td>
    </tr>

    <tr>
      <td>
        documents.image
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        Image URL of the identification document. e.g International Passport.
      </td>
    </tr>

    <tr>
      <td>
        documents.type
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
        documents.number
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
        documents.issuedCountryCode
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format (e.g NG, US, GH)
      </td>
    </tr>

    <tr>
      <td>
        documents.issuedBy
      </td>

      <td>
        No
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
        documents.issuedDate
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The date the document was issued ("YYYY-mm-dd")
      </td>
    </tr>

    <tr>
      <td>
        documents.expirationDate
      </td>

      <td>
        Yes
      </td>

      <td>
        string
      </td>

      <td>
        The expiration date on the document ("YYYY-mm-dd")
      </td>
    </tr>
  </tbody>
</Table>

<br />

The payload should look like this

```json
{
    "identifier": "2Nxj05cb0c52d",
    "business": "63408b05cb018460343c52de",
    "email": "taofeek2suree@gmail.com",
    "firstName": "Harry",
    "lastName": "Attat",
    "dob": "1990-10-10",
    "phone": {
        "countryCode":"+234",
        "number": "08142986562"
    },
    "address":{
          "country": "NG",
          "zip": "100000",
          "street": "4 Babawa Street",
          "state": "Lagos State",
          "city": "Amuwo Odofin"
    },
  "documents": 
        {
          "image": "https://wiki.nimc.gov.ng/mobile_userguide/pins_female.png",
          "type": "passport",
          "number": "A012345678",
          "issuedCountryCode": "NG",
          "issuedBy": "Government",
          "issuedDate": "2022-10-10",
          "expirationDate": "2027-10-10"
        }
}

```

</br>

Below is a sample response

```json
{
    "success": true,
    "message": "Customer created successfully",
    "data": {
        "middleName": "",
        "isActive": true,
        "phone": {
            "countryCode": "+234",
            "number": "08142986562",
            "_id": "639910de41664f80e1eedb20"
        },
        "address": {
            "country": "NG",
            "state": "Lagos State",
            "street2": null,
            "zip": "100000",
            "city": "Amuwo",
            "street": "No 4 Babawa Street",
            "_id": "639910de41664f41a1eedb21"
        },
        "identifier": "2Nxj05cb0c52d",
        "business": "63408b05cb018460343c52de",
        "email": "taofeek2suree@gmail.com",
        "firstName": "Harry",
        "lastName": "Attat",
        "dob": "Wed Oct 10 1990 00:00:00 GMT+0000 (Coordinated Universal Time)",
        "documents": [
            {
                "image": "https://wiki.nimc.gov.ng/mobile_userguide/pins_female.png",
                "type": "passport",
                "number": "A08511194",
                "issuedCountryCode": "NG",
                "issuedDate": "2022-10-10T00:00:00.000Z",
                "expirationDate": "2027-10-10T00:00:00.000Z",
                "_id": "639910de41664f3695eedb22"
            }
        ],
        "cid": "60febd3c-157a-4ae4-aeed-863c5530ec42",
        "createdAt": "2022-12-13T23:55:10.566Z",
        "updatedAt": "2022-12-13T23:55:10.566Z"
    }
}
```

## Creating A Card

**Please note that  it's important to create a customer first, before proceeding to create a card**

After creating a customer, a card can then be created using the `cid` that was returned in the response data when creating a customer.  

The `cid `in the response data above is `60febd3c-157a-4ae4-aeed-863c5530ec42`.\
You can either create a **USD visa or MasterCard** virtual card for a customer.

`POST `Request - `https://sandboxapi.fincra.com/profile/issuing`

The payload should look like this

```json
{
    "cid": "8b6b8f8b-8a95-4c1d-9cb3-8ed68238a46d",
    "currency": "USD",
    "brand": "mastercard",
    "type": "virtual",
    "chargeCurrency": "USD",
    "amount": 100 // required when brand is mastercard
}
```

**Please note that amount is an important field to be passed in the payload when creating a MasterCard virtual card**

Below is a sample response

```json
{
    "success": true,
    "message": "Virtual card created",
    "data": {
        "_id": "6399158141664f1c99eedb33",
        "address": {
            "country": "US",
            "state": "CA",
            "street2": "",
            "zip": "94105",
            "city": "San Francisco",
            "street": "123 Main St",
            "_id": "6399158141664f116deedb34"
        },
        "chargeCurrency": "USD",
        "balance": 0,
        "brand": "visa",
        "business": "63408b05cb018460343c52de",
        "cardHolderName": "Attat Harry",
        "cardHolderType": "individual",
        "cardPan": 4760580538371710,
        "cid": "8b6b8f8b-8a95-4c1d-9cb3-8ed68238a46d",
        "currency": "USD",
        "cvv": 123,
        "expiry": "08/27",
        "isActive": true,
        "maskedPan": "476058******1710",
        "type": "virtual",
        "createdAt": "2022-12-14T00:14:57.989Z",
        "updatedAt": "2022-12-14T00:14:57.989Z"
    }
}
```

## Creating a Card with Customer data

Virtual cards can also be created by passing the customer object directly to the issuing endpoint without the`cid` field. But you can only do this once per customer. You'll need to pass the `cid` for other card creation for that customer.

`POST` request   `https://sandboxapi.fincra.com/profile/issuing`

The payload should look like this

```json
{
     "business":"63408b05cb018460343c52de",
     "brand": "visa",
     "type": "virtual",
     "currency": "USD",
     "amount": 1000, // required when brand is mastercard
     "customer": {
         "identifier": "Teal",
          "business": "63408b05cb018460343c52de",
          "email": "taofeek2su@gmail.com",
          "firstName": "Harry",
          "lastName": "Attat",
          "dob": "1990-10-10",
          "phone": {
               "countryCode":"+234",
               "number": "08142986562"
          },
          "chargeCurrency": "USD",
          "address": {
               "country": "NG",
               "zip": "100000",
               "street": "No 4 Babawa Street",
               "state": "Lagos State",
               "city": "Amuwo"
          },
          "documents": [
               {
                    "image": "https://wiki.nimc.gov.ng/mobile_userguide/pins_female.png",
                    "type": "passport",
                    "number": "A08511194",
                    "issuedCountryCode": "NG",
                    "issuedBy": "Government",
                    "issuedDate": "2022-10-10",
                    "expirationDate": "2027-10-10"
               }
          ]
     }
}
```

**Please note that amount is an important field to be passed in the payload when creating a MasterCard virtual card**

Below is a sample response

```json
{
    "success": true,
    "message": "Virtual card created",
    "data": {
        "_id": "63991b3e41664f4c97eedb4d",
        "address": {
            "country": "US",
            "state": "CA",
            "street2": "",
            "zip": "94105",
            "city": "San Francisco",
            "street": "123 Main St",
            "_id": "63991b3e41664f71c5eedb4e"
        },
        "balance": 0,
        "brand": "visa",
        "business": "63408b05cb018460343c52de",
        "cardHolderName": "Attat Harry",
        "cardHolderType": "individual",
        "cardPan": 4478024185831844,
        "cid": "7dd76f81-08c7-4f15-a473-2d9e438f1f72",
        "currency": "USD",
        "cvv": 123,
        "expiry": "08/27",
        "isActive": true,
        "maskedPan": "447802******1844",
        "type": "virtual",
        "createdAt": "2022-12-14T00:39:26.380Z",
        "updatedAt": "2022-12-14T00:39:26.380Z"
    }
}
```

## Get Virtual Card Details

To get the details about a virtual card, the issuing endpoint will be called, `the card` id will be passed to the endpoint URL and the` businessID` as the params as shown below:

`GET` request `https://sandboxapi.fincra.com/profile/issuing/id?business={businessID}`

Below is the sample response

```json
{
    "success": true,
    "message": "Virtual card fetched",
    "data": {
        "_id": "639922b94e39c5e732605e76",
        "address": {
            "country": "US",
            "state": "CA",
            "street2": "",
            "zip": "94105",
            "city": "San Francisco",
            "street": "123 Main St",
            "_id": "639922b94e39c52c49605e77"
        },
        "balance": 0,
        "brand": "mastercard",
        "business": "60c1d7e39d9fc6b87dedb04e",
        "cardHolderName": "Attat Harry",
        "cardHolderType": "individual",
        "cardPan": 1111516009755136,
        "cid": "4b186f42-add1-4716-9ffc-50e8c7e38d59",
        "currency": "USD",
        "cvv": 123,
        "expiry": "08/27",
        "isActive": true,
        "maskedPan": "222251******5136",
        "type": "virtual",
        "createdAt": "2022-12-14T01:11:21.297Z",
        "updatedAt": "2022-12-14T18:03:33.859Z"
    }
}
```

## Getting All Cards Per Customer

You can get all the cards attached to a customer by calling the below endpoint:\
`GET` request `[https://sandboxapi.fincra.com/profile/issuing/?cid={cid}&business={businessID}`

The `cid` will be the value generated when creating the customer, while the value of the business is your `businessID`.\
Below is a sample response for a customer with a `cid` of `e79ecab7-b573-4c61-969f-ad61860d7bb8` that has 2 virtual cards attached to them `(1 Visa and 1 Mastercard)`.

```json
{
    "success": true,
    "message": "Virtual cards fetched",
    "data": [
        {
            "_id": "639af25441664f259feedc0d",
            "address": {
                "country": "US",
                "state": "CA",
                "street2": "",
                "zip": "94105",
                "city": "San Francisco",
                "street": "123 Main St"
            },
            "balance": 0,
            "brand": "visa",
            "business": "60c1d7e39d9fc6b87dedb04e",
            "cardHolderName": "Attat Harry",
            "cardHolderType": "individual",
            "cardPan": 4825099734480236,
            "cid": "e79ecab7-b573-4c61-969f-ad61860d7bb8",
            "currency": "USD",
            "cvv": 123,
            "expiry": "08/27",
            "isActive": true,
            "maskedPan": "482509******0236",
            "type": "virtual",
            "createdAt": "2022-12-15T10:09:24.235Z",
            "updatedAt": "2022-12-15T10:09:24.235Z"
        },
        {
            "_id": "639af22841664f582aeedc07",
            "address": {
                "country": "US",
                "state": "CA",
                "street2": "",
                "zip": "94105",
                "city": "San Francisco",
                "street": "123 Main St"
            },
            "balance": 0,
            "brand": "mastercard",
            "business": "60c1d7e39d9fc6b87dedb04e",
            "cardHolderName": "Attat Harry",
            "cardHolderType": "individual",
            "cardPan": 2546658243329036,
            "cid": "e79ecab7-b573-4c61-969f-ad61860d7bb8",
            "currency": "USD",
            "cvv": 123,
            "expiry": "08/27",
            "isActive": true,
            "maskedPan": "254665******9036",
            "type": "virtual",
            "createdAt": "2022-12-15T10:08:40.988Z",
            "updatedAt": "2022-12-15T10:08:40.988Z"
        }
    ]
}
```

## Funding a Card

To fund a card we call the fund endpoint.

`POST` request `https://sandboxapi.fincra.com/profile/issuing/{id}/fund`

Payload

```json
{
    "business":"60c1d7e39d9fc6b87dedb04e",
    "amount": 100,
    "chargeCurrency": "USD",
}
```

Below is a sample response

```json
{
    "success": true,
    "message": "Virtual card funded successfully",
    "data": true
}
```

## Freezing A Card

`PATCH` request `https://sandboxapi.fincra.com/profile/issuing/{id}/freeze `

Payload

```json
{
    "business": "60c1d7e39d9fc6b87dedb04e"
}
```

Below is a sample response 

```json
{
    "success": true,
    "message": "Virtual card frozen successfully",
    "data": true
}
```

## Unfreeze A Card

`PATCH` request `https://sandboxapi.fincra.com/profile/issuing/{id}/unfreeze `

Payload

```json
{
    "business": "60c1d7e39d9fc6b87dedb04e"
}
```

Below is a sample response

```json
{
    "success": true,
    "message": "Virtual card unfrozen successfully",
    "data": true
}
```

## Make Virtual Card Withdrawal

`POST` request  `https://sandboxapi.fincra.com/profile/issuing/{id}/withdraw `

Payload

```json
{
    "business":"60c1d7e39d9fc6b87dedb04e",
    "amount": 10,
    "chargeCurrency": "USD",
}
```

Below is a sample response

```json
{
    "success": true,
    "message": "Withdrawal successful",
    "data": true
}
```

## Get All Transactions On A Card

`GET`  request. `https://sandboxapi.fincra.com/profile/issuing/{id}/transactions`

Below is a sample response

```json
{
    "success": true,
    "message": "Virtual card transactions fetched",
    "data": []
}
```

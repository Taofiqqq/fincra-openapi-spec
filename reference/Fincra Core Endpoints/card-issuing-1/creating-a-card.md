---
title: Creating A Card
excerpt: ''
api:
  file: awesome-new-api.json
  operationId: creating-a-card
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Please note that  it's important to create a customer first, before proceeding to create a card**

**Also note that  it's important to add an amount field when creating Mastercard Virtual card**

**Creating A Card (after creating a customer)\&#xA;**&#x41;fter creating a customer, a card can then be created using the `cid` that was returned in the response data when creating a customer. The `cid `in the response data above is `60febd3c-157a-4ae4-aeed-863c5530ec42`.  You can either create a `USD visa  or MasterCard` virtual card for a customer.

Below is a Sample Payload

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

On a successful call, you should get a response like this

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

Virtual cards can also be created by passing the customer object directly to the issuing endpoint without the `cid` field. But you can only do this once per customer. You'll need to pass the `cid` for other card creation for that customer.

Make a `post` request to 

[https://sandboxapi.fincra.com/profile/issuing](https://sandboxapi.fincra.com/)

Below is a sample Payload

```json
{
     "business":"63408b05cb018460343c52de",
     "brand": "visa",
     "type":"virtual",
     "currency":"USD",
     "amount": 1000, // required when brand is mastercard
     "customer": {
         "identifier": "Teal",
          "business":"63408b05cb018460343c52de",
          "email": "taofeek2su@gmail.com",
          "firstName": "Harry",
          "lastName": "Attat",
          "dob":"1990-10-10",
          "phone": {
               "countryCode":"+234",
               "number":"08142986562"
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
                    "issuedBy": "Goverment",
                    "issuedDate": "2022-10-10",
                    "expirationDate": "2027-10-10"
               }
          ]
     }
}
```

On Passing all fields correctly, you should get a response like this

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

**Please note that amount is an important field to be passed in the payload when creating a MasterCard virtual card**

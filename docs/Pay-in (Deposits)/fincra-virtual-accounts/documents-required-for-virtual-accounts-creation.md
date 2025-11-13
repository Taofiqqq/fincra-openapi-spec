---
title: Required Documents
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
This page highlights the document required when requesting virtual accounts.

> 📘 Take note of the following
> 
> - The Document provided must be a valid Government-Issued Identification Card (ID)
> - All documents, with the exception of international passports, must be presented with both the front and back views else the request for a virtual account will be rejected.
> - The Document upload should be in the format (pdf, jpg, jpeg, png), resolution of 600 x 600 pixels( for picture formats), and maximum file size of 50MB

## Individual Multicurrency Virtual Account

The individual multicurrency virtual account allows users to create a multiple-currency virtual account by calling a single endpoint

Below are the required documents for  individual multicurrency virtual account 

| Document               | API Value     | Description                                |
| :--------------------- | :------------ | ------------------------------------------ |
| International Passport | passport      | The International passport of the customer |
| Driver License         | driverLicense | The driver's license of the customer       |
| National ID card only  | nationalId    | National ID card only, (Not NIN or v-NIN)  |
| Proof of Address       | bankStatement | Individual's bank statements               |

**Below is the payload request:**

```json
{
    "currency": "MCY",
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

**Please note that  the meansOfId passed in this payload is international passport**.  
**For Payload having other meanOfId different from International passport, Please upload the front and back of the document using this payload format( Frontpage URL, Backpage URL) **

```json JSON
{
    "currency": "MCY",
    "meansOfId": [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
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
            "type": "nationalId",
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

**Below are the list of currencies that the MCY endpoint provides**

| Currency | Currency Name       |
| :------- | :------------------ |
| GBP      | Great Britain Pound |
| EUR      | Euro                |

**Below is a sample payload request:**

```json
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
            "expirationDate": "09-13-2023"
        },
        "occupation": "Software-Developer",
        "sourceOfIncome": "Software-Development",
        "accountDesignation": "personal",
        "employmentStatus": "Employed"
    }
}
```

> 📘 Please take note
> 
> - The **meansOfId** field  references the **document.type** which is the passport.
> - The **meansOfId** field can contain a URL link, an array of URL links, or a file upload of the user's passport or whatever type of document was selected. As we can see from this example, the document object has a property called **type**, which can be any of the documents we accept, such as an international passport or an ID card.
> - The **document.type** field can only accept `driverLicense` , `passport` and `nationalId` any other value will prevent your virtual account from getting approved.
> - The **meansOfId** field must represent the **document.type** field i.e If you upload an international passport the API value of the document.type field should be passport else the virtual account will not be created. Please see the table below for guidance.

## Corporate Multicurrency Virtual Account

The corporate multicurrency virtual account allows users to create a multiple-currency virtual account by calling a single endpoint.

Below are the required documents for a corporate multicurrency virtual account

| Document                                                                       |
| :----------------------------------------------------------------------------- |
| Company Incorporation \_ Certificate                                           |
| Shareholder Register _ Memorandum & Article of Association _ Director Register |
| Proof of Address (Bank statement only)                                         |
| Documents for the individual shareholders & directors                          |

**Please note that these documents will be taken from the information provided during KYC onboarding**

**Below is the sample payload request**

```json
{
    "currency": "MCY",
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

**Below are the list of currencies that the MCY endpoint provides**

| Currency | Currency Name       |
| :------- | :------------------ |
| GBP      | Great Britain Pound |
| EUR      | Euro                |

## Corporate  GBP Virtual Account

The corporate GBP virtual account allows users to create **ONLY GBP** virtual account

Below are the required documents for individual GBP virtual account

| Document                                                                       |
| :----------------------------------------------------------------------------- |
| Company Incorporation \_ Certificate                                           |
| Shareholder Register _ Memorandum & Article of Association _ Director Register |
| Proof of Address (Bank statement only)                                         |
| Documents for the individual shareholders & directors                          |

**Please note that these documents will be taken from the information provided during KYC onboarding**

Below is a sample payload request

```json
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
    "paymentFlowDescription": "we pay in pounds every month",
}
```
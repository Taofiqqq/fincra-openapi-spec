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
**NOTE**: No documents are required to create a Naira bank account(NGN). 

If the virtual account currency is EUR or GBP, any of the following documents are required in the virtual account creation API payload.

## Individual Virtual Account

| Document               | API Value     | Description                                |
| :--------------------- | :------------ | ------------------------------------------ |
| International Passport | passport      | The International passport of the customer |
| Driver License         | driverLicense | The driver's license of the customer       |
| ID card                | idCard        | National ID card, Voters card,NIN          |

> 📘 Take note of the following
>
> * The Document provided must be a valid Government-Issued Identification Card (ID)
> * All documents, with the exception of international passports, must be presented with both the front and back views else the request for a virtual account will be rejected.

An individual virtual account request with the required documents will look like this

```json
{
    "currency": "GBP",
    "accountType": "individual",
    "meansOfId": "{{The url link to the document type or the file}}",
    "utilityBill": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg",
     "KYCInformation": {
      "firstName": "EFE",
       "lastName": "EBIEROMA",
       "birthDate": "2009-12-31",
      "address": {
       "country": "NG",
        "zip": "234",
       "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
       },
      "document": {
       "type": "passport",
       "number": "123433",
       "issuedCountryCode": "NG",
       "issuedBy": "government",
       "issuedDate": "2011-07-21",
       "expirationDate": "2011-07-21"
     },
      "occupation": "Software Engineer"
    }
  }
```

**Please take note of the following in the above request :** 

> 📘
>
> * The **meansOfId** field  references the **document.type object** which is the passport.* The **meansOfId** field can contain a URL link, an array of URL links, or a file upload of the user's passport or whatever type of document was selected. As we can see from this example, the document object has a property called **type**, which can be any of the documents we accept, such as an international passport or an ID card.* The **document.type** field can only accept `driverLicense` , `passport` and `idCard` any other value will prevent your virtual account from getting approved.* The **meansOfId** field must represent the **document.type** field i.e If you upload an international passport the API value of the document.type field should be passport else the virtual account will not be created. Please see the table below for guidance.

## Corporate Virtual Account

To view the required documents for creating a corporate virtual account please click the link below :+1: 

[Documents required for corporate accounts](https://docs.google.com/document/d/1Gw-8-F9-l6-00kb1CRDBu9vLcLe1iotRFoFqoKJQz48/edit)

A corporate virtual account request will look like this

```json
{
  "currency": "GBP",
  "accountType": "corporate",
  "entityName": " legal enterprise",
  "reason": "The reason for requesting a corporate account",
  "monthlyVolume": "60000",
  "paymentFlowDescription": "we pay in pounds every month",
   "KYCInformation": {
      "email": "james@joy.com",
      "businessName": "testing",
      "businessRegistrationNumber": "testing",
      "businessCategory": "testing",
      "address": {
        "country": "NG",
        "zip": "234",
        "street": "112, payday street",
        "state": "lagos",
        "city": "Lekki"
      },
      "additionalInfo": "testing",
      "incorporationDate": "20919",
      "businessActivityDescription": "testing"
    },
"attachments": "https://reviewtestbucket.s3.amazonaws.com/invoiceAttachments/WhatsApp%20Image%202021-12-23%20At%2011_6803ef48-977d-4db9-9a38-b2e5a1365270.jpeg"
```

**Please take note of the following:** 

* The **attachments** field can be a single document or array of documents that contain the relevant files needed by our compliance team before a corporate account is issued.

## Virtual Card

For Virtual card account creation, these are documents type required

| Document               | API Value     | Description                                |
| :--------------------- | :------------ | ------------------------------------------ |
| International Passport | passport      | The International passport of the customer |
| Driver License         | driverLicense | The driver's license of the customer       |
| ID card                | idCard        | National ID card, Voters card,NIN          |

**Please take note**

* The **document** field can be a single document or array of documents that contain the relevant files needed by our compliance team before a virtual card account is issued.

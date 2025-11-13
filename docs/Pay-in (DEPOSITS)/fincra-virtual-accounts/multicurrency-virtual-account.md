---
title: Multicurrency Virtual Account
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Welcome to Fincra's guide on the MCY concept! In this guide, we will explain what MCY is and how it works. MCY stands for Multi-Currency, which is a feature offered by Fincra that allows you to have distinct virtual accounts in EUR and GBP. These currencies are grouped together and referred to as MCY.

**What is MCY?**  
MCY is a convenient solution for managing multiple currencies with separate virtual accounts. It enables you to receive and hold funds in EUR and GBP individually. When a request is made for a specific currency, our system automatically creates the other virtual account for you.

**How does MCY work?**

1. **Requesting virtual accounts:**
   - To request a virtual account, specify the desired currency as MCY.
   - If you request a virtual account in MCY, for example, our system will create a distinct virtual account for EUR. Additionally, it will automatically create a GBP virtual account.
2. **Receiving and holding funds:**
   - Once you have your virtual accounts set up, you can receive funds in the respective currencies.
   - For instance, if you want to receive funds in EUR, you need to provide the sender with your EUR virtual account details. Funds received in EUR will be credited to your EUR wallet.
   - Similarly, if you want to receive funds in GBP, provide the sender with the corresponding virtual account details, and the funds received will be credited to their GBP wallet.
3. **Managing funds:**
   - You can manage the funds in each virtual account separately. Each virtual account represents a specific currency, allowing you to keep track of your funds accurately.
   - For example, you can monitor the balance and transaction history of your EUR virtual account, and your GBP virtual account individually.
4. **Conversions:**
   - If you need to convert funds between different currencies, you can explore our currency [conversion](https://docs.fincra.com/edit/conversions) services.
   - For example, if you have funds in your EUR virtual account and want to convert them to GBP, you can initiate a conversion transaction at competitive exchange rates.

 ** Benefits of MCY:**

1. Flexibility: MCY offers you the flexibility to receive and hold funds in multiple currencies, facilitating international transactions.
2. Account separation: Each currency has its own virtual account, allowing for clear segregation and management of funds.
3. Currency management: MCY enables you to manage your funds in different currencies separately, helping you keep track of your finances more efficiently.
4. Currency conversion: Our platform provides currency conversion services to assist you in converting funds between different currencies at competitive rates.

We hope this guide provides you with a clearer understanding of the MCY concept and how it can benefit you. If you have any further questions or need assistance, feel free to reach out to our customer support team.

> 📘 Hey 👋 , we recommend reading the sections below because they are critical to understanding each virtual account request.
> 
> [How to create a virtual account](/docs/fincra-virtual-accounts)  
>  [Currencies we support for virtual account creations](/docs/fincra-virtual-accounts#requesting-virtual-accounts)  
>  [Virtual Account Webhook Structure](/docs/virtual-account-webhook)

<br />

### List of Available Currencies on Multicurrency Endpoint

| Currency | Currency Name  |
| :------- | :------------- |
| GBP      | British Pounds |
| EUR      | Euro           |

<br />

## Endpoint Parameters

These parameters can be tested on an API explorer by calling the various endpoints supported for our virtual account requests :

- [Create a virtual account](/reference/request-virtual-accounts): This endpoint can be used to request a Virtual Account in multiple currencies

```json
{{host}}/profile/virtual-accounts/requests
```

**Note** 

- After a Virtual Account creation request is made, a response with a data object containing a unique identifier `_id` of the virtual account will be returned, which would also be included in the webhook sent as `id`  if the virtual account is declined or approved.

- The `meansOfId` can be sent as a string, file, or array of URLs when making use of the [create virtual account endpoint](/reference/request-virtual-accounts) 

### Individual Request

These are the fields required to process an individual Virtual Account request in Multiple Currencies

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "type",
    "h-3": "Description",
    "0-0": "currency",
    "0-1": "Yes",
    "0-2": "String",
    "0-3": "The virtual account currency. e.g MCY",
    "1-0": "accountType",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The virtual account type. Please see the [API documentation](/docs/create-virtual-accounts#account-types) for more details.",
    "2-0": "meansOfId",
    "2-1": "Yes",
    "2-2": "String/Array",
    "2-3": "The customer's means of identification which should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation)",
    "3-0": "utilityBill",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "The customer's proof of address. This can be a recent electricity bill, water bill or any detailed invoice showing the usage of a service that contains the customer's name and address This can be a File Upload or URL link to the document. ",
    "4-0": "bankStatement",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "The customer's proof of address. This should be a recent bank statement that contains the bank name, customer’s name, customer's address, and transaction record. This can be a File Upload or URL link to the document.",
    "5-0": "KYCInformation",
    "5-1": "Yes",
    "5-2": "Object",
    "5-3": "KYC Information Object",
    "6-0": "KYCInformation.firstName",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The customer's first name . This is required to create an individual  account",
    "7-0": "KYCInformation.lastName",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "The customer's last name. This is required to create an individual  account",
    "8-0": "KYCInformation.phone",
    "8-1": "Yes",
    "8-2": "String",
    "8-3": "The customer's phone number.",
    "9-0": "KYCInformation.birthDate",
    "9-1": "Yes",
    "9-2": "String",
    "9-3": "The birthdate of the customer(YYYY-MM-DD ).",
    "10-0": "KYCInformation.nationality",
    "10-1": "Yes",
    "10-2": "String",
    "10-3": "The customer's nationality e.g NG",
    "11-0": "KYCInformation.email",
    "11-1": "Yes",
    "11-2": "String",
    "11-3": "The customer's email.",
    "12-0": "KYCInformation.address",
    "12-1": "Yes",
    "12-2": "Object",
    "12-3": "The address of the customer",
    "13-0": "KYCInformation.address.countryOfResidence",
    "13-1": "Yes",
    "13-2": "String",
    "13-3": "The address of the country",
    "14-0": "KYCInformation.address.state",
    "14-1": "Yes",
    "14-2": "String",
    "14-3": "The address of the state",
    "15-0": "KYCInformation.address.zip",
    "15-1": "Yes",
    "15-2": "String",
    "15-3": "The zip code",
    "16-0": "KYCInformation.address.street",
    "16-1": "Yes",
    "16-2": "String",
    "16-3": "The street name",
    "17-0": "KYCInformation.address.number",
    "17-1": "Yes",
    "17-2": "string",
    "17-3": "The house number",
    "18-0": "KYCInformation.address.city",
    "18-1": "Yes",
    "18-2": "String",
    "18-3": "The city name",
    "19-0": "KYCInformation.sourceOfIncome",
    "19-1": "Yes",
    "19-2": "String",
    "19-3": "Customer's source of income",
    "20-0": "KYCInformation.accountDesignation",
    "20-1": "Yes",
    "20-2": "String",
    "20-3": "Specific use of the account e.g for personal use, corporate use, school fee payments etc",
    "21-0": "KYCInformation.employmentStatus",
    "21-1": "Yes",
    "21-2": "String",
    "21-3": "Customer's employment status",
    "22-0": "KYCInformation.incomeBand",
    "22-1": "Yes",
    "22-2": "String",
    "22-3": "Customer's income band. IncomeBand can be described as earning range or salary range of the customer.",
    "23-0": "KYCInformation.document",
    "23-1": "Yes",
    "23-2": "Object",
    "23-3": "More information on the document",
    "24-0": "KYCInformation.document.type",
    "24-1": "Yes",
    "24-2": "String",
    "24-3": "The type of ID document e.g `passport`, `driverLicense`, `idCard`.  \n  \nPlease see the required values [here](/docs/documents-required-for-virtual-accounts-creation#individual-virtual-account)",
    "25-0": "KYCInformation.  \ndocument.number",
    "25-1": "Yes",
    "25-2": "String",
    "25-3": "The number on the document",
    "26-0": "KYCInformation.  \ndocument.issuedCountryCode",
    "26-1": "Yes",
    "26-2": "String",
    "26-3": "The country that issued the document.Should be in ISO 3166-1 alpha-2 – two-letter country codes format(NG)",
    "27-0": "KYCInformation.  \ndocument.issuedBy",
    "27-1": "Yes",
    "27-2": "String",
    "27-3": "The government agency in charge of issuing the document.",
    "28-0": "KYCInformation.  \ndocument.issuedDate",
    "28-1": "Yes",
    "28-2": "String",
    "28-3": "The date the document was issued(\"\"YYYY-mm-dd\").",
    "29-0": "KYCInformation.  \ndocument.expirationDate",
    "29-1": "Yes",
    "29-2": "String",
    "29-3": "The expiration date on the document (\"mm-dd-YYYY\").",
    "30-0": "KYCInformation.occupation",
    "30-1": "Yes",
    "30-2": "String",
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

```json Muticurrency Individual Account
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

</br>

### Corporate Request

These are the fields required to process a corporate Virtual Account request in Multiple Currencies.

| Field                          | Mandatory | type   | Description                                                                                                                          |
| ------------------------------ | --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| currency                       | Yes       | String | The virtual account currency.e.g MCY                                                                                                 |
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

```json Muticurrency Corporate Account
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
    "paymentFlowDescription": "we pay in pounds every month"
}
```

 **Please Note That we will get the other documents from the information provided during onboarding**

## **Corporate account to A Third Party (Another corporate entity)**

These fields are required to process a corporate Virtual Account request by a corporate account merchant for another corporate organisation/firm/merchant in Multiple Currencies.  
Please note that our supporting documents for accepting third-party payments are: Invoices of the transaction, Purchase orders, and Agreements between both parties.

| Field                                                      | Mandatory | type         | Description                                                                                                                                                                                         |
| ---------------------------------------------------------- | --------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                                                   | Yes       | String       | The virtual account currency.e.g MCY                                                                                                                                                                |
| accountType                                                | Yes       | String       | The virtual account type e.g corporate                                                                                                                                                              |
| reason                                                     | Yes       | String       | The reason for requesting a virtual account.                                                                                                                                                        |
| paymentFlowDescription                                     | Yes       | String       | The countries payments are coming from and going to, The general purpose of these payments, Customer categories of the business etc.                                                                |
| purpose                                                    | Yes       | String       | The purpose. For a third-party account, third_party is the compulsory value to be passed here                                                                                                       |
| meansOfId                                                  | Yes       | String/Array | The customer's means of identification should be a valid government ID e.g voters card, driving license. Please see the [API documentation](/docs/documents-required-for-virtual-accounts-creation) |
| attachments                                                | Yes       | array        | These fields require passing in documents which are  business_registration_certificate,holding_structure_certificate,  and operating_business_utility_bill.                                         |
| monthlyVolume                                              | Yes       | String       | This is the committed transaction volume multiplied by the number of days in the relevant month.                                                                                                    |
| KYCInformation.state                                       | Yes       | String       | The address of the state                                                                                                                                                                            |
| KYCInformation.zip                                         | Yes       | String       | The zip code                                                                                                                                                                                        |
| KYCInformation.city                                        | Yes       | String       | The business City                                                                                                                                                                                   |
| KYCInformation.houseId                                     | Yes       | String       | The house number (This is only required for  UK residents)                                                                                                                                          |
| KYCInformation.businessDetails                             | Yes       | Array        | The array contains details about the business                                                                                                                                                       |
| KYCInformation.businessDetails.email                       | Yes       | String       | The business email                                                                                                                                                                                  |
| KYCInformation.businessDetails.riskRating                  | Yes       | String       | For the risk rating of the business, kindly check  [here](https://docs.google.com/spreadsheets/d/19MZynZfgfUUVuAhbh8AOio2bLxsH3lhCgymF6icLHAY/edit#gid=0) for  business risk ratings                |
| KYCInformation.businessDetails.companyType                 | Yes       | String       | The company type e.g public, private, NGO etc                                                                                                                                                       |
| KYCInformation.businessDetails.tradingName                 | Yes       | String       | The company name used in trading(this is to capture the correct data for cases where the trading name is different from the business name).                                                         |
| KYCInformation.businessDetails.businessRegistrationNumber  | Yes       | String       | The business RC number                                                                                                                                                                              |
| KYCInformation.businessDetails.businessRegistrationCountry | Yes       | String       | The business registration Country e.g NG for businesses registered in Nigeria                                                                                                                       |
| KYCInformation.businessDetails.residentialAddress          | Yes       | String       | The business building address                                                                                                                                                                       |
| KYCInformation.businessDetails.directorsName               | Yes       | String       | The business director's name                                                                                                                                                                        |
| KYCInformation.businessDetails.shareHoldersName            | Yes       | String       | The business shareHolder's name                                                                                                                                                                     |
| KYCInformation.businessDetails.percentageShareHolding      | Yes       | String       | The percentage share held by the shareholder                                                                                                                                                        |

<br />

```json
{
    "currency": "MCY",
    "accountType": "corporate",
    "entityName": "aaa",
    "reason": "aasfsdf",
    "paymentFlowDescription": "afsdf",
    "purpose": "third_party",
    "meansOfId": [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ],
    "attachments": [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ],
    "monthlyVolume": "10000",
    "KYCInformation": {
        "zip": "2039012",
        "state": "afsdfd",
        "city": "Lagos",
        "houseId": "20",
        "businessDetails": {
            "email": "dev@abc.com",
            "riskRating": "low",
            "companyType": "pub",
            "tradingName": "name",
            "businessRegistrationNumber": "090111",
            "businessRegistrationCountry": "NG",
            "residentialAddress": "tawa street",
            "directorsName": "asiwaju",
            "shareHoldersName": "ahmod",
            "percentageShareHolding": "1%"
        }
    }
}
```
---
title: Cash PickUp
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
Fincra allows a recipient of a money transfer to retrieve their funds in cash from a physical location, rather than having them deposited electronically into a bank account.

   Cash pickup is a fast, simple, convenient, secure, and affordable way of transferring money that allows individuals to send money to another person who can then pick up the cash in person from a designated location, such as a bank or a money transfer agent. The sender typically initiates the transaction online or through a mobile app and provides the necessary details, including the amount to be transferred and the recipient's name and location. The recipient then goes to the designated location with valid identification to collect the cash.  
   This service is commonly used for domestic and international money transfers and provides a convenient and secure way for individuals to send and receive cash.

**Please Note**  
 At the moment, the **only** available currency for this service is** USD**.  
 Also the **Minimum** amount required to use this service is **$10** .

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Mandatory",
    "h-2": "Type",
    "h-3": "Description",
    "0-0": "business",
    "0-1": "Yes",
    "0-2": "String",
    "0-3": "The ID of the business making the payout.",
    "1-0": "sourceCurrency",
    "1-1": "Yes",
    "1-2": "String",
    "1-3": "The currency which is used to fund the payout",
    "2-0": "destinationCurrency",
    "2-1": "Yes",
    "2-2": "String",
    "2-3": "The currency in which the recipient will be receiving funds",
    "3-0": "amount",
    "3-1": "Yes",
    "3-2": "String",
    "3-3": "The value that is to be transferred from the source currency wallet.",
    "4-0": "paymentDestination",
    "4-1": "Yes",
    "4-2": "String",
    "4-3": "This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details. e.g \"cash_pick_up\" for cash pick up.",
    "5-0": "sender",
    "5-1": "Yes",
    "5-2": "Object",
    "5-3": "The sender of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "6-0": "sender.firstName",
    "6-1": "Yes",
    "6-2": "String",
    "6-3": "The first name of the sender.",
    "7-0": "sender.lastName",
    "7-1": "Yes",
    "7-2": "String",
    "7-3": "The last name of the sender.",
    "8-0": "sender.email",
    "8-1": "Yes",
    "8-2": "String",
    "8-3": "The email of the sender",
    "9-0": "sender.phone",
    "9-1": "Yes",
    "9-2": "String",
    "9-3": "The sender's phone number.  \nPlease Remove the country code and the leading zero from the number.",
    "10-0": "sender.birthDate",
    "10-1": "Yes",
    "10-2": "String",
    "10-3": "The birthdate of the sender. Sender's `birthDate` should be in this format: `YYYY-MM-DD`",
    "11-0": "sender.address",
    "11-1": "Yes",
    "11-2": "Object",
    "11-3": "The sender address Object",
    "12-0": "sender.address.country",
    "12-1": "Yes",
    "12-2": "String",
    "12-3": "The sender address Country. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB",
    "13-0": "sender.address.state",
    "13-1": "Yes",
    "13-2": "String",
    "13-3": "The state in the sender address.  \nInput a 2-letter abbreviation of the sender's state. For example, TX, NY, WA. Non-US default: 01.",
    "14-0": "sender.address.postalCode",
    "14-1": "Yes",
    "14-2": "String",
    "14-3": "The sender's address postal code",
    "15-0": "sender.address.city",
    "15-1": "Yes",
    "15-2": "String",
    "15-3": "The sender's address city",
    "16-0": "sender.address.street",
    "16-1": "Yes",
    "16-2": "String",
    "16-3": "The sender's address street",
    "17-0": "beneficiary",
    "17-1": "Yes",
    "17-2": "Object",
    "17-3": "The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.",
    "18-0": "beneficiary.firstName",
    "18-1": "Yes",
    "18-2": "String",
    "18-3": "The first name of the beneficiary.",
    "19-0": "beneficiary.middleName",
    "19-1": "Yes",
    "19-2": "String",
    "19-3": "The middle name of the beneficiary",
    "20-0": "beneficiary.lastName",
    "20-1": "Yes",
    "20-2": "String",
    "20-3": "The last name of the beneficiary",
    "21-0": "beneficiary.email",
    "21-1": "No",
    "21-2": "String",
    "21-3": "The beneficiary email address",
    "22-0": "beneficiary.type",
    "22-1": "Yes",
    "22-2": "String",
    "22-3": "The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details",
    "23-0": "beneficiary.phone",
    "23-1": "Yes",
    "23-2": "String",
    "23-3": "The beneficiary's phone number is significant as this is used to deliver the OTP code to receive payments at the bank. Please Remove the country code and the leading zero from the number.",
    "24-0": "beneficiary.address",
    "24-1": "Yes",
    "24-2": "Object",
    "24-3": "The beneficiary address object",
    "25-0": "beneficiary.address.country",
    "25-1": "Yes",
    "25-2": "String",
    "25-3": "The country in which the beneficiary address is located. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB",
    "26-0": "beneficiary.address.state",
    "26-1": "No",
    "26-2": "String",
    "26-3": "The state in the beneficiary address. Input a 2-letter abbreviation of the beneficiary's state. For example, TX, NY, and WA. Non-US default: 01.",
    "27-0": "beneficiary.address.city",
    "27-1": "No",
    "27-2": "String",
    "27-3": "The beneficiary's address city",
    "28-0": "beneficiary.address.street",
    "28-1": "No",
    "28-2": "String",
    "28-3": "The beneficiary's address street",
    "29-0": "beneficiary.cashPickUpLocationCode",
    "29-1": "Yes",
    "29-2": "String",
    "29-3": "This can be gotten by calling [List bank endpoint](/reference/get-banks)   on the country (NG) and check where `\"isCashPickUp\": true`  e.g  \n\"NG_CP_LOC_1 \"",
    "30-0": "beneficiary.securityQuestionId",
    "30-1": "No",
    "30-2": "String",
    "30-3": "This can be gotten by calling [cash pickup security question endpoint](/reference/cash-pickup-security-questions)",
    "31-0": "beneficiary.securityAnswer",
    "31-1": "No",
    "31-2": "String",
    "31-3": "This is an answer to be provided to the security question asked",
    "32-0": "description",
    "32-1": "Yes",
    "32-2": "String",
    "32-3": "A simple description of payment e.g \"From Daniella\"",
    "33-0": "quoteReference",
    "33-1": "Yes",
    "33-2": "String",
    "33-3": "This is the reference generated when the source currency is compared against the destination currency.  \n  \nThis is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)"
  },
  "cols": 4,
  "rows": 34,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]

Make a `POST` request to  [create a payout endpoint](/reference/payout-1) passing the payload below.

```json
{
    "business": "63da866cb938c4e0b871f514",
    "sourceCurrency": "EUR",
    "destinationCurrency": "USD",
    "amount": "10.00",
    "paymentDestination": "cash_pick_up",
    "sender": {
        "firstName": "Haishat",
        "lastName": "Technologies",
        "birthDate": "1997-10-21",
        "email": "hai@fincra.com",
        "phone": "09090909098",
        "address": {
            "country": "NG",
            "street" : "Mayor",
            "city": "Maoe",
            "postalCode": "234",
            "state": "LG"
        }
    },
    "beneficiary": {
        "firstName": "Ayo",
        "middleName": "Reciever",
        "lastName": "Technologies",
        "email": "nycix@mna.com",
        "type": "individual",
        "phone": "090445023922",
        "address": {
            "state": "LG",
            "country": "NG",
            "street": "12, Maryland, Ikeja"
        },
        "cashPickUpLocationCode": "NG_CP_LOC_1",
        "securityQuestionId": 1,
        "securityAnswer": "Omolola Williams"
    },
    "description": "From Hai",
    "quoteReference": "7f491da7-44f0-4a33-aac6-0a3c7da4732a"
}
```

To get Cash Pickup Questions, make a `GET` request to  [cash pickup security question](/reference/cash-pickup-security-questions)

**Please Note**  

- Ensure the beneficiary’s first, middle, and last name agrees to the beneficiary’s Government-issued ID
- `The beneficiary's phone number is significant as this is used to deliver the OTP code to receive payments at the bank.`
- The minimum payout amount for cash pick-up is **10USD**
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

   Cash pickup is a fast, simple, convenient, secure, and affordable way of transferring money that allows individuals to send money to another person who can then pick up the cash in person from a designated location, such as a bank or a money transfer agent. The sender typically initiates the transaction online or through a mobile app and provides the necessary details, including the amount to be transferred and the recipient's name and location. The recipient then goes to the designated location with valid identification to collect the cash.\
   This service is commonly used for domestic and international money transfers and provides a convenient and secure way for individuals to send and receive cash.

**Please Note**\
 At the moment, the **only** available currency for this service is **USD**.\
 Also the **Minimum** amount required to use this service is **$10** .

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>

      <th style={{ textAlign: "left" }}>
        Mandatory
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        business
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The ID of the business making the payout.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sourceCurrency
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The currency which is used to fund the payout
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        destinationCurrency
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The currency in which the recipient will be receiving funds
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        amount
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The value that is to be transferred from the source currency wallet.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        paymentDestination
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is the type of account you want to send your payments to, see [payment destinations](/docs/transaction-types-1#payment-destination) for more details. e.g "cash\_pick\_up" for cash pick up.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        The sender of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.firstName
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The first name of the sender.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.lastName
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The last name of the sender.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.email
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The email of the sender
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.phone
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The sender's phone number.\
        Please Remove the country code and the leading zero from the number.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.birthDate
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The birthdate of the sender. Sender's `birthDate` should be in this format: `YYYY-MM-DD`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        The sender address Object
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address.country
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The sender address Country. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address.state
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The state in the sender address.\
        Input a 2-letter abbreviation of the sender's state. For example, TX, NY, WA. Non-US default: 01.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address.postalCode
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The sender's address postal code
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address.city
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The sender's address city
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sender.address.street
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The sender's address street
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.firstName
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The first name of the beneficiary.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.middleName
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The middle name of the beneficiary
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.lastName
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The last name of the beneficiary
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.email
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The beneficiary email address
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.type
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.phone
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The beneficiary's phone number is significant as this is used to deliver the OTP code to receive payments at the bank. Please Remove the country code and the leading zero from the number.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.address
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        The beneficiary address object
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.address.country
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The country in which the beneficiary address is located. This field should be in [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) e.g NG, GB
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.address.state
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The state in the beneficiary address. Input a 2-letter abbreviation of the beneficiary's state. For example, TX, NY, and WA. Non-US default: 01.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.address.city
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The beneficiary's address city
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.address.street
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The beneficiary's address street
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.cashPickUpLocationCode
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This can be gotten by calling [List bank endpoint](/reference/get-banks)   on the country (NG) and check where `"isCashPickUp": true`  e.g\
        "NG\_CP\_LOC\_1 "
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.securityQuestionId
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This can be gotten by calling [cash pickup security question endpoint](/reference/cash-pickup-security-questions)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        beneficiary.securityAnswer
      </td>

      <td style={{ textAlign: "left" }}>
        No
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is an answer to be provided to the security question asked
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        description
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        A simple description of payment e.g "From Daniella"
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        quoteReference
      </td>

      <td style={{ textAlign: "left" }}>
        Yes
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        This is the reference generated when the source currency is compared against the destination currency.  

        This is required when the source currency is not the same as the destination currency. You can generate a quote using the [Generate quote endpoint.](/reference/get-a-quote)
      </td>
    </tr>
  </tbody>
</Table>

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

* Ensure the beneficiary’s first, middle, and last name agrees to the beneficiary’s Government-issued ID
* `The beneficiary's phone number is significant as this is used to deliver the OTP code to receive payments at the bank.`
* The minimum payout amount for cash pick-up is **10USD**

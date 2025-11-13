---
title: '[DEL] Payouts APIs'
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
# 1. Fund your Fincra wallet

You can fund your wallet by making deposits into the virtual account generated for your business or by requesting a manual top-up. Learn more about [\[creating a virtual account\] ](virtual-account-api)and funding your account to make the most of our virtual account collection method.

> 🚧 Note
>
> For test transactions, you must fund your sandbox account. For more information on how to achieve this, please see the [test section](/docs/testing-your-integration#test-payouts-for--transfers)

# 2. Collect payment information

To initiate the transaction, you'll need to obtain and pass the relevant information about your payout like the beneficiary information, amount, sender information (in some cases) etc. 

See all fields used in making a payout request.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
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
        business
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The ID of the business making the payout. You can get this from your Account page on the merchant portal.
      </td>
    </tr>

    <tr>
      <td>
        sourceCurrency
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The currency which is used to fund the payout.
      </td>
    </tr>

    <tr>
      <td>
        destinationCurrency
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The currency in which the recipient will be receiving funds.  

        For cross currency payouts, this value will vary from the 
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The value that is to be transferred from the source currency wallet.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        A simple description of payment e.g "From Daniella”
      </td>
    </tr>

    <tr>
      <td>
        paymentDestination
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This is the type of account you want to send your payments to, see [payment destinations]\(# Payment Destinations) for more details.
      </td>
    </tr>

    <tr>
      <td>
        customerReference
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The transaction's unique identifier on your system. Customer references prevent duplicate transactions. We advise that you add it to your payload
      </td>
    </tr>

    <tr>
      <td>
        quoteReference
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        This is the reference generated when the source currency is compared against the destination currency.  

        This is **required** for cross-currency payouts. You can generate a quote using the [~~Generate quote endpoint.~~](/reference/get-a-quote)
      </td>
    </tr>

    <tr>
      <td>
        sender
      </td>

      <td>
        Conditional
      </td>

      <td>
        Object
      </td>

      <td>
        The details of the customer initiating the payout
      </td>
    </tr>

    <tr>
      <td>
        sender.name
      </td>

      <td>
        Conditional
      </td>

      <td>
        String
      </td>

      <td>
        The customer's full name. This name would show up in the transfer narration.
      </td>
    </tr>

    <tr>
      <td>
        sender.email
      </td>

      <td>
        Conditional
      </td>

      <td>
        String
      </td>

      <td>
        The customer's email.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary
      </td>

      <td>
        Yes
      </td>

      <td>
        Object
      </td>

      <td>
        The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.firstName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The first name of the beneficiary.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.lastName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The last name of the beneficiary.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.accountHolderName
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        This field is required by all type of beneficiaries.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.accountNumber
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.country
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.email
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>
        The beneficiary's email.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.phone
      </td>

      <td>
        No
      </td>

      <td>
        String
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        beneficiary.type
      </td>

      <td>
        Yes
      </td>

      <td>
        String
      </td>

      <td>
        The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types)  for more details
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.bankCode
      </td>

      <td>
        Conditional
      </td>

      <td>
        String
      </td>

      <td>
        The beneficiary bank code. To get the bank code please see the [list banks endpoint](/reference/get-banks)  codes for more details.
      </td>
    </tr>

    <tr>
      <td>
        beneficiary.mobileMoneyCode
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

# 3. Initiate Payout

Using the fields collected, make a POST request to our [Payout API](/reference/payout-1). Depending on the type of beneficiary and the account's currency, you might need to give some extra information. See sample payloads for each currency

```json NGN
```
```Text KES
```
```Text GHS
```
```Text UGX
```
```json GBP
{
  "business": "{{The business ID}}",
  "sourceCurrency": "GBP",
  "destinationCurrency": "GBP",
  "amount": "1000",
  "description": "i want to pay my vendor",
  "paymentDestination": "bank_account",
  "customerReference": "{{$randomUUID}}",
  "beneficiary": {
    "firstName": "Hassan",
    "lastName": "Sarz",
    "accountHolderName": "Hassan Sarz",
    "country": "NG",
    "phone": "0803443433",
    "accountNumber": "GBXXCLJU04130780008933",
    "type": "individual",
    "email": "aa@aa.com",
    "sortCode": "00000",
    "bankSwiftCode": "UBSWCHZH80A"//required for Chaps payment scheme only
  },
  "paymentScheme": "{{paymentScheme}}",
  "quoteReference": "d187b2fa-27cd-43e6-b622-66361e409c6d"
}
```
```Text EUR
```
```Text USD
```

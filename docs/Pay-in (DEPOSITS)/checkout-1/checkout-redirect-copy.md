---
title: Checkout Redirect (COPY with pool accounts)
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
The Checkout API allows you to safely and securely receive payments from your customers. Your server calls the Create Payment API to generate a checkout link, which you then redirect your users to so they can make a payment. After making a payment, your users are redirected to your website.

# Payment methods

Our checkout solution offers a gateway to various payment methods. Some of the supported methods include:

1. Card 
2. Bank Transfer: This is offered via two options. Pool accounts which is static account or Dynamic accounts which are temporary virtual accounts generated when each charge is created.
3. Mobile money
4. USSD via PayAttitude

| Method        | API variable   |
| :------------ | :------------- |
| Card          | card           |
| Bank Transfer | bank\_transfer |
| Mobile money  | mobile\_money  |
| PayAttitude   | PayAttitude    |

# Supported account types for pay with transfer

Fincra supports two types of accounts for our **Pay with Transfer** (bank transfer) payment method. These are Dynamic virtual accounts and Pool accounts.

1. **Dynamic Accounts**: These are temporary virtual accounts which are used to receive payments and expire within a set time. At Fincra dynamic accounts expire after 20 minutes.
2. **Pool Accounts**: Pool account is a static or fixed account used to receive payments. Unlike the dynamic accounts which are generated upon initiating a charge and expire in a set time, pool account will remain the same for your business for all charges you initiate.

> 🚧 NOTE:
>
> 1. Dynamic accounts are not meant to be reused or paid into after expiry (20 minutes). Payments made into dynamic accounts after expiry or on second use will most likely not go through or eventually be refunded to the customers. Communicate this clearly to your customers.
> 2. Although Pool account details are the same for all charges, it is still important you create a charge for each payment attempt as the charge ID will be used to identify and create a pending transaction that will be confirmed once the payment goes through. More details on the ID can be found below.

# Supported currencies for checkout

<Table align={["left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Currencies
      </th>

      <th>
        Bank Transfer




        (Pool Accounts)
      </th>

      <th>
        Bank Transfer




        (Dynamic Accounts)
      </th>

      <th>
        Cards
      </th>

      <th>
        Mobile money
      </th>

      <th>
        USSD
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        KES
      </td>

      <td>
        YES
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        ZMW
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        UGX
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        ZAR
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        GHS
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        NGN
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>
    </tr>

    <tr>
      <td>
        USD
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>

      <td>
        YES
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</Table>

# How to use the checkout redirect API

## 1 - Collect Payment Details

To initialise the transaction, you'll need to pass information such as email, first name, last name, amount, transaction reference, etc.

Please find below the request parameters for the endpoint.

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Data type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        amount
      </td>

      <td>
        integer
      </td>

      <td>
        Required
      </td>

      <td>
        The amount to charge the customer.
      </td>
    </tr>

    <tr>
      <td>
        redirectUrl
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        The URL to redirect your customer when the transaction is complete.
      </td>
    </tr>

    <tr>
      <td>
        currency
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        The currency in which the customer should be charged. Options are [NGN, GHS, KES, UGX, ZAR, ZMW] 
      </td>
    </tr>

    <tr>
      <td>
        reference
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Your transaction reference. Must be unique for every transaction.\
        If you do not provide one, a unique transaction reference would be generated for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        feeBearer
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        This will set who bears the fees of the transaction. If it is set to `business`, the merchant will bear the fee, while if it is set to `customer`, the customer will bear the fee. By default, it is set to `business`
      </td>
    </tr>

    <tr>
      <td>
        metadata
      </td>

      <td>
        object
      </td>

      <td>
        Optional
      </td>

      <td>
        Include any information you'd want to send to Fincra in this object.\
        e.g metadata: \{userId: "my\_user\_id" }
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        JSON object containing customer details
      </td>
    </tr>

    <tr>
      <td>
        customer.name
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        The name of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.email
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        The email of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.phoneNumber
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        The mobile number of the customer
      </td>
    </tr>

    <tr>
      <td>
        successMessage
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        The message you want customers to see after successful payment.
      </td>
    </tr>

    <tr>
      <td>
        settlementDestination
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Settlement destination is the location where you want your payments to be settled. Settlements are only to wallets (balances) for now\
        Value for settlementDestination would be **wallet** 
      </td>
    </tr>

    <tr>
      <td>
        paymentMethods
      </td>

      <td>
        array
      </td>

      <td>
        Optional
      </td>

      <td>
        The payment method you want to make available to your customers\
        E.g, Bank (bank\_transfer), Card (card), Mobile Money (mobile\_money), Pay Attitude (payAttitude).
      </td>
    </tr>

    <tr>
      <td>
        defaultPaymentMethod
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        The Payment method that should be active by default on the checkout page E.g bank\_transfer or card
      </td>
    </tr>
  </tbody>
</Table>

## 2 - Initiate Payment

After collecting the necessary payment details for the transaction. Make a POST request to our [create checkout endpoint](initiate-checkout).

**Endpoint**:

```json POST
{{host}}/checkout/payments
```
```coffeescript cURL
curl --location 'https://api.fincra.com/checkout/payments' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'x-pub-key: <Your API public key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initialise a transaction:

```json NGN
{
    "amount": 350,
    "currency": "NGN",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["bank_transfer", "card", "payAttitude"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json GHS
{
    "amount": 350,
    "currency": "GHS",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json KES
{
    "amount": 350,
    "currency": "KES",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json UGX
{
    "amount": 350,
    "currency": "UGX",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["mobile_money"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```
```json Pool account (e.g KES)
{
    "amount": 350,
    "currency": "KES",
    "customer":{
        "name":"Customer Name",
        "email":"customer@theiremail.com"
    },
  	"paymentMethods": ["bank_transfer"],
    "feeBearer":"customer",
    "reference":"your-internal-reference-id",
    "redirectUrl":"https://yoursite.com/redirect-destination"
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
    "status": true,
    "message": "Hosted link generated",
    "data": {
        "link": "https://checkout.fincra.com/pay/fcr-p-********",
        "payCode": "fcr-p-********"
    }
}
```
```json With Reference
{
    "status": true,
    "message": "Hosted link generated",
    "data": {
        "link": "https://checkout.fincra.com/pay/fcr-p-********",
        "reference": "*********************",
        "payCode": "fcr-p-********"
    }
}
```

**Note**: When no reference is passed from your end, the payCode is used as the transaction reference.

After you get the above response, you should then redirect your customer to the checkout URL provided in the response ("link"), to enable them complete their payment. Once the payment is complete or in the event of a failure, Fincra will redirect your customer to your specified redirectUrl. The transaction reference will be appended as a query parameter to your redirectUrl as well.

e.g [https://website\_redirectUrl/?reference=YOUR\_REFERENCE](https://website_redirectUrl/?reference=YOUR_REFERENCE)

In a situation where no redirectUrl is passed, the customer receives visual confirmation on the completion of the payment and is NOT redirected out of the current webpage.

## 3 - Verify payment

It is critical that you confirm the transaction using its reference, just because the redirectUrl was visited doesn't prove that transaction was successful. You can confirm payment by using the [verify payment endpoint](verify-checkout-status). 

**Note**: It is advised that you consult the Overpayments and Underpayments [doc](https://docs.fincra.com/docs/handling-underpayments-and-overpayments) to see how to treat such transactions. A sample response for an underpayment has been added. You would note the `varianceType` which marks it as an `underpayment`, and also the `amountReceived` field which tells you the true amount paid by customers in the case where `bank_transfer` is the payment method uses.

Endpoint:

```json GET
{{host}}/checkout/payments/merchant-reference/{{reference}}
```
```coffeescript cURL
curl --location 'https://api.fincra.com/checkout/payments/merchant-reference/{{reference}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'x-business-id: <Your business ID>' \
```

Here's the api response:

```json Payload
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 1093510,
        "businessId": "******************",
        "paymentLinkId": null,
        "amount": 100,
        "currency": "NGN",
        "convertedAmount": 100,
        "amountReceived": 101.51,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "card",
        "redirectUrl": "https://yoursite.com/redirect-destination",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "settlementTime": "instant",
        "feeBearer": "customer",
        "reference": "fcr-p-fc99410576",
        "merchantReference": "31c1169c-d535-4e0b-90eb-a03a99c2f334",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "varianceType": null,
        "createdAt": "2024-05-16T10:31:08.680Z",
        "updatedAt": "2024-05-16T10:33:07.000Z",
        "customer": {
            "name": "Customer name",
            "email": "customer@theirmail.com",
            "phoneNumber": "2348189299860"
        },
        "amountExpected": 100,
        "message": null,
        "actionRequired": null
    }
}
```
```json Underpayment
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 1162018,
        "businessId": "******************",
        "paymentLinkId": null,
        "amount": 7000,
        "currency": "NGN",
        "convertedAmount": 7000,
        "amountReceived": 73,
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "card",
            "bank_transfer",
            "payattitude"
        ],
        "defaultPaymentMethod": "card",
        "redirectUrl": "https://yoursite.com/redirect-destination",
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "settlementTime": "instant",
        "feeBearer": "customer",
        "reference": "fcr-p-24a8b52ca5",
        "merchantReference": "15c3eb79-67de-445f-8cbe-acce91e5aca2",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "varianceType": "underpayment",
        "createdAt": "2024-05-27T09:46:52.708Z",
        "updatedAt": "2024-05-27T09:48:06.000Z",
        "customer": {
            "name": "Customer name",
            "email": "customer@theirmail.com",
            "phoneNumber": "2348173729860"
        },
        "amountExpected": 7000,
        "message": "INCORRECT_AMOUNT",
        "actionRequired": "Process refund via dashboard/Refund API"
    }
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

**Note:** We will only send you a webhook when the transaction is successful. Also, ensure to consult our Overpayments and Underpayments [doc](https://docs.fincra.com/docs/handling-underpayments-and-overpayments) to see how to treat when webhook for such is received.

Webhook response:

```json Response [Bank Transfer]
{
  "event": "charge.successful",
  "data": {
    "id": 601227,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 355.27,
    "amountReceived": 200,
    "currency": "NGN",
    "fee": 3.01,
    "vat": 0.21,
    "message": "",
    "status": "success",
    "reference": "fcr-p-********",
    "description": "checkout",
    "type": "bank_transfer",
    "customer": {
      "name": "Christopher Chukwuemeka",
      "email": "chris@fincra.com",
      "phoneNumber": null
    },
    "metadata": {},
    "settlementDestination": "wallet",
    "virtualAccount": {
      "bankName": "globus",
      "id": "*************************",
      "bankCode": "103",
      "accountName": "Fincra DevRel",
      "accountNumber": "3994698574",
      "sessionId": "100006231127112001938859294368",
      "channelName": "globus",
      "payerAccountNumber": "***********",
      "payerAccountName": "*************************",
      "payerBankName": "***********",
      "payerBankCode": null,
      "expiresAt": "@timestamp",
      "business": "*********************"
    },
    "amountToSettle": 196.99,
    "chargeReference": "fcr-bt-************"
  }
}
```

## Webhook Response

The webhook response is explained in detail here.

| Data                       | description                                                                                                                                      |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| event                      | The Webhook event                                                                                                                                |
| type                       | The type of transaction                                                                                                                          |
| data                       | The data object                                                                                                                                  |
| data.method                | The payment method e.g card, bank transfer                                                                                                       |
| data.paymentReference      |                                                                                                                                                  |
| data.transactionReference  | The unique reference generated for the transaction                                                                                               |
| data.merchantReference     | The **reference** the merchant included while initiating the transaction. This is the reference of the transaction on the merchant's application |
| data.amount                | The amount the customer paid                                                                                                                     |
| data.amountToSettle        | The amount the merchant receives                                                                                                                 |
| datafee                    | The fee charged for the transaction                                                                                                              |
| data.feeBearer             | The bearer of the fees                                                                                                                           |
| data.status                | The status of the transaction                                                                                                                    |
| data.settlementDestination | The settlement destination. This is by default, wallet                                                                                           |
| data.currency              | The currency in which the payment was made                                                                                                       |
| data.customer              | The customer. This is an object that contains the name , email and phoneNumber of the customer                                                   |
| data.metadata              | The extra information included in the transaction                                                                                                |
| data.createdAt             | This is the timestamp the transaction was created                                                                                                |
| data.updatedAt             | This is the timestamp the transaction was updated                                                                                                |

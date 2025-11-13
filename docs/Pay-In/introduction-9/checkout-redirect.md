---
title: Checkout Redirect
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
The Checkout API allows you to safely and securely receive payments from your customers. Your server calls the Create Payment API to generate a checkout link, which you then redirect your users to so they can make a payment. After making a payment your users are redirected to your website.

Let's get started.

## 1 - Collect Payment Details

To initialize the transaction, you'll need to pass information such as email, first name, last name amount, transaction reference, etc. Email, name, and amount are required.

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
        string
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
        The currency in which the customer should be charged. Only NGN is available for now.
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
        Optional
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
        Settlement destination is where you want the payments to be settled. It can either be a wallet or bank account. By default the settlement destination is your Fincra wallet.\
        Values for settlementDestination can be **wallet** and **bank\_account**
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
        The payment method you want to make available to your customers E.g, Bank (bank\_transfer), card (card).
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

After collecting the necessary payment details for the transaction. Make a POST request to our initialize checkout endpoint.

**Note** : Before making a post request, the public key should be specified in the header.

```json Public key
-H "x-pub-key: your_public_key".
```

```json Request
{{host}}/checkout-core/payments
```

If the API call is successful, Fincra returns the following response:

```json Response
{
   “status” : true,
   “message” : “Payment transaction initiated” ,
   “data”: {
           “reference”: “eyza908ne”,
           “link”: "https://checkout.fincra.com/pay/eyza908ne"
     }
}
```

**Note**: The above reference is not the same as the  reference specified in the [payment details](/docs/checkout-redirect#1---collect-payment-details)

You should then redirect your customer to the Checkout URL provided in the response to enable them complete their payment. Once the payment is complete or in the event of a failure, Fincra will redirect your customer to your specified redirectUrl. The transaction reference will be appended as a query parameter to your redirectUrl as well.

e.g [https://website\_redirectUrl/?reference=YOUR\_REFERENCE](https://website_redirectUrl/?reference=YOUR_REFERENCE)

In a situation where no redirectUrl is passed, the customer receives visual confirmation on the completion of the payment and is NOT redirected out of the current webpage.

## 3 - Verify payment

It is critical that you confirm the transaction using its reference,Just because the redirectUrl was visited doesn't prove that transaction was successful.You can confirm a payment by using the [Verify payment endpoint](/reference/verify-payment)

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and validating the webhook notification on your end.

**Note:** We will only send you a webhook when the transaction is successful

```json checkout webhook response
{ 
event: "charge.successful", 
type: "charge", 
  data: {
    businessId: "56f591092ceb1ad21ef",
    method: "card",
    paymentReference: "6df5910e1bdde31abf",
    transactionReference: "5f5910e1bdde31abfe",
    amount: 500.42,
    amountToSettle: 500,
    fee: 0.42,
    feeBearer: "customer",
    status: "success",
    settlementDestination: "wallet",
    currency: "NGN",
    customer: { name: "John Thomas", email: "johnt@gmail.com", phoneNumber: null },
    metadata: { reference: "my_reference", userId: "my_user_id" },
    createdAt: "@timestamp",
    updatedAt: "@timestamp",
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
| data.settlementDestination | The settlement destination. This is either wallet or bankAccount                                                                                 |
| data.currency              | The currency in which the payment was made                                                                                                       |
| data.customer              | The customer. This is an object that contains the name , email and phoneNumber of the customer                                                   |
| data.metadata              | The extra information included in the transaction                                                                                                |
| data.createdAt             | This is the timestamp the transaction was created                                                                                                |
| data.updatedAt             | This is the timestamp the transaction was updated                                                                                                |

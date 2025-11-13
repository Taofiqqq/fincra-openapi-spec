---
title: Checkout Standard
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
Checkout Standard provides a simplified and secure flow for collecting payments from customers. It's easy to integrate.

The check-out standard option can be integrated such that your application displays our payment modal allowing your customers to complete their transactions by entering their payment information.

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
        Data Type
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
        key
      </td>

      <td>
        string
      </td>

      <td>
        Required
      </td>

      <td>
        Your public key
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
        Optional
      </td>

      <td>
        The currency in which the customer should be charged. Only NGN is available for now.
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        object
      </td>

      <td>
        Required
      </td>

      <td>
        The JSON object containing the customer name, email, and phone number
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
        customer.PhoneNumber
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        The phone number  of the customer
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
        This will set who bears the fees of the transaction. If it is set to `business`, the merchant will bear the fee, while if it is set to `customer`, the customer will bear the fee. By default, it is set to `business`.
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
        Required
      </td>

      <td>
        Include any information you'd want to send to Fincra in this object.\
        e.g metadata: \{userId: "my\_user\_id" }
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
        settlement destination is where you want the payments to be settled. It can either be a wallet or bank account. By default the settlement destination is your Fincra wallet. Values for settlementDestination can be **wallet** and **bank\_account**
      </td>
    </tr>

    <tr>
      <td>
        onSuccess
      </td>

      <td>
        [Function]
      </td>

      <td>
        Optional
      </td>

      <td>
        A function that executes any action you want to perform when the transaction is successful, can be a success message or a redirect Url.
      </td>
    </tr>

    <tr>
      <td>
        onClose
      </td>

      <td>
        [Function]
      </td>

      <td>
        Optional
      </td>

      <td>
        Javascript function that is called if the customer closes the payment modal instead of making a payment
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
        The payment method you want to make available to your customers  E.g, Bank (bank\_transfer), card (card), payAttitude.
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
        The Payment method that should be active by default on the checkout page E.g bank\_transfer, card, payAttitude.
      </td>
    </tr>
  </tbody>
</Table>

If you already have the client information recorded in your database, you can retrieve it from there, or through a form like the one below:

```json HTML
<form id="payment-form">
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" required />
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="tel" id="amount" required />
  </div>
  <div class="form-group">
    <label for="name"> Name</label>
    <input type="text" id="name" />
  </div>
  <div class="form-submit">
    <button type="submit" onclick="payFincra()"> Pay </button>
  </div>
</form>
<script src="https://unpkg.com/@fincra-engineering/checkout@1.10.0/dist/inline.min.js"></script>
```

**Note** : The Fincra inline javascript is included using a script tag. This is how you import Fincra Checkout into your code. The Pay button has been tied to an onClick function called payFincra. This is the action that causes the Fincra popup to load.

## 2 - Initiate Payment

When you have all of the information needed to begin the transaction, you must connect it to the javascript function that sends it to Fincra and displays the checkout popup modal.

```json Javascript
const paymentForm = document.getElementById('payment-form');
     paymentForm.addEventListener("submit", payWithFincra, false);
function payFincra(e) {
     e.preventDefault();
       Fincra.initialize({
         key: "pk_##########",
         amount: document.getElementById("amount").value,
         currency: "NGN",
         customer: {
             name: document.getElementById("name").value,
             email: document.getElementById("email").value,
             phoneNumber: document.getElementById("phoneNumber").value,
           },
 
         onClose: function () {
           alert("Transaction was not completed, window closed.");
         },
         onSuccess: function (data) {
           const reference = data.reference;
    alert("Payment complete! Reference: " + reference);
         },
       });
     }
```

**Take note of the following:**  

* The <code>key</code> field here takes your Fincra *public* key.
* The <code>amount</code> field here is the amount to be collected.

## 3 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the conversion. Read our [guide](https://docs.fincra.com/docs/secret-key) on securing and validating the webhook notification on your end.

**Note:** We will only send you a webhook when the transaction is successful

```json Response
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

| event                      | The Webhook event                                                                                                                                |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| type                       | The type of transaction                                                                                                                          |
| data                       | The data object                                                                                                                                  |
| data.method                | The payment method e.g card, bank transfer                                                                                                       |
| data.paymentReference      |                                                                                                                                                  |
| data.transactionReference  | The unique reference generated for the transaction                                                                                               |
| data.MerchantReference     | The **reference** the merchant included while initiating the transaction. This is the reference of the transaction on the merchant's application |
| data.amount                | The amount the customer paid                                                                                                                     |
| data.amountToSettle        | The amount the merchant receives                                                                                                                 |
| data.fee                   | The fee charged for the transaction                                                                                                              |
| data.feeBearer             | The bearer of the fees                                                                                                                           |
| data.status                | The status of the transaction                                                                                                                    |
| data.settlementDestination | The settlement destination. This is either **wallet** or **bankAccount**                                                                         |
| data.currency              | The currency in which the payment was made                                                                                                       |
| data.customer              | The customer. This is an object that contains the name, email, and phoneNumber of the customer                                                   |
| data.metadata              | The extra information included in the transaction                                                                                                |
| data.createdAt             | This is the timestamp the transaction was created                                                                                                |
| data.updatedAt             | This is the timestamp the transaction was updated                                                                                                |

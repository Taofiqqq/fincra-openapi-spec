---
title: Checkout Widget
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
Fincra’s Popup is a Javascript library that allow developers to build a secure and convenient payment flow for their web applications. 

This can be integrated to display a payment modal within your application, enabling your customers to complete transactions by entering their payment details by doing the following

# 1 - Get Payment Infomation

To get started, you need to initialise the transaction by passing the information like email, first name, last name, amount, transaction reference, etc.

Please find below the full request parameters for the endpoint `(add the endpoint here) (add list of payment method)`

| **Field**             | **Data Type** | **Required** | **Description**                                                                                                                                                                                                         |
| --------------------- | ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                   | string        | Required     | Your public key                                                                                                                                                                                                         |
| currency              | string        | Optional     | The currency in which the customer should be charged.  `(Insert all available currencies)`                                                                                                                              |
| customer              | object        | Required     | The JSON object containing the customer name, email, and phone number                                                                                                                                                   |
| customer.name         | string        | Required     | The name of the customer                                                                                                                                                                                                |
| customer.email        | string        | Required     | The email of the customer                                                                                                                                                                                               |
| customer.phoneNumber  | string        | Optional     | The phone number of the customer                                                                                                                                                                                        |
| reference             | string        | Optional     | Your transaction reference. Must be unique for every transaction. If you do not provide one, a unique transaction reference would be generated for the transaction.                                                     |
| feeBearer             | string        | Required     | This will set who bears the fees of the transaction. If it is set to `business`, the merchant will bear the fee, while if it is set to `customer`, the customer will bear the fee. By default, it is set to `business`. |
| metadata              | object        | Required     | Include any information you'd want to send to Fincra in this object. e.g metadata: \{userId: "my\_user\_id" }                                                                                                           |
| settlementDestination | string        | Optional     | Settlement destination is the location where you want your payments to be settled. Settlements are only to wallets (balances) for nowValue for settlementDestination would be **wallet**                                |
| onSuccess             | [Function]    | Optional     | A function that executes any action you want to perform when the transaction is successful, can be a success message or a redirect Url.                                                                                 |
| onClose               | [Function]    | Optional     | Javascript function that is called if the customer closes the payment modal instead of making a payment                                                                                                                 |
| paymentMethods        | array         | Optional     | The payment method you want to make available to your customers E.g, Bank (bank\_transfer), card (card), payAttitude. Refer to the list of payment methods for your preferred option.                                   |
| defaultPaymentMethod  | string        | Optional     | The Payment method that should be active by default on the checkout page E.g bank\_transfer, card, payAttitude.                                                                                                         |

If you already have the customer information in your database, you can retrieve it or through a form like the one below:

The Fincra inline JavaScript is added using a script tag, which is how Fincra Popup is imported into your code. The Pay button is linked to an `onClick` function called `payFincra`, which triggers the Fincra payment popup to appear.

```html html
<form id="payment-form">
  <div class="form-group">
    <label for="name"> Name</label>
    <input type="text" id="name" required />
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" required />
  </div>
  <div class="form-group">
    <label for="phoneNumber">Phone Number</label>
    <input type="number" id="phoneNumber" required />
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="tel" id="amount" required />
  </div>
  <div class="form-submit">
    <button type="submit" id="submit-button"> Pay </button>
  </div>
</form>
<script src="https://unpkg.com/@fincra-engineering/checkout@2.2.0/dist/inline.min.js"></script>
```

# 2 - Initialize Transaction

Once you have all the necessary information to start the transaction, link it to the JavaScript function that sends it to Fincra and triggers the checkout popup modal.

```javascript javascript
const paymentForm = document.getElementById('payment-form');
     paymentForm.addEventListener("submit", payFincra, false);
function payFincra(e) {
     e.preventDefault();
       Fincra.initialize({
         key: "pk_##########",
         amount: parseInt(document.getElementById("amount").value),
         currency: "NGN",
         customer: {
             name: document.getElementById("name").value,
             email: document.getElementById("email").value,
             phoneNumber: document.getElementById("phoneNumber").value,
           },
        //Kindly chose the bearer of the fees
        feeBearer: "business" || "customer",
 
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

> 📘 Take note of the following
>
> * The `key` field here takes your Fincra *public* key.
> * The `amount` field here is the amount to be collected.

# 3 - Receive and Verify Webhook Notification

Set up your system to listen for webhook events. We will send a notification to your webhook URL to indicate the status of the transaction. Refer to our guide on securing and validating webhook notifications on your end.

> 📘 Note
>
> Webhooks will only be sent for successful transactions.

## Webhook Response

A detailed explanation of the webhook response can be found here.

| **event**                  | **The Webhook event**                                                            |
| -------------------------- | -------------------------------------------------------------------------------- |
| type                       | The type of transaction e.g?                                                     |
| data                       | The data object                                                                  |
| data.method                | The payment method e.g card, bank transfer                                       |
| data.paymentReference      |                                                                                  |
| data.transactionReference  | The unique reference generated for the transaction                               |
| data.MerchantReference     | The **reference** the merchant included while initiating the transaction.        |
| data.amount                | The amount the customer paid                                                     |
| data.amountToSettle        | The amount settled to the merchant wallet                                        |
| data.fee                   | The fee charged for the transaction                                              |
| data.feeBearer             | The bearer of the fees                                                           |
| data.status                | The status of the transaction                                                    |
| data.settlementDestination | The settlement destination. This is always, **wallet**                           |
| data.currency              | The currency in which the payment was made                                       |
| data.customer              | This is an object that contains the name, email, and phoneNumber of the customer |
| data.metadata              | The extra information included in the transaction                                |
| data.createdAt             | This is the date and time the transaction was created                            |
| data.updatedAt             | This is the date and time the transaction was updated                            |

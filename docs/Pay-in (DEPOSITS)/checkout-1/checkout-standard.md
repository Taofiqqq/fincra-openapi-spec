---
title: Checkout Standard
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
Checkout Standard provides a simplified and secure flow for collecting payments from customers. It's easy to integrate.

The check-out standard option can be integrated such that your application displays our payment modal allowing your customers to complete their transactions by entering their payment information.

Let's get started.

## 1 - Collect Payment Details

To initialize the transaction, you'll need to pass information such as email, first name, last name amount, transaction reference, etc. Email, name, and amount are required.

Please find below the request parameters for the endpoint.

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Data Type",
    "h-2": "Required",
    "h-3": "Description",
    "0-0": "key",
    "0-1": "string",
    "0-2": "Required",
    "0-3": "Your public key",
    "1-0": "currency",
    "1-1": "string",
    "1-2": "Optional",
    "1-3": "The currency in which the customer should be charged. Only NGN is available for now.",
    "2-0": "customer",
    "2-1": "object",
    "2-2": "Required",
    "2-3": "The JSON object containing the customer name, email, and phone number",
    "3-0": "customer.name",
    "3-1": "string",
    "3-2": "Required",
    "3-3": "The name of the customer",
    "4-0": "customer.email",
    "4-1": "string",
    "4-2": "Required",
    "4-3": "The email of the customer",
    "5-0": "customer.PhoneNumber",
    "5-1": "string",
    "5-2": "Optional",
    "5-3": "The phone number  of the customer",
    "6-0": "reference",
    "6-1": "string",
    "6-2": "Optional",
    "6-3": "Your transaction reference. Must be unique for every transaction.  \nIf you do not provide one, a unique transaction reference would be generated for the transaction.",
    "7-0": "feeBearer",
    "7-1": "string",
    "7-2": "Required",
    "7-3": "This will set who bears the fees of the transaction. If it is set to `business`, the merchant will bear the fee, while if it is set to `customer`, the customer will bear the fee. By default, it is set to `business`.",
    "8-0": "metadata",
    "8-1": "object",
    "8-2": "Required",
    "8-3": "Include any information you'd want to send to Fincra in this object.  \ne.g metadata: {userId: \"my_user_id\" }",
    "9-0": "settlementDestination",
    "9-1": "string",
    "9-2": "Optional",
    "9-3": "Settlement destination is the location where you want your payments to be settled. Settlements are only to wallets (balances) for now  \nValue for settlementDestination would be **wallet**",
    "10-0": "onSuccess",
    "10-1": "[Function]",
    "10-2": "Optional",
    "10-3": "A function that executes any action you want to perform when the transaction is successful, can be a success message or a redirect Url.",
    "11-0": "onClose",
    "11-1": "[Function]",
    "11-2": "Optional",
    "11-3": "Javascript function that is called if the customer closes the payment modal instead of making a payment",
    "12-0": "paymentMethods",
    "12-1": "array",
    "12-2": "Optional",
    "12-3": "The payment method you want to make available to your customers  E.g, Bank (bank_transfer), card (card), payAttitude.",
    "13-0": "defaultPaymentMethod",
    "13-1": "string",
    "13-2": "Optional",
    "13-3": "The Payment method that should be active by default on the checkout page E.g bank_transfer, card, payAttitude."
  },
  "cols": 4,
  "rows": 14,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


If you already have the client information recorded in your database, you can retrieve it from there, or through a form like the one below:

```json HTML
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

**Note** : The Fincra inline javascript is included using a script tag. This is how you import Fincra Checkout into your code. The Pay button has been tied to an onClick function called payFincra. This is the action that causes the Fincra popup to load.

## 2 - Initiate Payment

When you have all of the information needed to begin the transaction, you must connect it to the javascript function that sends it to Fincra and displays the checkout popup modal.

```json Javascript
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

**Take note of the following:**  

- The <code>key</code> field here takes your Fincra _public_ key.
- The <code>amount</code> field here is the amount to be collected.

## 3 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the conversion. Read our [guide](https://docs.fincra.com/docs/secret-key) on securing and validating the webhook notification on your end.

**Note:** We will only send you a webhook when the transaction is successful

```json Response
{
  "event": "charge.successful",
  "data": {
    "id": 4704,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 1725.59,
    "amountReceived": 1725.59,
    "currency": "NGN",
    "fee": 25.58,
    "vat": 1.78,
    "message": “”,
    "status": "success",
    "reference": "fcr-p-5b7a603c01",
    "description": "checkout",
    "type": "bank_transfer",
    "customer": {
      "name": "Taofiq Taofiq",
      "email": "taofiq@fincra.com",
      "phoneNumber": null
    },
    "metadata": {
      "id": 209,
      "name":"Testing",
      "amount": 1700,
      "currency": "NGN",
      "disabled": false,
      "metadata": null,
      "shortUrl": null,
      "createdAt":"2023-07-27T09:14:31.636Z",
      "customUrl": null,
      "deletedAt": null,
      "feeBearer": "customer",
      "reference": "89c512379b98a7876923e",
      "updatedAt": "2023-07-27T09:14:31.636Z",
      "businessId": "200ab2015e137543357df000",
      "description": "Testss",
      "redirectUrl": null,
      "isAmountFixed": false,
      "successMessage": null,
      "collectPhoneNumbers": false,
      "settlementDestination":"wallet"
    },
    "settlementDestination": "wallet",
    "virtualAccount": {
      "bankName": "wema",
      "bankCode": "035",
      "accountName": "FIN-Tega and Sons",
      "accountNumber": "7946814353",
      "sessionId": "2322",
      "channelName": "wema",
      "payerAccountNumber": "7820444125",
      "payerAccountName": "Taofiq Taofiq",
      "payerBankName": "gtb",
      "payerBankCode": "042",
      "expiresAt": "2023-08-11T09:12:34.000Z"
    },
    "amountToSettle": 1700,
    "chargeReference": "fcr-bt-3e02354cc0b00d61e"
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
| data.settlementDestination | The settlement destination. This is always, **wallet**                                                                                           |
| data.currency              | The currency in which the payment was made                                                                                                       |
| data.customer              | The customer. This is an object that contains the name, email, and phoneNumber of the customer                                                   |
| data.metadata              | The extra information included in the transaction                                                                                                |
| data.createdAt             | This is the timestamp the transaction was created                                                                                                |
| data.updatedAt             | This is the timestamp the transaction was updated                                                                                                |
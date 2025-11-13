---
title: Cross Currency Checkout
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
The **Cross Currency Checkout** solution allows businesses to generate payment links that can be shared with customers for making payments through various methods, such as bank deposits or mobile money. Unlike a standard checkout, Cross Currency Checkout enables you to select a different currency for settlement, meaning the collection currency can differ from the settlement currency. This flexibility simplifies the collection process across multiple currencies, ensuring secure, efficient, and seamless settlement, making it easier for businesses to manage and receive payments globally.

### Key Features

<Callout icon="✨" theme="default">
  ### **Multi-Currency Quote**: Create quotes in your preferred currency and receive payments in the customer's currency.

  **Automatic Payment Processing**:\
  Payments are automatically processed in the chosen currency and settled in the quote’s initiating currency.

  **Detailed Transaction Reporting**:\
  Track payment status, conversion rates, and transaction details through the API.
</Callout>

### How It Works

Cross Currency Checkout is an implementation that allows businesses to accept payments from customers in different currencies, while settling the funds in a currency of their choice. Here’s a simple explanation of how the process works. 

1. **Generate a Quote**:\
   When a customer is ready to make a payment, you first need to create a quote. This quote calculates the exact amount the customer needs to pay in their local currency and converts it to the currency you want to receive. The system also provides a reference number for the quote, which will be used in the next steps.
2. **Initiate Payment**:\
   After creating the quote, the quote reference is used to generate a payment link. This link contains all the necessary details for the customer to make the payment. The payment link can be shared with the customer via email, SMS, or any other communication method you prefer.
3. **Share Payment Link**:

   The customer clicks on the payment link and is presented with two payment options (`Bank Transfer` or `Mobile Money`), depending on the currency they are using. The payment link includes all necessary details, guiding the customer through the process to complete the payment. Below is an example of what the payment link looks like when opened.

   * **Scenario: Customer Pays via Bank Transfer**:\
     The customer can pay directly from their bank account. They need to include the payment reference provided in the link to ensure the payment is matched correctly.

     <Image align="center" src="https://files.readme.io/47875a743e984022771b018869c66ed6de11ebae77ff6156725ce680822965dd-Screenshot_2024-08-27_at_17.37.45.png" />
   * **Scenario: Customer Pays via Mobile Money**\
     For customers using mobile money services, they can complete the payment using their mobile money account by following the instructions provided in the payment link.

     <Image align="center" src="https://files.readme.io/f9a09b51a569b83a5f696e4f90e8ab1c2ec67613e2dd7bb9f62796d717c6254e-Screenshot_2024-08-27_at_17.38.02.png" />
4. **Reporting and Tracking**\
   Once the customer has made the payment, you can track its progress via API endpoints we have made available. The payment status will be updated in real-time, and you’ll be able to see details such as the exchange rate used and any fees that were applied. This ensures that you always know the status of your transactions.

For a deeper dive into the technical details of integrating this payment process into your application, including API calls and response handling, please refer to the [Integration Flow](cross-currency-checkout-integration-flow) subpage.

### Payment Methods

<Callout icon="📈" theme="default">
  ### The following payment methods are supported:

  * Bank Transfer
  * Virtual Account
  * Mobile Money
  * Payment Link
</Callout>

### List of supported Currencies

| Country                              | Currency | Payment Method  | Financial Institution                 | Min (Deposit) | Max (Deposit) |
| :----------------------------------- | :------- | :-------------- | :------------------------------------ | :------------ | :------------ |
| Kenya                                | KES      | Bank Transfer   | UBA                                   | 1             | no limit      |
| Kenya                                | KES      | Virtual Account | Choice, Cooperative Bank              | 1             | no limit      |
| Kenya                                | KES      | Mobile Money    |                                       | 1             | 300,000       |
| Kenya                                | KES      | Pesa Link       |                                       | 1             | 999,999       |
| Nigeria                              | NGN      | Bank Transfer   | UBA, Zenith, Globus                   | 1             | no limit      |
| Nigeria                              | NGN      | Virtual Account | Globus, Wema, Sterling, First, Zenith | 1             | no limit      |
| Ghana                                | GHS      | Bank Transfer   | First Atlantic                        | 1             | no limit      |
| Ghana                                | GHS      | Mobile Money    |                                       | 1             | 20,000        |
| Zambian                              | ZMW      | Bank Transfer   |                                       | 1             | no limit      |
| Zambian                              | ZMW      | Mobile Money    |                                       | 1             | 20,000        |
| South Africa                         | ZAR      | Bank Transfer   | Ozow                                  | 1             | no limit      |
| Uganda                               | UGX      | Bank Transfer   | Diamond Trust                         | 1             | no limit      |
| Uganda                               | UGX      | Virtual Account | Diamond Trust                         | 1             | no limit      |
| Uganda                               | UGX      | Mobile Money    |                                       | 1             | 7,000,000     |
| Benin                                | XOF      | Mobile Money    |                                       | 1             | 2,000,000     |
| Burkina Faso                         | XOF      | Mobile Money    |                                       | 1             | 2,000,000     |
| Cote D'Ivoire                        | XOF      | Mobile Money    |                                       | 1             | 1,000,000     |
| Senegal                              | XOF      | Mobile Money    |                                       | 1             | 1,000,000     |
| Cameroon                             | XAF      | Mobile Money    |                                       | 1             | 1,000,000     |
| Republic of Congo (Congo Brazaville) | XAF      | Mobile Money    |                                       | 1             | 1,500,000     |
| Gabon                                | XAF      | Mobile Money    |                                       | 1             | 500,000       |

> ❗️ Important
>
> The FX rate  expires after 30 seconds by default. If you need a different configuration, please request a custom expiry from  our team.

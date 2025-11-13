---
title: Overview
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
With Fincra Utility API, customers can access several resources needed to make airtime, data, electricity, water, and general utility payments. Fincra makes it easy for customers to manage payments to utility companies.

Fincra provides a platform where customers can check their balance and authorize payments to the utility service provider.

##Paying Utility Bills WorkFlow
-----------------------------
The customer selects the service provider
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/536f8e0-Flowcharts.png",
        "Flowcharts.png",
        2304,
        375,
        "#000000"
      ]
    }
  ]
}
[/block]
  * A customer can see a list of service providers on your website or mobile app. 
  * From the list, the customer selects a service provider. 
  * Your website displays a list of required fields that a customer must fill out to access the service provider. 
  * The customer fills in the fields.
  

The customer pays the service provider
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/682d845-Flowcharts_1.png",
        "Flowcharts (1).png",
        2331,
        375,
        "#000000"
      ]
    }
  ]
}
[/block]
  * Your website displays the amount owed by the customer to the service provider. 
  * Your customer agrees to pay the displayed amount to the service provider. 
  * Your website's backend requests Fincra to send the customer's payment to the service provider. 
  * Fincra facilitates the payment to the service provider.

Learn how to make bill payments through the API
  * [Electricity Providers](/docs/energy-1)
  * [Data ](/docs/data)
  * [Airtime Providers](/docs/airtime-1)
  * [Cable Tv Providers](/docs/cable-tv-bills)

##How to fund your account
-----------------------------
You will need to send the money to the virtual account generated for you when you register. This transfer can be from your banking application or a bank. Fund your account in the following ways:
  * Log in to your account
  * Copy the account number from the overview page on the portal.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f1e17f-Bills_Payment.png",
        "Bills_Payment.png",
        3225,
        1731,
        "#000000"
      ]
    }
  ]
}
[/block]
  * Open your bank application, input the account number and select the bank.
  * Make your payment.
  * You will receive the funds in your account, instantly.


##How to view your transactions
-----------------------------
You can view your transactions through the API and the portal. Viewing your portal by 

**Portal**: To view transactions on your portal, you will need to log in, open the transactions tab and click on the transaction history.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9c8153a-View_Transactions.png",
        "View Transactions.png",
        3128,
        964,
        "#000000"
      ]
    }
  ]
}
[/block]
**API**: Make an API call to [List Transactions Endpoint](/reference/list-transactions-1) on the billing service. If your request is successful, you will receive a response like what you see below:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"current_page\": 1,\n    \"data\": [\n      {\n        \"id\": 33,\n        \"reference\": \"da36658193a604cb\",\n        \"amount\": \"500.00\",\n        \"net_amount\": \"500.00\",\n        \"commission\": \"0.00\",\n        \"charge_back\": \"0.00\",\n        \"merchant_id\": \"62ff4d5212fac9417403a7bb\",\n        \"business_id\": \"62ff4d5212fac9417403a7bb\",\n        \"service\": \"airtime\",\n        \"status\": \"success\",\n        \"customer_info\": null,\n        \"service_type\": \"mtn\",\n        \"description\": null,\n        \"customer_reference\": \"D182J6FWUZEGK9L1663529689\",\n        \"is_reversed\": 0,\n        \"created_at\": \"2022-09-18T19:35:11.000000Z\",\n        \"updated_at\": \"2022-09-18T19:35:12.000000Z\",\n        \"token\": null\n      },\n      {\n        \"id\": 32,\n        \"reference\": \"5fdb0b33d5620498\",\n        \"amount\": \"100.00\",\n        \"net_amount\": \"100.00\",\n        \"commission\": \"0.00\",\n        \"charge_back\": \"0.00\",\n        \"merchant_id\": \"62ff4d5212fac9417403a7bb\",\n        \"business_id\": \"62ff4d5212fac9417403a7bb\",\n        \"service\": \"airtime\",\n        \"status\": \"success\",\n        \"customer_info\": null,\n        \"service_type\": \"glo\",\n        \"description\": null,\n        \"customer_reference\": \"QY7MCBA5PDWFG261663523396\",\n        \"is_reversed\": 0,\n        \"created_at\": \"2022-09-18T17:50:18.000000Z\",\n        \"updated_at\": \"2022-09-18T17:50:21.000000Z\",\n        \"token\": null\n      },\n…..\n",
      "language": "json"
    }
  ]
}
[/block]
## How to view your balance
-----------------------------
You can view your balance through the API and the portal. Viewing your balance by 
**Portal**: To view your balance on your portal, you will need to log in and find your balance on the overview page.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9b3bbe5-Bills_Payment_copy.png",
        "Bills_Payment copy.png",
        3177,
        1340,
        "#000000"
      ]
    }
  ]
}
[/block]
**API**: Make an API call to [Fetch wallet balance endpoint](ref:purchase-energy-1)on the billing service. If your request is successful, you will receive a response like what you see below:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"id\": 9992,\n    \"_id\": \"9992\",\n    \"business\": \"62ff4d5212fac9417403a7bb\",\n    \"businessId\": 2399,\n    \"ledgerBalance\": 16500,\n    \"availableBalance\": 16500,\n    \"lockedBalance\": 0,\n    \"walletNumber\": 100000123990001,\n    \"currency\": \"NGN\",\n    \"status\": \"enabled\",\n    \"createdAt\": \"2022-08-19T08:44:03.000Z\",\n    \"updatedAt\": \"2022-09-18T19:35:00.000Z\"\n  },\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
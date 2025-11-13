---
title: Overview
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
With Fincra Utility API, customers can access several resources needed to make airtime, data, electricity, water, and general utility payments. Fincra makes it easy for customers to manage payments to utility companies.

Fincra provides a platform where customers can check their balance and authorize payments to the utility service provider.

## Paying Utility Bills WorkFlow

***

The customer selects the service provider

![2304](https://files.readme.io/536f8e0-Flowcharts.png "Flowcharts.png")

* A customer can see a list of service providers on your website or mobile app. 
* From the list, the customer selects a service provider. 
* Your website displays a list of required fields that a customer must fill out to access the service provider. 
* The customer fills in the fields.

The customer pays the service provider

![2331](https://files.readme.io/682d845-Flowcharts_1.png "Flowcharts (1).png")

* Your website displays the amount owed by the customer to the service provider. 
* Your customer agrees to pay the displayed amount to the service provider. 
* Your website's backend requests Fincra to send the customer's payment to the service provider. 
* Fincra facilitates the payment to the service provider.

Learn how to make bill payments through the API

* [Electricity Providers](/docs/energy-1)
* [Data ](/docs/data)
* [Airtime Providers](/docs/airtime-1)
* [Cable Tv Providers](/docs/cable-tv-bills)

## How to fund your account

***

You will need to send the money to the virtual account generated for you when you register. This transfer can be from your banking application or a bank. Fund your account in the following ways:

* Log in to your account
* Copy the account number from the overview page on the portal.

![3225](https://files.readme.io/0f1e17f-Bills_Payment.png "Bills_Payment.png")

* Open your bank application, input the account number and select the bank.
* Make your payment.
* You will receive the funds in your account, instantly.

## How to view your transactions

***

You can view your transactions through the API and the portal. Viewing your portal by 

**Portal**: To view transactions on your portal, you will need to log in, open the transactions tab and click on the transaction history.

![3128](https://files.readme.io/9c8153a-View_Transactions.png "View Transactions.png")

**API**: Make an API call to [List Transactions Endpoint](/reference/list-transactions-1) on the billing service. If your request is successful, you will receive a response like what you see below:

```json
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 33,
        "reference": "da36658193a604cb",
        "amount": "500.00",
        "net_amount": "500.00",
        "commission": "0.00",
        "charge_back": "0.00",
        "merchant_id": "62ff4d5212fac9417403a7bb",
        "business_id": "62ff4d5212fac9417403a7bb",
        "service": "airtime",
        "status": "success",
        "customer_info": null,
        "service_type": "mtn",
        "description": null,
        "customer_reference": "D182J6FWUZEGK9L1663529689",
        "is_reversed": 0,
        "created_at": "2022-09-18T19:35:11.000000Z",
        "updated_at": "2022-09-18T19:35:12.000000Z",
        "token": null
      },
      {
        "id": 32,
        "reference": "5fdb0b33d5620498",
        "amount": "100.00",
        "net_amount": "100.00",
        "commission": "0.00",
        "charge_back": "0.00",
        "merchant_id": "62ff4d5212fac9417403a7bb",
        "business_id": "62ff4d5212fac9417403a7bb",
        "service": "airtime",
        "status": "success",
        "customer_info": null,
        "service_type": "glo",
        "description": null,
        "customer_reference": "QY7MCBA5PDWFG261663523396",
        "is_reversed": 0,
        "created_at": "2022-09-18T17:50:18.000000Z",
        "updated_at": "2022-09-18T17:50:21.000000Z",
        "token": null
      },
…..
```

## How to view your balance

***

You can view your balance through the API and the portal. Viewing your balance by\
**Portal**: To view your balance on your portal, you will need to log in and find your balance on the overview page.  

![3177](https://files.readme.io/9b3bbe5-Bills_Payment_copy.png "Bills_Payment copy.png")

**API**: Make an API call to [Fetch wallet balance endpoint](ref:purchase-energy-1)on the billing service. If your request is successful, you will receive a response like what you see below:

```json
{
  "success": true,
  "data": {
    "id": 9992,
    "_id": "9992",
    "business": "62ff4d5212fac9417403a7bb",
    "businessId": 2399,
    "ledgerBalance": 16500,
    "availableBalance": 16500,
    "lockedBalance": 0,
    "walletNumber": 100000123990001,
    "currency": "NGN",
    "status": "enabled",
    "createdAt": "2022-08-19T08:44:03.000Z",
    "updatedAt": "2022-09-18T19:35:00.000Z"
  },
  "message": "Action was successful"
}
```

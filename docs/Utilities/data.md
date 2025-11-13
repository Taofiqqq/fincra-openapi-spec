---
title: Data
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
Using this service, you will access various telcos to activate data bundles across the following networks: Airtel, Glo, MTN, 9mobile, and many more. 

## How to make a Data bill payment on Fincra

***

## 1 - Get the list of telcos available

Make an API request to the [Fetch Telcos endpoint](/reference/fetch-telcos) to get the list of telcos available. If successful, you will receive a JSON snippet with details of every telco Fincra can access.

API request  
​​`https://billing-staging.bytestacks.io/api/v1/telcos`

API response 

```json
{
  "success": true,
  "data": [
    {
      "name": "Smile",
      "shortname": "smile",
      "plan": {
        "service_type": "smile",
        "shortname": "smile",
        "biller_id": 23,
        "product_id": 37,
        "name": "Smile",
        "plan": [
          "prepaid"
        ]
      }
    },
],
  "message": "Action was successful"
}
```

## 2 - Get the telco name

In the JSON response containing all the telcos available on Fincra, scan for the telco you want to use. Once you find it, take note of its `name` value. 

`name`: This is the unique identifier of each telco. It uniquely identifies the telco providing the airtime bills.

From the response, our preferred telco biller is MTN. The key details for this telco are :

```json
{
      "name": "Mtn",
      "shortname": "mtn",
      "plan": {
        "service_type": "mtn",
        "shortname": "mtn",
        "biller_id": 11,
        "product_id": 40,
        "name": "Mtn",
        "plan": [
          "prepaid"
        ]
      }
    },
```

## 3 - Get the available data plan for the telco

Make an API request to the [Fetch Dataplans endpoint](/reference/fetch-data-plans) to get the list of data plans available to a  telco. If successful, you will receive a JSON snippet with details of every data plan the telco provides.

```curl
curl --request POST \
     --url https://billing-staging.bytestacks.io/api/v1/bundles \
     --header 'accept: application/json' \
     --header 'api-key: <Fincra API key>' \
     --header 'content-type: application/json'
```

If successful, a JSON response containing details of your utility bill payment will be returned

```json
{
  "success": true,
  "data": [
    {
      "name": "10MB for 1 day",
      "allowance": "10MB",
      "price": 25,
      "validity": "1 day",
      "data_code": "DATA-32"
    },
]
}
```

Important notes

- name: This indicates the data plan name
- allowance: This indicates the amount of data available for that plan
- price : This is the price of the data plan
- validity : How long the plan is valid
- data_code : The unique identifier of the data plan

## 4 - Making your data bill payment

After identifying the telco, the next step is to make your bill payment. This can be done by making a request to the [purchase data endpoint](/reference/vend-data) using the following parameters:

- amount : This indicates the amount to be paid.
- phone_no : The phone number to be recharged
- telco : The telecommunication service provider
- data_code : The unique identifier of the data plan that you want to subscribe to

```curl
curl --request POST \
     --url https://billing-staging.bytestacks.io/api/v1/vend_data \
     --header 'accept: application/json' \
     --header 'api-key:  <Your Fincra API Key>' \
     --header 'content-type: application/json' \
     --data '
{
     "amount": "100",
     "phone_no": "07011182345",
     "telco": "mtn",
     "data_code": "ususu"
}
```

If successful, a JSON response containing details of your utility bill payment will be returned

```json
{
  "success": true,
  "data": {
    "message": "Data bundle successful on 07011182345",
    "amount": "100",
    "net_amount": 100,
    "commission": 0,
    "charge_back": 0,
    "status": "success",
    "customer_reference": null,
    "reference": "836e81bae7200ef6",
    "business_id": "62ff4d5212fac9417403a7bb",
    "created_at": "2022-09-22T06:02:05.000000Z"
  },
  "message": "Action was successful"
}
```

Important notes:  
The `customer_reference` here refers to the unique reference of the transaction on your system, while the `reference` refers to the reference generated for this transaction on the Fincra system.
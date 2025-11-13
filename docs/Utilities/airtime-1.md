---
title: Airtime
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
Gain access to Airtel, Glo, MTN, 9Mobile, and various telcos for airtime vending. Fincra's programmable and scalable API allows Nigeria's top mobile operators to distribute virtual airtime top-ups more efficiently. 

## How to make an Airtime bill payment on Fincra

***

## 1 - Get the list of telcos available

Make an API request to the [fetch telcos endpoint](/reference/fetch-telcos) to get the list of telcos available. If successful, you will receive a JSON snippet with details of every telco Fincra can access. 

API request\
`​​https://billing-staging.bytestacks.io/api/v1/telcos`

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

## 2- Get the telco name

In the JSON response containing all the telcos available on Fincra, scan for the telco you want to use. Once you find it, take note of its `name` value. 

`name`: This is the unique identifier of each telco. It uniquely identifies the telco providing the airtime bills.

From the response, our preferred telco biller is Smile. The key details for this telco are :

```json
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
```

## 3 - Make your Airtime bill payment

After identifying the telco, the next step is to make your bill payment. This can be done by making a request to the [purchase airtime endpoint](/reference/vend-airtime) using the following parameters:

* Amount: This indicates the amount to be paid.
* Phone No: The phone number to be recharged
* Telco: The airtime service provider
* Reference: The unique reference of the transaction on your system

```curl
curl --request POST \
     --url https://billing-staging.bytestacks.io/api/v1/vend_airtime \
     --header 'accept: application/json' \
     --header 'api-key:  <Your Fincra API>' \
     --header 'content-type: application/json' \
     --data '
{
     "amount": "100",
     "phone_no": "07011182345",
     "telco": "mtn",
     "reference": "ususu"
}
```

If successful, a JSON response containing details of your utility bill payment will be returned

```json
{
  "success": true,
  "data": {
    "message": "Airtime Topup successful on 07011182345",
    "amount": "100",
    "net_amount": 100,
    "commission": 0,
    "charge_back": 0,
    "status": "success",
    "customer_reference": "ususu",
    "reference": "360418d2a4cb0290",
    "business_id": "62ff4d5212fac9417403a7bb",
    "created_at": "2022-09-21T21:05:43.000000Z"
  },
  "message": "Action was successful"
}
```

Important notes:\
The `customer_reference` refers to the unique reference of the transaction on your system. The `reference` refers to the reference generated for this transaction on the Fincra system.

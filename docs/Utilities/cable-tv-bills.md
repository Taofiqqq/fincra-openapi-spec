---
title: Cable Tv
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
We provide easy-to-integrate  APIs and a web portal to recharge Cable Tv accounts - DSTV, GOTV & Startimes. - on the go!

## How to make a Cable TV bill payment on Fincra.

***

## 1 - Get the list of cable TV providers available

Make an API request to the [list cable Tv providers endpoint](/cable-tv-providers) to get the available list of cable Tv providers. If successful, you will receive a JSON snippet with details of every cable TV Fincra can access. 

API request 

```curl
curl --request GET \
     --url https://billing-staging.bytestacks.io/api/v1/cable/providers \
     --header 'accept: application/json' \
     --header 'api-key: <API KEY>'
```

API response 

```json
{
  "success": true,
  "data": [
    {
      "name": "GOTv (MultiChoice) Subscription Payment",
      "provider": "gotv"
    },
    {
      "name": "Startimes",
      "provider": "startimes"
    },
    {
      "name": "DSTv (MultiChoice) Subscription Payment",
      "provider": "dstv"
    }
  ],
  "message": "Action was successful"
}
```

## 2 - Get the provider’s name

In the JSON response containing all the providers available on Fincra, scan for the provider you want to use. Once you find it, take note of its `provider` value. 

`provider`: This is the unique identifier of each provider. It uniquely identifies the cable Tv providing the cable TV bills.

From the response, our preferred telco biller is StarTimes. The key details for this provider are :

```json
{
      "name": "Startimes",
      "provider": "startimes"
},
```

## 3 - Get the available plan for the providers

Make an API request to the [list providers plan endpoint](/reference/cable-tv-providers-plan)  to get the list of plans available to a cable Tv provider. If successful, you will receive a JSON snippet with details of every data plan the telco provides.

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
      "availablePricingOptions": [
        {
          "monthsPaidFor": 1,
          "price": 90,
          "invoicePeriod": 1
        }
      ],
      "code": "novaday",
      "name": "Nova (Antenna) - Daily",
      "description": ""
    },
…….
      ],
  "message": "Action was successful"
}
```

Important notes

* code: The unique identifier of the plan
* monthsPaidFor: This indicates the number of months you want the subscription to last
* name: The name of the plan

## 4 - Make your bill payment

After identifying the cable TV provider, the next step is to make your bill payment. This can be done by making a request to the [subscribe endpoint](reference/cable-tv-subscription) using the following parameters:

* smartcard\_number : This indicates the amount to be paid.
* amount: The phone number to be recharged
* product\_code: The telecommunication service provider
* month\_paid\_for: The validity period
* provider:  The cable network provider obtained earlier
* reference: The unique identifier of the transaction on your system

```curl
curl --request POST \
     --url https://billing-staging.bytestacks.io/api/v1/cable/subscribe \
     --header 'accept: application/json' \
     --header 'api-key: <Your API key should be here>' \
     --header 'content-type: application/json' \
     --data '
{
     "smartcard_number": "02110144711",
     "amount": 90,
     "product_code": "novaday",
     "month_paid_for": 1,
     "provider": "startimes",
     "reference": "KB-9090"
}'
```

If successful, a JSON response containing details of your utility bill payment will be returned

```json
{
  "success": true,
  "data": {
    "message": "Cable TV Subcription successful",
    "amount": 90,
    "net_amount": 90,
    "commission": 0,
    "charge_back": 0,
    "status": "success",
    "customer_reference": "KB-9090",
    "reference": "cbd4bbb654f3063f",
    "business_id": "62ff4d5212fac9417403a7bb",
    "created_at": "2022-09-22T07:53:24.000000Z"
  },
  "message": "Action was successful"
}
```

Important notes:\
The `customer_reference` here refers to the unique reference of the transaction on your system, while the `reference` refers to the reference generated for this transaction on Fincra system.

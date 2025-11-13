---
title: Cable Tv
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
We provide easy-to-integrate  APIs and a web portal to recharge Cable Tv accounts - DSTV, GOTV & Startimes. - on the go!

##How to make a Cable TV bill payment on Fincra.
-----------------------------
##1 - Get the list of cable TV providers available
Make an API request to the [list cable Tv providers endpoint](/cable-tv-providers) to get the available list of cable Tv providers. If successful, you will receive a JSON snippet with details of every cable TV Fincra can access. 

API request 
[block:code]
{
  "codes": [
    {
      "code": "curl --request GET \\\n     --url https://billing-staging.bytestacks.io/api/v1/cable/providers \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <API KEY>'",
      "language": "curl"
    }
  ]
}
[/block]
API response 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"name\": \"GOTv (MultiChoice) Subscription Payment\",\n      \"provider\": \"gotv\"\n    },\n    {\n      \"name\": \"Startimes\",\n      \"provider\": \"startimes\"\n    },\n    {\n      \"name\": \"DSTv (MultiChoice) Subscription Payment\",\n      \"provider\": \"dstv\"\n    }\n  ],\n  \"message\": \"Action was successful\"\n}\n",
      "language": "json"
    }
  ]
}
[/block]
##2 - Get the provider’s name
In the JSON response containing all the providers available on Fincra, scan for the provider you want to use. Once you find it, take note of its `provider` value. 

`provider`: This is the unique identifier of each provider. It uniquely identifies the cable Tv providing the cable TV bills.

From the response, our preferred telco biller is StarTimes. The key details for this provider are :
[block:code]
{
  "codes": [
    {
      "code": "{\n      \"name\": \"Startimes\",\n      \"provider\": \"startimes\"\n},",
      "language": "json"
    }
  ]
}
[/block]
## 3 - Get the available plan for the providers
Make an API request to the [list providers plan endpoint](/reference/cable-tv-providers-plan)  to get the list of plans available to a cable Tv provider. If successful, you will receive a JSON snippet with details of every data plan the telco provides.
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/bundles \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Fincra API key>' \\\n     --header 'content-type: application/json'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, a JSON response containing details of your utility bill payment will be returned
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"availablePricingOptions\": [\n        {\n          \"monthsPaidFor\": 1,\n          \"price\": 90,\n          \"invoicePeriod\": 1\n        }\n      ],\n      \"code\": \"novaday\",\n      \"name\": \"Nova (Antenna) - Daily\",\n      \"description\": \"\"\n    },\n…….\n      ],\n  \"message\": \"Action was successful\"\n}\n",
      "language": "json"
    }
  ]
}
[/block]
Important notes
  * code: The unique identifier of the plan
  * monthsPaidFor: This indicates the number of months you want the subscription to last
  * name: The name of the plan

##4 - Make your bill payment
After identifying the cable TV provider, the next step is to make your bill payment. This can be done by making a request to the [subscribe endpoint](reference/cable-tv-subscription) using the following parameters:

  * smartcard_number : This indicates the amount to be paid.
  * amount: The phone number to be recharged
  * product_code: The telecommunication service provider
  * month_paid_for: The validity period
  * provider:  The cable network provider obtained earlier
  * reference: The unique identifier of the transaction on your system
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/cable/subscribe \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API key should be here>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"smartcard_number\": \"02110144711\",\n     \"amount\": 90,\n     \"product_code\": \"novaday\",\n     \"month_paid_for\": 1,\n     \"provider\": \"startimes\",\n     \"reference\": \"KB-9090\"\n}'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, a JSON response containing details of your utility bill payment will be returned
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"message\": \"Cable TV Subcription successful\",\n    \"amount\": 90,\n    \"net_amount\": 90,\n    \"commission\": 0,\n    \"charge_back\": 0,\n    \"status\": \"success\",\n    \"customer_reference\": \"KB-9090\",\n    \"reference\": \"cbd4bbb654f3063f\",\n    \"business_id\": \"62ff4d5212fac9417403a7bb\",\n    \"created_at\": \"2022-09-22T07:53:24.000000Z\"\n  },\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes: 
The `customer_reference` here refers to the unique reference of the transaction on your system, while the `reference` refers to the reference generated for this transaction on Fincra system.
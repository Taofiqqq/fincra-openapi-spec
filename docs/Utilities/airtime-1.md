---
title: Airtime
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
Gain access to Airtel, Glo, MTN, 9Mobile, and various telcos for airtime vending. Fincra's programmable and scalable API allows Nigeria's top mobile operators to distribute virtual airtime top-ups more efficiently. 


##How to make an Airtime bill payment on Fincra
-----------------------------
##1 - Get the list of telcos available
Make an API request to the [fetch telcos endpoint](/reference/fetch-telcos) to get the list of telcos available. If successful, you will receive a JSON snippet with details of every telco Fincra can access. 

API request 
`​​https://billing-staging.bytestacks.io/api/v1/telcos`

API response 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"name\": \"Smile\",\n      \"shortname\": \"smile\",\n      \"plan\": {\n        \"service_type\": \"smile\",\n        \"shortname\": \"smile\",\n        \"biller_id\": 23,\n        \"product_id\": 37,\n        \"name\": \"Smile\",\n        \"plan\": [\n          \"prepaid\"\n        ]\n      }\n    },\n],\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
##2- Get the telco name
In the JSON response containing all the telcos available on Fincra, scan for the telco you want to use. Once you find it, take note of its `name` value. 

`name`: This is the unique identifier of each telco. It uniquely identifies the telco providing the airtime bills.

From the response, our preferred telco biller is Smile. The key details for this telco are :
[block:code]
{
  "codes": [
    {
      "code": "   {\n      \"name\": \"Smile\",\n      \"shortname\": \"smile\",\n      \"plan\": {\n        \"service_type\": \"smile\",\n        \"shortname\": \"smile\",\n        \"biller_id\": 23,\n        \"product_id\": 37,\n        \"name\": \"Smile\",\n        \"plan\": [\n          \"prepaid\"\n        ]\n      }\n    },\n",
      "language": "json"
    }
  ]
}
[/block]
##3 - Make your Airtime bill payment
After identifying the telco, the next step is to make your bill payment. This can be done by making a request to the [purchase airtime endpoint](/reference/vend-airtime) using the following parameters:

  * Amount: This indicates the amount to be paid.
  * Phone No: The phone number to be recharged
  * Telco: The airtime service provider
  * Reference: The unique reference of the transaction on your system

[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/vend_airtime \\\n     --header 'accept: application/json' \\\n     --header 'api-key:  <Your Fincra API>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"amount\": \"100\",\n     \"phone_no\": \"07011182345\",\n     \"telco\": \"mtn\",\n     \"reference\": \"ususu\"\n}",
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
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"message\": \"Airtime Topup successful on 07011182345\",\n    \"amount\": \"100\",\n    \"net_amount\": 100,\n    \"commission\": 0,\n    \"charge_back\": 0,\n    \"status\": \"success\",\n    \"customer_reference\": \"ususu\",\n    \"reference\": \"360418d2a4cb0290\",\n    \"business_id\": \"62ff4d5212fac9417403a7bb\",\n    \"created_at\": \"2022-09-21T21:05:43.000000Z\"\n  },\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes: 
The `customer_reference` refers to the unique reference of the transaction on your system. The `reference` refers to the reference generated for this transaction on the Fincra system.
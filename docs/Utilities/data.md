---
title: Data
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
Using this service, you will access various telcos to activate data bundles across the following networks: Airtel, Glo, MTN, 9mobile, and many more. 

##How to make a Data bill payment on Fincra
-----------------------------
##1 - Get the list of telcos available
Make an API request to the [Fetch Telcos endpoint](/reference/fetch-telcos) to get the list of telcos available. If successful, you will receive a JSON snippet with details of every telco Fincra can access.

API request 
​​`https://billing-staging.bytestacks.io/api/v1/telcos`

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
##2 - Get the telco name
In the JSON response containing all the telcos available on Fincra, scan for the telco you want to use. Once you find it, take note of its `name` value. 

`name`: This is the unique identifier of each telco. It uniquely identifies the telco providing the airtime bills.

From the response, our preferred telco biller is MTN. The key details for this telco are :
[block:code]
{
  "codes": [
    {
      "code": "    {\n      \"name\": \"Mtn\",\n      \"shortname\": \"mtn\",\n      \"plan\": {\n        \"service_type\": \"mtn\",\n        \"shortname\": \"mtn\",\n        \"biller_id\": 11,\n        \"product_id\": 40,\n        \"name\": \"Mtn\",\n        \"plan\": [\n          \"prepaid\"\n        ]\n      }\n    },",
      "language": "json"
    }
  ]
}
[/block]
##3 - Get the available data plan for the telco
Make an API request to the [Fetch Dataplans endpoint](/reference/fetch-data-plans) to get the list of data plans available to a  telco. If successful, you will receive a JSON snippet with details of every data plan the telco provides.
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
      "code": "{\n  \"success\": true,\n  \"data\": [\n    {\n      \"name\": \"10MB for 1 day\",\n      \"allowance\": \"10MB\",\n      \"price\": 25,\n      \"validity\": \"1 day\",\n      \"data_code\": \"DATA-32\"\n    },\n]\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes
  * name: This indicates the data plan name
  * allowance: This indicates the amount of data available for that plan
  * price : This is the price of the data plan
  * validity : How long the plan is valid
  * data_code : The unique identifier of the data plan

##4 - Making your data bill payment
After identifying the telco, the next step is to make your bill payment. This can be done by making a request to the [purchase data endpoint](/reference/vend-data) using the following parameters:
  * amount : This indicates the amount to be paid.
  * phone_no : The phone number to be recharged
  * telco : The telecommunication service provider
  * data_code : The unique identifier of the data plan that you want to subscribe to
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/vend_airtime \\\n     --header 'accept: application/json' \\\n     --header 'api-key:  <Your Fincra API Key>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"amount\": \"100\",\n     \"phone_no\": \"07011182345\",\n     \"telco\": \"mtn\",\n     \"data_code\": \"ususu\"\n}",
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
      "code": "\n{\n  \"success\": true,\n  \"data\": {\n    \"message\": \"Data bundle successful on 07011182345\",\n    \"amount\": \"100\",\n    \"net_amount\": 100,\n    \"commission\": 0,\n    \"charge_back\": 0,\n    \"status\": \"success\",\n    \"customer_reference\": null,\n    \"reference\": \"836e81bae7200ef6\",\n    \"business_id\": \"62ff4d5212fac9417403a7bb\",\n    \"created_at\": \"2022-09-22T06:02:05.000000Z\"\n  },\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes: 
The `customer_reference` here refers to the unique reference of the transaction on your system, while the `reference` refers to the reference generated for this transaction on the Fincra system.
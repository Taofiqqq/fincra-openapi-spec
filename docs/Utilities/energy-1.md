---
title: Energy
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
The Fincra Energy payment API allows you to Pay electricity bills for both Prepaid and Postpaid meters to electricity distribution companies (DISCOs)

##How to make Energy bills payment on Fincra.
-----------------------------
##1 - Get the list of energy billers available
Make an API request to the [list energy billers endpoint ](/refs/list-energy-billers)to get the list of energy billers available. If successful, you will receive a JSON snippet with details of every energy biller Fincra can access. 

API request 
[block:code]
{
  "codes": [
    {
      "code": "curl --request GET \\\n     --url https://billing-staging.bytestacks.io/api/v1/electricity/billers \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <API KEY>'",
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
      "code": "{\n  \"success\": true,\n   \"data\": [\n    {\n      \"name\": \"Jos Postpaid\",\n      \"provider\": \"jos electric postpaid\",\n      \"service_type\": \"jos_electric_postpaid\"\n    },\n    {\n      \"name\": \"Jos Prepaid\",\n      \"provider\": \"jos electric prepaid\",\n      \"service_type\": \"jos_electric_prepaid\"\n    },\n    {\n      \"name\": \"ikeja prepaid\",\n      \"provider\": \"ikeja electric prepaid\",\n      \"service_type\": \"ikeja_electric_prepaid\"\n    },\n    ………\n  ],\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
##2 - Get the providers name
In the JSON response containing all the energy providers available on Fincra, scan for the provider you want to use. Once you find it, take note of its `provider` value. 

`provider`: This is the unique identifier of each provider. It uniquely identifies the energy biller or discos providing the energy bills.

From the response, our preferred provider is Ikeja prepaid. The key details for this provider are: 
[block:code]
{
  "codes": [
    {
      "code": " {\n      \"name\": \"ikeja prepaid\",\n      \"provider\": \"ikeja electric prepaid\"\n    },",
      "language": "json"
    }
  ]
}
[/block]
##3 - Verify the meter number
Make an API request to the [verify meter endpoint](/refs/verify-meter-number) to verify the meter number. If successful, you will receive a JSON snippet with details of verification.
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/electricity/verify \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Fincra API key>' \\\n     --header 'content-type: application/json'\n     '{\n     \"provider\": \"ikeja electric prepaid\",\n     \"meter_number\": \"23100009119\"\n     }'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, a JSON response containing details of the meter will be returned
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"name\": \"TESTMETER1\",\n    \"address\": \"ABULE - EGBA BU ABULE\",\n    \"outstandingBalance\": \"\",\n    \"dueDate\": null,\n    \"district\": \"ABULE - EGBA BU ABULE\",\n    \"accountNumber\": \"23100009119\",\n    \"minimumAmount\": null,\n    \"rawOutput\": null,\n    \"errorMessage\": null\n  },\n  \"message\": \"Action was successful\"\n}\n",
      "language": "json"
    }
  ]
}
[/block]
##4 - Make your energy bill payment
After identifying the provider, the next step is to make your bill payment. This can be done by making a request to the [purchase energy endpoint](/refs/purcase-energy) using the following parameters:

  * phone_no : This indicates the amount to be paid.
  * amount: The indicates the amount to be charged
  * provider: The energy bill service provider
  * meter: The meter number
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://billing-staging.bytestacks.io/api/v1/electricity/subscribe \\\n     --header 'accept: application/json' \\\n     --header 'content-type: application/json' \\\n     --header 'api-key: <Your API key>' \\\n     --data '\n{\n     \"phone_no\": \"08012345678\",\n     \"amount\": 500,\n     \"provider\": \"ikeja electric prepaid\",\n     \"meter_number\": \"23100009119\"\n}\n",
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
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"message\": \"Payment Successful\",\n    \"amount\": 500,\n    \"net_amount\": 500,\n    \"commission\": 0,\n    \"charge_back\": 0,\n    \"status\": \"success\",\n    \"customer_reference\": null,\n    \"reference\": \"0554caa91c2203da\",\n    \"business_id\": \"62ff4d5212fac9417403a7bb\",\n    \"created_at\": \"2022-09-22T09:28:28.000000Z\",\n    \"token\": {\n      \"id\": 4,\n      \"transaction_id\": \"45\",\n      \"token\": \"75636193179916375827\",\n      \"amount\": \"84.75\",\n      \"power\": \"84.8 kWh\",\n      \"created_at\": \"2022-09-22T09:28:28.000000Z\",\n      \"updated_at\": \"2022-09-22T09:28:28.000000Z\"\n    }\n  },\n  \"message\": \"Action was successful\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes: 
The `customer_reference` refers to the unique reference of the transaction on your system, while the reference refers to the `reference` generated for this transaction on Fincra system.
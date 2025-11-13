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

## How to make Energy bills payment on Fincra.

***

## 1 - Get the list of energy billers available

Make an API request to the [list energy billers endpoint ](/refs/list-energy-billers)to get the list of energy billers available. If successful, you will receive a JSON snippet with details of every energy biller Fincra can access. 

API request 

```curl
curl --request GET \
     --url https://billing-staging.bytestacks.io/api/v1/electricity/billers \
     --header 'accept: application/json' \
     --header 'api-key: <API KEY>'
```

API response 

```json
{
  "success": true,
   "data": [
    {
      "name": "Jos Postpaid",
      "provider": "jos electric postpaid",
      "service_type": "jos_electric_postpaid"
    },
    {
      "name": "Jos Prepaid",
      "provider": "jos electric prepaid",
      "service_type": "jos_electric_prepaid"
    },
    {
      "name": "ikeja prepaid",
      "provider": "ikeja electric prepaid",
      "service_type": "ikeja_electric_prepaid"
    },
    ………
  ],
  "message": "Action was successful"
}
```

## 2 - Get the providers name

In the JSON response containing all the energy providers available on Fincra, scan for the provider you want to use. Once you find it, take note of its `provider` value. 

`provider`: This is the unique identifier of each provider. It uniquely identifies the energy biller or discos providing the energy bills.

From the response, our preferred provider is Ikeja prepaid. The key details for this provider are: 

```json
{
      "name": "ikeja prepaid",
      "provider": "ikeja electric prepaid"
    },
```

## 3 - Verify the meter number

Make an API request to the [verify meter endpoint](/refs/verify-meter-number) to verify the meter number. If successful, you will receive a JSON snippet with details of verification.

```curl
curl --request POST \
     --url http:https://billing-staging.bytestacks.io/api/v1/electricity/verify \
     --header 'accept: application/json' \
     --header 'api-key: <Fincra API key>' \
     --header 'content-type: application/json'
     '{
     "provider": "ikeja electric prepaid",
     "meter_number": "23100009119"
     }'
```

If successful, a JSON response containing details of the meter will be returned

```json
{
  "success": true,
  "data": {
    "name": "TESTMETER1",
    "address": "ABULE - EGBA BU ABULE",
    "outstandingBalance": "",
    "dueDate": null,
    "district": "ABULE - EGBA BU ABULE",
    "accountNumber": "23100009119",
    "minimumAmount": null,
    "rawOutput": null,
    "errorMessage": null
  },
  "message": "Action was successful"
}
```

## 4 - Make your energy bill payment

After identifying the provider, the next step is to make your bill payment. This can be done by making a request to the [purchase energy endpoint](/refs/purcase-energy) using the following parameters:

* phone\_no : This indicates the phone number of the user.
* amount: The indicates the amount to be charged
* provider: The energy bill service provider
* meter: The meter number

```curl
curl --request POST \
     --url https://billing-staging.bytestacks.io/api/v1/electricity/subscribe \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --header 'api-key: <Your API key>' \
     --data '
{
     "phone_no": "08012345678",
     "amount": 500,
     "provider": "ikeja electric prepaid",
     "meter_number": "23100009119"
}
```

If successful, a JSON response containing details of your utility bill payment will be returned

```json
{
  "success": true,
  "data": {
    "message": "Payment Successful",
    "amount": 500,
    "net_amount": 500,
    "commission": 0,
    "charge_back": 0,
    "status": "success",
    "customer_reference": null,
    "reference": "0554caa91c2203da",
    "business_id": "62ff4d5212fac9417403a7bb",
    "created_at": "2022-09-22T09:28:28.000000Z",
    "token": {
      "id": 4,
      "transaction_id": "45",
      "token": "75636193179916375827",
      "amount": "84.75",
      "power": "84.8 kWh",
      "created_at": "2022-09-22T09:28:28.000000Z",
      "updated_at": "2022-09-22T09:28:28.000000Z"
    }
  },
  "message": "Action was successful"
}
```

Important notes:\
The `customer_reference` refers to the unique reference of the transaction on your system, while the reference refers to the `reference` generated for this transaction on Fincra system.

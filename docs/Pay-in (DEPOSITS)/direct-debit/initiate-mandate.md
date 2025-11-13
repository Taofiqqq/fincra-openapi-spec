---
title: Create Mandate
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Direct Debit endpoint lets you create a standing mandate on a customers account method which allows you perform a direct debit on the account within the approved mandate period.

## 1 - Get customer details

To initiate a mandate on an account, you'll need to pass information such as customer information, startDate, endDate, etc.

Please find below the request parameters for the endpoint.

| Field                  | Mandatory | type       | Description                                                                                                                                                                         |
| ---------------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount                 | Yes       | string     | The total of the amount that would be deducted during the course of the mandate. I.e if you intend to deduct ₦10,000 every month for 3 months, the mandate amount would be ₦30,000. |
| description            | Yes       | string     | The reason why the mandate is being created.                                                                                                                                        |
| startDate              | Yes       | string     | This must be a future date and can’t be the same date as the date the request was made.                                                                                             |
| endDate                | Yes       | string     | After this date, a direct debit can't be made again using the mandate reference.                                                                                                    |
| businessAddress        | Yes       | string     | Your business address.                                                                                                                                                              |
| **customer**           | **Yes**   | **object** | **The customer whose account would be debited.**                                                                                                                                    |
| customer.accountNumber | Yes       | string     | The customer's account number from which the amounts would be debited.                                                                                                              |
| customer.accountName   | Yes       | string     | The customer's account name.                                                                                                                                                        |
| customer.bankCode      | Yes       | string     | The customer's bank code. To get the bank code please see the list banks [endpoint](https://docs.fincra.com/reference/get-banks) codes for more details.                            |
| customer.address       | Yes       | string     | The customer's address.                                                                                                                                                             |
| customer.email         | Yes       | string     | The customer's email address.                                                                                                                                                       |
| customer.phone         | Yes       | string     | The customer's email phone number.                                                                                                                                                  |
| currency               | Yes       | string     | Currently, the only accepted currency is NGN.                                                                                                                                       |

## 2 - Create Mandate

After collecting the necessary details to create a mandate. Make a POST request to our [create mandate endpoint](https://docs.fincra.com/reference/create-mandate).

Endpoint:

```json POST
{{host}}/mandate-mgt/mandates/
```
```coffeescript cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initialize a mandate:

```json Payload
{
    "amount": 72500.00,
    "description": "config spirit rest l6ets test",
    "startDate": "2024-04-26",
    "endDate": "2024-10-31",
    "businessAddress": "YOung blood",
    "customer": {
        "accountNumber": "0051762787",
        "accountName": "Stan Lee",
        "bankCode": "998",
        "address": "Local Address, Lagos",
        "email": "xyz@yahoo.com",
        "phone": "08030607376"
    },
    "currency": "NGN"
}
```

If the API call is successful, Fincra returns the following response:

```json Response
{
  "amount": 72500,
  "description": "Subscription",
  "responseDescription": "Welcome to NIBSS e-mandate authentication service, a seamless and convenient authentication experience. Kindly proceed with a token payment of N50:00 into account number \"0008787867\" with GTBank. This payment will trigger the  authentication of your mandate. Thank You",
  "startDate": "2024-04-05T00:00:00.000Z",
  "endDate": "2024-10-31T00:00:00.000Z",
  "status": "initiated",
  "reference": "mr_0788b7b-767da-7878-8886-dc0788cd",
  "createdAt": "2024-04-04T08:04:05.474Z"
}
```

**Note:** For a mandate to be in effect, the account owner would have to authorize the mandate request by sending ₦50 from the account provided when creating a mandate, to the account returned in the `responseDescription` field as seen above. Without this being done, the mandate can note be in effect.

## 3 - Get Mandate Status/Info

You can confirm mandate status by calling the [get mandate info endpoint](https://docs.fincra.com/reference/get-mandate-info). 

Endpoint:

```json GET
{{host}}/mandate-mgt/mandates/reference/{{reference}}
```
```coffeescript cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/reference/{{reference}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
```

Here's the api response:

```json Approved
{
  "amount": 72500,
  "description": "Recurring loan repayment",
  "responseDescription": "",
  "startDate": "2024-04-04T00:00:00.000Z",
  "endDate": "2024-10-31T00:00:00.000Z",
  "status": "approved",
  "reference": "mr_9dcere51-49f0-8347-9051-438783748",
  "createdAt": "2024-04-03T09:56:34.812Z"
}
```
```json Not Found
{
  "message": "Mandate not found",
  "error": "Not Found",
  "statusCode": 404
}
```

## 4 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the mandate. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

Webhook response:

```json Approved
{
  "event": "mandate.approved",
  "data": {
    "amount": 15000,
    "description": "DD program",
    "responseDescription": "",
    "startDate": "2024-05-17T00:00:00.000Z",
    "endDate": "2024-05-18T00:00:00.000Z",
    "status": "approved",
    "reference": "mr_b995e8cf-f8be-49c7-8555-35a421f75fe7",
    "createdAt": "2024-05-16T11:44:33.000Z"
  }
}
```
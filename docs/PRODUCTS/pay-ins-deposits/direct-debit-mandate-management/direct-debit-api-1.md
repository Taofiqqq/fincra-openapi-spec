---
title: Direct Debit API
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
Fincra’s Direct debit is a pull payment method that allows a third party, with the customer’s consent, to transfer funds from the customer’s bank account on agreed dates, typically for bill payments or loan repayments. This arrangement, known as a mandate, enables the third party to initiate debits at any frequency once activated.

Fincra’s direct debit solution, powered by NIBSS, is fully automated, eliminating traditional delays such as bank visits and 36+ hour activation times. With Fincra, mandates are activated within minutes after the customer makes a token payment (₦50) to NIBSS, with no need for a bank visit.

> 📘 Note
> 
> To activate a mandate, the account owner must authorise the request by sending ₦50 to the account specified in the response description when the mandate is created. 
> 
> Direct debit powered by NIBSS is currently available only with the 26 commercial banks in **Nigeria**. You can view the list of these banks [here](https://docs.fincra.com/v3.0/docs/supported-currencies-1#supported-banks-for-direct-debit).

# Create a mandate

## 1 - Retrieve Customer Details

To initiate a mandate on an account, you'll need to provide details such as customer information, start date, end date, and other relevant data.

Below are the request parameters required for the endpoint.

| **Field**              | **Mandatory** | **type** | **Description**                                                                                                                                                          |
| ---------------------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| amount                 | Yes           | string   | The total amount to be deducted over the course of the mandate. For example, if you plan to deduct ₦10,000 each month for 3 months, the mandate amount would be ₦30,000. |
| description            | Yes           | string   | The reason why the mandate is being created.                                                                                                                             |
| startDate              | Yes           | string   | This must be a future date and can’t be the same date as the date the request was made.                                                                                  |
| endDate                | Yes           | string   | After this date, a direct debit can't be made again using the mandate reference.                                                                                         |
| businessAddress        | Yes           | string   | Your business address.                                                                                                                                                   |
| customer               | Yes           | object   | The customer whose account would be debited.                                                                                                                             |
| customer.accountNumber | Yes           | string   | The customer's account number from which the amounts would be debited.                                                                                                   |
| customer.accountName   | Yes           | string   | The customer's account name.                                                                                                                                             |
| customer.bankCode      | Yes           | string   | The customer's bank code. To get the bank code please see the list banks [endpoint](https://docs.fincra.com/reference/get-banks) codes for more details.                 |
| customer.address       | Yes           | string   | The customer's address.                                                                                                                                                  |
| customer.email         | Yes           | string   | The customer's email address.                                                                                                                                            |
| customer.phone         | Yes           | string   | The customer's email phone number.                                                                                                                                       |
| currency               | Yes           | string   | Currently, the only accepted currency is NGN.                                                                                                                            |

## 2 - Initiate Mandate

After gathering the required details to create a mandate, make a POST request to our [create mandate endpoint](https://docs.fincra.com/reference/create-mandate).

### Endpoint:

```curl POST
{{host}}/mandate-mgt/mandates/
```
```curl cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

### Request:

```json Request
{
    "amount": 72500.00,
    "description": "config spirit rest l6ets test",
    "startDate": "2024-04-26",
    "endDate": "2024-10-31",
    "businessAddress": "22 Abia Street",
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

### Response:

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

## 3 - Get Mandate Status

### Endpoint:

You can confirm mandate status by calling the [get mandate info endpoint](https://docs.fincra.com/reference/get-mandate-info).

```json GET
{{baseUrl}}/mandate-mgt/mandates/reference/{{reference}}
```
```curl cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/reference/{{reference}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
```

### Response:

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

You can also listen for webhook events. We will send a notification to your webhook URL that indicates the status of the mandate. Read our guide on securing and [validating the webhook](https://docs.fincra.com/docs/validating-webhook) notification on your end. 

You can also see all direct debit webhook events [here](https://docs.fincra.com/v3.0/reference/mandate-webhook).

### Webhook Response:

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

# Initiate Debit

This API lets you initiate a debit on an existing mandate.

## 1 - Pay with mandate

Make sure the details you provide match those used to create the mandate being debited. To continue, send a POST request to our [Initiate Debit Mandate](https://docs.fincra.com/reference/initiate-debit-on-mandate) endpoint.

### Endpoint:

```Text POST
{{baseUrl}}/mandate-mgt/mandates/payment
```
```curl cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/payment' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

### Request:

```json Request
{
    "amount": 100,
    "description": "Direct debit for loan",
    "mandateReference": "mr_9dc12651-49df0-4e4f-9051-5627427d1988",
    "reference": "UUreplicda25",
    "currency": "NGN",
    "bankCode": "999998",
    "accountNumber": "0051762787",
    "initiatorAccountName": "biao name",
    "beneficiaryNarration": "bia mnonso narration"
}
```

### Response:

```json Response
{
    "amount": 100,
    "description": "Direct debit for loan",
    "mandateReference": "mr_9dc12651-49df0-4e4f-9051-5627427d1988",
    "reference": "fcr-p-a9853908bb",
    "currency": "NGN",
    "bankCode": "999998",
    "accountNumber": "0051762787",
    "paymentMethods": [
        "direct_debit"
    ],
    "defaultPaymentMethod": "direct_debit",
    "convertedAmount": 100,
    "convertedCurrency": "NGN",
    "settlementDestination": "bank_account",
    "settlementTime": "next_day",
    "scheduledAt": null,
    "feeBearer": "customer",
    "merchantReference": "MKMDTDEBITTST13",
    "businessId": "6157039850139ad6695d8633",
    "mandateCode": null,
    "payer": {
        "accountNumber": "0051762787",
        "bankCode": "999998"
    },
    "paymentLinkId": null,
    "redirectUrl": null,
    "customUrl": null,
    "successMessage": null,
    "metadata": null,
    "varianceType": null,
    "customer": {
        "phoneNumber": null
    },
    "id": 1278613,
    "amountReceived": 0,
    "isDisabled": false,
    "status": "initiated",
    "createdAt": "2024-06-24T16:16:06.443Z",
    "updatedAt": "2024-06-24T16:16:06.443Z",
    "amountExpected": 1100,
    "message": null,
    "actionRequired": null
}
```

> 🚧 Important
> 
> The mandate reference is the unique identifier provided when the mandate was initially created. Additionally, a debit cannot be initiated if the mandate's tenure has expired or if the mandate amount has been fully utilized.

## 2 - Receive and validate webhook notification

We will send a notification to your webhook URL that indicates the status of the mandate. Read our guide on securing and [validating the webhook](https://docs.fincra.com/docs/validating-webhook) notification on your end. 

You can also see all direct debit webhook events [here](https://docs.fincra.com/v3.0/reference/mandate-webhook).

### Webhook response

```json Success
{
  "event": "direct_debit.success",
  "data": {
    "amount": 109,
    "description": "Direct debit for loan",
    "mandateReference": "mr_33WJEHJ8-3cf2-4495-8acc-h87hnin9sh",
    "reference": "MKMHJEHHSITT370",
    "currency": "NGN",
    "bankCode": "044",
    "accountNumber": "8923898923",
    "paymentMethods": [
      "direct_debit"
    ],
    "defaultPaymentMethod": "direct_debit",
    "convertedAmount": 109,
    "convertedCurrency": "NGN",
    "settlementDestination": "bank_account",
    "scheduledAt": null,
    "feeBearer": "customer",
    "merchantReference": "MKMDTDEBITTST10",
    "businessId": "8892989jd9j9d38j893",
    "mandateCode": "RC1hbsd878/18376/92908497284",
    "payer": {
      "accountNumber": "8923898923",
      "bankCode": "044"
    },
    "paymentLinkId": null,
    "redirectUrl": null,
    "customUrl": null,
    "successMessage": null,
    "metadata": null,
    "varianceType": null,
    "customer": {
      "phoneNumber": null
    },
    "id": 289389,
    "amountReceived": 0,
    "isDisabled": false,
    "status": "success",
    "createdAt": "2024-05-16T11:13:54.960Z",
    "updatedAt": "2024-05-16T11:13:54.960Z",
    "actionRequired": null
  }
}
```
```json Failed
{
  "event": "direct_debit.failed",
  "data": {
    "amount": 106,
    "description": "Direct debit for loan",
    "mandateReference": "mr_13u8w794-7595-4ac7-97874-c79bweui3ad6",
    "reference": "MKMDTDEBITUHS98",
    "currency": "NGN",
    "bankCode": "232",
    "accountNumber": "09028389823",
    "paymentMethods": [
      "direct_debit"
    ],
    "defaultPaymentMethod": "direct_debit",
    "convertedAmount": 106,
    "convertedCurrency": "NGN",
    "settlementDestination": "bank_account",
    "scheduledAt": null,
    "feeBearer": "customer",
    "merchantReference": "MKMDTDEBITTST07",
    "businessId": "283999389898293unu98c",
    "mandateCode": "RC188989832/892389/983289GG",
    "payer": {
      "accountNumber": "09028389823",
      "bankCode": "232"
    },
    "paymentLinkId": null,
    "redirectUrl": null,
    "customUrl": null,
    "successMessage": null,
    "metadata": null,
    "varianceType": null,
    "customer": {
      "phoneNumber": null
    },
    "id": 23998923,
    "amountReceived": 0,
    "isDisabled": false,
    "status": "failed",
    "createdAt": "2024-05-16T11:13:20.332Z",
    "updatedAt": "2024-05-16T11:13:20.332Z",
    "actionRequired": null
  }
}
```

## 3 - Confirm Transaction
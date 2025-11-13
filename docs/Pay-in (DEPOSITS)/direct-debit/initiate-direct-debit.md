---
title: Initiate Direct Debit
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
This API lets you initiate a debit on an existing mandate.

Let's get started.

## 1 - Pay with mandate

Ensure the details you provide match those used to create the mandate currently being debited. To proceed, make a POST request to our [Initiate Debit on Mandate](https://docs.fincra.com/reference/initiate-debit-on-mandate) endpoint.

Endpoint:

```json POST
{{host}}/mandate-mgt/mandates/payment
```
```coffeescript cURL
curl --location 'https://api.fincra.com/mandate-mgt/mandates/payment' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initialize a transaction:

```json NGN
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

If the API call is successful, Fincra returns the following response:

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

**Note**: The mandate reference is the reference that was created and returned when the mandate was initially created. Also, a debit can not be initiated using a mandate whose tenure has ended, or one where the mandate amount has been maximized.

## 2 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the collection. Read our guide on securing and [validating the webhook](/docs/validating-webhook) notification on your end.

Webhook response:

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

---
title: Handling over-payments and under-payments
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
This documentation guides you through managing underpayments and overpayments using the Refund Feature in the Merchant Dashboard. The feature helps you identify discrepancies in incoming transactions and initiate reversals with ease.

To better understand this functionality, watch the [demo video](https://www.loom.com/share/af6c36a594ac459986e682bd2f36581d?sid=88c9e758-f10d-4ea9-b62e-67748cc312b9).

## Handling on the API Level

When a transaction is fulfilled, a webhook response is sent containing the expected amount (**expectedAmount**), the received amount (**amountReceived**), and the variance type (**varianceType**). The variance type indicates whether the transaction is an `overpayment` or an `underpayment`.

For transactions completed via bank transfer—identified by the field **"type":"bank_transfer"**—it's crucial to verify if the transaction is marked as an **`underpayment`** or **`overpayment`**.

If the **varianceType** is marked as underpayment or overpayment, you can refund the paying customer based on your business logic. Use either the [refunds API](https://docs.fincra.com/reference/refunds) or process refunds through your dashboard.

**Note:** For such transactions, you'll also receive "**INCORRECT_AMOUNT**" in the `message` field.

Fields to look out for:

| **Field**       | **Description**                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Amount Received | Clearly indicates the actual payment received.                                                                                  |
| Amount Expected | Highlights the expected payment amount for easy comparison.                                                                     |
| Variance Type   | Identifies if the transaction involves an overpayment or an underpayment, providing clarity on the nature of the issue          |
| Action Required | Clearly specifies the recommended action for the merchant, either through the dashboard or the Refund API.                      |
| Message         | Provides a descriptive message to inform the merchant about the nature of the discrepancy, such as "Incorrect amount received." |

**Example**

In the event of an underpayment, the status will still be marked as "`success`." However, there will be a noticeable difference between the "`expectedAmount`" and the "`amountReceived`."

```Text Checkout
{
  "event": "collection.successful",
  "data": {
    "business": "63ea1655a258d844ff26eed3",
    "virtualAccount": "65804647acb578b2ebf9dd60",
    "sessionId": "881100188872888456991",
    "senderAccountName": "Ahmed Bayero",
    "senderAccountNumber": "7821444125",
    "senderBankName": "gtb",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 90,
    "destinationAmount": 90,
    "description": "Test under",
    "amountReceived": 88.6455,
    "fee": 1.2599999999999998,
    "customerName": "Ahmed Bayero",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2023-12-18T13:19:12.177Z",
    "createdAt": "2023-12-18T13:19:12.349Z",
    "updatedAt": "2023-12-18T13:19:12.349Z",
    "reference": "b9ce8ac8-ba7a-4ea8-89f5-1f4f29dc55a2",
    "amountExpected": 100,
    "varianceType": "underpayment",
    "actionRequired": "Process refund via dashboard/Refund API",
    "message": "INCORRECT_AMOUNT"
  }
}
```
```Text Direct Charge (overpayment)
{
  "event": "charge.successful",
  "data": {
    "chargeReference": "fcr-bt-63382e717549d3171",
    "amountToSettle": 109.32945,
    "id": 12152,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 100,
    "amountExpected": 100,
    "amountReceived": 111,
    "varianceType": "overpayment",
    "currency": "NGN",
    "fee": 1.67,
    "vat": 0.12,
    "message": "INCORRECT_AMOUNT",
    "actionRequired": "Process refund via dashboard/Refund API",
    "status": "success",
    "reference": "AA148328110983",
    "description": "",
    "type": "bank_transfer",
    "customer": {
      "name": "Joy Awili",
      "email": "ebubejoyawili@gmail.com",
      "phoneNumber": null
    },
    "metadata": {},
    "settlementDestination": "wallet",
    "virtualAccount": {
      "bankName": "wema",
      "id": "658047ad35064b4deac51498",
      "bankCode": "035",
      "accountName": "FIN-AL-BARNAWI, Khalid",
      "accountNumber": "7945158574",
      "sessionId": "8811001203472555456991",
      "channelName": "wema",
      "payerAccountNumber": "7821444125",
      "payerAccountName": "Ahmed Bayero",
      "payerBankName": "gtb",
      "payerBankCode": "058",
      "expiresAt": "2023-12-18T13:42:54.000Z",
      "business": "63ea1655a258d844ff26eed3"
    }
  }
}
```
```Text Direct Charge (underpayment)
{
  "event": "charge.successful",
  "data": {
    "chargeReference": "fcr-bt-038d76c6f4c28d040",
    "amountToSettle": 98.495,
    "id": 12164,
    "authorization": {
      "mode": null,
      "redirect": null,
      "metadata": null
    },
    "auth_model": null,
    "amount": 120,
    "amountExpected": 120,
    "amountReceived": 100,
    "varianceType": "underpayment",
    "currency": "NGN",
    "fee": 1.5,
    "vat": 0.1,
    "message": "INCORRECT_AMOUNT",
    "actionRequired": "Process refund via dashboard/Refund API",
    "status": "success",
    "reference": "AAC148328110983",
    "description": "",
    "type": "bank_transfer",
    "customer": {
      "name": "Joy Awili",
      "email": "ebubejoyawili@gmail.com",
      "phoneNumber": null
    },
    "metadata": {},
    "settlementDestination": "wallet",
    "virtualAccount": {
      "bankName": "wema",
      "id": "658062a735064b3ff6c514b2",
      "bankCode": "035",
      "accountName": "FIN-AL-BARNAWI, Khalid",
      "accountNumber": "7947438942",
      "sessionId": "8811001203148500456991",
      "channelName": "wema",
      "payerAccountNumber": "7821444125",
      "payerAccountName": "Ahmed Bayero",
      "payerBankName": "gtb",
      "payerBankCode": "058",
      "expiresAt": "2023-12-18T15:37:59.000Z",
      "business": "63ea1655a258d844ff26eed3"
    }
  }
}
```

The response gotten when the transaction status is re-queried:

```Text Checkout
{
    "status": true,
    "message": "Payment details fetched",
    "data": {
        "id": 3001,
        "businessId": "60c1d7e39d9fc6b87dedb04e",
        "paymentLinkId": null,
        "amount": 2500,
        "currency": "NGN",
        "convertedAmount": 2500,
        "amountExpected": 2500,
        "amountReceived": 2031.2,
        "varianceType": "underpayment",
        "message": "INCORRECT_AMOUNT",
        "actionRequired": "Process refund via dashboard/Refund API",
        "convertedCurrency": "NGN",
        "paymentMethods": [
            "bank_transfer"
        ],
        "defaultPaymentMethod": "bank_transfer",
        "redirectUrl": null,
        "customUrl": null,
        "successMessage": null,
        "settlementDestination": "wallet",
        "feeBearer": "customer",
        "reference": "fcr-p-05cf730d00",
        "merchantReference": "Test075",
        "isDisabled": false,
        "metadata": null,
        "status": "success",
        "createdAt": "2023-12-13T09:06:38.666Z",
        "updatedAt": "2023-12-13T09:09:11.000Z",
        "customer": {
            "name": "Test User",
            "email": "test@gmail.com",
            "phoneNumber": null
        }
    }
}
```
```Text Using Direct Charge
{
    "status": true,
    "message": "Charge verified",
    "data": {
        "id": 12098,
        "authorization": {
            "mode": null,
            "redirect": null,
            "metadata": null
        },
        "auth_model": null,
        "amount": 1500,
        "amountExpected": 1500,
        "amountReceived": 2031.2,
        "varianceType": "overpayment",
        "currency": "NGN",
        "fee": 30.57,
        "message": "INCORRECT_AMOUNT",
        "actionRequired": "Process refund via dashboard/Refund API",
        "status": "success",
        "reference": "dream032",
        "description": "",
        "type": "bank_transfer",
        "customer": {
            "name": "Joy Awili",
            "email": "ebubejoyawili@gmail.com",
            "phoneNumber": null
        },
        "metadata": {},
        "settlementDestination": "wallet",
        "virtualAccount": {
            "bankName": "wema",
            "id": "6579711935064bef86c5144f",
            "bankCode": "035",
            "accountName": "FIN-The Masterpiece",
            "accountNumber": "7947689239",
            "sessionId": "239jw2387ssmnhkkkG2",
            "channelName": "wema",
            "payerAccountNumber": "7820444125",
            "payerAccountName": "Smartniggs Tino",
            "payerBankName": "gtb",
            "payerBankCode": "042",
            "expiresAt": "2023-12-13T09:13:46.000Z",
            "business": "60c1d7e39d9fc6b87dedb04e"
        }
    }
}
```

<br />

## How to handle reversals for underpayments or overpayments

The refunds API allows the merchant to initiate refunds, which can be used to reverse overpayments and underpayments.

### Initiate a refund

To initiate a refund, you'll need to pass in the transaction reference for the transaction you would like to process a refund for. With this you can make a POST request to our initiate refund endpoint.

Endpoint:

```Text POST
{{host}}/collections/refund
```
```Text cURL
curl --location 'https://api.fincra.com/collections/refund' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initiate a refund:

```Text Payload
{
    "transReference": "5221daf0-6bb0-4c77-a38a-e7a71ea7aa69"
}
```

Response:

```Text Response
{
    "success": true,
    "message": "Collection refund initiated successfully",
    "data": {
        "reference": "e788b13b-3da4-43b8-9d9a-2f5e0c2dc3b0",
        "collectionMerchantReference": "",
        "collectionReference": "ce01c9ee-1633-43d6-88a1-0eb11824b4e5",
        "amountRefunded": 2,
        "collectionAmountExpected": 850,
        "collectionAmountReceived": 852,
        "collectionAmountSettled": 839.18,
        "collectionVarianceType": overpayment
    }
}
```

<br />

### Get refund status

To get the status of a refund, you can query the get refund endpoint using the refund ID.

Endpoint:

```Text GET
{{host}}/collections/refund/{id}
```
```Text cURL
curl --location 'https://api.fincra.com/collections/refund/{reference}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Response:

```Text Response
{
    "success": true,
    "message": "Refund fetched successfully",
    "data": {
        "id": 21,
        "collectionReference": "96d1fc1c-2570-4a50-8eca-1277c4a90c0d",
        "reference": "cba44033-bcaa-4df6-9e68-6b3cf7f251ca",
        "currency": "NGN",
        "amountRefunded": "5914.000000",
        "refundType": "overpayment",
        "payeeAccountNumber": "7821444125",
        "collectionExpectedAmount": "850.000000",
        "collectionAmountReceived": "6764.000000",
        "collectionAmountSettled": "6662.201800",
        "collectionSettlementReference": null,
        "collectionMerchantReference": "",
        "collectionVarianceType": "overpayment",
        "collectionVirtualAccountId": "655ec84f1f3ce30f00efad7f",
        "metadata": null,
        "refundStatus": "processing",
        "completedAt": "2023-12-07 17:39:00",
        "initiatedAt": "2023-12-05 15:07:18",
        "payee": {
            "email": null,
            "phone": null,
            "accountNumber": "7821444125",
            "bankCode": "042",
            "bankName": "gtb",
            "cardScheme": null
        }
    }
}
```
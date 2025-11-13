---
title: Handling Underpayments and Overpayments
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
By default, **Fincra automatically handles all underpayments and overpayments**. 

For `underpayment`, any amount paid that is less than the expected amount would be **automatically reversed in full to the customer**.

For `overpayment`, the expected amount would be processed, while the excess would be **automatically reversed to the customer**.

### 🔒 Automated Protection

- No underpayment will be credited to your wallet.
- Only the expected amount in an overpayment would be processed and credited to your wallet.

> ❗️ Want to handle them yourself?
> 
> If your business needs to **accept and manage mispayments**, please email **[support@fincra.com](mailto:support@fincra.com)**.
> 
> Once approved, you can use the **Refund Feature** described below to handle discrepancies.

***

# 📘 What This Guide Covers

This guide explains how to:

- Detect payment discrepancies via **webhooks** and **transaction lookups**.
- Identify whether a payment is an **underpayment** or **overpayment**.
- If you have been enabled to accept**mispayments**, process refunds manually through your **Merchant Dashboard** or the **Refunds API**.

To understand the functionality, you can watch the [demo video](https://www.loom.com/share/af6c36a594ac459986e682bd2f36581d?sid=88c9e758-f10d-4ea9-b62e-67748cc312b9).

## Handling on the API Level

Upon fulfilment of a transaction, a webhook response will be sent containing the expected amount (**expectedAmount**), the amount received (**amountReceived**) and the variance type (**varianceType**) which describes if the transaction is an `overpayment` or an `underpayment`.

For transactions fulfilled via bank transfer, identified by the field **"type":"bank_transfer"**, it is very essential to **verify if the transaction was marked as an `underpayment` or `overpayment`**.

If the **varianceType** is marked as underpayment or overpayment, you can go ahead to refund the paying customer depending on your business logic, via the [refunds API](https://docs.fincra.com/reference/refunds). You can also process refunds via your dashboard.

**Note:** You would also receive "**INCORRECT_AMOUNT**" within the `message` field for such transactions.

Fields to look out for:

| Field           | Webhook field  | Description                                                                                                                                                                                                                                     |
| :-------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amount Expected | amountExpected | Highlights the expected payment amount for easy comparison.                                                                                                                                                                                     |
| Amount Received | amountReceived | The Amount Received field clearly indicates the actual payment amount received. Note that in the case of an overpayment, only the expected amount will be settled to you, and any excess amount will be automatically returned to the customer. |
| Variance Type   | varianceType   | Identifies if the transaction involves an overpayment or an underpayment, providing clarity on the nature of the issue                                                                                                                          |
| Action Required | actionRequired | Clearly specifies the recommended action for the merchant, either through the dashboard or the Refund API.                                                                                                                                      |
| Message         | message        | Provides a descriptive message to inform the merchant about the nature of the discrepancy, such as "Incorrect amount received."                                                                                                                 |

**Example**  
In the event of an underpayment, the status will still be marked as "`success`." However, there will be a noticeable difference between the "`expectedAmount`" and the "`amountReceived`."

```json Checkout
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
```json Direct Charge \[overpayment]
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
```json Direct Charge \[underpayment]
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

```json Checkout
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
```json Using Direct Charge
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

# How to handle reversals for underpayments or overpayments

The refunds API allows the merchant to initiate refunds, which can be used to reverse overpayments and underpayments.

## 1 - Initiate a refund

To initiate a refund, you'll need to pass in the transaction reference for the transaction you would like to process a refund for. With this you can make a POST request to our [initiate refund endpoint](https://docs.fincra.com/reference/initiate-refund).

Endpoint:

```json POST
{{host}}/collections/refund
```
```coffeescript cURL
curl --location 'https://api.fincra.com/collections/refund' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Here's a sample payload to initiate a refund:

```json Payload
{
    "transReference": "5221daf0-6bb0-4c77-a38a-e7a71ea7aa69"
}
```

Response:

```json Response
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

**Note**: When a refund has already been initiated on a transaction, you would get a `422` error with message `"Refund already initiated"`

## 2 - Get refund status

To get the status of a refund, you can query the [get refund endpoint](https://docs.fincra.com/reference/get-single-refund) using the refund ID.

Endpoint:

```json GET
{{host}}/collections/refund/{id}
```
```coffeescript cURL
curl --location 'https://api.fincra.com/collections/refund/{reference}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>' \
--header 'Content-Type: application/json' \
```

Response:

```json Response
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
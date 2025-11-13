---
title: Funding a Virtual Account
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
You can fund your virtual account via bank transfers, and the funds will be promptly reflected in your balance. Additionally, you will receive a web notification whenever your virtual account is credited through a bank transfer.

### 1 - Get the virtual account details

If the account details are not already saved on your end, you can retrieve them by calling our get virtual account endpoint using either the [BVN](/reference/fetch-a-virtual-account-by-bvn) on account or the [virtual account ID](/reference/get-one-virtual-account). Below is a sample response for an NGN virtual account:

```json NGN
{
    "success": true,
    "message": "We use this to communicate information to you.",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "3992219528",
        "merchantReference": null,
        "KYCInformation": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "customer@theiremail.com"
        },
        "accountInformation": {
            "accountNumber": "3992219528",
            "accountName": "Customer's full name",
            "bankName": "GLOBUS BANK",
            "bankCode": "103"
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [],
        "bankStatement": [],
        "utilityBill": [],
        "virtualAccountType": "additional",
        "riskRating": null,
        "checklist": null,
        "riskScreening": null,
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "_id": "************************",
        "business": "*******************",
        "currency": "NGN",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "@timestamp",
        "updatedAt": "@timestamp"
    }
}
```

Note, the data needed for credit is contained within the `data.accountInformation` field. See sample below:

```json NGN
{
  "accountInformation": {
    "accountNumber": "3992219528",
    "accountName": "Customer's full name",
    "bankName": "GLOBUS BANK",
    "bankCode": "103"
  }
}
```

### 2 - Receiving webhook notification

Once these details have been shared with the payer, you can expect a deposit notification when payment has been made. Please refer to our guide on [setting up webhook](setup-webhook) notifications for more information. Additionally, transaction records are always available via your dashboard.

It is important to note that virtual accounts do not hold value themselves, as the funds are settled directly into your main wallet.

```json NGN
{
  "event": "collection.successful",
  "data": {
    "business": "64f92ue92df4710",
    "virtualAccount": "65f98hd93db9",
    "sessionId": "ETZ0239092224099d9389ndnQ9M",
    "senderBankName": "Access Bank PLC",
    "senderAccountName": "John Doe",
    "senderAccountNumber": null,
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 50,
    "destinationAmount": 50,
    "description": "FT//1278237888/NXG :TRFFRM John Doe TO John Doe",
    "amountReceived": 49.5,
    "fee": 0.5,
    "customerName": "John Doe",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2024-04-23T10:52:50.845Z",
    "createdAt": "2024-04-23T10:52:50.849Z",
    "updatedAt": "2024-04-23T10:52:50.849Z",
    "reference": "e30-w898c-bihiw-w8989-cbb566"
  }
}
```

### 3 - Fetch payins into a virtual account

To retrieve a list of all inflows into a virtual account, you can make a GET request to our [fetch virtual account payins](/reference/fetch-payins-by-virtual-account) endpoint using the virtual account ID. This allows you to track all transactions and manage your account effectively.

```Text GET
{{base_url}}/collections?virtualAccount={virtual_account_id}
```
```json cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?virtualAccount=<The Virtual Account ID>' \
     --header 'accept: application/json'
```

Response:

```json NGN
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4511388,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "NGN",
                "sourceAmount": 400,
                "payeeName": "John Doe",
                "merchantReference": null,
                "status": "successful",
                "reference": "4def906b-c553-4270-93fe-ee932b4da55b",
                "initiatedAt": "2024-05-16T10:30:55.000Z",
                "createdAt": "2024-05-16T10:30:55.000Z",
                "vat": 0,
                "virtualAccountId": "65f04b2988hjd99s897b9",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            },
            {
                "id": 4205074,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "NGN",
                "sourceAmount": 50,
                "payeeName": "John Doe",
                "merchantReference": null,
                "status": "successful",
                "reference": "e30b7f76-2cc1-4fbf-9a0f-dfd5afcbb566",
                "initiatedAt": "2024-04-23T10:52:51.000Z",
                "createdAt": "2024-04-23T10:52:51.000Z",
                "vat": 0,
                "virtualAccountId": "65f04b2988hjd99s897b9",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            },
            {
                "id": 4035994,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "NGN",
                "sourceAmount": 500,
                "payeeName": "John Doe",
                "merchantReference": null,
                "status": "successful",
                "reference": "82edd531-a33f-43f1-a0ff-44a6a69e24b3",
                "initiatedAt": "2024-04-08T12:26:03.000Z",
                "createdAt": "2024-04-08T12:26:03.000Z",
                "vat": 0,
                "virtualAccountId": "65f04b2988hjd99s897b9",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 3
    }
}
```

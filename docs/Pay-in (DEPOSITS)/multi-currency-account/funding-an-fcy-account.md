---
title: Funding an FCY Account
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
You can fund your Foreigncurrency USD or EUR account via bank transfers, and the funds will be promptly reflected in your balance. Additionally, you will receive a web notification whenever your virtual account is credited through a bank transfer.

> 🚧 Important!!
> 
> Consult the guide [here](mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.

### 1 - Get the virtual account details

If the account details are not already saved on your end, you can retrieve them by calling our get virtual account endpoint using the [virtual account ID](/reference/get-one-virtual-account). Below are sample responses for EUR and USD virtual accounts:

```json EUR
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "GB77CLJU28398298924722",
        "merchantReference": null,
        "KYCInformation": {...},
        "accountInformation": {
            "accountNumber": "GB77CLJU28398298924722",
            "bankName": "Clear Junction Limited",
            "bankCode": "CLJU",
            "countryCode": "GB",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "GB77CLJU28398298924722",
                "accountNumber": "92898942",
                "checkNumber": "19",
                "sortCode": "0089829",
                "bankSwiftCode": "CLJUGB21XXX"
            }
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
        "meansOfId": [
            {
                "name": "Passport",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/International%2BPassport.pdf"
            }
        ],
        "bankStatement": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "utilityBill": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "virtualAccountType": "additional",
        "riskRating": "high",
        "checklist": {...},
        "riskScreening": "no negative check",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "6620061298389es2279c4",
        "business": {
            "name": "Merchant Name",
            "email": "merchant@theiremail.com"
        },
        "currency": "EUR",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}
```

Note, the data needed for credit is contained within the `data.accountInformation` field. See sample below:

```json EUR
{
  "accountInformation": {
    "accountNumber": "GB77CLJU28398298924722",
    "bankName": "Clear Junction Limited",
    "bankCode": "CLJU",
    "countryCode": "GB",
    "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
    "otherInfo": {
      "iban": "GB77CLJU28398298924722",
      "accountNumber": "92898942",
      "checkNumber": "19",
      "sortCode": "0089829",
      "bankSwiftCode": "CLJUGB21XXX"
    }
  },
}
```

> ❗️ Note
> 
> When displaying the virtual account information to the customer for crediting, please ensure that the customer inputs the recipient's first and last name exactly as it appears on the EUR or USD account created on our platform via API. If the names do not match the account holder's name, the transaction will be returned.

### 2 - Receiving webhook notification

Once these details have been shared with the payer, you can expect a deposit notification when payment has been made. Please refer to our guide on [setting up webhook](setup-webhook) notifications for more information. Additionally, transaction records are always available via your dashboard.

It is important to note that virtual accounts do not hold value themselves, as the funds are settled directly into your main wallet.

```json EUR
{
   "event":"collection.successful",
   "data":{
      "business":"64f1c99238hh9j9d210",
      "virtualAccount":"2ehj23ndd28928j89093aee",
      "senderAddress":"Street Address",
      "sourceCurrency":"EUR",
      "destinationCurrency":"EUR",
      "sourceAmount":15,
      "destinationAmount":5,
      "description":"Sent from John",
      "amountReceived":4.98,
      "fee":10.025,
      "customerName":"Customer Name",
      "settlementDestination":"wallet",
      "status":"successful",
      "initiatedAt":"2024-06-21T09:27:25.000z",
      "createdAt":"2024-06-21T09:28:35.000z",
      "updatedAt":"2024-06-21710:35:20.000z",
      "reference":"160525e1-2069-4d45-8984-01967fc0344b",
      "paymentScheme":"sepa"
   }
}
```

### 3 - Fetch payins into a virtual account

To retrieve a list of all inflows into a virtual account, you can make a GET request to our [fetch virtual account payins](/reference/fetch-payins-by-virtual-account) endpoint using the virtual account ID. This allows you to track all transactions and manage your account effectively.

```json GET
{{base_url}}/collections?business={business_id}&virtualAccount={virtual_account_id}
```
```json cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?virtualAccount=<The Virtual Account ID>' \
     --header 'accept: application/json'
```

Response:

```json EUR
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "EUR",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```

### 4 - Fetch all payins for specific currency

To retrieve a list of all inflows by currency, you can make a GET request to our [get collections](/reference/get-all-collections) endpoint. This allows you to track all transactions and manage your account effectively.

```json GET
{{base_url}}/collections?business={business_id}&destinationCurrency=EUR
```
```json cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?business={business_id}&destinationCurrency=<Put Currency Here>' \
     --header 'accept: application/json'
```

Response:

```json EUR
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "EUR",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```
```json USD
{
    "success": true,
    "message": "Collections fetched successfully",
    "data": {
        "results": [
            {
                "id": 4996393,
                "paymentMethod": "virtual_account",
                "sourceCurrency": "USD",
                "sourceAmount": 5,
                "payeeName": "John DOe",
                "merchantReference": null,
                "status": "successful",
                "reference": "2389-2069-4d45-8984-993",
                "initiatedAt": "2024-06-21T09:27:25.000Z",
                "createdAt": "2024-06-21T09:28:35.000Z",
                "vat": 0,
                "virtualAccountId": "6698dnj899892328992hjiu9e",
                "refundInfo": null,
                "isReversed": 0,
                "mongoBusinessId": null,
                "metadata": null
            }
        ],
        "total": 1
    }
}
```
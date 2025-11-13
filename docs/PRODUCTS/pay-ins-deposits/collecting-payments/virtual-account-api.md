---
title: Single-Use Virtual Accounts APIs
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
Virtual accounts are accounts that allow Fincra merchants to receive payments from customers via bank transfer. Fincra offers two types of virtual accounts; temporary Virtual accounts and permanent virtual accounts.

> 🚧 Note
> 
> It is important to note that Virtual Bank Accounts do not store monetary value like regular bank accounts; they only provide a means for your customers to pay you and the funds get settled in your account balance, to check your account balance please see the balance API.

## Types of Virtual Accounts

There are two categories of Virtual Accounts: Temporary virtual accounts and Permanent virtual accounts.

### Temporary Virtual Accounts

A temporary virtual account number expires after handling a specified number of transactions or within a set time frame. These accounts are ideal for receiving one-off payments.

A common use case for temporary accounts is during checkout. When a customer reaches this point, you can generate a temporary virtual account with a fixed amount to complete the transaction.

To learn how to create temporary virtual accounts, please read this [page](https://docs.fincra.com/reference/create-temporary-virtual-account)

### Permanent Virtual Accounts

Permanent virtual accounts are static and can be used to receive payments subsequently.

They are useful when creating an application where each user has a bank account number that can be used for funding their wallets on your platform. 

To learn how to create permanent virtual accounts, please read this [page](https://docs.fincra.com/reference/request-virtual-accounts)

> 📘 **Virtual Account Flow**
> 
> - You create a virtual account for the customer with our API and provide your customer with the details of the account.
> - The customer transfers funds to the virtual account created.
> - A [webhook](https://docs.fincra.com/docs/collection-webhook) is sent notifying you that payment has been received.

## Technical Classification Of Virtual Accounts

### By Funding

Our Virtual Accounts can be classified into two based on how they can be funded:

- Main virtual accounts are corporate virtual accounts belonging to registered Fincra merchants. These are the first corporate virtual accounts created by a merchant. Funds received in the main virtual account can be retrieved using the [wallet top-up API](https://docs.fincra.com/reference/get-wallet-top-ups).
- After creating a main virtual account, merchants can create additional virtual accounts. Payments made to these additional accounts can be retrieved using the [payin API](https://docs.fincra.com/reference/get-all-collections).

**Note:** All main accounts are corporate. However, additional accounts can be either corporate or individual.

### By Entity

Virtual accounts can be further categorized based on their usage by individuals or corporate entities.

| **S/N** | **Account Type** | **Description**                                                             | **API value** |
| ------- | ---------------- | --------------------------------------------------------------------------- | ------------- |
| 1       | Individual       | This virtual account is named and owned by an individual.                   | individual    |
| 2       | Corporate        | This virtual account is owned and can be used by a company or organization. | corporate     |

# NGN Virtual Accounts

In this section, we will outline the steps needed to set up and manage an NGN permanent virtual account.

All that is needed is for the request to be made by calling the [create virtual account endpoint](https://docs.fincra.com/reference/request-ngn-virtual-account)

> 🚧 Note
> 
> - BVN is required when requesting a permanent virtual account.
> - Only requests for Individual and corporate NGN virtual accounts will be instantly approved.
> - Funds received by a virtual account created settles in the balances of the merchant.  
>   <br />

## Supported Banks

Listed below are the banks that are supported in the creation of NGN virtual accounts. This value is what you pass in under the "`channel`" field when making a virtual account request.

| **S/N** | **Bank**    | **Value** | **Enabled** |
| ------- | ----------- | --------- | ----------- |
| 1       | Globus Bank | globus    | yes         |
| 3       | Wema Bank   | wema      | yes         |

# API Guide

## Get customer details

To create a virtual account, you'll need to pass the following information:

| **Field**                | **Mandatory** | **type** | **Description**                                                              |
| ------------------------ | ------------- | -------- | ---------------------------------------------------------------------------- |
| currency                 | Yes           | string   | The virtual account currency.e.g NGN                                         |
| accountType              | Yes           | string   | The virtual account type. This can be "individual" or "corporate"            |
| channel                  | No            | string   | The value should be `globus` for globus bank accounts .                      |
| dateOfBirth              | No            | string   | The date of birth of the customer.                                           |
| KYCInformation.firstName | Yes           | string   | The customer's first name . This is required to create an individual account |
| KYCInformation.lastName  | Yes           | string   | The customer's last name . This is required to create an individual account  |
| KYCInformation.email     | No            | string   | The customer's email.                                                        |
| KYCInformation.bvn       | Yes           | string   | Bank verification number.                                                    |
| merchantReference        | No            | string   | A unique ID/reference of the virtual account on your system.                 |

<br />

## Request a virtual account

Make an API request to the create virtual account endpoint

**Endpoint**:

```Text POST
{{base_url}}/profile/virtual-accounts/requests
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

**Payload**

```json Individual
{
    "currency": "NGN",
    "accountType": "individual",
    "KYCInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "customer@theiremail.com",
        "bvn": "12345678901"
    },
    "channel": "globus"
}
```
```json With Reference
{
    "currency": "NGN",
    "accountType": "individual",
    "KYCInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "customer@theiremail.com",
        "bvn": "12345678901"
    },
    "channel": "globus",
		"merchantReference": "001"
}
```

If successful, you will receive a JSON snippet with the details of the newly created virtual account:

```json Response
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

> 📘 Important Notes:
> 
> **\_id:** This is the unique Identifier for the virtual account that was just created.  
> **business :** This is your business ID.  
> **entityType : **This states that the virtual account belongs to you

## Receive and validate webhook notification

Monitor webhook events closely. We'll send a notification to your designated webhook URL indicating the status of the virtual account creation. For guidance on securing and validating these webhook notifications on your end, please refer to our comprehensive guide.

```json Response
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "************************",
    "business": "******************",
    "isSubAccount": false,
    "currency": "NGN",
    "currencyType": "fiat",
    "status": "approved",
    "email": "customer@theiremail.com",
    "accountType": "individual",
    "accountInformation": {
      "accountNumber": "3992219528",
      "accountName": "Customer's full name",
      "bankName": "GLOBUS BANK",
      "bankCode": "103"
    },
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "@timestamp",
    "updatedAt": "@timestamp"
  }
}
```

## Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the Virtual Bank Account Query API.

**Endpoint**:

```Text GET
{{baseUrl}}/profile/virtual-accounts/<virtual account id>
```
```Text cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

## Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the list virtual accounts endpoint.

Endpoint:

```Text GET
{{baseUrl}}/profile/virtual-accounts/?currency=ngn
```
```curl cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=ngn' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```json Response
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
            {
                "status": "approved",
                "isActive": true,
                "accountNumber": "1234567890",
                "merchantReference": null,
                "KYCInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "customer@theiremail.com",
                    "bvn": "TJ44iG9KQv6LOQNfjnidaniidCis6JbruEIJaHLzpIG7sdhjjsdBNRn7BoWCU3MGYYCWYt7u/sdn10D6DUhinudtcxI+Hiwuuu2oPnEA="
                },
                "accountInformation": {
                    "accountNumber": "1234567890",
                    "accountName": "Customer full name",
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
                "_id": "659wdwf72nhsdjd581480",
                "business": {
                    "name": "Customer full name",
                    "email": "customer@theiremail.com"
                },
                "currency": "NGN",
                "accountType": "individual",
                "entityType": "main_account",
                "currencyType": "fiat",
                "createdAt": "2024-01-05T10:52:34.787Z",
                "updatedAt": "2024-01-05T10:52:34.787Z"
            },
            {
                "status": "approved",
                "isActive": true,
                "accountNumber": "1234567890",
                "merchantReference": null,
                "KYCInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "customer@theiremail.com",
                    "bvn": "TJ44ijnijwui82zpIG7CcRApq7TdxBLAda0E77oOVNBNRn7Bo342hjndwxzace1vwdl3fnxU5tE/CTv10ninsi72I+K2JkPx1eeq4kdgEEF6kQynPRa9K2QoPnEA="
                },
                "accountInformation": {
                    "accountNumber": "1234567890",
                    "accountName": "Customer full name",
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
                "_id": "6564kjnaskj883be479",
                "business": {
                    "name": "Customer full name",
                    "email": "customer@theiremail.com"
                },
                "currency": "NGN",
                "accountType": "individual",
                "entityType": "main_account",
                "currencyType": "fiat",
                "createdAt": "2023-11-27T15:45:02.952Z",
                "updatedAt": "2023-11-27T15:45:02.952Z"
            }
        ],
        "total": 2
    }
}
```

## Funding an NGN Virtual Account

You can fund your virtual account via bank transfers, and the funds will be promptly reflected in your balance; you will also receive a webhook notification whenever your virtual account is credited through a bank transfer.

## Get the virtual account details

If you haven't already saved the account details, you can retrieve them by calling our "get virtual account" endpoint. Use either the BVN associated with the account or the virtual account ID. Here's a sample response for an NGN virtual account:

```json Response
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

> 🚧 Note:
> 
> The data needed for credit is contained within the `data.accountInformation` field.  
> See sample below:

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

## Receiving Webhook

After sharing these details with the payer, you'll receive a deposit notification when payment is made. For more information on receiving these notifications, please consult our guide on [setting up webhooks](https://docs.fincra.com/docs/setup-webhook). You can also access transaction records anytime through your dashboard.

Remember, virtual accounts don't store value themselves—funds are settled directly into your main wallet.

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

## **Retrieve Payments Made to a Virtual Account**

To retrieve a list of all inflows into a virtual account, make a GET request to our fetch virtual account payins endpoint using the virtual account ID. This enables you to track all transactions and manage your account efficiently.

```Text GET
{{baseUrl}}/collections?virtualAccount={virtual_account_id}
```
```Text cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?virtualAccount=<The Virtual Account ID>' \
     --header 'accept: application/json'
```

<br />

```json Response \[Approved]
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
            "accountNumber": "92898942",
            "bankName": "Community Federal Savings Bank",
            "bankCode": null,
            "countryCode": "",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "",
                "accountNumber": "92898942",
                "checkNumber": "",
                "sortCode": "",
                "bankSwiftCode": ""
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
        "currency": "USD",
        "accountType": "individual",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}
```

<br />

## Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the list virtual accounts endpoint.

```curl GET
{{baseUrl}}/profile/virtual-accounts/?currency=eur
```
```curl cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=usd' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```json Response
{
    "success": true,
    "message": "Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
          {...},
          {...},
          {...}
				],
        "total": 3
    }
}
```

# Funding an MCY Virtual Account

You can fund your virtual account via bank transfer, with the funds immediately reflected in your balance. Additionally, a web notification will be sent each time your virtual account is credited through a bank transfer.

### Get the virtual account details

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

### Receiving webhook notification

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

### Fetch payins into a virtual account

To retrieve a list of all inflows into a virtual account, you can make a GET request to our [fetch virtual account payins](/reference/fetch-payins-by-virtual-account) endpoint using the virtual account ID. This allows you to track all transactions and manage your account effectively.

```json GET
{{baseUrl}}/collections?virtualAccount={virtual_account_id}
```
```json cURL
curl --request GET \
     --url 'https://sandboxapi.fincra.com/collections?virtualAccount=<The Virtual Account ID>' \
     --header 'accept: application/json'
```

Response

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
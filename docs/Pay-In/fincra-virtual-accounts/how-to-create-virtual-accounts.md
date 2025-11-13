---
title: Creating Virtual Accounts
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
In this section, we will go over the steps required to set up and maintain a virtual account. We had like to start by explaining the different ways virtual accounts can be created on Fincra. 
There are two ways to request a virtual account: 

  * By using a sub-account: First, a sub-account is created, then the sub-account ID is used to request the virtual account. For more information, see the[ Create a Virtual Account for Sub-accounts endpoint](/reference/create-a-virtual-account-for-a-sub-account)
  * By using the merchant account: All that is needed is for the request to be made by calling the [create virtual account endpoint](/reference/request-virtual-accounts) 
[block:parameters]
{
  "data": {
    "h-0": "Sub-Account Flow",
    "h-1": "Main Account Flow",
    "0-0": "Funds received by a virtual account created for a sub-account settle in the account of the sub-account and not the merchant's account. But merchants can use the [Fincra account-to-account transfer API](/reference/account-to-account-transfer-api) to move money from their sub-accounts to their main accounts.",
    "0-1": "Funds received by a virtual account created for a merchant settle in the account of the merchants"
  },
  "cols": 2,
  "rows": 1
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "When requesting a virtual account using a currency other than NGN, you need to include certain documents in the request body. Please follow this [link](/docs/documents-required-for-virtual-accounts-creation) to see the documents you would need.",
  "title": "Important"
}
[/block]
Earlier, we mentioned there are two ways to request a virtual account. We will be working with you through the different ways to request virtual account requests via API.

##By Using The Main Account

### 1 - Request A Virtual Account
Make an API request to the [create virtual account endpoint](/reference/request-virtual-accounts) 
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://sandboxapi.fincra.com/profile/virtual-accounts/requests/ \\\n     --header 'accept: application/json' \\\n     --header 'api-key: L1vKNYjBd57iPWmUY4biUeEFdSTCvrer' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"currency\": \"NGN\",\n     \"channel\": \"wema\",\n     \"KYCInformation\": {\n          \"firstName\": \"Fincra\",\n          \"lastName\": \"Developers\",\n          \"bvn\": \"01234567891\"\n     },\n     \"accountType\": \"individual\"\n}\n'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, you will receive a JSON snippet with the details of the newly created virtual account
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"message\": \"Thank you, Fincra Developers. A NGN virtual account has been created for you\",\n  \"data\": {\n    \"status\": \"approved\",\n    \"isActive\": true,\n    \"accountNumber\": \"7824707329\",\n    \"merchantReference\": null,\n    \"KYCInformation\": {\n      \"firstName\": \"Fincra\",\n      \"lastName\": \"Developers\"\n    },\n    \"accountInformation\": {\n      \"accountNumber\": \"7824707329\",\n      \"accountName\": \"Fincra Developers\",\n      \"bankName\": \"WEMA BANK\",\n      \"reference\": \"3795352b-0a95-4ad2-a0ee-2bbb2790d814\"\n    },\n    \"accountOpeningFee\": 0,\n    \"pendingAdditionalInfoCount\": 0,\n    \"isPermanent\": true,\n    \"expiresAt\": null,\n    \"isCheckoutVa\": false,\n    \"isBankTransferVa\": false,\n    \"reason\": null,\n    \"monthlyVolume\": null,\n    \"entityName\": null,\n    \"paymentFlowDescription\": null,\n    \"attachments\": [],\n    \"meansOfId\": [],\n    \"utilityBill\": [],\n    \"virtualAccountType\": \"additional\",\n    \"_id\": \"6344861d8a8ecf183d1e24e1\",\n    \"business\": \"607b3cae67c64480bbf1b995\",\n    \"currency\": \"NGN\",\n    \"accountType\": \"individual\",\n    \"entityType\": \"main_account\",\n    \"currencyType\": \"fiat\",\n    \"createdAt\": \"2022-10-10T20:52:45.230Z\",\n    \"updatedAt\": \"2022-10-10T20:52:45.230Z\"\n  }",
      "language": "json"
    }
  ]
}
[/block]
Important notes
  * business : This is your business ID.
  * entityType : This states of the virtual account belongs you or your sub-account.


### 2 - Retrieving The Details Of A Virtual Bank Account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](endpoint/reference/get-one-virtual-account).
[block:code]
{
  "codes": [
    {
      "code": "curl --request GET \\\n     --url https://sandboxapi.fincra.com/profile/virtual-accounts/6344861d8a8ecf183d1e24e1 \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API key>>'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, you will receive a JSON snippet with the details of the virtual account.
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"message\": \"Virtual account fetched successfully\",\n  \"data\": {\n    \"status\": \"approved\",\n    \"isActive\": true,\n    \"accountNumber\": \"7824707329\",\n    \"merchantReference\": null,\n    \"KYCInformation\": {\n      \"firstName\": \"efe\",\n      \"lastName\": \"ebieroma\"\n    },\n    \"accountInformation\": {\n      \"accountNumber\": \"7824707329\",\n      \"accountName\": \"efe ebieroma\",\n      \"bankName\": \"WEMA BANK\",\n      \"reference\": \"3795352b-0a95-4ad2-a0ee-2bbb2790d814\"\n    },\n    \"accountOpeningFee\": 0,\n    \"pendingAdditionalInfoCount\": 0,\n    \"isPermanent\": true,\n    \"expiresAt\": null,\n    \"isCheckoutVa\": false,\n    \"isBankTransferVa\": false,\n    \"reason\": null,\n    \"monthlyVolume\": null,\n    \"entityName\": null,\n    \"paymentFlowDescription\": null,\n    \"attachments\": [],\n    \"meansOfId\": [],\n    \"utilityBill\": [],\n    \"virtualAccountType\": \"additional\",\n    \"_id\": \"6344861d8a8ecf183d1e24e1\",\n    \"business\": {\n      \"name\": \"Lokey Inc\",\n      \"email\": \"tega@fincra.com\"\n    },\n    \"currency\": \"NGN\",\n    \"accountType\": \"individual\",\n    \"entityType\": \"main_account\",\n    \"currencyType\": \"fiat\",\n    \"createdAt\": \"2022-10-10T20:52:45.230Z\",\n    \"updatedAt\": \"2022-10-10T20:52:45.230Z\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
 **Please take note of the following field  in the virtual account  response below: **

- **\_id**: This is the unique Identifier of the virtual account

### 3 - Receive And Validate Webhook  Notification
Listen for webhook events. We will send a notification to your webhook URL that indicates the virtual account creation request was approved or declined. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.
[block:code]
{
  "codes": [
    {
      "code": "{\n \"event\": \"virtualaccount.approved\",\n \"data\": {\n   \"id\": \"6212692ccb0e3e7ea8fdbba3\",\n   \"business\": \"62126841cb0e3efe8efdbb6a\",\n   \"isSubAccount\": true,\n   \"currency\": \"GBP\",\n   \"currencyType\": \"fiat\",\n   \"status\": \"approved\",\n   \"accountType\": \"individual\",\n   \"accountInformation\": {\n     \"accountNumber\": \"GBXXCLJU04130780008933\",\n     \"bankName\": null,\n     \"bankCode\": \"CLJU\",\n     \"countryCode\": \"GB\",\n     \"otherInfo\": {\n       \"iban\": \"GBXXCLJU04130780008933\",\n       \"accountNumber\": \"80008933\",\n       \"checkNumber\": \"XX\",\n       \"sortCode\": \"041307\",\n       \"bankSwiftCode\": null\n     }\n   },\n   \"accountOpeningFee\": 0,\n   \"isPermanent\": true,\n   \"virtualAccountType\": \"additional\",\n   \"createdAt\": \"2022-02-20T16:15:40.476Z\",\n   \"updatedAt\": \"2022-02-20T16:15:52.691Z\"\n }",
      "language": "json"
    }
  ]
}
[/block]
##By Using A Sub-Account

### 1 - Create A Sub-account
Make an API request to the [create sub-account endpoint](/reference/create-subaccount) 
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://sandboxapi.fincra.com/profile/business/607b3cae67c64480bbf1b995/sub-accounts \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API KEY>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"name\": \"fincra\",\n     \"email\": \"developers@fincra\",\n     \"mobile\": \"0123456789\",\n     \"country\": \"Nigeria\"\n}\n'",
      "language": "json"
    }
  ]
}
[/block]
If successful, you will receive a JSON snippet with the details of the newly created sub-account 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"message\": \"You have successfully created a sub-account\",\n  \"data\": {\n    \"_id\": \"63447fb298d3da712adc1a7c\",\n    \"status\": \"enabled\",\n    \"businessTag\": 121976,\n    \"isKYCApproved\": true,\n    \"name\": \"efe\",\n    \"email\": \"egege@gmail.com\",\n    \"mobile\": \"08134448191\",\n    \"country\": \"NG\",\n    \"parentBusiness\": \"6225e8f5a9441522feb2f66d\",\n    \"createdAt\": \"2022-10-10T20:25:22.457Z\",\n    \"updatedAt\": \"2022-10-10T20:25:22.614Z\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
Important notes
  * _id : This is the business Id or sub-account ID of your sub-account
  * parentBusiness : This is your business ID

### 2 - Request A Virtual Account
Make an API request to [create a virtual account for a sub-account endpoint. ](/reference/create-a-virtual-account-for-a-sub-account) 
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://sandboxapi.fincra.com/profile/virtual-accounts/business/6225e8f5a9441522feb2f66d/sub-accounts/63447fb298d3da712adc1a7c/requests \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API Key>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"currency\": \"NGN\",\n     \"accountType\": \"individual\",\n     \"channel\": \"wema\",\n     \"dateOfBirth\": \"string\",\n     \"KYCInformation\": {\n          \"firstName\": \"Fincra\",\n          \"lastName\": \"Developers\",\n          \"bvn\": \"string\",\n}",
      "language": "curl"
    }
  ]
}
[/block]

If successful, you will receive a JSON snippet with the details of the newly created virtual account
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"message\": \"Thank you, Fincra Developer. A NGN virtual account has been created for your sub-account\",\n  \"data\": {\n    \"status\": \"approved\",\n    \"isActive\": true,\n    \"accountNumber\": \"7824530293\",\n    \"merchantReference\": null,\n    \"KYCInformation\": {\n      \"firstName\": \"Fincra\",\n      \"lastName\": \"Developer\"\n    },\n    \"accountInformation\": {\n      \"accountNumber\": \"Fincra\",\n      \"accountName\": \"Developer\",\n      \"bankName\": \"WEMA BANK\",\n      \"reference\": \"ae796516-37ea-4cb3-9bcd-16f29bd552e3\"\n    },\n    \"accountOpeningFee\": 0,\n    \"pendingAdditionalInfoCount\": 0,\n    \"isPermanent\": true,\n    \"expiresAt\": null,\n    \"isCheckoutVa\": false,\n    \"isBankTransferVa\": false,\n    \"reason\": null,\n    \"monthlyVolume\": null,\n    \"entityName\": null,\n    \"paymentFlowDescription\": null,\n    \"attachments\": [],\n    \"meansOfId\": [],\n    \"utilityBill\": [],\n    \"virtualAccountType\": \"additional\",\n    \"_id\": \"6344839998d3da3f93dc1c2b\",\n    \"parentBusiness\": \"6225e8f5a9441522feb2f66d\",\n    \"business\": \"63447fb298d3da712adc1a7c\",\n    \"currency\": \"NGN\",\n    \"accountType\": \"individual\",\n    \"entityType\": \"sub_account\",\n    \"currencyType\": \"fiat\",\n    \"createdAt\": \"2022-10-10T20:42:01.182Z\",\n    \"updatedAt\": \"2022-10-10T20:42:01.182Z\"\n  }\n}\n",
      "language": "json"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "The virtual account status can be `pending,` `approved,` or `declined.` For more information, see the virtual account [overview](/docs/create-virtual-accounts#virtual-account-status).",
  "title": "Note"
}
[/block]
### 2 - Receive And Validate Webhook  Notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the virtual account creation request was approved or declined. Read our [guide](/docs/secret-key) on securing and validating the webhook notification on your end.
[block:code]
{
  "codes": [
    {
      "code": "{\n \"event\": \"virtualaccount.approved\",\n \"data\": {\n   \"id\": \"6212692ccb0e3e7ea8fdbba3\",\n   \"business\": \"62126841cb0e3efe8efdbb6a\",\n   \"isSubAccount\": true,\n   \"currency\": \"NGN\",\n   \"currencyType\": \"fiat\",\n   \"status\": \"approved\",\n   \"accountType\": \"individual\",\n   \"accountInformation\": {\n     \"accountNumber\": \"GBXXCLJU04130780008933\",\n     \"bankName\": null,\n     \"bankCode\": \"CLJU\",\n     \"countryCode\": \"GB\",\n     \"otherInfo\": {\n       \"iban\": \"GBXXCLJU04130780008933\",\n       \"accountNumber\": \"80008933\",\n       \"checkNumber\": \"XX\",\n       \"sortCode\": \"041307\",\n       \"bankSwiftCode\": null\n     }\n   },\n   \"accountOpeningFee\": 0,\n   \"isPermanent\": true,\n   \"virtualAccountType\": \"additional\",\n   \"createdAt\": \"2022-02-20T16:15:40.476Z\",\n   \"updatedAt\": \"2022-02-20T16:15:52.691Z\"\n }",
      "language": "json"
    }
  ]
}
[/block]
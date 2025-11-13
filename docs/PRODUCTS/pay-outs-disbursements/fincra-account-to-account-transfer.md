---
title: Merchant-To-Merchant Transfer
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
You can transfer money directly from your available balance to other Fincra merchants. We call these Fincra transfers and this can be achieved by making use of the [Fincra transfer API](/reference/account-to-account-transfer-api).

Fincra transfers can only be made from one account to another if their base currencies are the same i.e You can only make a payout from your NGN balance to another NGN balance and not from your NGN balance to a EUR balance.

> 📘 Note
> 
> Transfers from one Fincra account to another are free of charge

Webhooks are not sent for these transfers, you are admonished to make use of the response object you get when you make a transfer from your balance to another balance.

> 📘 Hey 👋 we recommend checking out the following section
> 
> - [Business ID](/docs/get-business-id)

<br />

<br />

## How Account to Account Transfers Work

The Fincra Account to Account Transfer service follows a straightforward process:

1. **Wallet Identification**: Obtain the wallet number of the receiving Fincra account
2. **API Request**: Make a POST request to the Fincra transfer API with required parameters
3. **Same Currency Requirement**: Ensure both accounts have the same base currency (e.g., NGN to NGN, USD to USD)
4. **Transaction Processing**: Fincra processes the transfer instantly between accounts
5. **Response Handling**: Track the transfer status through the API response (no webhooks are sent)
6. **Instant Settlement**: Funds are immediately available in the recipient's account

> **Important Note**: Transfers from one Fincra account to another are free of charge

## Common Use Cases

1. **B2B Payments**: Transfer funds between business partners on the Fincra platform
2. **Instant Settlements**: Process payments between merchants without delay
3. **Fee-Free Transfers**: Move funds between accounts without incurring transfer fees
4. **Marketplace Disbursements**: Distribute earnings to marketplace sellers
5. **Internal Account Management**: Transfer funds between different departments or business units
6. **Commission Payments**: Pay affiliates and partners who also have Fincra accounts
7. **Refund Processing**: Quickly refund customers who have Fincra accounts

## Account Transfer Properties by Currency

| Features                     | NGN | USD | EUR | GBP | GHS | KES | UGX | ZAR |
| ---------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Same currency transfers only | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| Fee-free transfers           | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| Instant settlement           | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| Webhook notifications        | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   |
| Response object for tracking | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| Requires wallet number       | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| API availability             | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   | ✅   |
| Cross-currency transfers     | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   | ❌   |

<br />

## How to make a transfer to another Fincra account:

The following steps need to be taken in order to process payments to another user on Fincra

## Topup

You can fund your balance by making deposits into your account or by requesting a manual top-up. You can create a virtual account to fund your wallet/account using our virtual account creation endpoints.

> 📘 For more details on virtual account creation and funding please read the following sections :
> 
> - [How to create a virtual account](/docs/create-virtual-accounts#virtual-account-request-parameters)
> - [How to fund your account ](/docs/introduction-9)

We will send a notification to your webhook URL whenever your balance is funded

```json collection webhook
{
  "event": "collection.successful",
  "data": {
    "business": "61602d2950139ad72e619a91",
    "virtualAccount": "61dc08222d2cc64836c5a591",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "sourceAmount": 200000,
    "destinationAmount": 200000,
    "amountReceived": 100,
    "fee": 100,
    "customerName": " Ultimate Global Ventures",
    "settlementDestination": "wallet",
    "status": "successful",
    "initiatedAt": "2022-03-28T07:15:19.402Z",
    "createdAt": "2022-03-28T07:15:19.403Z",
    "updatedAt": "2022-03-28T07:15:19.403Z",
    "reference": "f9121b33-7e15-409e-b588-36c6146d5823"
  }
}
```

## Request transfer

Kindly ensure you fill out all of the necessary fields in order for your payment to be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response.

```json Request
{
    "business": "{{your business ID}}",
    "beneficiaryWalletNumber":  "10000011070001",
    "amount": 700,
    "description": "christmas gift",
    "customerReference":{{your unique reference}}
   
}
```
```json Response
{
  "success": true,
  "message": "Payout processed successfully",
  "data": {
    "id": "60acaece7e7a05ef97d0e369",
    "reference": "9729464b-8be5-458e-a242-34542138327b",
    "customerReference": null,
    "status": "processing"
  }
}
```
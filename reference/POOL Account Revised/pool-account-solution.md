---
title: Pool Account Solution
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A Pool Account is a central account used to collect funds from multiple payers into a single merchant-controlled balance on Fincra. It enables merchants to receive payments in supported currencies from customers without creating a dedicated virtual account for each payer.

The funds can be:

- Converted to another currency using FX services.
- Payout to beneficiaries locally or internationally.

## How It Works 📌

- Fincra provides a single set of account details for each supported currency to Merchant.
- Merchant’s Customer sends funds to the account with a unique customer id.
- Payment is tagged to the merchant using the reference or unique payment ID provided.
- Funds are settled to Merchant account on Fincra
- Funds can be converted to other currencies or paid out to beneficiaries.

## Supported Currencies 🪙

| Country       | Currency | Virtual Account Available | Min amount | Max amount |
| :------------ | :------- | :------------------------ | :--------- | :--------- |
| Kenya         | KES      | Yes                       | N/A        | N/A        |
| Uganda        | UGX      | Coming Soon               | N/A        | N/A        |
| Ghana         | GHS      | Yes                       | N/A        | N/A        |
| Zambia        | ZMW      | Coming Soon               | N/A        | N/A        |
| South Africa  | ZAR      | Coming Soon               | N/A        | N/A        |
| Cameroon      | XAF      | Yes                       | N/A        | N/A        |
| Cote d'Ivoire | XOF      | Coming Soon               | N/A        | N/A        |
| Tanzania      | TZS      | Coming Soon               | N/A        | N/A        |

## Settlement Reference 🕒

| Currency | Settlement Scheme        | Settlement Time | Cutoff time        |
| -------- | ------------------------ | --------------- | ------------------ |
| GHS      | ACH Express              | Real-time       | BoG window         |
|          | GhIPSS Instant Pay (GIP) | 1 minute        | N/A                |
|          | ACH regular              | T+1 batch       | End-of-day         |
|          | ACH NRT                  | ≤ 15 min        | 18:00 prev → 16:00 |
| KES      | KEPSS RTGS               | Real time       | 14:00 - 15:00      |
|          | PesaLink (instant)       | 1 minute        | N/A                |
| ZMW      | ZIPSS RTGS               | Real Time       | BoZ window         |
|          | ZECHL EFT (ACH)          | T + 1 batch     | End-of-day         |
| UGX      | UNISS RTGS               | Real-time       | ≈ 14:30            |
|          | Uganda ACH               | T+1 batch       | End-of-day         |
| ZAR      | RTGS                     | Real time       | SARB window        |
|          | RTC (Real-Time Clearing) | 1 minute        | N/A                |
|          | PayShap (Rapid Payments) | 1 minute        | N/A                |
|          | EFT / ACH (Bankserv)     | 1 minute        | End-of-day         |

<br />

> 🚧 **NOTE**
> 
> - Settlements from the pool account to your Fincra merchant account are not instant. Fincra currently maintains 4 settlement cycles between the hours of 9am to 6pm WAT on business days.
> - A dedicated email address will be created for Merchant to share payment receipts
> - A unique customer ID must be created for each of your customers, following this pattern  
>   `AAFC{8-digit padded ID}{Currency}`

Where;

- AA – Business initials (prefix)
- FC – Fixed code
- 8-digit padded ID – The customer’s unique numeric ID in your system
- Currency – Currency code of the transaction e.g GHS

`This reference must be provided in the narration when making the payment. It will appear in the metadata.customerId field in the webhook notification for each successful transaction.`

# **Sample Webhook**

```javascript
``{
        "amountReceived": 369857,
        "business": "57*********888***y",
        "createdAt": "2025-06-13T11:25:25.000Z",
        "customerName": "MY NAME LTD",
        "description": "MY FUNDS LTD",
        "destinationAmount": 369857,
        "destinationCurrency": "ZAR",
        "fee": 0,
        "initiatedAt": "2025-06-13T00:00:00.000Z",
        "metadata": {
          "category": "transfer",
          "customerId": "AAFC00009506ZAR",// unique id
          "paymentNetwork": "",
          "statementId": "stmt_uw9n54hoyhp345567d0iq67e"
        },
        "recipientAccountName": "FINCRA - NAME",
        "recipientAccountNumber": "235467874",
        "recipientBankName": "bank",
        "reference": "c45674545667",
        "senderAccountName": "MY NAME LTD",
        "senderAccountNumber": null,
        "senderBankDetails": {
          "bankCode": null,
          "bankName": "UNKNOWN_BANK",
          "bic": null,
          "swiftCode": null
        },
        "senderBankName": "UNKNOWN_BANK",
        "sessionId": null,
        "settlementDestination": "wallet",
        "sourceAmount": 369857,
        "sourceCurrency": "ZAR",
        "status": "successful",
        "updatedAt": "2025-06-13T12:27:28.000Z",
        "virtualAccount": "6824e34524678882705",
          "virtualAccountType": "additional"
},
}

```

# API Endpoints

[block:parameters]
{
  "data": {
    "h-0": "# ",
    "h-1": "**Step**",
    "h-2": "**Detail**",
    "h-3": "**API reference**",
    "0-0": "1",
    "0-1": "Get account by currency",
    "0-2": "This endpoint will allow you get the account details that will be shared with customer to recieve inflows",
    "0-3": "<https://docs.fincra.com/reference/get-account-by-currency>",
    "1-0": "2",
    "1-1": "Simulate payment",
    "1-2": "Simulate inflow into any pool account using this endpoint and confirm the webhook received.",
    "1-3": "<https://docs.fincra.com/reference/simulate-collection>",
    "2-0": "3",
    "2-1": "Confirm collection/payment",
    "2-2": "Confirm the simulated inflow and get the status using this endpoint.  \n  \nLearn more about setting up and validating webhooks [here](https://docs.fincra.com/docs/webhooks) .",
    "2-3": "**Webhook**: <https://docs.fincra.com/docs/payin-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/get-collection-record-by-reference>",
    "3-0": "4",
    "3-1": "Get statement of account",
    "3-2": "Get all transactions done on your account with Fincra",
    "3-3": "<https://docs.fincra.com/reference/get-account-statement>",
    "4-0": "5",
    "4-1": "Get Wallet Balances",
    "4-2": "Fetch the balances of your different wallets (currencies)",
    "4-3": "<https://docs.fincra.com/reference/get-all-wallet-balances>",
    "5-0": "6",
    "5-1": "Generate quote ",
    "5-2": "Generate a quote for currency trade to your wallet (conversion) or to a customer (cross-currency payout).",
    "5-3": "<https://docs.fincra.com/reference/generate-quote>",
    "6-0": "7",
    "6-1": "Conversion",
    "6-2": "Initiate a trade and convert funds using the generated quote to lock on a price.",
    "6-3": "<https://docs.fincra.com/reference/initiate-currency-conversion>",
    "7-0": "8",
    "7-1": "Confirm a conversion",
    "7-2": "Confirm the status of your conversion or listen for the successful webhook event",
    "7-3": "**Webhook**: <https://docs.fincra.com/docs/conversions-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/verify-conversion-status>",
    "8-0": "9",
    "8-1": "Make a same currency payout",
    "8-2": "Initiate a payout where source currency and destination currency are the same.",
    "8-3": "<https://docs.fincra.com/reference/initiate-bank-transfer>",
    "9-0": "10",
    "9-1": "Confirm payout",
    "9-2": "Confirm the status of the payout transaction using this endpoint.  \n  \nYou can also listen for the successful payout webhook.",
    "9-3": "**Webhook**: <https://docs.fincra.com/docs/payout-webhook>  \n  \n**API**: <https://docs.fincra.com/reference/verify-payout-status-by-reference>  \n  \n**API**: <https://docs.fincra.com/reference/fetch-payout-by-customer-reference>"
  },
  "cols": 4,
  "rows": 10,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]
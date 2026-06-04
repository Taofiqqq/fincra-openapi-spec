---
title: Initiate Payout
deprecated: false
hidden: false
metadata:
  robots: index
---
# Initiate Payout (Mobile Money)

This page shows how to send a **mobile money payout** using the Initiate Payout endpoint. To run it interactively, use the **[Initiate Payout](../reference/initiate-mobile-money-payout-1)** endpoint and select the **"Mobile Money Payout"** example.

```
POST https://sandboxapi.fincra.com/disbursements/payouts
```

## Headers

| Header         | Required | Description                 |
| -------------- | -------- | --------------------------- |
| `api-key`      | Yes      | Your Fincra secret API key. |
| `accept`       | Yes      | `application/json`          |
| `content-type` | Yes      | `application/json`          |

## Body params

| Field                 | Type          | Required    | Description                                                                                                                                          |
| --------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceCurrency`      | string (enum) | Yes         | Currency used to fund the payout. One of `USDT`, `GHS`, `KES`, `UGX`, `TZS`, `USD`, `EUR`, `GBP`, `ZMW`, `ZAR`, `USDC`, `CNGN`, `NGN`, `XAF`, `XOF`. |
| `destinationCurrency` | string (enum) | Yes         | Currency the recipient receives. Same enum as `sourceCurrency`.                                                                                      |
| `amount`              | string        | Yes         | The value to transfer from the source wallet.                                                                                                        |
| `business`            | string        | Yes         | The unique identifier of the parent business.                                                                                                        |
| `description`         | string        | Yes         | The description of the payout.                                                                                                                       |
| `customerReference`   | string        | Yes         | Your unique reference for this transaction. Prevents duplicate transactions.                                                                         |
| `paymentDestination`  | string (enum) | Yes         | Use `mobile_money_wallet` for mobile money payouts.                                                                                                  |
| `paymentScheme`       | string (enum) | No          | Not required for mobile money payouts.                                                                                                               |
| `quoteReference`      | string        | Conditional | Required only for **cross-currency** payouts (e.g. `NGN` → `KES`). Generate it via Generate Quote.                                                   |
| `beneficiary`         | object        | Yes         | The recipient details (see below).                                                                                                                   |

### `beneficiary` (mobile money)

| Field             | Type          | Required | Description                                                       |
| ----------------- | ------------- | -------- | ----------------------------------------------------------------- |
| `firstName`       | string        | Yes      | The recipient's first name.                                       |
| `lastName`        | string        | Yes      | The recipient's last name.                                        |
| `type`            | string (enum) | Yes      | `individual` or `corporate`.                                      |
| `phone`           | string        | Yes      | The recipient's phone number (mobile money wallet).               |
| `mobileMoneyCode` | string        | Yes      | The mobile money operator code (see List Mobile Money Operators). |

## Example request

```json
{
  "business": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "sourceCurrency": "KES",
  "destinationCurrency": "KES",
  "amount": "1000",
  "description": "Payment for services",
  "paymentDestination": "mobile_money_wallet",
  "customerReference": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "beneficiary": {
    "firstName": "John",
    "lastName": "Doe",
    "type": "individual",
    "phone": "+254700000000",
    "mobileMoneyCode": "MPESA"
  }
}
```

```bash
curl --request POST \
  --url https://sandboxapi.fincra.com/disbursements/payouts \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'api-key: YOUR_API_KEY' \
  --data '{
    "business": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "sourceCurrency": "KES",
    "destinationCurrency": "KES",
    "amount": "1000",
    "description": "Payment for services",
    "paymentDestination": "mobile_money_wallet",
    "customerReference": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "beneficiary": {
      "firstName": "John",
      "lastName": "Doe",
      "type": "individual",
      "phone": "+254700000000",
      "mobileMoneyCode": "MPESA"
    }
  }'
```

## Success response (200)

```json
{
  "success": true,
  "message": "Payout processed successfully",
  "data": {
    "id": 1254,
    "reference": "5dcf24700a9a4f67",
    "customerReference": "TXT-001",
    "status": "processing",
    "documentsRequired": []
  }
}
```

## Error response (422)

```json
{
  "success": false,
  "error": "Cannot continue, Duplicate Customer Reference Passed",
  "errorType": "DUPLICATE_CUSTOMER_REFERENCE"
}
```

<br />

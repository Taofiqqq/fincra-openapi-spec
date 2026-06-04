---
title: Initiate Payout
deprecated: false
hidden: false
metadata:
  robots: index
---
This page shows how to send a **stablecoin / crypto payout** using the Initiate Payout endpoint. To run it interactively, use the **[Initiate Payout](../reference/initiate-mobile-money-payout-1)** endpoint and select the **"Stablecoin Payout"** example.

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

| Field                 | Type          | Required    | Description                                                                                                                                                                                                                         |
| --------------------- | ------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceCurrency`      | string (enum) | Yes         | Currency used to fund the payout. One of `USDT`, `GHS`, `KES`, `UGX`, `TZS`, `USD`, `EUR`, `GBP`, `ZMW`, `ZAR`, `USDC`, `CNGN`, `NGN`, `XAF`, `XOF`.                                                                                |
| `destinationCurrency` | string (enum) | Yes         | Currency the recipient receives. For stablecoin payouts use `USDT`, `USDC`, or `CNGN`.                                                                                                                                              |
| `amount`              | string        | Yes         | The value to transfer from the source wallet.                                                                                                                                                                                       |
| `business`            | string        | Yes         | The unique identifier of the parent business.                                                                                                                                                                                       |
| `description`         | string        | Yes         | The description of the payout.                                                                                                                                                                                                      |
| `customerReference`   | string        | Yes         | Your unique reference for this transaction. Prevents duplicate transactions.                                                                                                                                                        |
| `paymentDestination`  | string (enum) | Yes         | Use `crypto_wallet` for stablecoin/crypto payouts.                                                                                                                                                                                  |
| `paymentScheme`       | string (enum) | Yes         | The blockchain network/scheme. One of `usdt_trc20`, `usdt_erc20`, `usdt_solana`, `usdt_bep20`, `usdc_erc20`, `usdc_solana`, `usdc_bep20`, `cngn_bep20`, `erc20`, `btc_mainnet`, `eth`. Must match the destination currency network. |
| `quoteReference`      | string        | Conditional | Required only for **cross-currency** payouts. Generate it via Generate Quote.                                                                                                                                                       |
| `beneficiary`         | object        | Yes         | The recipient details (see below).                                                                                                                                                                                                  |

### `beneficiary` (stablecoin / crypto)

| Field            | Type   | Required | Description                                                                                                                           |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `walletAddress`  | string | Yes      | The recipient's crypto wallet address. Must correspond to the selected `paymentScheme` and blockchain network.                        |
| `destinationTag` | string | No       | Extra identifier required by some wallet providers/exchanges (e.g. memo/tag). Provide only when the destination platform requires it. |

## Example request

```json
{
  "business": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "sourceCurrency": "USDT",
  "destinationCurrency": "USDT",
  "amount": "10",
  "description": "Payment",
  "paymentDestination": "crypto_wallet",
  "customerReference": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "paymentScheme": "usdt_trc20",
  "beneficiary": {
    "walletAddress": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "destinationTag": "test-memo"
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
    "sourceCurrency": "USDT",
    "destinationCurrency": "USDT",
    "amount": "10",
    "description": "Payment",
    "paymentDestination": "crypto_wallet",
    "customerReference": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "paymentScheme": "usdt_trc20",
    "beneficiary": {
      "walletAddress": "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "destinationTag": "test-memo"
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
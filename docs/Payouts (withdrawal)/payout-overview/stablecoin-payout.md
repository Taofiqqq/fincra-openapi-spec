---
title: Stablecoin Payouts
deprecated: false
hidden: true
metadata:
  robots: index
---
Stablecoin payouts enable businesses to send funds directly to blockchain wallets using supported stablecoins such as **USDT**, **USDC**, and **cNGN**. Stablecoin  transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-stablecoin-payout)

***

**How Stablecoin Payouts Work**

The payout process generally follows these steps:

1. **Generate Quote (Optional):** Required when converting from fiat or another currency to a stablecoin.
2. **Initiate Payout:** Send the payout request with a wallet address and blockchain network.
3. **Processing & Settlement:** The system validates the payout, performs any required conversion, and settles the funds on the selected blockchain network.

<br />

Note: Stablecoin Payouts are available to approved merchants only.

To request access, email **[getstablecoins@fincra.com](mailto:getstablecoins@fincra.com)** with the following information

- Stablecoin use case
- Payout type (First-party, Third-party, or Both)
- Expected monthly transaction volume
- Source of funds &#x20;
- Nature of transactions

Our  team will review your request and may require additional information or documentation before enabling Stablecoin Products on your account.&#x20;

**Supported Stablecoins**

| **Stablecoin** |     **Description**     |
| :------------: | :---------------------: |
|    **USDT**    |    Tether stablecoin    |
|    **USDC**    |         USD Coin        |
|    **cNGN**    | Naira-backed stablecoin |

**Supported Blockchain Networks**

| **Stablecoin** |    **Supported Networks**   |
| :------------: | :-------------------------: |
|    **USDT**    | TRC20, ERC20, Solana, BEP20 |
|    **USDC**    |     ERC20, Solana, BEP20    |
|    **cNGN**    |            BEP20            |

Each payout must specify a **payment scheme** corresponding to the desired network.

Example:

- `usdt_trc20`
- `usdt_erc20`
- `usdt_solana`
- `usdt_bep20`
- `usdc_erc20`
- `usdc_solana`

**Wallet Beneficiaries**

Unlike bank payouts, stablecoin payouts require a **wallet address** instead of bank account details.

Example beneficiary payload:

```json
{
 "walletAddress": "TWMjBKD61DLXXQr6AvVnDMcVs5p46QSFzT",
 "destinationTag": "test-memo"
}

```

|     **Field**    |                   **Description**                   |
| :--------------: | :-------------------------------------------------: |
|  `walletAddress` |          Destination crypto wallet address          |
| `destinationTag` | Optional memo/tag required by some wallet providers |

<br />
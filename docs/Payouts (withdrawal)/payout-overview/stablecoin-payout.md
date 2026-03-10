---
title: Stablecoin Payouts
deprecated: false
hidden: false
metadata:
  robots: index
---
Stablecoin payouts enable businesses to send funds directly to blockchain wallets using supported stablecoins such as **USDT**, **USDC**, and **cNGN**. Stablecoin  transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-mobile-money-payout)

***

# How Stablecoin Payouts Work

The payout process generally follows these steps:

## 1. Generate Quote (Optional)

Required when converting from fiat or another currency into a stablecoin.

This step determines:

* Exchange rate
* Fees
* Final payout amount

## 2. Initiate Payout

Send the payout request with:

* Wallet address
* Blockchain network
* Stablecoin payment scheme

## 3. Processing & Settlement

The system:

* Validates the payout request
* Performs required currency conversion
* Posts ledger transactions
* Settles funds on the selected blockchain network

***

# Supported Stablecoins

| Stablecoin | Description             |
| ---------- | ----------------------- |
| USDT       | Tether stablecoin       |
| USDC       | USD Coin                |
| cNGN       | Naira-backed stablecoin |

***

# Supported Blockchain Networks

| Stablecoin | Supported Networks                  |
| ---------- | ----------------------------------- |
| USDT       | TRC20, ERC20, Solana, BEP20         |
| USDC       | ERC20, Solana                       |
| cNGN       | Depends on settlement configuration |

Each payout must specify a **payment scheme** corresponding to the desired blockchain network.

### Example Payment Schemes

<br />

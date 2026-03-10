---
title: Stablecoin Payouts
deprecated: false
hidden: false
metadata:
  robots: index
---
Stablecoin payouts allow businesses to send funds directly to blockchain wallet addresses using supported stablecoins and networks. Stablecoin  transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-mobile-money-payout)

How Stablecoin Payouts Work



The payout process generally follows these steps:
Generate Quote (Optional)
Required when converting from fiat or another currency into a stablecoin.
Initiate Payout
Send the payout request with a wallet address and blockchain network.
Processing & Settlement
The system validates the payout, performs any required conversion, and settles the funds on the selected blockchain network.

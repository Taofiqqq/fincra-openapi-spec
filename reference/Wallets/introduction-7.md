---
title: Introduction
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
The Wallet API consists of endpoints that provide information such as account balances, wallet number of a wallet, or wallets for a business. With the wallet APIs, You can manage the account balance for your business and that of your subaccounts. 

Features Of Our Wallet API
--------------------------

- Payouts: You and your sub-accounts can make payouts to a banking institution or another wallet by making use of our wallet-to-wallet transfer API. 
- Manage your wallets and your sub-accounts: You can build your application by leveraging our wallets infrastructure, You will not need to build wallet functionalities for your users on your app all you need to do is create your users as a [subaccount](/reference/create-subaccount) on our platform, and automatically they will be assigned their own unique wallets.
- Security: We make use of complex algorithms in securing our wallets.
- Collections: With our wallet, you can receive money via the [virtual account numbers](/reference/introduction-1) we issue you or your users.

Wallet Balances
---------------

There are three balances for a wallet namely locked balance, ledger balance, and available balance.

| S/N | Wallet Balances  | Description                                                                                                                                                                                  |
| :-- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | lockedBalance    | This is a certain amount that is locked from withdrawing for a certain reason.e.g when a payout is initiated or when a collection is pending.                                                |
| 2   | availableBalance | This is the amount that is available for making payouts or conversions e.g you can use this balance to make a transfer of funds from your wallet to a banking institution or another wallet. |
| 3   | ledgerBalance    | This is the sum of the locked balance and available balance.                                                                                                                                 |

To get wallet balances click on any of the endpoints :
------------------------------------------------------

- [Get wallet ](https://fincra-api.readme.io/reference/get-a-wallet) 
- [Get all the wallets for a Business](ref:get-all-the-wallets-for-a-business) 

Sample response of  a wallet balance

```json
{
  "success": true,
  "message": "Wallet fetched successfully",
  "data": {
    "id": 621,
    "_id": "60ed8883994a6d00195e1017",
    "business": "60ed8883c89ea214999fa9bf",
    "businessId": 186,
    "ledgerBalance": 900,
    "availableBalance": 300,
    "lockedBalance": 600,
    "walletNumber": 10000011860004,
    .....
  }
}
```
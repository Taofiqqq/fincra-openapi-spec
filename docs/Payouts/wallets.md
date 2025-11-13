---
title: Balances
excerpt: ''
deprecated: false
hidden: false
link:
  new_tab: true
  url: https://docs.fincra.com/reference/get-balances
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The Fincra Balance API consists of endpoints that provide information such as account balances, Balance ID, or Balance for a business. With the Fincra Balance APIs, You can manage the account balance for your business and that of your subaccounts. For more details on the Fincra Balance API please see the [API reference](/reference/get-a-wallet)

Features Of Our Balance API
---------------------------

- **Payouts**: You can make payouts to a banking institution or another Fincra balance by making use of our [Fincra Balance Transfer API](/reference/payout-1)
- **Wallets and sub-accounts**: You can use our balance infrastructure to build your app. You do not need to add balance functionality to your app; simply create your users as sub-accounts on our platform, and their unique balances will be assigned to them automatically.
- **Security**: We make use of complex algorithms in securing our balances.
- **Collections**: You can use our balance to store funds received through the various collection methods we provide. For more details please see the methods [here](/reference/get-all-collections)

Fincra Balance
--------------

There are three states of balance namely locked balance, ledger balance, and available balance.

|  Balances        | Description                                                                                                                                                                                   |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lockedBalance    | This is a certain amount that is locked from withdrawing for a certain reason.e.g when a payout is initiated or when a collection is pending.                                                 |
| availableBalance | This is the amount that is available for making payouts or conversions e.g you can use this balance to make a transfer of funds from your balance to a banking institution or another wallet. |
| ledgerBalance    | This is the sum of the locked balance and available balance.                                                                                                                                  |

**Sample response of a  balance** 

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

![](https://files.readme.io/5c2c269-Screenshot_2022-04-17_at_08.18.54.png "Screenshot 2022-04-17 at 08.18.54.png")
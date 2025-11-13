---
title: Balance
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
The Balance API consists of endpoints that provide information such as account balances, and the balance number, for a business. With the balance APIs, You can manage the account balance for your business and that of your subaccounts. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Please keep in mind that all payments made to a [business](/reference/business-1) via virtual bank accounts, checkout pages, or any Fincra API product will be stored in that business account balance."
}
[/block]
Available, Locked, and Ledger Balances
---------------

A Fincra account has three balances: locked balance, ledger balance, and available balance.

| S/N | Wallet Balances  | Description                                                                                                                                                                                  |
| :-- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | lockedBalance    | This is a certain amount that is locked from withdrawing for a certain reason.e.g when a payout is initiated or when a collection is pending.                                                |
| 2   | availableBalance | This is the amount that is available for making payouts or conversions e.g you can use this balance to make a transfer of funds from your wallet to a banking institution or another wallet. |
| 3   | ledgerBalance    | This is the sum of the locked balance and available balance.                                                                                                                                 |
<br />
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7082d41-balance_number.png",
        "balance_number.png",
        3257,
        1295,
        "#f7f7fd"
      ]
    }
  ]
}
[/block]
Here's an overview of how your **ledger balance **works. Assume your **available and ledger balances** are NGN20,000, and you pay your customer NGN4,000. Your **available balance** drops to NGN16,000, while your **ledger balance** remains NGN20,000 until the payout transaction is completed, at which point it drops to NGN16,000.

Your **locked balance** works a little differently. Assume you have NGN5,000 in **available balance** and NGN 0 in **locked funds**. If your customer pays you NGN2,500 successfully, your **available balance** remains NGN5,000, while your **locked balance**  becomes NGN2,500. When the funds settle in your Fincra account, Then your available balance will be NGN7,500.
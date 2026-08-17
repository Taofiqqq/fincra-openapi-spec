---
title: Before you begin
excerpt: Six things to put in place before your first China payout
deprecated: false
hidden: true
metadata:
  robots: index
---
Put these six things in place first. Nothing here selects a processing mode: you choose Normal or Instant on each payment, so there is no account setting to switch on.

1. **An API key with the payout permission.** Get the key from your dashboard. See [Authentication](doc:authentication).
2. **CNY enabled for your business.** Ask your account manager.
3. **A funded source wallet.** Fincra debits the wallet of the source currency.
4. **Your server IP addresses on the allow-list.** Production only. See [IP Whitelisting](doc:ip-whitelisting).
5. **An approved Know Your Business status.** Production only.
6. **A webhook URL.** Fincra sends the payout status, `sender.updated` and `counterparty.updated` to it. See [Webhooks](doc:webhooks).

## Base URLs

Every call uses the standard Fincra base URL. The sender and counterparty endpoints sit under the `/global-payouts` prefix.

| Calls                                | Sandbox                                        | Production                              |
| :----------------------------------- | :--------------------------------------------- | :-------------------------------------- |
| `/v1/senders`, `/v1/counterparties`  | `https://sandboxapi.fincra.com/global-payouts` | `https://api.fincra.com/global-payouts` |
| `/send`, `/payouts/documents-upload` | `https://sandboxapi.fincra.com`                | `https://api.fincra.com`                |

Send your API key in the `api-key` header on every call.

```bash
curl https://api.fincra.com/global-payouts/v1/senders \
  -H "api-key: $FINCRA_API_KEY"
```

The `/send` endpoint does not need a request signature.

## What the sandbox does

| The sandbox does                                    | The sandbox does not                                      |
| :-------------------------------------------------- | :-------------------------------------------------------- |
| Validate every field and return every error.        | Send the payout to the payment partner.                   |
| Return the sender, counterparty and payout objects. | Send a payout webhook.                                    |
|                                                     | Check the IP allow-list or the Know Your Business status. |

Next: [Create a sender](doc:china-payouts-create-a-sender).

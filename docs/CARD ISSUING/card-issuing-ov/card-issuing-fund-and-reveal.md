---
title: Fund and reveal a card
excerpt: ' Load a card from your wallet, read its balances, and reveal its details.'
deprecated: false
hidden: true
metadata:
  robots: index
---
A card spends from a balance you load, and its full details are revealed through a single-use flow. This page covers both.

## Fund a card

`POST /cards/{id}/fund`

Set the amount the card receives in `settlementAmount`, and the wallet Fincra debits in `fundingSourceCurrency`. When the two currencies differ, Fincra converts, and you pass a `quoteReference` for the rate.

| Field                       | Type   | Required | What it is                                                                       |
| :-------------------------- | :----- | :------- | :------------------------------------------------------------------------------- |
| `settlementAmount.amount`   | number | Yes      | The amount the card receives.                                                    |
| `settlementAmount.currency` | string | Yes      | The currency the card receives.                                                  |
| `reference`                 | string | Yes      | Your unique funding reference.                                                   |
| `fundingSourceCurrency`     | string | Yes      | The wallet currency Fincra debits.                                               |
| `quoteReference`            | string | No       | The reference of a rate quote, when the source and settlement currencies differ. |

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/fund \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "settlementAmount": { "amount": 50, "currency": "USD" },
    "reference": "fund_0001",
    "fundingSourceCurrency": "USD"
  }'
```

The response is the funding transaction. A `200` means funding finished. A `202` means it is processing, and Fincra sends `card.funding.completed` when it settles.

```json
{
  "id": "txn_3ab99c",
  "cardId": "card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62",
  "type": "FUNDING",
  "status": "SUCCESSFUL",
  "direction": "credit",
  "settlementAmount": { "amount": 50, "currency": "USD" },
  "feeAmount": { "amount": 0.5, "currency": "USD" },
  "reference": "fund_0001",
  "createdAt": "2026-06-25T10:05:00Z"
}
```

Use a unique `reference` for each funding. Reuse of a `reference` is rejected, so a retry with the same `reference` never funds twice.

## Read the balances

`GET /cards/{id}/balances` — returns the balances the card holds. Pass `currency` to read one.

```bash
curl "https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/balances?currency=USD" \
  -H "api-key: $FINCRA_API_KEY"
```

```json
[
  { "id": "bal_usd", "currency": "USD", "availableBalance": 50, "postedBalance": 50 }
]
```

`availableBalance` is what the cardholder can spend now. `postedBalance` is the settled balance.

## Reveal card details

Fincra does not return the full card number on a normal call. To show a cardholder their card number, security code and expiry, you use a two-step, single-use flow. The reveal call runs from your frontend, so the details never touch your backend.

```mermaid
sequenceDiagram
    participant Frontend
    participant Backend
    participant Fincra
    Frontend->>Frontend: Make a secret and a timestamp, derive a nonce
    Frontend->>Backend: Send the nonce (never the secret)
    Backend->>Fincra: POST /cards/{id}/ephemeral_tokens {nonce}
    Fincra-->>Backend: ephemeralToken
    Backend-->>Frontend: ephemeralToken
    Frontend->>Fincra: POST /card_details {clientSecret, clientTimestamp}
    Fincra-->>Frontend: pan, cvv, expiryMonth, expiryYear
```

**1. Derive a nonce on the frontend.** Make a random secret and a timestamp. Derive the nonce as an HMAC-SHA256 of the timestamp, keyed by the secret. Send the nonce to your backend. The secret never leaves the frontend.

```javascript
const clientSecret = crypto.randomUUID();               // keep on the frontend
const clientTimestamp = Math.floor(Date.now() / 1000);  // seconds
const nonce = hmacSha256Hex(clientSecret, String(clientTimestamp));
// send { nonce } to your backend
```

**2. Mint an ephemeral token from your backend.** `POST /cards/{id}/ephemeral_tokens` with the nonce. Fincra binds the token to that nonce. The token is short-lived and single-use.

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/ephemeral_tokens \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "nonce": "246c9a24ba8a5826d8f36eef..." }'
```

```json
{ "ephemeralToken": "eph_9f2c...secret..." }
```

**3. Reveal the details from the frontend.** `POST /card_details` with the token as a bearer credential, and the original secret and timestamp. Fincra re-derives the nonce, checks it matches the token, and checks the token is unused and unexpired. This call does not use your API key.

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/card_details \
  -H "Authorization: Bearer eph_9f2c...secret..." \
  -H "Content-Type: application/json" \
  -d '{ "clientSecret": "b1d2...", "clientTimestamp": 1789468064 }'
```

```json
{
  "pan": "5269000000007725",
  "cvv": "123",
  "expiryMonth": "02",
  "expiryYear": "2029"
}
```

The token is used up on this call. To reveal the card again, start a new secret, nonce and token.

<Callout icon="❗️" theme="error">
  ### Handle the details safely

  Show the details straight to the cardholder. Do not send them to your backend, log them, or store them.
</Callout>

Next: [Transactions, programs and errors](doc:card-issuing-transactions-programs-errors).

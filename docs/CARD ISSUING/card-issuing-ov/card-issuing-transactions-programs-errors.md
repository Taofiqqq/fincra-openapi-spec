---
title: Transactions, programs and errors
excerpt: Read transactions, group cards under a program, and read the error codes.
deprecated: false
hidden: true
metadata:
  robots: index
---
This page covers reading transactions, grouping cards under a business program, and the error codes the API returns.

## Transactions

Every funding, spend and reversal on a card is a transaction. A transaction carries a `type` (`FUNDING`, `JIT_AUTHORIZATION`, `WITHDRAWAL` or `REVERSAL`), a `status` (`SUCCESSFUL`, `PENDING` or `FAILED`), a `direction` (`credit` or `debit`), the `settlementAmount` and `feeAmount`, and, for a spend, the `merchant` with its category and Merchant Category Code.

`GET /cards/{id}/transactions` lists one card's transactions. `GET /cards/{id}/transactions/{transactionId}` retrieves one. Filter by `type` and `status`; page with `limit` and `cursor`.

```bash
curl "https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/transactions?limit=10&status=SUCCESSFUL" \
  -H "api-key: $FINCRA_API_KEY"
```

```json
{
  "hasMore": false,
  "cursor": null,
  "data": [
    {
      "id": "txn_3ab99c",
      "cardId": "card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62",
      "cardLast4": "7725",
      "type": "WITHDRAWAL",
      "status": "SUCCESSFUL",
      "direction": "debit",
      "settlementAmount": { "amount": 12.5, "currency": "USD" },
      "feeAmount": { "amount": 0, "currency": "USD" },
      "reference": "ref_88",
      "rrn": "402710000123",
      "description": "ADOBE  *CREATIVE CLD",
      "merchant": { "mcc": "5734", "category": "Software", "name": "Adobe", "country": "US" },
      "createdAt": "2026-06-25T11:00:00Z"
    }
  ]
}
```

`GET /transactions` lists every transaction across your business. Filter by `cardId`, `type`, `status`, `merchant`, `category`, `programType` and `search` (the description, the reference or the Retrieval Reference Number), plus a `createdAt` range.

```bash
curl "https://sandboxapi.fincra.com/issuing/transactions?limit=10&category=Software" \
  -H "api-key: $FINCRA_API_KEY"
```

## Business programs

A business program groups a set of cards and sets how they are funded and authorised. You need one only for the two models below. A plain card does not need a program. Pass a program's id as `businessProgramId` when you [create a card](doc:card-issuing-cards).

| Type               | What it is                                                                       |
| :----------------- | :------------------------------------------------------------------------------- |
| `business_spend`   | Cards for your own business spend, drawn against one funding source.             |
| `customer_issuing` | Cards you issue to your own customers, where you decide each spend in real time. |

For a `customer_issuing` program, Fincra asks your server to approve or decline each spend as it happens. This is just-in-time authorisation. You set an `authorizationUrl` for Fincra to call and an `authorizationTimeoutMs`. If your server does not answer in time, Fincra applies the `fallbackDecision`.

`POST /business_programs` creates one. `GET /business_programs/{id}` retrieves one, `GET /business_programs` lists them (filter by `status` and `type`), and `PATCH /business_programs/{id}` updates the name, the authorisation URL, the timeout, the funding source or the status.

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/business_programs \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Customer wallets",
    "type": "customer_issuing",
    "cardType": "virtual_debit_card",
    "scheme": "mastercard",
    "fundingSourceCurrency": "USD",
    "authorizationUrl": "https://example.com/fincra/authorize",
    "authorizationTimeoutMs": 3000
  }'
```

```json
{
  "id": "bprog_7h2k",
  "name": "Customer wallets",
  "type": "customer_issuing",
  "fundingSourceCurrency": "USD",
  "authorizationUrl": "https://example.com/fincra/authorize",
  "authorizationTimeoutMs": 3000,
  "fallbackDecision": "decline",
  "status": "active"
}
```

## Errors

The API uses standard HTTP status codes. A `2xx` code means the request worked. A `4xx` code means the request failed on the information you sent. A `5xx` code means the fault is on Fincra's side.

| Status       | What it means                                                                 | What to do                                                          |
| :----------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| `200`, `201` | The request worked.                                                           | Read the response.                                                  |
| `202`        | Accepted and finishing in the background.                                     | Wait for the webhook.                                               |
| `400`        | A field is missing or malformed.                                              | Fix the field and retry.                                            |
| `401`        | The API key is missing or wrong.                                              | Check the `api-key` header.                                         |
| `403`        | Not permitted, or a live request from an IP not on the allow-list.            | Check the permission and the allow-list.                            |
| `404`        | The object does not exist.                                                    | Check the id in the path.                                           |
| `409`        | The `reference` is already used.                                              | Retry with the same reference to stay idempotent, or use a new one. |
| `422`        | The request failed a rule, such as a Know Your Customer or eligibility check. | Read the message and correct the data.                              |
| `429`        | Too many requests.                                                            | Slow down and retry.                                                |
| `500`        | Something went wrong on Fincra's side.                                        | Retry later. If it holds, contact support.                          |

The error body carries a message and a code.

```json
{
  "status": false,
  "message": "Cardholder identity verification failed",
  "code": "cardholder_verification_failed"
}
```

When a cardholder is `rejected`, read its `verificationFailures` to see the exact field at fault, then call `resubmit_verification`. See [Cardholders](doc:card-issuing-cardholders).

Next: [Card issuing overview](doc:card-issuing).

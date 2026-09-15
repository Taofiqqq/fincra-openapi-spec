---
title: Cards
excerpt: Activate a card product, issue a card, and manage it across its life.
deprecated: false
hidden: false
metadata:
  robots: index
---
Activate a card product once, then issue cards against it. A new card is `inactive`; activate it, fund it, and it transacts.

## Activate a card product

A card product sets the scheme and terms of the cards under it. Activate it once for your business.

`GET /card_products` lists the products for your business. `GET /card_products/{id}` Retrieves one. `POST /card_products/{id}/activate` Activates it and takes no body.

```bash
# List, then activate the one you want
curl https://sandboxapi.fincra.com/issuing/card_products \
  -H "api-key: $FINCRA_API_KEY"

curl -X POST https://sandboxapi.fincra.com/issuing/card_products/cprod_ff0c3z37zi40pvc82g74bgsm4q7fubbw/activate \
  -H "api-key: $FINCRA_API_KEY"
```

```json
{
  "id": "act_8s0h2n7d",
  "cardProductId": "cprod_ff0c3z37zi40pvc82g74bgsm4q7fubbw",
  "productCode": "USD-VIRTUAL",
  "status": "active"
}
```

The product is ready when its `activationStatus` is `active`.

## Create a card

`POST /cards`

| Field               | Type   | Required | What it is                                                                                                                        |
| :------------------ | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `cardProductId`     | string | Yes      | An activated card product.                                                                                                        |
| `cardholderId`      | string | Yes      | The cardholder to issue to.                                                                                                       |
| `reference`         | string | Yes      | Your unique reference for the card.                                                                                               |
| `cardType`          | string | Yes      | The kind of card, for example `virtual_debit_card`.                                                                               |
| `cardDisplayName`   | string | No       | A name for the card, shown to you and the cardholder.                                                                             |
| `businessProgramId` | string | No       | The business program the card belongs to. See [Transactions, programs and errors](doc:card-issuing-transactions-programs-errors). |
| `billingAddress`    | object | No       | `line1`, `city`, `state`, `country`, `postalCode`.                                                                                |
| `metadata`          | object | No       | String key-value pairs for your own use.                                                                                          |

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "cardProductId": "cprod_ff0c3z37zi40pvc82g74bgsm4q7fubbw",
    "cardholderId": "ch_k7iwb55alvazwckwykc4erlm11ijcyn9",
    "reference": "card_0001",
    "cardType": "virtual_debit_card",
    "cardDisplayName": "Umar spend card"
  }'
```

```json
{
  "id": "card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62",
  "status": "inactive",
  "last4": "7725",
  "panMasked": "5269********7725",
  "expiryMonth": "02",
  "expiryYear": "2029",
  "scheme": "mastercard",
  "currency": "USD",
  "cardType": "virtual_debit_card",
  "cardProductId": "cprod_ff0c3z37zi40pvc82g74bgsm4q7fubbw",
  "cardholderId": "ch_k7iwb55alvazwckwykc4erlm11ijcyn9",
  "reference": "card_0001",
  "name": "Umar spend card"
}
```

A card returns `inactive`, or `pending` if Fincra is still issuing it. Fincra sends `card.created` when a `pending` card is ready.

## Activate a card

`POST /cards/{id}/activate`

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/activate \
  -H "api-key: $FINCRA_API_KEY"
```

## Freeze or unfreeze

`PUT /cards/{id}` — set `status` to `frozen` to block the card, or `active` to restore it. Send a `reason`. The card comes back with `isFrozen` and, when frozen, a `freezeReason`.

```bash
curl -X PUT https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62 \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "status": "frozen", "reason": "cardholder_request" }'
```

## Set a PIN

`POST /cards/{id}/pin`

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/pin \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "pin": "4113" }'
```

## Terminate

`POST /cards/{id}/terminate` — permanent. A terminated card is `cancelled` and cannot return to active. Send a `reason`, for example `damaged`, `lost` or `stolen`.

```bash
curl -X POST https://sandboxapi.fincra.com/issuing/cards/card_rv9bevpfrbjbdtrvd04y5qp8rllw7i62/terminate \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "reason": "damaged" }'
```

## Retrieve and list

`GET /cards/{id}` returns the card, including `isFrozen`, `freezeReason`, `programType`, and the cardholder's name and reference. `GET /cards` lists them, filtered by `status`, `programType`, `cardholderId`, `search` (the last four, or part of a card or cardholder name or reference), and a `createdAt` range. Page with `limit` and `cursor`.

```bash
curl "https://sandboxapi.fincra.com/issuing/cards?limit=10&status=active&search=7725" \
  -H "api-key: $FINCRA_API_KEY"
```

Next: [Fund and reveal a card](doc:card-issuing-fund-and-reveal).

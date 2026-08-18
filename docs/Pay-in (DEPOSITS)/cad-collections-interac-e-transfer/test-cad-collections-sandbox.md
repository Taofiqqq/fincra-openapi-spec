---
title: Test CAD Collections (Sandbox)
excerpt: >-
  Simulate a CAD Interac e-Transfer collection in the Sandbox environment to
  test your integration and verify your webhook listeners before going live.
deprecated: false
hidden: false
metadata:
  robots: index
---
In the Sandbox environment, you can simulate a CAD Interac e-Transfer collection without moving real funds. A simulation goes through the same collection pipeline as a live transfer: it credits your Sandbox CAD wallet and dispatches the same webhook your server will receive in production.

> The simulation endpoint is available in the Sandbox environment only. It has no equivalent in Live (Production), where collections are triggered by real Interac e-Transfers from your payers.

<br />

## Before you begin

You need the following in your Sandbox account:

| Requirement                     | Description                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| An approved CAD virtual account | The account must have a status of `approved`. See [CAD Collections (Interac e-Transfer)](doc:cad-collections-interac-e-transfer) to request one. |
| Your Interac email alias        | The email address assigned to your CAD virtual account. CAD collections are addressed to this alias, not to an account number.                   |
| Your Sandbox API key            | Used to authenticate the request. See [Authentication](doc:authentication).                                                                      |
| A configured webhook URL        | Required only if you want to see the webhook format. See [Setup Webhook](doc:setup-webhook).                                                     |

## 1 - Get your Interac email alias

CAD collections are sent to an Interac email alias assigned to your virtual account, not to an account number. Retrieve your CAD virtual account using the get virtual account endpoint. The alias is returned in the `data.accountInformation.otherInfo.interacEmail` field:

```json CAD
{
  "success": true,
  "message": "We use this to communicate information to you.",
  "data": {
    "status": "approved",
    "isActive": true,
    "currency": "CAD",
    "accountInformation": {
      "otherInfo": {
        "interacEmail": "merchantname@fincra.ca"
      }
    }
  }
}
```

CAD virtual accounts do not return an `accountNumber`. The Interac email alias is the only addressing detail your payers need, and it is the value you pass as `payee.interacEmail` when you simulate a collection.:

## 2 - Simulate a collection

Send a `POST` request to the simulation endpoint with your Sandbox API key:

**Endpoint:** `POST https://sandboxapi.fincra.com/collections/transfer/simulate`

```curl Request
curl -X POST https://sandboxapi.fincra.com/collections/transfer/simulate \
  -H "api-key: YOUR_SANDBOX_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "currency": "CAD",
    "payer": {
      "name": "John Doe"
    },
    "payee": {
      "name": "Your Business Name",
      "interacEmail": "merchantname@fincra.ca"
    }
  }'
```

### Request fields

| Field                | Type   | Required | Description                                                                                                                                               |
| -------------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`             | number | Yes      | The amount to collect. This field also controls whether the simulation succeeds or fails — see [Test success and failure](#3---test-success-and-failure). |
| `currency`           | string | Yes      | Always `CAD` for Interac collections.                                                                                                                     |
| `payer.name`         | string | Yes      | The name of the simulated sender. This value appears in the webhook payload.                                                                              |
| `payee.name`         | string | Yes      | Your business name.                                                                                                                                       |
| `payee.interacEmail` | string | Yes      | The Interac email alias on your CAD virtual account, retrieved in step 1.                                                                                 |

<Callout icon="🚧" theme="warn">
  ### Do not pass `payee.accountNumber`

  CAD Interac collections are addressed by email alias. Passing `payee.accountNumber`, or omitting `payee.interacEmail`, causes the request to fail validation.
</Callout>

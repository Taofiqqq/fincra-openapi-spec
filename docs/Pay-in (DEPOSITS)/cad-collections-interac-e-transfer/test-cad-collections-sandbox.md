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

CAD virtual accounts do not return an `accountNumber`. The Interac email alias is the only addressing detail your payers need, and it is the value you pass as `payee.interacEmail` when you simulate a collection.

##

## 2 - Make the simulation request

Send a `POST` request to the simulation endpoint with your Sandbox API key.

**Endpoint:** `POST https://sandboxapi.fincra.com/collections/transfer/simulate`

```bash
curl -X POST https://sandboxapi.fincra.com/collections/transfer/simulate \
  -H "api-key: YOUR_SANDBOX_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 999,
    "currency": "CAD",
    "payer": {
        "name": "John Payer",
        "interacEmail": "test.test10075@test.fincra.ca"
    },
    "payee": {
        "name": "Virtual Account name",
        "interacEmail": "<Your interact email>"
    },
    "reference": "{{$randomUUID}}",
    "narration": "sandbox CAD collection test"
}'
```

### Request fields

| Field                | Type   | Required | Description                                                                                                    |
| -------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| `amount`             | number | Yes      | The amount to collect, in CAD. The value determines which outcome the simulation produces — see steps 3 and 4. |
| `currency`           | string | Yes      | Always `CAD` for Interac collections.                                                                          |
| `payer.name`         | string | Yes      | The name of the simulated sender. This value appears in the webhook payload.                                   |
| `payer.interacEmail` | string | Yes      | The Interac email alias of the simulated sender. Any valid address works — it is not a real account.           |
| `payee.name`         | string | Yes      | Your business name.                                                                                            |
| `payee.interacEmail` | string | Yes      | The Interac email alias on your CAD virtual account, retrieved in step 1.                                      |
| `reference`          | string | No       | Your own identifier for the collection.                                                                        |
| `narration`          | string | No       | A free-text description.                                                                                       |

### Response

The endpoint returns the collection payload — the same object your webhook receives:

```json
{
  "success": true,
  "message": "Collection processed successfully",
  "data": {
    "_id": "6512f3a1c8d4e90012ab34cd",
    "sourceCurrency": "CAD",
    "destinationCurrency": "CAD",
    "sourceAmount": 500,
    "destinationAmount": 500,
    "status": "successful",
    "customerName": "John Doe",
    "description": "Interac e-Transfer test",
    "reference": "FNC-CAD-8241097"
  }
}
```

Steps 3 and 4 describe the outcomes you can trigger from here, and the webhook
each one dispatches.

## 3 - Simulate a standard collection

A standard collection settles immediately. Use these amounts to test the two outcomes your integration will see most often:

| Scenario              | Amount                                          | Result                                                         | Webhook event           |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------- | ----------------------- |
| Successful collection | Below `1000`, except `999` (for example, `500`) | Your Sandbox CAD wallet is credited with the collected amount. | `collection.successful` |
| Failed collection     | `999`                                           | The collection fails. Your wallet balance is unchanged.        | `collection.failed`     |

In both cases the collection reaches a final state as soon as the simulation completes. No further action is required from you.

## 4 - Simulate a collection that requires an RFI

Collections above `1000` require additional information before they can be processed. We raise a Request for Information (RFI), and the collection holds until the request is answered.

| Scenario                              | Amount                             | Result                                                                               | Webhook event                          |
| ------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| Collection requiring more information | Above `1000` (for example, `5000`) | An RFI is raised. The collection holds at `pending` and your wallet is not credited. | `collection.additional-info-requested` |

Simulate this path to confirm your integration handles a collection that has neither succeeded nor failed. When the webhook arrives:

1. Read the collection ID from `data._id`.
2. Retrieve the outstanding requests for that collection.
3. Submit a response to each one, with supporting documents where required.
4. Wait for Fincra to review the collection and update its status.

See [Handling Requests for Additional Information for Collections](doc:handling-collection-rfi-request) for the full procedure and the Additional Information API endpoints.

### Errors

| Status | Condition                                                                           |
| ------ | ----------------------------------------------------------------------------------- |
| `403`  | The endpoint was called outside Sandbox. It exists only in the Sandbox environment. |
| `404`  | `payee.accountNumber` does not match a virtual account in the given currency.       |
| `422`  | A required field is missing, or an unrecognised field was sent.                     |
---
title: '# Handling Requests for Additional Information for Collections'
deprecated: false
hidden: false
metadata:
  robots: index
---
A Request for Information, or RFI, may be raised when Fincra requires more information before a collection can be processed.

When an RFI is raised, your integration will receive the `collection.additional-info-requested` webhook event. You can then retrieve the individual information requests and submit the required responses using the Additional Information API endpoints.

## Overview

The RFI process follows these steps:

1. Receive the `collection.additional-info-requested` webhook.
2. Extract the collection ID from `data._id`.
3. Retrieve all RFIs associated with the collection.
4. Provide a response to each outstanding RFI.
5. Include supporting documents where required.
6. Wait for the collection to be reviewed and updated.

> Your webhook endpoint should return a successful `2xx` response after receiving the event.

***

## Base URLs

| Environment | Base URL                        |
| ----------- | ------------------------------- |
| Sandbox     | `https://sandboxapi.fincra.com` |
| Production  | `https://api.fincra.com`        |

Replace `{{base_url}}` in the examples below with the appropriate URL for your environment.

***

## Authentication

Include your Fincra API key in the `api-key` request header.

```http
api-key: YOUR_API_KEY
```

> Keep your API key secure and never expose it in client-side applications, public repositories, or application logs.

***

## 1. Receive the RFI Webhook

When additional information is required for a collection, Fincra sends the following webhook event:

```json
{
  "event": "collection.additional-info-requested",
  "data": {
    "_id": 16376096,
    "business": "67c6a69005b6cxxxxxxxxxxx",
    "status": "pending",
    "virtualAccount": "68cc492fe56610xxxxxxxxxx",
    "sourceCurrency": "EUR",
    "destinationCurrency": "EUR",
    "sourceAmount": 710,
    "destinationAmount": 710,
    "description": "Uplata",
    "amountReceived": 705,
    "fee": 5,
    "customerName": "Jane Doe",
    "settlementDestination": "wallet",
    "reference": "85b51eec-4b7f-9ea8-b634-cf8118abc274",
    "initiatedAt": "2025-09-19T09:44:34.000Z",
    "updatedAt": "2025-09-19T09:45:21.000Z",
    "createdAt": "2025-09-19T09:45:05.000Z",
    "additionalInfo": [
      {
        "id": 3539,
        "request": "Dear Doe, kindly respond to the RFI to enable us to treat the transaction urgently and, possibly, future transactions. Thank you."
      }
    ]
  }
}
```

### Important webhook fields

| Field                           | Description                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| `event`                         | The webhook event type. For an RFI, this is `collection.additional-info-requested`.        |
| `data._id`                      | The collection ID. Use this value as `collectionId` when retrieving or responding to RFIs. |
| `data.status`                   | The current status of the collection.                                                      |
| `data.reference`                | The transaction reference associated with the collection.                                  |
| `data.additionalInfo`           | A summary of the additional information requested.                                         |
| `data.additionalInfo[].id`      | The ID of the individual RFI request.                                                      |
| `data.additionalInfo[].request` | A description of the information required.                                                 |

Although the webhook may contain an `additionalInfo` array, you should call the Get RFIs endpoint to retrieve the complete and current list of requests associated with the collection.

***

## 2. Retrieve RFIs for a Collection

Use this endpoint to retrieve all additional information requests associated with a collection.

### Endpoint

```http
GET /collections/{collectionId}/additional-information
```

### Path parameter

| Parameter      | Type    | Required | Description                                                      |
| -------------- | ------- | -------: | ---------------------------------------------------------------- |
| `collectionId` | Integer |      Yes | The collection ID returned as `data._id` in the webhook payload. |

### Request

```bash
curl --location \
  '{{base_url}}/collections/16376096/additional-information' \
  --header 'api-key: YOUR_API_KEY'
```

### Successful response

```json
{
  "success": true,
  "message": "Additional information fetched successfully",
  "data": [
    {
      "id": 42,
      "collection_id": 3247494,
      "request": "Source of the funds",
      "response": null,
      "requested_by": "61576056df34b42649b5abd8",
      "created_at": "2024-09-11T05:24:02.000Z",
      "updated_at": "2025-01-23T15:18:28.000Z"
    },
    {
      "id": 43,
      "collection_id": 3247494,
      "request": "Purpose of funds",
      "response": null,
      "requested_by": "61576056df34b42649b5abd8",
      "created_at": "2024-09-11T05:24:02.000Z",
      "updated_at": "2024-09-11T05:24:02.000Z"
    },
    {
      "id": 44,
      "collection_id": 3247494,
      "request": "Confirm transaction frequency: one-off or recurring?",
      "response": null,
      "requested_by": "61576056df34b42649b5abd8",
      "created_at": "2024-09-11T05:24:02.000Z",
      "updated_at": "2024-09-11T05:24:02.000Z"
    }
  ]
}
```

### Response fields

| Field           | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `id`            | The unique ID of the RFI. Pass this value as `additionalInfoId` when submitting a response. |
| `collection_id` | The collection associated with the request.                                                 |
| `request`       | The information or document being requested.                                                |
| `response`      | The response previously provided. This is `null` when no response has been submitted.       |
| `requested_by`  | The identifier of the party that raised the request.                                        |
| `created_at`    | The date and time the RFI was created.                                                      |
| `updated_at`    | The date and time the RFI was last updated.                                                 |

A collection may have multiple RFIs. Submit a separate response for each outstanding `id`.

***

## 3. Respond to an RFI

Use this endpoint to respond to an individual RFI.

### Endpoint

```http
PATCH /collections/{collectionId}/additional-information
```

The endpoint supports:

- A text-only response
- A response containing hosted file URLs
- A direct file upload using multipart form data

***

## Respond with Text Only

Use a JSON request when the RFI can be answered without a supporting document.

### Request

```bash
curl --location --request PATCH \
  '{{base_url}}/collections/3249029/additional-information' \
  --header 'Content-Type: application/json' \
  --header 'api-key: YOUR_API_KEY' \
  --data '{
    "additionalInfoId": 90,
    "text": "The funds are proceeds from the customer’s employment income."
  }'
```

### Request body

| Field              | Type    | Required | Description                              |
| ------------------ | ------- | -------: | ---------------------------------------- |
| `additionalInfoId` | Integer |      Yes | The ID of the RFI being answered.        |
| `text`             | String  |      Yes | The response to the information request. |

### Successful response

```json
{
  "success": true,
  "message": "Additional information response saved successfully",
  "data": {
    "text": "The funds are proceeds from the customer’s employment income."
  }
}
```

***

## Respond with Text and Hosted File URLs

Use this option when supporting files have already been uploaded to a secure, publicly accessible location.

### Request

```bash
curl --location --request PATCH \
  '{{base_url}}/collections/3249029/additional-information' \
  --header 'Content-Type: application/json' \
  --header 'api-key: YOUR_API_KEY' \
  --data '{
    "additionalInfoId": 90,
    "text": "Please find the requested supporting document attached.",
    "urls": [
      "https://blobstore.example.com/documents/supporting-document.pdf"
    ]
  }'
```

### Request body

| Field              | Type             | Required | Description                                                 |
| ------------------ | ---------------- | -------: | ----------------------------------------------------------- |
| `additionalInfoId` | Integer          |      Yes | The ID of the RFI being answered.                           |
| `text`             | String           |       No | A written response or description of the attached document. |
| `urls`             | Array of strings |      Yes | URLs for the supporting files.                              |

Ensure that each URL:

- Uses HTTPS
- Points directly to the file
- Is accessible when Fincra reviews the RFI
- Does not expire before the review is completed

### Successful response

```json
{
  "success": true,
  "message": "Additional information response saved successfully",
  "data": {
    "text": "Please find the requested supporting document attached.",
    "files": [
      {
        "name": "supporting-document.pdf",
        "url": "https://blobstore.example.com/documents/supporting-document.pdf"
      }
    ]
  }
}
```

***

## Respond by Uploading a File

Use `multipart/form-data` to upload a supporting file directly.

### Request

```bash
curl --location --request PATCH \
  '{{base_url}}/collections/3247931/additional-information' \
  --header 'api-key: YOUR_API_KEY' \
  --form 'additionalInfoId="90"' \
  --form 'files=@"path/to/supporting-document.pdf"'
```

### Form fields

| Field              | Type    | Required | Description                             |
| ------------------ | ------- | -------: | --------------------------------------- |
| `additionalInfoId` | Integer |      Yes | The ID of the RFI being answered.       |
| `files`            | File    |      Yes | The supporting document being uploaded. |

When using multipart form data, allow your HTTP client to generate the `Content-Type` header and multipart boundary automatically.

Do not manually set the request to `application/json` when uploading a file.

***

## Handling Multiple RFIs

A single collection may contain several information requests.

For example:

```json
[
  {
    "id": 42,
    "request": "Source of the funds",
    "response": null
  },
  {
    "id": 43,
    "request": "Purpose of funds",
    "response": null
  },
  {
    "id": 44,
    "request": "Confirm transaction frequency: one-off or recurring?",
    "response": null
  }
]
```

Each request has a unique `id`. Respond to each request separately by sending its corresponding ID as `additionalInfoId`.

Example responses:

```json
{
  "additionalInfoId": 42,
  "text": "The funds are from the customer’s employment income."
}
```

```json
{
  "additionalInfoId": 43,
  "text": "The payment is for the purchase of consulting services."
}
```

```json
{
  "additionalInfoId": 44,
  "text": "This is a recurring monthly transaction."
}
```

Do not combine several RFI IDs into one request unless the API explicitly supports that behaviour.

***

## Recommended Integration Flow

Your application should implement the following workflow:

```text
Receive collection.additional-info-requested webhook
                         |
                         v
Read the collection ID from data._id
                         |
                         v
GET /collections/{collectionId}/additional-information
                         |
                         v
Display each outstanding request to the appropriate user or operations team
                         |
                         v
Collect the required text and supporting documents
                         |
                         v
PATCH /collections/{collectionId}/additional-information
for each additionalInfoId
                         |
                         v
Store the submission result and continue monitoring the collection
```

***

## Suggested Pseudocode

```javascript
async function handleCollectionRfiWebhook(payload) {
  if (payload.event !== "collection.additional-info-requested") {
    return;
  }

  const collectionId = payload.data._id;

  const rfiResponse = await getCollectionRfis(collectionId);

  const outstandingRfis = rfiResponse.data.filter(
    (item) => item.response === null
  );

  for (const rfi of outstandingRfis) {
    await notifyOperationsTeam({
      collectionId,
      additionalInfoId: rfi.id,
      request: rfi.request
    });
  }
}
```

Example text response:

```javascript
async function respondToCollectionRfi({
  collectionId,
  additionalInfoId,
  text
}) {
  const response = await fetch(
    `${BASE_URL}/collections/${collectionId}/additional-information`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY
      },
      body: JSON.stringify({
        additionalInfoId,
        text
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Unable to submit RFI response: ${response.status}`);
  }

  return response.json();
}
```

***

## Best Practices

### Acknowledge webhooks promptly

Return a successful `2xx` response as soon as the webhook has been received and validated. Process longer-running operations asynchronously where possible.

### Retrieve the current RFI list

Use the Get RFIs endpoint after receiving the webhook. This ensures that your application works with the most recent set of requests.

### Respond to every outstanding request

A collection may remain pending until all required questions have been answered and all requested documents have been supplied.

### Match the correct IDs

Make sure that:

- `collectionId` identifies the collection.
- `additionalInfoId` identifies the specific RFI.

Sending the wrong `additionalInfoId` may result in the response being attached to the wrong request or rejected.

### Provide clear and complete responses

Avoid vague responses such as:

```text
See attached.
```

Instead, briefly explain what the document contains:

```text
Attached is the customer’s bank statement showing the source of the funds.
```

### Protect sensitive information

RFI responses may include personal, financial, or compliance-related information. Ensure that:

- Data is encrypted in transit and at rest.
- API keys are stored securely.
- Access is limited to authorised personnel.
- Sensitive request and response bodies are not written to unsecured logs.
- Hosted file links are protected and retained only as long as necessary.

### Make processing idempotent

Webhook events may be delivered more than once. Store the event or collection details and avoid creating duplicate internal tasks for an RFI that is already being handled.

### Keep an audit trail

Record:

- The collection ID
- The RFI ID
- The request received
- The response submitted
- The supporting documents provided
- The submission timestamp
- The API response

***

## Troubleshooting

### The RFI response is not accepted

Confirm that:

- The correct environment base URL is being used.
- The `api-key` header contains a valid key.
- The collection ID exists in the selected environment.
- `additionalInfoId` belongs to the specified collection.
- The request body contains valid JSON.
- `Content-Type: application/json` is included for JSON requests.
- Multipart form data is used for direct file uploads.

### A file URL cannot be accessed

Confirm that the URL:

- Begins with `https://`
- Points directly to the file
- Is not restricted to your internal network
- Does not require an interactive login
- Has not expired

### The collection remains pending

The collection may still be under review, or another RFI may remain unanswered. Retrieve the RFI list again and confirm that all outstanding requests have been addressed.

***

## Complete Example

### Step 1: Receive the webhook

```json
{
  "event": "collection.additional-info-requested",
  "data": {
    "_id": 16376096,
    "status": "pending",
    "reference": "85b51eec-4b7f-9ea8-b634-cf8118abc274",
    "additionalInfo": [
      {
        "id": 3539,
        "request": "Please provide the source and purpose of the funds."
      }
    ]
  }
}
```

### Step 2: Retrieve the RFIs

```bash
curl --location \
  'https://api.fincra.com/collections/16376096/additional-information' \
  --header 'api-key: YOUR_API_KEY'
```

### Step 3: Submit the response

```bash
curl --location --request PATCH \
  'https://api.fincra.com/collections/16376096/additional-information' \
  --header 'Content-Type: application/json' \
  --header 'api-key: YOUR_API_KEY' \
  --data '{
    "additionalInfoId": 3539,
    "text": "The funds are from the customer’s salary and are being used to pay for professional services.",
    "urls": [
      "https://blobstore.example.com/documents/source-of-funds.pdf"
    ]
  }'
```

### Step 4: Store the result

```json
{
  "success": true,
  "message": "Additional information response saved successfully",
  "data": {
    "text": "The funds are from the customer’s salary and are being used to pay for professional services.",
    "files": [
      {
        "name": "source-of-funds.pdf",
        "url": "https://blobstore.example.com/documents/source-of-funds.pdf"
      }
    ]
  }
}
```

<br />

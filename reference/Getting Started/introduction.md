---
title: Introduction
excerpt: Everything you need to make your first request, from base URLs to rate limits.
deprecated: false
hidden: true
metadata:
  robots: index
---
The Fincra API lets businesses collect payments, make payouts, manage virtual accounts and multi-currency wallets, and convert between supported currencies through a single REST API.

Requests use HTTPS, and request and response bodies use JSON. Standard HTTP status codes indicate whether a request succeeded or failed.

## Base URLs

| Environment | Base URL                        |
| ----------- | ------------------------------- |
| Sandbox     | `https://sandboxapi.fincra.com` |
| Production  | `https://api.fincra.com`        |

Sandbox and Production are separate environments, each with its own business ID and API keys. Complete onboarding before using Production. See [Authentication](/api-authentication) to learn how to obtain and use your credentials.

Try it with your Sandbox key:

```bash
curl https://sandboxapi.fincra.com/profile/business/me \
  -H "api-key: YOUR_SECRET_KEY"
```

```json
{
  "success": true,
  "message": "Parent business fetched successfully",
  "data": {
    "_id": "64f1c2a4b7d9e30012ab4567",
    "name": "Example Trading Limited",
    "status": "enabled",
  }
}
```

The `_id` is your business ID. Most endpoints require it.

## Response format

Every response is JSON and tells you whether it succeeded in its first field.

### Successful responses

```json
{
  "success": true,
  "message": "Parent business fetched successfully",
  "data": {
    "_id": "64f1c2a4b7d9e30012ab4567",
    "name": "Example Trading Limited",
    "status": "enabled"
  }
}
```

`success` and `message` are always present. `data` holds the endpoint's payload and its shape is documented on each endpoint. Endpoints with nothing to return send an empty array.

### Errors

Errors come in three shapes, depending on where the request failed.

**Rejected at the gateway** — an authentication failure, before the request reaches a service:

```json
{
  "message": "No API key found in request",
  "request_id": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
}
```

Quote `request_id` when contacting support about a specific request.

**Rejected by the service** — the shape used across most of the API:

```json
{
  "success": false,
  "error": "Error occurred during payload validation. businessID length must be 24 characters long",
  "errorType": "VALIDATION_FAILED",
  "errors": [
    "Error occurred during payload validation. businessID length must be 24 characters long"
  ]
}
```

**Rejected by Checkout** — endpoints under /checkout-core return a different shape

```json
{
  "message": "x-business-id must be provided in the header",
  "error": "Unauthorized",
  "statusCode": 401
}
```

## Sandbox behavior

Sandbox uses simulated data and test scenarios. Use the test values documented for each product, and validate your Production setup before processing live transactions.

## Pagination

Most paginated endpoints accept `page` and `perPage` query parameters. Endpoint-specific defaults and limits are documented with each endpoint.

## Rate limits

The following rate limits apply to all customers using the Fincra APIs:

| Window     | Limit            |
| ---------- | ---------------- |
| Per second | 100 requests     |
| Per minute | 4,200 requests   |
| Per hour   | 200,000 requests |

All three windows apply at once, the tightest one you reach is the one that stops you.

Requests beyond a limit return 429 Too Many Requests. Retry with exponential backoff rather than immediately, which consumes the next window too.

Need higher limits? Email [support@fincra.com](mailto:support@fincra.com).

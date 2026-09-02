---
title: Introduction
deprecated: false
hidden: true
metadata:
  robots: index
---
The Fincra API lets businesses collect payments, make payouts, manage virtual accounts and multi-currency wallets, and convert between supported currencies through a single **REST API**.

Requests use **HTTPS**, and request and response bodies use **JSON**. Standard **HTTP** status codes indicate whether a request succeeded or failed.

## Base URLs

| Environment | Base URL                        |
| ----------- | ------------------------------- |
| Sandbox     | `https://sandboxapi.fincra.com` |
| Production  | `https://api.fincra.com`        |

Use Sandbox to build and test your integration without moving real funds. **Sandbox&#x20;**&#x61;nd **Production** are separate environments, each with its own business ID and API keys. Before processing live transactions, complete your onboarding and use your Production credentials. See [Authentication](/v4.0/reference/api-authentication) to learn how to obtain and use your credentials.

## Response format

Most successful responses contain `success`, `message`, and `data`:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

Error responses contain `success`, `error`, and `errorType`. Some validation errors also include an `errors` object:

```json
{
  "success": false,
  "error": "Invalid request",
  "errorType": "VALIDATION_ERROR",
  "errors": {}
}
```

See [Errors](/v4.0/reference/errors) for error-handling guidance.

## Sandbox behavior

Sandbox uses simulated data and test scenarios, so some features may behave differently from Production. Use the test values documented for each product, and validate your Production setup before processing live transactions.

## Pagination

Most paginated endpoints accept page and perPage query parameters. Endpoint-specific defaults and limits are documented with each endpoint.

## Rate limits

Fincra applies the following limits across its APIs:

| Window     | Limit            |
| ---------- | ---------------- |
| Per second | 100 requests     |
| Per minute | 4,200 requests   |
| Per hour   | 200,000 requests |

Requests that exceed any of these limits return an HTTP 429 Too Many Requests response. Reduce your request rate and retry using exponential backoff.

If your integration requires higher limits, contact our Support team.

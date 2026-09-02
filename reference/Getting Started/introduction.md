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

Sandbox uses simulated data and test scenarios. Some product behaviour may differ from Production, so use the test values documented for each product and complete final validation with your live configuration before going live.

## Pagination

Paginated endpoints commonly accept `page` and `perPage` query parameters. Supported parameters, defaults, and limits are documented on each endpoint.

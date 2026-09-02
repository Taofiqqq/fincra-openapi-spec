---
title: Authentication
deprecated: false
hidden: true
metadata:
  robots: index
---
Fincra uses API keys to authenticate server-to-server requests. Include your API key in the `api-key` header. Checkout payment initiation uses a public key instead. Include it in the `x-pub-key` header when required.

## Environments

Sandbox and Production use separate base URLs and credentials. Credentials generated in one environment cannot be used in the other.

| Environment | Base URL                        |
| ----------- | ------------------------------- |
| Sandbox     | `https://sandboxapi.fincra.com` |
| Production  | `https://api.fincra.com`        |

You can access Sandbox after signing up. Production access becomes available after you complete onboarding. Generate credentials for each environment from your Fincra dashboard.

## Credentials

| Credential | Header      | Used for                      | Format                                              |
| ---------- | ----------- | ----------------------------- | --------------------------------------------------- |
| API key    | `api-key`   | Server-to-server API requests | Opaque string                                       |
| Public key | `x-pub-key` | Checkout payment initiation   | `pk_test_...` in Sandbox and `pk_...` in Production |

Your full API key is shown only once when it is generated. Copy it and store it securely. Afterward, only a masked version is visible in your dashboard.

Unlike your API key, your public key can be used in client-side applications. Only send it to endpoints that explicitly require the `x-pub-key` header.

## Business-scoped requests

Some endpoints require an `x-business-id` header in addition to your API key. The documentation for each endpoint indicates when this header is required.

You can retrieve your business ID using the Get Business Information endpoint.

## Making an authenticated request

Include your API key in the `api-key` request header:

```shell Shell
curl --request GET \
  --url https://sandboxapi.fincra.com/profile/business/me \
  --header 'api-key: <your_api_key>'
```

## Protecting your API key

Your API key grants access to your Fincra account. Store it securely on your server and never expose it in client-side code, public repositories, application logs, or unsecured communication channels.

Use separate credentials for Sandbox and Production. If you believe an API key has been exposed, rotate it immediately.

## Rotating your API key

You can rotate your API key from your dashboard.

Rotating your API key invalidates the existing key immediately. There is no overlap period, so plan the rotation carefully and update your integration with the new key as soon as it is generated.

The new API key is shown only once. Copy and store it securely before leaving the page.

## Authentication errors

Requests made without a valid API key return `401 Unauthorized`.

A request without the `api-key` header returns:

```json
{
  "message": "No API key found in request",
  "request_id": "f4a7e94660f6ef5d30650f25ff11ac1b"
}
```

The `request_id` identifies the request. Include it when contacting Fincra Support about an authentication error.

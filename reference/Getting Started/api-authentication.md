---
title: Authentication
deprecated: false
hidden: true
metadata:
  robots: index
---
Fincra uses **API key authentication** — there is no token exchange or OAuth flow. Every authenticated request includes your `api-key` in the request header.

## Environments

Fincra has two environments, each with its own base URL and its own set of credentials. A key generated in one environment does not work in the other.

| Environment | Base URL                        |
| ----------- | ------------------------------- |
| Sandbox     | `https://sandboxapi.fincra.com` |
| Production  | `https://api.fincra.com`        |

You get access to Sandbox immediately on signup. Production access is unlocked after completing onboarding, at which point you generate a separate set of Production credentials the same way.

## Credentials

All credentials are generated per environment, from your dashboard.

| Credential         | Header                   | Used for                                                            | Format                                           |
| ------------------ | ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------ |
| API key            | `api-key`                | Authenticating all API requests                                     | opaque string, no prefix                         |
| Public key         | `x-pub-key`              | Checkout and other core payment endpoints, client-side integrations | `pk_test_...` (Sandbox), `pk_...` (Production)   |
| Webhook secret key | — (not sent in requests) | Verifying inbound webhook payloads                                  | opaque string, generated automatically at signup |

**Your API key is shown once**, at generation time — Fincra does not store it in retrievable form. If you lose it, rotate to a new one. Public keys and the webhook secret key remain viewable in your dashboard.

### Making an authenticated request

```shell Shell
curl --request GET \
  --url https://sandboxapi.fincra.com/profile/business/me \
  --header 'api-key: <your_api_key>'
```
```javascript Node
const response = await fetch('https://sandboxapi.fincra.com/profile/business/me', {
  method: 'GET',
  headers: { 'api-key': '<your_api_key>' },
});
const data = await response.json();
```
```python Python
import requests

response = requests.get(
    "https://sandboxapi.fincra.com/profile/business/me",
    headers={"api-key": "<your_api_key>"},
)
data = response.json()
```
```go Go
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	req, _ := http.NewRequest("GET", "https://sandboxapi.fincra.com/profile/business/me", nil)
	req.Header.Set("api-key", "<your_api_key>")
	resp, _ := http.DefaultClient.Do(req)
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))
}
```
```csharp .NET
using var client = new HttpClient();
client.DefaultRequestHeaders.Add("api-key", "<your_api_key>");
var response = await client.GetAsync("https://sandboxapi.fincra.com/profile/business/me");
var data = await response.Content.ReadAsStringAsync();
```
```java Java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://sandboxapi.fincra.com/profile/business/me"))
    .header("api-key", "<your_api_key>")
    .GET()
    .build();
HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
```
```php PHP
$ch = curl_init('https://sandboxapi.fincra.com/profile/business/me');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['api-key: <your_api_key>']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
```

## Rotating your API key

Generate a new key from your dashboard at any time. The old key is invalidated immediately — there is no overlap window, so update your integration before rotating in production.

## Authentication errors

A missing or invalid `api-key` returns `401 Unauthorized`:

```json
{
  "message": "No API key found in request",
  "request_id": "9fd0487056e1d44df9c855231b519b1"
}
```

## Verifying webhooks

Every merchant is issued a webhook secret key automatically at signup, used to sign outbound webhook payloads with HMAC-SHA512.

Each webhook delivery includes a `signature` header — an HMAC-SHA512 hex digest, computed over `{ event, data }` (JSON-stringified) using your webhook secret key. Recompute the same HMAC on your end and compare it against the `signature` header using a constant-time comparison before trusting the payload.

```javascript Node
const crypto = require('crypto');

function isValidSignature(payload, signature, secret) {
  const expected = crypto
    .createHmac('SHA512', secret)
    .update(JSON.stringify({ event: payload.event, data: payload.data }))
    .digest('hex');

  const expectedBuffer = Buffer.from(expected, 'hex');
  const signatureBuffer = Buffer.from(signature, 'hex');

  if (expectedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
}
```

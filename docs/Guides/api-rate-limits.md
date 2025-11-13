---
title: API Rate Limits
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Fincra permits 50 API calls per second. A response with the HTTP error code 429 will be returned for calls that go beyond this cap.

```json HTTP 429
{ "message": "API rate limit exceeded" }
```

A good way to handle limits is to build a retry mechanism around the 429 status codes when received.

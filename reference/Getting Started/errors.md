---
title: Errors
deprecated: false
hidden: false
metadata:
  robots: index
---
Fincra uses conventional HTTP status codes to indicate success or failure. Codes in the `2xx` range indicate success; `4xx` codes indicate an error caused by the request (invalid parameters, missing resource, etc.); `5xx` codes indicate an error on Fincra's end.

## Two response shapes

Requests rejected before reaching Fincra's API (missing or invalid `api-key`) come from the API gateway and use this shape:

```json
{
  "message": "No API key found in request",
  "request_id": "9fd0487056e1d44df9c855231b519b1"
}
```

All other errors are returned by the API itself, using a consistent envelope:

```json
{
  "success": false,
  "error": "A human-readable error message",
  "errorType": "ERROR_TYPE_CONSTANT",
  "errors": {}
}
```

## Error types

| errorType                                | HTTP status | Meaning                                              |
| ---------------------------------------- | ----------- | ---------------------------------------------------- |
| `VALIDATION_FAILED`                      | 422         | Request payload failed schema validation             |
| `UNPROCESSABLE_ENTITY`                   | 422         | Request could not be processed as sent               |
| `RESOURCE_NOT_FOUND`                     | 404         | The requested resource does not exist                |
| `RESOURCE_EXIST`                         | 409         | A resource with this identifier already exists       |
| `HTTP_ERROR`                             | 409         | Conflict during the requested operation              |
| `ACCESS_DENIED`                          | 403         | You do not have access to the requested resource     |
| `OPERATION_FORBIDDEN`                    | 403         | This operation is not permitted                      |
| `INTERNAL_SERVER_ERROR` / `SERVER_ERROR` | 500         | An error occurred on Fincra's end                    |
| `SERVICE_UNAVAILABLE`                    | 503         | The service is temporarily unavailable — retry later |

## Example: validation error

```json
{
  "success": false,
  "error": "amount must be a valid number",
  "errorType": "VALIDATION_FAILED",
  "errors": ["amount must be a valid number"]
}
```

---
title: Rates
excerpt: ''
api:
  file: awesome-new-api.json
  operationId: rates
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Rates API provides real-time foreign exchange (FX) rates for all supported currency pairs. You can retrieve buy and sell side rates for combination of currencies; enabling accurate pricing, margining, and conversion calculations before executing a trade or payout.

### 🔐 Authentication

| Type             | Details                                                              |
| ---------------- | -------------------------------------------------------------------- |
| **Header**       | `api-key`                                                            |
| **Content-Type** | `application/json`                                                   |
| **API Keys**     | Available under `My Acc > Acc Settings > API Keys` on your dashboard |

<br />

### 🔗 Base URL

`https://sandboxapi.fincra.com/quotes/treasury-orders/rates`

Get Rates for all available currency pairs

```coffeescript GET
{{base_url}}/quotes/treasury-orders/rates
```
```coffeescript cURL
curl --location 'https://api.fincra.com/quotes/treasury-orders/rates
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```
```javascript Response
{
    "success": true,
    "message": "Rates retrieved successfully",
    "data": {
        "rates": [
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "USD",
                "side": "buy",
                "price": 1.16
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "USD",
                "side": "sell",
                "price": 1.18
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "USD",
                "side": "sell",
                "price": 1.36
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "GBP",
                "side": "sell",
                "price": 0.8560226
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "GBP",
                "side": "buy",
                "price": 0.8492284
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 1830
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "USD",
                "side": "buy",
                "price": 1.34
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1993.47
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 11.46
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 12.12
            }
        ],
        "pagination": {
            "page": 1,
            "perPage": 10,
            "totalItems": 56,
            "totalPages": 6,
            "timestamp": "2025-10-07T15:23:38.735Z"
        }
    }
}
    }  
  }  
}
```

Get Rates for a specific currency pair

```coffeescript GET
{{base_url}}/quotes/treasury-orders/rates?currencyPair=USD-NGN
```
```coffeescript cURL
curl --location 'https://api.fincra.com/quotes/treasury-orders/rates' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```
```javascript Response
{
    "success": true,
    "message": "Rates retrieved successfully",
    "data": {
        "rates": [
            {
                "baseCurrency": "USD",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1486
            },
            {
                "baseCurrency": "USD",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 1503
            }
        ],
        "pagination": {
            "page": 1,
            "perPage": 10,
            "totalItems": 2,
            "totalPages": 1,
            "timestamp": "2025-10-07T15:24:52.930Z"
        }
    }
}
```

<br />

> 📘 Note
> 
> > Endpoint only accepts **query parameters** — path parameters are not supported
> >
> > Format: `/quotes/treasury-orders/rates?currencyPair={BASE}-{QUOTE}`
> >
> > Example: /quotes/treasury-orders/rates?currencyPair=USD-NGN

<br />

## ⚙️ Parameters

| Field         | Value (E.g) | Type   | Description                                    |
| ------------- | :---------- | ------ | ---------------------------------------------- |
| currencyPair  | USD-NGN     | string | Filter by specific currency pair               |
| currency      | NGN         | string | Filter by a single currency                    |
| side          | buy or sell | string | Specifies which rate direction to return.      |
| baseCurrency  | USD         | string | Filters rates by base currency                 |
| quoteCurrency | NGN         | string | Filters rates by quote currency                |
| page          | 1           | number | Page number for paginated results (default: 1) |
| perPage       | 10          | number | Number of items per page (default: 10)         |

📌 All parameters are optional and can be used to filter responses.  
If no parameters are provided, the endpoint returns all available rates by default.

<br />

## Sample Responses

#### 🟢 All available currency: returns buy and sell rates for all available currency pairs.

```json Response
{
    "success": true,
    "message": "Rates retrieved successfully",
    "data": {
        "rates": [
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "USD",
                "side": "buy",
                "price": 1.16
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "USD",
                "side": "sell",
                "price": 1.18
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "USD",
                "side": "sell",
                "price": 1.36
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "GBP",
                "side": "sell",
                "price": 0.8560226
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "GBP",
                "side": "buy",
                "price": 0.8492284
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 1830
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "USD",
                "side": "buy",
                "price": 1.34
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1993.47
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 11.46
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 12.12
            }
        ],
        "pagination": {
            "page": 1,
            "perPage": 10,
            "totalItems": 56,
            "totalPages": 6,
            "timestamp": "2025-10-07T15:23:38.735Z"
        }
    }
}
    }  
  }  
}
```
```
```

<br />

#### 🟢 By quoted currency; returns buy and sell rates for multiple baseCurrencies quoted against the specified quoteCurrency

```json Response
{
    "success": true,
    "message": "Rates retrieved successfully",
    "data": {
        "rates": [
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 1830
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1993.47
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 11.46
            },
            {
                "baseCurrency": "KES",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 12.12
            },
            {
                "baseCurrency": "GHS",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 110.26
            },
            {
                "baseCurrency": "GHS",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 120
            },
            {
                "baseCurrency": "USD",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1486
            },
            {
                "baseCurrency": "USD",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 1503
            },
            {
                "baseCurrency": "GBP",
                "quoteCurrency": "NGN",
                "side": "sell",
                "price": 2103
            },
            {
                "baseCurrency": "EUR",
                "quoteCurrency": "NGN",
                "side": "buy",
                "price": 1730.45
            }
        ],
        "pagination": {
            "page": 1,
            "perPage": 10,
            "totalItems": 22,
            "totalPages": 3,
            "timestamp": "2025-10-07T15:25:53.141Z"
        }
    }
}

```
```
```

<br />

## 🚀 What’s Next

After retrieving rates, you can:

- Initiate a Conversion to exchange funds between currencies. Refer to[ conversion](https://docs.fincra.com/docs/conversions)
- Initiate a cross currency disbursement.
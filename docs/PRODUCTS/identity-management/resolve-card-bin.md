---
title: Resolve Card BIN
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The resolve BIN gives the following information on a card based on the first 6 or 8 digits of its PAN:

```json GET- Request
{{host}}/checkout/resolve/bin/{{539941}}
```

```json Response
{ 
  "status": true,
  "message": "Bin resolved",
  "data": {
    "bin": "539941",
    "scheme": "mastercard",
    "brand": null,
    "country": { 
      "code": "NG",
      "name": "Nigeria",
      "emoji": "🇳🇬"
    },
    "bank": {
      "name": "ZENITH BANK",
      "url": "www.zenithbank.com",
      "phone": "234 (1) 4647000"
    },
    "type": "debit",
    "lengths": [16]
  }
}
```
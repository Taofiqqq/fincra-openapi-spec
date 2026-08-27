---
title: Create a China counterparty
excerpt: >-
  Make the party that receives the money, with the Chinese name, identity and
  bank details that CNAPS need
deprecated: false
hidden: false
metadata:
  robots: index
---
The counterparty is the party that receives the money. The industry also calls this the beneficiary or the recipient. Every field and every error message uses the word counterparty.

Set `type` to `CNY_CNAPS`. Send the bank details in `cnyCnapsDetails`. Send no other details object.

You can pay a business bank account or an individual bank account. Both work on the Normal and the Instant processing mode, so the account type never limits the mode you choose.

<Callout icon="🚧" theme="warn">
  ### You cannot edit a counterparty

  There is no update endpoint and no delete endpoint. To correct a name, an account number or a bank, create a new counterparty and block the old one.
</Callout>

## The bank details

| Field             | Description                                      |
| :---------------- | :----------------------------------------------- |
| `accountNumber`   | The Chinese bank account number.                 |
| `institutionName` | The name of the bank.                            |
| `cnapsCode`       | The CNAPS interbank clearing code of the branch. |

Fincra returns the CNAPS code in the `swiftCode` field of the response. Read `swiftCode` when you check a record.

## A business counterparty

```bash cURL
curl -X POST https://api.fincra.com/global-payouts/v1/counterparties \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "entityType": "business",
    "type": "CNY_CNAPS",
    "name": "深圳市华强电子（集团）有限公司",
    "industry": "ecommerce_electronics",
    "registrationNumber": "91440300MA5EX12345",
    "incorporationCountry": "CN",
    "specialEconomicZone": "not_applicable",
    "phone": "+8613800138000",
    "cnyCnapsDetails": {
      "accountNumber": "6222020200112233445",
      "institutionName": "中国工商银行",
      "cnapsCode": "102584000004"
    },
    "address": {
      "street": "华强北路1002号",
      "city": "深圳",
      "state": "广东",
      "zip": "518000",
      "country": "CN"
    }
  }'
```
```javascript Node
const res = await fetch("https://api.fincra.com/global-payouts/v1/counterparties", {
  method: "POST",
  headers: {
    "api-key": process.env.FINCRA_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    entityType: "business",
    type: "CNY_CNAPS",
    name: "深圳市华强电子（集团）有限公司",
    industry: "ecommerce_electronics",
    registrationNumber: "91440300MA5EX12345",
    incorporationCountry: "CN",
    specialEconomicZone: "not_applicable",
    phone: "+8613800138000",
    cnyCnapsDetails: {
      accountNumber: "6222020200112233445",
      institutionName: "中国工商银行",
      cnapsCode: "102584000004",
    },
    address: {
      street: "华强北路1002号",
      city: "深圳",
      state: "广东",
      zip: "518000",
      country: "CN",
    },
  }),
});
const counterparty = await res.json();
```

Five fields are required for a Chinese business. Four of them are not required anywhere else.

| Field                 | Rule                                                                               |
| :-------------------- | :--------------------------------------------------------------------------------- |
| `name`                | The registered Chinese legal name. Chinese characters, digits and parentheses.     |
| `registrationNumber`  | An 18-character Unified Social Credit Code. Copy it from the business licence.     |
| `specialEconomicZone` | The customs zone. Use `not_applicable` unless the business sits in a special zone. |
| `phone`               | A Chinese mobile number.                                                           |
| `industry`            | One value from the [industry list](ref:counterparty-industries).                   |

These five rules also apply to any business with `incorporationCountry` set to `CN`, whatever the counterparty type.

## An individual counterparty

```bash cURL
curl -X POST https://api.fincra.com/global-payouts/v1/counterparties \
  -H "api-key: $FINCRA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "entityType": "individual",
    "type": "CNY_CNAPS",
    "firstName": "伟",
    "lastName": "王",
    "phone": "+8613912345678",
    "document": {
      "type": "national_id",
      "number": "330106199211030011",
      "issuedCountryCode": "CN",
      "issuedBy": "杭州市公安局",
      "issuedDate": "2020-05-10",
      "expirationDate": "2030-05-09"
    },
    "cnyCnapsDetails": {
      "accountNumber": "6217000010012345678",
      "institutionName": "中国建设银行",
      "cnapsCode": "105100000017"
    },
    "address": {
      "street": "文三路388号",
      "city": "杭州",
      "state": "浙江",
      "zip": "310000",
      "country": "CN"
    }
  }'
```

Five fields are required for a Chinese individual.

| Field             | Rule                                                                         |
| :---------------- | :--------------------------------------------------------------------------- |
| `firstName`       | Chinese characters. The middle dot `·` is allowed for a transliterated name. |
| `document.type`   | Must be `national_id`. A passport and a driving licence are not accepted.    |
| `document.number` | The resident identity card number.                                           |
| `phone`           | A Chinese mobile number.                                                     |
| `address.country` | `CN`.                                                                        |

**The name order.** `lastName` is optional. A Chinese bank account name often arrives as one field, so you can put the whole name in `firstName`. Fincra joins the parts in the Chinese order and with no space.

```text
name = lastName + middleName + firstName
```

The `lastName` 王 and the `firstName` 伟 become 王伟.

## Two rules for every China counterparty

The address must be in China. `address.country` must be `CN`, because CNAPS pays onshore accounts only.

The phone number must be a Chinese mobile number. Fincra stores it in the E.164 form. You can send the local form: `13800138000`, `08613800138000` and `+86 138 0013 8000` all become `+8613800138000`.

A request that breaks any rule on this page returns 400 with the code `validation_error`. The message names the field.

## Wait for the active status

Fincra registers the counterparty with the payment partner, then sends the `counterparty.updated` event.

```json counterparty.updated
{
  "event": "counterparty.updated",
  "data": {
    "id": "cp_hkzx6drmqogyeiwzensmwrgs",
    "status": "active"
  }
}
```

`status` is `active` or `failed`. Read the record before you act on the event.

```bash cURL
curl https://api.fincra.com/global-payouts/v1/counterparties/cp_7a04b1c2d3e4f5a6b7c8d9e0 \
  -H "api-key: $FINCRA_API_KEY"
```

| Status        | Can you pay it? | What you do                |
| :------------ | :-------------- | :------------------------- |
| `pending`     | No              | Wait for the event.        |
| `active`      | Yes             | Send the payout.           |
| `failed`      | No              | Create a new counterparty. |
| `blacklisted` | No              | The block is one-way.      |

<Callout icon="📘" theme="info">
  ### A block sends no event

  `POST /v1/counterparties/{id}/blacklist` moves the status to `blacklisted` and returns the counterparty object. Read that response. Do not wait for an event.

  A partner can answer in minutes, or Fincra can wait up to 48 hours. Poll `GET /v1/counterparties/{id}` if you have no webhook endpoint yet. Stop after 48 hours and raise a support ticket.
</Callout>

Next: [Send a payout](doc:china-payouts-send-a-payout).
---
title: Payout to China (CNY/CNH)
excerpt: Guide to integrate payout to China
deprecated: false
hidden: true
metadata:
  keywords:
    - CNY
    - CNH
    - China
    - Payout
    - Supplier payments
  robots: index
---
This section covers the parameters and prerequisites needed to process payments to bank accounts in China. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-cny-payout). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. **If you are making onshore payouts (China mainland) use CNY and if you're making payout to offshore China (HongKong, Singapore) use CNH.**

## 1. Initiate CNY/CNH Payout

To successfully initiate a CNY or CNH payout, make sure you provide every field in the request body below and also read the prerequisite and ensure you have everything before initiating a CNY or CNH payout, to avoid any compliance delay, make sure you pass all the necessary supporting documents.

### Prerequisite

1. Make sure you have created CNY or CNH wallet on the dashboard and it is funded. You can fund it by initiating a conversion from any currency to CNY or CNH on the dashboard or via the [API](/docs/conversions).
2. Collect all the necessary supporting document from the sender.
3. Ensure IP address is whitelisted before initiating payouts in production environments

<Callout icon="❗️" theme="error">
  ### Note:

  Ensure you upload the required files for each payment purpose. For all payment for goods or trade, an invoice is required. If appropriate files are not uploaded, the payout would eventually be cancelled. **Each document must not be more than 5MB and the URL must be reachable publicly for at least 15 minutes.** View all payment purpose and required document [here](#required-document-types-per-purpose-of-fund).
</Callout>

### Request body

```json B2B
{
  "sourceCurrency": "NGN",
  "destinationCurrency": "CNY",
  "amount": 1500000.50,
  "business": "64f1c2a9b3e8d7f012345678",
  "customerReference": "PAYOUT-2026-07-14-0001",
  "paymentDestination": "bank_account",
  "paymentScheme": "cnaps",
  "quoteReference": "8f3a2b1c9d9b3e8d7",
  "relationshipWithBeneficiary": "supplier",
  "description": "Payment for electronics shipment - Invoice INV-2044",
  "feeBearer": "business",
  "beneficiary": {
    "type": "corporate",
    "firstName": "伟",
    "accountHolderName": "深圳市华信电子科技有限公司",
    "email": "finance@huaxin-electronics.cn",
    "phone": "+8613800138000",
    "accountNumber": "6222020200112345678",
    "country": "CN",
    "bankName": "Industrial and Commercial Bank of China",
    "bankSwiftCode": "102584000021",
    "registrationNumber": "91440300MA5F2K3X8Q",
    "incorporationCountry": "CN",
    "bankAddress": {
      "country": "CN",
      "state": "Guangdong",
      "zip": "518000",
      "city": "Shenzhen",
      "street": "88 Fuhua Road, Futian District"
    },
    "address": {
      "country": "CN",
      "state": "Guangdong",
      "zip": "518057",
      "city": "Shenzhen",
      "street": "12 Keji South Road, Nanshan District"
    }
  },
  "sender": {
    "type": "corporate",
    "name": "Acme Trading Limited",
    "email": "payments@acmetrading.com",
    "phone": "+2348012345678",
    "nationality": "NG",
    "address": {
      "country": "NG",
      "state": "Lagos",
      "zip": "101241",
      "city": "Lagos",
      "street": "14 Adeola Odeku Street, Victoria Island"
    },
    "idType": "business_registration_number",
    "idNumber": "RC1234567",
    "countryOfIncorporation": "NG"
  },
  "purposeOfFund": "goods_trade",
  "files": [
    "https://example.com/uploaded-invoice.pdf"
  ]
}
```
```json C2B
{
  "sourceCurrency": "NGN",
  "destinationCurrency": "CNY",
  "amount": 500000.00,
  "business": "64f1c2a9b3e8d7f012345678",
  "customerReference": "PAYOUT-C2B-2026-07-14-0002",
  "paymentDestination": "bank_account",
  "paymentScheme": "cnaps",
  "quoteReference": "3d7e9f2a1b345678",
  "relationshipWithBeneficiary": "vendor",
  "description": "Payment for freelance design services - Contract SC-0917",
  "feeBearer": "business",
  "beneficiary": {
    "type": "corporate",
    "firstName": "丽",
    "lastName": "王",
    "accountHolderName": "上海创意设计服务有限公司",
    "email": "billing@chuangyi-design.cn",
    "phone": "+8613912345678",
    "accountNumber": "6217003820011223344",
    "country": "CN",
    "bankName": "China Construction Bank",
    "bankSwiftCode": "105290000012",
    "registrationNumber": "91310115MA1K4L7T2W",
    "incorporationCountry": "CN",
    "bankAddress": {
      "country": "CN",
      "state": "Shanghai",
      "zip": "200120",
      "city": "Shanghai",
      "street": "900 Century Avenue, Pudong New District"
    },
    "address": {
      "country": "CN",
      "state": "Shanghai",
      "zip": "200235",
      "city": "Shanghai",
      "street": "45 Caobao Road, Xuhui District"
    }
  },
  "sender": {
    "type": "individual",
    "name": "Chinedu Okafor",
    "email": "chinedu.okafor@example.com",
    "phone": "+2348098765432",
    "nationality": "NG",
    "address": {
      "country": "NG",
      "state": "Lagos",
      "zip": "101283",
      "city": "Lagos",
      "street": "7 Bode Thomas Street, Surulere"
    },
    "idType": "international_passport",
    "idNumber": "A50123456",
    "countryOfOrigin": "NG"
  },
  "purposeOfFund": "payment_for_services",
  "files": [
    "https://example.com/uploaded-invoice.pdf"
  ]
}
```

### Response body

```json Payout Response
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": 14483,
        "reference": "dihqQLR5gobbGJAzgzfWks",
        "customerReference": "PAYOUT-2026-07-14-0001", 
        "status": "processing"
    }
}
```

## 2. Receive and validate webhooks

Ensure you setup your webhook URL on the dashboard so that you can listen for webhooks after initiating a payout.

```json Successful payout webhook
{
    "event": "payout.successful",
    "data": {
        "id": 14380,
        "amountCharged": 500000,
        "amountReceived": 2451.57,
        "recipient": {
            "name": "上海创意设计服务有限公司",
            "accountNumber": "6217003820011223344",
            "type": "corporate",
            "email": "billing@chuangyi-design.cn"
        },
        "fee": 150,
        "rate": 0.0049,
        "paymentScheme": "cnaps",
        "paymentDestination": "bank_account",
        "sourceCurrency": "NGN",
        "destinationCurrency": "CNY",
        "status": "successful",
        "createdAt": "2026-07-13T21:23:44.000Z",
        "updatedAt": "2026-07-13T21:23:50.000Z",
        "reference": "PAYOUT-C2B-2026-07-14-0002",
        "reason": "Payout was successful",
        "traceId": null,
        "valuedAt": "2026-07-13T21:23:50.000Z"
    }
}

```
```json Failed payout webhook
{
  "event": "payout.failed",
  "data": {
    "id": 14382,
    "amountCharged": 12150,
    "amountReceived": 12000,
    "recipient": {
      "name": "Hassan Sarz",
      "accountNumber": "0124775489",
      "type": "individual",
      "email": "aa@aa.com"
    },
    "fee": 150,
    "rate": 1,
    "paymentScheme": "fps",
    "paymentDestination": "bank_account",
    "sourceCurrency": "GBP",
    "destinationCurrency": "GBP",
    "status": "failed",
    "createdAt": "2022-02-21T03:51:53.000Z",
    "updatedAt": "2022-02-21T03:54:10.000Z",
    "reference": "9fd3f916-3b03-4bb2-af69-f42b64925919",
    "customerReference": "4555r4554",// would be included if its passed at the point where payout was initiated
    "reason": "Wrong beneficiary bank details",
    "traceId": null,
    "valuedAt": null
  }
}
```
```javascript Webhook validation
import crypto from "crypto";

const encryptedData =  crypto
      .createHmac("SHA512", merchantWebhookSecretKey)
      .update(JSON.stringify(payload)) 
      .digest("hex");
const signatureFromWebhook = req.headers['signature'];

if(encryptedData === signatureFromWebhook) {
  console.log("process");
} else {
  console.log("discard");
}
```

## 3. Verify Payout

It is **mandatory** to perform a transaction status query to verify that the payout is indeed successful and also the amount and references are correct. Check [verify payout endpoint](/reference/fetch-payout-by-customer-reference) for more details.

## Request payload details

| Field                       | Type   | Required | Notes                                                                                                                                                       |
| --------------------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sourceCurrency              | string | ✅        | Uppercased. Whole numbers only if the source currency is a zero-decimal currency.                                                                           |
| destinationCurrency         | string | ✅        | CNY or CNH (uppercased).                                                                                                                                    |
| amount                      | number | ✅        | Decimal allowed unless source currency is zero-decimal.                                                                                                     |
| business                    | string | ✅        | 24-character business id.                                                                                                                                   |
| customerReference           | string | ✅        | Merchant's unique reference.                                                                                                                                |
| paymentDestination          | string | ✅        | `bank_account` for CNY/CNH.                                                                                                                                 |
| paymentScheme               | string | ✅        | `cnaps` → CNY and CNH<br />`swift` → CNH only                                                                                                               |
| sender                      | object | ✅        | All fields required ([see sender object](#sender-object)).                                                                                                  |
| purposeOfFund               | string | ✅        | Reason for the payment. [See enum list below](#required-document-types-per-purpose-of-fund)                                                                 |
| files                       | array  | ✅        | Supporting document file(s) - [see document types](#required-document-types-per-purpose-of-fund)                                                            |
| relationshipWithBeneficiary | string | ✅        | One of the RelationshipWithBeneficiary enum values (e.g. employee, vendor, supplier, parents, self).                                                        |
| quoteReference              | string | optional | This is the reference generated for FX quote. Required for cross-currency payouts (e.g. NGN→CNY); optional only when source and destination currency match. |
| description                 | string | Optional | Free-text narration (min 1 char if present).                                                                                                                |
| feeBearer                   | string | Optional | Who bears the fee.                                                                                                                                          |
| beneficiary                 | object | ✅        | The receiver of the funds. [see beneficiary object](#beneficiary-object)                                                                                    |

### Beneficiary object

| Field                | Type   | Required          | Description / constraints                                                                                                             |
| -------------------- | ------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| type                 | string | ✅                 | `corporate` or `individual`                                                                                                           |
| firstName            | string | ✅                 | Beneficiary first name (for corporate, the contact/legal-rep first name must be in Chinese characters).                               |
| lastName             | string | individual only   | Beneficiary last name                                                                                                                 |
| accountHolderName    | string | ✅                 | Name on the bank account **exactly** as held at the beneficiary bank. Must match Chinese bank records or the payout will be returned. |
| email                | string | ✅                 | Valid email address.                                                                                                                  |
| phone                | string | ✅                 | Beneficiary phone number (include country code, e.g. +86...).                                                                         |
| accountNumber        | string | ✅                 | Beneficiary bank account number                                                                                                       |
| country              | string | ✅                 | ISO 3166-1 alpha-2 country code, uppercased — CN for domestic CNY beneficiaries.                                                      |
| bankName             | string | ✅                 | Full beneficiary bank name. _(Already enforced by the schema for CNY/CNH.)_                                                           |
| bankSwiftCode        | string | ✅                 | SWIFT/BIC of the beneficiary bank. **CNAPS code should be passed here for CNAPS payment scheme.**                                     |
| bankAddress          | object | ✅                 | Beneficiary bank's address — strict address shape ([see address object](#address-object) below).                                      |
| address              | object | ✅                 | Beneficiary's residential / registered address — strict address shape ([see address object](#address-object) below).                  |
| registrationNumber   | string | ✅ (for corporate) | Company registration number (must be Unified Social Credit Code).                                                                     |
| incorporationCountry | string | ✅ (for corporate) | Country of incorporation (ISO alpha-2).                                                                                               |

#### CNAPS code vs SWIFT/BIC

The `bankSwiftCode` field carries a different identifier depending on your `paymentScheme`:

| paymentScheme | Use when                                                                                                                  | Pass in `bankSwiftCode`                                          | Format                           | Example        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------- | -------------- |
| `cnaps`       | Onshore (mainland China) payouts in **CNY** — the faster, domestic rail                                                   | The beneficiary branch's CNAPS code — the interbank number (联行号) | 12 digits, numeric only          | `102584000021` |
| `swift`       | Offshore payouts in **CNH** (e.g. Hong Kong, Singapore), or CNY where the beneficiary bank requires international routing | The beneficiary bank's SWIFT/BIC                                 | 8 or 11 characters, alphanumeric | `ICBKCNBJSZN`  |

<Callout icon="❗️" theme="error">
  ### **The CNAPS code is branch-specific, not bank-wide.**

  Ask your beneficiary for the interbank number (联行号) of the exact branch holding the account — they can find it in their mobile banking app or bank statement. Passing a head-office code, a SWIFT/BIC under the `cnaps` scheme, or a code that isn't exactly 12 digits will cause the payout to fail or be returned.
</Callout>

### Address object

Applies to both `beneficiary.address` and `beneficiary.bankAddress`:

| Field   | Type   | Required | Constraints                                     |
| ------- | ------ | -------- | ----------------------------------------------- |
| country | string | ✅        | ISO 3166-1 alpha-2 (max 2 characters), e.g. CN. |
| state   | string | ✅        | Province / state, e.g. Guangdong.               |
| zip     | string | ✅        | Postal code.                                    |
| city    | string | ✅        | City, e.g. Shenzhen.                            |
| street  | string | ✅        | Street address line.                            |

### Sender object

| Field                  | Type   | Required           | Description / constraints                                                                          |
| ---------------------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------- |
| type                   | string | ✅                  | `individual` or `corporate`                                                                        |
| name                   | string | ✅                  | Full legal name of the sender (person or company).                                                 |
| email                  | string | ✅                  | Valid email address.                                                                               |
| phone                  | string | ✅                  | Sender phone number, including country code.                                                       |
| nationality            | string | ✅                  | Sender nationality (ISO alpha-2 recommended).                                                      |
| address                | object | ✅                  | Full sender address. Strict shape - [see address object](#address-object)                          |
| idType                 | string | ✅                  | One of: `national_id`, `international_passport`, `drivers_license`, `business_registration_number` |
| idNumber               | string | ✅                  | Sender ID number, max 30 characters.                                                               |
| countryOfOrigin        | string | ✅ (for individual) | Required for individual senders.                                                                   |
| countryOfIncorporation | string | ✅ (for corporate)  | Required for corporate senders.                                                                    |

### Required document types per purpose of fund

For each `purposeOfFund` there is a `documentType` mapped to it. These documents are collected upfront to reduce compliance RFI delays. Where multiple documents are listed for a single purpose, you are required to pass **all** the documents in the request body `files` array.

| purposeOfFund             | Required documentType(s)                        |
| ------------------------- | ----------------------------------------------- |
| `goods_trade`             | `invoice`                                       |
| `services_trade`          | `service_contract`                              |
| `payment_for_services`    | `service_contract`                              |
| `professional_services`   | `service_contract`                              |
| `information_services`    | `service_contract`                              |
| `transportation_services` | `service_contract`                              |
| `software_purchase`       | `purchase_agreement`                            |
| `construction_services`   | `construction_contract`                         |
| `employee_payroll`        | `payment_service_agreement`, `payroll_schedule` |

<br />

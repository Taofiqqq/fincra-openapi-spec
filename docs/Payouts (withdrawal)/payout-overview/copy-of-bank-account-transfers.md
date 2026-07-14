---
title: Payout to China (CNY/CNH)
excerpt: Guide to integrate payout to China
deprecated: false
hidden: true
metadata:
  robots: index
---
This section covers the parameters and prerequisites needed to process payments to bank accounts in China. Bank account transfers follow the same basic format: make a POST request to our [Payout API](/reference/initiate-payout). However, depending on the type of beneficiary and the account's currency, you might need to give some extra information. **If you are making onshore payouts (China mainland) use CNY and if you're making payout to offshore(HongKong, Singapore) China use CNH.**

## Initiate CNY/CNH Payout

To successfully initiate a CNY or CNH payout, make sure you provide every field in the request body below and also read the prerequisite and ensure you have everything before initiating a CNY or CNH payout, to avoid any compliance delay, make sure you pass all the necessary supporting documents.

### Prerequisite

1. Make sure you have created CNY or CNH wallet on the dashboard and it is funded. You can fund it by initiating a conversion from any currency to CNY or CNH on the dashboard or via the [API](/docs/conversions).
2. Collect all the necessary supporting document from the sender.

<Callout icon="❗️" theme="error">
  ### Note:

  Ensure you upload the required files for each payment purpose. For all payment for goods or trade, an invoice is required. If appropriate files are not uploaded, the payout would eventually be cancelled. View all payment purpose and required document here.
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
    "address": "14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria",
    "idType": "business_registration_number",
    "idNumber": "RC1234567",
    "countryOfIncorporation": "NG"
  },
  "purposeOfFund": "goods_trade",
  "files": [
    {
      "file": "<file_url>",
      "documentType": "invoice"
    }
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
  "feeBearer": "customer",
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
    "address": "7 Bode Thomas Street, Surulere, Lagos, Nigeria",
    "idType": "international_passport",
    "idNumber": "A50123456",
    "countryOfOrigin": "NG"
  },
  "purposeOfFund": "payment_for_services",
  "files": [
    {
      "file": "<file_url>",
      "documentType": "service_contract"
    }
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
        "reference": "PAYOUT-2026-07-14-0001",
        "customerReference": null, // this would be returned as your customer reference if it is sent in the request payload
        "status": "processing"
    }
}
```

## Request payload details

| Field                       | Type   | Required | Notes                                                                                                |
| --------------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------- |
| sourceCurrency              | string | ✅        | Uppercased. Whole numbers only if the source currency is a zero-decimal currency.                    |
| destinationCurrency         | string | ✅        | CNY or CNH (uppercased).                                                                             |
| amount                      | number | ✅        | Decimal allowed unless source currency is zero-decimal.                                              |
| business                    | string | ✅        | 24-character business id.                                                                            |
| customerReference           | string | ✅        | Merchant's unique reference.                                                                         |
| paymentDestination          | string | ✅        | `bank_account` for CNY/CNH.                                                                          |
| paymentScheme               | string | ✅        | `cnaps`                                                                                              |
| sender                      | object | ✅        | All fields required (see sender object).                                                             |
| purposeOfFund               | object | ✅        | Reason for the payment. See enum list below                                                          |
| files                       | array  | ✅        | Supporting document file(s) - see document types.                                                    |
| relationshipWithBeneficiary | string | ✅        | One of the RelationshipWithBeneficiary enum values (e.g. employee, vendor, supplier, parents, self). |
| quoteReference              | string | ✅        | Reference of the FX quote used for the payout.                                                       |
| description                 | string | Optional | Free-text narration (min 1 char if present).                                                         |
| feeBearer                   | string | Optional | Who bears the fee.                                                                                   |
| beneficiary                 | object | ✅        | The receiver of the funds. see beneficiary object                                                    |

## Beneficiary object

| Field                | Type   | Required          | Description / constraints                                                                                                             |
| -------------------- | ------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| type                 | string | ✅                 | `corporate` (corporate only)                                                                                                          |
| firstName            | string | ✅                 | Beneficiary first name (for corporate, the contact/legal-rep first name must be in Chinese characters). Trimmed.                      |
| accountHolderName    | string | ✅                 | Name on the bank account **exactly** as held at the beneficiary bank. Must match Chinese bank records or the payout will be returned. |
| email                | string | ✅                 | Valid email address.                                                                                                                  |
| phone                | string | ✅                 | Beneficiary phone number (include country code, e.g. +86...).                                                                         |
| accountNumber        | string | ✅                 | Beneficiary bank account number                                                                                                       |
| country              | string | ✅                 | ISO 3166-1 alpha-2 country code, uppercased — CN for domestic CNY beneficiaries.                                                      |
| bankName             | string | ✅                 | Full beneficiary bank name. _(Already enforced by the schema for CNY/CNH.)_                                                           |
| bankSwiftCode        | string | ✅                 | SWIFT/BIC of the beneficiary bank. **CNAPS code should be passed here for CNAPS payment scheme.**                                     |
| bankAddress          | object | ✅                 | Beneficiary bank's address — strict address shape (see here).                                                                         |
| address              | object | ✅                 | Beneficiary's residential / registered address — strict address shape (see here).                                                     |
| registrationNumber   | string | ✅ (for corporate) | Company registration number (must be Unified Social Credit Code).                                                                     |
| incorporationCountry | string | ✅ (for corporate) | Country of incorporation (ISO alpha-2).                                                                                               |

## Address object (strict)

Applies to both `beneficiary.address` and `beneficiary.bankAddress`:

| Field   | Type   | Required | Constraints                                     |
| ------- | ------ | -------- | ----------------------------------------------- |
| country | string | ✅        | ISO 3166-1 alpha-2 (max 2 characters), e.g. CN. |
| state   | string | ✅        | Province / state, e.g. Guangdong.               |
| zip     | string | ✅        | Postal code.                                    |
| city    | string | ✅        | City, e.g. Shenzhen.                            |
| street  | string | ✅        | Street address line.                            |

## Sender object&#x20;

| Field                  | Type   | Required           | Description / constraints                                                                          |
| ---------------------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------- |
| type                   | string | ✅                  | `individual` or `corporate`                                                                        |
| name                   | string | ✅                  | Full legal name of the sender (person or company).                                                 |
| email                  | string | ✅                  | Valid email address.                                                                               |
| phone                  | string | ✅                  | Sender phone number, including country code.                                                       |
| nationality            | string | ✅                  | Sender nationality (ISO alpha-2 recommended).                                                      |
| address                | string | ✅                  | Full sender address as a single string.                                                            |
| idType                 | string | ✅                  | One of: `national_id`, `international_passport`, `drivers_license`, `business_registration_number` |
| idNumber               | string | ✅                  | Sender ID number, max 30 characters.                                                               |
| countryOfOrigin        | string | ✅ (for individual) | Required for individual senders.                                                                   |
| countryOfIncorporation | string | ✅ (for corporate)  | Required for corporate senders.                                                                    |

## Required document types per purpose of fund

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

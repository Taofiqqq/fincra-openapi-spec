---
api:
  file: awesome-new-api.json
  operationId: initiate-mobile-money-payout-1-1
hidden: true
link:
  new_tab: false
metadata:
  robots: index
---
Sample Payload

```json B2B Payout
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
    "http://example.com/uploaded-invoice.pdf"
  ]
}
```
```json C2B Payout
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
    "https://example.com/uploaded-invoice.pdf"
  ]
}
```

<br />
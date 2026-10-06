---
title: PayShap Payout
excerpt: 'PayShap is a real-time payment scheme in South Africa. '
deprecated: false
hidden: false
metadata:
  robots: index
---
A PayShap ID is an alias for a bank account. The alias is a mobile number or a handle. PayShap works for ZAR only.

A merchant can use PayShap to pay a person who has a registered alias. The merchant does not need the account number.

### How a merchant uses PayShap

- A merchant does not need a different integration. The existing bank account calls work.
- The account type stays `bank_account`. There is no new type. Do not add a `payshap_id` type.
- The bank code is `PAYSHAP_ID`.
- We return `PAYSHAP_ID` in the South Africa bank list. The merchant receives it from the get-banks call. The merchant does not need a separate lookup.
- To resolve an account, the merchant sends the bank code `PAYSHAP_ID`. The merchant puts the full PayShap ID in `accountNumber`. No other change is necessary.
- To make a payout, the merchant does the same. The bank code is the same. The full PayShap ID goes in `accountNumber`.
- The merchant must send the full PayShap ID. This includes the characters after the `@`.
- We do not restrict the format of the alias. The example below shows the usual shape.

## **Resolve an account**

```text Request
POST /core/accounts/resolve
{
  "currency": "ZAR",
  "bankCode": "PAYSHAP_ID",
  "accountNumber": "0713058274@nedbank"
}
```
```text Response
{
  "success": true,
  "message": "Account resolve successful",
  "data": {
    "accountNumber": "0713058274@nedbank",
    "accountName": "Khanya Fresh Produce",
    "bankCode": "PAYSHAP_ID"
  }
}
```

In addition to the common details needed to process successful payments, the following fields are also required when sending money to a payshap Id in South Africa.

| Field                         | Mandatory | Type   | Description                                                                                                                                                                                                   |
| :---------------------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beneficiary                   | Yes       | Object | The recipient of the funds. Depending on the currency and beneficiary type, the properties of the beneficiaries are different.                                                                                |
| beneficiary.firstName         | Yes       | String | The first name of the beneficiary .                                                                                                                                                                           |
| beneficiary.lastName          | Yes       | String | The last name of the beneficiary                                                                                                                                                                              |
| beneficiary.accountHolderName | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.accountNumber     | Yes       | String | This field is required by all type of beneficiaries.                                                                                                                                                          |
| beneficiary.type              | Yes       | String | The type of beneficiary, see [beneficiary types](/docs/introduction-10#beneficiary-types) for more details                                                                                                    |
| beneficiary.country           | No        | String | The country in which the bank of the beneficiary is located. This field should be according to  [ISO 3166-1 alpha-2 codes](https://www.nationsonline.org/oneworld/country_code_list.htm) standards e.g NG, GB |
| beneficiary.email             | No        | String | The beneficiary's email                                                                                                                                                                                       |
| beneficiary.bankCode          | Yes       | String | For PayShap the value is PAYSHAP_ID                                                                                                                                                                           |

---
title: Virtual Account
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
virtualaccount.approved
-----------------------

This event is dispatched when an individual virtual account is approved

```json
{
 "event": "virtualaccount.approved",
 "data": {
   "id": "6212692ccb0e3e7ea8fdbba3",
   "business": "62126841cb0e3efe8efdbb6a",
   "isSubAccount": true,
   "currency": "GBP",
   "currencyType": "fiat",
   "status": "approved",
   "accountType": "individual",
   "accountInformation": {
     "accountNumber": "GBXXCLJU04130780008933",
     "bankName": null,
     "bankCode": "CLJU",
     "countryCode": "GB",
     "otherInfo": {
       "iban": "GBXXCLJU04130780008933",
       "accountNumber": "80008933",
       "checkNumber": "XX",
       "sortCode": "041307",
       "bankSwiftCode": null
     }
   },
   "accountOpeningFee": 0,
   "isPermanent": true,
   "virtualAccountType": "additional",
   "createdAt": "2022-02-20T16:15:40.476Z",
   "updatedAt": "2022-02-20T16:15:52.691Z"
 }
}
```

virtualaccount.approved (Corporate)
-----------------------------------

This event is dispatched when a corporate virtual account is approved

```json
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "62135abbcb0e3e0535fdc2ac",
    "business": "61aa4e72cc67b6f04d97f874",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "approved",
    "accountType": "corporate",
    "accountInformation": {
      "accountNumber": "GBXXCLJU04130780008933",
      "bankName": "Clear ahead",
      "bankAddress": "Washington",
      "accountName": " Ventures",
      "swiftCode": "909090"
    },
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "2022-02-21T09:26:19.167Z",
    "updatedAt": "2022-02-21T09:28:35.808Z"
  }
}
```

virtualaccount.declined
-----------------------

This event is dispatched when any virtual account is declined

```json
{
 "event": "virtualaccount.declined",
 "data": {
   "id": "62135156cb0e3e0117fdc287",
   "business": "62126841cb0e3efe8efdbb6a",
   "isSubAccount": true,
   "currency": "GBP",
   "currencyType": "fiat",
   "status": "declined",
   "accountType": "individual",
   "reason": "Ineligible Account Type. A virtual account cannot be created for this entity, as a license is required for the nature of business you carry out, without which we can’t complete the creation of your account.",
   "accountOpeningFee": 0,
   "virtualAccountType": "additional",
   "createdAt": "2022-02-21T08:46:14.177Z",
   "updatedAt": "2022-02-21T08:47:17.755Z"
 }
}
```

### Webhook Parameters And Description

| Data                                            | Description                                                                                                                                                |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data.id                                         | The unique ID generated for the virtual account                                                                                                            |
| data.business                                   | The ID of the parent business or subaccount that requested for the virtual account                                                                         |
| data.isSubAccount                               | The boolean value that discloses if the request was made by a sub-account or parent business                                                               |
| data.currency                                   | The virtual account currency                                                                                                                               |
| data.currencyType                               | The  type of currency                                                                                                                                      |
| data.status                                     | The  virtual account status                                                                                                                                |
| data.accountType                                | The  virtual account type                                                                                                                                  |
| data.accountInformation.accountNumber           | The  virtual account account number                                                                                                                        |
| data.accountInformation.bankName                | The  name of the bank in which the virtual account was created                                                                                             |
| data.accountInformation.bankCode                | The  code assigned to the bank                                                                                                                             |
| data.accountInformation.countryCode             | The  code assigned to the country                                                                                                                          |
| data.accountInformation.otherInfo.iban          | The  virtual account IBAN                                                                                                                                  |
| data.accountInformation.otherInfo.accountNumber | The  virtual account number                                                                                                                                |
| data.accountInformation.otherInfo.checkNumber   | The  virtual account check number                                                                                                                          |
| data.accountInformation.otherInfo.sortCode      | The virtual account  sort code   identifies both the bank and the branch where the virtual account was created and its used by banks in the United Kingdom |
| data.accountInformation.otherInfo.bankSwiftCode | The virtual account swift code identifies both the bank and the branch where the virtual account was created and it's recognized internationally           |
| data.accountInformation.swiftCode               | The virtual account swift code identifies both the bank and the branch where the virtual account was created and it's recognized internationally           |
| data.accountOpeningFee                          | The fee charged for opening a virtual account                                                                                                              |
| data.isPermanent                                | The  boolean value that discloses if the virtual account is a permanent or temporary virtual account                                                       |
| data.virtualAccountType                         | The  type of virtual account                                                                                                                               |
| data.createdAt                                  | The  timestamp the virtual account was requested                                                                                                           |
| data.updatedAt                                  | The  timestamp the virtual account was updated                                                                                                             |
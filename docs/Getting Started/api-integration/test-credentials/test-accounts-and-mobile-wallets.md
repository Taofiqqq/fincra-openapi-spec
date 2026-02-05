---
title: Test Accounts & Mobile Wallets
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
Use the following **sandbox-only** test accounts and mobile money numbers to simulate **name validation** and **payouts**. Each row indicates whether the scenario should **pass** or **fail** (see the _Sim Outcome_ column).

> **How to use**
>
> * For **name validation**, submit the account details exactly as shown.
> * For **payout tests**, amounts and currencies must match the currency shown for each account.
> * **Sim Outcome:** `Pass` = return a successful validation/payout response. `Fail` = return a rejection/failed validation message.

***

## 🇳🇬 Nigeria (NGN)

| Sim Outcome | Type | Institution     | Account Number | Account Name | Bank Code | BIC/SWIFT                | Branch (Code)         | City  |
| ----------- | ---- | --------------- | -------------- | ------------ | --------- | ------------------------ | --------------------- | ----- |
| **Fail**    | Bank | Access Bank Plc | 0123456789     | John Doe     | 044       | ABNGNGLAXXX / ABNGNGLA   | Victoria Island (001) | Lagos |
| **Pass**    | Bank | OPay            | 0987654321     | Grace Okoro  | 305       | –                        | Yaba (002)            | Lagos |
| **Pass**    | Bank | GTBank          | 2345678901     | Chinwe Eze   | 058       | GTBANKNGLXXX / GTBANKNGL | Ikeja (003)           | Lagos |

***

## 🇺🇬 Uganda (UGX)

| Sim Outcome | Type         | Institution                        | Account/Wallet Number | Account Name             | Bank Code | BIC/SWIFT              | Branch (Code)     | City    |
| ----------- | ------------ | ---------------------------------- | --------------------- | ------------------------ | --------- | ---------------------- | ----------------- | ------- |
| **Fail**    | Mobile Money | MTN Mobile                         | 256772123456          | Jane Doe                 | MTN       | –                      | –                 | –       |
| **Pass**    | Mobile Money | Airtel Money Uganda                | 256701234567          | David Owor               | AIRTEL    | –                      | –                 | –       |
| **Pass**    | Bank         | Stanbic Bank Uganda                | 1002003004            | Finance Bank Uganda Test | UG04000   | SBICUGKXXXX / SBICUGKX | Garden City (102) | Kampala |
| **Fail**    | Bank         | Standard Chartered Bank Uganda Ltd | 1002003014            | Finance Bank Uganda Test | STAN      | SCBLUGKAXXX / SCBLUGKA | Garden City (102) | Kampala |

***

## 🇰🇪 Kenya (KES)

| Sim Outcome | Type         | Institution                     | Account/Wallet Number | Account Name     | Bank Code | BIC/SWIFT              | Branch (Code) | City    |
| ----------- | ------------ | ------------------------------- | --------------------- | ---------------- | --------- | ---------------------- | ------------- | ------- |
| **Fail**    | Mobile Money | Safaricom (M-Pesa)              | 254712345678          | Peter Mwangi     | SAFARICOM | –                      | –             | –       |
| **Pass**    | Mobile Money | Airtel Money Kenya              | 254731234567          | Mary Atieno      | AIRTEL    | –                      | –             | –       |
| **Pass**    | Bank         | Kenya Commercial Bank Ltd (KCB) | 1000012345            | KCB Test Account | 01        | KCBLKENXXXX / KCBLKENX | JKIA (202)    | Nairobi |

***

## 🇬🇭 Ghana (GHS)

| Sim Outcome | Type         | Institution               | Account/Wallet Number | Account Name       | Bank Code | BIC/SWIFT              | Branch (Code) | City  |
| ----------- | ------------ | ------------------------- | --------------------- | ------------------ | --------- | ---------------------- | ------------- | ----- |
| **Fail**    | Mobile Money | MTN Mobile Money Ghana    | 233201234567          | Kwame Mensah       | MTN       | –                      | –             | –     |
| **Pass**    | Mobile Money | Airtel (Tigo) Money Ghana | 233541234567          | Ama Boateng        | AIRTEL    | –                      | –             | –     |
| **Pass**    | Bank         | Ecobank Ghana             | 4005006007            | Ecobank Ghana Test | GH130100  | ECOCGHACXXX / ECOCGHAC | Osu (302)     | Accra |

***

## 🇿🇲 Zambia (ZMW)

| Sim Outcome | Type         | Institution             | Account/Wallet Number | Account Name        | Bank Code | BIC/SWIFT              | Branch (Code) | City  |
| ----------- | ------------ | ----------------------- | --------------------- | ------------------- | --------- | ---------------------- | ------------- | ----- |
| **Fail**    | Mobile Money | Airtel Money Zambia     | 260971234567          | Chanda Mwape        | AIRTEL    | –                      | –             | –     |
| **Pass**    | Mobile Money | MTN Mobile Money Zambia | 260951234567          | Mutinta Phiri       | MTN       | –                      | –             | –     |
| **Pass**    | Bank         | Zanaco Bank             | 3004005006            | Zanaco Test Account | ZNCOZMLU  | ZNCOZMLUXXX / ZNCOZMLU | Mzuzu (402)   | Mzuzu |

> _Note: City/branch details above are placeholders for sandbox behavior and may not reflect live banking geography._

***

## 🇹🇿 Tanzania (TZS)

| Sim Outcome | Type         | Institution        | Account/Wallet Number | Account Name   | Bank Code | BIC/SWIFT              | Branch (Code) | City          |
| ----------- | ------------ | ------------------ | --------------------- | -------------- | --------- | ---------------------- | ------------- | ------------- |
| **Fail**    | Mobile Money | TIGO Money         | 255671234567          | Asha Juma      | TIGO      | –                      | –             | –             |
| **Pass**    | Mobile Money | Vodacom (M-Pesa)   | 255751234567          | Neema Said     | MPESA     | –                      | –             | –             |
| **Pass**    | Bank         | CRDB Bank Tanzania | 7008009001            | CRDB Bank Test | 21009678  | CORUTZTZXXX / CORUTZTZ | Ilala (502)   | Dar es Salaam |

***

## 🇷🇼 Rwanda (RWF)

| Sim Outcome | Type         | Institution         | Account/Wallet Number | Account Name        | Bank Code   | BIC/SWIFT              | Branch (Code) | City   |
| ----------- | ------------ | ------------------- | --------------------- | ------------------- | ----------- | ---------------------- | ------------- | ------ |
| **Fail**    | Mobile Money | MTN Mobile Money    | 250781234567          | Jean Uwimana        | MTN         | –                      | –             | –      |
| **Pass**    | Mobile Money | Airtel Money Rwanda | 250731234567          | Alice Habimana      | AIRTEL      | –                      | –             | –      |
| **Pass**    | Bank         | Bank of Kigali      | 8009001002            | Bank of Kigali Test | BKIGRWRWXXX | BKIGRWRWXXX / BKIGRWRW | Gisozi (602)  | Kigali |

***

## 🇨🇮 Côte d'Ivoire (XOF)

| Sim Outcome | Type         | Institution                | Account/Wallet Number | Account Name | Bank Code | BIC/SWIFT | Branch (Code) | City |
| ----------- | ------------ | -------------------------- | --------------------- | ------------ | --------- | --------- | ------------- | ---- |
| **Fail**    | Mobile Money | Orange Money Côte d'Ivoire | 2250701234567         | Kouassi Jean | ORANGE    | –         | –             | –    |
| **Pass**    | Mobile Money | MTN Mobile                 | 2250509876543         | Marie Koné   | MTN       | –         | –             | –    |

***

## 🇨🇲 Cameroon (XAF)

| Sim Outcome | Type         | Institution           | Account/Wallet Number | Account Name    | Bank Code | BIC/SWIFT | Branch (Code) | City |
| ----------- | ------------ | --------------------- | --------------------- | --------------- | --------- | --------- | ------------- | ---- |
| **Fail**    | Mobile Money | MTN Mobile            | 237671234567          | Mbappe Simon    | MTN       | –         | –             | –    |
| **Pass**    | Mobile Money | Orange Money Cameroon | 237651234567          | Ngassa Clarisse | ORANGE    | –         | –             | –    |

***

## **🇪🇬 Egypt (EGP)**

<Table>
  <thead>
    <tr>
      <th>
        Sim Outcome
      </th>

      <th>
        Type
      </th>

      <th>
        Institution
      </th>

      <th>
        Account/Wallet Number
      </th>

      <th>
        Account Name
      </th>

      <th>
        Bank Code
      </th>

      <th>
        BIC/SWIFT
      </th>

      <th>
        Branch (Code)
      </th>

      <th>
        City
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Fail**
      </td>

      <td>
        Wallet
      </td>

      <td>
        Vodafone
      </td>

      <td>
        201055555000
      </td>

      <td>
        Abdul Hassan
      </td>

      <td>
        -
      </td>

      <td>
        –
      </td>

      <td>
        –
      </td>

      <td>
        –
      </td>
    </tr>

    <tr>
      <td>
        **Fail**
      </td>

      <td>
        Bank
      </td>

      <td>
        Commercial International Bank
      </td>

      <td>
        100045022000
      </td>

      <td>
        Mohammed  
        Abdul
      </td>

      <td>
        CIB
      </td>

      <td>
        CIBEEGCXXXX
      </td>

      <td>
        –
      </td>

      <td>
        –
      </td>
    </tr>

    <tr>
      <td>
        **Fail**
      </td>

      <td>
        Cash Pickup
      </td>

      <td>
        BANQUE DU CAIRE
      </td>

      <td>
        201055555000
      </td>

      <td>
        Yusuf Hassan
      </td>

      <td>
        BDC
      </td>

      <td>
        BCAIEGCXXXX
      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        **Pass**
      </td>

      <td>
        Wallet
      </td>

      <td>
        Vodafone
      </td>

      <td>
        201055555001
      </td>

      <td>
        Abdul Hassan
      </td>

      <td>
        -
      </td>

      <td>
        -
      </td>

      <td>
        -
      </td>

      <td>
        -
      </td>
    </tr>

    <tr>
      <td>
        **Pass**
      </td>

      <td>
        Bank
      </td>

      <td>
        Commercial International Bank
      </td>

      <td>
        100045022001
      </td>

      <td>
        Mohammed  
        Abdul
      </td>

      <td>
        CIB
      </td>

      <td>
        CIBEEGCXXXX
      </td>

      <td>
        -
      </td>

      <td>
        -
      </td>
    </tr>

    <tr>
      <td>
        **Pass**
      </td>

      <td>
        Cash Pickup
      </td>

      <td>
        BANQUE DU CAIRE
      </td>

      <td>
        201055555001
      </td>

      <td>
        Yusuf Hassan
      </td>

      <td>
        BDC
      </td>

      <td>
        BCAIEGCXXXX
      </td>

      <td>
        -
      </td>

      <td>
        -
      </td>
    </tr>
  </tbody>
</Table>

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

## 🌎 FX Currencies (USD / EUR / GBP) — Dummy Bank Accounts

> These are **dummy IBAN/Routing** examples for sandbox flows that require international details. Use only in **test**; not valid for live banking.

### 🇺🇸 USD (United States)

| Institution     | Account Number | Account Name        | Routing / Bank Code | BIC/SWIFT | City        | Sim Outcome |
| --------------- | -------------- | ------------------- | ------------------- | --------- | ----------- | ----------- |
| Chase Bank      | 123456789      | John Doe USD Test   | 021000021           | CHASUS33  | New York    | **Pass**    |
| Bank of America | 987654321      | Jane Smith USD Test | 026009593           | BOFAUS3N  | Los Angeles | **Pass**    |

### 🇪🇺 EUR (IBAN examples)

| Institution       | IBAN / Account Number  | Account Name      | Bank Code | BIC/SWIFT | City      | Sim Outcome |
| ----------------- | ---------------------- | ----------------- | --------- | --------- | --------- | ----------- |
| NatWest Bank (UK) | GB29NWBK60161331926819 | John Doe EUR Test | NWBK      | NWBKGB2L  | London    | **Pass**    |
| Commerzbank (DE)  | DE89370400440532013000 | Jane Smith        | COBA      | COBADEFF  | Frankfurt | **Pass**    |

### 🇬🇧 GBP (United Kingdom)

| Institution  | IBAN / Account Number  | Account Name | Bank Code | BIC/SWIFT | City   | Sim Outcome |
| ------------ | ---------------------- | ------------ | --------- | --------- | ------ | ----------- |
| NatWest Bank | GB29NWBK60161331926819 | John Doe     | NWBK      | NWBKGB2L  | London | **Pass**    |

***

### Notes & Disclaimers

* These credentials are **for sandbox only** and should not be used in production.
* Field presence (e.g., BIC/SWIFT, branch codes) mirrors typical live requirements but is simplified for testing.
* If you need **additional pass/fail scenarios** (e.g., insufficient funds, name mismatch), we can add more rows per country.

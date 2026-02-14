---
title: Request FCY Account [Corporate]
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
Fincra enables businesses to generate corporate foreign currency (FCY) virtual accounts. These accounts enable registered businesses to receive cross-border payments in supported currencies such as USD, EUR, GBP, and CAD providing a seamless and efficient way to manage international transactions.

This document walks you through the process of collecting the required information and submitting a request for a corporate FCY virtual account.

> This is different from **individual** FCY accounts — see [here](https://docs.fincra.com/docs/request-fcy-virtual-account) for the individual account flow.

API Reference: [create virtual account endpoint](/reference/create-fcy-virtual-account)

> 📘 Important
>
> * Funds received by a virtual account created, settles in the respective currency balance of the merchant.
> * Monthly limit per virtual account is 10,000 USD/GBP
> * The USD account supports ACH, SWIFT and Fedwire transactions, ensuring swift and efficient payments.
> * The EUR account supports SEPA and SEPA Instant ensuring swift and efficient payments across Europe.
> * The GBP account supports FPS and CHAPS ensuring swift and efficient payments.
> * The CAD account supports Interac Etransfer ensuring swift and efficient payments across Canada.
> * To ensure compliance, it's important to note the [prohibited activities and countries ](mcy-prohibited-activities-and-countries)restricted from having access to this product.
> * Check possible verification errors that may occur during account request [here](mcy-account-verification-errors).
> * Consult the guide [here](mcy-required-information-and-documents), for more information on how to treat requests for information on an expected deposit/inflow.
> * You can check out our FAQ section for more [information](mcy-accounts-faqs).

## Available Currencies

Virtual accounts are currently available in the following currencies :

| Currency Name   | Currency Code | Payment Schemes        | Availability |
| :-------------- | :------------ | :--------------------- | :----------- |
| US Dollar       | USD           | ACH, SWIFT and Fedwire | Yes          |
| EURO            | EUR           | SEPA, SEPA Instant     | Yes          |
| British  Pounds | GBP           | FPS, CHAPS             | Yes          |
| CAD Dollar      | CAD           | Interac Etransfer      | Yes          |

## API Guide

### 1 - Collect Customer Details

To create a virtual account, you'll need to pass information such as currency, accountType, meansOfID KYCInformation, etc.

Please find below the request parameters for the endpoint.

| Field                                                              | Mandatory   | Type                | Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------ | ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| currency                                                           | Yes         | string              | The virtual account currency. E.g., USD                                                                                                                                                                                                                      |
| accountType                                                        | Yes         | string              | `corporate` for corporate accounts.                                                                                                                                                                                                                          |
| entityName                                                         | Yes         | string              | Registered legal name of the business entity.                                                                                                                                                                                                                |
| reason                                                             | Yes         | string              | Short reason or purpose for the account request (e.g., `Recieving payments`, `Live onboarding`).                                                                                                                                                             |
| purpose                                                            | Yes         | string              | Purpose of the account. Accepted value: `third_party`.                                                                                                                                                                                                       |
| utilityBill                                                        | Yes         | string/file         | Recent utility bill or valid address proof document (within 3 months). This can be a File Upload or a URL link to the document.                                                                                                                              |
| bankStatement                                                      | No          | string/file         | Bank statement as address proof. Required if used as `utilityBill`. This can be a File Upload or a URL link to the document.                                                                                                                                 |
| incorporationDocuments                                             | Yes         | string/file         | Incorporation documents like CAC certificate. Pass multiple files if necessary. This can be a File Upload or a URL link to the document.                                                                                                                     |
| articleOfIncorporation                                             | Yes         | string/file         | Articles of Incorporation document outlining business setup. This can be a File Upload or a URL link to the document. This can be a File Upload or a URL link to the document.                                                                               |
| sourceOfFunds                                                      | Yes         | string/file         | Document that explains source of funds for account activity. This can be a File Upload or a URL link to the document.                                                                                                                                        |
| leaseAgreement                                                     | No          | string/file         | Valid lease/rental agreement of business premises. This can be a File Upload or a URL link to the document.                                                                                                                                                  |
| beneficialOwnershipCertificate                                     | Yes         | string/file         | Certificate listing all beneficial owners. [Download the form here](https://fincradevbucket.s3.amazonaws.com/va_documents/BeneficialOwnershipCertificate_0ecaef00-8b8f-4ba3-9c2f-1b942a682735.pdf). This can be a File Upload or a URL link to the document. |
| **KYCInformation**                                                 | Yes         | object              | Detailed information about the corporate entity, including structure, business, ownership, and contacts.                                                                                                                                                     |
| KYCInformation.email                                               | Yes         | string              | Primary contact email for the business.                                                                                                                                                                                                                      |
| KYCInformation.website                                             | Yes         | string              | Company website (if available).                                                                                                                                                                                                                              |
| KYCInformation.phone                                               | Yes         | string              | Official contact number.                                                                                                                                                                                                                                     |
| **KYCInformation.address**                                         | Yes         | object              | Registered address of the business.                                                                                                                                                                                                                          |
| KYCInformation.address.countryOfResidence                          | Yes         | string              | Country (ISO 3166-1 alpha-2). E.g., `NG`                                                                                                                                                                                                                     |
| KYCInformation.address.state                                       | Yes         | string              | State within the country.                                                                                                                                                                                                                                    |
| KYCInformation.address.city                                        | Yes         | string              | City of operation.                                                                                                                                                                                                                                           |
| KYCInformation.address.street                                      | Yes         | string              | Street name of address.                                                                                                                                                                                                                                      |
| KYCInformation.address.zip                                         | Yes         | string              | Postal or ZIP code of the location.                                                                                                                                                                                                                          |
| KYCInformation.address.number                                      | Yes         | string              | Building or unit number.                                                                                                                                                                                                                                     |
| **KYCInformation.businessPartners**                                | Yes         | object[]            | An array of objects, mapping business partners you expect to receive inflows from into this account                                                                                                                                                          |
| KYCInformation.businessPartners.name                               | Yes         | string              | Registered name of the business partner.                                                                                                                                                                                                                     |
| KYCInformation.businessPartners.incorporationCountryCode           | Yes         | string              | ISO 3166-1 alpha-2 code of the country where the partner is incorporated. E.g, NG, US, etc                                                                                                                                                                   |
| KYCInformation.businessPartners.plannedTransfersQuantityMonth      | Yes         | integer             | Estimated number of transfers expected to be made per month.                                                                                                                                                                                                 |
| KYCInformation.businessPartners.plannedTransfersEurVolumeMonth     | Yes         | integer             | Estimated total monthly volume of transfers in euros (EUR).                                                                                                                                                                                                  |
| KYCInformation.businessPartners.basisPartnership                   | Yes         | string              | Nature or basis of the business relationship (e.g., Distribution, Reseller).                                                                                                                                                                                 |
| KYCInformation.businessPartners.website                            | Yes         | string              | Official website URL of the business partner.                                                                                                                                                                                                                |
| KYCInformation.tradingName                                         | Yes         | string              | Operating or trade name if different from registration name. Pass registration name if same as trading name.                                                                                                                                                 |
| KYCInformation.businessRegistrationName                            | Yes         | string              | Legal name under which the company is registered.                                                                                                                                                                                                            |
| KYCInformation.businessRegistrationNumber                          | Yes         | string              | Company registration number with authorities.                                                                                                                                                                                                                |
| KYCInformation.businessRegistrationCountry                         | Yes         | string              | Country of incorporation (ISO 3166-1 alpha-2).                                                                                                                                                                                                               |
| KYCInformation.taxCountry                                          | Yes         | string              | Country for which tax is filed. ISO 3166-1 alpha-2 format.                                                                                                                                                                                                   |
| KYCInformation.taxIdentificationNumber                             | No          | string              | Company's TIN. Required for certain jurisdictions.                                                                                                                                                                                                           |
| KYCInformation.directorsName                                       | Yes         | string              | Full name of one or more directors.                                                                                                                                                                                                                          |
| KYCInformation.incorporationCountryCode                            | Yes         | string              | Country where business is incorporated.                                                                                                                                                                                                                      |
| KYCInformation.incorporationDate                                   | Yes         | string (YYYY-MM-DD) | Date of incorporation.                                                                                                                                                                                                                                       |
| KYCInformation.primaryBusinessDescription                          | Yes         | string              | Brief description of business operations.                                                                                                                                                                                                                    |
| KYCInformation.primaryBusiness                                     | Yes         | string              | Specific business activity. See `VirtualAccountPrimaryBusiness`. E.g., `fintech`, `ecommerce`, `consulting`.                                                                                                                                                 |
| KYCInformation.businessCategory                                    | Yes         | string              | Broad industry. See `VirtualAccountBusinessCategory`. E.g., `fintech`, `retail`, `insurance`.                                                                                                                                                                |
| KYCInformation.businessCategoryDescription                         | Yes         | string              | Expanded description of the business category.                                                                                                                                                                                                               |
| KYCInformation.companyType                                         | Yes         | string              | Legal entity type. See `VirtualAccountCompanyType`. E.g., `limited_liability_company`, `corporation`, `sole_proprietorship`.                                                                                                                                 |
| KYCInformation.regulator                                           | Yes         | string              | The name of the regulating body, e.g., `CAC`.                                                                                                                                                                                                                |
| KYCInformation.regulationNumber                                    | Yes         | string              | Registration or license number with the regulator.                                                                                                                                                                                                           |
| KYCInformation.regulationStatus                                    | Yes         | string              | Company’s regulation state. Accepted values: `registered`, `regulated`, `licensed`, `none`, `not_required`.                                                                                                                                                  |
| KYCInformation.estimatedMonthlyTurnover                            | Yes         | string              | Approximate revenue per month.                                                                                                                                                                                                                               |
| KYCInformation.projectedMonthlyInflow                              | Yes         | string              | Expected incoming funds monthly.                                                                                                                                                                                                                             |
| KYCInformation.projectedMonthlyOutflow                             | Yes         | string              | Expected outgoing funds monthly.                                                                                                                                                                                                                             |
| KYCInformation.annualIncome                                        | Yes         | string              | Expected annual income                                                                                                                                                                                                                                       |
| KYCInformation.projectedMonthlyTransactionCount                    | Yes         | string              | Expected number of monthly transactions.                                                                                                                                                                                                                     |
| KYCInformation.projectedTransactionFrequency                       | Yes         | string              | Frequency of transactions. Accepted values: `daily`, `weekly`, `biweekly`, `monthly`, `quarterly`, `semi_annually`. View enum values [here](/docs/enum-values-for-fcy-virtual-account#virtualaccounttransactionfrequency).                                   |
| KYCInformation.primarySourceOfFunds                                | Yes         | string              | Source of funds. Options: `salary`, `business_income`, `investment`, `gift`, `inheritance`, `real_estate`, `loan`, `pension`, `grant`, `trust`, `crypto`, `other`.                                                                                           |
| KYCInformation.tradeInternationally                                | Yes         | boolean             | Whether the business trades internationally.                                                                                                                                                                                                                 |
| KYCInformation.countriesOfOperation                                | Yes         | array               | List of countries where the business operates.                                                                                                                                                                                                               |
| KYCInformation.fundsTransferCorridors                              | Yes         | array               | Countries the business sends or receives money from.                                                                                                                                                                                                         |
| KYCInformation.expectedCounterparties                              | Yes         | array               | Expected transaction counterparties. Options: `self`, `suppliers`, `customers`, `employees`, `contractors`, `friends`, `family`. View enum values [here](/docs/enum-values-for-fcy-virtual-account#virtualaccountcounterparty)                               |
| **KYCInformation.ultimateBeneficialOwners**                        | Yes         | array[]             | An array of objects, mapping all beneficial owners in the business                                                                                                                                                                                           |
| KYCInformation.ultimateBeneficialOwners.lastName                   | Yes         | string              | Surname of the ultimate beneficial owner.                                                                                                                                                                                                                    |
| KYCInformation.ultimateBeneficialOwners.firstName                  | Yes         | string              | First name of the ultimate beneficial owner.                                                                                                                                                                                                                 |
| KYCInformation.ultimateBeneficialOwners.middleName                 | No          | string              | Middle name of the ultimate beneficial owner, if applicable.                                                                                                                                                                                                 |
| **KYCInformation.ultimateBeneficialOwners.document**               | Yes         | array               | The identity document details for the beneficial owner                                                                                                                                                                                                       |
| KYCInformation.ultimateBeneficialOwners.document.type              | Yes         | string (enum)       | Type of identification document (e.g., passport, national_id, driver's_license).                                                                                                                                                                             |
| KYCInformation.ultimateBeneficialOwners.document.number            | Yes         | string              | Identification document number.                                                                                                                                                                                                                              |
| KYCInformation.ultimateBeneficialOwners.document.issuedCountryCode | Yes         | string (ISO 3166-1) | Country code where the document was issued (e.g., NG for Nigeria).                                                                                                                                                                                           |
| KYCInformation.ultimateBeneficialOwners.document.issuedBy          | Yes         | string              | Name of the authority that issued the document.                                                                                                                                                                                                              |
| KYCInformation.ultimateBeneficialOwners.document.issuedDate        | Yes         | string (YYYY-MM-DD) | Date when the document was issued.                                                                                                                                                                                                                           |
| KYCInformation.ultimateBeneficialOwners.document.expirationDate    | Yes         | string (YYYY-MM-DD) | Expiry date of the identification document.                                                                                                                                                                                                                  |
| KYCInformation.ultimateBeneficialOwners.politicallyExposedPerson   | Yes         | boolean             | Indicates whether the individual is a politically exposed person (PEP).                                                                                                                                                                                      |
| KYCInformation.ultimateBeneficialOwners.beneficialOwnerType        | Yes         | string (enum)       | Role of the individual, e.g., beneficial_owner, shareholder, or director.                                                                                                                                                                                    |
| KYCInformation.ultimateBeneficialOwners.emailAddress               | Yes         | string (email)      | Email address of the beneficial owner.                                                                                                                                                                                                                       |
| **KYCInformation.ultimateBeneficialOwners.address**                | Yes         | array               | Address information of the beneficial owner                                                                                                                                                                                                                  |
| KYCInformation.ultimateBeneficialOwners.address.state              | Yes         | string              | State or province of residence.                                                                                                                                                                                                                              |
| KYCInformation.ultimateBeneficialOwners.address.city               | Yes         | string              | City of residence.                                                                                                                                                                                                                                           |
| KYCInformation.ultimateBeneficialOwners.address.street             | Yes         | string              | Street address.                                                                                                                                                                                                                                              |
| KYCInformation.ultimateBeneficialOwners.address.zip                | No          | string              | ZIP or postal code.                                                                                                                                                                                                                                          |
| KYCInformation.ultimateBeneficialOwners.address.countryOfResidence | Yes         | string (ISO 3166-1) | Country code of residence.                                                                                                                                                                                                                                   |
| KYCInformation.ultimateBeneficialOwners.address.number             | No          | string              | House or building number.                                                                                                                                                                                                                                    |
| KYCInformation.ultimateBeneficialOwners.phoneNumber                | Yes         | string              | Contact phone number of the beneficial owner.                                                                                                                                                                                                                |
| KYCInformation.ultimateBeneficialOwners.taxNumber                  | Yes         | string              | Tax identification number of the beneficial owner.                                                                                                                                                                                                           |
| KYCInformation.ultimateBeneficialOwners.taxCountry                 | Yes         | string (ISO 3166-1) | Country associated with the tax number.                                                                                                                                                                                                                      |
| KYCInformation.ultimateBeneficialOwners.nationality                | Yes         | string (ISO 3166-1) | Nationality of the individual.                                                                                                                                                                                                                               |
| KYCInformation.ultimateBeneficialOwners.citizenships               | Yes         | string[]            | List of country codes where the individual holds citizenship.                                                                                                                                                                                                |
| KYCInformation.ultimateBeneficialOwners.dateOfBirth                | Yes         | string (YYYY-MM-DD) | Date of birth of the beneficial owner.                                                                                                                                                                                                                       |
| KYCInformation.ultimateBeneficialOwners.percentageOwnership        | Yes         | string (numeric)    | Percentage of ownership held by the individual in the business.                                                                                                                                                                                              |
| KYCInformation.ultimateBeneficialOwners.title                      | No          | string              | Professional or organizational title (e.g., CEO, Director).                                                                                                                                                                                                  |
| KYCInformation.ultimateBeneficialOwners.usResidencyStatus          | Yes         | string (enum)       | U.S. residency status. Common values: resident, non_resident.                                                                                                                                                                                                |
| KYCInformation.ultimateBeneficialOwners.meansOfId                  | Yes         | string/file         | Identification document. This can be a File Upload or a URL link to the document.                                                                                                                                                                            |
| KYCInformation.ultimateBeneficialOwners.utilityBill                | Yes         | string/file         | Recent utility bill for address verification. This can be a File Upload or a URL link to the document.                                                                                                                                                       |
| KYCInformation.ultimateBeneficialOwners.bankStatement              | Yes         | string/file         | Recent bank statement. This can be a File Upload or a URL link to the document.                                                                                                                                                                              |
| KYCInformation.regulatoryEvidence                                  | Conditional | string/file         | Supporting document where regulation status is not "regulated" or "licensed"                                                                                                                                                                                 |
| merchantReference                                                  | Yes         | string              | A reference you can use to track the request.                                                                                                                                                                                                                |

#### Accepted identity documents for FCY virtual account

| Document               | API Value | Currency           | Description                                                                                                                                                             |
| :--------------------- | :-------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| International Passport | passport  | USD, EUR, GBP, CAD | The International passport of the customer (This is the only ID type where a string url is accepted as the "`meansOfId`", payload. For the rest, an array is expected.) |

### 2 - Request a virtual account

Make an API request to the [create virtual account endpoint](/reference/create-fcy-virtual-account).

Endpoint:

```coffeescript POST
{{base_url}}/profile/virtual-accounts/requests
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/requests' \
--header 'api-key: <Your API secret key>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
```

Payload:

```json Individual
{
  "currency": "USD",
  "accountType": "corporate",
  "entityName": "Example Corp Inc.",
  "reason": "Demo Submission",
  "purpose": "third_party",
  "utilityBill": "https://example-bucket.s3.amazonaws.com/dummy_utility_bill.pdf",
  "bankStatement": "https://example-bucket.s3.amazonaws.com/dummy_bank_statement.pdf",
  "incorporationDocuments": [
    "https://example-bucket.s3.amazonaws.com/dummy_doc_1.pdf",
    "https://example-bucket.s3.amazonaws.com/dummy_doc_2.pdf"
  ],
  "articleOfIncorporation": "https://example-bucket.s3.amazonaws.com/dummy_article_incorp.pdf",
  "sourceOfFunds": "https://example-bucket.s3.amazonaws.com/dummy_source_funds.pdf",
  "leaseAgreement": "https://example-bucket.s3.amazonaws.com/dummy_lease_agreement.pdf",
  "beneficialOwnershipCertificate": "https://example-bucket.s3.amazonaws.com/dummy_boc.pdf",
  "regulatoryEvidence": "https://example-bucket.s3.amazonaws.com/dummy_regulatory_evidence.pdf"
  "KYCInformation": {
    "email": "contact@example.com",
    "website": "https://example.com",
    "phone": "08010000000",
    "address": {
      "state": "Abuja",
      "city": "Abuja",
      "street": "123 Business Avenue",
      "zip": "900001",
      "countryOfResidence": "NG",
      "number": "123"
    },
    "businessPartners": [
      {
        "name": "Alpha Traders Ltd.",
        "incorporationCountryCode": "UK",
        "plannedTransfersQuantityMonth": 40,
        "plannedTransfersEurVolumeMonth": 75000,
        "basisPartnership": "Distribution",
        "website": "https://alphatraders.uk"
      }
    ],
    "tradingName": "Demo Trade",
    "businessRegistrationName": "Demo Trade Ltd.",
    "businessRegistrationNumber": "123456789",
    "businessRegistrationCountry": "NG",
    "taxCountry": "NG",
    "directorsName": "John Smith",
    "incorporationCountryCode": "NG",
    "taxIdentificationNumber": "TX-00012345",
    "annualIncome: "50,000",
    "estimatedMonthlyTurnover": "60000",
    "projectedMonthlyInflow": "120000",
    "projectedMonthlyOutflow": "95000",
    "projectedTransactionFrequency": "biweekly",
    "projectedMonthlyTransactionCount": "8",
    "primarySourceOfFunds": "sales_revenue",
    "countriesOfOperation": [
      "NG"
    ],
    "fundsTransferCorridors": [
      "NG",
      "KE"
    ],
    "regulationNumber": "1234567",
    "regulator": "FRCN",
    "regulationStatus": "registered",
    "incorporationDate": "2021-05-15",
    "primaryBusinessDescription": "A technology services firm in West Africa",
    "primaryBusiness": "technology",
    "businessCategoryDescription": "A technology services firm in West Africa",
    "companyType": "limited_liability_company",
    "riskRating": "medium",
    "expectedCounterparties": [
      "clients",
      "vendors"
    ],
    "businessCategory": "technology",
    "tradeInternationally": false,
    "ultimateBeneficialOwners": [
      {
        "lastName": "Doe",
        "firstName": "Alex",
        "middleName": "",
        "document": {
          "type": "passport",
          "number": "A12345678",
          "issuedCountryCode": "NG",
          "issuedBy": "government",
          "issuedDate": "2021-01-01",
          "expirationDate": "2026-12-31"
        },
        "politicallyExposedPerson": false,
        "beneficialOwnerType": "beneficial_owner",
        "emailAddress": "alex.doe@example.com",
        "address": {
          "state": "Abuja",
          "city": "Abuja",
          "street": "123 Business Avenue",
          "zip": "900001",
          "countryOfResidence": "NG",
          "number": "123"
        },
        "phoneNumber": "07010000000",
        "taxNumber": "TX-00098765",
        "taxCountry": "NG",
        "nationality": "NG",
        "citizenships": [
          "NG"
        ],
        "dateOfBirth": "1985-07-20",
        "percentageOwnership": "25",
        "title": "CEO",
        "usResidencyStatus": "non_resident",
        "meansOfId": "https://example-bucket.s3.amazonaws.com/dummy_passport.pdf",
        "utilityBill": "https://example-bucket.s3.amazonaws.com/dummy_utility.pdf",
        "bankStatement": "https://example-bucket.s3.amazonaws.com/dummy_bank.pdf"
      }
    ]
  },
  "paymentFlowDescription": "collection via API",
  "merchantReference": "00000000-0000-0000-0000-000000000000"
}

```
```json Corporate Request
{
    "currency": "GBP",
    "accountType": "corporate",
    "purpose": "third_party", 
    "merchantReference": "{{$randomBankAccountBic}}",
    "KYCInformation": {
        "businessRegistrationName": "Meenah Books",
        "businessRegistrationNumber": "1238##3919954",
        "businessRegistrationCountry": "NG",
        "tradingName": "Meenah Books",
        "email": "mina@email.com",
        "phone": "+1415df52671JJJ",
        "website": "https://www.website.com",
        "address": {
            "countryOfResidence": "US",
            "state": "NY",
            "city": "New York",
            "zip": "10000",
            "street": "Business Ave",
            "number": "456"
        },
        "directorsName": "Minat Bel",
        "incorporationDate": "2000-01-15",
        "incorporationCountryCode": "US",
        "taxIdentificationNumber": "12-34g589",
        "taxCountry": "US",
        "companyType": "corporation",
        "primarySourceOfFunds": "business_income",
        "businessCategory": "retail",
        "businessCategoryDescription": "Technology services and software development",
        "primaryBusiness": "software",
        "primaryBusinessDescription": "Software development and consulting services",
        "estimatedMonthlyTurnover": "50000",
        "projectedMonthlyInflow": "60000",
        "projectedMonthlyOutflow": "40000",
        "projectedTransactionFrequency": "daily",
        "projectedMonthlyTransactionCount": "500",
        "riskRating": "low",
        "regulationStatus": "registered",
        "regulator": "SEC",
        "regulationNumber": "REG-15645",
        "annualIncome": "500000", 
        "fundsTransferCorridors": [
            "US",
            "GB",
            "EU"
        ],
        "countriesOfOperation": [
            "US",
            "CA",
            "GB"
        ],
        "expectedCounterparties": [
            "customers",
            "friends"
        ],
        "tradeInternationally": true,
        "ultimateBeneficialOwners": [
            {
                "firstName": "John",
                "lastName": "Doe",
                "middleName": "Michael",
                "dateOfBirth": "1000-01-01",
                "nationality": "US",
                "citizenships": [
                    "US"
                ],
                "emailAddress": "john.doe@example.com",
                "phoneNumber": "+14552671",
                "address": {
                    "countryOfResidence": "US",
                    "state": "NY",
                    "city": "New York",
                    "zip": "10000",
                    "street": "789 Owner St",
                    "number": "789"
                },
                "taxCountry": "US",
                "taxNumber": "123-45-679",
                "beneficialOwnerType": "beneficial_owner",
                "usResidencyStatus": "resident",
                "politicallyExposedPerson": false,
                "percentageOwnership": "51",
                "title": "CEO",
                "document": {
                    "type": "passport",
                    "number": "B00000",
                    "issuedCountryCode": "US",
                    "issuedBy": "US Department of State",
                    "issuedDate": "2000-01-01",
                    "expirationDate": "2030-01-01"
                },
                "meansOfId": "https://i.ibb.co/YFjRYfzj/1000074297.png",
                "utilityBill": "https://i.ibb.co/YFjRYfzj/1000074297.png"
            }
        ],
        "businessPartners": []
    },
    "metadata": {
        "customerid": "12355344",
        "type": "blueee"
    },
    "regulatoryEvidence": "https://i.ibb.co/YFjRYfzj/1000074297.png", 
    "incorporationDocuments": "https://i.ibb.co/YFjRYfzj/1000074297.png",
    "articleOfIncorporation": "https://i.ibb.co/YFjRYfzj/1000074297.png",
    "beneficialOwnershipCertificate": "https://i.ibb.co/YFjRYfzj/1000074297.png",
    "sourceOfFunds": "https://i.ibb.co/YFjRYfzj/1000074297.png",
    "utilityBill": "https://i.ibb.co/YFjRYfzj/1000074297.png",
    "entityName": "Acme Corporation",
    "paymentFlowDescription": "Business operations, client payments, and vendor payments"
}
```
```json Response
```

You would receive a JSON snippet with the details of the virtual account, along with the `id` and `status`:

```json Response
{{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Thank you, Peter Buchanan. We are now processing your GBP account request",
    "data": {
        "status": "pending",
        "isActive": false,
        "accountNumber": null,
        "alternateAccountNumbers": [],
        "merchantReference": "ACXLRW1",
        "KYCInformation": {
            "businessRegistrationName": "Meenah Books",
            "businessRegistrationNumber": "1234519955",
            "businessRegistrationCountry": "NG",
            "tradingName": "Meenah Books",
            "email": "mina@email.com",
            "phone": "+14155552671",
            "website": "https://www.website.com",
            "address": {
                "countryOfResidence": "US",
                "state": "NY",
                "city": "New York",
                "zip": "10000",
                "street": "456 Business Ave",
                "number": "456"
            },
            "directorsName": "minat Bel",
            "incorporationDate": "2000-01-15T00:00:00.000Z",
            "incorporationCountryCode": "US",
            "taxIdentificationNumber": "12-34589",
            "taxCountry": "US",
            "companyType": "corporation",
            "primarySourceOfFunds": "business_income",
            "businessCategory": "retail",
            "businessCategoryDescription": "Technology services and software development",
            "primaryBusiness": "software",
            "primaryBusinessDescription": "Software development and consulting services",
            "estimatedMonthlyTurnover": "50000",
            "projectedMonthlyInflow": "60000",
            "projectedMonthlyOutflow": "40000",
            "projectedTransactionFrequency": "daily",
            "projectedMonthlyTransactionCount": "500",
            "regulationStatus": "registered",
            "regulator": "SEC",
            "regulationNumber": "REG-12345",
            "annualIncome": "500000",
            "fundsTransferCorridors": [
                "US",
                "GB",
                "EU"
            ],
            "countriesOfOperation": [
                "US",
                "CA",
                "GB"
            ],
            "expectedCounterparties": [
                "customers",
                "friends"
            ],
            "tradeInternationally": true,
            "ultimateBeneficialOwners": [
                {
                    "firstName": "John",
                    "lastName": "Doe",
                    "middleName": "Michael",
                    "dateOfBirth": "1980-01-01T00:00:00.000Z",
                    "nationality": "US",
                    "citizenships": [
                        "US"
                    ],
                    "emailAddress": "john.doe@example.com",
                    "phoneNumber": "+14552671",
                    "address": {
                        "countryOfResidence": "US",
                        "state": "NY",
                        "city": "New York",
                        "zip": "10001",
                        "street": "789 Owner St",
                        "number": "789"
                    },
                    "taxCountry": "US",
                    "taxNumber": "123-45-6789",
                    "beneficialOwnerType": "beneficial_owner",
                    "usResidencyStatus": "resident",
                    "politicallyExposedPerson": false,
                    "percentageOwnership": "51",
                    "title": "CEO",
                    "document": {
                        "type": "passport",
                        "number": "B98765432",
                        "issuedCountryCode": "US",
                        "issuedBy": "US Department of State",
                        "issuedDate": "2015-01-01T00:00:00.000Z",
                        "expirationDate": "2030-01-01T00:00:00.000Z"
                    },
                    "meansOfId": [
                        {
                            "name": "1000074297.png",
                            "url": "https://bucket.s3.amazonaws.com/va_dummy/1000074297_9d61b3-69bc-4b91-aed8-29e1bbd81e11.png"
                        }
                    ],
                    "utilityBill": [
                        {
                            "name": "1000074297.png",
                            "url": "https://bucket.s3.amazonaws.com/va_dummy/10074297_62668ae0-b587-46e8-812e-81fa3129ac9d.png"
                        }
                    ],
                    "attachments": [],
                    "bankStatement": []
                }
            ],
            "businessPartners": []
        },
        "accountInformation": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isSuspended": false,
        "reason": "",
        "meansOfId": [],
        "bankStatement": [],
        "utilityBill": [
            {
                "name": "1000074297.png",
                "url": "https://bucket.s3.amazonaws.com/va_documents/1000074297_63299f25-e245-4204-9fa5-cff0b20bb4ab.png"
            }
        ],
        "virtualAccountType": "additional",
        "metadata": null,
        "phoneNumber": null,
        "sourceOfFunds": [
            {
                "name": "1000074297.png",
                "url": "https://fincra-staging-bucket.s3.amazonaws.com/va_dummy/1000074297_ee6fb9e0-8b61-4555-8f0c-8f13f158902b.png"
            }
        ],
        "leaseAgreement": [],
        "beneficialOwnershipCertificate": [
            {
                "name": "1000074297.png",
                "url": "https://bucket.s3.amazonaws.com/va_dummy/1000074297_37baaf2f-58d6-45e4-87f4-d81fd3f261e7.png"
            }
        ],
        "articleOfIncorporation": [
            {
                "name": "1000074297.png",
                "url": "https://bucket.s3.amazonaws.com/va_dummy/1000074297_892fdaa2-05d4-404e-a3ef-09e19e789211.png"
            }
        ],
        "incorporationDocuments": [
            {
                "name": "1000074297.png",
                "url": "https://bucket.s3.amazonaws.com/va_dummy/1000074297_3c5ad31c-38e8-4a6b-ba76-fe00441d63a5.png"
            }
        ],
        "registerOfDirectors": [],
        "accountOpeningDate": null,
        "regulatoryEvidence": [
            {
                "name": "1000074297.png",
                "url": "https://fincra-staging-bucket.s3.amazonaws.com/va_dummy/1000074297_274e8378-7ce3-4ccd-a4a5-929a31322d0e.png"
            }
        ],
        "consentId": "698b348eae888888880*88**",
        "_id": "698b348dae43960012f221f6",
        "customerId": "698b348eae43960012f221f8",
        "business": "64493f61864cdbaab9bb4576",
        "currency": "GBP",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2025-02-10T13:37:18.185Z",
        "updatedAt": "2025-02-10T13:37:18.185Z",
        "consentLink": "https://staging/virtual-accounts/terms?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zZW50SWQiOiI2OThiMzQ4ZWFlNDM5NjAwMTJmMjIyMDYiLCJ0aW1lc3RhbXAiOjE3NzA3MzA2MzgyNjQsImlhdCI6MTc3MDczMDYzOCwiZXhwIjoxNzcwNzczODM4fQ.P5_rp9oWmVSgOB1qu8ebNPDvz1710TaVhdHmgw4VgK5s1Y_sLTmF7KWpjH6UW2g7qTUdikiOVTJZzYwmyZBD0OoCUlhyTcAnDNAE3guyQHrWB6ccjm6FBmWkawjUbsD01oi-wMHjOosq5OJ2SgQVz5ZP-O1tyk_jIAE82mo2gOE",
        "consentExpiresAt": "2026-02-11T01:37:18.248Z"
    }
}



```
```
```
```Text Response
```

Important Notes:

* `\_id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
* It is also good to note that other fields would be included in the response. The ones shared are the ones that are necessary to note. The full payload sent in the request would also be returned in this response.

### 3 - Receive and validate webhook notification

Listen for webhook events. We will send a notification to your webhook URL that indicates the status of the virtual account creation. Read our guide on securing and [validating the webhook](https://docs.fincra.com/docs/validating-webhook) notification on your end.

Webhook Response:

```json Success
{
  "event": "virtualaccount.approved",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "approved",
    "email": "customer@theiremail.com",
    "accountType": "corporate",
    "accountInformation": {},
    "accountOpeningFee": 0,
    "isPermanent": true,
    "virtualAccountType": "additional",
    "createdAt": "2025-04-17T13:41:38.658Z",
    "updatedAt": "2025-04-17T13:46:01.528Z"
  }
}
```
```json Error [Doc Type]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "corporate",
    "reason": "Document type is different from the provided options",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-16T14:07:12.781Z",
    "updatedAt": "2024-04-16T14:08:32.442Z"
  }
}
```
```json Error [Address]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "corporate",
    "reason": "Address on the document does not match with the provided one",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:34:44.138Z",
    "updatedAt": "2024-04-17T08:36:47.462Z"
  }
}
```
```json Error [Doc Number]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "corporate",
    "reason": "Document number is not clearly visible",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-17T08:39:22.670Z",
    "updatedAt": "2024-04-17T08:41:05.941Z"
  }
}
```
```json Error [Missing Param]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "corporate",
    "reason": "Error occured while approving virtual account, Missing or invalid parameter: registrant.individual.address.zip - Invalid zip.",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2025-04-17T17:11:27.858+00:00",
    "updatedAt": "2025-04-17T17:13:27.858+00:00"
  }
}
```
```json Error [Document]
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "6655eecd8f61b674ad119828",
    "business": "64f1c9edf3c8f2940df4a710",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "corporate",
    "reason": "Address proof and document proof are of different persons",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-05-28T14:48:45.857Z",
    "updatedAt": "2024-05-28T14:51:26.445Z"
  }
}
```

> 🚧 Important Notes
>
> * `id` : This is the unique Identifier for the virtual account that was just created. Ensure to save this ID, as it would be needed when trying to retrieve the details of the created bank account or when retrieving transaction records.
> * For detailed information on verification errors that might be encountered here, please refer to our Multicurrency [Account Verification Errors Documentation](mcy-account-verification-errors).
> * Expect to recieve a second webhook after the `virtualaccount.approved` event. The new webhook event "`virtualaccount.issued`", is dispatched once the bank account is ready. Contained within this new webhook, is the `accountInformation` field, which contains the details of the newly generated account.

```json USD
{
  "event": "virtualaccount.issued",
  "data": {
    "accountInformation": {
      "accountNumber": "998877665544",
      "alternateAccountDetails": [
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "123456789",
          "countryCode": "NG",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "",
            "addressableIn": "FEDWIRE",
            "bankAddress": "123 Example Street, Lagos, NG",
            "memo": "X1Y2Z3A4"
          }
        },
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "",
          "countryCode": "US",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "PORGUS62XXX",
            "addressableIn": "SWIFT",
            "bankAddress": "456 Sample Blvd, New York, NY, US",
            "memo": "D3M0SW1F"
          }
        }
      ],
      "bankCode": "123456789",
      "bankName": "Portage Bank",
      "countryCode": "",
      "otherInfo": {
        "accountNumber": "998877665544",
        "addressableIn": "ACH",
        "bankAddress": "",
        "bankSwiftCode": "",
        "checkNumber": "",
        "iban": "",
        "memo": "ACH000X1",
        "sortCode": ""
      }
    },
    "accountOpeningFee": 0,
    "accountType": "corporate",
    "business": "abc123def456ghi789jkl000",
    "createdAt": "2025-05-27T15:06:05.712Z",
    "currency": "USD",
    "currencyType": "fiat",
    "email": "demo.user@example.com",
    "id": "abcde12345fgh67890ijk000",
    "isPermanent": true,
    "isSubAccount": false,
    "status": "approved",
    "updatedAt": "2025-06-06T00:55:20.983Z",
    "virtualAccountType": "additional"
  }
}
```

> ❗️ Changes to account details
>
> In the event of any changes to the virtual account details, a `virtualaccount.changed` event will be triggered. Please use the `_id` field to uniquely identify and track virtual account records.

```json USD
{
  "event": "virtualaccount.changed",
  "data": {
    "accountInformation": {
      "accountNumber": "998877665544",
      "alternateAccountDetails": [
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "123456789",
          "countryCode": "NG",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "",
            "addressableIn": "FEDWIRE",
            "bankAddress": "123 Example Street, Lagos, NG",
            "memo": "X1Y2Z3A4"
          }
        },
        {
          "accountNumber": "998877665544",
          "bankName": "Portage Bank",
          "bankCode": "",
          "countryCode": "US",
          "reference": "abcd1234-5678-90ab-cdef-1234567890ab",
          "otherInfo": {
            "iban": "",
            "accountNumber": "998877665544",
            "checkNumber": "",
            "sortCode": "",
            "bankSwiftCode": "PORGUS62XXX",
            "addressableIn": "SWIFT",
            "bankAddress": "456 Sample Blvd, New York, NY, US",
            "memo": "D3M0SW1F"
          }
        }
      ],
      "bankCode": "123456789",
      "bankName": "Portage Bank",
      "countryCode": "",
      "otherInfo": {
        "accountNumber": "998877665544",
        "addressableIn": "ACH",
        "bankAddress": "",
        "bankSwiftCode": "",
        "checkNumber": "",
        "iban": "",
        "memo": "ACH000X1",
        "sortCode": ""
      }
    },
    "accountOpeningFee": 0,
    "accountType": "corporate",
    "business": "abc123def456ghi789jkl000",
    "createdAt": "2025-05-27T15:06:05.712Z",
    "currency": "USD",
    "currencyType": "fiat",
    "email": "demo.user@example.com",
    "id": "abcde12345fgh67890ijk000",
    "isPermanent": true,
    "isSubAccount": false,
    "status": "approved",
    "updatedAt": "2025-06-06T00:55:20.983Z",
    "virtualAccountType": "additional"
  }
}
```

<br />

### 4 - Retrieving the details of a virtual bank account

The details of a Virtual Bank Account can be retrieved at any time after creating the account. To do this, you will need to make an API request to the [Virtual Bank Account Query API](/reference/get-one-virtual-account).

Endpoint:

```coffeescript GET
{{base_url}}/profile/virtual-accounts/<virtual account id>
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/{{virtual_account_id}}' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of the virtual account.

```json Response [Approved]
{
    "success": true,
    "message": "[Notice: Virtual Account endpoint changing soon. Date to be communicated soon] Virtual account fetched successfully",
    "data": {
        "status": "approved",
        "isActive": true,
        "accountNumber": "GB77CLJU28398298924722",
        "merchantReference": null,
        "KYCInformation": {...},
        "accountInformation": {
            "accountNumber": "92898942",
            "bankName": "Community Federal Savings Bank",
            "bankCode": null,
            "countryCode": "",
            "reference": "9b24f8b-6242a-4c77-b1t73-117e343103a",
            "otherInfo": {
                "iban": "",
                "accountNumber": "92898942",
                "checkNumber": "",
                "sortCode": "",
                "bankSwiftCode": ""
            }
        },
        "verifiedKYCData": null,
        "note": null,
        "accountOpeningFee": 0,
        "pendingAdditionalInfoCount": 0,
        "isPermanent": true,
        "expiresAt": null,
        "isCheckoutVa": false,
        "isBankTransferVa": false,
        "isSuspended": false,
        "reason": null,
        "monthlyVolume": null,
        "entityName": null,
        "paymentFlowDescription": null,
        "attachments": [],
        "meansOfId": [
            {
                "name": "Passport",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/International%2BPassport.pdf"
            }
        ],
        "bankStatement": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "utilityBill": [
            {
                "name": "Statement.pdf",
                "url": "https://yourtestbucket.s3.amazonaws.com/va_documents/Statement.pdf"
            }
        ],
        "virtualAccountType": "additional",
        "riskRating": "high",
        "checklist": {...},
        "riskScreening": "no negative check",
        "channelKycUpdateStatus": null,
        "channelKycUpdateResponse": null,
        "metadata": null,
        "_id": "6620061298389es2279c4",
        "business": {
            "name": "Merchant Name",
            "email": "merchant@theiremail.com"
        },
        "currency": "USD",
        "accountType": "corporate",
        "entityType": "main_account",
        "currencyType": "fiat",
        "createdAt": "2024-04-17T17:25:46.508Z",
        "updatedAt": "2024-04-17T17:32:00.980Z"
    }
}
```

### 5 - Retrieving list of virtual accounts created

A list of all virtual accounts created can be returned via an API call to the [list virtual accounts endpoint](https://docs.fincra.com/reference/get-merchant-virtual-account-requests).

```coffeescript GET
{{base_url}}/profile/virtual-accounts/?currency=eur
```
```coffeescript cURL
curl --location 'https://api.fincra.com/profile/virtual-accounts/?currency=eur' \
--header 'accept: application/json' \
--header 'api-key: <Your API secret key>'
```

If successful, you will receive a JSON snippet with the details of all virtual account requests made.

```json Response
{
    "success": true,
    "message": "Merchant virtual accounts fetched successfully",
    "data": {
        "results": [
          {...},
          {...},
          {...}
				],
        "total": 3
    }
}
```

<br />

### 6 - Virtual Account Closed

When a virtual account is closed; webhook notifications is sent.

> 🚧 * Expect to recieve a webhook that states `virtualaccount.closed` event. Contained within this new webhook, is the `accountInformation` and  `reason` field, which contains the details of the account closure.

```json
{
  "event": "virtualaccount.closed",
  "data": {
    "id": "62135abbcb0e3e0535fdc2ac",
    "business": "61aa4e72cc67b6f04d97f874",
    "isSubAccount": false,
    "currency": "USD",
    "currencyType": "fiat",
    "status": "closed",
    "accountType": "corporate",
    "reason":"reason for account closure",
    "accountInformation": {
      "accountNumber": "GB88BLFN04270670217485",
      "email": "devbola@gmail.com", 
      "bankName": "Blacktorn Finance",
      "bankAddress": "The Business Complex, 100  Church Ln, London E1 1LX, UK",
      "accountName": " Ventures",
      "swiftCode": "BLFNGB21XXX"
    },
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2022-02-21T09:26:19.167Z",
    "updatedAt": "2022-02-21T09:28:35.808Z"
  }
}
```

---
title: Request FCY Account (By Pass)
excerpt: >-
  Approved merchants may submit consent metadata directly within the Virtual
  Account creation request. 
deprecated: false
hidden: false
metadata:
  robots: index
---
Fincra enables businesses to generate corporate foreign currency (FCY) virtual accounts. These accounts enable registered businesses to receive cross-border payments in supported currencies such as USD, EUR, GBP, and CAD providing a seamless and efficient way to manage international transactions.

This document walks you through the process of collecting the required information and submitting a request for a corporate FCY virtual account.

<br />

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
| consent.isTermsAccepted                                            | Yes         | boolean             | A confirmation that consent has been accepted                                                                                                                                                                                                                |
| consent.termsAndConditionAcceptance.date                           | Yes         | string              | Timestamp when consent was captured (ISO 8601 UTC)                                                                                                                                                                                                           |
| consent.termsAndConditionAcceptance.ipAddress                      | Yes         | string              | IP address at the time of consent (IPv4 / IPv6)                                                                                                                                                                                                              |

<br />

API Reference: [create virtual account endpoint](/reference/create-fcy-virtual-account)

> 📘 Important
>
> * User consent must be captured before a Virtual Account request is fully processed.
>
> * Funds received by a virtual account created, settles in the respective currency balance of the merchant.

<br />

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

```json Corporate Request
{
    "currency": "GBP",
    "accountType": "corporate",
    "purpose": "third_party", 
    "merchantReference": "{{$rando}}",
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
  "paymentFlowDescription": "Business operations, client payments, and vendor payments",
"isTermsAccepted": true,
    "termsAndConditionAcceptance": {
        "date": "2025-01-31T10:30:00.000Z",
        "ipAddress": "100.200.200.200"

}
```
```json Response
```

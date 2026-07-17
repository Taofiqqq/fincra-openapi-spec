---
api:
  file: awesome-new-api.json
  operationId: post_profile-virtual-accounts-requests
hidden: false
link:
  new_tab: false
metadata:
  robots: index
---
Creates a request for a CAD collection account. On approval, a unique Interac collection alias (e.g. `merchantname@fincra.ca`) is generated, registered on the Interac network, and enabled for Autodeposit. The alias is the collection identifier for this account.

## Request

**Endpoint**

`POST https://api.fincra.com/profile/virtual-accounts/requests`

**Headers**

| Header         | Value               |
| -------------- | ------------------- |
| `api-key`      | Your secret API key |
| `Content-Type` | `application/json`  |
| `Accept`       | `application/json`  |

**Body Parameters**

| Field                            | Type         | Required    | Description                                                              |
| -------------------------------- | ------------ | ----------- | ------------------------------------------------------------------------ |
| `currency`                       | string       | Yes         | Must be `CAD`                                                            |
| `accountType`                    | string       | Yes         | `corporate` or `individual`                                              |
| `purpose`                        | string       | Yes         | Purpose of the account, e.g. `third_party`                               |
| `merchantReference`              | string       | No          | Your unique reference for this request                                   |
| `KYCInformation`                 | object       | Yes         | KYC/KYB details. The required fields depend on `accountType` (see below) |
| `metadata`                       | object       | No          | Custom key-value pairs attached to the account                           |
| `entityName`                     | string       | Conditional | Legal entity name (corporate)                                            |
| `paymentFlowDescription`         | string       | Conditional | Description of expected payment activity (corporate)                     |
| `regulatoryEvidence`             | string (URL) | Conditional | Corporate document                                                       |
| `incorporationDocuments`         | string (URL) | Conditional | Corporate document                                                       |
| `articleOfIncorporation`         | string (URL) | Conditional | Corporate document                                                       |
| `beneficialOwnershipCertificate` | string (URL) | Conditional | Corporate document                                                       |
| `sourceOfFunds`                  | string (URL) | Conditional | Corporate document                                                       |
| `utilityBill`                    | string (URL) | Conditional | Corporate document                                                       |

**KYCInformation by account type**

| accountType  | Key fields                                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `corporate`  | `businessRegistrationName`, `businessRegistrationNumber`, `businessRegistrationCountry`, `tradingName`, `email`, `phone`, `website`, `address`, `directorsName`, `incorporationDate`, `taxIdentificationNumber`, `companyType`, `businessCategory`, `estimatedMonthlyTurnover`, `fundsTransferCorridors`, `countriesOfOperation`, `expectedCounterparties`, `ultimateBeneficialOwners[]` |
| `individual` | `firstName`, `lastName`, `email`, `phone`, `nationality`, `birthDate`, `taxCountry`, `taxNumber`, `sourceOfIncome`, `accountDesignation`, `employmentStatus`, `incomeBand`, `annualIncome`, `address`, `document`                                                                                                                                                                        |

## Response

A successful request returns the virtual account object. The account status starts as pending and moves to `approved` once compliance verification is complete. On approval:

- `accountInformation.otherInfo.interacEmail` contains the Interac collection alias
- `accountInformation.otherInfo.addressableIn` is `INTERAC_ETRANSFER`
- `accountNumber` is empty; the alias is the collection identifier

<br />

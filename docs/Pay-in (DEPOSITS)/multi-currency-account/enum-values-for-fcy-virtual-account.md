---
title: Enum Values for FCY Virtual Account
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
#### BeneficialOwnerType

Specifies the role of an individual associated with the company for KYC/KYB purposes.

| Value              | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| beneficial\_owner  | An individual who owns or controls over 25% of the company.               |
| control\_person    | An individual with significant managerial control (e.g., CEO, President). |
| authorized\_person | An individual authorized to perform transactions but doesn't own/control. |

***

#### BeneficialOwnerUSResidencyStatus

Describes U.S. citizenship and residency status of the individual.

| Value         | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| resident      | Resides in the U.S. but not a citizen (e.g., Green Card holder). |
| non\_resident | Neither a U.S. resident nor citizen.                             |
| citizen       | A U.S. citizen, regardless of current location.                  |

***

#### VirtualAccountCompanyType

Defines the legal structure of the business entity.

| Group             | Value                                     | Description                                  |
| ----------------- | ----------------------------------------- | -------------------------------------------- |
| Basic Structures  | sole\_proprietorship                      | Owned and run by one individual.             |
|                   | limited\_partnership                      | Has general and limited partners.            |
|                   | limited\_liability\_partnership           | All partners have limited liability.         |
| LLC Variants      | limited\_liability\_company               | LLC structure with liability protection.     |
|                   | professional\_limited\_liability\_company | LLC for licensed professionals.              |
| Corporation Types | corporation                               | Standard corporation (e.g., C Corp, S Corp). |
|                   | public\_limited\_company                  | Shares traded publicly (PLC).                |
|                   | private\_limited\_company                 | Shares held privately.                       |
| Nonprofits        | nonprofit                                 | Organization not operating for profit.       |
|                   | nonprofit\_corporation                    | Nonprofit structured as a corporation.       |
| Special Entities  | cooperative                               | Owned/operated by members.                   |
|                   | trust                                     | Trustee manages assets for a beneficiary.    |
|                   | franchise                                 | Operates under license of another business.  |
|                   | joint\_venture                            | Business project by multiple parties.        |
|                   | holding\_company                          | Owns shares in other companies.              |
|                   | special\_purpose\_vehicle                 | Created for a specific objective (SPV).      |
| Government        | government\_owned                         | Fully or partially owned by the government.  |

***

#### VirtualAccountBusinessCategory

Broad classification of the company's industry sector.

| Value                  | Description                              |
| ---------------------- | ---------------------------------------- |
| retail                 | Selling goods directly to consumers.     |
| wholesale              | Selling in bulk to retailers.            |
| software               | Developing/selling software products.    |
| financial\_services    | General financial service providers.     |
| fintech                | Financial technology companies.          |
| banking                | Licensed deposit-taking institutions.    |
| insurance              | Insurance providers.                     |
| healthcare             | Hospitals, clinics, healthcare entities. |
| manufacturing          | Producing physical goods.                |
| professional\_services | Legal, accounting, consulting firms.     |
| hospitality            | Accommodation, food, beverage services.  |
| tourism                | Travel and tourism services.             |
| transportation         | Movement of goods or people.             |
| logistics              | Supply chain and coordination services.  |
| energy                 | Power generation, oil, and gas.          |
| telecommunications     | Phone, internet, data services.          |
| entertainment          | Media, film, music, performance arts.    |

***

#### VirtualAccountPrimaryBusiness

Detailed classification of the business' primary line of activity.

| Group              | Values                                                                | Description                                     |
| ------------------ | --------------------------------------------------------------------- | ----------------------------------------------- |
| Financial Services | accounting, banking, finance, insurance, broker, payment\_processor   | Money, credit, and investment services.         |
| Tech & Digital     | software, saas, cybersecurity, fintech, ecommerce, healthtech, edtech | Internet and tech-driven business sectors.      |
| Prof. Services     | consulting, legal, professional\_services, architecture, engineering  | Specialized, knowledge-based firms.             |
| Manufacturing      | manufacturing, construction, aerospace, textiles, furniture           | Production or building of goods.                |
| Retail             | consumer\_goods, retail, beauty\_cosmetics                            | Selling products to end consumers.              |
| Hospitality        | food\_beverage, hospitality, travel\_tourism                          | Accommodation and travel-related services.      |
| Healthcare         | healthcare, pharmaceuticals, veterinary                               | Medical and health-related services.            |
| Entertainment      | media, arts\_entertainment, gaming, music, sports                     | Creative and media-focused businesses.          |
| Transportation     | transportation, logistics\_distribution                               | Goods and people movement services.             |
| Energy/Resources   | oil\_gas, mining, forestry, fishing, electricity                      | Extraction and management of natural resources. |
| Public/Social      | government, nonprofit, charity                                        | Government or charitable organizations.         |

***

#### VirtualAccountCorpRegulationStatus

Company's regulatory standing.

| Value         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| regulated     | Formally regulated (e.g., banking, finance).                 |
| registered    | Registered with a government body, not actively regulated.   |
| licensed      | Holds specific license to operate (e.g., law, construction). |
| none          | Not regulated, registered, or licensed.                      |
| not\_required | No regulation required for the business type.                |

***

#### VirtualAccountCounterparty

Types of entities the business will transact with.

| Value       | Description                               |
| ----------- | ----------------------------------------- |
| self        | Transfers between company’s own accounts. |
| suppliers   | Payments to vendors for goods/services.   |
| customers   | Payments received from customers.         |
| employees   | Payroll and salary disbursements.         |
| contractors | Freelance/contractor payments.            |
| friends     | Peer-to-peer payments (friends).          |
| family      | Peer-to-peer payments (family).           |

***

#### VirtualAccountTransactionFrequency

Expected transaction frequency on the account.

| Value          | Description                  |
| -------------- | ---------------------------- |
| daily          | Transactions expected daily. |
| weekly         | Once a week.                 |
| biweekly       | Every two weeks.             |
| monthly        | Once a month.                |
| quarterly      | Every three months.          |
| semi\_annually | Twice a year.                |

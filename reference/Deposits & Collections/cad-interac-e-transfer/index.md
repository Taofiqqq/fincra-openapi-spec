---
title: CAD (Interac e-Transfer)
excerpt: Collect Canadian Dollars from Canadian payers via Interac e-Transfer.
deprecated: false
hidden: false
metadata:
  robots: index
---
The **CAD Collection API** enables merchants to receive Canadian Dollars via Interac e-Transfer, Canada's real-time payment network. Each merchant is issued a unique Interac collection alias (e.g. `merchantname@fincra.ca`) registered for Autodeposit. Payers send an e-Transfer to this email, and funds are automatically credited to the merchant's Fincra CAD wallet.

Use the endpoints in this section to:

- Create a CAD collection account by submitting KYC/KYB information and receive an Interac alias
- Retrieve account details to fetch the assigned alias by account ID or currency

The Interac alias is returned in `accountInformation.otherInfo.interacEmail` with `addressableIn: "INTERAC_ETRANSFER"`.

For more details on how the product works, see the [CAD (Interac e-Transfer) Guide](https://docs.fincra.com/docs/cad-interac-e-transfer).

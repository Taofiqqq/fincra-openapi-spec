---
api:
  file: awesome-new-api.json
  operationId: generate-quote
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Now that you've generated a quote, try converting the funds.
  pages:
    - type: endpoint
      slug: convert-funds-in-wallet
      title: Convert funds in wallet
    - type: endpoint
      slug: initiate-bank-transfer
      title: Initiate Bank Transfer
---
Once you generate a quote pay attention to the response field `reference`. This is the quote reference that will be passed in the cross-currency payout request or conversion request depending on your use case.

> 🚧 Note
>
> Quotes are only valid for 30 seconds for cross-currency payouts and conversions. After generating a quote ensure to use it within the allotted time frame.
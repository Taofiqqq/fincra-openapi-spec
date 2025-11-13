---
title: 'Use Case: XTransfer Pool Account'
excerpt: >-
  This documentation contains all endpoints required to achieve XTransfer's
  asynchronous pool account collection, conversion, and payouts flows.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: >-
    Proceed to fetch your account details and simulate a collection. Also view
    Webhooks to learn how to set up your webhook with Fincra. You can also check
    out all other APIs below
  pages:
    - type: endpoint
      slug: get-account-by-currency
      title: Get Account by Currency
    - type: endpoint
      slug: simulate-collection
      title: Simulate Collection
    - type: endpoint
      slug: generate-a-quote
      title: Generate a quote
    - type: endpoint
      slug: convert-funds-in-wallet
      title: Convert funds in wallet
    - type: endpoint
      slug: get-account-statement
      title: Get Account Statement
    - type: endpoint
      slug: get-all-wallet-balances
      title: Get all wallet balances
    - type: endpoint
      slug: make-payout-bank-transfer
      title: Make payout (bank transfer)
    - type: endpoint
      slug: webhooks-1
      title: Webhooks
    - type: link
      title: Collection webhook
      url: https://docs.fincra.com/docs/payin-webhook
    - type: link
      title: Conversion webhook
      url: >-
        https://docs.fincra.com/docs/conversions-webhookhttps://docs.fincra.com/docs/conversions-webhook
    - type: link
      title: Payout webhook
      url: https://docs.fincra.com/docs/payout-webhook
---
## Overview

To achieve the specific flows for pool account collection, conversion and payouts, please see the API list below and advised flow.

## XTransfer use cases and flow

<Image align="center" className="border" width="-2px" border={true} src="https://files.readme.io/2f539f8b3e0d3208d429164afb24722abdd03a9bea67744d00e2fae52f5bf8aa-image.png" />

## Supported countries for pool account collections

<br />

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Country
      </th>

      <th>
        Currency
      </th>

      <th>
        Financial institutions
      </th>

      <th>
        Min amount
      </th>

      <th>
        Max amount
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Kenya
      </td>

      <td>
        KES
      </td>

      <td>
        UBA Kenya
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Uganda
      </td>

      <td>
        UGX
      </td>

      <td>
        ABSA Bank
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Ghana
      </td>

      <td>
        GHS
      </td>

      <td>
        First Atlantic Bank,\
        UBA Ghana
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Zambia
      </td>

      <td>
        ZMW
      </td>

      <td>
        Access Bank Zambia LTD
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        South Africa
      </td>

      <td>
        ZAR
      </td>

      <td>
        Nedbank,\
        Access Bank South Africa
      </td>

      <td>
        N/A
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</Table>

## API list

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        \# 
      </th>

      <th>
        **Step**
      </th>

      <th>
        **Detail**
      </th>

      <th>
        **API reference**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1
      </td>

      <td>
        Get account by currency
      </td>

      <td>
        This endpoint will allow the XTransfer team get the necessary account details that will be shared with their customer for them to receive inflow
      </td>

      <td>
        [https://docs.fincra.com/reference/get-account-by-currency](https://docs.fincra.com/reference/get-account-by-currency)
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        Simulate payment
      </td>

      <td>
        Simulate inflow into any pool account using this endpoint and confirm the webhook received.
      </td>

      <td>
        [https://docs.fincra.com/reference/simulate-collection](https://docs.fincra.com/reference/simulate-collection)
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>

      <td>
        Confirm collection/payment
      </td>

      <td>
        Confirm the simulated inflow and get the status using this endpoint.  

        Learn more about setting up and validating webhooks [here](https://docs.fincra.com/docs/webhooks) .
      </td>

      <td>
        * \*Webhook\*\*: [https://docs.fincra.com/docs/payin-webhook](https://docs.fincra.com/docs/payin-webhook)  
        * \*API\*\*: [https://docs.fincra.com/reference/get-collection-record-by-reference](https://docs.fincra.com/reference/get-collection-record-by-reference)
      </td>
    </tr>

    <tr>
      <td>
        4
      </td>

      <td>
        Get statement of account
      </td>

      <td>
        Get all transactions done on your account with Fincra
      </td>

      <td>
        [https://docs.fincra.com/reference/get-account-statement](https://docs.fincra.com/reference/get-account-statement)
      </td>
    </tr>

    <tr>
      <td>
        5
      </td>

      <td>
        Get Wallet Balances
      </td>

      <td>
        Fetch the balances of your different wallets (currencies)
      </td>

      <td>
        [https://docs.fincra.com/reference/get-all-wallet-balances](https://docs.fincra.com/reference/get-all-wallet-balances)
      </td>
    </tr>

    <tr>
      <td>
        6
      </td>

      <td>
        Generate quote 
      </td>

      <td>
        Generate a quote for currency trade to your wallet (conversion) or to a customer (cross-currency payout).
      </td>

      <td>
        [https://docs.fincra.com/reference/generate-quote](https://docs.fincra.com/reference/generate-quote)
      </td>
    </tr>

    <tr>
      <td>
        7
      </td>

      <td>
        Conversion
      </td>

      <td>
        Initiate a trade and convert funds using the generated quote to lock on a price.
      </td>

      <td>
        [https://docs.fincra.com/reference/initiate-currency-conversion](https://docs.fincra.com/reference/initiate-currency-conversion)
      </td>
    </tr>

    <tr>
      <td>
        8
      </td>

      <td>
        Confirm a conversion
      </td>

      <td>
        Confirm the status of your conversion or listen for the successful webhook event
      </td>

      <td>
        * \*Webhook\*\*: [https://docs.fincra.com/docs/conversions-webhook](https://docs.fincra.com/docs/conversions-webhook)  
        * \*API\*\*: [https://docs.fincra.com/reference/verify-conversion-status](https://docs.fincra.com/reference/verify-conversion-status)
      </td>
    </tr>

    <tr>
      <td>
        9
      </td>

      <td>
        Make a same currency payout
      </td>

      <td>
        Initiate a payout where source currency and destination currency are the same.
      </td>

      <td>
        [https://docs.fincra.com/reference/initiate-bank-transfer](https://docs.fincra.com/reference/initiate-bank-transfer)
      </td>
    </tr>

    <tr>
      <td>
        10
      </td>

      <td>
        Confirm payout
      </td>

      <td>
        Confirm the status of the payout transaction using this endpoint.  

        You can also listen for the successful payout webhook.
      </td>

      <td>
        * \*Webhook\*\*: [https://docs.fincra.com/docs/payout-webhook](https://docs.fincra.com/docs/payout-webhook)  
        * \*API\*\*: [https://docs.fincra.com/reference/verify-payout-status-by-reference](https://docs.fincra.com/reference/verify-payout-status-by-reference)  
        * \*API\*\*: [https://docs.fincra.com/reference/fetch-payout-by-customer-reference](https://docs.fincra.com/reference/fetch-payout-by-customer-reference)
      </td>
    </tr>
  </tbody>
</Table>

---
title: 'Use Case: Pool Account Solution'
excerpt: >-
  This documentation contains all endpoints required to achieve an asynchronnous
  pool account collection, conversion, and payouts flows.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Overview

To achieve the specific flows for pool account collection, conversion and payouts, please see the API list below and advised flow.

## Use cases and flow

![](https://files.readme.io/73b3255ad0b7c4a480c4fc79d31c1174adf2a4f7433028719dd6078ecb934e51-image.png)

## Supported countries for pool account collections

| Country      | Currency | Financial institutions |
| :----------- | :------- | :--------------------- |
| Uganda       | UGX      | Ecobank, Stanbic Bank  |
| Ghana        | GHS      | Calbank                |
| Zambia       | ZMW      | Access Bank Zambia LTD |
| South Africa | ZAR      | Nedbank                |

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
        This endpoint will allow you get the necessary account details that will be shared with their customer for them to receive inflow
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

---
title: Conversions
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
## conversion.successful

This event is dispatched when an authenticated user performs a successful conversion

```json
{
  "event": "conversion.successful",
  "data": {
    "business": "61aa4e72cc67b6f04d97f874",
    "amountCharged": 450000,
    "amountReceived": 846.45,
    "fee": 8.55,
    "sourceCurrency": "NGN",
    "destinationCurrency": "GBP",
    "rate": 0.0019,
    "settlement": null,
    "status": "successful",
    "createdAt": "2022-02-20T18:53:59.310Z",
    "updatedAt": "2022-02-20T18:53:59.310Z",
    "reference": "883beb04-551b-4114-8ed9-12cb196b67c1"
  }
}
```

### Webhook Parameters And Description

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Data
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        data.business
      </td>

      <td>
        The ID of the business that performed the conversion
      </td>
    </tr>

    <tr>
      <td>
        data.amountCharged
      </td>

      <td>
        The addition of the transaction fee and amount to be converted
      </td>
    </tr>

    <tr>
      <td>
        data.amountReceived
      </td>

      <td>
        The amount that settles in the virtual account after the fee has been deducted
      </td>
    </tr>

    <tr>
      <td>
        data.fee
      </td>

      <td>
        The fee charged for the transaction
      </td>
    </tr>

    <tr>
      <td>
        data.sourceCurrency
      </td>

      <td>
        The currency the funds was converted in
      </td>
    </tr>

    <tr>
      <td>
        data.destinationCurrency
      </td>

      <td>
        The currency the funds was converted to
      </td>
    </tr>

    <tr>
      <td>
        data.rate
      </td>

      <td>
        The conversion rate
      </td>
    </tr>

    <tr>
      <td>
        data.settledAt
      </td>

      <td>
        The timestamp the fund settles in the user wallet
      </td>
    </tr>

    <tr>
      <td>
        data.status
      </td>

      <td>
        The status of the conversion
      </td>
    </tr>

    <tr>
      <td>
        data.createdAt
      </td>

      <td>
        The timestamp the conversion was created
      </td>
    </tr>

    <tr>
      <td>
        data.updatedAt
      </td>

      <td>
        The timestamp the conversion was updated
      </td>
    </tr>

    <tr>
      <td>
        data.reference
      </td>

      <td>
        This is the unique reference generated for the conversion
      </td>
    </tr>
  </tbody>
</Table>

---
api:
  file: awesome-new-api.json
  operationId: list-banks
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you view a list of banks and mobile money wallet providers, together with their details such as code, swiftCode, and Bic.

Please read the descriptions below to find out what kind of response you can expect after making the API call.

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Id
      </td>

      <td>
        String
      </td>

      <td>
        The unique identifier of the bank on our application
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        String
      </td>

      <td>
        The unique identifier assigned by the central bank of the beneficiary's country to the bank. This serves as the `bankCode` and `mobileMoneyCode` in the [Payout API](/reference/payout-1)
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        The name of the bank
      </td>
    </tr>

    <tr>
      <td>
        isMobileVerified
      </td>

      <td>
        Boolean
      </td>

      <td>
        This is used to identify mobile money operators.\
        if `isMobileVerified` is true, then the bank is a mobile money operator else if it is false the bank is not a mobile money operator.
      </td>
    </tr>

    <tr>
      <td>
        branches
      </td>

      <td>
        Object
      </td>

      <td>
        The branches of the bank
      </td>
    </tr>

    <tr>
      <td>
        branches.id
      </td>

      <td>
        String
      </td>

      <td>
        The unique identifier of the  branch
      </td>
    </tr>

    <tr>
      <td>
        branches.branchCode
      </td>

      <td>
        String
      </td>

      <td>
        The code of the branch
      </td>
    </tr>

    <tr>
      <td>
        branches.branchName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the branch
      </td>
    </tr>

    <tr>
      <td>
        branches.swiftCode
      </td>

      <td>
        String
      </td>

      <td>
        The swift code of the branch , according to [ISO 9362](https://en.wikipedia.org/wiki/ISO_9362)
      </td>
    </tr>

    <tr>
      <td>
        branches.bic
      </td>

      <td>
        String
      </td>

      <td>
        The Bic code of the branch , according to [ISO 9362](https://en.wikipedia.org/wiki/ISO_9362)
      </td>
    </tr>

    <tr>
      <td>
        branches.BankId
      </td>

      <td>
        String
      </td>

      <td>
        The bank Id
      </td>
    </tr>
  </tbody>
</Table>

## Sandbox Test Account

```json GHS [Bank Account]
{
    "accountNumber": "1020820171412",
    "bankSwiftCode": "ADNTGHAC",
    "currency": "GHS",
    "type": "bank_account"
}
```
```json GHS [Mobile Money]
{
    "accountNumber": "233246089019",
    "currency": "GHS",
    "type": "mobile_money",
    "mobileMoneyCode": "MTN"
}
```
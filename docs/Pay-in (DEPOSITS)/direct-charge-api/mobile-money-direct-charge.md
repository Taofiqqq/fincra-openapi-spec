---
title: Pay with Mobile Money
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
Mobile Money is a fast, simple, convenient, secure, and affordable way of making payments, and doing other transactions using a mobile phone.

The Pay with Mobile Money method allows your customers to pay you by entering their mobile phone numbers. When the customer clicks to pay, they will receive a prompt on the mobile device attached to their number asking them to confirm the payment by inputting a PIN. When customers make payments, you will receive a webhook notification that payments have been made to your account.

Kindly find the currencies and providers supported for mobile money payments below.

## List Of Available Currencies

|                                 |                          |                              |
| :------------------------------ | :----------------------- | :--------------------------- |
| KES (Kenyan Shilling)           | GHS (Ghanian Cedis)      | UGX (Ugandan Shilling)       |
| ZMW (Zambian Kwacha)            | TZS (Tanzanian Shilling) | XOF (West African CFA Franc) |
| XAF (Central African CFA Franc) |                          |                              |

## List Of Available Operators (Providers)

| KES               | GHS                        | UGX    | ZMW    | TZS      | XOF    | XAF    |
| :---------------- | :------------------------- | :----- | :----- | :------- | :----- | :----- |
| SAFARICOM (MPESA) | MTN                        | MTN    | MTN    | AIRTEL   | MOOV   | MOOV   |
| AIRTEL            | AIRTEL\_TIGO, AIRTEL, TIGO | AIRTEL | AIRTEL | TIGOPESA | ORANGE | ORANGE |
| EQUITEL           | VODAFONE                   |        | ZAMTEL |          | MTN    | MTN    |
|                   |                            |        |        |          | AIRTEL | AIRTEL |
|                   |                            |        |        |          | FREE   | FREE   |

## List Of Mobile Money Codes By Currency

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        **KES (Kenyan Shilling)**
      </th>

      <th>
        **GHS (Ghanian Cedis)**
      </th>

      <th>
        **UGX (Ugandan Shilling)**
      </th>

      <th>
        XOF (West African CFA Franc)




        BEN, BF, CIV, SN 
      </th>

      <th>
        XAF (Central African CFA Franc)




        CM, COG, GAB
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * \*\*334#\*\* for MPESA
      </td>

      <td>
        * \*\*170#\*\* for MTN Mobile Money
      </td>

      <td>
        * \*\*185#\*\* for Airtel
      </td>

      <td>
        * \*\*855#\*\* for Moov (BEN)
      </td>

      <td>
        * \*\*126#\*\* for MTN (CM)
      </td>
    </tr>

    <tr>
      <td>
        * \*\*334#\*\* for Airtel Money
      </td>

      <td>
        * \*\*110#\*\* for Vodafone Cash
      </td>

      <td>
        * \*\*165#\*\* for MTN
      </td>

      <td>
        * \*\*144# or \*145#\*\* for Orange (BF, CIV, SN)
      </td>

      <td>
        * \*\#150#\*\* for Orange (CM)
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        * \*\*110#\*\* for AirtelTigo Money
      </td>

      <td>
        * \*\*144#\*\* for Africell
      </td>

      <td>
        * \*\*126#\*\* for MTN (BEN)
      </td>

      <td>
        * \*\*105#\*\* for MTN (COG)
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>
        * \*\*145#\*\* for Free (SN)
      </td>

      <td>
        * \*\*303#\*\* for Airtel (GAB)
      </td>
    </tr>
  </tbody>
</Table>

**Take note\&#xA;**&#x54;he  [List available mobile money operators](https://docs.fincra.com/reference/list-mobile-money-operators) endpoints can be used to get details about the available mobile money operators.

\*\* BEN - Benin, BF - Burkina Faso, CIV - Cote d'Ivoire, GNB - GGuinea-Bissau, SN - Senegal, CM - Cameroun, COG - Republic of Congo, GAB - Gabon

The following steps are required to accept mobile money payments :

## 1 - Initiate Charge

To charge a customer, you will need to collect the necessary payment information from the customer. 

| Field                 | Required | Type   | Description                                                                                                                              |
| :-------------------- | :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| type                  | Yes      | String | This is the payment method. In this case, it will be `mobile_money`.                                                                     |
| reference             | Yes      | String | The unique reference generated for the transaction.                                                                                      |
| amount                | Yes      | String | The amount to be charged                                                                                                                 |
| currency              | Yes      | String | The currency                                                                                                                             |
| phone                 | Yes      | String | The mobile number of the customer to be charged e.g 254700000000                                                                         |
| operator              | Yes      | String | The mobile money operator.                                                                                                               |
| customer              | Yes      | Object | The customer details                                                                                                                     |
| customer.name         | Yes      | String | The customer name                                                                                                                        |
| customer.email        | Yes      | String | The customer email                                                                                                                       |
| customer.phoneNumber  | No       | String | The customer's phone number                                                                                                              |
| settlementDestination | No       | String | A settlement destination is the location where you want your payments to be settled. Settlements are only to wallets (balances) for now. |
| callbackUrl           | No       | String | The URL to redirect your customer when the transaction is complete.                                                                      |
| webhookUrl            | No       | String | The URL to receive transaction notifications.                                                                                            |

Then, prepare your data object to look like the sample below :

```json
{
    "type": "mobile_money",
    "amount": 600,
    "reference": "o8bfuweukn",
    "currency": "KES",
      "customer": {
      "name": "Kweku Kwabena",
      "email": "testing@fincra.com"
    },
    "phone":"+254700000000",
    "operator":"SAFARICOM",
    "settlementDestination": "wallet",

}
```

Send a POST request with the payment data above to the [initiate a mobile money charge endpoint](/reference/initiate-a-charge). If the request is successful, you will receive a response containing the transaction status `pending` as well as other important parameters such as: 

* `data.id`  refers to the unique identifier of the transaction
* `data.reference` refers to the unique identifier of the transaction on your platform.
* `data.message` This is the message which contains the payment procedures. You are expected to display the `data.message` to your customer to make payments, and then listen to webhook for transaction notification or query the verify payment endpoint at intervals.
* `data.auth_model` **Important!** If `auth_model` is `OTP`, an `OTP` would be sent to customer, which would be needed to [authorize the charge](mobile-money-direct-charge#2---authorize-charge). Take note of the message field for the operator specific instructions. 

Here is a sample response that you will receive after initiating a payment and requires the customer to complete the process:

```json No Authorization
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 2586,
        "authorization": {
            "mode": null
        },
        "auth_model": null,
        "amount": 600,
        "currency": "KES",
        "fee": 1,
        "vat": 0,
        "message": "<p>You will receive a prompt on mobile number <b>254700000000</b>. <br/> Enter your M-Pesa PIN to authorize your payment of <b>KES 600.00</b> to account number <b>254700000000</b>. <br/><br/> If you do not get a prompt within 30 seconds, use the instructions below to make your payment: </p> <ol> <li>Go to your Safaricom SIM Tool Kit</li> <li>Select M-PESA menu</li> <li>Select Lipa na M-PESA</li> <li>Select Pay Bill</li> <li>Enter Business no. <b>000000</b></li> <li>Enter Account no. <b>254700000000</b></li> <li>Amount to pay <b>600.00</b></li> <li>Enter your M-PESA PIN and press OK</li> </ol>",
        "status": "pending",
        "reference": "K8-Mobile-Data",
        "type": "mobile_money",
        "customer": {
            "name": "John Doe",
            "email": "customer@theirmail.com",
            "phoneNumber": null
        },
        "metadata": {
            "phone": "+254700000000",
            "operator": "SAFARICOM"
        },
        "settlementDestination": "wallet"
    }
}
```
```json With Authorization
{
    "status": true,
    "message": "Charge created",
    "data": {
        "id": 17740,
        "authorization": {
            "mode": "OTP"
        },
        "auth_model": "OTP",
        "amount": 13,
        "amountExpected": 13,
        "varianceType": null,
        "currency": "GHS",
        "fee": 5.33,
        "vat": 0,
        "message": "Enter the OTP sent to your phone",
        "actionRequired": null,
        "status": "pending",
        "reference": "TESTMMOTPDC4",
        "type": "mobile_money",
        "customer": {
            "name": "John Doe",
            "email": "customer@theirmail.com",
            "phoneNumber": null
        },
        "metadata": {
            "phone": "09017309747",
            "operator": "MTN"
        }
    }
}
```

## 2 - Authorize Charge

If `data.auth_model` when the charge was initiated was `null`, you can skip this step. However, if `data.auth_model` was `OTP`, you would need to authorize the charge with the `OTP` that was sent to the customer's mobile number. Using this `OTP`, send a request to our [authorize charge endpoint](/reference/authorize-a-charge). We

Here is how you can structure your request:

```json POST
{{base_url}}/checkout/charges/{id}/authorize
```
```json cURL
curl --location 'https://api.fincra.com/checkout/charges/:charge-id/authorize' \
--header 'x-business-id: <Your Business ID>' \
--header 'api-key: <Your API Secret key>' \
```

```json Payload
{
   "otp": "123456"
}
```

Note: You can also [resend OTP](mobile-money-direct-charge#5---resend-otp) if it expired or wasn't received by customer.

## 3 - Verify Charge

The final step after receiving payment is to ensure that the payment was successful before providing value to your customer. To do so, send a verification request to the [verify charge endpoint](/reference/verify-charge) from your server to confirm the payment's final status. The reference you enter here should be the same as the one you used for your payment.

Here's an example of charge verification and response:

```json
{
    "status": true,
    "message": "Charge found",
    "data": {
        "id": 2586,
        "authorization": {
            "mode": null,
            "redirect": null
        },
        "auth_model": null,
        "amount": 600,
        "amountReceived": 0,
        "currency": "KES",
        "fee": 1,
        "message": "<p>You will receive a prompt on mobile number <b>+254700000000</b>. <br/> Enter your M-Pesa PIN to authorize your payment of <b>KES 600.00</b> to account number <b>254700000000</b>. <br/><br/> If you do not get a prompt within 30 seconds, use the instructions",
        "status": "success",
        "reference": "Mobile Data",
        "description": "",
        "type": "mobile_money",
        "customer": {
            "name": "Fincra Developers",
            "email": "taofiq@fincra.com",
            "phoneNumber": null
        },
        "metadata": {
            "phone": "+254700000000",
            "operator": "SAFARICOM"
        },
        "settlementDestination": "wallet"
    }
}
```

## 4 - Set Up Webhook

As an optional step, you can configure your application to receive confirmation via webhooks. See [Webhooks](/docs/introduction) for more information. After configuring your webhook, we'll send you a notification with the transaction status to the URL you specified when [initiating a payment](/reference/initiate-a-charge). Please note that we only send notifications for successful and failed payments, we do not send notifications for expired transactions.

Read our [guide](/docs/secret-key) to learn how to secure and validate webhook notifications on your end.

Here's a sample of the webhook response:

```json
{
  "event": "charge.successful",
  "data": {
    "id": 932,
    "authorization": {
      "mode": "NONE",
      "redirect": null
    },
    "auth_model": "NONE",
    "amount": 50000,
    "currency": "NGN",
    "fee": 699.99,
    "message": "Mobile money charged successfully",
    "status": "success",
    "reference": "98329uniwud",
    "description": "",
    "type": "mobile_money",
    "customer": {
      "name": "Fincra Developers",
      "email": "taofiq@fincra.com",
      "phoneNumber": "+254700000000"
    },
    "settlementDestination": "wallet"
  }
}
}
```

## 5 - Resend OTP

If the customer did not receive the `OTP` or if the `OTP` has expired, you can resend the `OTP` to the customer's mobile number. To do so, send a request to our [resend OTP endpoint](/reference/resend-charge-otp) with the payment reference.

Here is how you can structure your request:

```json POST
{{base_url}}/checkout/charges/{id}/resend-otp
```
```json cURL
curl --location 'https://api.fincra.com/checkout/charges/:charge-id/resend-otp' \
--header 'x-business-id: <Your Business ID>' \
--header 'api-key: <Your API Secret key>' \
```

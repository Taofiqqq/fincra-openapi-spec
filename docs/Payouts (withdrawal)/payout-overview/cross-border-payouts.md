---
title: Cross Currency Payouts
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
Money can be transferred from one currency to another through cross-currency transactions. For instance, you may send US dollars to a bank account in Europe, or AUD to a bank account in the UK. You can make these transfers using both your portal and the API. This feature is available for both bank account transfers and mobile money transfers.

<Callout icon="📘" theme="info">
  ### **Read these first**

  To make cross-currency payouts with the Fincra API, read and understand the sections below.

  - [Payment Schemes](https://docs.fincra.com/docs/payment-scheme)
  - [Payment Destinations](https://docs.fincra.com/docs/transaction-types-1#payment-destination)
  - [Payout Overview](https://docs.fincra.com/docs/payout-overview)
</Callout>

<Callout icon="🔄" theme="default">
  ### **How cross-currency payouts work now**

  Cross-currency payouts convert first. Fincra buys the destination currency and credits your destination wallet **before** it attempts the bank transfer. The conversion is a completed, standalone step and is not reversed if the transfer later fails.

  This changes what happens on a failed payout:

  - If the conversion **succeeded** and the payout then failed, the funds stay in your **destination-currency wallet** at the rate you were quoted. You complete the payment with a same-currency payout (see Step 7). A failed payout in this case is **not** refunded to your source currency.
  - If the **conversion failed**, your source wallet is reversed automatically and nothing is held. You can retry the cross-currency payout.

  Same-currency payouts are unaffected.
</Callout>

**Note**

- All transfers have a timeframe by which they settle in the receiver's account. Review the [payment scheme](https://docs.fincra.com/docs/payment-scheme) section for settlement times.

## How to make a cross-border payout using the Fincra API

The following steps process a payment to a foreign account.

## 1 - Topup

Fund your account by making deposits or by requesting a manual top-up. You can create a virtual account to fund your wallet using our virtual account creation endpoints.

**Note:** To test transactions, fund your sandbox account. For more information, see the [test section](https://docs.fincra.com/docs/sandbox-environment).

<Callout icon="📘" theme="info">
  ### **Virtual account creation and funding**

  - [How to create a virtual account](https://docs.fincra.com/docs/how-to-create-virtual-accounts)
  - [How to fund your account in the live environment](https://docs.fincra.com/docs/fund-your-virtual-account)
  - [How to fund your account in the test environment](https://docs.fincra.com/docs/testing-your-integration#test-payouts-for--transfers)
</Callout>

## 2 - Verify the account number

Collect the customer's account information and confirm it is valid before sending money. This avoids transferring to a wrong or inaccurate account. See the [Verify Account Number API](https://docs.fincra.com/docs/verify-account-number) to learn how.

## 3 - Generate Quote

This is compulsory for cross-currency payouts. Use our [quote API](https://docs.fincra.com/docs/generate-quote) to get a quote.

**Please take note of the following**

- A quote expires after a certain period of time.
- The conversion is a committed step. Once the payout is created, the destination currency is bought and is not reversed if the bank transfer later fails.
- The [Payment Scheme Page](https://docs.fincra.com/docs/payment-scheme) lists the currencies that require a payment scheme.

**Fees**

- For `feeBearer: business`, the fee is included in `amountToCharge` and taken from the source side during the conversion. The destination side takes no extra payout fee, and the beneficiary receives the full destination amount.
- For `feeBearer: customer`, the fee is already included in the destination amount. You need no extra fee headroom in the destination wallet, and the beneficiary receives the correct amount after the fee.
- Payouts into NGN include the applicable stamp duty on the destination debit. If a payout fails after a successful conversion, the refund to the destination wallet includes that stamp duty.

**Quote request**

```json
{
    "sourceCurrency": "KES",
    "destinationCurrency": "GBP",
    "amount": "200000",
    "action": "send",
    "transactionType": "disbursement",
    "business": "{{your business ID}}",
    "feeBearer": "business",
    "paymentDestination": "bank_account",
    "paymentScheme": "fps"
}
```

**Quote response**

```json
{
    "success": true,
    "message": "Quote generated successfully",
    "data": {
        "sourceCurrency": "KES",
        "destinationCurrency": "GBP",
        "sourceAmount": 200000,
        "destinationAmount": 500,
        "action": "send",
        "transactionType": "disbursement",
        "fee": 30,
        "initialAmount": 200000,
        "quotedAmount": 500,
        "rate": 0.0025,
        "amountToCharge": 212000,
        "amountToReceive": 500,
        "reference": "336307af-4ab3-4842-ab09-1dee6e5ee6ee",
        "expireAt": "2022-04-02T15:28:05.692Z"
    }
}
```

## 4 - Request payout

Fill out all the necessary fields so your payment can be processed. If the wrong payload is sent, the transaction will fail and you will receive a failed response.

- Some currencies require a payment scheme. The list is on the [payment scheme page](https://docs.fincra.com/docs/payment-scheme).
- Payment status is returned after a request is received, and can be `successful`, `processing`, or `failed`.
- Add a `customerReference` to your payload to avoid sending duplicate transactions.
- **When a payout fails, check the conversion outcome before you retry:**
  - If `isConversionSuccessful` is `true`, the conversion already succeeded and the funds are in your destination-currency wallet. **Do not replay this request.** Complete the payment with a same-currency payout from the destination wallet (see Step 7). Replaying converts a second tranche and strands the first.
  - If `isConversionSuccessful` is `false`, the conversion failed and your source wallet has been reversed automatically. You can retry the cross-currency payout.
- A `Timeout Message` does not mean the transaction failed. Re-query using the [fetch endpoint](https://docs.fincra.com/docs/fetch-payout-by-customer-reference) before acting, and act only on an explicit `failed` status.

**Payout request**

```json
{
    "business" : "{{businessId}}",
    "sourceCurrency": "KES",
    "destinationCurrency": "GBP",
    "amount": 20000,
    "description": "i want to pay my vendor",
    "files": "https://filehosting.anywhere/transfer_reason.pdf",
    "paymentDestination": "bank_account",
    "customerReference": "b67vfv",
    "customerName": "John Doe",
    "beneficiary": {
        "firstName": "john",
        "lastName": "doe",
        "accountHolderName": "john doe",
        "phone": "0803443433",
        "accountNumber": "0124775489",
        "type": "corporate",
        "email": "john@example.com",
        "bankCode": "90909",
        "country": "GB",
        "sortCode": "908282"
    },
    "quoteReference": "6a61f5a6-dca5-4e99-b690-07a6896a696b",
    "paymentScheme": "fps"
}
```

**Payout response**

```json
{
    "success": true,
    "message": "Payout processed successfully",
    "data": {
        "id": 14483,
        "reference": "cb2c581b-58a5-4037-be65-1375631a51db",
        "customerReference": null,
        "status": "processing"
    }
}
```

## 5 - Receive and validate webhook notification

Listen for webhook events. We send a notification to your webhook URL indicating the payout status. Read our [guide](https://docs.fincra.com/docs/secret-key) on securing and validating the notification, and the [payout webhook page](https://docs.fincra.com/docs/payout-webhook) for the full webhook structure.

The payout webhook carries two conversion fields that separate the **conversion** outcome from the final **payout** outcome:

- `conversionStatus` — `successful`, `failed`, or absent for same-currency payouts.
- `isConversionSuccessful` — `true`, `false`, or `null`.

Branch on `isConversionSuccessful`, not on the event alone. A payout can be `failed` while its conversion is `successful`, which means the funds are waiting in your destination wallet.

**Webhook (successful)**

```json
{
    "event": "payout.successful",
    "data": {
        "id": 14380,
        "amountCharged": 212000,
        "amountReceived": 500,
        "recipient": {
            "name": "Hassan Sarz",
            "accountNumber": "0124775489",
            "type": "individual",
            "email": "hassan@example.com"
        },
        "fee": 150,
        "rate": 0.0019,
        "paymentScheme": "fps",
        "paymentDestination": "bank_account",
        "sourceCurrency": "KES",
        "destinationCurrency": "GBP",
        "status": "successful",
        "conversionStatus": "successful",
        "isConversionSuccessful": true,
        "createdAt": "2022-04-02T21:23:44.000Z",
        "updatedAt": "2022-04-02T21:23:50.000Z",
        "reference": "bf2eb02e-39fe-490a-b933-63f8c4d42125",
        "reason": "Payout was successful",
        "traceId": null,
        "valuedAt": "2022-04-03T21:23:50.000Z"
    }
}
```

**Webhook (failed after a successful conversion)**

```json
{
    "event": "payout.failed",
    "data": {
        "id": 14381,
        "sourceCurrency": "USD",
        "destinationCurrency": "NGN",
        "status": "failed",
        "conversionStatus": "successful",
        "isConversionSuccessful": true,
        "reason": "Invalid account number",
        "reference": "9d1f0c2a-4c77-4b1a-9a1e-2f2a4c1e77aa"
    }
}
```

When `status` is `failed` and `isConversionSuccessful` is `true`, the converted funds are in your destination-currency wallet. Complete the payment using Step 7. When `isConversionSuccessful` is `false`, the conversion failed and your source wallet has been reversed automatically.

**Validate webhook**

```javascript
import crypto from "crypto";

const encryptedData = crypto
      .createHmac("SHA512", merchantWebhookSecretKey)
      .update(JSON.stringify(payload))
      .digest("hex");
const signatureFromWebhook = req.headers['signature'];

if (encryptedData === signatureFromWebhook) {
  console.log("process");
} else {
  console.log("discard");
}
```

## 6 - Verify payment

Confirm the transaction using your `customerReference`. A visit to your webhook URL does not by itself prove the transaction succeeded, and if the webhook fails to reach your server you can confirm the payout with the [fetch a customer reference endpoint](https://docs.fincra.com/reference/fetch-payout-by-customer-reference).

After confirming a `failed` status, your next action depends on the conversion: if `isConversionSuccessful` is `true`, complete the payment with a same-currency payout (Step 7); if `false`, retry the cross-currency payout.

## 7 - Completing a failed payout

When a payout fails after a successful conversion, the funds are in your destination-currency wallet at the rate you were quoted. Complete the payment with a **new same-currency payout** from that wallet. **Do not replay the original cross-currency request** — that converts a second tranche and strands the first amount.

To recover:

1. Confirm the payout status is `failed` and `isConversionSuccessful` is `true`.
2. Send a same-currency payout from the destination wallet. Set `sourceCurrency` and `destinationCurrency` to the currency you now hold, use a new `customerReference`, correct the beneficiary if the account was wrong, and omit the quote (a quote applies to cross-currency payouts only). See [Same Currency Payouts](https://docs.fincra.com/docs/same-currency-payouts).

**Recovery request (same-currency payout)**

```json
{
    "business": "{{businessId}}",
    "sourceCurrency": "NGN",
    "destinationCurrency": "NGN",
    "amount": 100000,
    "paymentDestination": "bank_account",
    "customerReference": "new-unique-ref",
    "beneficiary": {
        "firstName": "john",
        "lastName": "doe",
        "accountHolderName": "john doe",
        "accountNumber": "0124775489",
        "bankCode": "090909",
        "type": "individual"
    }
}
```

<Callout icon="📘" theme="info">
  ### **Legacy payouts**

  Payouts created before this change (with no conversion status recorded) keep the previous behaviour and refund the source wallet on failure. During the transition you may see both behaviours: new cross-currency payouts refund to the destination wallet, legacy ones to the source wallet.
</Callout>

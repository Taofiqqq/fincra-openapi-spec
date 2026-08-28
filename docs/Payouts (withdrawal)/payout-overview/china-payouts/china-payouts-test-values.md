---
title: Test your integration
deprecated: false
hidden: false
metadata:
  robots: index
---
The sandbox does not call our payment partners or our identity partners. A built-in test partner answers instead. You select the answer with the values that you send, and you get the same result each time.

| Area     | Sandbox                                                               | Production                                     |
| :------- | :-------------------------------------------------------------------- | :--------------------------------------------- |
| Partners | A built-in test partner answers. No money moves. No document is read. | The real payment and identity partners answer. |
| Outcomes | You select the outcome with the values on this page.                  | The partner decides the outcome.               |
| Timing   | Seconds.                                                              | Minutes to days.                               |

Every other behaviour is real. The sandbox validates a request exactly as production validates it, so a payload the sandbox accepts is a payload production accepts. The sandbox delivers your webhooks in the normal way.

## Set up before you test

1. Send your sandbox key in the `api-key` header, to `https://sandboxapi.fincra.com`.
2. Create a sender with `currencyClassification` set to `CURRENCY_CLASSIFICATION_FCY`. The sandbox verifies an FCY sender and an ALL sender only.
3. Upload each document the sender needs. Verification starts by itself after the last document arrives.
4. Create the counterparty.
5. Send the payout.

Use a JPEG, a PNG or a PDF. The sandbox does not read the file content, so any valid file of the right type is enough.

## Choose the sender outcome

The last character of `idNumber` selects the verification result. Use any value for the other characters.

**An individual sender**

| `idNumber` ends with | Final `verificationStatus` | What it exercises                                                                                                                                         |
| :------------------- | :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`                  | `rejected`                 | A declined check. The warning codes are `ID_DATA_MISMATCH` and `NAME_VERIFICATION_FAILED`.                                                                |
| `2`                  | `in_review`                | A manual review. The warning code is `ADDRESS_MISMATCH`.                                                                                                  |
| `3`                  | `approved`                 | An approval where the sanctions screen returns a politically-exposed-person hit. The internal risk rating becomes high, and you still receive `approved`. |
| Any other character  | `approved`                 | A clean approval. Use this for your success path.                                                                                                         |

**A business sender**

| `idNumber` ends with | Final `verificationStatus` | What it exercises                                                                                    |
| :------------------- | :------------------------- | :--------------------------------------------------------------------------------------------------- |
| `1`                  | `rejected`                 | The company check is declined.                                                                       |
| `2`                  | `in_review`                | The company check needs a manual review.                                                             |
| `4`                  | `in_review`                | The company passes, but a document is not readable. Use this if you show feedback for each document. |
| Any other character  | `approved`                 | A clean approval.                                                                                    |

<Callout icon="🚧" theme="warn">
  ### The last character must be a digit

  An identification number that ends with a letter is always approved. `RC1234567A` approves. Put the digit last: `RC1234A7` ends with `7` and approves, `RC1234A1` ends with `1` and is rejected.
</Callout>

**To run a sender test again.** You can upload a document only while the sender is `pending`, and replace one only while the sender is `rejected`. A replacement returns the sender to `pending` and starts the verification again, so a rejected sender is the one to reuse. A sender at `in_review` waits for the compliance team and accepts no upload and no replacement. Create a new sender to carry on.

## Choose the payout outcome

The last two decimal places of the **destination amount** select the payout result. Use any value for the whole-number part.

| Amount ends with | Final status | Where it fails, and what you receive                                                                                                                        |
| :--------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.01`            | `failed`     | The partner accepts the payout, which then fails at settlement. You receive the acceptance webhook first, then the failure.                                 |
| `.02`            | `cancelled`  | The partner accepts the payout, which is then cancelled at settlement.                                                                                      |
| `.03`            | `processing` | The payout never settles. The status stays `processing` for about five minutes, then polling stops. Use this to test a payout that reaches no final status. |
| `.04`            | `failed`     | The partner rejects the payout at submission. You receive no acceptance webhook, only the failure.                                                          |
| `.05`            | `failed`     | Submission succeeds, then the partner rejects the payout at the acceptance step.                                                                            |
| `.06`            | `failed`     | The China declaration is rejected. CNY and CNH only. See below.                                                                                             |
| Any other value  | `successful` | The payout settles normally. Use this for your success path.                                                                                                |

```json A payout that fails at settlement
{
  "amount": 250.01,
  "destinationCurrency": "CNY"
}
```
```json The same payout, settling normally
{
  "amount": 250.00,
  "destinationCurrency": "CNY"
}
```

<Callout icon="🚧" theme="warn">
  ### Two decimal places, on the destination amount

  The sandbox rounds to the nearest minor unit before it reads the scenario, so `250.015` becomes `250.02` and the payout is cancelled instead of settled.

  The scenario comes from the destination amount, the amount the beneficiary receives. On a cross-currency payout the rate decides the destination amount, so you cannot control the decimal places and you get the default `successful`. Set the destination amount when you need a specific outcome.
</Callout>

## The China declaration step

Fincra declares a CNY payout to the regulator before the payment. No other corridor has this step, and the sandbox reproduces it so you can see every state your integration meets.

1. You send the payout. The status becomes `processing`.
2. Fincra submits the declaration and waits for the outcome.
3. The partner accepts the payout, which then settles as the amount above specifies.

Send an amount ending in `.06` to have the declaration rejected. The payout fails, the partner never accepts it, and the declaration is the reason.

<Callout icon="📘" theme="info">
  ### The China beneficiary rules apply in the sandbox

  A CNY beneficiary name needs Chinese characters, surname first, with no space. An individual beneficiary needs a phone number. The sandbox validates these exactly as production does, so get these values right here.
</Callout>

## Counterparties in the sandbox

| Status at creation | Meaning                                                                                                                           |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `active`           | The channel needs no registration. The counterparty is ready at once.                                                             |
| `pending`          | The registration is running. In the sandbox it becomes `active` in a few seconds, and you receive a `counterparty.updated` event. |

A counterparty you block stays blocked, in the sandbox as in production, and every payout to it is rejected. Use a spare counterparty for that test.

## How long each step takes

These times are approximate, and the sandbox is deliberately faster than production. Poll the record or wait for the event. Do not build around a fixed delay.

| Step                                                                 | Sandbox          | Production          |
| :------------------------------------------------------------------- | :--------------- | :------------------ |
| An individual verification, from the last document to a final status | A few seconds    | Minutes             |
| A business verification                                              | Under 10 seconds | Minutes to hours    |
| A counterparty registration                                          | Seconds          | Minutes to 48 hours |
| A payout settlement                                                  | Seconds          | Minutes to days     |
| A payout that never settles, `.03`                                   | About 5 minutes  | 10 days             |

## The webhooks you receive

The sandbox delivers a webhook to your registered callback URL exactly as production does. The event names and the payload shape are the same, so test your handler here.

| Event                  | Sent when                                                     |
| :--------------------- | :------------------------------------------------------------ |
| `sender.updated`       | A verification reaches `approved`, `rejected` or `in_review`. |
| `counterparty.updated` | A registration completes, with a success or a failure.        |

A payout event follows your existing payout webhook configuration, which the sandbox does not change. Set a `callbackUrl` on the sender or on the payout to replace your registered URL for one request, which helps when you test against a tunnel.

## Ten cases to run for China

| #  | Case                                                                                             | Expected result                                                                            |
| :- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| 1  | A business sender whose `idNumber` ends in any digit except 1, 2 or 4, with all four documents.  | `sender.updated` arrives with `approved`.                                                  |
| 2  | A business sender whose `idNumber` ends in `1`.                                                  | `rejected`. Then replace a document and confirm the sender returns to `pending`.           |
| 3  | A business sender whose `idNumber` ends in `4`.                                                  | `in_review`. Confirm your code waits and does not treat it as a failure.                   |
| 4  | A Chinese business counterparty with a valid 18-character code.                                  | `counterparty.updated` arrives with `active`.                                              |
| 5  | A Chinese individual counterparty with a resident identity card number and a `+86` phone number. | `active`.                                                                                  |
| 6  | A counterparty name in Latin characters.                                                         | Rejected at creation with a validation error.                                              |
| 7  | A `goods_purchase` payout with the invoice attached, destination amount ending `.00`.            | `processing`, then `successful`.                                                           |
| 8  | A `payroll_salary` payout with one of the two documents.                                         | `documents_required`, then `processing` after you upload the second.                       |
| 9  | A payout with a destination amount ending `.06`.                                                 | `failed`, with the China declaration as the reason.                                        |
| 10 | A payout with a destination amount ending `.03`.                                                 | Stays `processing` for about five minutes. Confirm your code does not treat it as settled. |

Also run three request-level failures: a payout with `paymentScheme` absent, three orders whose CNY amounts do not add up to the payout amount, and a repeated `customerReference`.

## What the sandbox cannot tell you

Test these against production, or ask us before you go live.

- **Whether a real document passes.** The sandbox reads no file, and never checks image quality, an expiry date or a name match. Production can decline a document the sandbox approved.
- **Whether a real person or company passes screening.** Every sanctions and adverse-media result here is simulated.
- **A partner-specific rejection.** Each partner has its own rules for a name, an address and a payment reference. The sandbox applies our validation, not theirs.
- **A real settlement time.** The sandbox times say nothing about the true speed of the corridor.
- **An exchange rate.** You cannot trade a sandbox rate.

## If something does not work

| What you see                                 | The cause, and the correction                                                                                                                                                                                      |
| :------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The sender stays `pending`.                  | Verification starts only when every required document is present. Check the list for that sender's `idType`. An individual without a passport also needs the back of the document.                                 |
| A message says you cannot upload a document. | An upload is accepted only while the sender is `pending`. The message gives the current status. Use the replace endpoint for a `rejected` sender.                                                                  |
| Your chosen outcome did not happen.          | For a sender, check the last character of `idNumber` is a digit. For a payout, check the destination amount has exactly two decimal places, and that you set the destination amount rather than the source amount. |
| The payout was rejected before submission.   | That combination of currency and payment scheme has no route. Production behaves the same way. Ask us which corridors your account has.                                                                            |
| An LCY sender needs no document upload.      | The sender was created as LCY, and an LCY sender is never verified. Create it with `CURRENCY_CLASSIFICATION_FCY`.                                                                                                  |

## Before you go live

- Your sender is `approved` and your counterparty is `active`.
- You send `senderId`, `paymentScheme` and `paymentDestination` on every payout.
- You send `additionalPayoutDetails` in the shape the purpose selects, with order amounts in CNY.
- Your `customerReference` is unique, and you reuse it on a retry.
- You handle `documents_required` and upload the rest.
- You handle a payout that stays `processing`, and one that fails after acceptance.
- You match each webhook on the payout reference.
- You ran the ten cases above.

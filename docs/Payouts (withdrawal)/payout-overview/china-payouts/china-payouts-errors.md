---
title: Errors
excerpt: Every error a China payout returns, what causes it, and the fix.
deprecated: false
hidden: true
metadata:
  robots: index
---
Search this page for the message the API returned.

`POST /send` runs its checks in one order and stops at the first failure: the schema, then the counterparty, then the sender, then the documents.

## Counterparty errors

| HTTP | Message                                                                             | `errorType`                         | Fix                                                                            |
| :--- | :---------------------------------------------------------------------------------- | :---------------------------------- | :----------------------------------------------------------------------------- |
| 404  | `Counterparty not found: <id>`                                                      |                                     | The id does not belong to your business. Check the id.                         |
| 422  | `Counterparty <id> is pending verification and cannot be used for payouts.`         | `COUNTERPARTY_PENDING_VERIFICATION` | The partner registration is not finished. Poll until `active`. Allow 48 hours. |
| 422  | `Counterparty <id> failed verification and cannot be used for payouts.`             | `COUNTERPARTY_VERIFICATION_FAILED`  | No partner accepted the account. Create a new counterparty.                    |
| 422  | `Counterparty <id> is blacklisted and cannot be used for payouts. Reason: <reason>` | `COUNTERPARTY_BLACKLISTED`          | The block is one-way. Create a new counterparty.                               |
| 422  | `Counterparty is of type <A>, but the payout request is for type <B>.`              | `COUNTERPARTY_TYPE_MISMATCH`        | Send `paymentScheme=cnaps`. See below.                                         |
| 422  | `Counterparty <id> has neither an account number nor an IBAN.`                      |                                     | The record has no account number. Create a new counterparty.                   |
| 500  | `Unable to verify counterparty: <id>`                                               |                                     | Retry with the same `customerReference`.                                       |

**How the type mismatch happens.** Fincra builds the type it expects from your request.

```text
expected type = UPPERCASE(destinationCurrency + "_" + paymentScheme)
```

`CNY` and `cnaps` give `CNY_CNAPS`. A missing `paymentScheme` gives `CNY_`, which matches nothing.

## Sender errors

| HTTP | Message                                                                        | Fix                                                                           |
| :--- | :----------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| 422  | `Invalid senderId provided for FCY payouts.`                                   | The sender does not exist. Check the id.                                      |
| 403  | `Invalid senderId provided for FCY payouts.`                                   | The sender belongs to another business.                                       |
| 403  | `Individual senders of Chinese nationality are not permitted for CNY payouts.` | See below.                                                                    |
| 403  | `Sender is blacklisted from making transactions.`                              | The sender is on your block list.                                             |
| 403  | `Sender is not approved to make transactions.`                                 | The verification is not `approved`, or the sender is a local-currency sender. |

**The rule for Chinese individuals.** Fincra rejects the payout when all three are true: the sender is an `individual`, the `countryOfOrigin` of the sender is `CN`, and the `entityType` of the counterparty is `individual`.

A Chinese individual sender can pay a business counterparty. A Chinese business sender has no limit. An individual sender with no recorded country of origin has no limit.

CNY is the only currency that accepts an individual sender at all. USD, EUR and GBP return `Individual senders currently not supported for <CURRENCY> payout.`

## Schema errors

| Message                                                | Cause                                                        |
| :----------------------------------------------------- | :----------------------------------------------------------- |
| `"counterpartyId" is required`                         | You did not send `counterpartyId`.                           |
| `"business" length must be 24 characters long`         | The business id is the wrong length.                         |
| `Purpose of fund is required`                          | You did not send `purposeOfFund`.                            |
| `"relationshipWithBeneficiary" is required`            | You did not send the relationship.                           |
| `"<field>" is not allowed`                             | You sent a field the endpoint does not accept.               |
| `"amount" must be an integer`                          | The source currency has no decimal places.                   |
| `"transactionId" is required`                          | `action` is `authenticate` and the transaction id is absent. |
| `Cannot continue, Duplicate Customer Reference Passed` | You used this `customerReference` before.                    |

## China payout errors

| Message                                                                                                    | Cause                                                                                                                        |
| :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `purposeOfFund is required for CNY/CNH payouts`                                                            | You did not send `purposeOfFund`.                                                                                            |
| `purposeOfFund is not supported for CNY/CNH payouts`                                                       | The purpose is not one of the 20 CNY values.                                                                                 |
| `"additionalPayoutDetails" is required`                                                                    | The trade details or the salary details are absent.                                                                          |
| `"additionalPayoutDetails" is not allowed`                                                                 | You sent the object on a payout that is not CNY.                                                                             |
| `platform requires at least one of name or url`                                                            | An order has no platform name and no shop address.                                                                           |
| `"amount" is required when there is more than one order`                                                   | You sent many orders and one has no amount. It is optional only on a single order.                                           |
| `The sum of order amounts (<total>) must equal the payout amount (<amount>)`                               | Same-currency payout. The amounts do not add up.                                                                             |
| `The sum of order amounts (<total>) must equal the amount the beneficiary receives (<amount> <currency>).` | Conversion. The amounts do not add up. Order amounts are in CNY, so calculate them from the destination amount of the quote. |
| `"orderedAt" must be a valid date or epoch-milliseconds timestamp`                                         | Fincra cannot read the order date.                                                                                           |
| `"quantity" must be less than or equal to 999`                                                             | The item quantity is too large.                                                                                              |

## Counterparty creation errors

Every rule on [Create a China counterparty](doc:china-payouts-create-a-counterparty) returns 400 with the code `validation_error`. The message names the field.

| Message                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------- |
| `address.country must be CN for CNY beneficiaries — CNAPS pays onshore Chinese accounts only`                     |
| `phone must be a valid Chinese mobile number for CNY beneficiaries (e.g. +8613800138000)`                         |
| `<field> must be in Chinese characters for CNY beneficiaries`                                                     |
| `document is required for individual CNY beneficiaries`                                                           |
| `document.type must be national_id for individual CNY beneficiaries`                                              |
| `document.number is required for individual CNY beneficiaries`                                                    |
| `phone is required for individual CNY beneficiaries`                                                              |
| `name must be the registered Chinese legal name for CNY beneficiaries`                                            |
| `registrationNumber is required for businesses incorporated in China`                                             |
| `registrationNumber must be a valid 18-character Unified Social Credit Code for businesses incorporated in China` |
| `specialEconomicZone is required for businesses incorporated in China`                                            |
| `counterparty already exists with the same account details`                                                       |

## Authentication errors

| HTTP | Code                 |
| :--- | :------------------- |
| 401  | `api_key_missing`    |
| 401  | `api_key_invalid`    |
| 401  | `invalid_ip_address` |
| 401  | `kyb_not_approved`   |

The IP check and the Know Your Business check run in production only.

Next: [Test your integration](doc:china-payouts-test-values).

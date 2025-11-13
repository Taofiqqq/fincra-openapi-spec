---
title: Direct Charge API
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
Direct Charge is Fincra's solution for businesses that require complete control over their payment processing workflows. This product offers a streamlined API integration for processors and businesses, a tailored solution that works with your app, allowing you to initiate charges across all supported currencies and payment methods through a minimal set of endpoints.

With the Direct Charge, you can implement your UI, tailor your payment flow and control the customer experience as you see fit.

## How does direct charge work?

The process of charging a customer consists of three key steps:

- **Initiate charge**:  This involves sending the transaction details and the customer's payment data to the [initiate charge endpoint](/reference/initiate-a-charge).
- **Authorize charge**:  Depending on the payment method, customers may need to authenticate the transaction with their payment provider. The payment provider could be a card issuer or mobile money operator. [authorize charge endpoint](/reference/authorize-a-charge)
  - Card: May require OTP verification or 3D Secure authentication.
  - Mobile Money: Currencies like GHS requires confirmation via the customer's mobile device
- **Verify  charge**: We strongly advise that you make a call to the [verify charge endpoint](/reference/verify-charge)  to verify the transaction status before you give any value to the customer.

<br />

> 📘 Direct Charge Options
> 
> Via the Direct Charge API, we currently offer support for the below payment methods:
> 
> - [Bank Transfer](https://docs.fincra.com/docs/bank-transfer-direct-charge) 
> - [Card Payments](card-payments-direct-charge)
> - [Mobile Money Payments](mobile-money-direct-charge)
> - [EFT Payments](/docs/pay-with-eft)

## Important Requirements

**Note:** To process card payments using the Direct Charge API, your business must be PCI-DSS compliant. This ensures you meet the security standards required to handle sensitive card data directly.

## Best Practices

- Consider implementing webhooks to receive real-time payment status updates.
- Store transaction references for reconciliation and customer support
- Implement retry logic for failed transactions where appropriate
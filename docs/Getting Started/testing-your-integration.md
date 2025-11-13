---
title: Test Your Integrations
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
It is critical to test your integration prior to going live to ensure that it functions properly. As a result, we built test bank accounts and test cards for you to use as you connect with Fincra to mimic different payment scenarios.

## Test Cards (For Collections)

In Test mode, real payment cards will not operate. If you need to test your card payment integration, you can use any of the following test cards:

For Successful Payment (No Authentication) - Mastercard\
Card Number: 5319 3178 0136 6660\
Expiry Date: 10/26\
CVV: 000

***

For Successful Payment (with PIN) - Mastercard\
Card Number: 5366 1398 3386 4633\
Expiry Date: 06/26\
CVV: 123\
PIN: 1234

***

For Successful Payment (with OTP) - Mastercard\
Card Number: 5333 0182 4843 9266\
Expiry Date: 06/26\
CVV: 123\
PIN: 1234\
OTP: 123456

***

For Successful Payment (with 3D Secure) - Visa\
Card Number: 4084 0800 0000 0409\
Expiry Date: 09/26\
CVV: 231\
OTP: 123456\
PIN: 1234

***

For Failed Payment (Insufficient Funds) - Visa\
Card Number: 4084 0800 0000 5408\
Expiry Date: 06/26\
CVV: 000\
PIN: 1234

<br />

## Test Payouts (For  Transfers)

You will need to have funds in your wallet before you can test any transfers. You can fund your wallet by clicking the "fund wallet" button on the page where you manage your wallet or the homepage of your portal.

### Step 1

Login to your portal and locate the `FUND YOUR WALLET` button on the homepage . Then click it

<br />

![](https://files.readme.io/d14f9ee-Fund_1_.png)

<br/>

### Step 2

Enter the desired amount to be added to your wallet. Proceed by clicking on the continue button. Once your account has been funded, you'll get a notification.That your account has been funded successfully

![](https://files.readme.io/6ec6dcc-Fund_2.png)

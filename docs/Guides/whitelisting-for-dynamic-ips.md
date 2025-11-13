---
title: NEW - IP Whitelisting Policy
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Dear valued Merchant.

We have noted some of the concerns raised by our developer community regarding "Dynamic IP" addresses. This guide aims to help you get your api keys so you can test, and at the same time allow requests from any IP address if needed. We would continue working on making the change and the process seamless.

This process would take you less than 5 minutes to complete.

## You might have come across this trying to get your api keys

<Image align="center" src="https://files.readme.io/c06966f-Screenshot_2023-10-17_at_13.02.16.png" />

## Or maybe this, when you were trying to update your ip

<Image align="center" src="https://files.readme.io/624d50e-Step_10.png" />

## No need to worry, just follow the steps below

## Step 1

Follow the steps in this tutorial  [Getting your IP address whitelisted](https://docs.fincra.com/docs/geting-your-ip-address-whitelisted). Use the wildcard ip "0.0.0.0" as your ip address. Skip this step if you have already done this.\
Note, we only accept actual IP addresses and not CIDR Blocks (e.g 0.0.0.0/0)

## Step 2

Navigate to the **API Keys and Webhooks** tab and save the secret key, public key and webhook key in a secure location where you can easily access it. Also provide a webhook url, if available. It's recommended to have this while on prod.

<Image align="center" src="https://files.readme.io/cf271e9-image.png" />

## Step 3

After this has been done, kindly reach out to a support staff, and provide your request in any of the below formats that meets your use case.

"Merchant: Merchant Name, Reason: IP Whitelist, Task: Remove IP dependency"

"Merchant: Merchant Name, Reason: IP Whitelist, Task: Update IP address, IP: [First IP, Second IP]"

## Step 4

Wait for confirmation from the support staff.

## Note

If your request was to remove the ip whitelisting restriction on your account due to use of dynamic ip's, make sure to have the api keys stored as stated in Step 2 above, because once the ip restriction has been lifted, you'd get the screen below. 

**This does not affect your already generated keys! they are still active, you just won't be able to see it on the dashboard**

It is a temporary measure and we are already working on optimising this process.

<Image align="center" src="https://files.readme.io/fa17700-Step_3.png" />

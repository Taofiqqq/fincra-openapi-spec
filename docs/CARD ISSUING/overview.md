---
title: Overview
deprecated: false
hidden: true
metadata:
  robots: index
---
<br />

# 💳 Card Issuing

Fincra Card Issuing allows businesses to issue and manage payment cards for individuals and businesses.

With this product, you can:

* Issue virtual and physical cards
* Create and manage cardholders
* Fund cards directly from your wallet
* Retrieve card details securely
* Control the lifecycle of cards

***

## 🧭 What You Can Build

Using Fincra Card Issuing, you can build:

### Employee Expense Cards

Issue cards to employees and control how funds are spent.

### Vendor Payment Cards

Create dedicated cards for supplier or operational payments.

### Virtual Payment Cards

Generate cards for online or one-time transactions.

***

## 🔄 How It Works

Card issuing on Fincra follows a simple, wallet-backed model:

1. Activate a card product
2. Create a cardholder
3. Issue a card
4. Activate the card
5. Fund the card
6. Use the card for transactions

Each step is exposed via API and can be integrated into your workflow.

***

## 🚀 Issuing Flow

Below is the typical flow to issue and use a card:

### Step 1: Get Available Card Products

Retrieve the card products available to your business.

<br />

***

### Step 2: Activate a Card Product

Activate a card product before issuing cards.

<br />

***

### Step 3: Create a Cardholder

Create the entity that will own the card.

<br />

Supports:

* Individual
* Business

***

### Step 4: Issue a Card

Create a card linked to the cardholder.

<br />

***

### Step 5: Activate the Card

Activate the card before use.

<br />

***

### Step 6: Set Card PIN

Set a PIN for POS and ATM transactions.

<br />

***

### Step 8: Start Using the Card

Once funded, the card can be used for transactions.

You can also:

* Retrieve card details
* Monitor card status
* Manage lifecycle

***

## 📦 Core Concepts

### Card Product

Defines the type of card you can issue.

### Cardholder

Represents the entity that owns a card.

* Individual (KYC)
* Business (KYB)

### Card

A payment instrument issued to a cardholder.

* Virtual cards
* Physical cards

### Funding Model

Cards are funded from your Fincra wallet.

* You control how much is available per card
* Funds must be loaded before transactions occur

***

## 🔐 Accessing Card Details

To retrieve full card details:

***

### Step 7: Fund the Card

Load funds onto the card.

---
title: Homepage (COPY)
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
# Welcome to our API documentation

Fincra offers a contemporary financial infrastructure designed for businesses and developers, enabling them to facilitate local and international payouts, gather payments from customers, and create virtual accounts.

# Get Started

Regardless of whether you are a startup or a global enterprise, discover the seamless integration process with Fincra! Most teams are up and running in just 30 minutes, experiencing the full benefits of our platform.

<br />

<HTMLBlock>{`
<div style="border: 1px solid #4B5563; border-radius: 12px; padding: 20px; background-color: #1F2937; color: #F9FAFB; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #FBBF24;">🌍 Cross-Currency Checkout</h3>
  <p style="color: #E5E7EB;">Allow customers to pay in one currency and get settled in another — seamlessly. Perfect for global merchants.</p>
  <ul style="padding-left: 20px; color: #D1D5DB;">
    <li>🌐 Supports EUR, USD, GBP, and more</li>
    <li>🔄 Real-time FX quote generation</li>
    <li>📦 Integrated into Fincra Checkout</li>
  </ul>
  <a href="/docs/cross-currency-checkout" style="color: #93C5FD; font-weight: bold; text-decoration: none;">🔎 Learn More →</a>
</div>
`}</HTMLBlock>

<br />

<HTMLBlock>{`
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-top: 40px;">
  
  <!-- Card: Receive Payments -->
  <div style="display: flex; align-items: flex-start; gap: 12px;">
    <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="Collections" width="32" height="32">
    <div>
      <strong style="display: block; font-size: 16px; color: white;">Receive Payments</strong>
      <p style="margin: 0; font-size: 14px; color: #6B7280;">
        Card Payment, Bank Transfer, Virtual Account, Mobile Money
      </p>
    </div>
  </div>

  <!-- Card: Make Payments -->
  <div style="display: flex; align-items: flex-start; gap: 12px;">
    <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="Payout" width="32" height="32">
    <div>
      <strong style="display: block; font-size: 16px; color: white;">Make Payments</strong>
      <p style="margin: 0; font-size: 14px; color: #6B7280;">
        Bank Transfer, Mobile Money
      </p>
    </div>
  </div>

  <!-- Card: Convert Money -->
  <div style="display: flex; align-items: flex-start; gap: 12px;">
    <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="FX" width="32" height="32">
    <div>
      <strong style="display: block; font-size: 16px; color: white;">Convert Money</strong>
      <p style="margin: 0; font-size: 14px; color: #6B7280;">
        FX Conversion with real-time rates
      </p>
    </div>
  </div>

  <!-- Add more cards as needed -->
</div>
`}</HTMLBlock>

<br />

<HTMLBlock>{`
<div style="border:1px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:20px; background:#fff; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <div style="display:flex; align-items:flex-start; gap:16px;">
    <div>
      <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="icon" style="width:40px; height:40px; border-radius:8px;"/>
    </div>
    <div style="flex:1;">
      <h3 style="margin:0; font-size:1.125rem; color:#111827;">Virtual Accounts</h3>
      <p style="margin:4px 0 0; color:#4b5563; font-size:0.95rem;">
        Instantly issue NGN, USD, and EUR accounts for your business or users. Enable seamless cross-border payments and collections.
      </p>
    </div>
  </div>
</div>
`}</HTMLBlock>

<br />

<HTMLBlock>{`
<style>
  :root {
    /* Explicit light mode colors */
    --card-title-color: #111827;
    --card-desc-color: #6B7280;
    --section-title-color: #374151;
    --card-bg: #fff;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --card-title-color: #F9FAFB;
      --card-desc-color: #D1D5DB;
      --section-title-color: #FFFFFF;
      --card-bg: #1a1a1a;
    }
  }

  .fincra-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 32px;
    padding: 24px 0;
  }

  .fincra-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--card-bg);
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.04);
    transition: background 0.3s;
  }

  .fincra-card img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .fincra-card-title {
    font-weight: 600;
    font-size: 16px;
    color: var(--card-title-color);
  }

  .fincra-card-desc {
    font-size: 14px;
    margin-top: 2px;
    color: var(--card-desc-color);
  }

  .fincra-text-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .fincra-section-title {
    font-size: 18px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 16px;
    color: var(--section-title-color);
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 600px) {
    .fincra-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 12px 0;
    }
    .fincra-card {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 8px;
    }
    .fincra-card img {
      margin-bottom: 4px;
			margin-left: revert-layer;
    }
  }
</style>

<!-- Section: RECEIVE PAYMENTS -->
<h3 class="fincra-section-title">RECEIVE PAYMENTS</h3>
  <div class="fincra-grid">
    <div class="fincra-card">
      <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="">
      <div class="fincra-text-group">
        <div class="fincra-card-title">Card Payments</div>
        <div class="fincra-card-desc">Accept debit and credit cards</div>
      </div>
    </div>

    <a class="fincra-card" href="https://fincra.com">
      <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="">
      <div class="fincra-text-group">
        <div class="fincra-card-title">Bank Transfer</div>
        <div class="fincra-card-desc">Local and international transfers</div>
      </div>
    </a>

    <div class="fincra-card">
      <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="">
      <div class="fincra-text-group">
        <div class="fincra-card-title">Virtual Accounts</div>
        <div class="fincra-card-desc">NGN, USD, EUR virtual IBANs</div>
      </div>
    </div>

    <div class="fincra-card">
      <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="">
      <div class="fincra-text-group">
        <div class="fincra-card-title">Mobile Money</div>
        <div class="fincra-card-desc">Receive payments via wallets</div>
      </div>
    </div>
  </div>
`}</HTMLBlock>

<br />

<HTMLBlock>{`
<div style="display: flex; flex-wrap: wrap; gap: 16px; margin: 0 -8px;">
  <!-- Card 1 -->
  <div style="flex: 1 1 300px; min-width: 300px; max-width: calc(50% - 8px); box-sizing: border-box; padding: 8px;">
    <div style="border:1px solid #e5e7eb; border-radius:12px; padding:20px; background:#fff; box-shadow:0 4px 6px rgba(0,0,0,0.05); height:100%;">
      <div style="display:flex; gap:16px;">
        <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="icon" style="width:40px; height:40px; border-radius:8px;">
        <div>
          <h3 style="margin:0; font-size:1.125rem; color:#111827;">Receive Payments</h3>
          <p style="margin:4px 0 0; color:#4b5563; font-size:0.95rem;">Card Payments, Bank Transfer, Mobile Money, Virtual Accounts</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2 -->
  <div style="flex: 1 1 300px; min-width: 300px; max-width: calc(50% - 8px); box-sizing: border-box; padding: 8px;">
    <div style="border:1px solid #e5e7eb; border-radius:12px; padding:20px; background:#fff; box-shadow:0 4px 6px rgba(0,0,0,0.05); height:100%;">
      <div style="display:flex; gap:16px;">
        <img src="https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png" alt="icon" style="width:40px; height:40px; border-radius:8px;">
        <div>
          <h3 style="margin:0; font-size:1.125rem; color:#111827;">Make Payments</h3>
          <p style="margin:4px 0 0; color:#4b5563; font-size:0.95rem;">Send to Bank Accounts and Mobile Money in multiple countries</p>
        </div>
      </div>
    </div>
  </div>
</div>
`}</HTMLBlock>

<br />

# Have Questions?

We are dedicated to assisting you with any inquiries regarding code or other aspects. Explore our documentation, reach out to us on [Twitter](https://twitter.com/FincraHQ) with a friendly 👋 ,contact our [support team](https://fincrasupport.freshdesk.com/support/home), or engage in a conversation with our sales representatives. If you encounter any technical obstacles, feel free to post your questions on our [community forum](https://join.slack.com/t/fincrahub/shared_invite/zt-1dvud5gcz-Jwr_3uA2HUA_S~iv7Z7eng) .

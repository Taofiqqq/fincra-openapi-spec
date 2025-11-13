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

[block:html]
{
  "html": "<div style=\"border: 1px solid #4B5563; border-radius: 12px; padding: 20px; background-color: #1F2937; color: #F9FAFB; margin: 20px 0;\">\n  <h3 style=\"margin-top: 0; color: #FBBF24;\">🌍 Cross-Currency Checkout</h3>\n  <p style=\"color: #E5E7EB;\">Allow customers to pay in one currency and get settled in another — seamlessly. Perfect for global merchants.</p>\n  <ul style=\"padding-left: 20px; color: #D1D5DB;\">\n    <li>🌐 Supports EUR, USD, GBP, and more</li>\n    <li>🔄 Real-time FX quote generation</li>\n    <li>📦 Integrated into Fincra Checkout</li>\n  </ul>\n  <a href=\"/docs/cross-currency-checkout\" style=\"color: #93C5FD; font-weight: bold; text-decoration: none;\">🔎 Learn More →</a>\n</div>\n"
}
[/block]


<br />

[block:html]
{
  "html": "<div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-top: 40px;\">\n  \n  <!-- Card: Receive Payments -->\n  <div style=\"display: flex; align-items: flex-start; gap: 12px;\">\n    <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"Collections\" width=\"32\" height=\"32\">\n    <div>\n      <strong style=\"display: block; font-size: 16px; color: white;\">Receive Payments</strong>\n      <p style=\"margin: 0; font-size: 14px; color: #6B7280;\">\n        Card Payment, Bank Transfer, Virtual Account, Mobile Money\n      </p>\n    </div>\n  </div>\n\n  <!-- Card: Make Payments -->\n  <div style=\"display: flex; align-items: flex-start; gap: 12px;\">\n    <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"Payout\" width=\"32\" height=\"32\">\n    <div>\n      <strong style=\"display: block; font-size: 16px; color: white;\">Make Payments</strong>\n      <p style=\"margin: 0; font-size: 14px; color: #6B7280;\">\n        Bank Transfer, Mobile Money\n      </p>\n    </div>\n  </div>\n\n  <!-- Card: Convert Money -->\n  <div style=\"display: flex; align-items: flex-start; gap: 12px;\">\n    <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"FX\" width=\"32\" height=\"32\">\n    <div>\n      <strong style=\"display: block; font-size: 16px; color: white;\">Convert Money</strong>\n      <p style=\"margin: 0; font-size: 14px; color: #6B7280;\">\n        FX Conversion with real-time rates\n      </p>\n    </div>\n  </div>\n\n  <!-- Add more cards as needed -->\n</div>\n"
}
[/block]


<br />

[block:html]
{
  "html": "<div style=\"border:1px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:20px; background:#fff; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\">\n  <div style=\"display:flex; align-items:flex-start; gap:16px;\">\n    <div>\n      <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"icon\" style=\"width:40px; height:40px; border-radius:8px;\"/>\n    </div>\n    <div style=\"flex:1;\">\n      <h3 style=\"margin:0; font-size:1.125rem; color:#111827;\">Virtual Accounts</h3>\n      <p style=\"margin:4px 0 0; color:#4b5563; font-size:0.95rem;\">\n        Instantly issue NGN, USD, and EUR accounts for your business or users. Enable seamless cross-border payments and collections.\n      </p>\n    </div>\n  </div>\n</div>\n"
}
[/block]


<br />

[block:html]
{
  "html": "<style>\n  :root {\n    /* Explicit light mode colors */\n    --card-title-color: #111827;\n    --card-desc-color: #6B7280;\n    --section-title-color: #374151;\n    --card-bg: #fff;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --card-title-color: #F9FAFB;\n      --card-desc-color: #D1D5DB;\n      --section-title-color: #FFFFFF;\n      --card-bg: #1a1a1a;\n    }\n  }\n\n  .fincra-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 32px;\n    padding: 24px 0;\n  }\n\n  .fincra-card {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background: var(--card-bg);\n    border-radius: 12px;\n    padding: 16px;\n    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.04);\n    transition: background 0.3s;\n  }\n\n  .fincra-card img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n\n  .fincra-card-title {\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--card-title-color);\n  }\n\n  .fincra-card-desc {\n    font-size: 14px;\n    margin-top: 2px;\n    color: var(--card-desc-color);\n  }\n\n  .fincra-text-group {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .fincra-section-title {\n    font-size: 18px;\n    font-weight: 700;\n    margin-top: 40px;\n    margin-bottom: 16px;\n    color: var(--section-title-color);\n  }\n\n  /* Responsive adjustments for mobile */\n  @media (max-width: 600px) {\n    .fincra-grid {\n      grid-template-columns: 1fr;\n      gap: 20px;\n      padding: 12px 0;\n    }\n    .fincra-card {\n      flex-direction: column;\n      align-items: flex-start;\n      text-align: left;\n      gap: 8px;\n    }\n    .fincra-card img {\n      margin-bottom: 4px;\n\t\t\tmargin-left: revert-layer;\n    }\n  }\n</style>\n\n<!-- Section: RECEIVE PAYMENTS -->\n<h3 class=\"fincra-section-title\">RECEIVE PAYMENTS</h3>\n  <div class=\"fincra-grid\">\n    <div class=\"fincra-card\">\n      <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"\">\n      <div class=\"fincra-text-group\">\n        <div class=\"fincra-card-title\">Card Payments</div>\n        <div class=\"fincra-card-desc\">Accept debit and credit cards</div>\n      </div>\n    </div>\n\n    <a class=\"fincra-card\" href=\"https://fincra.com\">\n      <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"\">\n      <div class=\"fincra-text-group\">\n        <div class=\"fincra-card-title\">Bank Transfer</div>\n        <div class=\"fincra-card-desc\">Local and international transfers</div>\n      </div>\n    </a>\n\n    <div class=\"fincra-card\">\n      <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"\">\n      <div class=\"fincra-text-group\">\n        <div class=\"fincra-card-title\">Virtual Accounts</div>\n        <div class=\"fincra-card-desc\">NGN, USD, EUR virtual IBANs</div>\n      </div>\n    </div>\n\n    <div class=\"fincra-card\">\n      <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"\">\n      <div class=\"fincra-text-group\">\n        <div class=\"fincra-card-title\">Mobile Money</div>\n        <div class=\"fincra-card-desc\">Receive payments via wallets</div>\n      </div>\n    </div>\n  </div>"
}
[/block]


<br />

[block:html]
{
  "html": "<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin: 0 -8px;\">\n  <!-- Card 1 -->\n  <div style=\"flex: 1 1 300px; min-width: 300px; max-width: calc(50% - 8px); box-sizing: border-box; padding: 8px;\">\n    <div style=\"border:1px solid #e5e7eb; border-radius:12px; padding:20px; background:#fff; box-shadow:0 4px 6px rgba(0,0,0,0.05); height:100%;\">\n      <div style=\"display:flex; gap:16px;\">\n        <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"icon\" style=\"width:40px; height:40px; border-radius:8px;\">\n        <div>\n          <h3 style=\"margin:0; font-size:1.125rem; color:#111827;\">Receive Payments</h3>\n          <p style=\"margin:4px 0 0; color:#4b5563; font-size:0.95rem;\">Card Payments, Bank Transfer, Mobile Money, Virtual Accounts</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Card 2 -->\n  <div style=\"flex: 1 1 300px; min-width: 300px; max-width: calc(50% - 8px); box-sizing: border-box; padding: 8px;\">\n    <div style=\"border:1px solid #e5e7eb; border-radius:12px; padding:20px; background:#fff; box-shadow:0 4px 6px rgba(0,0,0,0.05); height:100%;\">\n      <div style=\"display:flex; gap:16px;\">\n        <img src=\"https://fincra.com/wp-content/uploads/2022/10/cropped-Favicon.png\" alt=\"icon\" style=\"width:40px; height:40px; border-radius:8px;\">\n        <div>\n          <h3 style=\"margin:0; font-size:1.125rem; color:#111827;\">Make Payments</h3>\n          <p style=\"margin:4px 0 0; color:#4b5563; font-size:0.95rem;\">Send to Bank Accounts and Mobile Money in multiple countries</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
}
[/block]


<br />

# Have Questions?

We are dedicated to assisting you with any inquiries regarding code or other aspects. Explore our documentation, reach out to us on [Twitter](https://twitter.com/FincraHQ) with a friendly 👋 ,contact our [support team](https://fincrasupport.freshdesk.com/support/home), or engage in a conversation with our sales representatives. If you encounter any technical obstacles, feel free to post your questions on our [community forum](https://join.slack.com/t/fincrahub/shared_invite/zt-1dvud5gcz-Jwr_3uA2HUA_S~iv7Z7eng) .
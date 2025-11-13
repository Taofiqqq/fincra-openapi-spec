---
title: Admin Portal
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
The admin portal allows administrators to perform activities such as transaction monitoring, reconciliation, etc. The primary user is the Fincra Merchant. 

An admin can :
1. Onboard agents 
2. View agents registered and their activities 
3. Activate / Deactivate Agents 
4. View detailed transaction history (e.g. the total number of transactions carried out by the agents in sum and numbers per location per state, the balance in their wallet. This is represented with numbers and the chart).
5. Set up users within their company and grant/ restrict permissions as to what users can do.

##Admin Portal Overview
-----------------------------
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0741df4-Merchant-portal.png",
        "Merchant-portal.png",
        3160,
        1621,
        "#000000"
      ]
    }
  ]
}
[/block]
On the admin portal, we have the following displayed:
[block:parameters]
{
  "data": {
    "0-0": "Total Profiled Merchants",
    "1-0": "Total Active Merchants",
    "2-0": "Merchants Actively Transacting",
    "3-0": "Aggregated Wallet Balance",
    "4-0": "Total Transaction Volume",
    "5-0": "Total Transaction Count",
    "6-0": "Successful Transaction Volume",
    "7-0": "Successful Transaction Count",
    "0-1": "This refers to the total number of agents registered",
    "1-1": "Total number of agents active",
    "2-1": "Number of agents actively transacting",
    "3-1": "All agents’ total balance",
    "4-1": "Total amount of transactions carried out",
    "5-1": "Total number of transactions carried out",
    "6-1": "Total  amount of successful transactions carried out",
    "7-1": "Total number of successful transactions carried out"
  },
  "cols": 2,
  "rows": 8
}
[/block]
###Agent Menu
-----------------------------
1. Create agent: Here, the administrator registers a new agent(s). This is done by inputting the following information required agent’s details as required
[block:parameters]
{
  "data": {
    "0-0": "Basic Information",
    "0-1": "These are the agent’s business phone number, and BVN",
    "1-0": "Personal Information",
    "1-1": "Here, the administrator is required to fill in the agent's personal information such as names, email address, date of birth, and gender.",
    "2-0": "Business Information",
    "2-1": "This section is for information about the business; such as business name, state and local government where the business is located, business type, and agent type.",
    "3-0": "Account Information",
    "3-1": "Here are details about the account, such as account number, account name, bank name, Identity type, ID type number",
    "4-0": "Document Upload",
    "4-1": "Documents such as utility bills, guarantor forms, ID cards, and passports are uploaded.\nWith all the information correctly filled, the administrator submits by clicking the submit button. The new user has been created."
  },
  "cols": 2,
  "rows": 5
}
[/block]
**NB**
While filling in the agent type, for sub-agent, `super-agent code` is required; for the `super agent` type; super-agent code is no longer necessary.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/42924e8-Merchants.png",
        "Merchants.png",
        3291,
        1437,
        "#000000"
      ]
    }
  ]
}
[/block]
2. View Agents
The administrator can view all their registered agents with their details. The administrator can filter the kind of agent he wants to view by clicking on the ‘filter’ button, having pre-selected the filtering options
Filter by type (either sub-agents or super-agents), filter by state, local government, manager, date, names, and aggregator (code of the agent that referred).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6faa5f8-view_agents.jpg",
        "view_agents.jpg",
        3283,
        1112,
        "#000000"
      ]
    }
  ]
}
[/block]
3. View Aggregators
Aggregators are called super-agent. The page displays the super-agent’s details, which include the number of the agent(s) under the aggregator/ super-agent. It can be downloaded in Excel format by clicking the ‘excel’ button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3e167c1-aggregators.png",
        "aggregators.png",
        3248,
        1048,
        "#000000"
      ]
    }
  ]
}
[/block]
###Miscellaneous
-----------------------------
An administrator can perform actions such as assigning terminals, debit merchant wallets, deactivating merchants, and as can be seen in the image below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/feef5ca-Miscelenous.png",
        "Miscelenous.png",
        3233,
        1218,
        "#000000"
      ]
    }
  ]
}
[/block]

###Transactions Menu
-----------------------------
  * Transaction history:- Displays the details of transactions carried out by each of the agents, stating the transaction IDs, transaction reference, and transaction reference.
  * Cash withdrawals:- Give records of cashout transactions in terminals, the successful ones, the failed ones due to insufficient balance, and those that failed due to incorrect pin entered (this category is called Error code).
  * Admin Transactions:- Displays all the transactions carried out by the merchant on the agent's wallet.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1022e0-view_agents.jpg",
        "view_agents.jpg",
        3283,
        1112,
        "#000000"
      ]
    }
  ]
}
[/block]
###Report and Analytics
-----------------------------
Agents and transaction counts for each state are represented on this page. This has the following sub-menus;
  * Transactions Map: Here, the number of transactions carried out per state is represented on the map
  * Agent map: The number of agents in each state is represented on the map
  * Chargeback Report: A report of chargebacks encountered on transactions.
  * Tickets: This is made available for agents to raise their complaints, and the complaint is sent to the merchant of that agent. The merchants are able to see Opened tickets, tickets on hold, resolved tickets, and closed tickets.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a8e10a-Reports_Analytics.jpg",
        "Reports_Analytics.jpg",
        3255,
        1023,
        "#000000"
      ]
    }
  ]
}
[/block]
###Terminal Inventory
-----------------------------
POS Terminals:- This gives information about each Terminal point, such as the terminal ID, name of an agent assigned, serial number, and terminal status (if the agent has been assigned or not). Also, a new terminal can be added to this page, and terminals can be edited by clicking on the edit icon.

  * View Terminals 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c6a2acd-terminal.png",
        "terminal.png",
        3293,
        1364,
        "#000000"
      ]
    }
  ]
}
[/block]
  * Add Terminal 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/537bb55-Add_Terminal.png",
        "Add_Terminal.png",
        3231,
        1455,
        "#000000"
      ],
      "border": false
    }
  ]
}
[/block]
  * Edit Terminal 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ecfb87e-update_terminal.png",
        "update_terminal.png",
        3210,
        1519,
        "#000000"
      ]
    }
  ]
}
[/block]
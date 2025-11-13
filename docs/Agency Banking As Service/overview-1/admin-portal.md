---
title: Admin Portal
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
The admin portal allows administrators to perform activities such as transaction monitoring, reconciliation, etc. The primary user is the Fincra Merchant. 

An admin can :

1. Onboard agents 
2. View agents registered and their activities 
3. Activate / Deactivate Agents 
4. View detailed transaction history (e.g. the total number of transactions carried out by the agents in sum and numbers per location per state, the balance in their wallet. This is represented with numbers and the chart).
5. Set up users within their company and grant/ restrict permissions as to what users can do.

## Admin Portal Overview

***

![3160](https://files.readme.io/0741df4-Merchant-portal.png "Merchant-portal.png")

On the admin portal, we have the following displayed:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Total Profiled Merchants
      </td>

      <td>
        This refers to the total number of agents registered
      </td>
    </tr>

    <tr>
      <td>
        Total Active Merchants
      </td>

      <td>
        Total number of agents active
      </td>
    </tr>

    <tr>
      <td>
        Merchants Actively Transacting
      </td>

      <td>
        Number of agents actively transacting
      </td>
    </tr>

    <tr>
      <td>
        Aggregated Wallet Balance
      </td>

      <td>
        All agents’ total balance
      </td>
    </tr>

    <tr>
      <td>
        Total Transaction Volume
      </td>

      <td>
        Total amount of transactions carried out
      </td>
    </tr>

    <tr>
      <td>
        Total Transaction Count
      </td>

      <td>
        Total number of transactions carried out
      </td>
    </tr>

    <tr>
      <td>
        Successful Transaction Volume
      </td>

      <td>
        Total  amount of successful transactions carried out
      </td>
    </tr>

    <tr>
      <td>
        Successful Transaction Count
      </td>

      <td>
        Total number of successful transactions carried out
      </td>
    </tr>
  </tbody>
</Table>

### Agent Menu

***

1. Create agent: Here, the administrator registers a new agent(s). This is done by inputting the following information required agent’s details as required

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Basic Information
      </td>

      <td>
        These are the agent’s business phone number, and BVN
      </td>
    </tr>

    <tr>
      <td>
        Personal Information
      </td>

      <td>
        Here, the administrator is required to fill in the agent's personal information such as names, email address, date of birth, and gender.
      </td>
    </tr>

    <tr>
      <td>
        Business Information
      </td>

      <td>
        This section is for information about the business; such as business name, state and local government where the business is located, business type, and agent type.
      </td>
    </tr>

    <tr>
      <td>
        Account Information
      </td>

      <td>
        Here are details about the account, such as account number, account name, bank name, Identity type, ID type number
      </td>
    </tr>

    <tr>
      <td>
        Document Upload
      </td>

      <td>
        Documents such as utility bills, guarantor forms, ID cards, and passports are uploaded.\
        With all the information correctly filled, the administrator submits by clicking the submit button. The new user has been created.
      </td>
    </tr>
  </tbody>
</Table>

**NB**\
While filling in the agent type, for sub-agent, `super-agent code` is required; for the `super agent` type; super-agent code is no longer necessary.

![3291](https://files.readme.io/42924e8-Merchants.png "Merchants.png")

2. View Agents\
   The administrator can view all their registered agents with their details. The administrator can filter the kind of agent he wants to view by clicking on the ‘filter’ button, having pre-selected the filtering options\
   Filter by type (either sub-agents or super-agents), filter by state, local government, manager, date, names, and aggregator (code of the agent that referred).

![3283](https://files.readme.io/6faa5f8-view_agents.jpg "view_agents.jpg")

3. View Aggregators\
   Aggregators are called super-agent. The page displays the super-agent’s details, which include the number of the agent(s) under the aggregator/ super-agent. It can be downloaded in Excel format by clicking the ‘excel’ button.

![3248](https://files.readme.io/3e167c1-aggregators.png "aggregators.png")

### Miscellaneous

***

An administrator can perform actions such as assigning terminals, debit merchant wallets, deactivating merchants, and as can be seen in the image below.

![3233](https://files.readme.io/feef5ca-Miscelenous.png "Miscelenous.png")

### Transactions Menu

***

* Transaction history:- Displays the details of transactions carried out by each of the agents, stating the transaction IDs, transaction reference, and transaction reference.
* Cash withdrawals:- Give records of cashout transactions in terminals, the successful ones, the failed ones due to insufficient balance, and those that failed due to incorrect pin entered (this category is called Error code).
* Admin Transactions:- Displays all the transactions carried out by the merchant on the agent's wallet.

![3283](https://files.readme.io/b1022e0-view_agents.jpg "view_agents.jpg")

### Report and Analytics

***

Agents and transaction counts for each state are represented on this page. This has the following sub-menus;

* Transactions Map: Here, the number of transactions carried out per state is represented on the map
* Agent map: The number of agents in each state is represented on the map
* Chargeback Report: A report of chargebacks encountered on transactions.
* Tickets: This is made available for agents to raise their complaints, and the complaint is sent to the merchant of that agent. The merchants are able to see Opened tickets, tickets on hold, resolved tickets, and closed tickets.

![3255](https://files.readme.io/9a8e10a-Reports_Analytics.jpg "Reports_Analytics.jpg")

### Terminal Inventory

***

POS Terminals:- This gives information about each Terminal point, such as the terminal ID, name of an agent assigned, serial number, and terminal status (if the agent has been assigned or not). Also, a new terminal can be added to this page, and terminals can be edited by clicking on the edit icon.

* View Terminals 

![3293](https://files.readme.io/c6a2acd-terminal.png "terminal.png")

* Add Terminal 

![3231](https://files.readme.io/537bb55-Add_Terminal.png "Add_Terminal.png")

* Edit Terminal 

![3210](https://files.readme.io/ecfb87e-update_terminal.png "update_terminal.png")

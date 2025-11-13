---
title: Business
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
A business refers to a registered merchant  or the subaccount of the merchant that can make use of our API .

They are two types of business on Fincra which are namely: 

* Parent business: This refers to Fincra's merchant 
* Subaccounts: A subaccount also acts as a business but is tied to the parent business because it was created by the Parent business. To read more about how Subaccounts work please see the [Subaccount API](/reference/introduction-2)

> 📘 Note
>
> The terms `subaccount` and `business` are used interchangeably throughout the API description but in different scenarios

## Get Parent Business ID

In order to  get your business ID, you will need to make an API call to the [Get Business endpoint](/reference/get-business-id-1)

## Get Sub account ID

In order to get the business ID of a subaccount, you will need to follow the instructions [here](/v2.0/reference/sub-accounts)

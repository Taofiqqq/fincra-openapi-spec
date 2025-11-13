---
title: Possible Virtual Account Errors
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
The possible errors returned from Fincra's virtual account API can be grouped into two main categories - General virtual account errors and virtual account approval errors. Virtual Account approval errors are sent via webhooks.

##Virtual Account Approval Errors

`documentPhoto.smallImageSize` 
This error occurs when the image size is small. Image files (such as document photos and selfies) must have a minimum resolution of 600x600 pixels with a maximum file size of 50MB

`documentPhoto.blurryText`
This error occurs when the image is blurry. Image files (such as document photos and selfies) must have a minimum resolution of 600x600 pixels with a maximum file size of 50MB

`documentPhoto.blurryText`
This error happens when the document you uploaded is an image that has been cropped. We require the document to be uploaded in full.

`Document verification was not successful`
This error can occur due to any of the reasons stated below : 
  * The user uploaded a driver's license from Nigeria but specified Ghana as the issuing country
  * The user selected driver's license but uploaded a national ID card.
  * The user is not up to 18 years of age.

##General Virtual Account Errors
`Error occurred generating virtual account, please try again`
This error occurs when : 
  * The virtual account number already exists
  * BVN virtual account details don't match the payload, required to create NGN virtual accounts
 
`Account could not be resolved. Please check your selection and try again`
This error occurs when the virtual account number is invalid, expired, or deactivated.

`Error occurred during payload validation. address.country length must be less than or equal to 2 characters long (address->country)`
  * This means the `address.country` field must be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes) format

`Error occurred during payload validation `document.issuedCountryCode` length must be less than or equal to 2 characters long (address->country)`
  * This means the `document.issuedCountryCode` field must be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes) format
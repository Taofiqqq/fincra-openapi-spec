---
title: Errors
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
# Virtual Account Errors

This documentation provides an overview of potential errors that may occur when using Fincra's virtual account API. These errors fall into two main categories: general virtual account errors and virtual account approval errors. Virtual account approval errors are communicated via webhooks.

## Virtual Account Approval Errors

Common virtual account approval errors include:

`Document verification was not successful`

This error may occur due to the following reasons:

* The user uploaded a driver's license from Nigeria but specified Ghana as the issuing country.
* The user selected driver's license but uploaded a national ID card.
* The user is under 18 years of age.

`Document originality could not be verified`

This error occurs when we cannot confirm the authenticity of the provided document.

`Name on the Address Document doesn't match`

This error occurs when the name on the address document does not match the provided name.

`Address did not match the record, please provide a document with valid address`

The address provided does not match the data in the proof of address.

`Document type is different from the provided options`

This error occurs when the submitted document type does not match the available options. Please refer to the supported documents list.

`The address document is expired, please upload a document which is not expired`

The document containing the address you provided has expired. Please upload a valid, unexpired document.

`The uploaded image of the document is blurry, please provide a clear photo of the address document`

The uploaded document image is unclear or blurry. Please provide a clear photo of the address document.

`Document doesn't match the provided options`

The submitted document does not match the provided options. Please choose an appropriate document type.

`Issue date on the address document doesn't match`

The issue date on the address document does not match the provided date. Please ensure date properties (e.g., issueDate, birthDate) are in the correct format (YYYY-MM-DD).

`Image is altered or photoshopped`

The submitted image has been altered or manipulated using photo-editing software.

`Address proof and document proof are of different persons`

The address proof and document proof belong to different individuals. They should be for the same person.

`Document proof is a screenshot`

The document proof provided is a screenshot, which is not acceptable. Please submit the original document.

`Document proof is altered/edited`

The document proof provided has been altered or edited.

`Document proof is from another screen`

The document proof appears to be taken from a different screen or device.

`Document is blurry`

The submitted document is blurry and difficult to verify.

`Information on the document proof is not visible`

The information on the document proof is not clearly visible or legible.

`Information on the document is edited`

The information on the document appears to have been edited or altered.

`Information on the document is hidden`

The information on the submitted document is hidden or obscured, making verification difficult.

`Expiry date does not match the provided one`

The expiry date on the document does not match the provided date.

`Submitted document is expired`

The submitted document has expired.

`Date of Birth on the document does not match with the provided one`

The date of birth on the document does not match the provided date.

`Name on the document does not match with the provided one`

The name on the document does not match the name provided.

`Name on the document is not clearly visible`

The name on the submitted document is not clearly visible or legible.

`Document number does not match with the provided one`

The document number does not match the provided data.

`Address on the document does not match with the provided one`

The address on the document does not match the address provided.

`The provided document is broken`

The document provided is damaged or broken, making it unusable for verification.

`The provided document is a photocopy (color or black & white)`

The document provided appears to be a photocopy, either in color or black and white.

`The provided document is edited`

The document provided has been edited or altered.

`The provided document is scanned`

The provided document appears to be scanned rather than an original.

`The provided document is cropped`

The document provided has been cropped, cutting off important information.

`AML screening failed. User found in Sanction lists`

The user's name was identified in sanction lists during the AML screening process. Additional investigation is necessary.

`AML screening failed. User found in Fitness-Probity lists`

The user's name was flagged in fitness-probity lists during the AML screening process. Additional assessment is required.

`AML screening failed. User found in PEP lists`

The user's name was discovered in politically exposed person (PEP) lists during the AML screening process. Further scrutiny is necessary.

`AML screening failed. User found in Adverse-Media lists`

The user's name appeared in adverse-media lists during the AML screening process. Additional analysis is required to proceed.

`Document verification was not successful`

This error can occur due to various reasons, such as incorrect selection or mismatched data. Refer to the specific error message for further details.

**Note: Users who already have existing virtual accounts and request MCY virtual accounts will receive a standard 200 response with details of the existing virtual account.**

To improve the chances of virtual account approval, follow these guidelines:

1. **Authentic Document Submission:** Submit genuine and valid documents to enhance your chances of approval. Ensure that the documents provided are authentic and accurately represent the applicant's information.
2. **Document Expiry:** Ensure that the submitted documents have an expiry date no later than three (3) months from the date of application. Expired documents will not be accepted as valid proof.
3. **Avoid Screenshots:** Do not submit screenshots as they are not considered valid documentation. Provide official and verifiable documents that support your virtual account request.
4. **Date Formats:** Ensure that all dates are in the format (YYYY-MM-DD).

## General Virtual Account Errors

`Error occurred generating virtual account, please try again`

This error occurs when:

* The virtual account number already exists
* BVN virtual account details don't match the payload, required to create NGN virtual accounts

`Account could not be resolved. Please check your selection and try again`

This error occurs when the virtual account number is invalid, expired, or deactivated.

`BVN doesn't match the provided name`

For NGN virtual accounts, this error occurs when:

* The `KYCInformation.firstName` and `KYCInformation.lastName` do not correspond with the name on the customer's BVN.
* The `KYCInformation.businessName` does not correspond with the name on the customer's BVN.

## **Validation Errors**

Standard validation errors are returned when some of the supplied data differs from what is specified in the API Documentation.

`An error occurred during payload validation`

* The length of address.country must be less than or equal to 2 characters. The address.country field must be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes) format
* The length of document.issuedCountryCode must be less than or equal to 2 characters. The document.issuedCountryCode field must be in [alpha2code](https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes) format.

## **Miscellaneous Errors**

For MCY virtual account requests, an error is returned if the requesting user has a pending virtual account request. Users are identified by their emails.

Please ensure to handle these errors appropriately in your application and refer to the specific error messages for more details.

> 🚧 Please Note
>
> MCY Virtual account requests for users who already have existing virtual accounts will return a standard 200 response with details of the existing virtual account.

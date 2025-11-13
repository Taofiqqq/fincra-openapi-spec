---
title: Verification Errors
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
This document outlines the possible error messages that can be returned when a multicurrency (MCY) account request is made. These errors can occur due to various reasons, including discrepancies in the provided information, document authenticity issues, and document expiration. By understanding these potential errors, businesses can take proactive steps to address and resolve them, ensuring a smoother account creation process.

### How errors are communicated

Verification errors are typically communicated through webhooks, which provide real-time notifications about the status of the account creation process. A sample error webhook is included below to illustrate the format and type of information that may be conveyed when an error occurs. This webhook contains details such as the event type, account information, and the specific reason for the account's decline. It is essential for businesses to integrate these webhooks effectively into their systems to monitor and respond to errors promptly.

```json
{
  "event": "virtualaccount.declined",
  "data": {
    "id": "661e83489349bwe342c6a70",
    "business": "62787427843dfn3848ws",
    "isSubAccount": false,
    "currency": "EUR",
    "currencyType": "fiat",
    "status": "declined",
    "accountType": "individual",
    "reason": "Issue date on the document doesn't match",
    "accountOpeningFee": 0,
    "virtualAccountType": "additional",
    "createdAt": "2024-04-16T14:07:12.781Z",
    "updatedAt": "2024-04-16T14:08:32.442Z"
  }
}
```

### Error Categories

Potential errors are categorized based on different aspects of verification, such as address verification and ID verification. Each error is assigned a specific description, allowing for precise identification and resolution of issues. These errors range from basic mismatches in information to more complex issues involving document authenticity and expiration. Understanding these errors and their implications can help businesses improve their document submission processes and enhance the overall user experience.

#### ID Verification Errors

ID verification errors arise when there are problems with the identification documents submitted for verifying the user's identity. These issues can include discrepancies in personal information, such as name or date of birth, problems with document authenticity, or issues with document expiration. Accurate ID verification is essential for ensuring that the user is who they claim to be and for preventing identity fraud.

| **Description**                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| Image of the face not found on the document.                                                                |
| Image is altered or photoshopped.                                                                           |
| Copy of the image found on web.                                                                             |
| Document and Document Two do not belong to the same person.                                                 |
| Document originality could not be verified.                                                                 |
| Name on the document doesn't match.                                                                         |
| DOB on the document doesn't match.                                                                          |
| Date on the document doesn't match.                                                                         |
| Issue date on the document doesn't match.                                                                   |
| Number on the document doesn't match.                                                                       |
| The issuing country of document is not supported, please upload a valid document.                           |
| Document doesn't match the provided options.                                                                |
| Age could not be verified.                                                                                  |
| The expiry date of the document does not match the record, please upload a document with valid expiry date. |
| The document is expired, please upload a new document which is not expired.                                 |
| The uploaded image of the document is blur, please provide a clear photo of document.                       |
| Face could not be detected in image, please upload image again with your face clearly visible.              |
| Proof and Additional Proof are of different documents.                                                      |
| Both Documents do not belong to the same person.                                                            |

#### Address Verification Errors

Address verification errors occur when there are issues related to the address documents submitted for account verification. These errors can stem from inconsistencies between the address provided in request and the uploaded proof of address, issues with document readability, or problems with the authenticity of the address documents. This verification is crucial to ensure that the user resides at the declared location and that the provided address is legitimate and current.

| **Description**                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Image of the face not found on the document.                                                        |
| Image is altered or photoshopped.                                                                   |
| Copy of the image found on web.                                                                     |
| Document originality could not be verified.                                                         |
| Document doesn't match the provided options.                                                        |
| Age could not be verified.                                                                          |
| Proof and Additional Proof are of different documents.                                              |
| Name on the Address Document doesn't match.                                                         |
| Address did not match the record, please provide a document with valid address.                     |
| Document type is different from the provided options.                                               |
| Country on the address document could not be verified.                                              |
| Addresses on the Identity Document and Utility Bill do not match.                                   |
| The address document is expired, please upload a document which is not expired.                     |
| The uploaded image of the document is blur, please provide a clear photo of address document.       |
| Issue date on the address document doesn't match.                                                   |
| Address proof and document proof are of different persons.                                          |
| Front and backside images of the document did not match, please upload images of the same document. |
| Camera is not accessible for verification.                                                          |
| Same ID Document can not be submitted as proof of address.                                          |
| Document proof is a screenshot.                                                                     |
| Document proof is altered/edited.                                                                   |
| Document proof is paper based which is not accepted.                                                |
| Document proof is punched/broken.                                                                   |
| Document proof is from another screen.                                                              |
| Document proof is not fully displayed.                                                              |
| Document is blur.                                                                                   |
| Information on the document proof is not visible.                                                   |
| Information on the document is edited.                                                              |
| Information on the document is hidden.                                                              |
| Address proof and document proof does not match.                                                    |
| Both documents should belong to the same person.                                                    |
| Document should be from the provided country.                                                       |
| Issue date does not match with the provided one.                                                    |
| Submitted document is expired.                                                                      |
| Issue date on the document is not clearly visible.                                                  |
| Name on the document does not match with the provided one.                                          |
| Name on the document is not clearly visible.                                                        |
| Address on the document does not match with the provided one.                                       |
| Address provided is invalid.                                                                        |
| Address on the document is not clearly visible.                                                     |
| Address is not present on the provided document.                                                    |
| Uploaded document is Black and White.                                                               |
| Uploaded image of the document is edited or cropped.                                                |
| Uploaded image is found on the internet.                                                            |
| Document is laminated.                                                                              |
| Document is scanned or colored copy.                                                                |
| Document is paper-based or laminated.                                                               |
| Uploaded document is a test card.                                                                   |
| The uploaded document is not matched with the mentioned document type.                              |
| Uploaded document is a test card.                                                                   |
| Uploaded document is expired.                                                                       |
| Country on the address document could not verified.                                                 |
| The issuing country of document is not supported.                                                   |
| Information on the document is not readable.                                                        |
| Entire document is not visible.                                                                     |
| Uploaded document of the image is blur.                                                             |
| The uploaded document doesn’t match with the mentioned document type.                               |
| Uploaded document is laminated.                                                                     |
| Document might be broken, damaged, or punched.                                                      |
| Uploaded image of the document is a screenshot.                                                     |
| Document is captured from another device.                                                           |
| Document is paper based or laminated.                                                               |
| Uploaded image of the document is found on internet.                                                |
| Uploaded image is a test card.                                                                      |
| Uploaded document is black and white.                                                               |
| Document is not found in the uploaded image.                                                        |
| Issuing date of the document is not visible.                                                        |
| The address document and identity document don’t belong to the same person.                         |
| Address documents from Ontario are not allowed.                                                     |
| Issue date of the uploaded document doesn’t match the record.                                       |
| Name on the address document doesn’t match the record.                                              |
| The provided document is broken.                                                                    |
| The provided document is photocopy(color or black & white).                                         |
| The provided document is edited.                                                                    |
| The provided document is scanned.                                                                   |
| The provided document is punched.                                                                   |
| The provided document is cracked.                                                                   |
| The provided document is cropped.                                                                   |
| The provided document is handwritten.                                                               |
| The uploaded document is inverted or in mirror view.                                                |
| The uploaded document is broken with affected data.                                                 |
| The proof has been uploaded and not captured in real time.                                          |
| The verification process was canceled by the user.                                                  |
| The provided image is corrupted.                                                                    |
| The address did not match the record.                                                               |
| End user did not submit complete verification proofs or data.                                       |
| Face could not be detected OR same side of the document is provided.                                |
| The user does not want to share camera or documents.                                                |
| The complete verification data was not provided by the user.                                        |
| Document proofs do not belong to the same person.                                                   |
| Duplicate account is detected.                                                                      |

<br />

> 📘 Note
>
> Addressing these errors not only ensures regulatory compliance but also builds trust with customers by demonstrating a commitment to secure and reliable financial services. 
>
> Businesses can use this documentation as a reference to train their support teams, develop automated solutions for error handling, and implement preventive measures to minimize the occurrence of such errors. By doing so, they can streamline the account creation process, reduce delays, and provide a seamless experience for their customers.

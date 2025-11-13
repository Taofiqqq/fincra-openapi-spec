---
title: BVN Resolution
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
Our Bank verification API allows you to validate the BVN of your customers as well as verify the identity of your customer within Nigeria, in order to perform proper KYC checks.

> 📘 Note
>
> * This service cost N50 per call and it is deducted from the business wallet
> * Requests in the test environment are free, but will always return dummy data.

The [BVN resolution endpoint](/reference/bvn-resolution) accepts a POST request, with the `bvn`, and `business` as required parameters.\
Please note that the `bvn` represents the bank verification number and the `business` represents the ID of the sub-account or main business.

This endpoint returns the following values `firstName`,`middleName`,`lastName`,`gender`, `dateOfBirth` , `phoneNo`, `pixBase64`.

Please find the detailed response below :

```curl BVN validation request
curl --request POST \
     --url https://api.fincra.com/core/bvn-verification \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --data '
{
     "bvn": "092929292",
     "business": "990099099090"
}
'
```
```json BVN Response
{
    "success": true,
    "message": "Bvn verification successful",
    "data": {
        "verificationStatus": "verified",
        "response": {
            "firstName": "JOHN",
            "middleName": "TEST",
            "lastName": "DOE",
            "gender": "Female",
            "dateOfBirth": "15-Jul-2022",
            "phoneNo": "09022222222",
            "pixBase64": "JJJ.."
        }
    }
}
```

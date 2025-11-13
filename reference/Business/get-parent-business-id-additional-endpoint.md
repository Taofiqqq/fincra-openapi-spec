---
title: Get parent business ID [Additional Endpoint]
excerpt: >-
  This API lets you retrieves the unique Identifier of your business and other
  information such as your email etc.
api:
  file: awesome-new-api.json
  operationId: get-parent-business-id-additional-endpoint
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Response Body

```json
{
    "success": true,
    "message": "Merchant details fetched successfully",
    "data": {
        "accessAllFeatures": false,
        "_id": "5ff8489e1958fa001d18bd37",
        "userId": "5ff8489e1958fa001d18bd36",
        "name": "john doe",
        "email": "fincradev@gmail.com",
        "country": "nigeria",
        "logo": "23481234448191",
        "createdAt": "2021-01-08T11:57:18.548Z",
        "updatedAt": "2022-11-04T09:10:25.218Z",
        "business": {
            "id": "62e7b3613d972902d01ea839",
            "businessKey": "B-ovhx8gLQLgNQ"
        }
    }
}
```



**Please take note of the following:**  
The `id`  in data object obtained from the `business` object   is your business ID.
---
title: Pay with Card
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
This is also known as a "card withdrawal." The customer enters the amount of money to be withdrawn, followed by the ATM card PIN. The POS agent then puts in the POS machine's PIN, which is needed to debit the customer's bank account.

Fincra Provides you with a card withdrawal API that can be used to withdraw money from the customer's bank account VIA the customer’s ATM card.

To withdraw money from the customer you will need to make a POST request to the Card withdrawal API and enter all the required parameters needed to make the withdrawal. 

How to use the card withdrawal API 

##1 - Get the session ID
Make an API request to the sign-in endpoint, to get the session ID of the transaction.
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://cashout-staging.bytestacks.io/api/cashout/initiate \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API key>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"terminal_id\": \"2033HQGI\"\n}\n'",
      "language": "curl"
    }
  ]
}
[/block]
Take notes of the following: `terminal_id` identifies the POS terminal machine.

If successful, a JSON response containing details of your POS terminal will be returned
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"status\": \"Successful\",\n  \"data\": {\n    \"service_code\": \"MY022NE22\",\n    \"session_id\": \"b8ada3b4-6a6c-353c-a6a0-44c677f0\",\n    \"terminal_id\": \"2033HQGI\"\n  },\n  \"message\": \"Action was Successfull\"\n}",
      "language": "json"
    }
  ]
}
[/block]
Take note of the following `session_id` inside the data object :


##2 - Encrypt the Card Pinblock
Card pinblocks are 64-bit strings that encode a PIN ready for encryption and secure transmission. To encrypt the card pin block , you will need to make an API request to the encrypt pinblock endpoint with the following query parameters :
  * clearPinBlock
  * sessionId 
[block:code]
{
  "codes": [
    {
      "code": "curl --request GET \\\n     --url 'https://cashout-staging.bytestacks.io/api/crypt?clearPinBlock=04111ABE9A69AB8C&sessionId=23097c45-abf53-12344-be4d-03ae1234' \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API Key>'",
      "language": "curl"
    }
  ]
}
[/block]
If successful, a JSON response containing details of the encrypted pin block will be returned
[block:code]
{
  "codes": [
    {
      "code": "\n{\n    \"pin_block\": \"04109ECE9A69AB9D\",\n    \"encrypted\": \"KbadU8Lh5XddfsMKpxMYwW8acb7UcxfgdPqR\\XLx8unYn\",\n    \"decrypted\": \"04109ECE9A69AB9D\",\n    \"session_id\": \"23097c45-abf53-12344-be4d-03ae1234\"\n}\n",
      "language": "json"
    }
  ]
}
[/block]
Take note of the following :
  * `pin_block` represents Pin block of the card
  * `encrypted` here refers to the newly encrypted pinblock . 


##3 - Withdrawing the Funds
This is where everything gets interesting , to withdraw the funds from the card you will need to make an API call to the Card Withdrawal API with the following parameters . 

  * pan : A primary account number is a 14, 15, or 16 a unique number found on payment cards, like debit and credit cards, that identifies the card issuer and the cardholder account that is linked to that specific card.
  * amount : amount required in the transaction.
  * pin_block : Encrypted pinblock we generated earlier. 
  * track2_data : These are credit or debit card information held on the Card, typically on the computer chip or the magnetic stripe.
  * card_expiry_date : The expiration date of the card.
  * sequence_number: The first 4-6 numbers that appear on the card.
  * terminal_id : Series of numbers (usually 8 digits long) that are used to assign the transactions processed through your account to your merchant number.
  * account_type : The type of account the card has access to . This can be `savings` or `current`
  * icc_data : A code identifying the financial institution acting as the acquirer of this customer transaction. This is unique for every transaction.
[block:code]
{
  "codes": [
    {
      "code": "curl --request POST \\\n     --url https://cashout-staging.bytestacks.io/api/cashout/transact \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your Fincra API key>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n     \"pan\": \"5300831659654624\",\n     \"amount\": 50,\n     \"track2_data\": \"5300831659654624D22092210034213898\",\n     \"card_expiry_date\": 2509,\n     \"sequence_number\": \"003\",\n     \"account_type\": \"SAVINGS\",\n     \"icc_data\": \"9F2608E930140590965D289F2701809F10120110A040002A0000000000000000000000FF9F37047F359BF89F3602064A950500002400009A032207199C01009F02060000000050005F2A0205665F340103820239009F1A0205669F03060000000000009F3303E0F8C88407A00000000410109F34034203009F3501229F410400000001\",\n     \"terminal_id\": \"204HHQWV\",\n     \"pin_block\": \"UFTFhe3h/dwNNut5WvXuV/Eg4COC7GAupXHMqnm7V0o=\"\n}",
      "language": "curl"
    }
  ]
}
[/block]
If successful, a JSON response containing details of trandsaction will be returned .
[block:code]
{
  "codes": [
    {
      "code": " {\n  \"status\": true,\n  \"Data\": {\n    \"rrn\": \"677585671234\",\n    \"Stan\": \"185776\",\n    \"terminalId\": \"204HHQWV\",\n    \"Amount\": 50,\n    \"responseCode\": \"00\",\n    \"responseMessage\": \"Successful Code\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
 
##4 - Verify the payment
To verify if the payment is successful, you will have to make a request to the verify payment API 
[block:code]
{
  "codes": [
    {
      "code": "curl --request GET \\\n     --url https://cashout-staging.bytestacks.io/api/cashout/transact/a06dbe4e802c0c \\\n     --header 'accept: application/json' \\\n     --header 'api-key: <Your API key>' \n     --header 'session-id: 23097c45-abf53-12344-be4d-03ae1234'",
      "language": "curl"
    }
  ]
}
[/block]
If your request is successful you will receive a successful response 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"success\": true,\n  \"data\": {\n    \"_id\": \"75ddd0c4-63b5-4a33-8767-9103e261c0da\",\n    \"reference\": \"a06dbe4e802c0c\",\n    \"net_amount\": \"89640.0000\",\n    \"fee\": \"360.0000\",\n    \"amount\": \"90000.0000\",\n    \"customer_reference\": \"d1122b4a-459e-439e-ab31-1386c565a76f\",\n    \"terminal_id\": \"TTID0001\",\n    \"pan\": \"530***********624\",\n    \"stan\": \"000115\",\n    \"status\": \"successful\",\n    \"status_code\": \"00\",\n    \"type\": \"CASHOUT\",\n    \"description\": \"Transaction Approved\",\n    \"created_at\": \"2022-09-16T09:28:11.000000Z\",\n    \"updated_at\": \"2022-09-16T09:28:11.000000Z\"\n  },\n  \"message\": \"Action was Succesfull\"\n}",
      "language": "json"
    }
  ]
}
[/block]
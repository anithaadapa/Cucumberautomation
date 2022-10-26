Feature:Login Functionality

Scenario Outline: Check if the user is able to login to the amazon with proper credentials
Given The user has launched the application in the browser
When The user enters valid user "UserName" and "password"
Then Clicks on the login button to log into the application
And Check if the user hads logged in successfully
And Check if the user is able to place an order

Scenario Outline: Check if the user is not able to login to the amazon   
Given The user has launched the application in the browser
When The user enters valid <username> and <password>
Then Clicks on the login button to log into the application
And Check if appropriate error message is displayed to the user

Examples:
|username  |password |
|XXXXXX    |YYYYYY   |
|UUUU,     |IIII     |


Scenario Outline: Check if the user is able to search for a product  // alternate method
Given The user has launched the application in the browser
When The user searches for the term "Shirts"
Then Check if the shirts pages is getting displayed
And Logout of the application
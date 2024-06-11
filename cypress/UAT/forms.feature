Feature: Simple form
Scenario: to validate simple form
Given user open the simple form url
When user enters firstname, lastname, contactnumber, email, message
And clicks on submit
Then an alert saying successful message has to display


    
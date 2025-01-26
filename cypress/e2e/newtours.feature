Feature: NewTour Verification
As a valid user, check new tour application start

    Background:
        Given I visit new tour application
    
    @Sanity
    Scenario: NewTour Start application
        Then Verify the title

    @smoke1
    Scenario: NewTour Login Successfully
        And I enter user name "testepedro"
        And I enter password "123456"
        When I press the submit button 
        Then I should see the message "Login Successfully"
    
    @testFail
    Scenario: NewTour Login With Wrong Password
        And I enter user name "testepedro"
        And I enter password "1"
        When I press the submit button 
        Then I should see the message "Enter your userName and password correct"
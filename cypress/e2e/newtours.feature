Feature: NewTour Verification
As a valid user, check new tour application start

    Background:
        Given I visit new tour application
    
    @Sanity
    Scenario: NewTour Start application
        When Verify the title
        Then I should see web audit results

    @smoke1
    Scenario: NewTour Login
        And I enter user name "testepedro"
        And I enter password "123456"
        When I press the submit button 
        Then I should see web audit results
        And I should see the message "Login Successfully"
Feature: NewTour Verification
As a valid user, check new tour application start

    @Sanity
    Scenario: NewTour Start application
        Given Start new tour application
        When Verify the title
        # Then I should see web audit results

    @smoke1
    Scenario: NewTour Login
        Given Start new tour application
        When Enter user name "usertest"
        # Then I should see web audit results
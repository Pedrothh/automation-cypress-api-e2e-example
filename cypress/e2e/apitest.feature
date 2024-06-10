Feature: APITest
As a valid user, get all users

    @Sanity
    Scenario: Get all users
        Given I get all users
        Then validate status code 200 to get all users 
        And validate the contract schema to get all users

    Scenario: Get specific user
        Given I get specific user "2934743"
        Then validate status code 200 to get specific user
        And validate the contract schema to get specific user
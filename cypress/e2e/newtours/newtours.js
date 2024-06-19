Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger;
    return false;
});

const lighthousemetrics = {
    performance: 95,
    accessibility: 100,
    "best-practices": 95,
    seo: 85,
    pwa: 100,
    "first-contentful-paint": 10,
};

const opts = {
    formFactor: 'desktop',
    screenEmulation: {
      mobile: false,
      disable: false,
      width: Cypress.config('viewportWidth'),
      height: Cypress.config('viewportHeight'),
      deviceScaleRatio: 1,
    },
}

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../pages/LoginPage'

const login = new loginpage()


Given('I visit new tour application', () => {
    cy.visit('/')
})

When('Verify the title', () => {
    cy.title().should('eq', 'Welcome: Mercury Tours')
})

Then('I should see web audit results', () => {
      cy.lighthouse(lighthousemetrics, opts);
      cy.wait(2000)
      cy.screenshot();
})

And('I enter user name {string}', (username) => {
    login.typeUserName(username)
}) 

And('I enter password {string}', (password) => {
    login.typePassword(password)
}) 

And('I press the submit button', () => {
    login.pressSubmit()
}) 


And('I should see the message {string}', (loginSuccessfullyMessage) => {
    login.shouldSeeTheMessageLoginSuccessfully(loginSuccessfullyMessage)
}) 
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger;
    return false;
});
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Ajv from "ajv";
const ajv = new Ajv({allErros: true, verbose: true});

Given('I get all users', () => {
    cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users"
    }).as('getAllUsers');   
});

Then('validate status code {int} to get all users', (statuscode) => {   
    cy.get('@getAllUsers').then(response =>{expect(response.status).to.eq(statuscode);})
    });

And('validate the contract schema to get all users', () => { 
    cy.get('@getAllUsers').then(response =>{
        cy.fixture("getAllUsersContractSchema").then((contrato) => {
            const validate = ajv.compile(contrato)
            const responseApi = validate(response.body)
            if (!responseApi) cy.log(validate.errors).then(()=>{
              throw new Error('Contract Schema Fail')
            });
        });
    })
});

Given('I get specific user {string}', (userId) => {
    cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${userId}`
    }).as('getSpecificUser');   
});

Then('validate status code {int} to get specific users', (statuscode) => {   
    cy.get('@getSpecificUser').then(response =>{expect(response.status).to.eq(statuscode);})
    });

And('validate the contract schema to get specific user', () => { 
    cy.get('@getSpecificUser').then(response =>{
        cy.fixture("getSpecificUsersContractSchema").then((contrato) => {
            const validate = ajv.compile(contrato)
            const responseApi = validate(response.body)
            if (!responseApi) cy.log(validate.errors).then(()=>{
              throw new Error('Contract Schema Fail')
            });
        });
    })
});


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
    }).as('getgorest');   
});

Then('validate status code {int}', (statuscode) => {   
    cy.get('@getgorest').then(response =>{expect(response.status).to.eq(statuscode);})
    });

And('validate the contract schema to get all users', () => { 
    cy.get('@getgorest').then(response =>{
        cy.fixture("getAllUsersContractSchema").then((contrato) => {
            const validate = ajv.compile(contrato)
            const responseApi = validate(response.body)
            if (!responseApi) cy.log(validate.errors).then(()=>{
              throw new Error('Contract Schema Fail')
            });
        });
    })
});


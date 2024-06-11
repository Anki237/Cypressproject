///<reference types="@cypress/xpath" />
//<reference types="@Cypress" />
describe('handling visible and invisible element', () => {
    it('hide/show test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#displayed-text').type('Cypress').should('be.visible')
       cy.get('#hide-textbox').click();
       cy.get('#displayed-text').should('be.visible')
    });
});
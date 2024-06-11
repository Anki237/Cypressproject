describe('visible and invisible', () => {
    it('hide and show', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        //this will type ankita and assert weather it is visible
        cy.get('#displayed-text').type('Ankita').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').type('Verma').should('be.visible')
    });
});
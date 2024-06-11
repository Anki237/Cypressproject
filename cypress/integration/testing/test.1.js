///<reference types="Cypres
describe('testsuit', () => {
    it('testcase', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.wait(3000)
        cy.get('#username').type('tomsmith')
        cy.get("input[type='password']").type('SuperSecretPassword')
        cy.get('.radius').click()
        
    });
});

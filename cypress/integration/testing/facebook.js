describe('testsuit - facebook - collection of test cases', () => {
    it('login test', () => {
        cy.visit('https://www.facebook.com/')
       // cy.get('#email').type('Ankita');
       cy.get("input[name='email']").type('Ankita');
        //cy.get('#pass').type('1234asdf');
        cy.get("input[type='password']").type('123456tyui');
        //cy.get("button[data-testid='royal_login_button']").click();
       // cy.get("button[id='loginbutton']").click();
        
    });
});
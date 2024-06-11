describe('tab change', () => {
    it('window', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.wait(3000)
        cy.contains('Elemental Selenium').invoke('removeAttr','target').click()
       //cy.wait(5000)
        //cy.go('back');
        //cy.wait(2000)
    });
});
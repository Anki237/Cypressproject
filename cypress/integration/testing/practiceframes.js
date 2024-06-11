describe('frames', () => {
    it.skip('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Blog').click()
    });
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Blog').click()
    });
});
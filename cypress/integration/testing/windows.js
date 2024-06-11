describe('tabs and windows', () => {
    it('tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
    });
});
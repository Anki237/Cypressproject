describe('tabsandwindows', () => {
    it('tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
    });
    it('windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('/')
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
            //cy.go('back')
        })
        cy.log(cy.title)
        //cy.go('back')
    });
    it.only('windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('/')
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
        })
    });
});
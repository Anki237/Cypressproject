///<reference types='@cypress/xpath'/>
///<reference types="Cypress"/>

describe('windowstabs', () => {
    it('tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
        cy.go('back')
        cy.go()
        //cy.get('checkBoxOption1').check()
    });
    it.only('window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click().should('have.id','openwindow')
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('/')//to make cypress to change it location from rahulshetty to qacklickacademy
            cy.contains('Access all our Courses').click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
        
       
        
    });
   
    
});
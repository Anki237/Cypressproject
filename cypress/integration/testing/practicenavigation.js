describe('navigation urlassert', () => {
    it('rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click()
        cy.url().should('include','documents-request')
        cy.go('back')
        cy.url().should('include','AutomationPractice/')
        cy.go('forward')
        cy.url().should('include','documents-request')
        cy.reload()
    });
    
});
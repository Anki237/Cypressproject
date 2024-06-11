describe('navigation', () => {
    it('orange test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.contains('Admin').click()
        cy.url().should('include','admin')
        cy.go('back')
        cy.go('forward')
        
    });
    it.only('Rahulshetty', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click()
        cy.url().should('include','documents-request')
        cy.go('back')
        cy.url().should('include','AutomationPractice')
        cy.go('forward')
        cy.url().should('include','documents-request')
        cy.reload()
        
    });
    it('Alertbutton', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="alertbtn"]').click()
        cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })

        cy.get('[id="confirmbtn"]').click()
        cy.on("window:confirm",(msg1)=>{
            expect(msg1).to.eq('Hello , Are you sure you want to confirm?')
            //return true;
            return false;
        })
        
    });
});
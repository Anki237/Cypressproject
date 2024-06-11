describe('alert handle', () => {
    it('practic1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id="alertbtn"]').click()
        //cypress automatically handel alerts
        cy.on('window:alert',(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true//click ok
        })
    });
    it('confirm', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(msg1)=>{
            expect(msg1).to.eq('Hello , Are you sure you want to confirm?')
            return false//click on cancel
            //return true for click on ok
        })
    });
    it.only('alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(msg2)=>{
            expect(msg2).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })
    });
});
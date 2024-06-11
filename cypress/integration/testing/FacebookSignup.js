///<reference types='@cypress/xpath'/>
///<reference types="Cypress"/>


describe('facebooksignup', () => {
    it('testfunctionality', () => {
        cy.visit('https://www.facebook.com/r.php?locale=hi_IN')
        cy.get('input[name="firstname"]').type('Ankita')
        cy.get('input[name="lastname"]').type('Verma')
        cy.get('input[id="u_0_g_NI"]').type('ankitaverma14sept@gmail.com')
        cy.get('input[id="password_step_input"]').type('Ruchiverma@14')
        cy.get('select[id="day"]').select('14').should('have.value','14')
        cy.get('select[id="month"]').select('Sep').should('have.value','9')
        cy.get('select[name="birthday_year"]').select('1996')
        cy.xpath('(//label[@class="_58mt"])[1]').check().should('be.checked')
        cy.get('button[id="u_0_s_Ek"]').click()
    });
});
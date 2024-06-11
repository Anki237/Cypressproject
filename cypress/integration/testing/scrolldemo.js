describe('google scroll', () => {
    it('scroll test', () => {
        cy.visit('https://www.google.com/?authuser=0')
        cy.xpath('//textarea[@title="Search"]').type('Masai{enter}')
        cy.wait(2000)
        cy.scrollTo(0,2000)
        cy.wait(2000)
        cy.scrollTo(0,-2000)
        cy.xpath('(//h3[@class="LC20lb MBeuO DKV0Md"])[1]').scrollIntoView().click()
        
    });
});
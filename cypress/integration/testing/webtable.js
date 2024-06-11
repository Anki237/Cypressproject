describe('webtable', () => {
    it('webtable assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//table[@class='table-display']/tbody/tr[6]/td[2]").should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
    });
    it('webtable test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//table[@class='table-display']/tbody/tr[6]/td").each(($el,index,$list)=>{
            if($el.text().includes('JMETER')){
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });
    it.only('website test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("(//table[@id='product'])[2]/tbody/tr[8]/td").each(($el,index,$list)=>{
            if($el.text().includes('Chennai')){
                cy.wrap($el).next().then((amount)=>{
                    cy.log(amount.text())
                })
            }
        })
        
    });
});
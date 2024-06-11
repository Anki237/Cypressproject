///<reference types='@cypress/xpath'/>
///<reference types="Cypress"/>
describe('webtable practice', () => {
    it.skip('practice1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[6]/td[3]').should('include.text','Chennai')
    });
    it.skip('practice2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath("(//table[@id='product'])[2]/tbody/tr[6]/td").each(($el,index,$list)=>{
            let text1=$el.text()
            if(text1.includes('Chennai')){
                cy.wrap($el).next().then((amount)=>{
                    cy.log(amount.text())
                })
            }
        })

    });
    it.skip('practice3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//table[@id="product"])[1]/tbody/tr[4]/td').each(($el,index,$list)=>{
            let text2=$el.text()
            if(text2.includes('Appium (Selenium) ')){
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });
    it.skip('practice4', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//table[@id="product"])[1]/tbody/tr[5]/td').each(($el,index,list)=>{
            let text3= $el.text()
            if(text3.includes('WebSecurity Testing ')){
                cy.log($el.text())
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });
    it('practice5', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//table[@id="product"])[1]/tbody/tr[5]/td').each(($el,index,$list)=>{
            if($el.text().includes('WebSecurity Testing')){
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });
    it('practice6', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//table[@id="product"])[1]/tbody/tr[5]/td').each(($el,index,$list)=>{
            if($el.text().includes('WebSecurity Testing')){
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
        
    });
});
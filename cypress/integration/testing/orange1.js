describe('Dyanamic drop down', () => {
    it.only('employee dropdown', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.contains('Admin').click()
        cy.xpath("//input[@placeholder='Type for hints...']").type('ja')
        cy.xpath('//span[@data-v-08ed484c]').each(($el,index,$list)=>{
            if($el.text()==='kmsa  wdja'){
                cy.wrap($el).click()
            }
        })
    });
    it('direct click', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.contains('Admin').click()
        cy.get("input[placeholder='Type for hints...']").type('e')
        cy.xpath("//div[@role='option']/span[contains(text(),'Timothy Lewis Amiano')]").click()
    });
});
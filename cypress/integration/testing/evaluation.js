describe('orangehrm', () => {
    it('login,admin,employee details,logout', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')//code for username
        cy.get('input[type="password"]').type('admin123')//code for password
        cy.get('button[type="submit"]').click()//code for login button click
        cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()//code for admin click
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[1]').type('abcdy')//code for entry of user name text field
        cy.xpath('(//div[@class="oxd-select-text-input"])[1]').click()//code for selection of admin
        cy.xpath('(//div[@role="option"])[2]').click()//code for selection of admin
        cy.get('input[placeholder="Type for hints..."]').type('rang')//code for selection of ranga akunuri
        cy.get('span[data-v-08ed484c]').each(($el,index,$list)=>{
            if($el.text()=='Ranga  Akunuri'){
                cy.wrap($el).click()
            }
        })
       // cy.xpath('(//div[@class="oxd-select-option"])[1]').click()
       // cy.wait(2000)
       // cy.xpath('(//div[@class="oxd-select-option"])[2]').select('Enabled')//code for selection of enabled
        cy.reload()//code for refresh
        cy.get('input[placeholder="Type for hints..."]').type('jam')//code for the selection of james buttler
        cy.get('span[data-v-08ed484c]').each(($el,index,$list)=>{
            if($el.text()=='James  Butler'){
                cy.wrap($el).click()
            }
        })
        cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
        cy.get('[href="/web/index.php/auth/logout"]').click()//code for logout
    });
    
    
});
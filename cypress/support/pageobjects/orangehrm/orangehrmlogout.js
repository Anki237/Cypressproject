class OrangeLogout{
   
    logout2(){
        cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
        cy.get('[href="/web/index.php/auth/logout"]').click()
    }
}
export default OrangeLogout;
class LoginPage{
    visiturl(){
        cy.visit('https://the-internet.herokuapp.com/login')
    }
    login(){
        cy.get('#username').type('tomsmith')
        cy.get("input[type='password']").type('SuperSecretPassword')
        cy.get('.radius').click()
        
    }
}
export default LoginPage;
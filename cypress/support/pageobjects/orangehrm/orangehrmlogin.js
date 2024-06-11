class OrangeLogin{
    visiturl1(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    loginDetails(){
        cy.get('[placeholder="Username"]').type('Admin');
        cy.get('[type="password"]').type('admin123');
        cy.get('[type="submit"]').click();
    }
}
export default OrangeLogin;
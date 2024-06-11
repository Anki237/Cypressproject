describe('testsuit', () => {
    before(()=>{
        cy.fixture('example').then((data)=>{
            globalThis.data=data;
        })
    })



    it('testcase', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.wait(3000)
        cy.get('#username').type(data.username)
        cy.get("input[type='password']").type(data.password)
        cy.get('.radius').click()
        
    });
});
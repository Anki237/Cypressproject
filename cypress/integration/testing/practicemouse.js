describe('mouse actions', () => {
    it.skip('mousehover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    });
    it.skip('mousehover-2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.get('a[href="#top"]').click({force:true})
        cy.url().should('include','top')
        
    });
    it.skip('right click test', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('span[class="context-menu-one btn btn-neutral"]').rightclick()
        
    });
    it.skip('double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get(' button[ondblclick="myFunction()"]').dblclick()
    });
    it('drag and drop', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        
    });
    it.only('drag drop other side', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})
        
    });
});
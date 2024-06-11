describe('mousehover', () => {
    it('top', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.get('a[href="#top"]').click({force:true})
        cy.url().should('include','top')
    });
    it('top2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.get('a[href="#top"]').click({force:true})
        cy.url().should('include','top')
    });
    it('right click test', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//span[@class="context-menu-one btn btn-neutral"]').rightclick()
    });
    it.only('doubleclick', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//button').dblclick()
        
    });
    it('drag and drop', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('img[id="draggable"]').trigger('mousedown',{which})
    });
});
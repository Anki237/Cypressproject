describe('practice1', () => {
    it.skip('checklist', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[id='checkBoxOption1']").check().should('have.value','option1').and('have.attr','type','checkbox')
        cy.get("input[id='checkBoxOption2']").check().should('have.value','option2').should('be.checked')
        cy.get("input[id='checkBoxOption3']").check().should('have.value','option3')
    });
    it.skip('multiple check', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option1','option2','option3']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option1','option2','option3']).should('not.be.checked')
    });
    it.skip('radiobutton', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check().should('be.checked')
        //cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('[for="radio2"]>[value="radio2"]').check().should('be.checked').and('have.value','radio2')
        cy.get('input[value="radio3"]').check().should('be.checked')
    });
    it('dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
        //cy.get('').select('').should('have.value','')
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
    });
    it('dropdown-by index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')
        cy.get('#dropdown-class-example').select(2).should('have.value','option2')
        cy.get('#dropdown-class-example').select(3).should('have.value','option3')
        cy.get('#dropdown-class-example').select(0).should('have.value','')
        
    });
    it('dropdown-by text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
        cy.get('#dropdown-class-example').select('Select').should('have.value','')
        
    });
    it('Dyanamic dropdown/Suggestion class test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('us')
        cy.get('.ui-menu-item').each(($el,index,$list)=>{
            if($el.text()=='United States (USA)'){
                 cy.wrap($el).click();
            }

        })
        //cy.get('[id="ui-id-33"]').click()
    });
    it.only('another way for dropdown-direct click on element', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('us')
        cy.xpath("//div[.='United States (USA)' and @class='ui-menu-item-wrapper']").click()
        
    });
    
});
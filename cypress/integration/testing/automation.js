describe('testsuit3', () => {
    it('contactus', () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type('Ankita')
        cy.xpath('//input[@id="ContactUsFrm_email"]').type('ankitaverma14sept@gmail.com')
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type('when get primer')
        cy.xpath('//button[@type="submit" and @title="Submit"]').click();
        cy.xpath("//*[contains(text(),'successfully')]").should('have.text','Your enquiry has been successfully sent to the store owner!')

    });
});
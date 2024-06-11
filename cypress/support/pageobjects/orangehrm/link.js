class Link{
    linkClick(link){
        cy.contains(link).click();
    }
}
export default Link;
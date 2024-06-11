import { Before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
Given('user open the simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')
})
When('user enters firstname, lastname, contactnumber, email, message',()=>{
    cy.get('#firstName').type('Ankita')
    cy.get('#lastName').type('Verma')
    cy.get('#email').type('ankitaverma14sept@gmail.com')
    cy.get('#number').type('8839198861')
    cy.get('textarea[rows="2"]').type('hello how are you')

})
And('clicks on submit',()=>{
    cy.get('input[type="submit"]').click()

})
Then('an alert saying successful message has to display',()=>{
    cy.on("window:alert",(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, Ankita Verma')
        return true;
    })

})
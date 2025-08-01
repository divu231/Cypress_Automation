// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login',(emial,passs)=>{
    cy.contains('span', 'Log in').as('login')
    cy.get('@login').click()
    cy.getByName('email').type(emial)
    cy.getByName('password').type(passs)
    cy.get('fieldset').find('button').contains('Log in').click()
})


Cypress.Commands.add('getByName',name=>{
    return cy.get(`[name="${name}"]`)
})

Cypress.Commands.add('getByid',id=>{
    return cy.get(`[id="${id}"]`)
})


Cypress.Commands.add('conduitlogin',(emial,passs)=>{
    cy.visit('/')
    cy.contains('a', 'Sign in').click()
    cy.getByPlaceholder('Email').type(emial)
    cy.getByPlaceholder('Password').type(passs)
    cy.getByButtonText('Sign in').click()
    cy.get('.navbar-brand').should('be.visible')
})


Cypress.Commands.add('getByPlaceholder',name=>{
    return cy.get(`[placeholder="${name}"]`)
})

Cypress.Commands.add('getByButtonText',text=>{
    return cy.contains('button',text)
})

Cypress.Commands.add('getByClassName',className=>{
    return cy.get(`.${className}`)
})
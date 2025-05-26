
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('span','Log in').as('login')
    cy.get('@login').click()
    cy.get('[name="email"]').type("divyachauhan231@gmail.com")
    cy.get('[name="password"]').type("DDPatel@700")
    cy.get('fieldset').find('button').contains('Log in').click()
    cy.get('header').find('a div').eq(1).should('have.text','Demo SaaS')
    cy.get('div[aria-haspopup="menu"]').find('p').invoke('text').should('equal','Divya Patel')
  })
})
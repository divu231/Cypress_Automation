import * as Locators from '../pageFiles/locator.js'

describe('template spec', () => {
  beforeEach("login", () => {
    cy.visit('/')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
  })

  it('Verify home', () => {
    cy.get('header').find('a div').eq(1).should('have.text', 'Demo SaaS')
    cy.get('div[aria-haspopup="menu"]').find('p').invoke('text').should('equal', 'Divya Patel')
    cy.get('div[aria-haspopup="menu"]').find('p').then(t => {
      console.log(t.text())
     // expect(t.text()).to.be.eq('Divya Patel')
     cy.wrap(t).invoke('text').should('equal','Divya Patel')

    })

    cy.get(Locators.Locators.organization).should('contain.text','Divya Patel')
  })

  it("click action", {retries: 2,tags:'@smoke'}, ()=>{
      cy.get('div[aria-haspopup="menu"]').find('p[data-testid="organization-name"]').eq(0).click()
      cy.contains('div','Create organization').click()
      cy.getByName('importExampleTickets').check()
      cy.getByName('importExampleTickets').should('be.checked').and('be.visible')
      cy.wait(2000)
      cy.getByName('importExampleTickets').uncheck()
      cy.getByName('importExampleTickets').trigger('hoverver')
 
    })
})
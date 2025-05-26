
import * as articles from '../../actionFiles/articleActions.js'

describe('SignUp spec', () => {
    const randomNum = Math.random()

    const articleTiltle = `TestDP${randomNum}`
    beforeEach("Navigate to Signup", () => {
        cy.conduitlogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    })

    it('Add Article and Verify article', () => {
        articles.addArticle(articleTiltle, "TESTDP", "TESTDP", "TESTDP")
        articles.getArticle(articleTiltle).then(exist=>{
        expect(exist).to.eq(articleTiltle)
    })
    })

    it("Delete Article", () => {
        articles.deleteArticle(articleTiltle)
    })
})
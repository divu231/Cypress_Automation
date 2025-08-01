
import * as articles from '../../actionFiles/articleActions.js'


describe('TestAPI', { tags: ['@api', '@regression'] },() => {
    const randomNum = Math.random()
    var id = ''

    const articleTiltle = `TestDP${randomNum}`
    it("Get Token", () => {
        cy.request({
            method: 'POST',
            url: 'https://conduit-api.bondaracademy.com/api/users/login',
            body: {
                user: { email: "divyachauhan231@gmail.com", password: "DDPatel@700" }
            }
        }).then(res => {
            expect(res.status).to.eqls(200)
            Cypress.env('TOKEN', res.body.user.token)
        })
    })

    it('Add Article', () => {
        cy.request({
            method: 'POST',
            body: { article: { title: articleTiltle, description: "TESTDP", body: "TESTDP", tagList: ["TESTDP"] } },
            headers: {
                Authorization: `Token ${Cypress.env('TOKEN')}`
            },
            url: 'https://conduit-api.bondaracademy.com/api/articles/'
        }).then(res => {
            expect(res.status).to.eql(201)
            expect(res.body.article.title).to.eql(articleTiltle)
            id = res.body.article.slug
        })
    })

    it('Delete Article', () => {
        cy.request({
            method: 'DELETE',
            headers: {
                Authorization: `Token ${Cypress.env('TOKEN')}`
            },
            url: `https://conduit-api.bondaracademy.com/api/articles/${id}`
        }
        ).then(res => {
            expect(res.status).to.eq(204)
        })
    })


})

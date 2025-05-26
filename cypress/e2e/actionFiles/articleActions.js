import * as articleLocators from '../pageFiles/articleLocators.js'

export function addArticle(title, about, writeArticle, tags) {
    cy.get(articleLocators.Article.newArticleLink).click()
    cy.getByPlaceholder(articleLocators.Article.newArticleModal.titleTextFiled).type(title)
    cy.getByPlaceholder(articleLocators.Article.newArticleModal.aboutTextfield).type(about)
    cy.getByPlaceholder(articleLocators.Article.newArticleModal.writeArticleTextfield).type(writeArticle)
    cy.getByPlaceholder(articleLocators.Article.newArticleModal.tagsTextfield).type(tags)
    cy.getByButtonText(articleLocators.Article.newArticleModal.publishButton).click()
    cy.wait(1000)
}


export function getArticle(title) {
    return cy.get('.article-page h1').invoke('text')
}

export function setlectArctile(title) {
    cy.contains(articleLocators.Article.artilclePreview, title).click()
}

export function deleteArticle(title) {
    setlectArctile(title)
    cy.get(articleLocators.Article.artilecleDeleteButton).click()
}
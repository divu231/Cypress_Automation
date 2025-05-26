import * as signUplocators from '../pageFiles/signUpLocators.js'


export function setUpSignup(userName,password,email){
    cy.getByPlaceholder(signUplocators.SignUP.userNameTextField).type(userName)
    cy.getByPlaceholder(signUplocators.SignUP.passwordTextField).type(password)
    cy.getByPlaceholder(signUplocators.SignUP.emailTextField).type(email)
    cy.getByButtonText(signUplocators.SignUP.signupButton).click()
  
}
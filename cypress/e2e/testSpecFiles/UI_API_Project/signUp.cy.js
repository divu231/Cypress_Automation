import * as signUp from '../../actionFiles/signUpActions.js'

describe('SignUp spec', () => {
    
    before("Navigate to Signup",()=>{
        cy.visit('/register')
    })
    
    it('SignUP', () => {
        signUp.setUpSignup('divu231',"DDPatel@700","divyachauhan231@gmail.com")
    })
})
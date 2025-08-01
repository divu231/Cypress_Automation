

describe("UI Componenet test", () => {
    beforeEach("Visist URL", () => {
        cy.visit("/")
    })

    it("UI componeents form fillup", () => {
        cy.getByPlaceholder('Enter Name').type("Divya")
        cy.getByPlaceholder('Enter Name').should("have.value", 'Divya')
        cy.getByPlaceholder('Enter EMail').type("Divya").invoke('text')
        cy.getByPlaceholder('Enter Phone').type("125322525")
        cy.getByid('textarea').type("as as as as")
        cy.getByid('male').click().should('be.checked')
        cy.getByid('colors').select("Green")
        cy.getByClassName('dropbtn').trigger('mouseover')
        cy.getByClassName('dropbtn').scrollIntoView()
        cy.getByid('field1').invoke('attr', 'value').then(v => {
            cy.get('button[ondblclick="myFunction1()"]').dblclick()
            cy.getByid('field2').should('have.value', v)
        })
        cy.getByid('alertBtn').click()
        cy.on('window:alert',text=>{
            expect(text).to.eq('I am an alert box!')
        })
        cy.getByid('confirmBtn').click()
        cy.on('window:confirm',text=>{
            expect(text).to.eq('Press a button!')
            return true
            //return false //cancel it
        })
        cy.getByid('promptBtn').click()
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns("haha")
        })

    })

})
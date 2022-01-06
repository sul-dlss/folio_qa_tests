// login.spec.js tests both successful and failure login

describe('Logs into SUL FOLIO Instance', () => {
    it('Opens FOLIO ', () => {
        cy.visit(Cypress.env('FOLIO_URL'))
        cy.contains('Log in')
    })

    it('Tries to log into FOLIO with invalid user', () => {
        cy.get('#input-username')
          .type('unknown_username')
        cy.get('#input-password')
          .type('not-a-valid-password')
        cy.get('#clickable-login').click()
        
        cy.contains('This FOLIO account cannot be located. Please contact your FOLIO systems administrator.')

    })
})
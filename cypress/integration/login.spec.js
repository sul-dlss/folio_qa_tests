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

    it('Log into FOLIO with a valid user credentials', () => {
      const username = Cypress.env('FOLIO_USER')
      const password = Cypress.env('FOLIO_PASSWORD')

      cy.get('#input-username').clear()
      cy.get('#input-username')
        .type(username)
      cy.get('#input-password')
        .type(password)
      cy.get('#clickable-login').click()

      cy.wait(5000)

      cy.contains('Welcome, the Future Of Libraries Is OPEN!')
      
    })

    it('Logs out of FOLIO', () => {
      cy.get('#profileDropdown button').first().click()
      cy.get('#clickable-logout').click()
    })
})
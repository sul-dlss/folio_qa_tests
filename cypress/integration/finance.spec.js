// login.spec.js tests both successful and failure login


describe('Validates finance reference data', () => {
    it('Opens FOLIO ', () => {
        cy.visit(Cypress.env('FOLIO_URL'))
        cy.contains('Log in')
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

    it('Checks for fund types', () => {
      cy.get('#app-list-dropdown-toggle').click()
      // Opens Finance Module
      cy.get('#app-list-dropdown-item-clickable-finance-module').click({force: true})

      // Click on the Fund in the Search and Filter section
      cy.get('button:contains(Fund)').click()
      cy.get('#accordion-toggle-button-fundTypeId').click()

      cy.get('#fundTypeId-selection').click()

      // Confirms there are the expected number of fund types
      cy.get('#sl-fundTypeId-selection li').should('have.length', 12)

      // Confirms values first and last fund types in drop-down
      cy.contains('Business-Data')
      cy.get('#sl-fundTypeId-selection').scrollTo('bottom')
      cy.contains('SUL-OPERATING')
      cy.wait(5000)

      // Checks SUL-GIFT Fund records
      cy.contains('SUL-GIFT').parent().click()
 
      cy.contains('13 records found')
      cy.contains('DUPSOLD')
      cy.contains('SPECGIFT')
      cy.wait(2000)

      // Open specific fund
      cy.contains('MEMFUND').click()

      // Look for external account
      cy.contains('1065031-105-HAIUK')

      // Reloads Finance module and wait
      cy.get('#ModuleMainHeading').click()
      cy.wait(2000)
    })

    it('Logs out of FOLIO', () => {
      
      cy.get('#profileDropdown button').first().click()

      cy.get('#clickable-logout').click()
    })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('pageVisit', (path) => {
  cy.visit(`${Cypress.env('FOLIO_URL')}/${path}`)
})

Cypress.Commands.add('login', (userEnv, passEnv) => {

  cy.visit(Cypress.env('FOLIO_URL'))

  cy.get('#input-username').clear()
  cy.get('#input-username')
    .type(userEnv)
  cy.get('#input-password')
    .type(passEnv)
  cy.get('#clickable-login').click()

  cy.wait(10000)
})

Cypress.Commands.add('logout', () => {
  cy.get('#profileDropdown button').first().click()
  cy.get('#clickable-logout').click()
})

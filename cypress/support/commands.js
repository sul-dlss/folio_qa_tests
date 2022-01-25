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

import localforage from 'localforage'

Cypress.Commands.add('pageVisit', (path) => {
  cy.visit(`${Cypress.env('FOLIO_URL')}/${path}`)
})

Cypress.Commands.add('login', () => {
  const authtoken = localforage.getItem('okapiSess')
  cy.log(authtoken)

  if(isEmpty(authtoken)) {
    cy.visit(Cypress.env('FOLIO_URL'))

    const username = Cypress.env('FOLIO_USER')
    const password = Cypress.env('FOLIO_PASSWORD')

    cy.get('#input-username').clear()
    cy.get('#input-username')
      .type(username)
    cy.get('#input-password')
      .type(password)
    cy.get('#clickable-login').click()

    cy.wait(5000)
  }
})

Cypress.Commands.add('logout', () => {
  cy.get('#profileDropdown button').first().click()
  cy.get('#clickable-logout').click()
})

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

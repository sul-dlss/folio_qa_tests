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

Cypress.Commands.add('authtoken', () => {
  let authtoken = Cypress.env('OKAPI_TOKEN')
  if (authtoken != null) {
    cy.log(`Using x-okapi-token: ${authtoken}`)
    return
  } else {
    cy.request({
      method: 'POST',
      url: Cypress.env('OKAPI_LOGIN_URL'),
      headers: {
        "X-Okapi-Tenant": Cypress.env('OKAPI_TENANT'),
        "User-Agent": "FolioQATester",
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: {
        "username": Cypress.env('FOLIO_USER'),
        "password": Cypress.env('FOLIO_PASSWORD')
      }
    }).then(
      (response) => {
        Cypress.env('OKAPI_TOKEN', response.headers['x-okapi-token'])
        cy.log(`Setting x-okapi-token: ${Cypress.env('OKAPI_TOKEN')}`)
      }
    )
  }
})

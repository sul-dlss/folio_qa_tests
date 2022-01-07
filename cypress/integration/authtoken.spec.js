// authtoken.spec.js tests that x-okapi-token is set as environment variable when authtoken() is invoked

describe("authtoken command", () => {
  beforeEach(() => {
    cy.authtoken()
  })

  it('sets authtoken in env variable', () => {
    expect(Cypress.env('OKAPI_TOKEN')).to.have.lengthOf(199)
  })
})

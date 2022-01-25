const localforage = require("localforage")

// authtoken.spec.js tests that x-okapi-token is set as environment variable when login() is invoked
describe("authtoken command", () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('sets authtoken in env variable', () => {
    localforage.getItem('okapiSess').then((authtoken) => {
      expect(authtoken).to.be.at.least(100)
    })
  })
})

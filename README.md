# FOLIO Quality Assurance Testing for Stanford University Libraries
This repository contains [Cypress][CYPRESS] tests
used to confirm that we correctly migrated data from our Symphony
ILS as well as reference data into our FOLIO Library Services Platform.

## Set-up
1. Clone this repository
1. Run `npm install` to install [Cypress][CYPRESS] and it's dependencies.

## Configuration
Before running these tests, you'll need to set the FOLIO URL and user credentials
in either a local `cypress.env.json` file (see https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json) or as
environmental variables with a `CYPRESS_` prefix i.e. `export CYPRESS_FOLIO_USER=test_user`.

Currently these values need to be set:
- **FOLIO_URL** URL to a running FOLIO Instance
- **FOLIO_USER** An existing FOLIO username
- **FOLIO_PASSWORD** Password for the FOLIO user

## Running the Tests
After configuration and installation, you can run the [Cypress][CYPRESS]
test runner GUI by entering `npm test` from the command-line in the root
directory. To directly run the tests without the GUI, `npx cypress run`.

## Logging Into FOLIO, Logging Out and Resetting Tests
In each test, add the following `before()` and `after()` hooks to log in and out of FOLIO for each test.
```
describe('FOLIO tests', () => {
  before(() => {
    const userEnv = Cypress.env('SOME_USER_FROM_ENV')
    const passEnv = Cypress.env('SOME_PASS_FROM_ENV')
    cy.login(userEnv, passEnv)
  })

  after(() => {
    cy.logout()
  })

  // Tests ...
})
```
If the test requires a specific type of test user that exists in the FOLIO instance, add those credentials
to the `cypress.env.json` file.

If a test suite should fail before the `after()` logout hook is called, you may need to manually log out in the
test browser interface in order to sucessfully re-run the tests.

[CYPRESS]: https://cypress.io

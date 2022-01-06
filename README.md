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

[CYPRESS]: https://cypress.io

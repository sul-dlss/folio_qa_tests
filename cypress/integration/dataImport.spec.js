
describe("FOLIO Data Import Job Profiles", () => {
    before(() => {
        const userEnv = Cypress.env('FOLIO_USER')
        const passEnv = Cypress.env('FOLIO_PASS')
        cy.login(userEnv, passEnv)
    })

    after(() => {
        cy.logout()
    })

    it('Opens Data Import Module', () => {
        cy.pageVisit('settings/data-import')
        cy.wait(10)
        cy.contains('Data import')
        cy.contains('Profiles')
    })

    it('Opens Job Profiles and checks value', () => {
        cy.contains('Job profiles').click()
        cy.wait(1000)
        cy.contains('6 job profiles')
        cy.contains('SUL load MARC')
    })

    it('Opens SUL load MARC Profile and checks for values', () => {
        cy.contains('SUL load MARC').click()
        cy.wait(10000)
        cy.contains('Action profile: "SUL create instance"')
    })
})
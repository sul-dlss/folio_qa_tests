// users.spec.js tests User groups in settings and in user app

describe('Validates Users groups', () => {
    before(() => {
        const userEnv = Cypress.env('ADMIN_USER')
        const passEnv = Cypress.env('ADMIN_PASS')
        cy.login(userEnv, passEnv)
      })
    
    after(() => {
        cy.logout()
    })

    it('Opens User Groups in settings', () => {
        cy.pageVisit('settings/users/')
        cy.contains('Patron groups')
    })

    it('Opens Patron groups and checks values', () => {
        cy.contains('Patron groups').click()

        cy.wait(5000)

        cy.contains('Faculty-Affiliate')

        cy.get("#editList-patrongroups > div > div > div").should('have.length', 27)
    })

    it('Opens Users App and checks for selectable groups', () => {
        cy.pageVisit('users/')

        cy.wait(5000)

        cy.contains('Fellow')

        cy.contains('Staff-Other-Teaching')

    })

})
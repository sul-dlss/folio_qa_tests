// finance.spec.js tests finance settings data


describe('Validates finance reference data', () => {
    before(() => {
      cy.login()
    })

    after(() => {
      cy.logout()
    })

    it('Opens Finance Module', () => {
      cy.get('#app-list-dropdown-toggle').click()
      // Opens Finance Module
      cy.get('#app-list-dropdown-item-clickable-finance-module').click({force: true})
    })

    it('Checks for fund types', () => {
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

    })

    it('Checks for Acquistions unit', () => {
      // Opens Acquisitions unit drop-down
      cy.get('#accordion-toggle-button-acqUnitIds').click()
      cy.get('#acqUnitIds-selection').click()

      cy.get('#sl-acqUnitIds-selection li').should('have.length', 4)

      cy.contains('Business')
      cy.contains('Lane')
      cy.contains('Law')
      cy.contains('SUL')

    })

    it('Checks fiscal years', () => {
      cy.get('button:contains(Fiscal year)').click()
      cy.wait(2000)

      // Checks for specific Fiscal Years
      cy.contains('BUS2021')
      cy.contains('LANEFY2022')
      cy.contains('LAW2021')
      cy.contains('SUL2022')

      // Checks period begin and end dates for SUL 2022
      cy.contains('SUL2022').click()

      cy.wait(2000)

      cy.get('#pane-fiscal-year-details').click()
      cy.contains('09/01/2021')
      cy.contains('08/31/2022')
    })

    it('Checks correct Ledgers with details', () => {
      cy.get('button:contains(Ledger)').first().click()
      cy.wait(2000)

      // Checks for Ledger name and codes
      cy.get('div:contains(Business)').siblings().contains('BUS')
      cy.get('div:contains(Lane Fee)').siblings().contains('Lane Fee')
      cy.contains('Law')

      // Details for SUL Ledger
      cy.get('div:contains(SUL)').first().click()

      cy.contains('Current fiscal year')
      cy.contains('SUL2022')

    })

    it('Checks for Groups', () => {
      cy.get('button:contains(Group)').first().click()
      cy.wait(2000)

      cy.contains('78 records found')

      // Specific Groups
      cy.contains('EASTASIA')

      cy.get('#groups-list > div').last().scrollTo('bottom')
      cy.contains('GD-STATE')

      // Check active status for Feminist
      cy.get('div:contains(FEMINIST)').first().click()
      cy.wait(2000)
      cy.get('div:contains(Status)').siblings().contains('Active')

    })
})
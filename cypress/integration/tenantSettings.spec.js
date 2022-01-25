// tenantSettings.spec.js tests that the tenant settings exist
describe('FOLIO Tenant Settings', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('Opens the tenant-settings page', () => {
    cy.pageVisit('settings/tenant-settings')
    cy.contains('Settings')
    cy.contains('Tenant')
  })

  it('Checks for multiple Service Points', () => {
    cy.pageVisit('settings/tenant-settings/servicePoints')
    cy.get('nav > div > div > div > a').should('have.length', 27)
  })

  it('Checks for Service Point details', () => {
    cy.contains('Tanner').click()
    cy.contains('General information')
    cy.contains('Code')
    cy.contains('TANNER')
  })

  it('Checks for Institutions', () => {
    cy.contains('Institutions').click()
    cy.contains('Stanford University')
  })

  it('Checks for Campuses', () => {
    cy.contains('Campuses').click()
    cy.get('select').select('Stanford University (SU)')
    cy.contains('Stanford Libraries')
  })

  it('Checks for Libraries', () => {
    cy.contains('Libraries').click()
    cy.get('select#institutionSelect').select('Stanford University (SU)')
    cy.wait(500)
    cy.get('select#campusSelect').children('option').contains('Graduate School of Business (GSB)')
    cy.get('select#campusSelect').select('Stanford Libraries (SUL)')
    cy.contains('Cecil H. Green')
  })

  it('Checks for Locations', () => {
    cy.contains('Locations').click()
    cy.get('select#institutionSelect').select('Stanford University (SU)')
    cy.wait(500)
    cy.get('select#campusSelect').children('option').contains('Hoover Institution (HOOVER)')
    cy.get('select#campusSelect').select('Stanford Libraries (SUL)')
    cy.wait(500)
    cy.get('select#librarySelect').children('option').contains('Branner Earth Sciences (EARTH-SCI)')
    cy.get('select#librarySelect').select('Cecil H. Green (GREEN)')
    cy.contains('GREEN-STACKS')
  })
})

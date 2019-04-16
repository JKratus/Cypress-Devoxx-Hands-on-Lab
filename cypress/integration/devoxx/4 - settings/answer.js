const testId = id => `[data-test=${id}]`

describe('Settings page should', () => {
  beforeEach(function() {
    cy.login('cypress@devoxx.fr', 'cypressdevoxx')
    cy.visit('/settings')
  })

  it('display nicely', function() {
    cy.contains('Your Settings').should('be.visible')
    cy.get(testId('picture')).should('be.visible')
    cy.get(testId('username')).should('be.visible')
    cy.get(testId('bio')).should('be.visible')
    cy.get(testId('email')).should('be.visible')
    cy.get(testId('password')).should('be.visible')
    cy.get('button[type=submit]').should('be.visible')
    cy.contains('Or click here to logout.').should('be.visible')
    cy.percySnapshot()
  })

  it('redirect to home after save', function() {
    cy.get('button[type=submit]').click()
    cy.url().should('contain', '/')
    cy.contains('Global Feed').should('be.visible')
  })

  it('take into account profile modification', function() {
    const username = 'Updated Profile'
    cy.get(testId('username'))
      .clear()
      .type(username)
    cy.get('button[type=submit]').click()
    cy.contains(username).should('be.visible')
  })
})

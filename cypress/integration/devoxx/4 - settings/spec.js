describe.only('Settings page should', () => {
  beforeEach(function() {
    // TODO Login with 'cypress@devoxx.fr', 'cypressdevoxx' information with custom command

    cy.visit('/settings')
  })

  it('display nicely', function() {
    // TODO Check if settings page title, fields and button are visible
  })

  it('redirect to home after save', function() {
    // TODO happy path : after submit button click => ensured redirection to home occurred
  })

  it('take into account profile modification', function() {
    const username = 'Updated Profile'
    // TODO update the profile with username variable and submit the form => ensured that this modification is take into account
  })
})

describe('Login page', function() {
  it('should display nicely', function() {
    cy.visit('/login')
    // TODO check the 'Sign in' label is visibke

    // TODO check the form is nicely displayed (email, password, submit button)
  })

  it('should display error message when empty email and password are submitted', function() {
    cy.visit('/login')
    // TODO submit the form and ensure the error message is displayed
  })

  it('should display error message when password is empty', function() {
    cy.visit('/login')
    // TODO fill only the username field and submit the form => ensure the error message is displayed
  })

  it('should display error message when email is empty', function() {
    cy.visit('/login')
    // TODO fill only the password field and submit the form => ensure the error message is displayed
  })

  it('should display error message when login failed', function() {
    cy.visit('/login')
    // TODO fill the form with incorrect data => ensure the error message is displayed
  })

  it('should redirect to homepage when logging is successful', function() {
    cy.visit('/login')
    // TODO happy path : use cypress@devoxx.fr/cypressdevoxx to fill the form and ensure you are logged
  })
})

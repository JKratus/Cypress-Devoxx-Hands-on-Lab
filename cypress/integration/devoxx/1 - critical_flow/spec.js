describe('Navigation', function() {
  it('should navigate through all the pages', function() {
    cy.log('Visit homepage')
    // TODO visit the / url

    // TODO check that the title is equal to 'Conduit'

    // TODO count the articles

    // TODO check that tag list is present

    cy.log('Visit author page')
    // TODO enter to a author page

    // TODO check that author image is visible

    // TODO check that h4 title is visible too

    cy.log('Visit article page')
    // TODO come back to the home page

    // TODO select the second article

    // TODO check that url contain 'article' keyword

    // TODO check that the banner exist

    // TODO check that the article content exist too

    cy.log('Logging in')
    // TODO go to login page

    // TODO enter the cypress@devoxx.fr email

    // TODO enter the cypressdevoxx password

    // TODO check that the redirection to the home occurred
  })
})

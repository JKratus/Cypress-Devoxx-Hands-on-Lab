describe('Article page behaviors', function() {
    beforeEach(function() {
        cy.login('cypress@devoxx.fr', 'cypressdevoxx')
        
        cy.server()
        cy.route('/api/articles/*', 'fixture:/article/cypress-is-cool.json').as(
          'getArticle',
        )
        cy.route('/sockjs-node/**', {})
        cy.visit('/article/test-qjhr1y')
      })
      
    it('should save comments to file', function() {
        const comment = 'Where is the documentation ?'
        cy.route('/api/articles/*/comments', { comments: [] })
        cy.route({
          method: 'POST',
          status: 201,
          url: '/api/articles/*/comments',
          response: {
            comment: {
              id: 36721,
              createdAt: '2019-03-16T23:33:59.621Z',
              updatedAt: '2019-03-16T23:33:59.621Z',
              body: comment,
              author: {
                username: 'Devoxx',
                bio: null,
                image:
                  'https://static.productionready.io/images/smiley-cyrus.jpg',
                following: false,
              },
            },
          },
        }).as('postComment')
  
        cy.get('textarea').type(comment)
        cy.get('button[type=submit]').click()
        cy.wait('@postComment').then(xhr => {
          cy.exec(`echo '${JSON.stringify(xhr.responseBody)}' > cypress/fixtures/comments/save-comment.json`)
          // FOR WINDOWS
          // cy.exec(`echo ${JSON.stringify(xhr.responseBody)} > cypress/fixtures/comments/save-comment.json`)
          cy.fixture('comments/save-comment.json').should('deep.eq', xhr.responseBody)
        })
      })
  
})
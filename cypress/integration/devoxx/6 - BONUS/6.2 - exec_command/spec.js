describe('Article page behaviors', function() {
    beforeEach(function() {
        cy.login('cypress@devoxx.fr', 'cypressdevoxx')
  
        cy.server()
        cy.route('/api/articles/*', 'fixture:/article/cypress-is-cool.json').as(
          'getArticle',
        )
        cy.route('/sockjs-node/**', {})
        cy.visit('/article/cypress-is-cool-oni8y2')
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
        
        // TODO Add the comment to the textarea and submit it
        
        // TODO Wait the post xhr response and save the comment in a save-comment.json file

        // TODO Check that the content of file is equals to the xhr response
        
      })
  
})
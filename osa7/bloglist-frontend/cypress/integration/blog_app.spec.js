describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/test/reset')
    cy.createuser()
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#loginButton').should('be.visible')
  })

  describe('Login', function() {

    it('succeeds with correct credentials ', function() {
      cy.get('#username').type('TestausUsername')
      cy.get('#password').type('Testaus')
      cy.get('#loginButton').click()
      cy.contains('Great Success')
      cy.clearLocalStorage()
      cy.get('#logOutButton').click()
    })

    it('fails with wrong credentials ', function() {
      cy.get('#username').type('WrongUsername')
      cy.get('#password').type('WrongPassword')
      cy.get('#loginButton').click()
      cy.contains('Wrong Credentials')
    })

  })

  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'TestausUsername', password: 'Testaus' })
    })

    it('A blog can be created', function() {
      cy.visit('http://localhost:3000')
      cy.get('#addblog').click()
      cy.get('#titleinput').type('Testing creating')
      cy.get('#authorinput').type('Testauthor')
      cy.get('#urlinput').type('Testurl')
      cy.get('#blogsubmitbutton').click()
      cy.contains('Testing creating').should('be.visible')
      cy.contains('Testauthor').should('be.visible')
      cy.contains('Testurl').should('not.be.visible')
    })

    it('A blog can be liked', function() {
      cy.visit('http://localhost:3000')
      cy.get('#addblog').click()
      cy.get('#titleinput').type('Testing creating')
      cy.get('#authorinput').type('Testauthor')
      cy.get('#urlinput').type('Testurl')
      cy.get('#blogsubmitbutton').click()
      cy.contains('Show').click()
      cy.contains('Likes : 0')
      cy.contains('like').click()
      cy.contains('Likes : 1')
    })

    it('A blog can be deleted', function() {
      cy.visit('http://localhost:3000')
      cy.get('#addblog').click()
      cy.get('#titleinput').type('Testing creating')
      cy.get('#authorinput').type('Testauthor')
      cy.get('#urlinput').type('Testurl')
      cy.get('#blogsubmitbutton').click()
      cy.contains('Show').click()
      cy.contains('delete').click()
      cy.contains('Testing creating').should('not.be.defined')
      cy.contains('Testauthor').should('not.be.defined')
      cy.contains('Testurl').should('not.be.defined')
    })
  })



})
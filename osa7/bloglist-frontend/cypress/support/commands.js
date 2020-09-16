// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login' , ({ username,password }) => {
  cy.request({
    method:'POST',
    url:'http://localhost:3001/api/login',
    body:{ username,password },
    failOnStatusCode: false
  }).then(({ body }) => {
    localStorage.setItem('LoggedUser', JSON.stringify(body))
  })
})

Cypress.Commands.add('createuser', () => {
  const user = {
    name : 'Testausnimi',
    username: 'TestausUsername',
    password : 'Testaus'
  }
  cy.request('POST', 'http://localhost:3001/api/users',user)
})

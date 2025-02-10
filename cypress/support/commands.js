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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://qauto.forstudy.space/');
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type(email);
    cy.get('#password').type(password, { sensitive: true });
    cy.get('button[type="submit"]').click();
  
    // Перевірка, що логін успішний
    cy.url().should('include', '/dashboard');
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false;
      Cypress.log({
        name: 'type',
        message: '[sensitive data]',
        consoleProps: () => ({ 'Typed Text': '[sensitive data]' })
      });
    }
  
    return originalFn(element, text, options);
  })
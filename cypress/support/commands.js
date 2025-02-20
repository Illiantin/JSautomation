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

  Cypress.Commands.add("getCars", () => {
    cy.request({
        method: "GET",
        url: "/api/cars",
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body.data
    })
})

Cypress.Commands.add("createExpense", (carId, mileage, liters, totalCost, reportedAt = new Date().toISOString().split("T")[0]) => {
  cy.request({
      method: "POST",
      url: "/api/expenses",
      body: {
          "carId": carId,
          "reportedAt": reportedAt,
          "mileage": mileage,
          "liters": liters,
          "totalCost": totalCost,
          "forceMileage": false
      },
  }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.liters).to.eq(liters)
      expect(response.body.data.mileage).to.eq(mileage)
      expect(response.body.data.totalCost).to.eq(totalCost)
      expect(response.body.data.carId).to.eq(carId)
      expect(response.body.data.reportedAt).to.eq(reportedAt)
      cy.wrap(response.body.data.id).as("createdExpenseId")  })
})
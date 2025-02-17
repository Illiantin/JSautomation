import GaragePage from "../../support/PageObjs/GaragePage";
import ExpensesPage from "../../support/PageObjs/ExpensesPage";

describe("Fuel Expenses Tests", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.btn.btn-outline-white.header_signin').click()
        cy.get("input[name='email']").type(Cypress.env("email"))
        cy.get("input[name='password']").type(Cypress.env("password"))
        cy.get("button").contains('Login').click()
        cy.url().should("include", "/panel")
    })

    it("should add fuel expense to a specific car", () => {
        GaragePage.addCar("Audi", "R8", "10000")
        GaragePage.selectCar("Audi R8")

        ExpensesPage.addExpense("50", "2025-02-17")
    })
})

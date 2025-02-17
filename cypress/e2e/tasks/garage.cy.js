import GaragePage from "../../support/PageObjs/GaragePage"

describe("Garage Tests", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[class="btn btn-outline-white header_signin"]').click()
        cy.get("input[name='email']").type(Cypress.env("email"))
        cy.get("input[name='password']").type(Cypress.env("password"))
        cy.get("button").contains('Login').click()
        cy.url().should("include", "/panel")
    })
    
    it("should add a car to the garage", () => {
        GaragePage.addCar("Audi", "R8", "10000")
        cy.contains("Audi R8").should("exist")

        cy.get('ngb-modal-window').should('be.visible')

        cy.get('ngb-modal-window .modal-content .modal-footer.d-flex.justify-content-end button.btn-primary')
          .should('not.be.disabled')
          .click()
    })

    it("adding a car without mileage", () => {
        GaragePage.addCar("Audi", "R8", "");
        
        cy.get('ngb-modal-window').should('be.visible')
        cy.get("input[name='mileage']").should('be.empty')
        cy.get('ngb-modal-window .modal-content .modal-footer.d-flex.justify-content-end button.btn-primary')
          .should('be.disabled')
    })
})
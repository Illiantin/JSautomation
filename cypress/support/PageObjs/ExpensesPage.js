class ExpensesPage {
    addExpense(liters, totalCost) {
        cy.get('ngb-modal-window').should('be.visible')
        cy.get("input[name='liters']").type(liters);
        cy.get("input[name='totalCost']").type(totalCost);
        cy.get(".modal-footer.d-flex.justify-content-end button.btn-primary")
    }
}

export default new ExpensesPage()
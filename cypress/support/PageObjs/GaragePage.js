class GaragePage {
    visit() {
        cy.visit("/panel/garage");
      }
    
    addCar(brand, model, mileage) {
        cy.intercept("POST", "/api/cars").as("createCar")
        
        cy.get("button").contains("Add car").click()
        cy.get("select[id='addCarBrand']").select(brand)
        cy.get("select[id='addCarModel']").select(model)
        
        if (mileage) {
            cy.get("input[name='mileage']").type(mileage)
            cy.get('ngb-modal-window .modal-content .modal-footer.d-flex.justify-content-end button.btn-primary')
              .should('not.be.disabled')
              .click()
        }
    }
    selectCar(carName) {
        cy.contains("div", carName).closest(".car-item").within(() => {
            cy.contains("Add fuel expense").click()
        });

    cy.wait("@createCar").then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        const carId = response.body.data.id;
        cy.wrap(carId).as("createdCarId");
        })
    }
}
export default new GaragePage()
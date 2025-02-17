class GaragePage {
    visit() {
        cy.visit("/panel/garage");
      }
    
    addCar(brand, model, mileage) {
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
    }
  }
  export default new GaragePage()
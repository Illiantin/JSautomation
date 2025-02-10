describe('Registration functionality tests', () => {
  
const uniqueEmail = `testuser+${Date.now()}@example.com`;

beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    cy.get('[class="btn btn-outline-white header_signin"]').click()
    cy.get('.btn.btn-link').contains('Registration').click()
  })

// it('Should successfully register a new user', () => {
//     cy.get('input[name="name"]').type('Max')
//     cy.get('input[name="lastName"]').type('Haponenko')
//     cy.get('input[name="email"]').type(uniqueEmail)
//     cy.get('[id="signupPassword"]').type('Password123!', { sensitive: true })
//     cy.get('[id="signupRepeatPassword"]').type('Password123!', { sensitive: true })
//     cy.get('[class="btn btn-primary"]').click()

//     cy.url().should('include', '/panel/garage')
//     cy.get('[id="userNavDropdown"]').click()
//     cy.get('.btn.btn-link').contains('Logout').click()
//     })

    it('Should show validation error for empty fields', () => {
        cy.get('input[name="name"]').type('Max')
        cy.get('input[name="lastName"]').type('Haponenko')
        cy.get('input[name="email"]').type('invalid-email')
        cy.get('[id="signupPassword"]').type('Password123!', { sensitive: true })
        cy.get('[id="signupRepeatPassword"]').type('Password123!', { sensitive: true })
        
        cy.get('[class="btn btn-primary"]').should('be.disabled')
        cy.get('input[name="email"]').parent().find('.invalid-feedback').should('contain.text', 'Email is incorrect')
        cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get('[class="close"]').click()
    })

    it('Should show an error when passwords do not match', () => {
        cy.get('input[name="name"]').type('Max')
        cy.get('input[name="lastName"]').type('Haponenko')
        cy.get('input[name="email"]').type(uniqueEmail)
        cy.get('[id="signupPassword"]').type('Password123!', { sensitive: true })
        cy.get('[id="signupRepeatPassword"]').type('Password321!', { sensitive: true })

        cy.get('[class="btn btn-primary"]').should('be.disabled')
        cy.get('[id="signupRepeatPassword"]').parent().find('.invalid-feedback')
        .should('be.visible')
        .and('contain.text', 'Passwords do not match');
        cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })
})
describe('LMS Hillel Login Page Tests', () => {
  
  beforeEach(() => {
    cy.visit('https://lms.ithillel.ua')
  })

  it ('Should load the login page successfully', () => {
    cy.url().should('include', 'lms.ithillel.ua')
    cy.get('h1').should('contain.text', 'Вхід')
    cy.get('.page-access-shell__scroll-box').should('be.visible')
  })

  it ('Should display login form elements', () => {
    cy.get('[type="email"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Увійти')
  })

  it('Should show error message for empty credentials', () => {
    cy.get('button[type="submit"]').click();
    cy.get('[type="email"]').parent().should('be.visible')
      .and('contain.text', 'Обов\'язкове поле')
    cy.get('[type="password"]').parent().should('be.visible')
      .and('contain.text', 'Обов\'язкове поле')
  })
})
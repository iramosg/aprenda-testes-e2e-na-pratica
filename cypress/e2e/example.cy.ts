
describe('Cypress TS', () => {
  it('should go to go Google', () => {
    cy.google()
  })

  it('should change light/dark theme on willin justen site', () => {
    cy.visit('https://willianjusten.com.br')
    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')
  })

  it('should visit won games', () => {
    cy.visit('https://www.wongames.willianjusten.com.br')
    cy.findByText(/Esse é um site de estudos!/i).should('exist')
  })

})

describe('empty spec', () => {
  it('Fill all forms', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php')

    cy.fillVehicleData()
    cy.fillInsurantData()
    cy.fillProductData()
    cy.selectPriceOption()
    cy.fillSelectQuote()
    cy.verifySendingMessage() 
  })
})
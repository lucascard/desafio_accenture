describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php')
    
    // Enter Vehicle Data 
    const counter = '#entervehicledata > .counter'

    cy.get('#make').select('BMW')
    cy.get(counter).should('have.text', '11')

    cy.get('#model').select('Scooter')
    cy.get(counter).should('have.text', '10')

    cy.get('#cylindercapacity').type('350')
    cy.get(counter).should('have.text', '9')

    cy.get('#engineperformance').type('9.5')
    cy.get(counter).should('have.text', '8')

    cy.get('#dateofmanufacture').type('02/01/2022')
    cy.get(counter).should('have.text', '7')

    cy.get('#numberofseats').select('2')
    cy.get(counter).should('have.text', '6')

    cy.contains('Right Hand Drive').next().contains('Yes').click()

    cy.get('#numberofseatsmotorcycle').select('2')
    cy.get(counter).should('have.text', '5')

    cy.get('#fuel').select('Electric Power')
    cy.get(counter).should('have.text', '4')

    cy.get('#payload').type('201')
    cy.get(counter).should('have.text', '3')
    
    cy.get('#totalweight').type('214')
    cy.get(counter).should('have.text', '2')
    
    cy.get('#listprice').type('11795')
    cy.get(counter).should('have.text', '1')
    cy.get('#licenseplatenumber').type('031ZCG')
    
    cy.get('#annualmileage').type('285.7')
    cy.get(counter).should('have.text', '0')
    cy.get('#nextenterinsurantdata').click()   //botão next
    
    // Enter Insurant Data
    
    cy.get('#firstname')
    cy.get('#lastname')
    cy.get('#birthdate')
    cy.get(':nth-child(4) > .group')
    cy.get('#streetaddress')
    cy.get('#country')
    cy.get('#zipcode')
    /*
    cy.get('#city')
    cy.get('#occupation')
    cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group')
    cy.get('#website')
    cy.get('#picture') // Campo de input 
    cy.get('#nextenterproductdata').click()
    
    // Enter Product Data

    cy.get('#startdate')
    cy.get('#insurancesum') 
    cy.get('#meritrating')
    cy.get('#damageinsurance')
    cy.get('[style="display: block;"] > .idealforms-field-checkbox > .group')
    cy.get('#courtesycar')
    cy.get('#nextselectpriceoption').click() */

    // Select Price Option









  })

  it.only('Fill all forms', () => {

    cy.visit('http://sampleapp.tricentis.com/101/app.php')
    cy.fillForm()

    cy.fillInsurantData()
    
  });
})
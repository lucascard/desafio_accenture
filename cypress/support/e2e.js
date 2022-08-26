Cypress.Commands.add('fillForm', () => {
    cy.get('#make').select('BMW')
    cy.get('#model').select('Scooter')
    cy.get('#cylindercapacity').type('350')
    cy.get('#engineperformance').type('9.5')
    cy.get('#dateofmanufacture').type('02/01/2022')
    cy.get('#numberofseats').select('2')

    cy.contains('Right Hand Drive').next().contains('Yes').click()
    
    cy.get('#numberofseatsmotorcycle').select('2')
    cy.get('#fuel').select('Electric Power')
    cy.get('#payload').type('201')
    cy.get('#totalweight').type('214')
    cy.get('#listprice').type('11795')
    cy.get('#licenseplatenumber').type('031ZCG')
    cy.get('#annualmileage').type('285.7')
    cy.get('#nextenterinsurantdata').click()   //botão next
  })

  Cypress.Commands.add('fillInsurantData', () => {
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#birthdate').type('02/01/1980')
    cy.contains('Gender').next().contains('Male').click()
    cy.get('#streetaddress').type('Rua dois')
    cy.get('#country').select('Brazil')
    cy.get('#zipcode').type('12345678')
    cy.get('#city').type('São Paulo')
    cy.get('#occupation').select('Employee')
    cy.contains('Hobbies').next().contains('Skydiving').click()

    cy.get('#open').selectFile('cypress/fixtures/test-img.png')
    cy.get('#website').type('www.website.com')
    //cy.get('#picture').('cypress/fixtures/image.png')
    //cy.get('#nextenterproductdata').click()
  })

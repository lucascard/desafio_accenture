import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
});

Cypress.Commands.add('checkCounterVehicle', (number) => {
    cy.get('#entervehicledata > .counter').should('have.text', number)
})

Cypress.Commands.add('checkCounterInsurance', (number) => {
    cy.get('#enterinsurantdata > .counter').should('have.text', number)
})

Cypress.Commands.add('checkCounterProduct', (number) => {
    cy.get('#enterproductdata > .counter').should('have.text', number)
})

Cypress.Commands.add('checkCounterPrice', (number) => {
    cy.get('#selectpriceoption > .counter').should('have.text', number)
})

Cypress.Commands.add('checkCounterQuote', (number) => {
    cy.get('#sendquote > .counter').should('have.text', number)
})

Cypress.Commands.add('fillVehicleData', () => {

    cy.get('#make').select('BMW')
    cy.checkCounterVehicle('11')
    cy.get('#model').select('Scooter')
    cy.checkCounterVehicle('10')
    cy.get('#cylindercapacity').type('350')
    cy.checkCounterVehicle('9')
    cy.get('#engineperformance').type('9.5')
    cy.checkCounterVehicle('8')
    cy.get('#dateofmanufacture').type('02/01/2022')
    cy.checkCounterVehicle('7')
    cy.get('#numberofseats').select('2')
    cy.checkCounterVehicle('6')
    cy.contains('Right Hand Drive').next().contains('Yes').click()
    cy.get('#numberofseatsmotorcycle').select('2')
    cy.checkCounterVehicle('5')
    cy.get('#fuel').select('Electric Power')
    cy.checkCounterVehicle('4')
    cy.get('#payload').type('201')
    cy.checkCounterVehicle('3')
    cy.get('#totalweight').type('214')
    cy.checkCounterVehicle('2')
    cy.get('#listprice').type('11795')
    cy.checkCounterVehicle('1')
    cy.get('#licenseplatenumber').type('031ZCG')
    cy.get('#annualmileage').type('285.7')
    cy.checkCounterVehicle('0')
    cy.get('#nextenterinsurantdata').click()   //botão next
})

Cypress.Commands.add('fillInsurantData', () => {
    cy.checkCounterInsurance('7')   
    cy.get('#firstname').type('John')
    cy.checkCounterInsurance('6')   
    cy.get('#lastname').type('Doe')
    cy.checkCounterInsurance('5')   
    cy.get('#birthdate').type('02/01/1980')
    cy.checkCounterInsurance('4')   
    cy.contains('Gender').next().contains('Male').click()
    cy.get('#streetaddress').type('Rua dois')
    cy.get('#country').select('Brazil')
    cy.checkCounterInsurance('3')   
    cy.get('#zipcode').type('12345678')
    cy.checkCounterInsurance('2')   
    cy.get('#city').type('São Paulo')
    cy.get('#occupation').select('Employee')
    cy.checkCounterInsurance('1')   
    cy.contains('Hobbies').next().contains('Skydiving').click()
    cy.checkCounterInsurance('0')   
    cy.get('#website').type('www.website.com')
    cy.get('#open')
        .attachFile('test-img.jpg');
    cy.get('#nextenterproductdata').click()
})

Cypress.Commands.add('fillProductData', () => {
    cy.checkCounterProduct('6')
    cy.get('#startdate').type('12/12/2022')
    cy.checkCounterProduct('5')
    cy.get('#insurancesum').select('3.000.000,00')
    cy.checkCounterProduct('4')
    cy.get('#meritrating').select('Bonus 6')
    cy.checkCounterProduct('3')
    cy.get('#damageinsurance').select('Partial Coverage')
    cy.checkCounterProduct('2')
    cy.contains('Optional Products').next().contains('Euro Protection').click()
    cy.checkCounterProduct('1')
    cy.get('#courtesycar').select('Yes')
    cy.checkCounterProduct('0')
    cy.get('#nextselectpriceoption').click()

})

Cypress.Commands.add('selectPriceOption', () => {
    cy.checkCounterPrice('1')
    cy.get(':nth-child(4) > .ideal-radio').click()
    cy.checkCounterPrice('0')
    cy.contains('View Quote').should('be.visible')
    cy.contains('Download Quote').should('be.visible')
    cy.get('#nextsendquote').click()
})

Cypress.Commands.add('fillSelectQuote', () => {
    cy.checkCounterQuote('4')
    cy.get('#email').type('cardosolucasrodrigues@gmail.com')
    cy.checkCounterQuote('3')
    cy.get('#phone').type('5561998156698')
    cy.get('#username').type(Cypress.env('username'))
    cy.checkCounterQuote('2')
    cy.get('#password').type(Cypress.env('password'))
    cy.checkCounterQuote('1')
    cy.get('#confirmpassword').type(Cypress.env('password'))
    cy.checkCounterQuote('0')
    cy.get('#Comments').type('Cypress > Selenium')
    cy.get('#sendemail').click()
})

Cypress.Commands.add('verifySendingMessage', () => {
    cy.get('#LoadingPDF').should('be.visible')
    cy.get('.sweet-alert').should('be.visible').and('contain', 'Sending e-mail success!')
    cy.get('.confirm').click()
})


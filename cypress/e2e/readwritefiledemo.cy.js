
before(function(){
    cy.fixture('example.json').as('test_data');    
})

it('Read File Using Fixtures', function(){
    cy.fixture('example.json').then((data) =>{
        cy.log(data.name);
        cy.log(data.email);
        cy.log(data.body);
    })
    cy.log(this.test_data.name);
    
});

it('Read file using readFile', function() {
    cy.readFile('cypress/fixtures/example.json').then((data) => {
        cy.log(data.name);
        cy.log(data.email);
        cy.log(data.body);
    })
    
});

it('Write File Demo', function(){
    cy.writeFile('cypress/fixtures/example2.json', {
        name: 'Using fixtures to represent data 2',
        email: 'hello2@cypress.io',
        body: 'Fixtures are a great way to mock data for responses to routes 2'
        
    })
    cy.writeFile('cypress/fixtures/sample.txt', 'Hello this is Tanvir.\n');
    cy.writeFile('cypress/fixtures/sample.txt', 'I am coding in Cypress', {flag: 'a+'});
    
});
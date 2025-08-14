describe('Registration of a Banking Application', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });

    it('Step 1: Attempt to Register with a New User', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get("#loginPanel > :nth-child(3) > a").click();
        cy.get("input[id='customer.firstName']").type('Tanvir');
        cy.get("input[id='customer.lastName']").type('Tester')
        cy.get("input[id='customer.address.street']").type('123 Main St');
        cy.get("input[id='customer.address.city']").type('New York');
        cy.get("input[id='customer.address.state']").type('NY');
        cy.get("input[id='customer.address.zipCode']").type('10001');
        cy.get("input[id='customer.phoneNumber']").type('123-456-7890');
        cy.get("input[id='customer.ssn']").type('123-45-6789');
        cy.get("input[id='customer.username']").type('tanvir_tester');
        cy.get("input[id='customer.password']").type('Password@123#');
        cy.get("input[id='repeatedPassword']").type('Password@123#');
        // Click on the Register Button
        cy.get('[colspan="2"] > .button').click();

        // cy.get("input[name='username']").type('test');
        // cy.get("input[name='password']").type('test');
    });
    



});
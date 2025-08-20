describe('Clear Text, Right Click, Double Click Demo', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });
    // Select the dropdown option with static options
    // Login with Valid User
    it('Clear Text Demo', () => {
        // Visit to the URL
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        // Type Any Text on User Name
        cy.get("#loginPanel > form > div:nth-child(2) > input").type("tanvir_tester");
        // Wait for 5 seconds
        cy.wait(5000);
        // Clear the text
        cy.get("#loginPanel > form > div:nth-child(2) > input").clear();       

    });

    it('Right Click Demo', () => {
        // Visit to the URL
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        // Type Any Text on User Name
        cy.get("#loginPanel > form > div:nth-child(2) > input").type("tanvir_tester");
        // Wait for 5 seconds
        cy.wait(5000);
        // Right Click
        cy.get('#loginPanel > :nth-child(2) > a').rightclick();   

    });

    it('Double Click Demo', () => {
        // Visit to the URL
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        // Wait for 5 seconds
        cy.wait(5000);
        // Double Click
        cy.get("#double-click").doubleclick();

    });



});
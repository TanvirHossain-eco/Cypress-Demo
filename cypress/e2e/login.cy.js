describe('Login of a Banking Application', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });
    // Select the dropdown option with static options
    // Login with Valid User
    it('Step 1: Login with Valid User', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        // Enter Valid User Name
        cy.get("#loginPanel > form > div:nth-child(2) > input").type("tanvir_tester");
        // Enter Valid Password
        cy.get("#loginPanel > form > div:nth-child(4) > input").type("Password@123#");
        // Click on the Login Button
        cy.get("#loginPanel > form > div:nth-child(5) > input").click();
        // Click on the Account Number
        cy.get("#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
        cy.wait(5000);
        // Select the Month from Activity Period by using index
        cy.get("#month").select(3)
        // Select the Month from Activity Period by using String Value
        // cy.get("#month").select("March");
        // Select the type by using index
        cy.get("#transactionType").select("1");
        // Select the type by using String Value
        // cy.get("#transactionType").select("Credit");
        // Click on the Go Button
        cy.get("#activityForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input").click();

    });



});
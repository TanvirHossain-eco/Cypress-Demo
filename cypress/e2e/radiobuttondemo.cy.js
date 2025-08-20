describe('Handling Radio button Functionality', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });

    it('Step 1: Radio Demo Check & Uncheck', () => {
        // Visit to URL
        // cy.visit('https://demo.automationtesting.in/Register.html');
        // cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        // Get the checkbox element
        // cy.get('#checkbox1').click();
        // cy.get('#checkbox2').click();
        // cy.get('#checkbox3').click();
        // Select all the checkboxes at the same time
        cy.get('[type="radio"]').click({multiple: true, force: true});
        cy.get('[type="radio"]').check({force: true});
        // Unselect all the checkboxes at the same time
        // cy.get('[type="radio"]').click({multiple: true});
        // cy.get('[type="checkbox"]').uncheck();
        
        // Select the checkbox by using value
        cy.get('[type="radio"]').check(['yellow', 'pumpkin']);
        // Unselect the checkbox by using value
        // cy.get('[type="radio"]').uncheck(['Yellow', 'Pumpkin']);

        // cy.get("input[name='username']").type('test');
        // cy.get("input[name='password']").type('test');
    });
    



});
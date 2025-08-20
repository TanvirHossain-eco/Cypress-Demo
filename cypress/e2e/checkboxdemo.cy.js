describe('Handling Checkbox Functionality', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });

    it('Step 1: Checkbox Demo Check & Uncheck', () => {
        // If the website is unvisibile then add headers section
        cy.visit('https://demo.automationtesting.in/Register.html');
        // cy.visit('https://the-internet.herokuapp.com/checkboxes');
        // Get the checkbox element
        // cy.get('#checkbox1').click();
        // cy.get('#checkbox2').click();
        // cy.get('#checkbox3').click();
        // Select all the checkboxes at the same time
        cy.get('[type="checkbox"]').click({multiple: true});
        // cy.get('[type="checkbox"]').check();
        // Unselect all the checkboxes at the same time
        cy.get('[type="checkbox"]').click({multiple: true});
        // cy.get('[type="checkbox"]').uncheck();
        
        // Select the checkbox by using value
        cy.get("[type='checkbox']").check(['Cricket', 'Hockey']);
        // Unselect the checkbox by using value
        cy.get("[type='checkbox']").uncheck(['Cricket', 'Hockey']);

        // cy.get("input[name='username']").type('test');
        // cy.get("input[name='password']").type('test');
    });
    



});
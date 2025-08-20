describe('Scrolling Test Demo', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });
    // Select the dropdown option with static options
    // Scrolling Into View
    it('Scroll Top to Bottom', () => {
        // Visit to the URL
        cy.visit('https://the-internet.herokuapp.com/');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.scrollTo('bottom');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.scrollTo('top');
    });
    // Scroll Into View
    it('Scroll Into View', () => {
        // Visit to the URL
        cy.visit('https://webdriveruniversity.com/index.html');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.get('#page-object-model').scrollIntoView();
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.scrollTo('top');
        
    });
    // Scroll Into View with Assertion
    it('Scroll Into View', () => {
        // Visit to the URL
        cy.visit('https://webdriveruniversity.com/index.html');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.get('#page-object-model').scrollIntoView().should('be.visible');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        cy.scrollTo('top');
        
    });


});
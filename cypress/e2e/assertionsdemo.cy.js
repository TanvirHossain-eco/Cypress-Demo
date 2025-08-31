describe('Assertion Demo', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });
    // Implicit Assertion Demo
    // Assertion Demo with Should
    it('Assertion Demo Should', () => {
        // Visit to the URL
        cy.visit('https://example.cypress.io');
        // Get the selector & click
        cy.contains('get').click();
        // Assertion
        cy.get('#query-btn').should('contain', 'Button');
        
    });
    // Assertion Demo with Should have class
    it('Assertion Demo Should have class', () => {
        // Visit to the URL
        cy.visit('https://example.cypress.io');
        // Get the selector & click
        cy.contains('get').click();
        // Assertion
        cy.get('#query-btn').should('have.class', 'query-btn');
        
    });
    // Assertion Demo with Should be visible
    it('Assertion Demo Should be visible', () => {
        // Visit to the URL
        cy.visit('https://example.cypress.io');
        // Get the selector & click
        cy.contains('get').click();
        // Assertion
        cy.get('#query-btn').should('be.visible');
        
    });
    // Assertion Demo with Should be disabled/enabled
    it('Assertion Demo Should be disabled/enabled', () => {
        // Visit to the URL
        cy.visit('https://example.cypress.io');
        // Get the selector & click
        cy.contains('get').click();
        // Assertion
        // cy.get('#query-btn').should('be.disabled');
        cy.get('#query-btn').should('be.enabled');
        
    });
    // Implicit & Explicit Assertion Demo
    // Multiple Assertion Demo with Should with and
    it('Multiple Assertion Demo Should with and', () => {
        // Visit to the URL
        cy.visit('https://example.cypress.io');
        // Get the selector & click
        cy.contains('get').click();
        // Assertion
        // cy.get('#query-btn').should('be.disabled');
        cy.get('#query-btn').should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')
        // Explicit Assertion
        expect(true).to.be.true;       
    });
    // Explicit Assertion
    it('Explicit Assertion', () => {
        assert.equal(4, 5, 'NOT EQUAL');
        assert.equal(4, 4, 'EQUAL');
        assert.equal(4, '4', 'EQUAL');
        
    });
});
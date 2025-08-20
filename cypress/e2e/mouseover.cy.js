describe('MouseOver Testing', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });

    it('Mouseover Testing', () => {
        // If the website is unvisibile then add headers section
        cy.visit('https://www.eviltester.com/');
        // Get the selector & hover
        cy.get('#cssmenu > ul > li:nth-child(3) > a').trigger('mouseover');
        // If mouseover doesn't work then use the below
        // cy.get('#cssmenu > ul > li:nth-child(3) > ul').invoke('show');
    });

    it.only('Mouseover Testing', () => {
        // If the website is unvisibile then add headers section
        cy.visit('https://www.eviltester.com/');
        // Get the selector & hover
        cy.get('#cssmenu > ul > li:nth-child(3) > a').realHover();
        // wait for 5 seconds
        cy.wait(5000);
        // If mouseover doesn't work then use the below
        // cy.get('#cssmenu > ul > li:nth-child(3) > ul').invoke('show');
        cy.get('#cssmenu > ul > li:nth-child(4) > a').realHover();
    });
    



});
describe('Handling Dynamic Dropdown for Online Ticket Booking Application', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });

    it('Step 1: Dynamic Dropdown', () => {
        // If the website is unvisibile then add headers section
        cy.visit('https://www.yatra.com/flights', {headers: {"Accept-Encoding": "gzip, deflate, br"}});
        // Get the selector of Depart from dynamic dropdown
        cy.get("#BE_flight_origin_city").click().clear().type('New', {delay: 100});
        // Get the list of unique strings from the dropdown
        cy.get('.viewport span:last-child').each(($el, index, $list) => {
            const text = $el.text();
            cy.log(text);
            if(text === 'JFK') {
                cy.wrap($el).click();
            }
        })

        // cy.get("input[name='username']").type('test');
        // cy.get("input[name='password']").type('test');
    });
    



});
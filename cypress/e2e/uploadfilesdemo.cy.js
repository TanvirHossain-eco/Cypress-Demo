describe('Uploading File Demo', () => {
    // beforeEach(() => {
        
    // });

    // afterEach(() => {

    // });
    // Select & Upload Single file
    it('Upload a file', () => {
        // Visit to the URL
        cy.visit('https://practice.expandtesting.com/upload');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        // cy.get("input[type='file']").selectFile(["C:\\Users\\Tanvir Knight\\Downloads\\file.txt"]);
        // Upload the file
        cy.get("input[type='file']").selectFile("C:\\Users\\Tanvir Knight\\Downloads\\file.txt");
        // Wait for 5 Seconds
        cy.wait(5000);
        // Click on the Upload button
        cy.get("#fileSubmit").click();
        // Assert upload worked
        cy.get("#uploaded-files").should("contain.text", "file.txt");
        
        
    });
    // Selecting & Uploading Multiple Files
    it('Upload multiple file', () => {
        // Visit to the URL
        cy.visit('https://practice.expandtesting.com/upload');
        // Wait for 5 Seconds
        cy.wait(5000);
        // Scroll into view
        // cy.get("input[type='file']").selectFile(["C:\\Users\\Tanvir Knight\\Downloads\\file.txt"]);
        // Upload the file
        cy.get("input[type='file']").selectFile(["C:\\Users\\Tanvir Knight\\Downloads\\file1.txt", "C:\\Users\\Tanvir Knight\\Downloads\\file2.txt"]);
        // Wait for 5 Seconds
        cy.wait(5000);
        // Click on the Upload button
        cy.get("#fileSubmit").click();
        // Assert both files uploaded
        cy.get("#uploaded-files").should("contain.text", "file1.txt");
        cy.get("#uploaded-files").should("contain.text", "file2.txt");
        
        
    });


});
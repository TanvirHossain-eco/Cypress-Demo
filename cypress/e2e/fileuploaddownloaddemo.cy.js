// File Upload Demo
it('File Upload Demo', function() {
    cy.visit('https://trytestingthis.netlify.app/');
    cy.get('#myfile').attachFile('sample.txt'); // under the fixture folder
    // cy.get('#file-submit').click();
    // cy.get('#uploaded-files').should('contain', 'file.txt');
    
});
// File Download Demo
it('File Download Demo', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'cypress/downloads', 'example.jpg');
    
});
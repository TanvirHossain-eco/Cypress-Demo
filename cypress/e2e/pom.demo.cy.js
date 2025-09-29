// Import the POM class
import { LoginPage} from "./POM/login_page.cy.js";

const loginPage = new LoginPage();

// Page Object Model Demo
describe('All Login Tests with POM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('Login Test 1 with POM with valid Credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')

        // Code with POM
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        loginPage.AssertValidUser()
        cy.wait(5000);
        
        // Code without POM
        // cy.get("input[name='username']").type('Admin')

        // cy.get("input[name='password']").type('admin123')

        // cy.get("[type='submit']").click()
    
    });

    it('Login Test 2 with POM invalid Credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')

        // Code with POM
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin345')
        loginPage.clickLogin()
        loginPage.AssertinvalidCredentials()
        cy.wait(5000);
        
        // Code without POM
        // cy.get("input[name='username']").type('Admin')

        // cy.get("input[name='password']").type('admin123')

        // cy.get("[type='submit']").click()
    
    });

});

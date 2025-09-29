// Login POM Class file
export class LoginPage{

    username_textbox = "input[name='username']";
    password = "input[name='password']";
    login_button = "[type='submit']";
    invalid_message_class = '.oxd-alert-content > .oxd-text';
    invalid_message_text = 'Invalid credentials';
    valid_user_class = '.oxd-userdropdown-name';
    valid_user_name = 'Alejandra Prueba2';

    // Create Functions for Username
    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }
    // Create Function for Password
    enterPassword(password){
        cy.get(this.password).type(password)
    }
    // Create Function for Login Button Click
    clickLogin(){
        cy.get(this.login_button).click()
    }
    AssertinvalidCredentials(){
        cy.get(this.invalid_message_class).should('have.text', this.invalid_message_text)
    }   
    AssertValidUser(){
        cy.get(this.valid_user_class).should('have.text', this.valid_user_name)
    }
}
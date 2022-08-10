import LoginLocator from '../locators/login.locator';

class LoginPage {
    getUrl() {
        const baseUrl= Cypress.env('baseUrl');
        cy.visit(baseUrl);
    };

    inputUserCredentials(username, password) {
        LoginLocator.userNameInput().type(username);
        LoginLocator.passwordInput().type(password);
    };

    clickLoginButton() {
        LoginLocator.submitButton().click();
    };

    doLogin(username, password) {
        this.inputUserCredentials(username, password);
        this.clickLoginButton();
    };
}

export default new LoginPage;
import LoginLocator from '../locators/Login.locator';

class LoginPage {
    getUrl() {
        cy.visit(BASE_URL);
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
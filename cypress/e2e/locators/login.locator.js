class LoginLocator {
    userNameInput() {
        return cy.get('#username');
    };

    passwordInput() {
        return cy.get('#password');
    };

    submitButton() {
        return cy.get('#login-button');
    };
};

export default new LoginLocator;
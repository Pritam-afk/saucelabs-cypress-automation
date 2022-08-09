class LoginLocator {
    userNameInput() {
        return cy.get('#user-name');
    };

    passwordInput() {
        return cy.get('#password');
    };

    submitButton() {
        return cy.get('#login-button');
    };
};

export default new LoginLocator;
import LoginPage from '../pages/login.page';

class LoginSpecService {
    init() {
        LoginPage.getUrl();
    };

    loginAsStandardUser() {
        const username = Cypress.env('userName');
        const password = Cypress.env('passWord');
        LoginPage.doLogin('standard_user', 'secret_sauce');
    };
};

export default new LoginSpecService;
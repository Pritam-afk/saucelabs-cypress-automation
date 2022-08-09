import LoginPage from '../pages/login.page';

class LoginSpecService {
    init() {
        LoginPage.getUrl();
    };

    loginAsStandardUser() {
        LoginPage.doLogin('standard_user', 'secret_sauce');
    };
};

export default new LoginSpecService;
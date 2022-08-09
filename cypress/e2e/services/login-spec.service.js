import LoginPage from '../pages/Login.page';

class LoginSpecService {
    init() {
        LoginPage.getUrl();
    };

    loginAsStandardUser() {
        LoginPage.doLogin();
    };
};

export default new LoginSpecService;
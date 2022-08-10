import LoginPage from '../pages/login.page';

class BaseSpecService {
    init() {
      LoginPage.getUrl();
      LoginPage.doLogin('standard_user', 'secret_sauce');
    };
};

export default new BaseSpecService;
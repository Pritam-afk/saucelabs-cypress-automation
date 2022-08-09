import LoginSpecService from '../services/login-spec.service'

describe('Login Page test', () => {

    it('Open Sauce', LoginSpecService.init);

    it('Login as Standard User', LoginSpecService.loginAsStandardUser);
});
import LoginSpecService from '../services/login-spec.service'

describe('Login Test', () => {

    it('Open Sauce', LoginSpecService.init);

    it('Login as Standard User', LoginSpecService.loginAsStandardUser);
});
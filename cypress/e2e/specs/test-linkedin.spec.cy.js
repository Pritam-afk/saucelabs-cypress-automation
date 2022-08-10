import BaseSpecService from '../services/base-spec.service'
import LinkedInSpecService from '../services/linkedin-spec.service'

describe('Login Page test', () => {

    it('Login', BaseSpecService.init);

    it('Add Highest Priced Item To Cart', LinkedInSpecService.openLinkedIn);
});
import BaseSpecService from '../services/base-spec.service'
import LinkedInSpecService from '../services/linkedin-spec.service'

describe('LinkedIn Icon Test', () => {

    it('Login', BaseSpecService.init);

    it('Open LinkedIn', LinkedInSpecService.openLinkedIn);
});
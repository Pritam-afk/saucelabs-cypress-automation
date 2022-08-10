import BaseSpecService from '../services/base-spec.service'
import SortingSpecService from '../services/sorting-spec.service'

describe('Login Page test', () => {

    it('Login', BaseSpecService.init);

    it('Add Highest Priced Item To Cart', SortingSpecService.SortLowToHigh);
});
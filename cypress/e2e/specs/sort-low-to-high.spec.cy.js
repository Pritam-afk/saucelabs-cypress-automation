import BaseSpecService from '../services/base-spec.service'
import SortingSpecService from '../services/sorting-spec.service'

describe('Sorting Test', () => {

    it('Login', BaseSpecService.init);

    it('Sort Items Low to High', SortingSpecService.SortLowToHigh);
});
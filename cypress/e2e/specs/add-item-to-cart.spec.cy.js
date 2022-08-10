import BaseSpecService from '../services/base-spec.service'
import AddItemSpecService from '../services/add-item-to-cart-spec.service'

describe('Login Page test', () => {

    it('Login', BaseSpecService.init);

    it('Select Dropdown', AddItemSpecService.setFilter);
});
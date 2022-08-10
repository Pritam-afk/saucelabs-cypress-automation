import BaseSpecService from '../services/base-spec.service'
import AddItemSpecService from '../services/add-item-to-cart-spec.service'

describe('Add Item To Cart Test', () => {

    it('Login', BaseSpecService.init);

    it('Add Highest Priced Item To Cart', AddItemSpecService.addHighestPricedItemToCart);
});
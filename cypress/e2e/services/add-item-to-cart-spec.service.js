import ProductsPage from '../pages/products.page';
import CartPage from '../pages/cart.page';

class AddItemsSpecService {

    addHighestPricedItemToCart() {
        ProductsPage.filterLowToHigh();
        ProductsPage.addLastItemToCart();
    };
};

export default new AddItemsSpecService;
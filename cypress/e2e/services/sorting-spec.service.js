import ProductsPage from '../pages/products.page';
import CartPage from '../pages/cart.page';

class SortingSpecService {

    SortLowToHigh() {
        ProductsPage.filterLowToHigh();
        ProductsPage.verifyLowToHighSort();
    };
};

export default new SortingSpecService;
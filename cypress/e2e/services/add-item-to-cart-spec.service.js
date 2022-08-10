import ProductsPage from '../pages/products.page';

class AddItemsSpecService {

    setFilter() {
        ProductsPage.filterLowToHigh();
    };
};

export default new AddItemsSpecService;
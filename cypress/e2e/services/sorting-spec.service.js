import ProductsPage from '../pages/products.page';


class SortingSpecService {

    SortLowToHigh() {
        ProductsPage.filterLowToHigh();
        ProductsPage.verifyLowToHighSort();
    };
};

export default new SortingSpecService;
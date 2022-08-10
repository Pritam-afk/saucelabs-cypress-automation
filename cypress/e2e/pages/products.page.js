import ProductsPageLocator from '../locators/productspage.locator';

class ProductsPage {
    filterLowToHigh() {
        ProductsPageLocator.filterDropdown().select('lohi');
    };
};

export default new ProductsPage;
import ProductsPageLocator from '../locators/productspage.locator';

class ProductsPage {
    clickOnFilterDropdown() {
        ProductsPageLocator.filterDropdown().select('lohi').click();
    };
};
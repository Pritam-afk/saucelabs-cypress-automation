import ProductsPageLocator from '../locators/productspage.locator';

class ProductsPage {
    filterLowToHigh() {
        ProductsPageLocator.filterDropdown().select('lohi');
    };

    verifyLowToHighSort() {
        ProductsPageLocator.filterDropdownCurrentState().should('have.text', 'Price (low to high)');
    };

    addLastItemToCart() {
        ProductsPageLocator.getLastItemAddToCartButton().click();
    };

    clickOnCartIcon() {
        ProductsPageLocator.cartIcon().click();
    };
};

export default new ProductsPage;
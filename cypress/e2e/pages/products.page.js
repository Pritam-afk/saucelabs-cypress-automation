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

    clickOnLinkedInIcon() {
        ProductsPageLocator.linkedinIcon().click();
    };

    verifyCurrentPageIsLinkedIn() {
        cy.url().should()
    };
};

export default new ProductsPage;
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
        ProductsPageLocator.linkedinIcon().invoke('removeAttr', 'target').click();
    };

    verifyCurrentPageIsLinkedIn() {
        const linkedInUrl = Cypress.env('linkedInUrl')
        cy.url().should('contains', linkedInUrl);
        cy.title().should('eq', 'Sign In | LinkedIn');
    };
};

export default new ProductsPage;
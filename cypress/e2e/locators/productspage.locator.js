class ProductsPageLocator {
    filterDropdown() {
        return cy.get('.product_sort_container');
    };
};

export default new ProductsPageLocator;
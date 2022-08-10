class CartPageLocator {
    filterDropdown() {
        return cy.get('.product_sort_container');
    };

    filterDropdownCurrentState() {
        return cy.get('.active_option');
    };

    getLastItemAddToCartButton() {
        return cy.get('.inventory_item').last().contains('Add to cart');
    };

    cartIcon() {
        return cy.get('.shopping_cart_container');
    };
};

export default new CartPageLocator;
class CartPageLocator {
    cartListItem() {
        return cy.get('.cart_item');
    };

};

export default new CartPageLocator;
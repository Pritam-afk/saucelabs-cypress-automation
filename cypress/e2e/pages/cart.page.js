import CartPageLocator from '../locators/cartpage.locator';

class CartPage {
    VerifyCartItemAdded() {
        CartPageLocator.cartListItem().should('exist');
    };
};

export default new CartPage;
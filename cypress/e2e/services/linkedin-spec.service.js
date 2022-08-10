import ProductsPage from '../pages/products.page';

class LinkedInSpecService {

    openLinkedIn() {
        ProductsPage.clickOnLinkedInIcon();
        ProductsPage.verifyCurrentPageIsLinkedIn();
    };
};

export default new LinkedInSpecService;
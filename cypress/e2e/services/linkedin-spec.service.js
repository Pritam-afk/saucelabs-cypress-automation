import ProductsPage from '../pages/products.page';

class LinkedInSpecService {

    openLinkedIn() {
        ProductsPage.clickOnLinkedInIcon();
    };
};

export default new LinkedInSpecService;
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';  // Import the LoginPage class
import { HomePage } from '../../pages/homepage';
import { YourcartPage } from '../../pages/yourcartpage';
import { CheckoutPage } from '../../pages/checkoutpage';
import { CheckoutOverview } from '../../pages/checkoutoverview';

test('POM Test', async ({ page }) => {
    const loginPage = new LoginPage(page);  // Instantiate LoginPage
    const homepage = new HomePage(page); 
    const yourcartpage = new YourcartPage(page);
    const checkoutpage = new CheckoutPage(page);
    const checkoutoverview = new CheckoutOverview(page);

    // Go to the login page
    await loginPage.gotoLoginPage();

    // Perform login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
  
    // You can add assertions here to verify the login was successful
    // For example:
    // const loginSuccessMessage = page.locator('.login-success-message');
    // await expect(loginSuccessMessage).toBeVisible();

    await homepage.addtocart();
    await yourcartpage.viewcart();
    await yourcartpage.checkout();
    await checkoutpage.continueCheckout('Jenisha', 'Bogati', 'PR1 1NA');
    await checkoutoverview.finishshopping();
});

import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    private firstname_textbox: Locator;
    private lastname_textbox: Locator;
    private zip_postal_code_textbox: Locator;
    private continue_button: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstname_textbox = page.locator('[data-test="firstName"]');
        this.lastname_textbox = page.locator('[data-test="lastName"]');
        this.zip_postal_code_textbox = page.locator('[data-test="postalCode"]');
        this.continue_button = page.getByRole('button', { name: 'CONTINUE' });
    }

    // Method to add first name, last name and zip/postal code in checkout page
    async continueCheckout(firstname: string, lastname: string, zip_post_code: string): Promise<void> {
        await this.firstname_textbox.fill(firstname);
        await this.lastname_textbox.fill(lastname);
        await this.zip_postal_code_textbox.fill(zip_post_code);
        await this.continue_button.click();
    }
}

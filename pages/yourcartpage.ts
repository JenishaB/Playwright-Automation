import { Page, Locator } from '@playwright/test';

export class YourcartPage {
    private page: Page;
    private viewcart_button: Locator;
    private checkout_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewcart_button = page.getByRole('link', { name: '1' });
        this.checkout_button = page.getByRole('link', { name: 'CHECKOUT' });
    }

    // Method to click view_cart
    async viewcart(): Promise<void> {
        await this.viewcart_button.click();
    }

    //Method to click checkout
    async checkout(): Promise<void> {
        await this.checkout_button.click();
    }
}

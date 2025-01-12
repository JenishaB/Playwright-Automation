import { Page, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    private addtocart_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addtocart_button = page.locator('div:nth-child(3) > .pricebar > .btn_primary');
    }

    // Method to click add_to_cart
    async addtocart(): Promise<void> {
        await this.addtocart_button.click();
    }

}

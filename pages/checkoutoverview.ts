import { Page, Locator } from '@playwright/test';

export class CheckoutOverview {
    private page: Page;
    private finish_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finish_button = page.getByRole('link', { name: 'FINISH' });
    }

    // Method to click add_to_cart
    async finishshopping(): Promise<void> {
        await this.finish_button.click();
    }

}

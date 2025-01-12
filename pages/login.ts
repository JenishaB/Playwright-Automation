import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private username_textbox: Locator;
    private password_textbox: Locator;
    private login_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.getByRole('button', { name: 'LOGIN' });
    }

    // Method to go to the login page
    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    // Method to login with username and password
    async login(username: string, password: string): Promise<void> {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}

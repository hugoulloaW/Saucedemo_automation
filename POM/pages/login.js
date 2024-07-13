import { expect } from "@playwright/test";

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');

        this.lockedOutUserError = page.locator('//div[@class="error-message-container error"]')

    }

    async login(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async verifyLockedUserErrorMessage() {
        await expect(this.lockedOutUserError).toContainText('Epic sadface: Sorry, this user has been locked out.');

    }

    async verifyUserGotoHomePage() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');

    }

    async verifyIncorrectUserNameErrorMessage() {
        await expect(this.lockedOutUserError).toContainText('Epic sadface: Username and password do not match any user in this service');
    }
}
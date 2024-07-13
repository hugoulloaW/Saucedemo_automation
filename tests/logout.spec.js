import { test } from '@playwright/test';
const { LoginPage } = require('../POM/pages/login');
const { ProductPage } = require('../POM/pages/product');
import { URLS, CREDENTIALS } from '../POM/data/constant'


test("Logout from the application", async ({ page }) => {

    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);

    await page.goto(URLS.SAUCEDEMOURL);
    await Login.login(CREDENTIALS.SAUCEDEMOUSER, CREDENTIALS.SAUCEDEMOPASS);

    await ProductObj.logout();


})

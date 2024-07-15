import { test } from '@playwright/test';
const { LoginPage } = require('../POM/pages/login');
import { URLS, CREDENTIALS } from '../POM/data/constant';


test('Verify Standard User can login to the application successfully', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    await Login.login(CREDENTIALS.SAUCEDEMOUSER, CREDENTIALS.SAUCEDEMOPASS);

})

test('Verify Locked out user can login to the application', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    await Login.login(CREDENTIALS.SAUCEDEMOLOCKEDUSER, CREDENTIALS.SAUCEDEMOPASS);
    await Login.verifyLockedUserErrorMessage();

});

test("Verify problem user can login to the application", async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login(CREDENTIALS.SAUCEDEMOPROBLEMUSER, CREDENTIALS.SAUCEDEMOPASS);
    await Login.verifyUserGotoHomePage();

});

test('Verify performance_glitch_user can login to the application', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login( CREDENTIALS.SAUCEDEMOGLITCH, CREDENTIALS.SAUCEDEMOPASS);
    await Login.verifyUserGotoHomePage();
});

test('Verify user cannot login to application with a incorrect user name', async ({ page }) => {

    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login('user', CREDENTIALS.SAUCEDEMOPASS);
    await Login.verifyIncorrectUserNameErrorMessage();

});

test('Verify user cannot login to the application with a incorrect password', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    Login.login(CREDENTIALS.SAUCEDEMOUSER, 'pass');

    await Login.verifyIncorrectUserNameErrorMessage();
});

test('Verify user cannot login to application with a null user name', async ({ page }) => {

    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login(null, CREDENTIALS.SAUCEDEMOPASS);
    await Login.verifyUsernameMessage();

});

test('Verify user cannot login to the application with a null password', async ({ page }) => {
    await page.goto(URLS.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    Login.login(CREDENTIALS.SAUCEDEMOUSER, null);

    await Login.verifyPassMessage();
});
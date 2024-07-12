import {test} from '@playwright/test';
const { LoginPage } = require('../POM/pages/login');
import dotenv from 'dotenv'
dotenv.config()


test('Verify Standard User can login to the application successfully',async({page})=>{
    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    await Login.login("standard_user","secret_sauce");

})

test('Verify Locked out user can login to the application',async({page})=>{
    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    await Login.login("locked_out_user","secret_sauce");
    await Login.verifyLockedUserErrorMessage();

});

test("Verify problem user can login to the application",async({page})=>{
    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    
    await Login.login("problem_user","secret_sauce");
    await Login.verifyUserGotoHomePage();

});

test('Verify performance_glitch_user can login to the application',async({page})=>{
    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login('performance_glitch_user','secret_sauce');
    await Login.verifyUserGotoHomePage();
});

test('Verify user cannot login to application with a incorrect user name',async({page})=>{

    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);

    await Login.login('user','secret_sauce');
    await Login.verifyIncorrectUserNameErrorMessage();

});

test('Verify user cannot login to the application with a incorrect password',async({page})=>{
    await page.goto(process.env.SAUCEDEMOURL);
    const Login = new LoginPage(page);
    Login.login('standard_user','pass');
    
    await Login.verifyIncorrectUserNameErrorMessage();
});

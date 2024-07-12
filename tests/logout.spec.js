import {test} from '@playwright/test';
import {LoginPage} from '../POM/pages/login';
import {ProductPage} from '../POM/pages/product';
import dotenv from 'dotenv'
dotenv.config()


test("Logout from the application",async({page})=>{

    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);

    await page.goto(process.env.SAUCEDEMOURL);
    await Login.login(process.env.SAUCEDEMOUSER,process.env.SAUCEDEMOPASS);
    
    await ProductObj.logout();


})

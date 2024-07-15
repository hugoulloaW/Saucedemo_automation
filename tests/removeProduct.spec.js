import {test} from '@playwright/test';
const { LoginPage } = require('../POM/pages/login');
const { ProductPage } = require('../POM/pages/product');
const { ShoppingCartPage } = require('../POM/pages/cart');
import { URLS , CREDENTIALS } from '../POM/data/constant';


test("Remove a product from the cart",async({page})=>{

    const Login= new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);


    await page.goto(URLS.SAUCEDEMOURL);
    await Login.login(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS);
    
    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();

    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.removeProduct();
})

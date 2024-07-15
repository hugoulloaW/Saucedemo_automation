import {test} from '@playwright/test';
const { LoginPage } = require('../POM/pages/login');
const { ProductPage } = require('../POM/pages/product');
const { ShoppingCartPage } = require('../POM/pages/cart');
const { YourInformationPage } = require('../POM/pages/yourinformation');
import { URLS, CREDENTIALS, PERSONALDATA} from '../POM/data/constant'




test.beforeEach(async({page})=>{
    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);
    

    await page.goto(URLS.SAUCEDEMOURL);
    await Login.login(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS);

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();
    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.checkoutProduct();
}

)

test("Verifying the First Name field cannot be empty",async({page})=>{

    const YourInforObj= new YourInformationPage(page);
    await YourInforObj.verifyingFirstNameEmpty(PERSONALDATA.LASTNAME,PERSONALDATA.POSTALCODE);
})

test("Verifying the Last Name field cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.verifyingLastNameEmpty(PERSONALDATA.FIRSTNAME,PERSONALDATA.POSTALCODE);
})

test("Verifying the Postal code cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.verifyingPostCodeEmpty(PERSONALDATA.FIRSTNAME,PERSONALDATA.LASTNAME);
})



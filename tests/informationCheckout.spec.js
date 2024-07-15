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
    await YourInforObj.fillPersonalDetails(null,PERSONALDATA.LASTNAME,PERSONALDATA.POSTALCODE);
    await YourInforObj.verifyingFirstNameEmpty();
})

test("Verifying the Last Name field cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.fillPersonalDetails(PERSONALDATA.FIRSTNAME,null,PERSONALDATA.POSTALCODE);
    await YourInforObj.verifyingLastNameEmpty();
})

test("Verifying the Postal code cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.fillPersonalDetails(PERSONALDATA.FIRSTNAME,PERSONALDATA.LASTNAME, null);
    await YourInforObj.verifyingPostCodeEmpty();
})



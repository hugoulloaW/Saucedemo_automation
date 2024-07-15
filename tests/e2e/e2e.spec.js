import {test} from '@playwright/test';
const { LoginPage } = require( '../../POM/pages/login');
const { ProductPage } = require( '../../POM/pages/product');
const { ShoppingCartPage } = require('../../POM/pages/cart');
const { YourInformationPage } = require('../../POM/pages/yourinformation');
const { CheckoutPage } = require('../../POM/pages/checkout');
const {CheckoutCompletePage} = require('../../POM/pages/chekoutcomplete');
import { URLS, CREDENTIALS, PERSONALDATA } from '../../POM/data/constant';




    test.beforeEach(async({page})=>{
        const Login = new LoginPage(page);
        await page.goto(URLS.SAUCEDEMOURL);
        await Login.login(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS);

    })
    test('Verify user can buy a single product successfully',async({page})=>{
    
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);
    const YourInforObj= new YourInformationPage(page);
    const CheckoutObj= new CheckoutPage(page);
    const CompletePageObj= new CheckoutCompletePage(page)

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();
    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.checkoutProduct();
    await YourInforObj.fillPersonalDetails(PERSONALDATA.FIRSTNAME,PERSONALDATA.LASTNAME,PERSONALDATA.POSTALCODE);
    await YourInforObj.clickContinue();
    await CheckoutObj.verifyCheckoutProductName();
    await CheckoutObj.clickFinish();
    await CompletePageObj.verfiyThankYouText();
    await CompletePageObj.clickBackToHomeBtn();

    })
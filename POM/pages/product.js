import { expect } from "@playwright/test";

exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
        this.backPackTitle = page.locator('#item_4_title_link');

        //this.addToCartBtn= page.getByTestId('#add-to-cart-sauce-labs-backpack');
        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack')
        this.shoppingCartIcon = page.locator('#shopping_cart_container');

        this.bikeAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.bikeTitle = page.locator('#item_0_title_link');

        this.menuIcon = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
    }

    async addProduct() {
        await this.addToCartBtn.click();
        await this.backPackTitle.waitFor();
        await expect(this.backPackTitle).toHaveText('Sauce Labs Backpack');
    }

    async clickShoppingCart() {
        await this.shoppingCartIcon.click();
    }

    async addBikeProduct(){
        await this.bikeAddToCartBtn.click();
        await this.bikeTitle.waitFor();
        await expect(this.bikeTitle).toHaveText('Sauce Labs Bike Light');
    }

    async logout(){
        await this.menuIcon.click();
        await this.logoutBtn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/')
    }
}
import { expect } from "@playwright/test";
exports.ShoppingCartPage= class ShoppingCartPage{

    constructor(page){
        this.page=page;
        this.checkoutBtn= page.locator('#checkout');
        this.backPackTitleName = page.locator('#item_4_title_link');
        this.bikeTitleName = page.locator('#item_0_title_link');

        this.removeProductBtn = page.locator("#remove-sauce-labs-backpack");

    }


    async validatingTheAddedProduct(){
        await expect(this.backPackTitleName).toContainText("Sauce Labs Backpack");

    }

    async checkoutProduct(){
        await this.checkoutBtn.click();
    }

    async validatingAddedBikeTitle(){
        await expect(this.bikeTitleName).toHaveText("Sauce Labs Bike Light");
    }

    async removeProduct(){
        await this.removeProductBtn.click();
    }


}
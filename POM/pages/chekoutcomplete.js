import { expect } from "@playwright/test";

exports.CheckoutCompletePage =class CheckoutCompletePage{
    constructor(page){
        this.page=page;;
        this.thankYouText= page.locator('//h2[@class="complete-header"]');
        this.backToHomeBtn=page.locator('#back-to-products');

    }

    async verfiyThankYouText(){
        await expect(this.thankYouText).toHaveText("Thank you for your order!");
    
    }

    async clickBackToHomeBtn(){
        //await this.page.pause();
        await this.backToHomeBtn.click();
    }
}
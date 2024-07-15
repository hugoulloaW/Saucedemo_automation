import { expect } from '@playwright/test';


exports.YourInformationPage = class YourInformationPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postCode = page.locator('#postal-code');
        this.continue = page.locator('input#continue');

        this.errorMessage = page.locator('//div[@class="error-message-container error"]');

    }

    async fillPersonalDetails(firstName, lastName, postalCode) {
        if(firstName != null){
            await this.firstName.fill(firstName);
        }
        if(lastName != null){
            await this.lastName.fill(lastName);
        }
        if(postalCode != null){
            await this.postCode.fill(postalCode);     
        }
       
    }

    async clickContinue() {
        await this.continue.click();
    }

    async verifyingFirstNameEmpty() {
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: First Name is required");

    }

    async verifyingLastNameEmpty() {
       
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: Last Name is required");
    }
    async verifyingPostCodeEmpty() {
       
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: Postal Code is required");

    }
}
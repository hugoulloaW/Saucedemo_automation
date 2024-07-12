import {expect} from '@playwright/test';


exports.YourInformationPage = class YourInformationPage {
    constructor(page){
        this.page= page;
        this.firstName= page.locator('#first-name');
        this.lastName= page.locator('#last-name');
        this.postCode=page.locator('#postal-code');
        this.continue= page.locator('input#continue');

        this.errorMessage= page.locator('//div[@class="error-message-container error"]');

    }

    async fillPersonalDetails(firstName,lastName,postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postCode.fill(postalCode);
    }

    async clickContinue(){
        await this.continue.click();
    }

    async verifyingFirstNameEmpty(lastName,postalCode){
        await this.lastName.fill(lastName);
        await this.postCode.fill(postalCode);
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: First Name is required");

    }

    async verifyingLastNameEmpty(firstName,postalCode){
        await this.firstName.fill(firstName);
        await this.postCode.fill(postalCode);
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: Last Name is required");
    }    
    async verifyingPostCodeEmpty(firstName,lastName){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.continue.click();
        await expect(this.errorMessage).toContainText("Error: Postal Code is required");

    }
}
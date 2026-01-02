const { test, expect } = require('@playwright/test');
const { only } = require('node:test');


test('@web Playwright special locators', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //special locators
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("avcd");
    await page.getByRole("button", {name:"submit"}).click();
    const successfilMsg = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await expect(successfilMsg).toBeTruthy();
    await page.getByRole("link", {name:'Shop'}).click();
    const isDisplayedOn= await page.locator("app-card-list").filter({hasText:'Nokia Edge'});
    await expect(isDisplayedOn).toBeTruthy();
   

});
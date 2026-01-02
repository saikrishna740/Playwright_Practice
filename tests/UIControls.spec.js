const { test, expect } = require('@playwright/test');
const { only } = require('node:test');

test('Dropdown', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("Input#username").fill("rahulshettyacademy");
    await page.locator("Input#password").fill("learning");
    const link=page.locator("[href*='documents-request']");
    const select= page.locator("[class='checkmark']");
     await select.first().click();
     await expect(page.locator("[class='checkmark']").first()).toBeChecked();
     await page.locator("[id='terms']").click();
    const dropdown= page.locator("select.form-control");
    await dropdown.selectOption('consult');
    await expect(link).toHaveAttribute("class","blinkingText");
    await page.locator("[id='signInBtn']").click();
    
});

test('Window handles', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const link=page.locator("[href*='documents-request']");
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    link.click(),
]);

     const text=await  newPage.locator(".red").textContent();
     const arrayText=text.split("@")
     const domain = arrayText[1].split(" ")[0]
     console.log(domain);
     await page.locator("Input#username").type(domain);
     console.log(await page.locator("Input#username").textContent());



});

const { test, expect } = require('@playwright/test');
const { only } = require('node:test');


test('@web First test case', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const list=page.locator("[class='oxd-main-menu-item-wrapper']");
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  console.log(await page.title());
  await expect(page).toHaveTitle("OrangeHRM");
  await page.locator("[name='username']").type("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click;
 await page.locator("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']");
 console.log(await expect(page).toHaveTitle("OrangeHRM"));
// const admin12=await admin.first().textContent();
// console.log(admin12);
  //await page.waitForLoadState('networkidle');
 const listTitle = await list.allTextContents();
 console.log(listTitle);



});

test('Second test case', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  console.log(await page.title());
  await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"); 
});
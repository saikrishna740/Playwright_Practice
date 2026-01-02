const { test, expect } = require('@playwright/test');
const { only } = require('node:test');
const { Login } = require('../pages/Login');
const { Dashboard } = require('../pages/Dashboard');
require('../pages/Login');
require('../pages/Dashboard');


test('Client app', async ({ page }) => {
    const productName='ZARA COAT 3';
    //const product=page.locator(".card-body");
    const username= "saikavati197@gmail.com";
    const password= "@Bunny1436";
    const login = new Login(page);
    await login.goto();
    await login.VolidLogin(username,password);
    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.locator("[id='userEmail']").fill("saikavati197@gmail.com");
   // await page.locator("[id='userPassword']").fill("@Bunny1436");
    //await page.locator("[id='login']").click();
    await page.locator(".card-body b").first().waitFor();
    const dashboard = new Dashboard(page);
    await dashboard.Searchproduct(productName);
    await dashboard.NavigateToCart();
   // const title=await page.locator(".card-body b").allTextContents();
  //   console.log(title);
  //  const counts= await product.count();
  //  for(let i=0; i<counts; ++i ){
  //   if(await product.nth(i).locator("b").textContent()===productName){
  //       await product.nth(i).locator("text=  Add To Cart").click();
  //       break;
  //   }

  //  }
   //await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const visibilityCheck=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(visibilityCheck).toBeTruthy();
   await page.locator("text=Checkout").click();
   await page.locator("[placeholder='Select Country']").pressSequentially("ind");
   const dropdown= await page.locator("[Class='ta-results list-group ng-star-inserted']");
   await dropdown.waitFor();
    const optuonsCount = await dropdown.locator("[type='button']").count();
   for(let i=0; i<optuonsCount; ++i ){

   const text =await dropdown.locator("[type='button']").nth(i).textContent();
    if(text===" India")
    {
        
        await dropdown.locator("[type='button']").nth(i).click();
        break;
    }

   }
   await expect( page.locator(".user__name [type='text']").first()).toHaveText(username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const placeId = await page.locator(" .em-spacer-1 .ng-star-inserted").textContent();
   console.log(placeId);
   await page.locator("[routerlink*='/dashboard/myorders']").first().click();
   await page.locator("tbody").waitFor();
    const row=await page.locator("tbody tr");

    for(let i=0; i<row.count(); ++i)
    {

      const rowOrderId = await row.nth(i).locator("th").textContent();

      if(placeId.includes(rowOrderId)){
        await btn.waitFor({ state: 'visible' });
// wait for potential overlay to disappear
await page.waitForSelector('.overlay-selector', { state: 'hidden' }).catch(() => {});
await btn.click({ force: true });   // use carefully
 
          break;

      }
    }
      const orderIdDetails= await page.locator(".col-text").textContent();
   
      await expect(placeId.includes(orderIdDetails)).toBeTruthy();
      await expect(page.locator("text=ZARA COAT 3")).toHaveText("ZARA COAT 3");
  
});
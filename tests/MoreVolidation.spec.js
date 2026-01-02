const { test, expect } = require('@playwright/test');
const { only } = require('node:test');

test('@web pop up ', async ({ page })=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog=> dialog.accept());
    await page.locator("#mousehover").hover();
    const frames= page.frameLocator("#courses-iframe");
     await frames.locator("li a[href*='lifetime-access']:vissible").click();
     const totalSub= frames.locator("frames").textContent();
     console.log(totalSub.split(" ")[1]);

});

test('Screanshot', async ({ page })=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await page.locator("#hide-textbox").screenshot({path: 'partialScreanshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    await page.screenshot({path: 'fullScreanshot.png'});

});

test('visual testing ', async ({ page })=>{

    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    expect(await page.screenshot()).toMatchSnapshot('exit.png');
});
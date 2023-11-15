const {test, expect} = require('@playwright/test')

test('Mouse Double Click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const doubleClick = await page.locator("//button[normalize-space()='Copy Text']");

    // double click action
    await doubleClick.dblclick();
    // Scroll down the page
  await page.evaluate(() => {
    //window.scrollBy(0, window.innerHeight);
    window.scrollBy(0, 250);
  });
    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);

})
const {test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    // await expect(page).toHaveTitle('Home');
    const pageTitle = await page.title();
    console.log('Page Title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url();
    console.log('Page URL is :', pageUrl);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

})
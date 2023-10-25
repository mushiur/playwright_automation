// {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test';
test('Locators', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    await page.setViewportSize({ width: 1366, height: 768 });

    //click on login button  - property 
    await page.locator("xpath = //a[@id='login2']").click();
    // await page.click('id = login2');
    // provide username
    await page.locator('#loginusername').fill('pavanol');
    // provide password
    await page.fill("//input[@id='loginpassword']",'test@123');

    // click on the login button
    await page.click("//button[normalize-space()='Log in']")

    // verify log out link is present
    const logOut = await page.locator("xpath = //a[@id='logout2']")

    await expect(logOut).toBeVisible(); // logout link is visible in the page

    await page.close();
})

test('LocatorsMultipleElement', async({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    
    const links = await page.$$('a');
    console.log(links.length);
    for (const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    } // here we can read all the links of the text content
    await page.close();

})
const {test, expect} = require('@playwright/test');

test('Hidden Option Dropdown', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("(//i)[10]").click();
    await page.waitForTimeout(3000);
    // await page.locator("//span[normalize-space()='Chief Technical Officer']").click();
    let jobTitle = await page.$$("//div[@role='listbox']//span");

    for(const jTitle of jobTitle){
        const value = await jTitle.textContent();
        console.log("Job title is: ",value);

        if(value.includes('Chief Executive Officer')){
            await jTitle.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
    

})

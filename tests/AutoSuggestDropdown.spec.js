const {test, expect} = require('@playwright/test')


test('Auto Suggest Dropdown', async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi');
    await page.waitForTimeout(3000);

    const fromValues = await page.$$("//ul[@class='sc-dnqmqq eFEVtU']/li")
    for (let option of fromValues) {
        const v1 = await option.textContent();
        console.log("The Value is", v1);
        if(v1.includes('ISBT Kashmiri Gate')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000);

})
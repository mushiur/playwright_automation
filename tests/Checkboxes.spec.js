const {test, expect} = require('@playwright/test')

test('Handle Checkboxes', async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')

    await page.locator("label[for='hobbies-checkbox-1']").check();
    expect(page.locator("label[for='hobbies-checkbox-1']")).toBeChecked();
    expect(await page.locator("label[for='hobbies-checkbox-1']").isChecked()).toBeTruthy();

    //Multiple checkboxes
    const checkboxesLocators = [
        "label[for='hobbies-checkbox-1']",
        "label[for='hobbies-checkbox-2']",
        "label[for='hobbies-checkbox-3']"
    ];

    for(const locator of checkboxesLocators){
        await page.locator(locator).check();

    }
    for(const locator of checkboxesLocators){
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }    
    }
    await page.waitForTimeout(5000);

})
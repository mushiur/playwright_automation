const {test, expect} = require('@playwright/test')

test('Handle Checkboxes', async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')

    await page.locator("label[for='hobbies-checkbox-1']").check();
    expect(page.locator("label[for='hobbies-checkbox-1']")).toBeChecked();
    expect(await page.locator("label[for='hobbies-checkbox-1']").isChecked()).toBeTruthy();

})
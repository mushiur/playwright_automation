const {test, expect} = require('@playwright/test')

test('Radio Button', async({page}) =>{
    await page.goto('https://demoqa.com/automation-practice-form');

    // Radio Button
    const maleButton = page.locator("label[for='gender-radio-1']")
    maleButton.check()
    await expect(maleButton).toBeChecked();
    await expect(await page.locator("label[for='gender-radio-1']").isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);
})
const {test,expect} = require('@playwright/test')

test('handle inputbox', async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')

    //InputBox - firstName
    const firstName = page.locator("//input[@id='firstName']");
    await expect(firstName).toBeVisible()
    await firstName.fill("Rifat");
    await expect(firstName).toHaveValue('Rifat');

    await page.waitForTimeout(3000);

})
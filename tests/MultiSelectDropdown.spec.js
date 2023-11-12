const {test, expect} = require('@playwright/test')

test('Handle Multiple Dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    //Assertions
    //1) Check number of options in dropdown
    const options = await page.locator("#colors option");
    await expect(options).toHaveCount(5);

    //2) check number of options in dropdown using js
    const options1 = await page.$$("#colors option");
    console.log("Number of Length: ",options1.length);
    await expect(options1.length).toBe(5);

    // check presence of value in the dropdown
    const options2 = await page.locator('#colors').textContent();
    await expect(options2.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(3000);
})
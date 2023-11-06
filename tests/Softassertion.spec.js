const{test,expect} =require('@playwright/test')

test('Soft Assertion', async({page})=>{
    page.goto('https://www.demoblaze.com/')

    // Hard Assertion
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    // Soft Assertions
    await expect.soft(page).toHaveTitle('store');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})
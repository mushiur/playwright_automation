// Playwright Hooks
// beforeEach --> This hook is executed before each individual test
// afterEach --> This hook is executed after each individual test

//beforeAll --> This hook is executed once before any of the tests start running
// afterAll --> This hook is executed once after all tests have been run.

import {test, expect} from '@playwright/test'

test('Home Page test', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    // Login 
    await page.locator('#login2').click()
    await page.waitForTimeout(3000);
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();
    // Home Page
    const products = await page.$$('.hrefch')
    //expect(products.length).to(9)
    expect(products).toHaveLength(9)

    // Log out 
    await page.locator('#logout2').click()

});

test('Add Product to cart test', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    // Login 
    await page.locator('#login2').click()
    await page.waitForTimeout(3000);
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();

    // Add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Produce added.')
        await dialog.accept();

    })

    // Log out
    await page.locator('#logout2').click()

});
import {test, expect} from '@playwright/test'

let page;

test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/')

    // Login 
    await page.locator('#login2').click()
    await page.waitForTimeout(3000);
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();
})
test.afterEach(async({})=>{
    // Log out 
    await page.locator('#logout2').click()
    
});

test('Home Page test', async({})=>{
    // Home Page
    const products = await page.$$('.hrefch')
    //expect(products.length).to(9)
    expect(products).toHaveLength(9)
});

test('Add Product to cart test', async({})=>{
    // Add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    await page.waitForTimeout(3000);

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Produce added.')
        await page.waitForTimeout(3000);
        await dialog.accept();

    })
});
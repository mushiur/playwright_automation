const {test, expect} = require('@playwright/test')

test.skip('Alert Toaster Handle', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog window handler
    page.on('dialog', async diaglog=>{
        expect(diaglog.type()).toContain('alert');
        expect(diaglog.message()).toContain('I am an alert box');
        await diaglog.accept();
         
    })
    await page.click("//button[normalize-space()='Alert']");
    page.waitForTimeout(3000);
})

test.skip('Confirmation Dialog-Alert with ok and Cancel', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog window handler
    page.on('dialog', async diaglog=>{
        expect(diaglog.type()).toContain('confirm');
        expect(diaglog.message()).toContain('Press a button!');
        await page.waitForTimeout(3000);
        await diaglog.accept(); // close by using ok button
        // await diaglog.dismiss(); // close by using cancel button
         
    })
    await page.click("//button[normalize-space()='Confirm Box']");
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    page.waitForTimeout(3000);
})

test('Prompt Dialog', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog window handler
    page.on('dialog', async diaglog=>{
        expect(diaglog.type()).toContain('prompt');
        expect(diaglog.message()).toContain('Please enter your name:');
        await page.waitForTimeout(1500);
        expect(diaglog.defaultValue()).toContain('Harry Potter');
        await diaglog.accept('Rifat');
        await page.waitForTimeout(1500);
         
    })
    await page.click("//button[normalize-space()='Prompt']");
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Rifat! How are you today?');
    page.waitForTimeout(3000);
})
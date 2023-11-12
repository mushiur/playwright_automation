const {test, expect} = require('@playwright/test')

test('Handle Bootstrap Dropdown', async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_3');

    await page.locator('.multiselect').click();
    //1
    const options = await page.locator('ul>li label input');
    await expect(options).toHaveCount(14);

    //2)
    const options2 = await page.$$('ul>li label input');
    console.log("Total values in the dropdown: ",options2.length);
    await expect(options2.length).toBe(14);

    //3)
    const options3 = await page.$$('ul>li label');
    for(let opt of options3) {
        let value = await opt.textContent();
        //another option is
        // let value = await opt.innerText();
        console.log("The value is: ",value);
        if(value.includes('Angular') || value.includes('Java')){
            await opt.click();
        }
    }

    // delect options
    const options4 = await page.$$('ul>li label');
    for(let op of options4) {
        let value = await op.textContent();
        //another option is
        // let value = await opt.innerText();
        console.log("The value is: ",value);
        if(value.includes('HTML') || value.includes('CSS')){
            await op.click();
        }
    }

    await page.waitForTimeout(3000);
})
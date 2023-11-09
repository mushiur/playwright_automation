const {test, expect} = require('@playwright/test')

test("Handle dropdown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from the dropdown
    await page.locator("#country").selectOption({label: 'India'}); // label/visible text

    //await page.locator("#country").selectOption('India'); // another approach
    await page.locator("#country").selectOption({value: 'uk'}) // select by value /another approach
    await page.locator("#country").selectOption({index: 1}); //another approach to select by index
    await page.selectOption('#country','India'); //direct select value by id

    //Assertions
    //1) check number of options in dropdown
    //const options = await page.locator("#country option");
    // console.log(options.count()); 
    //await expect(options).toHaveCount(10);

    //2) check number of options in dropdown - Approach2
    // const options = await page.locator("#country option");
    // console.log("Number of options: ",options.length);
    // await expect(options.length).toBe(10);

    //3) Approach 3- check presence of value in the dropdown 
    // const content = await page.locator("#country").textContent();
    // await expect(content.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown -Approach 2 => Using looping 
    const options = await page.$$("#country option");
    //let statusfaslse;
    let status = false;
    for(const option of options)
    {
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France'))
        {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    await page.waitForTimeout(2000);
})
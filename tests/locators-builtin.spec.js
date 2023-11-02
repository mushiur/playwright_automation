/*

# page.locator() - to locate an element, usually a link, by its text
# page.getByAltText() - to locate an element,   usually image, by its text alternative
# page.getPlaceholder() - to locate an input by placeholder
# page.getByRole() to locate by explicit and implicit accessibility attributes
# page.getByLabel() to locatea form control by associated label's text
# page.getByTitle() to locate an element by title attribute
# page.getByTestId() to locate an element based on its data-test id attribute 

*/

const {test, expect} = require('@playwright/test');
const { type } = require('os');

test('Built-inLocators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    if(logo.isVisible()) {
        console.log('Logo is found successfully');
    }
    else {
        console.log('Logo is not found');
    }

    // get by placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // Wait For 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));

    //get by role -- suppose button. button is a role also

    await page.getByRole('button', {type: 'submit'}).click();

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

    await expect(await page.getByText(name)).toBeVisible();


 

})
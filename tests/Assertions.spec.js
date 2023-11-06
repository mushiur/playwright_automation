const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('AssertionTest', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')

    // 1) Expect(page).toHaveUrl()   Page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) Expect(page).toHaveTitle() Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) Expect(page).toBeVisible()  Element is visible
    
    // lets check whether the logo is visible or not in the page    
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // 4) expect(locator).toBeEnabled() Control is enabled or not
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    // 5) Expect(locator).toBeChecked() Radio/Checkbox is checked or not

    // Radio Button is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()
    
    // check box
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    // 6) Expect(locator).toHaveAttribute() Element has attributes or not
    // check particular attribute
    const regButton = page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    // 7) expect(locator).toHaveText() Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    // 8) expect(locator).toContainText() Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg') // Partial text contains

    // 9) expect(locator).toHaveValue(value) // Input text have some value
    const emailInput = page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')
    const dateField = page.locator("select[name='DateOfBirthDay'] option")
    await expect(dateField).toHaveCount(32)



})
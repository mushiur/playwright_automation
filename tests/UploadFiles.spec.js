const {test, expect} = require('@playwright/test')

test('Single file', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    //await page.waitForSelector('#filesToUpload');
    await page.waitForTimeout(3000);
    //await page.locator('#filesToUpload').click();
    //await page.locator('#filesToUpload').setInputFiles('C:/Users/mushiur.rahman/Downloads/image.JPG');
    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/iss2.png')
    await page.waitForTimeout(2000);
})

// test.only('Multiple files', async({page})=>{

// });
test.only('Multiple Files',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
                .setInputFiles(['tests/uploadFiles/testfile1.pdf',
                                 'tests/uploadFiles/testfile2.pdf']);

    await page.waitForTimeout(3000)
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    await page.waitForTimeout(3000)

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(3000)

})
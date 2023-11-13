const{test, expect} = require('@playwright/test')


test('Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const allframes = await page.frames()
    console.log("Number of frames: ", allframes.length)

    // approach 1: using name or url 
    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_5.html'})
    // //const frame = await page.frame('name') //if name is present
    // await frame1.fill("[name= 'mytext1']",'Hello');

    // approach 2
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputBox.fill("Rifat");

    await page.waitForTimeout(3000);


});
const{test} = require('@playwright/test')

test('Drag and Drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.dragAndDrop('#draggable', '#droppable');
    await page.waitForTimeout(3000);

})
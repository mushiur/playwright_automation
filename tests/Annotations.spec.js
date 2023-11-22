const {test, expect} = require('@playwright/test')

test('test1', async({page})=>{
    console.log('this is test1...')
})

test('test2', async({page})=>{
    console.log("This is test2...")
})
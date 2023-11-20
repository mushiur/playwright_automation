//const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'

test.describe.skip('Group1',()=>{
    test('Test1', async({page})=>{
        console.log('This is my test 1 .....');
    })
    
    test('Test2', async({page})=>{
        console.log('This is my test 2 .....');
    })

})

test.describe('Group2',()=>{
    test('Test3', async({page})=>{
        console.log('This is my test 3 .....');
    })
    
    test('Test4', async({page})=>{
        console.log('This is my test 4 .....');
    })
});


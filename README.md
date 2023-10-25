# playwright_automation
Install playwright using terminal
npm init playwright@latest

*check install version of playwright*
* npm playwright -v

*run the playwright test suite* 
* npx playwright test
* npx playwright test --headed  
    * (headed means open the browser)

*Run the test*
* npx playwright test HomePage.spec.js --project=chromium --headed
    * Run specific test file with headed (Open Browser window)
* npx playwright test              
   * runs all tests on all browsers in headless mode
* npx playwright test  MyTest1.spec.js              
    * runs a specific test file
* npx playwright test  MyTest1.spec.js  MyTest2.spec.js           
    * runs the files specified
* npx playwright test -g "test title"                   
    * runs test with the title
* npx playwright test --project=chromium 
    *  runs on specific browser
* npx playwright test --headed  
    *  runs tests in headed mode
* npx playwright test --debug     
    * debug tests
* npx playwright test example.spec.js --debug     
    *  debug specific test file

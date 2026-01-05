const {test, expect}=require('@playwright/test');


test.only('test case 1', async ({browser,page})=>{

    

    //const contxt=await browser.newContext();
    //const page=await contxt.newPage();
    await page.goto("https://www.udemy.com/")
    await expect(page).toHaveTitle("Online Courses - Learn Anything, On Your Schedule | Udemy");

});




import { test, expect } from '@playwright/test';


test('test case 1', async ({ page }) => {

    

    //const contxt=await browser.newContext();
    //const page=await contxt.newPage();
    await page.goto("https://www.udemy.com/")
    await expect(page).toHaveTitle("Online Courses - Learn Anything, On Your Schedule | Udemy");

});

test('test case 2', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});







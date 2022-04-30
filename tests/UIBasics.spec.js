const {test,expect} = require('@playwright/test');


//playwright is 

test('Browser Playwright Test', async ({browser})=>
{

//Browser is playwright fixture for invoking the browser and that's a global variable
        const context =await browser.newContext();//Browser instance is open
        const page = await context.newPage();
        await page.goto("https://google.com");
      console.log(await page.title()); 
      await expect(page).toHaveTitle("Google")

});

test('Page context Playwright Test', async ({page})=>

{

//Browser is playwright fixture for invoking the browser and that's a global variable

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());  
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")


});


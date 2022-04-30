const {test}=require('@playwright/test');

test('Method for web test',async ({page})=>{

         await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
         await page.locator("#username").type("rahulshetty");
         await page.locator("[type='password']").type("learning");
         await page.locator("#signInBtn").click();


         //Wait untill locator shown up page
         //Webdriverwait
       console.log(await page.locator("[style*='block']").textContent());
       //await expect( page.locator("[style*='block']")).toContainText('Incorrect');
        
    })
test.only('Validate with correct details',async ({page})=>{

    const Username= page.locator('#username');
    const Password= page.locator('#password');
    const signInBtn=page.locator("#signInBtn");
    const CardTitle= page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await Username.fill('rahulshettyacademy');
    await Password.fill('learning');
    await page.locator('#terms').click();
    await signInBtn.click();
    // console.log(await CardTitle.first().textContent());
    // console.log(await CardTitle.nth(0).textContent());
   const allTitles= await CardTitle.allTextContents();
   console.log(allTitles)


})


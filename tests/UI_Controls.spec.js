const {test, expect}=require('@playwright/test')


test.only('Handling_Select_DropDown',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    const Dropdown= page.locator("select.form-control");
    await Dropdown.selectOption("consult"); 
     //Select the Radio button
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    //Asserstions
    //Await is required when action performed then await needed  
    console.log( await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   await page.locator("#terms").check();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
   //tO check the attribute value 

 


})

// // test("Child Widnow Handling",async({browser,page})=>{


// //     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// //    const context= await browser.newContext();
// //    const page=  await context.newPage()
// //     const locator=await expect(page.locator('documentLink')).toHaveAttribute('class', 'blinkingText');
// //    const [NewPage]=await Promise.all(

// //     [
// //         context.waitForEvent('page'),
// //         locator.click(),

// //     ]
// //     )
// //   //


// })
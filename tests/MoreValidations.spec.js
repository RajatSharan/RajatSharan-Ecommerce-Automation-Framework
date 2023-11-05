const {test,expect}=require('@playwright/test')

test('Popup validation',async({page})=>{


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click()
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.pause()
    //Handle Javascript Pop up
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator('#confirmbtn').click()
    //Mouse Hover
    await page.locator('#mousehover').hover()
    //Handle & Automate Frame 
    const framesPage= page.frameLocator("#courses-iframe")
    await framesPage.locator("li a[herf*='lifetime-access']:visible").click()
    const textCheck= await framesPage.locator(".text h2").textContent()
    console.log(textCheck.split(" ")[1])



})

test("ScreenShot & VisualCondtion comparision",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'})
    await page.locator("#hide-textbox").click()
    await page.screenshot({path:'screensnot.png'})
    await expect(page.locator("#displayed-text")).toBeHidden();

})

//Screenshot - store -Screenshot

test.only('Visual Testcase',async({page})=>{

  await page.goto("https://google.com/");
  expect(await page.screenshot()).toMatchSnapshot('landing.png')

})

const {test,expect}=require('@playwright/test')
let webContext;

test.beforeAll(async({browser})=>{

    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('http://rahulshettyacademy.com/client');
    await page.locator("#userEmail").fill("testrajat34@gmail.com")
    await page.locator("#userPassword").fill("Rajat@25");
    await Promise.all(
[

    page.waitForNavigation(),
    page.locator("#login").click(),


]
)
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'})
    webContext=await browser.newContext({storageState:'state.json'})

    
})

test("Login Functionality",async () =>
{
const email = 'testrajat34@gmail.com'
const productName='adidas original';
const page = await webContext.newPage()
await page.goto('http://rahulshettyacademy.com/client');
const products =page.locator(".card-body");
const title=await products.allTextContents();
const count= await products.count();
for(let i =0; i < count; ++i )
    {    
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }

    }
 
  await page.locator("[routerlink*='cart']").click()
 await page.locator("div li").first().waitFor();
 const bool= await page.locator("h3:has-text('adidas original')").isVisible()
 expect(bool).toBeTruthy();
 await page.locator('button:has-text("Checkout")').click()
 await page.locator('[placeholder*="Select Country"]').type('ind',{delay:100});
 const dropdown= page.locator(".ta-results");
 await dropdown.waitFor();
 const optionCount=await dropdown.locator("button").count()
 for(let i=0;i<optionCount;++i)
 {
    const text = await dropdown.locator("button").nth(i).textContent()
    if(text === " India"){

        await dropdown.locator("button").nth(i).click()
        break;

    }
 }

 expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
 await page.locator(".action__submit").click()
 await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
const orderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
console.log(orderID)
await page.locator("button[routerlink*='myorders']").click()
await page.locator("tbody").waitFor()
 const rows= await page.locator("tbody tr")


 for(let i=0;i<await rows.count();++i){

   const rowid =await  rows.nth(i).locator("th").textContent()
   if(orderID.includes(rowid)){

    await rows.nth(i).locator("button").first().click();
    break;

   }

 }
 const orderIDDetails=await page.locator(".col-text").textContent()
 expect(orderID.includes(orderIDDetails)).toBeTruthy()

})

test("Test Case 2",async () =>
{
const email = 'testrajat34@gmail.com'
const productName='adidas original';
const page = await webContext.newPage()
await page.goto('http://rahulshettyacademy.com/client');
const products =page.locator(".card-body");
const title=await products.allTextContents();

})
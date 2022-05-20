const {test}=require('@playwright/test')

//Register

// test('Practice_Website',async({page})=>{

//     const register_button=page.locator(".btn1");


// await page.goto('http://rahulshettyacademy.com/client');
// await register_button.waitFor();
// await register_button.click();
// await page.goto('http://rahulshettyacademy.com/client/auth/register');
// await page.locator("#firstName").fill("Rajat");
// await page.locator("#lastName").fill("Sharan");
// await page.locator("#userEmail").fill("rajattest34@gmail.com");
// await page.locator("#userMobile").fill("8692985111");
// await page.selectOption('select#colors', 'blue');

// })


//Login Code

test.only("Login Functionality",async({page})=>

{
const productName='adidas original';
const products =page.locator(".card-body b");
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.goto('http://rahulshettyacademy.com/client');
await page.locator("#userEmail").fill("testrajat34@gmail.com")
await page.locator("#userPassword").fill("Rajat@25");
//Race condition 
await Promise.all(
[

    page.waitForNavigation(),
    page.locator("#login").click(),


]
)
    await page.waitForLoadState('networkidle');
    const title=await products.allTextContents();
    console.log(title);
    const count= await products.count();
    for(let i=0; i < count ; i++ )
    {
       
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        await page.pause();
        //add to cart
        await products.nth(i).locator("text = Add To Cart").click();
        break;
    }

    }
 
   // await page.pause();

})

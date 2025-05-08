import { test, expect,request } from '@playwright/test';

test('Handling_Select_DropDown',async({page})=>{


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

test.only("Child Widnow Handling",async({browser})=>{

const context= await browser.newContext();
const page=  await context.newPage()
//page.route('**/*.{jpg,png,jpeg}',route=>route.abort());
page.on('request',request =>console.log(request.url()))
page.on('response',response=>console.log(response.url(),response.status()))
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const documentLink= page.locator("[href*='documents-request']");
const [newPage]=await Promise.all([
 context.waitForEvent('page'),
 documentLink.click(),

 ])
 const text = await newPage.locator(".red").textContent();
 const arrayText=text.split("@")
 const domain =arrayText[1].split(" ")[0]
 console.log(domain)
await page.locator('#username').type(domain)
console.log(await page.locator('#username').textContent())

})
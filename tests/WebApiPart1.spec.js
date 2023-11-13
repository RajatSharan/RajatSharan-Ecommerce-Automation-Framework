const {test,expect,request}=require('@playwright/test')
const loginPayload= {userEmail:"testrajat34@gmail.com",userPassword:"Rajat@25"}
let response;
const orderPayload= {orders:[{country:"India",productOrderedId:"6262e990e26b7e1a10e89bfa"}]}
import APIUtils  from './utils/APIUtils'
//const {APIUtils}= require('./utils/APIUtils')
test.beforeAll( async ()=>{

    //Login API

    const apiContext=await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload)
    response= await apiUtils.createOrder(orderPayload)


})

test("@API Place the order",async({page})=>
{

    page.addInitScript(value => {

    window.localStorage.setItem('token',value)
 },response.token );

//const email = 'testrajat34@gmail.com'
await page.goto('http://rahulshettyacademy.com/client');
const productName='adidas original';
await page.locator("button[routerlink*='myorders']").click()
await page.locator("tbody").waitFor()
 const rows= await page.locator("tbody tr")
 for(let i=0;i<await rows.count();++i){

   const rowid =await  rows.nth(i).locator("th").textContent()
   if(response.orderID.includes(rowid)){

    await rows.nth(i).locator("button").first().click();
    break;

   }

 }
 const orderIDDetails=await page.locator(".col-text").textContent()
 page.pause()
 expect(response.orderID.includes(orderIDDetails)).toBeTruthy()

})
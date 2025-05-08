import { test, expect,request } from '@playwright/test';
const loginPayload= {userEmail:"testrajat43@gmail.com",userPassword:"Happysoul@25"}
let response;
const orderPayload= {orders:[{country:"India",productOrderedId:"6262e990e26b7e1a10e89bfa"}]}
import APIUtils  from '../utils/api_utils'
const fakePayLoaders = {data:[],message:"No Product in Cart"}
//const {APIUtils}= require('./utils/APIUtils')
test.beforeAll( async ()=>{

    //Login API

    const apiContext=await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload)
    response= await apiUtils.createOrder(orderPayload)


})

test("Place the order",async({page})=>
{

    page.addInitScript(value => {

    window.localStorage.setItem('token',value)
 },response.token );

//const email = 'testrajat34@gmail.com'
await page.goto('http://rahulshettyacademy.com/client');
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
async route=>{

  const response= await page.request.fetch(route.request())
  let body = JSON.stringify(fakePayLoaders)
  route.fulfill({

    response,
    body,
  })

  //intercepting the response : api response  ->|{playwright fakerreponse| browser -> render data on front end 

} )

await page.locator("button[routerlink*='myorders']").click()
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
console.log(await page.locator(".mt-4").textContent())



})
const {test,expect}=require('@playwright/test')
import POManger from '../pageobjects/POManager'
//const {POManger} = require('../pageobjects/POManager')


test.only("Login Functionality",async({page})=>

{
const poManager= new POManger(page)
const username = 'testrajat34@gmail.com'
const password = "Rajat@25"
const productName='adidas original';
const products =page.locator(".card-body");
const loginPage= poManager.getLoginPage()
await loginPage.goTo()
await loginPage.validLogin(username,password)
const dashboardPage = poManager.getdashboardPage()
await dashboardPage.searchProductAddCart(productName)
await dashboardPage.navigateToCart()
const cartPage = poManager.getCartPage();
await cartPage.VerifyProductDisplayed(productName);
await cartPage.Checkout();
const ordersReviewPage = poManager.getOrdersReviewPage();
await ordersReviewPage.searchCountryAndSelect("ind","India");
const orderId = await ordersReviewPage.SubmitAndGetOrderId();
console.log(orderId);
await dashboardPage.navigateToOrders();
const ordersHistoryPage = poManager.getOrdersHistoryPage();
await ordersHistoryPage.searchOrderAndSelect(orderId);
expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
})
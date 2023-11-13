const {test,expect}=require('@playwright/test')
const {customtest}=require('./utils/test-base')
import POManger from '../pageobjects/POManager'
const dataset=JSON.parse(JSON.stringify(require('./utils/ClientAppPOTestData.json')))

for (const data of dataset)
{
test(`Login Functionality ${data.productName} @web`,async ({page})=>
{
const poManager= new POManger(page)
const products =page.locator(".card-body");
const loginPage= poManager.getLoginPage()
await loginPage.goTo()
await loginPage.validLogin(data.username,data.password)
const dashboardPage = poManager.getdashboardPage()
await dashboardPage.searchProductAddCart(data.productName)
await dashboardPage.navigateToCart()
const cartPage = poManager.getCartPage();
await cartPage.VerifyProductDisplayed(data.productName);
await cartPage.Checkout();
const ordersReviewPage = poManager.getOrdersReviewPage();
await ordersReviewPage.searchCountryAndSelect("ind","India");
const orderId = await ordersReviewPage.SubmitAndGetOrderId();
console.log(orderId);
await dashboardPage.navigateToOrders();
const ordersHistoryPage = poManager.getOrdersHistoryPage();
await ordersHistoryPage.searchOrderAndSelect(orderId);
expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
}
customtest(`Test data as fixture`,async ({page,testDataForOrder})=>
{
const poManager= new POManger(page)
const products =page.locator(".card-body");
const loginPage= poManager.getLoginPage()
await loginPage.goTo()
await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password)
const dashboardPage = poManager.getdashboardPage()
await dashboardPage.searchProductAddCart(testDataForOrder.productName)
await dashboardPage.navigateToCart()
const cartPage = poManager.getCartPage();
await cartPage.VerifyProductDisplayed(testDataForOrder.productName);
await cartPage.Checkout();
})

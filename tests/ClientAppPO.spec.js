const {test,expect}=require('@playwright/test')
import POManger from '../pageobjects/POManager'
const dataset=JSON.parse(JSON.stringify(require('./utils/ClientAppPOTestData.json')))

for (const data of dataset)
{
test(`Login Functionality ${data.productName}`,async ({page})=>
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
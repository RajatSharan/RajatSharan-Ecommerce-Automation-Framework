import { When, Then, Given } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import POManger from '../../pageobjects/POManager.js';
import { test, expect } from '@playwright/test';

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    this.page = await context.newPage();  

    this.poManager = new POManger(this.page);  
    this.dashboardPage = this.poManager.getdashboardPage()

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', { timeout: 15000 }, async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await this.page.pause();  // ✅ Only use this.page
    await cartPage.VerifyProductDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();  
    console.log(this.orderId);
});

Then('Verify order in present in OrderHistory', async function () {
    await this.dashboardPage.navigateToOrders();  
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);  
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

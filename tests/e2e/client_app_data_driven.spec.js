import { test, expect } from '@playwright/test';
import POManger from '../../pageobjects/po_manager.js';
import dataset from '../utils/client_app_data_driven.json' assert { type: 'json' };


test.describe('Client App End-to-End Tests', () => {
    for (const data of dataset) {
        test(`Login and Order Workflow - ${data.productName}`, async ({ page }) => {
            const poManager = new POManger(page);
            const loginPage = poManager.getLoginPage();

            await loginPage.goTo();
            await loginPage.validLogin(data.username, data.password);

            const dashboardPage = poManager.getdashboardPage();
            await dashboardPage.searchProductAddCart(data.productName);
            await dashboardPage.navigateToCart();

            const cartPage = poManager.getCartPage();
            await cartPage.VerifyProductDisplayed(data.productName);
            await cartPage.Checkout();
        });
    }
});
import { test, expect } from '@playwright/test';
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator("card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator('button:has-text("Checkout")');
    }

    async VerifyProductDisplayed(productName) {
        // Ensure the cart page is fully loaded
        await this.page.waitForLoadState('networkidle');

        // Wait for the first cart item to be visible
        await this.page.locator("div li").first().waitFor();

        // Validate the product is visible in the cart
        const bool = await this.page.locator(`h3:has-text('${productName}')`).isVisible();
        expect(bool).toBeTruthy();
    }

    async Checkout() {
        await this.checkout.click();
    }

    getProductLocator(productName) {
        return this.page.locator(`h3:has-text('${productName}')`);
    }
}

export default CartPage;
import { test, expect } from '@playwright/test';
class CartPage{


    constructor(page){

        this.page=page
        this.cartProducts=page.locator("div li").first()
        this.productsText=page.locator("card-body b")
        this.cart=page.locator("[routerlink*='cart']")
        this.orders=page.locator("button[routerlink*='myorders']")
        this.checkout=page.locator('button:has-text("Checkout")')
    }

   async VerifyProductDisplayed(productName){

     // Wait for cart page to load
     await this.page.waitForNavigation({ waitUntil: "domcontentloaded" });

     // Debugging: Check if correct HTML is loaded
     const cartHtml = await this.page.innerHTML("body");
     console.log("Cart Page HTML:", cartHtml);
 
     // Wait for cart items to be visible
     await this.page.waitForSelector(".cart-item h3", { timeout: 10000 });
 
     // Get all cart item names
     const cartItems = await this.page.locator(".cart-item h3").allTextContents();
     console.log("Cart contains:", cartItems);
 
     // Validate the product name
     await expect(this.page.locator(".cart-item h3")).toContainText(productName, { ignoreCase: true });
 
  
    }

    async Checkout(){

        await this.checkout.click()
    }

    getProductLocator(productName){

        return this.page.locator("h3:has-text('"+productName+"')")
    }
    



}
export default CartPage;
//module.exports= {CartPage}
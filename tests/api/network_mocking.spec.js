import { test, expect } from '@playwright/test';

test("Security test request intercept", async ({ page }) => {
  //login and reach the order page
  const email = "testrajat34@gmail.com";
  await page.goto("http://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("testrajat34@gmail.com");
  await page.locator("#userPassword").fill("Rajat@25");
  //Race condition
  await Promise.all([page.waitForNavigation(), page.locator("#login").click()]);
  await page.waitForLoadState("networkidle");
  await page.locator("button[routerlink*='myorders']").click();
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=654690e77244490f95df4465 ",
      })
  );
  await page.locator("button:has-text('View')").first().click();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")
});

import {test} from '@playwright/test'

test('Playwright special Character',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click()
    await page.getByLabel("Employed").click()
    await page.getByLabel("Gender").selectOption("Female")


})

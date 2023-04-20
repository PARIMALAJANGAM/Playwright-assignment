import { test } from "@playwright/test";

test("buttons", async({page})=>{
    await page.goto("https://demoqa.com/buttons");
    await page.locator("//button[text()='Double Click Me']").dblclick();
    // const button =  await page.locator("//button[text()='Right Click Me']");
    const button =  await page.locator("//button[text()='Right Click Me']").click({ button: 'right' });
    // await page.click('button', { button: 'right' });
    await page.locator("//button[text()='Click Me']").click();
    await page.waitForTimeout(5000)
})
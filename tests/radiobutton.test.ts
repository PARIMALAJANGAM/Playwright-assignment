import { test } from "@playwright/test";

test("radio button", async ({ page }) => {
    await page.goto("https://demoqa.com/radio-button");
    
     await page.locator("//label[text()='Yes']").click();
     await page.waitForTimeout(3000)
})
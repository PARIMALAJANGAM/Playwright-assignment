import { test } from "@playwright/test";

test('login Textbox', async ({ page }) => {
await page.goto("https://demoqa.com/text-box");
await page.locator("//input[@placeholder='Full Name']").fill('Parimala');
await page.locator("input[placeholder='name@example.com']").fill('parimala@gmail.com');
await page.locator("textarea[placeholder='Current Address']").type("hyderabad,manikonda");
await page.locator("#permanentAddress").type("nothing");
await page.locator("#submit").click();
// await page.locator("div.border.col-md-12.col-sm-12");

const result = await page.locator("//div[@class='border col-md-12 col-sm-12']").textContent();
console.log("data is " + result);
await page.waitForTimeout(7000);
})
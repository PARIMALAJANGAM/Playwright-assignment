import { test } from "@playwright/test";

test("web tables", async ({page})  => {
await page.goto("https://demoqa.com/webtables");
await page.locator("#addNewRecordButton").click();
await page.locator("#firstName").fill("parimala");
await page.locator("#lastName").fill("jangam");
await page.locator("#userEmail").fill("parimala@gmail.com");
await page.locator("#age").fill("28");
await page.locator("#salary").fill("20000000000");
await page.locator("#department").fill("computer science");
await page.locator("//button[text()='Submit']").click();
// await page.waitForTimeout(5000);
await page.waitForLoadState('load');
await page.press('#searchBox', 'Enter');
// await page.locator("#searchBox").click();
await page.type("#searchBox", 'Alden');
await page.locator("#edit-record-2").click();
await page.locator("#firstName").click();
await page.locator("#firstName").clear();
await page.type("#firstName",'Aldenn');
await page.locator("#submit").click();
await page.waitForTimeout(1000);
await page.locator("#searchBox").clear();
await page.type("#searchBox", 'parimala');
await page.locator("#basic-addon2").click();
await page.waitForTimeout(1000)
// await page.locator('span[id="delete-record-4"]').click({force:true});
await page.locator("span[title='Delete']").click({force:true});

// await new Promise(() => {})
})
import { expect, test } from "@playwright/test";

test("links_test", async({page})=>{
    await page.goto("https://demoqa.com");
    // await const = page1.locator("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Links']").click();
    await page.locator("#simpleLink").click();
    await expect(page).toHaveURL("https://demoqa.com");
    await page.waitForTimeout(5000)



    // await page.locator("#dynamicLink").click();


    //  await page.locator("#created").click();
    //  const result = await page.locator("#linkResponse").innerText();
    //  console.log(result);
    //  await expect(page.locator("#linkResponse")).toHaveText("Link has responded with staus 201 and status text Created");
    // // await page.locator("#no-content").click();
    // await page.locator("#moved").click();
    // await page.locator("#bad-request").click();
    // await page.locator("#unauthorized").click();
    // await page.waitForTimeout(4000);
    // await page.locator("#forbidden").click();
    // await page.locator("#invalid-url").click();
    // await page.waitForTimeout(5000);
})
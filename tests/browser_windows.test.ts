import { test,expect} from "@playwright/test";

// test("browser_windows1", async({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://demoqa.com");
//     await page.locator("//h5[text()='Elements']").click();
//     await page.locator("//div[text()='Alerts, Frame & Windows']").click();
//     await page.locator("//span[text()='Browser Windows']").click();
//     const [newWindow] = await Promise.all([
//         context.waitForEvent("page"),
//         await page.click("#tabButton")   
//     ])
//     await newWindow.waitForLoadState("load");
//     expect(newWindow.url()).toContain("sample")
// })

test("browser_windows2", async({browser})=>{
     const context = await browser.newContext();
     const page = await context.newPage();
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//div[text()='Alerts, Frame & Windows']").click();
    await page.locator("//span[text()='Browser Windows']").click();
    await page.waitForTimeout(3000)
    // await page.locator("#windowButton").click();
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.click("//button[text()='New Window']")
      ]);
      await newWindow.waitForLoadState("load",{timeout:4000});
      const title = await newWindow.title();
      expect(title).toContain("This is a sample page");
      await page.waitForTimeout(3000)
})

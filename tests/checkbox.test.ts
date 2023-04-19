import { test } from "@playwright/test";

test("checkbox", async({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    await page.locator("span.rct-checkbox").check();
    await page.waitForTimeout(3000);
    await page.locator("span.rct-checkbox").uncheck();
    await page.click("button[aria-label='Toggle']");
    await page.waitForTimeout(3000);
    await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[2]");
    
    await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[3]");
    
    await page.locator(" //span[text()='Commands']").click();
    
    await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[4]");
    await page.waitForTimeout(3000);
    await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[5]");
    await page.locator("//input[@id='tree-node-office']/following-sibling::span[1]").check();
    await page.waitForTimeout(3000);
    await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[6]");
    await page.waitForTimeout(3000);
    
  
    // await page.click("(//button[@class='rct-collapse rct-collapse-btn'])[7]");
    // await page.waitForTimeout(3000);
})
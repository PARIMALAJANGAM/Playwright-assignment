import { test,expect} from "@playwright/test";

test("dynamic_properties", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Dynamic Properties']").click();
    // await page.waitForSelector('#enableAfter');
    const element = await page.waitForSelector('#enableAfter');
    const text = await element.textContent();
    expect(text).toBe('Will enable 5 seconds');
    await page.waitForTimeout(3000);
})
// ===============================================================================================
test("dynamic_properties2", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Dynamic Properties']").click();
    const element1 = await page.waitForSelector('#colorChange');
    const color = await element1.getProperty('color');
    console.log(color);
    expect(color).toBe('color changed'); 
})
// =====================================================================================================
test("dynamic_properties3", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Dynamic Properties']").click();
    const element2 = await page.waitForSelector('#visibleAfter',{state: 'visible'});
    const text = await element2.textContent();
    expect(text).toBe('Visible After 5 Seconds'); // expected color in RGB format
})


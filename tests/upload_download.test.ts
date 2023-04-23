import { test } from "@playwright/test";

test("Download", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Upload and Download']").click();
    await page.locator("//a[text()='Download']").click();
    await page.waitForTimeout(3000);
})
// ===============================================================================================
test("Download1", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Upload and Download']").click();
    const download =  await Promise.all([
        page.waitForEvent("download"),
        page.click("//a[text()='Download']")
    ])
    // const path = await download[0].path();
    // console.log(path);
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);
})
// ===============================================================================================
test("upload", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Upload and Download']").click();
    await page.setInputFiles("#uploadFile",["uploadItems/apple.png"]);
   
    // const [uploadFiles] = await Promise.all([
    //     page.waitForEvent("filechooser"),
    //     page.click("#uploadFile")
    // ])
    // const isMuliple = uploadFiles.isMultiple();
    // console.log(isMuliple);
    // uploadFiles.setFiles(["uploadItems/apple.png","uploadItems/mango.png"])
    await page.waitForTimeout(3000);  
})
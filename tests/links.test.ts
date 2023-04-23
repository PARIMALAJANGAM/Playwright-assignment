import { expect, test} from "@playwright/test";

test("links_test", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Links']").click();  
    await page.locator("//a[@id='simpleLink']").click();
    await expect(page.locator("//img[@src='/images/Toolsqa.jpg']")).toBeVisible();
     await page.waitForTimeout(2000);
})
// ============================================================================================
    test("links_test1", async({page})=>{
        await page.goto("https://demoqa.com");
        await page.locator("//h5[text()='Elements']").click();
        await page.locator("//span[text()='Links']").click();
        await page.locator("#simpleLink").click();
        await page.waitForTimeout(2000);
        await expect(page).toHaveURL("https://demoqa.com/");
        await page.waitForTimeout(5000);
    })
//  =============================================================================================   
    // test("links_test2", async () => {
    //     await page.goto("https://demoqa.com");
    //     await page.locator("//h5[text()='Elements']").click();
    //     await page.locator("//span[text()='Links']").click();
    //     await page.locator("//a[@id='simpleLink']").click();
    //     const pagePromise = context.waitForEvent('page');
    //     const newPage = await pagePromise;
    //     expect(newPage).toHaveURL("https://demoqa.com/");
    //     await newPage.waitForLoadState();
    //     console.log("URL validated");
    // })
    
// =======================================================================================
    test("links_test3", async({page})=>{
        await page.goto("https://demoqa.com");
        await page.locator("//h5[text()='Elements']").click();
        await page.locator("//span[text()='Links']").click();
     await page.locator("#dynamicLink").click(); 
     await expect(page.locator("//img[@src='/images/Toolsqa.jpg']")).toBeVisible();
     await page.waitForTimeout(2000)
    })

// ==========================================================================================

test("links_test4", async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[text()='Links']").click();  

     await page.locator("#created").click();
     const result = await page.locator("#linkResponse").textContent();
     console.log(result);
     await page.waitForTimeout(3000)
       expect(page.locator('#linkResponse')).toHaveText("Link has responded with staus 201 and status text Created");
     await page.waitForTimeout(1000);

    await page.locator("#no-content").click();
    const result1 = await page.locator("#linkResponse");
    console.log(result1);
    await page.waitForTimeout(3000)
     expect(result1).toHaveText("Link has responded with staus 204 and status text No Content");

    await page.locator("#moved").click();
    const result2= await page.locator("#linkResponse");
    console.log(result2);
    await page.waitForTimeout(3000)
     expect(result2).toHaveText("Link has responded with staus 301 and status text Moved Permanently");
   
     await page.locator("#bad-request").click();
     const result3= await page.locator("#linkResponse");
    console.log(result3);
    await page.waitForTimeout(3000)
     expect(result3).toHaveText("Link has responded with staus 400 and status text Bad Request");

    await page.locator("#unauthorized").click();
    const result4= await page.locator("#linkResponse");
    console.log(result4);
    await page.waitForTimeout(3000)
     expect(result4).toHaveText("Link has responded with staus 401 and status text Unauthorized");

    await page.locator("#forbidden").click();
    const result5= await page.locator("#linkResponse");
    console.log(result5);
    await page.waitForTimeout(3000)
     expect(result5).toHaveText("Link has responded with staus 403 and status text Forbidden");

     await page.locator("#invalid-url").click();
     const result6= await page.locator("#linkResponse");
     console.log(result6);
     await page.waitForTimeout(3000)
      expect(result6).toHaveText("Link has responded with staus 404 and status text Not Found");
     await page.waitForTimeout(5000);
})
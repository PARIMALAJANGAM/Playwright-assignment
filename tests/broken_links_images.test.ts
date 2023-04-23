// import { expect, test } from "@playwright/test";

// // test('broken_links_images', async({page})=>{
// //     await page.goto("https://demoqa.com");
// //     await page.locator("//h5[text()='Elements']").click();
// //     await page.locator("//span[text()='Broken Links - Images']").click();
// //     await page.waitForTimeout(3000);
// //     await page.locator("(//p[text()='Valid image']/following-sibling::img)[1]").isVisible();
// //     await page.waitForTimeout(3000);
// // })

// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
  
//   // Navigate to the page with images to be validated
//   await page.goto('https://example.com');
  
//   // Get all images on the page
//   const images = await page.$$('img');
  
//   // Loop through each image and check if it's broken
//   for (const image of images) {
//     const src = await image.getAttribute('src');
//     const alt = await image.getAttribute('alt');
    
//     // Check if the image is broken by attempting to load it
//     try {
//       await page.goto(src, { waitUntil: 'networkidle' });
//     } catch (error) {
//       console.log(`The image with src "${src}" and alt "${alt}" is broken.`);
//     }
//   }
  
//   await browser.close();
// })();

// // test('broken_links_images', async({page})=>{
// //     await page.goto("https://demoqa.com");
// //     await page.locator("//h5[text()='Elements']").click();
// //     await page.locator("//span[text()='Broken Links - Images']").click();
// //     await page.waitForTimeout(3000);
// //     expect(page.locator("(//p[text()='Valid image']/following-sibling::img)[2]")).not.toBeVisible();
// //     await page.waitForTimeout(3000);
// // })

// // test('broken_links_images', async({page})=>{
// //     await page.goto("https://demoqa.com");
// //     await page.locator("//h5[text()='Elements']").click();
// //     await page.locator("//span[text()='Broken Links - Images']").click();
// //     await page.locator("//a[text()='Click Here for Valid Link']").click();
// //     expect(page.locator("//img[@class='banner-image']")).toHaveText("//img[@src='/images/Toolsqa.jpg']");
// //     await page.waitForTimeout(3000);
// // })

// // test('broken_links_images', async({page})=>{
// //     await page.goto("https://demoqa.com");
// //     await page.locator("//h5[text()='Elements']").click();
// //     await page.locator("//span[text()='Broken Links - Images']").click();
// //     await page.waitForTimeout(3000);
// //     await page.locator("//a[text()='Click Here for Broken Link']").click();
// //     // expect(page.locator("")).toThrowError('This page returned a 500 status code.');
// //     expect(() => {
// //         throw new Error('This page returned a 500 status code.');
// //       }).toThrowError();
// //     await page.waitForTimeout(3000);
// // })

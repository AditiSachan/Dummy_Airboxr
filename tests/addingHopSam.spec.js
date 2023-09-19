
const login = require('../loginSam'); 
const { test, expect, chromium} = require('@playwright/test');

test('Successful Login', async ({ }, testInfo) => {
  testInfo.setTimeout(70000);
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled", "--disable-popup-blocking"],
  });
  const context = await browser.newContext({});
  const page = await context.newPage();

  // Use the imported login function
  await login(page, 'testairboxr@gmail.com', 'TestAirboxr12!@');

  await page.waitForSelector('text=Connect your Shopify store');
  console.log("hurray");
});
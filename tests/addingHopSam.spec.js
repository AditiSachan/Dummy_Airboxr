
const login = require('../loginSam'); 
const { test, expect, chromium} = require('@playwright/test');

test('Successful Login', async ({  }, testInfo) => {
  testInfo.setTimeout(60000);
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext({});
  const page = await context.newPage();

  // Use the imported login function
  await login(page, 'aditisachan7857@gmail.com', 'total##8');

  await page.waitForSelector('text=Hops Marketplace');

  // Perform assertions to validate successful login
  await page.click('text=Hops Marketplace');
  
  // Wait for a specific element on the "Hops marketplace" page
  await page.waitForSelector('text=predesigned data automations');

  // Get the text content of the element
  const browseHopsText = await page.textContent('text=predesigned data automations');

  // Perform assertion to validate the navigation
  expect(browseHopsText).toBe('You will find predesigned data automations on this page.');

});
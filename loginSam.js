async function login(page, email, password) {
    // Navigate to the login page
    console.log('Navigating to the login page...');

    await page.goto('https://app.airboxr.com/login');
    console.log('Login page loaded successfully.');

    // Click on "Sign in with Google"
    await page.click('text=Sign in with Google');

    console.log('waiting for popup to found');

     // Wait for the Google sign-in popup to open
    const popup = await page.waitForEvent('popup');
    if (!popup) {
        throw new Error('Popup not found');
    }
    
    // popup not found???
    console.log('popup found');
    // Wait for the Google sign-in page to load
    await popup.waitForSelector('input[type="email"]');
    
    // Fill in Google sign-in credentials
    await popup.fill('input[type="email"]', email);
  
    await popup.click('text=Next');
      
  
    // Wait for password input
    await popup.waitForSelector('input[type="password"]', { state: 'visible' });
  
    // Fill in password
    await popup.fill('input[type="password"]', password);
  
    await popup.click('text=Next');
    await popup.click('text=Continue');
    console.log("<Login successful>");
    
  }
  
  module.exports = login;

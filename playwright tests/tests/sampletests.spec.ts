import { test, expect } from '@playwright/test';

test('register new user', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');

  // Fill in the registration form
  await page.locator('#customer\\.firstName').fill('John');
  await page.locator('#customer\\.lastName').fill('Doe');
  await page.locator('#customer\\.address\\.street').fill('123 Main St');
  await page.locator('#customer\\.address\\.city').fill('Anytown');
  await page.locator('#customer\\.address\\.state').fill('CA');
  await page.locator('#customer\\.address\\.zipCode').fill('12345');
  await page.locator('#customer\\.phoneNumber').fill('555-1234');
  await page.locator('#customer\\.ssn').fill('123-45-6789');
  const username = 'johndoe99'
  await page.locator('#customer\\.username').fill(username);
  await page.locator('#customer\\.password').fill('password123');
  await page.locator('#repeatedPassword').fill('password123');

  // Submit the form
  await page.getByRole('button', { name: 'REGISTER' }).click();

  // Expect success message or redirect
    await expect(page.locator('.title')).toContainText(`Welcome ${username}`); 

    const welcomeText = await page.locator('.title').textContent();

if (welcomeText?.includes(`Welcome ${username}`)) {
    console.log(`Test Passed: User ${username}successfully registered.`);
} else {
    console.log(`Test Failed: User ${username} not registered.`);
}
  // Assuming it redirects to account overview
});
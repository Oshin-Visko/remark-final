import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'auth.json'
// });

test('Check that conversation is working fine.', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/conversation');  

  await page.getByRole('heading', { name: 'Jho Doe New' }).nth(1).click();

  await page.getByRole('textbox', { name: 'Type a message...' }).click();
  await page.getByRole('textbox', { name: 'Type a message...' }).fill('Hello, this is an automation test...');
  await page.locator('section').getByRole('button').click();
  await expect(page.locator('section').getByText('Hello, this is an automation')).toBeVisible();
});
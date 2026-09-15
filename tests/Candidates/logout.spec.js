import { test, expect } from '@playwright/test';

let screenshot;

test('Test that user is able to logout successfully', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/questionnaires');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('heading', { name: 'Smart Careers Begin Here With' })).toBeVisible({timeout : 60000});

  await page.waitForTimeout(2000);
  screenshot = await page.screenshot();
  test.info().attach('Conversation', {
    body:screenshot,
    contentType: 'image/png'
  })

});
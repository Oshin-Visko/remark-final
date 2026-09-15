import { test, expect } from '@playwright/test';

let screenshot;

test('Check that recommended jobs are available for the user as per the profile and designation', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/recommended-jobs');
  await expect(page.getByRole('heading', { name: 'Recommended Jobs' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Apply Now' }).first()).toBeVisible();

  await page.waitForTimeout(1000);
  screenshot = await page.screenshot();
  test.info().attach('Conversation', {
    body:screenshot,
    contentType: 'image/png'
  })

});
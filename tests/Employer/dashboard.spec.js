import { test, expect } from "@playwright/test";

let screenshot;

test('Dashboard', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/statistics-job');
  await expect(page.getByRole('heading', { name: ' Job Analytics Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: ' Job Posting Trends' })).toBeVisible();
  await expect(page.getByRole('heading', { name: ' Jobs by Category' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Want to improve your results?' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Export Report' })).toBeVisible();

  await page.waitForTimeout(1000);
  screenshot = await page.screenshot();
  test.info().attach('Dashboard', {
    body:screenshot,
    contentType: 'image/png'
  })

});
import { test, expect } from "@playwright/test";


test('Dashboard', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/statistics-job');
  await expect(page.getByRole('heading', { name: ' Job Analytics Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: ' Job Posting Trends' })).toBeVisible();
  await expect(page.getByRole('heading', { name: ' Jobs by Category' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Want to improve your results?' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Export Report' })).toBeVisible();
});
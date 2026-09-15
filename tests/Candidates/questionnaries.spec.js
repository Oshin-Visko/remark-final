import { test, expect } from '@playwright/test';


test('Ensure that Questionnaries page is loading successfully', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/questionnaires');
  await expect(page.getByText('Questionnaires').nth(3)).toBeVisible();
  await page.getByText('No Quiz Assigned').click();
});
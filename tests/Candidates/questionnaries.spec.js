import { test, expect } from '@playwright/test';

let screenshot;


test('Ensure that Questionnaries page is loading successfully', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/questionnaires');
  await expect(page.getByText('Questionnaires').nth(3)).toBeVisible();
  await page.getByText('No Quiz Assigned').click();

  await page.waitForTimeout(1000);
  screenshot = await page.screenshot();
  test.info().attach('Conversation', {
    body:screenshot,
    contentType: 'image/png'
  })

});
import { test, expect } from "@playwright/test";

test('Check that user is able to create a new ticket.', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/support');
  await page.getByRole('combobox').selectOption('Job Posting Issue ');
  await page.getByRole('textbox', { name: 'Please provide as much detail' }).click();
  await page.getByRole('textbox', { name: 'Please provide as much detail' }).fill('I\'m not able to post a job.');
  await expect(page.getByRole('button', { name: 'Submit Ticket' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit Ticket' }).click();
  await expect(page.getByRole('heading', { name: 'Ticket Created!' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Your Ticket Number' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'View My Tickets' }).nth(1)).toBeVisible();
  await page.getByRole('button', { name: 'View My Tickets' }).nth(1).click();
});

test('Verify that all tickets are visible on the support page', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/support')
    await expect(page.getByRole('button', { name: 'ai Features' })).toBeVisible();
    await page.getByRole('button', { name: 'My Tickets', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'My Support Tickets' })).toBeVisible();
})
import { test, expect } from '@playwright/test';

test('Verfiy that Homepage loads successfully', async ({ page }) => {
  await page.goto('https://remarkhr.com/');
  await expect(page.locator('#remark-logo').getByRole('link', { name: 'remark logo' })).toBeVisible();
  await page.getByRole('heading', { name: 'Smart Careers Begin Here With' }).click();
  await expect(page.getByRole('heading', { name: 'Smart Careers Begin Here With' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Upload Your CV & Unlock' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AI Tools Made for Candidates' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Explore Key Industries' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Industry Leaders Partnering' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'FAQs' })).toBeVisible();
  await expect(page.getByText('Looking for job?')).toBeVisible();
 
});

test('Ensure that user is able to request for callback', async ({page}) => {
  await page.goto('https://remarkhr.com/');
  await expect(page.locator('#remark-logo').getByRole('link', { name: 'remark logo' })).toBeVisible();
  await page.getByRole('textbox', { name: '+' }).click();
  await page.getByRole('textbox', { name: '+' }).fill('9999999999');
  await page.getByRole('button', { name: 'Connect Now' }).click();

  await expect(page.getByText('✅ Thank you, Remark team will')).toBeVisible({timeout : 30000});
  await page.getByText('✅ Thank you, Remark team will').isVisible();

  
  await test.info().attach('After', {
    body : await page.screenshot(),
    contentType : 'image/png' , 
})
})
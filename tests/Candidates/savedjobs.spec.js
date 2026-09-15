import { test, expect } from '@playwright/test';

import {candidateJobTitle} from '../../AA OPEN THIS FIRST';


  // const jobsearch = 'translation work';


test('Check saved jobs functionality is working correctly', async ({ page }) => {

    await page.goto('https://remarkhr.com');

  // await login(page);

  // const jobsearch = 'front desk manager';

  // await page.locator('#remark-logo').getByRole('link', { name: 'remark logo' }).click();
  await page.getByRole('button', { name: 'Normal Search' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).fill(candidateJobTitle);
  await page.getByRole('button', { name: 'Search →' }).click();

  
   const textContent = await page.locator('h2[title]').first().getAttribute('title');  
   console.log('Job Title :', textContent);

  // await expect(page.getByRole('link', { name: 'Accountant' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Save' }).first().click();

  await expect(page.getByRole('link', { name: 'Saved' })).toBeVisible();

  // await page.pause()

  // await page.reload();

  // await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Jho Doe New Full Stack' }).click();
    // await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Saved Jobs' }).click();

  await page.pause(500);

  await page.waitForTimeout(1000);
  
  // await page.waitForLoadState('networkidle');

  await page.reload();

  await page.waitForTimeout(100);
  await page.getByRole('textbox', { name: 'Search jobs by title...' }).click();
  await page.getByRole('textbox', { name: 'Search jobs by title...' }).fill(textContent);
  await expect(page.getByRole('link', { name: textContent }).first()).toBeVisible();

  await test.info().attach('Saved Job Screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });

});
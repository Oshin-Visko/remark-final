import { test, expect } from '@playwright/test';


import { candidateJobTitle } from '../../AA OPEN THIS FIRST';

test('Verify job application functionality', async ({ page }) => {

  await page.goto('https://remarkhr.com')

  await page.getByRole('button', { name: 'Normal Search' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).fill(candidateJobTitle);
  await page.getByRole('button', { name: 'Search →' }).click();


  const textContent = await page.locator('h2[title]').first().getAttribute('title');
  console.log('Text content - Job Search:', textContent);


  await test.info().attach('Job Search Screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });

});

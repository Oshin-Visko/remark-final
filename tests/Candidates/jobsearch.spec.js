import { test, expect } from '@playwright/test';


import {candidateJobTitle} from '../../AA OPEN THIS FIRST';


// import { setAuth } from '../utils/auth';

  // let jobSearch = 'translation work';

  // npx playwright test tests/applied.spec.js tests/savedjobs.spec.js tests/profile.spec.js tests/jobsearch.spec.js --headed --workers=1 --max-failures=1


test('Verify job application functionality', async ({ page }) => {

    // await login(page);

    await page.goto('https://remarkhr.com')

    //  await setAuth(page);

  // await page.getByRole('button', { name: 'Close app download card' }).click();
  // await page.getByRole('button', { name: 'Close modal' }).click();
  // await page.getByRole('button', { name: 'Reject all cookies' }).click();


  // Job search keyword
  // let jobsearch = 'full stack';

  // await page.locator('#remark-logo').getByRole('link', { name: 'remark logo' }).click();
  await page.getByRole('button', { name: 'Normal Search' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).click();
  await page.getByRole('textbox', { name: 'Enter skills, designations,' }).fill(candidateJobTitle);
  await page.getByRole('button', { name: 'Search →' }).click();

  // await page.getByRole('button', { name: 'Apply Now' }).first().click();
  // await page.getByRole('button', { name: 'Yes' }).click();

  const textContent = await page.locator('h2[title]').first().getAttribute('title');  
  console.log('Text content - Job Search:', textContent);

  // await page.pause(100);

  // const isApplied = await page.getByText('Applied').first().isVisible();
  // console.log('Applied:',isApplied);
  // await expect(page.getByText('Applied').first()).toBeVisible();

  await test.info().attach('Job Search Screenshot', {
  body: await page.screenshot(),
  contentType: 'image/png',
});


});

import { test, expect } from '@playwright/test';

import {candidateJobTitle} from '../../AA OPEN THIS FIRST';

    // let jobtitle = 'translation work';



test('Verify that user is able to apply the job successfully', async ({ page }) => {
  // await login(page);

    await page.goto('https://remarkhr.com');

  
    // Job search keyword
    // let jobsearch = 'front desk manager';
  
    // await page.locator('#remark-logo').getByRole('link', { name: 'remark logo' }).click();
    await page.getByRole('button', { name: 'Normal Search' }).click();
    await page.getByRole('textbox', { name: 'Enter skills, designations,' }).click();
    await page.getByRole('textbox', { name: 'Enter skills, designations,' }).fill(candidateJobTitle);
    await page.getByRole('button', { name: 'Search →' }).click();

    await page.getByRole('button', { name: 'Apply Now' }).first().click();
    await page.getByRole('button', { name: 'Yes' }).click();

        await page.reload();

        // await page.getByRole('link', { name: 'Save' }).first().click();

    const textContent = await page.locator('h2[title]').first().getAttribute('title');  
    console.log('Text content - Job Applied:', textContent);
  

    await page.locator('a[href="/profile/employee/profile"]').click();

    await page.waitForTimeout(2000)

        await page.reload();

    // await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Applied Jobs' }).click({force:true});
    await page.waitForLoadState('networkidle');
    await page.reload();
    await page.getByRole('textbox', { name: 'Search applied jobs by title' }).click();
    await page.getByRole('textbox', { name: 'Search applied jobs by title' }).fill(textContent);
    await page.waitForLoadState('networkidle');
    // await expect(page.getByRole('link', { name: textContent, exact: false })).toBeVisible();

    await test.info().attach('Job Applied Screenshot', {
  body: await page.screenshot(),
  contentType: 'image/png',
    });

});
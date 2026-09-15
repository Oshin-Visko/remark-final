import { test, expect } from "@playwright/test";

import {employerJobTitle} from '../../AA OPEN THIS FIRST';



let screenshot;


test('Verify that user is able to post a job', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/manage-jobs');


    screenshot = await page.screenshot();
    await test.info().attach('Before Adding Job', {
        body: screenshot,
        contentType: 'image/png'
    })


    await expect(page.getByRole('button', { name: 'Post New Job' })).toBeVisible();
    await page.getByRole('button', { name: 'Post New Job' }).click();
    await expect(page.locator('.w-14').first()).toBeVisible();
    await page.getByRole('textbox', { name: '05' }).click();
    await page.getByRole('textbox', { name: '05' }).fill('1');
    await page.locator('input[type="date"]').fill('3000-01-01');

    //   await expect(page.getByRole('option', { name: 'Andaman and Nicobar Islands' })).toBeVisible();

    await page.getByRole('combobox').first().click();
    await page.getByRole('combobox').first().fill('mad');
    await page.locator('div').filter({ hasText: /^Madhya Pradesh$/ }).nth(1).click({ force: true });
    //   await expect(page.getByRole('combobox', { name: 'Madhya Pradesh' }).first()).toBeVisible();
    //   await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'e.g. Developer, Designer' }).click();
    await page.getByRole('textbox', { name: 'e.g. Developer, Designer' }).fill(employerJobTitle);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('textbox', { name: 'Select Company you are hiring' })).toBeVisible();

    //   await page.pause();

    await page.getByRole('textbox', { name: 'Select Industry you are' }).click();
    await page.getByText('IT Develop', { exact: false }).click();

    await page.getByRole('textbox', { name: 'Select Qualification' }).click();
    await page.getByText('BCOM', { exact: false }).click();


    await page.getByRole('textbox', { name: 'Select Job Type Required' }).click();
    await page.getByText('Full T', { exact: false }).click();


    await page.getByRole('textbox', { name: '-2,00,000' }).click();
    await page.getByRole('textbox', { name: '-2,00,000' }).fill('1000');
    await page.getByRole('textbox', { name: '-4,00,000' }).click();
    await page.getByRole('textbox', { name: '-4,00,000' }).fill('10000');
    await page.getByRole('button', { name: 'Next' }).click();




    await page.getByRole('textbox', { name: 'e.g. JavaScript, Sales, Excel' }).click();
    await page.getByRole('textbox', { name: 'e.g. JavaScript, Sales, Excel' }).fill(' HTML ');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox', { name: 'e.g. JavaScript, Sales, Excel' }).fill(' CSS ');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox', { name: 'e.g. JavaScript, Sales, Excel' }).fill(' JS ');

    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).click();
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).fill('Hello World ');
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).press('ArrowRight');
    await page.getByRole('textbox', { name: 'Enter a clear job description' }).fill('Hello World Hello World Hello World Hello World Hello World Hello World ');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('paragraph').filter({ hasText: 'Preview' })).toBeVisible();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Your Job is Post Successfully!' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();


    const jobCount = page.locator('span.text-lg').filter({
        hasText: 'Jobs Found'
    }).first();

    await jobCount.evaluate((element) => {
        element.style.display = 'inline-block';
        element.style.borderBottom = '5px solid red';
        element.style.paddingBottom = '8px';
    });


    screenshot = await page.screenshot();
    await test.info().attach('After Adding Jobs', {
        body: screenshot,
        contentType: 'image/png'
    })

});
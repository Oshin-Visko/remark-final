import { test, expect } from "@playwright/test";

import { companyName } from '../../AA OPEN THIS FIRST';
import { emailAddress } from '../../AA OPEN THIS FIRST';
import { mobileNumber } from '../../AA OPEN THIS FIRST';

let screenshot;

test('Check that user is able to add new company', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/manage-companies');


  screenshot = await page.screenshot();
  await test.info().attach('Before Adding Company', {
    body: screenshot,
    contentType: 'image/png'
  })

  await expect(page.getByRole('button', { name: 'Add Company' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Company' }).click();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);
  await page.getByRole('textbox', { name: 'Enter business email' }).click();
  await page.getByRole('textbox', { name: 'Enter business email' }).fill(emailAddress);
  await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill(mobileNumber);
  await page.getByRole('textbox', { name: 'Select State' }).click();
  await page.getByText('Madhya Pradesh', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Select City' }).click();
  await page.getByText('Indore', { exact: true }).click();

  await page.getByRole('textbox', { name: 'Company description (maximum' }).click();
  await page.getByRole('textbox', { name: 'Company description (maximum' }).fill('Hello World ');
  await page.getByRole('textbox', { name: 'Company description (maximum' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Company description (maximum' }).press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Company description (maximum' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Company description (maximum' }).fill('Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ');
  await page.getByRole('textbox', { name: 'Enter address' }).click();
  await page.getByRole('textbox', { name: 'Enter address' }).fill('Hello World Hello World Hello World Hello World ');

  await expect(page.getByText('Browse Logo')).toBeVisible();
  await page.getByText('Browse Logo').click();
  await page.getByLabel('Browse Logo').setInputFiles('./ManageCompany_logo/images (3).jpeg');


  await expect(page.getByRole('button', { name: 'Add a new company' })).toBeVisible();
  await page.getByRole('button', { name: 'Add a new company' }).click();

  await page.waitForTimeout(3000);

  const companyCount = page.getByText(/companies found/);

  await companyCount.evaluate((element) => {
    element.style.display = 'inline-block';
    element.style.borderBottom = '5px solid red';
    element.style.paddingBottom = '8px';
  });

  screenshot = await page.screenshot();

  await test.info().attach('After Adding company', {
    body: screenshot,
    contentType: 'image/png'
  })

});
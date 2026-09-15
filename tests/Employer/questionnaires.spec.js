import { test, expect } from "@playwright/test";

let screenshot;

test('Verify that user is able to create Questionnaires', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/questionnaires')
  await expect(page.getByRole('button', { name: 'ai Features' })).toBeVisible();
  await page.getByRole('button', { name: 'Create Manually' }).click();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Questionnaire Title' }).click();
  await page.getByRole('textbox', { name: 'Questionnaire Title' }).fill('Test');
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('0');
  await page.getByRole('textbox', { name: 'Enter your question here...' }).click();
  await page.getByRole('textbox', { name: 'Enter your question here...' }).fill('Test');
  await page.getByRole('textbox', { name: 'Option' }).first().click();
  await page.getByRole('textbox', { name: 'Option' }).first().fill('Test 1');
  await page.getByRole('textbox', { name: 'Option' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Option' }).nth(1).fill('Test 2');
  await page.getByRole('textbox', { name: 'Option' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Option' }).nth(2).fill('Test 3');
  await page.getByRole('textbox', { name: 'Option' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Option' }).nth(3).fill('Test 4');
  await page.getByRole('textbox', { name: 'Option' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(1000);

  screenshot = await page.screenshot();
  test.info().attach('Create Questionnaires', {
    body: screenshot,
    contentType: 'image/png'
  })

})

test('Check that user is able to "View" the existing Questionnaires', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/questionnaires');
  await expect(page.getByRole('button', { name: 'ai Features' })).toBeVisible();
  await page.getByRole('button', { name: 'View' }).first().click();
  await expect(page.getByRole('heading', { name: 'View-Questions' })).toBeVisible();
  await page.waitForTimeout(1000);

  screenshot = await page.screenshot();
  test.info().attach('View Questionnaires', {
    body: screenshot,
    contentType: 'image/png'
  })
});
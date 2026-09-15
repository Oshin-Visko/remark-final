import { test, expect } from '@playwright/test';


test('Verify that user is able to use AI Mock Interview', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employee/mock-interview');
  await expect(page.getByRole('heading', { name: 'AI Mock Interview' })).toBeVisible();
  await expect(page.getByRole('button', { name: '+ Start New Mock Interview' })).toBeVisible();
  await page.getByRole('button', { name: '+ Start New Mock Interview' }).click();
    await page.waitForLoadState('networkidle');
  await expect(page.getByText('Question 1', { exact: true })).toBeVisible();
  await page.waitForLoadState('networkidle');
  await page.getByRole('textbox', { name: 'Please type your response or' }).click();
  await page.getByRole('textbox', { name: 'Please type your response or' }).fill('Hello this is a automation test.');
  await expect(page.getByRole('button', { name: 'Next Question' })).toBeVisible();
  await page.getByRole('button', { name: 'Next Question' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  await expect(page.getByText('Question 2', { exact: true })).toBeVisible({timeout:6000});
  // await page.waitForTimeout(1500);
  await expect(page.getByRole('button', { name: 'Exit' })).toBeVisible();
  await page.getByRole('button', { name: 'Exit' }).click({force:true});
  await page.waitForTimeout(3000);
  await expect(page.getByRole('button', { name: 'Exit Interview' })).toBeVisible();
  await page.getByRole('button', { name: 'Exit Interview' }).click();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Interview Complete!' })).toBeVisible();
  await page.getByRole('button', { name: 'Retake Interview' }).click();
});
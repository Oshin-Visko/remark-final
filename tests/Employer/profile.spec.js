import { test, expect } from '@playwright/test';

import {profileUpdateURL} from '../../AA OPEN THIS FIRST';



test('Verify that profile page loads successfully', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/profile')
    await expect(page.getByRole('heading', { name: 'Welcome, XYZ!' })).toBeVisible();
    await expect(page.getByRole('heading', { name: ' Company Details' })).toBeVisible();
    await expect(page.getByRole('heading', { name: ' Documentation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Verification Complete' })).toBeVisible();
    await expect(page.getByRole('heading', { name: ' Notifications' })).toBeVisible();
});

test(`Check that user is able to 'Edit' profile successfully`, async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/profile')
    await expect(page.getByRole('link', { name: ' Edit Profile' })).toBeVisible();
    await page.getByRole('link', { name: ' Edit Profile' }).click();
    await expect(page.getByText('Organization Website')).toBeVisible();
    await page.locator('input[type="url"]').click();
    await page.locator('input[type="url"]').fill(profileUpdateURL);
    await expect(page.getByRole('button', { name: ' Update Profile' })).toBeVisible();
    await page.getByRole('button', { name: ' Update Profile' }).click();

})
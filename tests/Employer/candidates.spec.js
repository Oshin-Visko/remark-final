import { test, expect } from "@playwright/test";

let screenshot;

test('Saved Candidates', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/all-candidates')
    await page.waitForTimeout(2000);
    await expect(page.getByRole('button', { name: 'Saved Candidates' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Shortlisted Candidates' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Saved Candidates' })).toBeVisible();
    await expect(page.getByText('Total:')).toBeVisible();

    screenshot = await page.screenshot();
    await test.info().attach('Saved Candidates', {
        body: screenshot,
        contentType: 'image/png'
    })

})

test('Shortlisted Candidates', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/all-candidates')
    await page.getByRole('button', { name: 'Shortlisted Candidates' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: 'Shortlisted' })).toBeVisible();
    await expect(page.getByText('Total:')).toBeVisible();

    screenshot = await page.screenshot();
    await test.info().attach('Shortlisted Candidates', {
        body: screenshot,
        contentType: 'image/png'
    })

})

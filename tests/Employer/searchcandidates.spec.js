import { test, expect } from "@playwright/test";

let screenshot;

test('Search Candidates', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/search-candidates')
    await page.getByRole('textbox', { name: 'e.g. Graphics Designer,' }).click();
    await page.getByRole('textbox', { name: 'e.g. Graphics Designer,' }).fill('Sales');
    await page.getByRole('textbox', { name: 'e.g. Graphics Designer,' }).press('Enter');
    await expect(page.getByRole('button', { name: 'Search Candidates' })).toBeVisible();
    await page.getByRole('button', { name: 'Search Candidates' }).click();
    await expect(page.getByRole('heading', { name: 'Modify Your Search' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
    await expect(page.getByRole('columnheader').filter({ hasText: /^$/ })).toBeVisible();
    await page.getByRole('row', { name: 'Name / Profile Experience' }).getByRole('checkbox').check();
    await expect(page.getByRole('button', { name: 'Send Email' })).toBeVisible();

    await page.waitForTimeout(1000);

    screenshot = await page.screenshot();
    await test.info().attach('Search Candidates', {
        body: screenshot,
        contentType: 'image/png',
    })

})
import { test, expect } from "@playwright/test";

let screenshot;

test('Verify that user is able to logout successfully', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/profile')
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForTimeout(4000);

    screenshot = await page.screenshot();
    test.info().attach('Logged Out Successfully', {
        body:screenshot,
        contentType: 'image/png'
    })
})
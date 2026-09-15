import { test, expect } from "@playwright/test";

let screenshot;

test('Subscription', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/employer-subscription')
    await expect(page.getByRole('heading', { name: 'My Subscription' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payment History' })).toBeVisible();

    await page.waitForTimeout(1000);
    screenshot = await page.screenshot();
    test.info().attach('Subscription', {
        body:screenshot,
        contentType: 'image/png',
    })
})
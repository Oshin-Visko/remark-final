import { test, expect } from "@playwright/test";

test('Subscription', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/employer-subscription')
    await expect(page.getByRole('heading', { name: 'My Subscription' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payment History' })).toBeVisible();
})
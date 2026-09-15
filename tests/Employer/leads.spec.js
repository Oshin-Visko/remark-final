import {test,expect} from "@playwright/test";

test('Leads', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/leads')
    await expect(page.getByRole('columnheader', { name: 'Keywords Job search terms' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Contact Details Mobile No./' })).toBeVisible();
})

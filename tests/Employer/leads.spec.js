import {test,expect} from "@playwright/test";

let screenshot;

test('Leads', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/leads')
    await expect(page.getByRole('columnheader', { name: 'Keywords Job search terms' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Contact Details Mobile No./' })).toBeVisible();

    screenshot = await page.screenshot();
    test.info().attach('Leads', {
        body:screenshot,
        contentType: 'image/png'
    })
})

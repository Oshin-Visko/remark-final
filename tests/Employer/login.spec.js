import { test, expect } from "@playwright/test";

let screenshot;

test.use({ storageState: { cookies: [], origins: [] } }); // ignore auth.json, start blank


test('Verify that user is able to login successfully', async ({ page }) => {
    await page.goto('https://remarkhr.com/employer')
    await page.waitForTimeout(3000);

    screenshot = await page.screenshot();
    test.info().attach('Before', {
        body:screenshot,
        contentType: 'image/png'
    })

    await expect(page.getByRole('button', { name: 'ai Features' })).toBeVisible();
    await page.getByRole('button', { name: 'x' }).click();
    await page.getByRole('textbox', { name: 'Email or mobile number' }).click();
    await page.getByRole('textbox', { name: 'Email or mobile number' }).fill('8888888888');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Welcome, XYZ!' })).toBeVisible();
     
    screenshot = await page.screenshot();
    test.info().attach('Before', {
        body:screenshot,
        contentType: 'image/png'
    })
});
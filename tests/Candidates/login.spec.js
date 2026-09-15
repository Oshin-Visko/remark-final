import { test, expect } from "@playwright/test";

let screenshot;

test.use({ storageState: { cookies: [], origins: [] } }); // ignore auth.json, start blank

test('Verify that user is able to login succesfully', async ({ page }) => {
    await page.goto('https://remarkhr.com/login')

    await page.waitForTimeout(1000);
    screenshot = await page.screenshot();
    test.info().attach('Before Login', {
        body: screenshot,
        contentType: 'image/png'
    })

    await expect(page.getByRole('button', { name: 'ai Features' })).toBeVisible();
    await page.getByRole('button', { name: 'Close app download card' }).click();
    await page.getByRole('textbox', { name: 'Email or mobile number' }).click();
    await page.getByRole('textbox', { name: 'Email or mobile number' }).fill('7777777777');
    await page.getByRole('button', { name: 'Login with OTP' }).click();
    await expect(page.getByRole('heading', { name: 'Enter Verification Code' })).toBeVisible();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('9');
    await page.waitForTimeout(500);
    await page.getByRole('textbox').nth(3).fill('9');
    await page.waitForTimeout(500);
    await page.getByRole('textbox').nth(4).fill('9');
    await page.waitForTimeout(500);
    await page.getByRole('textbox').nth(5).fill('9');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Verify OTP' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByText('Profile').nth(3)).toBeVisible();

    await page.waitForTimeout(1000);
    screenshot = await page.screenshot();
    test.info().attach('After Login', {
        body: screenshot,
        contentType: 'image/png'
    })
})


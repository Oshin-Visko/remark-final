import test from "@playwright/test";

let screenshot;

test('Conversation', async ({ page }) => {
    await page.goto('https://remarkhr.com/profile/employer/conversation');
    await page.waitForTimeout(3000);

    await page.locator('div').filter({ hasText: /^Jho Doe New$/ }).nth(1).click();

    await page.getByRole('textbox', { name: 'Type your message...' }).click();
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('Hi');
    await page.getByRole('button').nth(3).click();

    screenshot = await page.screenshot();
    await test.info().attach('Chats', {
        body: screenshot,
        contentType: 'image/png'
    })
});
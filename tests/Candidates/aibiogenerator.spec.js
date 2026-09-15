import {test , expect} from "@playwright/test";

let screenshot;


test('Verify that AI Bio Generator working fine.', async ({ page }) => {
  await page.goto('https://remarkhr.com/ai-tools/resume-summary-generator');
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Current profile / role' }).click();
  await page.getByRole('textbox', { name: 'Current profile / role' }).fill('Sales Executive');
  await page.getByRole('textbox', { name: 'Mobile number' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9856732779');
  await page.getByRole('textbox', { name: 'Years of experience' }).click();
  await page.getByRole('textbox', { name: 'Years of experience' }).fill('5');
  await page.getByRole('textbox', { name: 'Key skills' }).click();
  await page.getByRole('textbox', { name: 'Key skills' }).fill('HTML , CSS , JavaScript');
  await page.getByRole('checkbox', { name: 'By proceeding, I confirm that' }).check();
  await expect(page.getByRole('button', { name: 'Generate summary' })).toBeVisible({timeout:120000});
  await page.getByRole('button', { name: 'Generate summary' }).click();
  await expect(page.getByText('Generated summary')).toBeVisible({timeout:120000});
  await expect(page.getByRole('button', { name: 'Regenerate' })).toBeVisible({timeout:120000});
  await page.getByRole('button', { name: 'Regenerate' }).click();
  await expect(page.getByText('Generated summary')).toBeVisible({timeout:120000});

  await page.waitForTimeout(1000);
  screenshot = await page.screenshot();
  test.info().attach('AI Bio Generator' , {
    body:screenshot,
    contentType: 'image/png',
  })
  
});
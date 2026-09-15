import { test, expect } from '@playwright/test';

test('Auto Fill - Use My Profile', async ({ page }) => {
  await page.goto('https://remarkhr.com/ai-tools/resume-builder');
  await page.getByRole('button', { name: 'Auto Fill Use My Profile Your' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Choose a Template' })).toBeVisible();
  await page.locator('div:nth-child(20) > .rb-tpl-img-wrap > .rb-tpl-overlay').click();
  await expect(page.getByRole('button', { name: 'Generate Resume' })).toBeVisible();
  await page.getByRole('button', { name: 'Generate Resume' }).click();

  const confirmtext = page.getByRole('heading', { name: 'Resume Generated!' });
  await expect(confirmtext).toBeVisible({timeout: 120000});

  await test.info().attach('Resume Generated', {
    body: await page.screenshot(),
    contentType: 'image/png',
});

});


test('Custom Data - Fill the form', async ({ page }) => {
  await page.goto('https://remarkhr.com/ai-tools/resume-builder');
  await page.getByRole('button', { name: 'Custom Data Fill the Form' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Change method' })).toBeVisible();
  await page.getByRole('textbox', { name: 'e.g., Rahul Sharma' }).click();
  await page.getByRole('textbox', { name: 'e.g., Rahul Sharma' }).fill('Test User');
  await page.getByRole('textbox', { name: 'you@example.com' }).click();
  await page.getByRole('textbox', { name: 'you@example.com' }).fill('testremarkhr@mailinator.com');
  await page.getByRole('textbox', { name: '-digit number' }).click();
  await page.getByRole('textbox', { name: '-digit number' }).fill('7777777777');
  await page.getByRole('combobox').first().selectOption('male');
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('combobox').nth(1).fill('mad');
  await page.getByRole('option', { name: 'Madhya Pradesh' }).click();
  await expect(page.getByRole('combobox', { name: 'Madhya Pradesh' }).first()).toBeVisible();
  await page.getByRole('combobox', { name: 'Madhya Pradesh' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Madhya Pradesh' }).nth(1).fill('indo');
  await page.getByRole('option', { name: 'Indore' }).click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await expect(page.getByRole('heading', { name: 'Professional Details' })).toBeVisible();
  await page.getByRole('textbox', { name: 'e.g., Full Stack Developer' }).click();
  await page.getByRole('textbox', { name: 'e.g., Full Stack Developer' }).fill('Sales Executive');
  await page.getByRole('textbox', { name: 'Brief summary about yourself' }).click();
  await page.getByRole('textbox', { name: 'Brief summary about yourself' }).fill('Hello, I\'m a Test User with having 5 years of exp in Sales Executive Role.');
  await page.getByRole('button', { name: 'Next Step' }).click();
  await expect(page.getByRole('heading', { name: 'Skills & Languages' })).toBeVisible();
  await page.getByRole('textbox', { name: 'e.g., React, Node.js, Python' }).click();
  await page.getByRole('textbox', { name: 'e.g., React, Node.js, Python' }).fill('HTML');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Add$/ }).first().click();
  await page.getByRole('textbox', { name: 'e.g., React, Node.js, Python' }).fill('CSS');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByRole('textbox', { name: 'e.g., React, Node.js, Python' }).click();
  await page.getByRole('textbox', { name: 'e.g., React, Node.js, Python' }).fill('Python');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByRole('textbox', { name: 'e.g., Hindi, English, Marathi' }).click();
  await page.getByRole('textbox', { name: 'e.g., Hindi, English, Marathi' }).fill('Hindi');
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('textbox', { name: 'e.g., Hindi, English, Marathi' }).click();
  await page.getByRole('textbox', { name: 'e.g., Hindi, English, Marathi' }).fill('English');
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await expect(page.getByRole('heading', { name: 'Education *' })).toBeVisible();
  await page.getByRole('textbox', { name: 'e.g., B.Tech, MBA' }).click();
  await page.getByRole('textbox', { name: 'e.g., B.Tech, MBA' }).fill('BA');
  await page.getByRole('textbox', { name: 'e.g., Computer Science' }).click();
  await page.getByRole('textbox', { name: 'e.g., Computer Science' }).fill('ME');
  await page.getByRole('textbox', { name: 'Institution name' }).click();
  await page.getByRole('textbox', { name: 'Institution name' }).fill('DAVV');
  await page.getByRole('spinbutton', { name: '2024' }).click();
  await page.getByRole('spinbutton', { name: '2024' }).fill('2025');
  await page.getByRole('button', { name: 'Add Education' }).click();
  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.getByRole('button', { name: 'Next Step' }).click();
  await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
  await page.getByRole('button', { name: 'Choose Template' }).click();
  await expect(page.getByRole('button', { name: 'Back to form' })).toBeVisible();
  await page.locator('div:nth-child(20) > .rb-tpl-img-wrap > .rb-tpl-overlay').click();
   
  await expect(page.getByRole('button', { name: 'Generate Resume' })).toBeVisible();
  await page.getByRole('button', { name: 'Generate Resume' }).click();
  const confirmtext = page.getByRole('heading', { name: 'Resume Generated!' });
  await expect(confirmtext).toBeVisible({timeout: 120000});

  await test.info().attach('Custom - Resume Generated', {
    body: await page.screenshot(),
    contentType: 'image/png',
});


});